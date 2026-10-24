import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Send,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  PhoneCall,
  Loader2,
  Copy,
  ExternalLink,
  Info
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolio';

export const Contact: React.FC = () => {
  const { personal, emailJsConfig } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error' | 'info' | null;
    text: string;
  }>({ type: null, text: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Check if EmailJS keys are populated
  const isEmailJsConfigured = Boolean(
    emailJsConfig.serviceId &&
    emailJsConfig.templateId &&
    emailJsConfig.publicKey &&
    emailJsConfig.serviceId !== 'your_emailjs_service_id'
  );

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please specify a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setStatusMessage({ type: null, text: '' });

    // If EmailJS credentials are provided in env, use EmailJS
    if (isEmailJsConfigured) {
      try {
        await emailjs.send(
          emailJsConfig.serviceId,
          emailJsConfig.templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_name: personal.name,
          },
          emailJsConfig.publicKey
        );

        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.8 },
          colors: ['#8b5cf6', '#06b6d4', '#ec4899'],
        });

        setStatusMessage({
          type: 'success',
          text: 'Thank you! Your message has been sent successfully.',
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } catch (err: unknown) {
        console.error('EmailJS error:', err);
        setStatusMessage({
          type: 'error',
          text: 'Message transmission failed. Please use the direct email link or copy my email address below.',
        });
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Setup Mode / Fallback: trigger client mailto and inform the user
      setIsSubmitting(false);

      const mailtoUrl = `mailto:${personal.email}?subject=${encodeURIComponent(
        `[Portfolio] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Hi ${personal.name},\n\nFrom: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;

      window.open(mailtoUrl, '_blank');

      setStatusMessage({
        type: 'info',
        text: 'Opening your default email client with your pre-filled message. (EmailJS keys not yet configured in .env).',
      });
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 w-full overflow-hidden bg-space-950/80">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-electric-violet/10 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-electric-cyan/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-space-900 border border-electric-cyan/30 text-electric-cyan text-xs font-mono uppercase tracking-widest mb-4"
          >
            <Send className="w-3.5 h-3.5" />
            <span>06 // INITIATE TRANSMISSION</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Let's Start A{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-violet to-electric-cyan">
              Conversation
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-400 text-sm sm:text-base max-w-2xl leading-relaxed"
          >
            Have a project in mind, an opportunity to discuss, or just want to chat about AI-assisted web development? Reach out through the form or my social channels.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info & Social Hub */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Quick Contact Card */}
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.08] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-electric-cyan/15 to-transparent rounded-bl-full pointer-events-none" />

              <h3 className="font-heading font-bold text-white text-xl mb-2">
                Direct Communication
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                I prioritize responding within 24-48 hours. Feel free to reach out directly via email or social networks.
              </p>

              {/* Email Copier */}
              <div className="p-3.5 rounded-xl bg-space-950/90 border border-white/[0.08] flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-5 h-5 text-electric-cyan shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-slate-200 truncate">
                    {personal.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="px-2.5 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors shrink-0"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Channels List */}
              <div className="space-y-3">
                <span className="text-[11px] font-mono uppercase text-slate-400 tracking-wider block">
                  Find Me Online:
                </span>

                <div className="flex flex-col gap-2">
                  <a
                    href={personal.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-electric-violet/40 transition-all text-xs text-slate-300 hover:text-white group"
                  >
                    <div className="flex items-center gap-2.5">
                      <GithubIcon className="w-4 h-4 text-slate-400 group-hover:text-white" />
                      <span>GitHub Profile</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-electric-cyan transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-electric-cyan/40 transition-all text-xs text-slate-300 hover:text-white group"
                  >
                    <div className="flex items-center gap-2.5">
                      <LinkedinIcon className="w-4 h-4 text-electric-cyan" />
                      <span>LinkedIn Network</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-electric-cyan transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>

                  {personal.whatsapp && (
                    <a
                      href={`https://wa.me/${personal.whatsapp.replace(/\D/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.06] hover:border-emerald-500/40 transition-all text-xs text-slate-300 hover:text-white group"
                    >
                      <div className="flex items-center gap-2.5">
                        <PhoneCall className="w-4 h-4 text-emerald-400" />
                        <span>WhatsApp Quick Chat</span>
                      </div>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* EmailJS Setup Notice (Helpful guide for developer customization) */}
            <div className="p-4 rounded-xl bg-space-900/60 border border-white/[0.06] text-xs text-slate-400 flex items-start gap-3">
              <Info className="w-4 h-4 text-electric-cyan shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-300 block mb-1">
                  Contact Form Readiness
                </span>
                {isEmailJsConfigured ? (
                  <span className="text-emerald-400 font-mono">
                    EmailJS live service connected via environment variables.
                  </span>
                ) : (
                  <span>
                    Direct <code className="text-electric-cyan">mailto:</code> fallback is enabled. To connect automated EmailJS sending, add your API keys to <code className="text-electric-violet">.env</code>.
                  </span>
                )}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-white/[0.08]"
          >
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Your Name <span className="text-electric-violet">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Morgan"
                    className={`w-full px-4 py-3 rounded-xl bg-space-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-white/[0.08] focus:border-electric-cyan'
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                    Email Address <span className="text-electric-violet">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-space-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-white/[0.08] focus:border-electric-cyan'
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  Subject <span className="text-electric-violet">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Website Project Inquiry / Collaboration"
                  className={`w-full px-4 py-3 rounded-xl bg-space-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                    errors.subject
                      ? 'border-red-500 focus:border-red-400'
                      : 'border-white/[0.08] focus:border-electric-cyan'
                  }`}
                />
                {errors.subject && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
                  Message <span className="text-electric-violet">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, goals, or questions..."
                  className={`w-full px-4 py-3 rounded-xl bg-space-950/80 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors resize-none ${
                    errors.message
                      ? 'border-red-500 focus:border-red-400'
                      : 'border-white/[0.08] focus:border-electric-cyan'
                  }`}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Status Message Alert */}
              {statusMessage.type && (
                <div
                  className={`p-4 rounded-xl text-xs flex items-start gap-3 ${
                    statusMessage.type === 'success'
                      ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300'
                      : statusMessage.type === 'error'
                      ? 'bg-red-500/15 border border-red-500/30 text-red-300'
                      : 'bg-electric-cyan/15 border border-electric-cyan/30 text-cyan-200'
                  }`}
                >
                  {statusMessage.type === 'success' && <CheckCircle className="w-4 h-4 shrink-0" />}
                  {statusMessage.type === 'error' && <AlertCircle className="w-4 h-4 shrink-0" />}
                  {statusMessage.type === 'info' && <MessageSquare className="w-4 h-4 shrink-0" />}
                  <span>{statusMessage.text}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-electric-violet to-electric-cyan text-white text-sm font-semibold shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

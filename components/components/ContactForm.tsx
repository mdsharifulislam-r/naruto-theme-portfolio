import React from 'react'
import { motion } from 'framer-motion'
export default function ContactForm({handFunc, loading,sent}:{handFunc:any, loading:boolean,sent:boolean}) {
  return (
             <form onSubmit={handFunc} className="flex flex-col gap-5">
            {[
              { label: 'Your Name',      type: 'text',  name: 'name',    placeholder: 'Enter your name...' },
              { label: 'Email Address',  type: 'email', name: 'email',   placeholder: 'your@email.com'     },
            ].map(field => (
              <div key={field.name}>
                <label className="block font-mono text-[10px] text-ninja-muted tracking-[3px] uppercase mb-2">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required
                  data-hover
                  className="w-full bg-ninja-card border border-ninja-border text-ninja-text placeholder-ninja-muted/40 px-4 py-3 font-rajdhani text-base outline-none focus:border-ninja-orange focus:shadow-[0_0_0_1px_rgba(255,110,26,0.2)] transition-all duration-300 clip-angled-sm"
                />
              </div>
            ))}

            <div>
              <label className="block font-mono text-[10px] text-ninja-muted tracking-[3px] uppercase mb-2">
                Mission Brief
              </label>
              <textarea
                name="message"
                placeholder="Describe your project or inquiry..."
                rows={5}
                data-hover
                className="w-full bg-ninja-card border border-ninja-border text-ninja-text placeholder-ninja-muted/40 px-4 py-3 font-rajdhani text-base outline-none focus:border-ninja-orange focus:shadow-[0_0_0_1px_rgba(255,110,26,0.2)] transition-all duration-300 resize-y clip-angled-sm"
              />
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                data-hover
                disabled={loading}
                className="clip-angled bg-ninja-orange text-black font-bold text-sm tracking-[2px] uppercase px-8 py-3 hover:shadow-orange-glow transition-all duration-300 relative overflow-hidden group disabled:opacity-70"
              >
                <span className="relative z-10">
                  {loading ? '⟳ Sending...' : '⚡ Send Transmission'}
                </span>
                <span className="absolute inset-0 bg-white/20 translate-x-[-110%] skew-x-[-20deg] group-hover:translate-x-[200%] transition-transform duration-500" />
              </button>

              {sent && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="font-mono text-xs text-ninja-orange tracking-[2px]"
                >
                  ✓ TRANSMISSION SENT
                </motion.div>
              )}
            </div>
          </form>
  )
}

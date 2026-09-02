import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Globe, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function WebsiteModal({ client, onClose }) {
  if (!client) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative w-full max-w-lg rounded-3xl bg-[#141414] border border-white/10 p-6 sm:p-8 shadow-2xl space-y-6"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-4">
            <img
              src={client.avatar}
              alt={client.author}
              className="w-14 h-14 rounded-full object-cover border-2 border-emerald-500/50 shadow-md"
            />
            <div>
              <h3 className="text-xl font-bold text-white">{client.author}</h3>
              <p className="text-xs text-emerald-400 font-semibold">{client.role}</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#0a0a0a] border border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs text-gray-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <ShieldCheck className="w-4 h-4" />
                Verified GoArrow Client Case
              </span>
              <span className="font-mono text-gray-500">2026 Case Study</span>
            </div>
            <h4 className="text-base font-bold text-white leading-snug">"{client.headline}"</h4>
            <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed">"{client.quote}"</p>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Globe className="w-5 h-5 text-emerald-400" />
              <div>
                <div className="text-xs text-gray-400">Client Domain</div>
                <div className="text-sm font-bold text-white font-mono">{client.website}</div>
              </div>
            </div>
            <a
              href={`https://${client.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center gap-1.5 shadow-lg"
            >
              <span>Visit Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            onClick={onClose}
            className="w-full py-3 rounded-full bg-[#1e1e1e] hover:bg-[#282828] text-gray-300 font-medium text-sm"
          >
            Close Window
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

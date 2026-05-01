'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const HF_URL = process.env.NEXT_PUBLIC_HF_SPACE_URL ?? '';

interface Msg { role: 'bot' | 'user'; text: string; }

const WELCOME: Msg = { role: 'bot', text: "Hi! I'm Ullas's AI assistant powered by a RAG pipeline. Ask me about his projects, skills, or experience." };

export function ChatBot() {
  const [open, setOpen]       = useState(false);
  const [msgs, setMsgs]       = useState<Msg[]>([WELCOME]);
  const [input, setInput]     = useState('');
  const [busy, setBusy]       = useState(false);
  const bottomRef             = useRef<HTMLDivElement>(null);

  useEffect(() => { bottomRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [msgs, busy]);

  async function send() {
    const q = input.trim();
    if (!q || busy) return;
    setInput('');
    setMsgs(m => [...m, { role: 'user', text: q }]);
    setBusy(true);
    try {
      if (!HF_URL) throw new Error('no_backend');
      const res  = await fetch(`${HF_URL}/ask`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ question: q }) });
      const data = await res.json();
      setMsgs(m => [...m, { role: 'bot', text: data.answer ?? 'No answer found.' }]);
    } catch {
      setMsgs(m => [...m, { role: 'bot', text: 'RAG backend not connected yet — set NEXT_PUBLIC_HF_SPACE_URL in .env.local to wire it up.' }]);
    } finally { setBusy(false); }
  }

  return (
    <>
      {/* Chat window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: 'fixed', bottom: '6rem', right: '1.5rem', zIndex: 50, width: '340px', maxHeight: '520px', display: 'flex', flexDirection: 'column', borderRadius: '1.25rem', border: '1px solid rgba(141,153,174,0.22)', background: 'rgba(19,20,31,0.97)', backdropFilter: 'blur(28px)', boxShadow: '0 32px 80px -16px rgba(0,0,0,0.7)' }}
          >
            {/* header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.25rem', borderBottom: '1px solid rgba(141,153,174,0.14)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'var(--c-red)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <MessageCircle style={{ width: 16, height: 16, color: 'white' }} />
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-syne)', fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-1)', margin: 0 }}>Ullas AI</p>
                  <p className="mono" style={{ fontSize: '0.68rem', color: 'var(--c-lavender)', margin: 0, display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                    RAG · LangChain
                  </p>
                </div>
              </div>
              <button onClick={() => setOpen(false)} style={{ width: '30px', height: '30px', borderRadius: '50%', border: 'none', background: 'rgba(255,255,255,0.07)', color: 'var(--text-3)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <X style={{ width: 14, height: 14 }} />
              </button>
            </div>

            {/* messages */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.65rem', maxHeight: '340px' }}>
              {msgs.map((m, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start' }}>
                  <div style={{ maxWidth: '85%', padding: '0.65rem 0.9rem', fontSize: '0.875rem', lineHeight: 1.65, ...(m.role === 'user' ? { background: 'var(--c-red)', color: 'var(--c-platinum)', borderRadius: '1rem 1rem 0.2rem 1rem' } : { background: 'rgba(43,45,66,0.7)', border: '1px solid rgba(141,153,174,0.16)', color: 'var(--text-2)', borderRadius: '1rem 1rem 1rem 0.2rem' }) }}>
                    {m.text}
                  </div>
                </div>
              ))}
              {busy && (
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <div style={{ padding: '0.65rem 0.9rem', background: 'rgba(43,45,66,0.7)', border: '1px solid rgba(141,153,174,0.16)', borderRadius: '1rem 1rem 1rem 0.2rem', display: 'flex', gap: '4px', alignItems: 'center' }}>
                    {[0,1,2].map(d => (
                      <motion.span key={d} style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--c-lavender)', display: 'block' }}
                        animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.2, repeat: Infinity, delay: d * 0.2 }} />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* input */}
            <div style={{ padding: '0.75rem 1rem', borderTop: '1px solid rgba(141,153,174,0.14)', display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
              <input value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} disabled={busy} placeholder="Ask Ullas AI…"
                style={{ flex: 1, padding: '0.5rem 0.9rem', borderRadius: '999px', border: '1px solid rgba(141,153,174,0.22)', background: 'rgba(43,45,66,0.5)', color: 'var(--text-1)', fontSize: '0.875rem', outline: 'none' }} />
              <button onClick={send} disabled={busy || !input.trim()} style={{ width: '36px', height: '36px', borderRadius: '50%', border: 'none', background: 'var(--c-red)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0, opacity: (busy || !input.trim()) ? 0.45 : 1 }}>
                <Send style={{ width: 14, height: 14 }} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <div style={{ position: 'fixed', bottom: '1.5rem', right: '1.5rem', zIndex: 50, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
        <AnimatePresence>
          {!open && (
            <motion.div initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 4 }} transition={{ duration: 0.15 }}
              style={{ padding: '0.3rem 0.8rem', borderRadius: '999px', background: 'rgba(43,45,66,0.92)', border: '1px solid rgba(141,153,174,0.2)', backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#22c55e' }} />
              <span className="mono" style={{ fontSize: '0.72rem', color: 'var(--c-lavender)' }}>Ullas AI</span>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.94 }} onClick={() => setOpen(p => !p)} aria-label={open ? 'Close chat' : 'Open Ullas AI'}
          style={{ width: '3.25rem', height: '3.25rem', borderRadius: '50%', border: 'none', background: open ? 'var(--c-red-dark)' : 'var(--c-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 0 0 4px rgba(239,35,60,0.18), 0 8px 32px rgba(239,35,60,0.35)' }}>
          <AnimatePresence mode="wait">
            {open
              ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}><X style={{ width: 22, height: 22, color: 'white' }} /></motion.div>
              : <motion.div key="msg" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}><MessageCircle style={{ width: 22, height: 22, color: 'white' }} /></motion.div>
            }
          </AnimatePresence>
        </motion.button>
      </div>
    </>
  );
}

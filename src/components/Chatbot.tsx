/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

interface Message {
  role: 'user' | 'model';
  text: string;
}

const SYSTEM_PROMPT = `
You are the AI Assistant for Imad Essarti's portfolio. 
Your goal is to answer questions about Imad Essarti strictly based on the provided information.
Be professional, friendly, and helpful. If a question is not related to Imad or his portfolio, politely steer the conversation back.

Information about Imad Essarti:
- Name: Imad Essarti
- Profile: Étudiant motivé, dynamique et responsable, cherchant à développer ses compétences et contribuer à des projets à impact.
- Education: Mundiapolis University, Casablanca (1ACP - Année préparatoire).
- Skills: Communication, travail d'équipe, Leadership, Prise de parole en public, Gestion du temps, Esprit d'initiative, Adaptabilité.
- Experience:
  1. AIESEC: Membre & UBA, gestion de projets d'équipe, leadership, organisation d'événements.
  2. Association AMEJ (Dar Chabab): Bénévole, activités sociales et communautaires, organisation d'événements locaux.
  3. Erasmus+ (Marrakech): Participant à un échange avec des jeunes finlandais, ateliers interculturels.
- Languages: Arabe (maternelle), Français (bon niveau), Anglais (bon niveau).
- Certifications: Baccalauréat (PC), Youthpass, United4Change.
- Interests: Leadership, Bénévolat, Échanges culturels, Développement personnel, Voyages.
- Contact: +212 705 397 773, essartiimad1909@gmail.com, Casablanca, Maroc.

Guidelines:
- Keep answers concise.
- Answer in French or English based on the user's language.
- Do not make up information.
`;

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Bonjour ! Je suis l'assistant d'Imad. Comment puis-je vous aider aujourd'hui ?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    const newMessages: Message[] = [...messages, { role: 'user', text: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      // Convert history to contents format
      const historyContents = newMessages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }],
      }));

      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: historyContents,
        config: {
          systemInstruction: SYSTEM_PROMPT,
        }
      });

      const responseText = response.text || "Désolé, je ne peux pas répondre à cela.";
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      console.error("Chatbot Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "Désolé, j'ai rencontré une erreur. Veuillez réessayer." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 w-[350px] h-[500px] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-blue-600 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-xl">
                  <Bot size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm">Assistant Imad</p>
                  <p className="text-[10px] text-blue-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    En ligne
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1.5 rounded-lg transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    m.role === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-slate-100 text-slate-700 rounded-tl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none">
                    <Loader2 size={16} className="animate-spin text-slate-400" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-slate-100 bg-slate-50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Posez une question..."
                  className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                />
                <button
                  onClick={handleSend}
                  disabled={isLoading}
                  className="p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-blue-600 text-white rounded-2xl shadow-xl flex items-center justify-center hover:bg-blue-700 transition-colors relative"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && (
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
        )}
      </motion.button>
    </div>
  );
};

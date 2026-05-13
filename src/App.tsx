/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Star, 
  Globe, 
  BarChart3,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  ArrowRight,
  Linkedin,
  Github,
  Instagram
} from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Chatbot } from './components/Chatbot';
import { AnimatedIllustration } from './components/AnimatedIllustration';

const personalInfo = [
  { icon: <Phone className="w-5 h-5 text-blue-600" />, label: "+212 705 397 773", href: "tel:+212705397773" },
  { icon: <Mail className="w-5 h-5 text-blue-600" />, label: "essartiimad1909@gmail.com", href: "mailto:essartiimad1909@gmail.com" },
  { icon: <MapPin className="w-5 h-5 text-blue-600" />, label: "Casablanca, Maroc", href: "#" },
];

const socialLinks = [
  { icon: <Linkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <Github size={20} />, href: "https://github.com", label: "GitHub" },
  { icon: <Instagram size={20} />, href: "https://instagram.com", label: "Instagram" },
];

const skills = [
  "Communication et travail d'équipe",
  "Leadership et sens des responsabilités",
  "Prise de parole en public",
  "Gestion du temps",
  "Esprit d'initiative",
  "Adaptabilité"
];

const experience = [
  {
    title: "Membre & UBA",
    company: "AIESEC",
    period: "Organisation Internationale",
    description: "Membre actif contribuant à des projets d'équipe et des activités de leadership à l'échelle internationale.",
    points: [
      "Gestion de projets d'équipe",
      "Développement du leadership",
      "Organisation d'événements culturels"
    ]
  },
  {
    title: "Bénévole",
    company: "Association AMEJ (Dar Chabab)",
    period: "Social & Communautaire",
    description: "Engagement dans des activités sociales pour soutenir le développement de la jeunesse locale.",
    points: [
      "Activités communautaires",
      "Organisation événementielle",
      "Communication d'équipe"
    ]
  },
  {
    title: "Participant",
    company: "Échange de jeunes Erasmus+",
    period: "Marrakech, Maroc",
    description: "Programme international d'échange culturel impliquant des jeunes finlandais et marocains.",
    points: [
      "Ateliers interculturels",
      "Ouverture internationale",
      "Travail d'équipe multiculturel"
    ]
  }
];

const certifications = [
  "Baccalauréat – Sciences Physiques et Chimie (Sc PC)",
  "Certification Youthpass",
  "Certification United4Change"
];

const SectionHeader = ({ icon, title, subtitle }: { icon: React.ReactNode, title: string, subtitle?: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="mb-12"
  >
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
        {icon}
      </div>
      <span className="text-sm font-bold uppercase tracking-widest text-blue-600/60 font-display">
        {subtitle || "Section"}
      </span>
    </div>
    <h2 className="text-3xl md:text-4xl font-bold font-display text-slate-900">{title}</h2>
  </motion.div>
);

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-blue-600 selection:text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-50 origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="font-display font-bold text-xl tracking-tight">IMAD<span className="text-blue-600">.</span></span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600 uppercase tracking-widest">
            <a href="#about" className="hover:text-blue-600 transition-colors">Profil</a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">Expériences</a>
            <a href="#skills" className="hover:text-blue-600 transition-colors">Compétences</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <a 
            href="mailto:essartiimad1909@gmail.com"
            className="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-blue-600 transition-all active:scale-95 flex items-center gap-2"
          >
            Hire Me <ArrowRight size={16} />
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="pt-32 pb-20 md:pt-52 md:pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Disponible pour projets
            </div>
            <h1 className="text-6xl md:text-8xl font-bold font-display leading-[0.9] tracking-tight mb-8">
              IMAD <br />
              ESSARTI<span className="text-blue-600">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-light max-w-lg mb-10 leading-relaxed uppercase tracking-wide">
              Étudiant <span className="text-slate-900 font-medium">motivé & engagé</span>, passionné par le leadership et l'impact social.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              {personalInfo.map((info, i) => (
                <a 
                  key={i}
                  href={info.href}
                  className="flex items-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-2xl hover:border-blue-300 hover:bg-blue-50/50 transition-all group"
                >
                  {info.icon}
                  <span className="text-sm font-medium text-slate-600 group-hover:text-blue-900">{info.label}</span>
                </a>
              ))}
            </div>

            <div className="flex items-center gap-6">
              {socialLinks.map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:text-blue-600 hover:bg-blue-50 transition-all"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 w-full max-w-[500px] mx-auto">
              <AnimatedIllustration />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50 -z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-50 -z-0"></div>
          </motion.div>
        </div>
      </header>

      {/* Profile Section */}
      <section id="about" className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader icon={<User size={20} />} title="Profil Professionnel" subtitle="À Propos" />
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-light text-slate-600 leading-snug"
            >
              Étudiant motivé, dynamique et responsable. Je cherche à <span className="text-slate-900 font-medium">développer mes compétences</span>, à contribuer à des projets à impact et à évoluer dans un environnement international et collaboratif.
            </motion.p>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm transition-transform hover:-translate-y-1">
                <div className="flex gap-4 mb-6">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold font-display text-xl">Formation Académique</h4>
                    <p className="text-slate-500 uppercase text-xs tracking-widest font-bold">Encours</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">Mundiapolis University</h3>
                <p className="text-blue-600 font-medium mb-1">Casablanca, Maroc</p>
                <p className="text-slate-600">1ACP (Année préparatoire)</p>
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <div className="h-px bg-slate-200 flex-1"></div>
                <Globe size={20} />
                <div className="h-px bg-slate-200 flex-1"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader icon={<Briefcase size={20} />} title="Parcours Associatif" subtitle="Expériences" />
          
          <div className="grid gap-8">
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col md:flex-row gap-8 p-8 md:p-12 bg-white border border-slate-200 rounded-[2.5rem] hover:border-blue-300 transition-all hover:shadow-xl hover:shadow-blue-900/5"
              >
                <div className="md:w-1/3">
                  <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">{exp.period}</span>
                  <h3 className="text-2xl font-bold font-display mt-2 mb-4 group-hover:text-blue-600 transition-colors uppercase tracking-tight leading-tight">
                    {exp.title}
                  </h3>
                  <div className="text-slate-900 font-bold text-lg border-l-4 border-blue-600 pl-4 py-1">
                    {exp.company}
                  </div>
                </div>
                <div className="md:w-2/3 flex flex-col justify-between">
                  <div>
                    <p className="text-slate-500 text-lg leading-relaxed mb-8">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {exp.points.map((point, j) => (
                        <span key={j} className="px-4 py-2 bg-slate-50 text-slate-600 text-sm font-medium rounded-full border border-slate-100 flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-blue-500" />
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Lang */}
      <section id="skills" className="py-24 bg-slate-950 text-white overflow-hidden relative">
        {/* Background glow effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20">
            <div>
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="p-2 bg-blue-600/20 text-blue-400 rounded-lg">
                  <BarChart3 size={20} />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-blue-400">Compétences</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-12">Expertise & <br />Soft Skills</h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm"
                  >
                    <ChevronRight size={18} className="text-blue-500 mb-3" />
                    <span className="font-medium text-slate-300 group-hover:text-white">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-end">
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="p-2 bg-indigo-600/20 text-indigo-400 rounded-lg">
                  <Globe size={20} />
                </div>
                <span className="text-sm font-bold uppercase tracking-widest text-indigo-400">Langues</span>
              </div>
              
              <div className="space-y-12">
                {[
                  { name: "Arabe", level: "Langue Maternelle", progress: 100 },
                  { name: "Français", level: "Bon Niveau", progress: 85 },
                  { name: "Anglais", level: "Bon Niveau", progress: 80 }
                ].map((lang, i) => (
                  <div key={i} className="space-y-4">
                    <div className="flex justify-between items-end">
                      <div>
                        <h4 className="text-2xl font-bold font-display uppercase tracking-tight">{lang.name}</h4>
                        <p className="text-indigo-400 font-medium text-xs tracking-widest uppercase mt-1">{lang.level}</p>
                      </div>
                      <span className="text-slate-500 font-mono text-sm">{lang.progress}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.progress}%` }}
                        transition={{ duration: 1, delay: i * 0.2 }}
                        className="h-full bg-gradient-to-r from-blue-600 to-indigo-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeader icon={<Award size={20} />} title="Certifications & Diplômes" subtitle="Reconnaissances" />
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 bg-white border border-slate-200 rounded-[2rem] flex flex-col justify-between group overflow-hidden relative"
              >
                <Award size={40} className="text-blue-100 group-hover:text-blue-200 absolute -bottom-4 -right-4 transition-colors" />
                <div className="relative z-10">
                  <CheckCircle2 className="text-blue-600 mb-6" size={24} />
                  <h4 className="font-bold text-lg text-slate-900 leading-tight">
                    {cert}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interests */}
          <div className="mt-20 pt-20 border-t border-slate-100">
            <div className="flex flex-wrap gap-4 items-center justify-center">
              <span className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em] w-full text-center mb-4">Centres d'intérêt</span>
              {[
                "Leadership des jeunes", "Bénévolat", "Échanges culturels", 
                "Développement personnel", "Voyages"
              ].map((interest, i) => (
                <div key={i} className="px-6 py-3 bg-slate-50 border border-slate-200 text-slate-600 font-medium rounded-full text-sm">
                  {interest}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-[#021d3e] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-8">
              Travaillons <br />
              ENSEMBLE<span className="text-blue-500">.</span>
            </h2>
            <p className="text-xl text-blue-200/60 font-light mb-12 max-w-xl mx-auto">
              Je suis toujours ouvert aux nouvelles opportunités d'apprentissage et de collaboration à impact social.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20">
              <a 
                href="mailto:essartiimad1909@gmail.com"
                className="w-full md:w-auto px-10 py-5 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-500 transition-all active:scale-95 flex items-center justify-center gap-3 shadow-lg shadow-blue-900/20"
              >
                Envoyer un Email <Mail size={20} />
              </a>
              <a 
                href="tel:+212705397773"
                className="w-full md:w-auto px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-slate-100 transition-all active:scale-95 flex items-center justify-center gap-3"
              >
                Appeler <Phone size={20} />
              </a>
            </div>

            <div className="flex gap-6 justify-center mb-12">
              {socialLinks.map((social, i) => (
                <a 
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 bg-white/5 border border-white/10 text-white/40 rounded-2xl hover:text-white hover:bg-white/10 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="pt-20 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-10">
              <span className="font-display font-bold text-2xl tracking-tighter">IMAD<span className="text-blue-500">.</span></span>
              <div className="flex gap-8 text-sm text-white/40 font-bold uppercase tracking-[0.2em]">
                <a href="#about" className="hover:text-white transition-colors">Profil</a>
                <a href="#experience" className="hover:text-white transition-colors">Parcours</a>
                <a href="#skills" className="hover:text-white transition-colors">Expertise</a>
              </div>
              <p className="text-white/20 text-xs font-medium">
                © 2024 Imad Essarti. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </footer>
      <Chatbot />
    </div>
  );
}

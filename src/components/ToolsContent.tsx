import { motion } from "motion/react";
import { Calendar, Users, ExternalLink, Instagram, MessageCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function ToolsContent() {
  const { t, language } = useLanguage();

  return (
    <section id="tools" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900"
          >
            {t('tools.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-lg text-slate-600 leading-relaxed"
          >
            {t('tools.subtitle')}
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: language === 'he' ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`bg-white p-8 rounded-[40px] shadow-xl border border-slate-100 ${language === 'he' ? 'text-right' : 'text-left'}`}
          >
            <div className={`flex items-center gap-4 mb-8 ${language === 'he' ? 'flex-row' : 'flex-row-reverse justify-end'}`}>
              <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white">
                <Calendar size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{t('tools.schedule.title')}</h3>
            </div>
            <div className="rounded-3xl overflow-hidden border border-slate-200 mb-6">
              <img 
                src="/schedule.jpg" 
                alt="OPEN Schedule" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-slate-600 mb-6">
              {t('tools.schedule.desc')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: language === 'he' ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className={`bg-white p-8 rounded-[40px] shadow-xl border border-slate-100 ${language === 'he' ? 'text-right' : 'text-left'}`}>
              <div className={`flex items-center gap-4 mb-6 ${language === 'he' ? 'flex-row' : 'flex-row-reverse justify-end'}`}>
                <div className="w-12 h-12 rounded-2xl bg-cyan-500 flex items-center justify-center text-white">
                  <Users size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">{t('tools.lectures.title')}</h3>
              </div>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {t('tools.lectures.desc')}
                <br />
                <span className="block mt-4 font-medium">
                  {t('tools.lectures.info')}
                </span>
              </p>
              <div className="flex flex-col gap-3">
                <a 
                  href="https://www.instagram.com/open.eilat/#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-pink-100"
                >
                  <Instagram size={20} />
                  {t('tools.instagram')}
                </a>
                <a 
                  href="https://chat.whatsapp.com/Hm1hU626DnkBxFnc1fDxK6" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-green-100"
                >
                  <MessageCircle size={20} />
                  {t('tools.whatsapp')}
                </a>
                <a 
                  href="https://www.eilat.muni.il/events/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-100"
                >
                  <ExternalLink size={20} />
                  {t('tools.muni')}
                </a>
              </div>
            </div>

            <div className={`bg-gradient-to-br from-blue-600 to-cyan-500 p-8 rounded-[40px] text-white shadow-xl ${language === 'he' ? 'text-right' : 'text-left'}`}>
              <h4 className="text-xl font-bold mb-4">{t('tools.collaborate.title')}</h4>
              <p className="opacity-90 mb-6">
                {t('tools.collaborate.desc')}
              </p>
              <a 
                href="#contact" 
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-slate-50 transition-all"
              >
                {t('tools.contact')}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

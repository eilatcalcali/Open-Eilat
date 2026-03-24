import { motion } from "motion/react";
import { Mic, FileText, Calendar } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Podcast() {
  const { t, language } = useLanguage();

  return (
    <section id="podcast" className="py-24 bg-white overflow-hidden relative">
      <div className={`absolute top-0 w-1/2 h-1/2 bg-blue-50 rounded-full blur-3xl -translate-y-1/2 -z-10 ${language === 'he' ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}`} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: language === 'he' ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={language === 'he' ? 'text-right' : 'text-left'}
          >
            <div className={`inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-bold mb-6 ${language === 'he' ? 'flex-row' : 'flex-row-reverse'}`}>
              <Mic size={18} />
              {t('podcast.badge')}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              {t('podcast.title')}
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              {t('podcast.description')}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <a 
                href="https://view.monday.com/2073541865-ab3073c69701638181c4ca35a3135a00?r=euc1" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group ${language === 'he' ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform">
                  <FileText size={24} />
                </div>
                <div>
                  <div className="font-bold text-slate-900">{t('podcast.terms.title')}</div>
                  <div className="text-sm text-slate-500">{t('podcast.terms.subtitle')}</div>
                </div>
              </a>

              <a 
                href="https://eilatmuni.smarticket.co.il/%D7%97%D7%93%D7%A8_%D7%A4%D7%95%D7%93%D7%A7%D7%90%D7%A1%D7%98-_OPEN" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-6 rounded-3xl bg-blue-600 text-white hover:shadow-xl transition-all group ${language === 'he' ? 'flex-row-reverse text-right' : 'flex-row text-left'}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Calendar size={24} />
                </div>
                <div>
                  <div className="font-bold">{t('podcast.book.title')}</div>
                  <div className="text-sm opacity-80">{t('podcast.book.subtitle')}</div>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="/podcast.jpg" 
                alt="Podcast Studio" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className={`absolute -bottom-8 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 hidden sm:block ${language === 'he' ? '-left-8' : '-right-8'}`}>
              <div className={`flex items-center gap-4 ${language === 'he' ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-10 h-10 rounded-full bg-red-500 animate-pulse" />
                <div className="text-slate-900 font-bold">{t('podcast.onair')}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

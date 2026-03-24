import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Rocket, Zap } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Hero() {
  const { t, language } = useLanguage();

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-left-bottom opacity-25"
          style={{ backgroundImage: 'url("/open-center.jpg")' }}
        />
        <div className="absolute inset-0 bg-slate-50/70" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 1, x: 0 }}
            className="text-center"
          >
            <div className="mb-4">
              <span className="text-blue-600 font-bold tracking-widest uppercase text-2xl lg:text-3xl">
                {t('hero.innovation')}
              </span>
            </div>
            <h1 className="mb-6">
              <img
                src="/logo-open.png"
                alt="OPEN Logo"
                className="h-32 lg:h-48 w-auto inline-block"
                referrerPolicy="no-referrer"
              />
            </h1>
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-blue-600 mb-8">
                {t('hero.title')}
              </h2>
            </div>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
              {t('hero.subtitle')}
            </p>
            <div className={`mt-10 flex ${language === 'he' ? 'flex-row-reverse' : 'flex-row'} justify-center gap-4`}>
              <a 
                href="https://chat.whatsapp.com/Hm1hU626DnkBxFnc1fDxK6"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg shadow-blue-200 flex items-center gap-2"
              >
                {t('hero.join')}
                {language === 'he' ? <ArrowLeft size={20} /> : <ArrowRight size={20} />}
              </a>
              <a 
                href="#about"
                className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
              >
                {t('hero.more')}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: language === 'he' ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white aspect-[4/3] bg-slate-100 w-full max-w-lg">
                <img
                  src="/open-center.jpg"
                  alt="מרכז החדשנות OPEN"
                  className="w-full h-full object-cover object-left-bottom"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Decorative cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className={`absolute -top-6 ${language === 'he' ? '-left-6' : '-right-6'} z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3`}
              >
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                  <Rocket size={24} />
                </div>
                <div className={language === 'he' ? 'text-right' : 'text-left'}>
                  <div className="text-sm font-bold text-slate-900">{t('hero.entrepreneurship')}</div>
                  <div className="text-xs text-slate-500">{t('hero.growth')}</div>
                </div>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className={`absolute -bottom-6 ${language === 'he' ? '-right-6' : '-left-6'} z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3`}
              >
                <div className="bg-cyan-100 p-2 rounded-lg text-cyan-600">
                  <Zap size={24} />
                </div>
                <div className={language === 'he' ? 'text-right' : 'text-left'}>
                  <div className="text-sm font-bold text-slate-900">{t('hero.technology')}</div>
                  <div className="text-xs text-slate-500">{t('hero.advanced')}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


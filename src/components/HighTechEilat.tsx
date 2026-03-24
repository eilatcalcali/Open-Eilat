import { motion } from "motion/react";
import { Rocket, Globe, Zap } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function HighTechEilat() {
  const { t, language } = useLanguage();

  const highlights = [
    {
      title: t('hightech.highlight1.title'),
      description: t('hightech.highlight1.desc'),
      icon: <Rocket size={24} className="text-blue-600" />,
    },
    {
      title: t('hightech.highlight2.title'),
      description: t('hightech.highlight2.desc'),
      icon: <Globe size={24} className="text-cyan-600" />,
    },
    {
      title: t('hightech.highlight3.title'),
      description: t('hightech.highlight3.desc'),
      icon: <Zap size={24} className="text-blue-500" />,
    },
  ];

  return (
    <section id="hightech" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10">
        <div className={`absolute top-0 w-1/2 h-1/2 bg-blue-500 rounded-full blur-3xl -translate-y-1/2 ${language === 'he' ? 'right-0 translate-x-1/2' : 'left-0 -translate-x-1/2'}`} />
        <div className={`absolute bottom-0 w-1/3 h-1/3 bg-cyan-500 rounded-full blur-3xl translate-y-1/2 ${language === 'he' ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'}`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: language === 'he' ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={language === 'he' ? 'text-right' : 'text-left'}
          >
            <h2 className="text-4xl font-bold mb-8">{t('hightech.title')}</h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-8">
              {t('hightech.subtitle')}
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div key={item.title} className={`p-6 rounded-2xl bg-white/5 border border-white/10 ${language === 'he' ? 'text-right' : 'text-left'}`}>
                  <div className={`w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center mb-4 ${language === 'he' ? 'mr-0' : 'ml-0'}`}>
                    {item.icon}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=1000" 
                alt="Earth from Space" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className={`p-8 rounded-3xl bg-blue-600/20 border border-blue-500/30 ${language === 'he' ? 'text-right' : 'text-left'}`}
          >
            <h3 className="text-2xl font-bold mb-6 text-blue-400">{t('hightech.why.title')}</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className={`font-bold text-white flex items-center gap-2 ${language === 'he' ? 'flex-row' : 'flex-row-reverse justify-end'}`}>
                  <span className="w-2 h-2 bg-blue-500 rounded-full" />
                  {t('hightech.why.tax.title')}
                </h4>
                <p className="text-slate-400 text-sm">
                  {t('hightech.why.tax.desc')}
                </p>
              </div>
              <div className="space-y-4">
                <h4 className={`font-bold text-white flex items-center gap-2 ${language === 'he' ? 'flex-row' : 'flex-row-reverse justify-end'}`}>
                  <span className="w-2 h-2 bg-cyan-500 rounded-full" />
                  {t('hightech.why.lab.title')}
                </h4>
                <p className="text-slate-400 text-sm">
                  {t('hightech.why.lab.desc')}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className={`p-8 rounded-3xl bg-cyan-600/20 border border-cyan-500/30 ${language === 'he' ? 'text-right' : 'text-left'}`}
          >
            <h3 className="text-2xl font-bold mb-6 text-cyan-400">{t('hightech.support.title')}</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className={`font-bold text-white flex items-center gap-2 ${language === 'he' ? 'flex-row' : 'flex-row-reverse justify-end'}`}>
                  <span className="w-2 h-2 bg-blue-400 rounded-full" />
                  {t('hightech.support.gov.title')}
                </h4>
                <p className="text-slate-400 text-sm">
                  {t('hightech.support.gov.desc')}
                </p>
              </div>
              <div className="space-y-4">
                <h4 className={`font-bold text-white flex items-center gap-2 ${language === 'he' ? 'flex-row' : 'flex-row-reverse justify-end'}`}>
                  <span className="w-2 h-2 bg-cyan-400 rounded-full" />
                  {t('hightech.support.life.title')}
                </h4>
                <p className="text-slate-400 text-sm">
                  {t('hightech.support.life.desc')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

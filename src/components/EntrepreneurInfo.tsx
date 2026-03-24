import { motion } from "motion/react";
import { Info, FileText, ArrowLeft, ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function EntrepreneurInfo() {
  const { t, language } = useLanguage();
  const isRtl = language === 'he';

  return (
    <section id="entrepreneurs" className="py-24 bg-slate-50 overflow-hidden relative">
      <div className={`absolute top-0 ${isRtl ? 'left-0' : 'right-0'} w-1/2 h-1/2 bg-blue-100/50 rounded-full blur-3xl -translate-y-1/2 ${isRtl ? '-translate-x-1/2' : 'translate-x-1/2'} -z-10`} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={isRtl ? "text-right" : "text-left"}
          >
            <div className={`inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-bold mb-6 ${isRtl ? 'flex-row' : 'flex-row-reverse'}`}>
              <Info size={18} />
              {t('entrepreneurs.badge')}
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 leading-tight">
              {t('entrepreneurs.title')}
            </h2>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              {t('entrepreneurs.description')}
            </p>
            
            <div className="space-y-6">
              <a 
                href="https://biz.eilat.muni.il/%D7%97%D7%95%D7%91%D7%A8%D7%AA-%D7%94%D7%98%D7%91%D7%95%D7%AA" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex ${isRtl ? 'flex-row-reverse' : 'flex-row'} items-center gap-6 p-8 rounded-[32px] bg-white shadow-xl border border-slate-100 hover:shadow-2xl transition-all group`}
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <FileText size={32} />
                </div>
                <div className={isRtl ? "text-right" : "text-left"}>
                  <div className="text-2xl font-bold text-slate-900 mb-1">{t('entrepreneurs.booklet.title')}</div>
                  <div className="text-slate-500">{t('entrepreneurs.booklet.subtitle')}</div>
                </div>
                {isRtl ? (
                  <ArrowLeft size={24} className="text-slate-300 group-hover:text-blue-600 transition-colors mr-auto" />
                ) : (
                  <ArrowRight size={24} className="text-slate-300 group-hover:text-blue-600 transition-colors ml-auto" />
                )}
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800&h=600" 
                alt="Entrepreneur Info" 
                className="w-full h-auto object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

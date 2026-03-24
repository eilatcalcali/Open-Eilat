import { motion } from "motion/react";
import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-500 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">{t('contact.badge')}</h2>
            <p className="text-xl text-slate-400 mb-16 leading-relaxed max-w-3xl mx-auto">
              {t('contact.description')}
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className="flex flex-col items-center gap-4 p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all h-full">
                <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400 mb-2">
                  <Mail size={32} />
                </div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">{t('contact.email.label')}</div>
                <a 
                  href="mailto:innovation@eilat.muni.il" 
                  className="text-lg font-semibold hover:text-blue-400 transition-colors flex flex-col items-center"
                >
                  <span>{t('contact.email.action')}</span>
                  <span className="text-sm opacity-70">innovation@eilat.muni.il</span>
                </a>
              </div>
              
              <div className="flex flex-col items-center gap-4 p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all h-full">
                <div className="w-16 h-16 rounded-2xl bg-green-600/20 flex items-center justify-center text-green-400 mb-2">
                  <Phone size={32} />
                </div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">{t('contact.whatsapp.label')}</div>
                <div className="flex flex-col items-center">
                  <a 
                    href="https://wa.me/972509178789" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lg font-semibold hover:text-green-400 transition-colors"
                  >
                    {t('contact.whatsapp.action')}
                  </a>
                  <span className="text-sm opacity-70 mt-1">{t('contact.whatsapp.call')}</span>
                </div>
              </div>
 
              <div className="flex flex-col items-center gap-4 p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all h-full">
                <div className="w-16 h-16 rounded-2xl bg-pink-600/20 flex items-center justify-center text-pink-400 mb-2">
                  <Instagram size={32} />
                </div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">{t('contact.instagram.label')}</div>
                <a 
                  href="https://www.instagram.com/open.eilat/#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg font-semibold hover:text-pink-400 transition-colors flex flex-col items-center"
                >
                  <span>{t('contact.instagram.action')}</span>
                  <span className="text-sm opacity-70">open.eilat</span>
                </a>
              </div>
              
              <div className="flex flex-col items-center gap-4 p-10 rounded-[40px] bg-white/5 border border-white/10 hover:bg-white/10 transition-all h-full">
                <div className="w-16 h-16 rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-400 mb-2">
                  <MapPin size={32} />
                </div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">{t('contact.address.label')}</div>
                <a 
                  href="https://waze.com/ul?q=בלן%203%20אילת"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-semibold hover:text-blue-400 transition-colors text-center"
                >
                  {t('contact.address.value')}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}


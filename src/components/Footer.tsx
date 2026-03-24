import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();
  const isRtl = language === 'he';

  return (
    <footer className="bg-slate-50 py-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col md:flex-row ${isRtl ? 'md:flex-row-reverse' : ''} justify-center md:justify-between items-center gap-8`}>
          <div className={`flex items-center gap-6 ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
            <img 
              src="/mascot.png" 
              alt="Mascot" 
              className="h-[375px] w-auto"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://picsum.photos/seed/giraffe/100/100";
              }}
            />
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              OPEN EILAT
            </div>
          </div>
          
          <div className={`flex flex-nowrap justify-center gap-4 lg:gap-6 text-slate-500 font-medium overflow-x-auto pb-2 md:pb-0 whitespace-nowrap ${isRtl ? 'flex-row-reverse' : 'flex-row'}`}>
            <a href="#about" className="hover:text-blue-600 transition-colors">{t('nav.about')}</a>
            <a href="#tools" className="hover:text-blue-600 transition-colors">{t('nav.tools')}</a>
            <a href="#podcast" className="hover:text-blue-600 transition-colors">{t('nav.podcast')}</a>
            <a href="#hightech" className="hover:text-blue-600 transition-colors">{t('nav.hightech')}</a>
            <a href="#communities" className="hover:text-blue-600 transition-colors">{t('nav.communities')}</a>
            <a href="#entrepreneurs" className="hover:text-blue-600 transition-colors">{t('nav.entrepreneurs')}</a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">{t('nav.contact')}</a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 text-center text-slate-400 text-sm">
          {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
}

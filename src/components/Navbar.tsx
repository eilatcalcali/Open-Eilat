import { motion } from "motion/react";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { User } from "firebase/auth";
import { logout } from "../firebase";
import { useLanguage } from "../contexts/LanguageContext";

interface NavbarProps {
  user: User | null;
}

export default function Navbar({ user }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.tools'), href: "#tools" },
    { name: t('nav.podcast'), href: "#podcast" },
    { name: t('nav.hightech'), href: "#hightech" },
    { name: t('nav.communities'), href: "#communities" },
    { name: t('nav.entrepreneurs'), href: "#entrepreneurs" },
    { name: t('nav.contact'), href: "#contact" },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'he' ? 'en' : 'he');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="hidden md:block">
            <div className={`flex items-baseline ${language === 'he' ? 'space-x-8 space-x-reverse' : 'space-x-8'}`}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 bg-slate-100 text-slate-700 px-4 py-2 rounded-xl text-sm font-bold hover:bg-slate-200 transition-all border border-slate-200"
            >
              <Globe size={18} className="text-blue-600" />
              <span>{language === 'he' ? 'English' : 'עברית'}</span>
            </button>

            {user && (
              <div className="flex items-center gap-3">
                <div className={`hidden sm:flex flex-col ${language === 'he' ? 'items-end' : 'items-start'}`}>
                  <span className="text-sm font-bold text-slate-900">{user.displayName}</span>
                  <button onClick={logout} className="text-xs text-red-500 hover:text-red-600">{language === 'he' ? 'התנתקות' : 'Logout'}</button>
                </div>
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.displayName || ""} className="w-10 h-10 rounded-full border-2 border-blue-100" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Globe size={20} />
                  </div>
                )}
              </div>
            )}

            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-blue-600 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            <div className={`flex-shrink-0 flex items-center gap-4 ${language === 'he' ? '' : 'flex-row-reverse'}`}>
              <img 
                src="/logo-open.png" 
                alt="OPEN Logo" 
                className="h-10 w-auto"
                referrerPolicy="no-referrer"
              />
              <img 
                src="/logo-eilat.png" 
                alt="Eilat Logo" 
                className={`h-10 w-auto ${language === 'he' ? 'border-r pr-4' : 'border-l pl-4'} border-slate-200`}
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-slate-100"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-slate-600 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium ${language === 'he' ? 'text-right' : 'text-left'}`}
              >
                {link.name}
              </a>
            ))}
            {user && (
              <button onClick={logout} className={`w-full ${language === 'he' ? 'text-right' : 'text-left'} text-red-500 px-3 py-2 text-base font-medium`}>{language === 'he' ? 'התנתקות' : 'Logout'}</button>
            )}
          </div>
        </motion.div>
      )}
    </nav>
  );
}

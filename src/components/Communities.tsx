import { motion } from "motion/react";
import { Users, MessageCircle, Share2, CheckCircle2, Loader2 } from "lucide-react";
import { useState, useEffect } from "react";
import { User } from "firebase/auth";
import { db, handleFirestoreError, OperationType } from "../firebase";
import { collection, addDoc, query, where, onSnapshot, serverTimestamp, deleteDoc, doc } from "firebase/firestore";
import { useLanguage } from "../contexts/LanguageContext";

interface CommunitiesProps {
  user: User | null;
}

export default function Communities({ user }: CommunitiesProps) {
  const { t, language } = useLanguage();
  const [loading, setLoading] = useState<string | null>(null);
  const [userInterests, setUserInterests] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!user) {
      setUserInterests({});
      return;
    }

    const q = query(collection(db, "interests"), where("uid", "==", user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const interests: Record<string, string> = {};
      snapshot.forEach((doc) => {
        const data = doc.data();
        interests[data.communityId] = doc.id;
      });
      setUserInterests(interests);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, "interests");
    });

    return () => unsubscribe();
  }, [user]);

  const toggleInterest = async (communityId: string) => {
    if (!user) return;
    
    setLoading(communityId);
    try {
      if (userInterests[communityId]) {
        // Remove interest
        await deleteDoc(doc(db, "interests", userInterests[communityId]));
      } else {
        // Add interest
        await addDoc(collection(db, "interests"), {
          uid: user.uid,
          communityId,
          timestamp: serverTimestamp()
        });
      }
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, "interests");
    } finally {
      setLoading(null);
    }
  };

  const communities = [
    {
      id: "open-main",
      titlePart1: t('communities.open.title1'),
      titlePart2: t('communities.open.title2'),
      description: t('communities.open.desc'),
      icon: <Users size={32} className="text-blue-600" />,
      link: "https://chat.whatsapp.com/Hm1hU626DnkBxFnc1fDxK6",
      linkText: t('communities.open.link'),
    },
    {
      id: "open-code",
      titlePart1: t('communities.code.title1'),
      titlePart2: t('communities.code.title2'),
      description: t('communities.code.desc'),
      icon: <Share2 size={32} className="text-cyan-600" />,
      link: "#contact",
      linkText: t('communities.code.link'),
      note: t('communities.code.note'),
    },
  ];

  return (
    <section id="communities" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: language === 'he' ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={language === 'he' ? 'text-right' : 'text-left'}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-8">{t('communities.title')}</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              {t('communities.subtitle')}
            </p>
            <div className="space-y-4">
              <div className={`flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 ${language === 'he' ? 'flex-row' : 'flex-row-reverse justify-end'}`}>
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                  <Users size={20} />
                </div>
                <div className="font-bold text-slate-900">{t('communities.feature1')}</div>
              </div>
              <div className={`flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 ${language === 'he' ? 'flex-row' : 'flex-row-reverse justify-end'}`}>
                <div className="w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center text-white">
                  <MessageCircle size={20} />
                </div>
                <div className="font-bold text-slate-900">{t('communities.feature2')}</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl border-8 border-slate-50">
              <img 
                src="/my-community-image.jpg.png.png" 
                alt="Eilat Tech Community" 
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {communities.map((community, index) => (
            <motion.div
              key={community.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-10 rounded-[40px] bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all group flex flex-col h-full ${language === 'he' ? 'text-right' : 'text-left'}`}
            >
              <div className={`w-20 h-20 rounded-3xl bg-white shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform ${language === 'he' ? 'mr-0' : 'ml-0'}`}>
                {community.icon}
              </div>
              <h3 className="text-3xl font-bold mb-4 flex flex-col gap-1">
                <span className="text-blue-600">{community.titlePart1}</span>
                <span className="text-slate-900 text-2xl">{community.titlePart2}</span>
              </h3>
              <p className="text-slate-600 leading-relaxed mb-8 flex-grow text-lg">{community.description}</p>
              
              <div className="space-y-4">
                <a 
                  href={community.link}
                  target={community.link.startsWith('http') ? "_blank" : "_self"}
                  rel={community.link.startsWith('http') ? "noopener noreferrer" : ""}
                  className={`bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-center hover:bg-blue-700 transition-all inline-flex items-center justify-center gap-2 w-full sm:w-auto ${language === 'he' ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {community.linkText}
                  <MessageCircle size={20} />
                </a>
                {community.note && (
                  <p className="text-sm text-slate-400 italic">{community.note}</p>
                )}

                <div className="pt-6 border-t border-slate-200">
                  {user ? (
                    <button
                      onClick={() => toggleInterest(community.id)}
                      disabled={loading === community.id}
                      className={`w-full py-3 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${
                        userInterests[community.id]
                          ? "bg-green-100 text-green-700 border border-green-200"
                          : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {loading === community.id ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          {t('communities.interest.loading')}
                        </>
                      ) : userInterests[community.id] ? (
                        <>
                          <CheckCircle2 size={20} />
                          {t('communities.interest.active')}
                        </>
                      ) : (
                        t('communities.interest.inactive')
                      )}
                    </button>
                  ) : (
                    <p className="text-sm text-slate-500 text-center">{t('communities.interest.login')}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-blue-600 rounded-[40px] p-12 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <h3 className="text-3xl font-bold mb-6 relative z-10">{t('communities.new.title')}</h3>
          <p className="text-xl opacity-90 mb-10 relative z-10 max-w-2xl mx-auto">
            {t('communities.new.desc')}
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all relative z-10"
          >
            {t('communities.new.button')}
          </a>
        </div>
      </div>
    </section>
  );
}


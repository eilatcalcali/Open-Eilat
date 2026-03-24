import { motion } from "motion/react";
import { CheckCircle2, Target, Lightbulb, TrendingUp } from "lucide-react";
import Mascot from "./Mascot";
import { useLanguage } from "../contexts/LanguageContext";

export default function About() {
  const { t, language } = useLanguage();

  const features = [
    {
      title: t('about.vision'),
      description: t('about.vision.desc'),
      icon: <Target size={24} className="text-blue-600 dark:text-blue-400" />,
    },
    {
      title: t('about.innovation'),
      description: t('about.innovation.desc'),
      icon: <Lightbulb size={24} className="text-cyan-600 dark:text-cyan-400" />,
    },
    {
      title: t('about.growth'),
      description: t('about.growth.desc'),
      icon: <TrendingUp size={24} className="text-blue-500 dark:text-blue-400" />,
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: language === 'he' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={language === 'he' ? 'text-right' : 'text-left'}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-8">
              {t('about.title')}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              {t('about.description1')}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t('about.description2')}
            </p>
          </motion.div>
          
          <div className="flex justify-center relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[40px] opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
              <Mascot size={450} className="relative z-10" />
              {/* Grounding line */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-blue-600 rounded-full z-20" />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl transition-all group ${language === 'he' ? 'text-right' : 'text-left'}`}
            >
              <div className={`w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${language === 'he' ? 'mr-0' : 'ml-0'}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">{t('about.goals')}</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: t('about.goal1.title'), desc: t('about.goal1.desc') },
              { title: t('about.goal2.title'), desc: t('about.goal2.desc') },
              { title: t('about.goal3.title'), desc: t('about.goal3.desc') }
            ].map((goal, index) => (
              <motion.div
                key={goal.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-6 rounded-2xl bg-slate-50 border border-slate-100 ${language === 'he' ? 'text-right' : 'text-left'}`}
              >
                <div className={`flex items-center gap-3 mb-4 ${language === 'he' ? 'flex-row' : 'flex-row-reverse justify-end'}`}>
                  <CheckCircle2 size={20} className="text-blue-600" />
                  <h4 className="font-bold text-slate-900">{goal.title}</h4>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {goal.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>


        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center bg-blue-600 rounded-[40px] p-12 text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          
          <div className={`relative z-10 ${language === 'he' ? 'text-right' : 'text-left'}`}>
            <h3 className="text-3xl font-bold mb-6">{t('about.why')}</h3>
            <ul className="space-y-4">
              {[
                t('about.why1'),
                t('about.why2'),
                t('about.why3'),
                t('about.why4'),
              ].map((item) => (
                <li key={item} className={`flex items-center gap-3 text-lg opacity-90 ${language === 'he' ? 'flex-row' : 'flex-row-reverse justify-end'}`}>
                  <CheckCircle2 size={24} className="text-cyan-300 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&q=80&w=800&h=600"
              alt="Eilat Mountains and Sea"
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


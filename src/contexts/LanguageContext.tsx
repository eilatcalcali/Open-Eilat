import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'he' | 'en';

interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

const translations: Translations = {
  // Navbar
  'nav.about': { he: 'מי אנחנו', en: 'About Us' },
  'nav.tools': { he: 'כלים ותוכן', en: 'Tools & Content' },
  'nav.podcast': { he: 'אולפן הפודקאסט', en: 'Podcast Studio' },
  'nav.hightech': { he: 'הייטק באילת', en: 'High-Tech in Eilat' },
  'nav.communities': { he: 'קהילות', en: 'Communities' },
  'nav.entrepreneurs': { he: 'מידע ליזמים', en: 'Entrepreneur Info' },
  'nav.contact': { he: 'צור קשר', en: 'Contact Us' },
  
  // Hero
  'hero.innovation': { he: 'מרכז החדשנות', en: 'Innovation Center' },
  'hero.title': { he: 'הבית של החדשנות באילת', en: 'The Home of Innovation in Eilat' },
  'hero.subtitle': { he: 'מרכז החדשנות OPEN הוא המנוע הטכנולוגי של אילת, המשלב יזמות, טכנולוגיה וקהילה ליצירת העתיד של העיר הדרומית.', en: 'OPEN Innovation Center is the technological engine of Eilat, combining entrepreneurship, technology, and community to create the future of the southern city.' },
  'hero.join': { he: 'הצטרפו אלינו', en: 'Join Us' },
  'hero.more': { he: 'למידע נוסף', en: 'Learn More' },
  'hero.entrepreneurship': { he: 'יזמות', en: 'Entrepreneurship' },
  'hero.growth': { he: 'צמיחה מהירה', en: 'Fast Growth' },
  'hero.technology': { he: 'טכנולוגיה', en: 'Technology' },
  'hero.advanced': { he: 'חדשנות מתקדמת', en: 'Advanced Innovation' },
  
  // About
  'about.title': { he: 'על מרכז החדשנות OPEN', en: 'About OPEN Innovation Center' },
  'about.description1': { he: 'מרכז החדשנות OPEN פועל במסגרת האגף לפיתוח כלכלי וחדשנות בעירייה ומטרתו ליצור ולפתח פתרונות וכלים לגיוון מקורות התעסוקה. לשם כך מייצר צוות המרכז חשיפה רחבה ומגוונת לעולמות החדשנות והטכנולוגיה, מספק מענים מתקדמים לאתגרים עירוניים ופועל למשיכת חברות וסטארטאפים לאילת.', en: 'The OPEN Innovation Center operates within the Economic Development and Innovation Department of the municipality, aiming to create and develop solutions and tools to diversify employment sources. To this end, the center\'s team creates broad and diverse exposure to the worlds of innovation and technology, provides advanced solutions to urban challenges, and works to attract companies and startups to Eilat.' },
  'about.description2': { he: 'במקום מתקיימים קורסים טכנולוגיים, סדנאות והרצאות במטרה לייצר הון אנושי מוכשר ומתאים לתעסוקת הייטק. כאן תוכלו למצוא מגוון הכשרות וסדנאות, קורסים מתקדמים בשיתוף מוסדות מובילים בתחום, מידע ליזמים וחברות על הטבות ועוד.', en: 'The center hosts technological courses, workshops, and lectures to create talented human capital suitable for high-tech employment. Here you can find a variety of training and workshops, advanced courses in collaboration with leading institutions in the field, information for entrepreneurs and companies on benefits, and more.' },
  'about.vision': { he: 'חזון', en: 'Vision' },
  'about.vision.desc': { he: 'ליצור ולפתח פתרונות וכלים לגיוון מקורות התעסוקה בעיר אילת וקידום יזמות וחדשנות בקרב התושבים.', en: 'To create and develop solutions and tools to diversify employment sources in Eilat and promote entrepreneurship and innovation among residents.' },
  'about.innovation': { he: 'חדשנות', en: 'Innovation' },
  'about.innovation.desc': { he: 'חשיפה לעולמות הטכנולוגיה, הסייבר והתיירות הירוקה באמצעות הכשרות וכלים מתקדמים.', en: 'Exposure to the worlds of technology, cyber, and green tourism through advanced training and tools.' },
  'about.growth': { he: 'צמיחה', en: 'Growth' },
  'about.growth.desc': { he: 'קידום סטארטאפים מקומיים ומשיכת יזמים טכנולוגיים לעיר אילת.', en: 'Promoting local startups and attracting technological entrepreneurs to the city of Eilat.' },
  'about.goals': { he: 'המטרות שלנו', en: 'Our Goals' },
  'about.goal1.title': { he: 'גיוון תעסוקתי', en: 'Employment Diversity' },
  'about.goal1.desc': { he: 'גיוון מקורות התעסוקה וחיזוק משרות חדשות מעולמות הטכנולוגיה.', en: 'Diversifying employment sources and strengthening new jobs from the worlds of technology.' },
  'about.goal2.title': { he: 'חשיפה והכשרה', en: 'Exposure & Training' },
  'about.goal2.desc': { he: 'חשיפת תושבי אילת לתחומי החדשנות, יזמות, סייבר ותיירות ירוקה באמצעות קורסים וסדנאות.', en: 'Exposing Eilat residents to the fields of innovation, entrepreneurship, cyber, and green tourism through courses and workshops.' },
  'about.goal3.title': { he: 'קידום סטארטאפים', en: 'Promoting Startups' },
  'about.goal3.desc': { he: 'סיוע בהקמה וקידום סטארטאפים מקומיים ומשיכת יזמים טכנולוגיים לעיר.', en: 'Assisting in the establishment and promotion of local startups and attracting technological entrepreneurs to the city.' },
  'about.why': { he: 'למה אילת?', en: 'Why Eilat?' },
  'about.why1': { he: 'גישה ישירה לים האדום', en: 'Direct access to the Red Sea' },
  'about.why2': { he: 'סביבה תומכת יזמות עם הטבות מס', en: 'Entrepreneurship-supportive environment with tax benefits' },
  'about.why3': { he: 'קהילה חזקה ומגובשת של אנשי טכנולוגיה', en: 'Strong and cohesive community of tech professionals' },
  'about.why4': { he: 'חיבור ישיר לשווקים בינלאומיים', en: 'Direct connection to international markets' },
  
  // Tools & Content
  'tools.title': { he: 'כלים ותוכן', en: 'Tools & Content' },
  'tools.subtitle': { he: 'גלו את עולם התוכן והכלים של OPEN - מהרצאות וסדנאות ועד ללוח האירועים המלא שלנו.', en: 'Discover the world of content and tools at OPEN - from lectures and workshops to our full events calendar.' },
  'tools.schedule.title': { he: 'לו"ז OPEN', en: 'OPEN Schedule' },
  'tools.schedule.desc': { he: 'הישארו מעודכנים בכל מה שקורה במרכז. סדנאות, הרצאות ומפגשי קהילה.', en: 'Stay updated with everything happening at the center. Workshops, lectures, and community meetups.' },
  'tools.lectures.title': { he: 'הרצאות, סדנאות וקורסים', en: 'Lectures, Workshops and Courses' },
  'tools.lectures.desc': { he: 'אנחנו מארחים את מיטב המרצים והמומחים בתחומי הטכנולוגיה, היזמות והחדשנות. בואו ללמוד, להתפתח ולהרחיב אופקים.', en: 'We host top lecturers and experts in technology, entrepreneurship, and innovation. Come learn, develop, and expand your horizons.' },
  'tools.lectures.info': { he: 'למידע ופרטים ניתן להתעדכן ב:', en: 'For information and details, you can stay updated at:' },
  'tools.instagram': { he: 'עמוד האינסטגרם שלנו', en: 'Our Instagram Page' },
  'tools.whatsapp': { he: 'קבוצת הוואטסאפ', en: 'WhatsApp Group' },
  'tools.muni': { he: 'אתר האירועים של עיריית אילת', en: 'Eilat Municipality Events Site' },
  'tools.collaborate.title': { he: 'רוצים להעביר סדנה או הרצאה אצלנו?', en: 'Want to give a workshop or lecture with us?' },
  'tools.collaborate.desc': { he: 'מרכז החדשנות OPEN פתוח לשיתופי פעולה ותכנים חדשים. דברו איתנו!', en: 'OPEN Innovation Center is open to collaborations and new content. Talk to us!' },
  'tools.contact': { he: 'צרו קשר', en: 'Contact Us' },
  
  // Podcast
  'podcast.badge': { he: 'אולפן הפודקאסט של OPEN', en: 'OPEN Podcast Studio' },
  'podcast.title': { he: 'המקום שלכם להשמיע קול', en: 'Your Place to be Heard' },
  'podcast.description': { he: 'אולפן הקלטות מתקדם, נעים, נגיש, מקצועי ומאובזר. חדר הפודקאסט מיועד ליזמים, עסקים, יוצרים ותושבי העיר המעוניינים להפיק תכני אודיו באיכות גבוהה. מתאים לכל מי שרוצה לייצר תוכן עם משמעות: פודקאסטים, ראיונות, קורסים דיגיטליים, תכנים שיווקיים וחינוכיים ועוד. האולפן מצויד במיקרופונים איכותיים, אוזניות, ומערכות הקלטה מתקדמות המאפשרים הפקה ברמה גבוהה.', en: 'An advanced, pleasant, accessible, professional, and fully equipped recording studio. The podcast room is designed for entrepreneurs, businesses, creators, and city residents interested in producing high-quality audio content. Suitable for anyone wanting to create meaningful content: podcasts, interviews, digital courses, marketing and educational content, and more. The studio is equipped with high-quality microphones, headphones, and advanced recording systems that allow for high-level production.' },
  'podcast.terms.title': { he: 'תנאי שימוש', en: 'Terms of Use' },
  'podcast.terms.subtitle': { he: 'קראו לפני ההקלטה', en: 'Read before recording' },
  'podcast.book.title': { he: 'שיריון שעת הקלטה', en: 'Book a Recording Session' },
  'podcast.book.subtitle': { he: 'הזמינו מקום עכשיו', en: 'Book your spot now' },
  'podcast.onair': { he: 'בשידור', en: 'ON AIR' },
  
  // High-Tech in Eilat
  'hightech.title': { he: 'הייטק באילת', en: 'High-Tech in Eilat' },
  'hightech.subtitle': { he: 'אילת היא לא רק עיר תיירות, היא הופכת למרכז טכנולוגי בינלאומי מוביל. גלו את ההזדמנויות והפרויקטים המרכזיים בעיר. הים האדום והמדבר הסובב את העיר מהווים סביבת ניסוי מושלמת לטכנולוגיות ימיות, אנרגיה סולארית וחקלאות מדברית.', en: 'Eilat is not just a tourism city; it is becoming a leading international technological center. Discover the key opportunities and projects in the city. The Red Sea and the surrounding desert provide a perfect testing environment for marine technologies, solar energy, and desert agriculture.' },
  'hightech.highlight1.title': { he: 'אקוסיסטם צומח', en: 'Growing Ecosystem' },
  'hightech.highlight1.desc': { he: 'אילת הופכת למוקד טכנולוגי בתחומי הביוטכנולוגיה הימית, האנרגיה המתחדשת והתיירות החכמה.', en: 'Eilat is becoming a technological hub in marine biotechnology, renewable energy, and smart tourism.' },
  'hightech.highlight2.title': { he: 'חיבור גלובלי', en: 'Global Connection' },
  'hightech.highlight2.desc': { he: 'המיקום האסטרטגי של אילת מאפשר חיבור ישיר לשווקים בינלאומיים ושיתופי פעולה חוצי גבולות.', en: 'Eilat\'s strategic location allows direct connection to international markets and cross-border collaborations.' },
  'hightech.highlight3.title': { he: 'חדשנות ימית', en: 'Marine Innovation' },
  'hightech.highlight3.desc': { he: 'הים האדום הוא המעבדה הטבעית שלנו למחקר ופיתוח פתרונות טכנולוגיים ימיים פורצי דרך.', en: 'The Red Sea is our natural laboratory for research and development of groundbreaking marine technological solutions.' },
  'hightech.why.title': { he: 'למה להקים סטארטאפ באילת?', en: 'Why start a startup in Eilat?' },
  'hightech.why.tax.title': { he: 'הטבות מס משמעותיות', en: 'Significant Tax Benefits' },
  'hightech.why.tax.desc': { he: 'אילת היא אזור סחר חופשי, מה שמעניק פטור ממע"מ והטבות מס נוספות ליזמים וחברות הייטק הפועלות בעיר.', en: 'Eilat is a free trade zone, providing VAT exemption and additional tax benefits for entrepreneurs and high-tech companies operating in the city.' },
  'hightech.why.lab.title': { he: 'מעבדה חיה (Living Lab)', en: 'Living Lab' },
  'hightech.why.lab.desc': { he: 'הים האדום והמדבר הסובב את העיר מהווים סביבת ניסוי מושלמת לטכנולוגיות ימיות, אנרגיה סולארית וחקלאות מדברית.', en: 'The Red Sea and the surrounding desert provide a perfect testing environment for marine technologies, solar energy, and desert agriculture.' },
  'hightech.support.title': { he: 'קהילה ותמיכה', en: 'Community and Support' },
  'hightech.support.gov.title': { he: 'תמיכה עירונית וממשלתית', en: 'Municipal and Government Support' },
  'hightech.support.gov.desc': { he: 'ליווי צמוד של עיריית אילת, משרד הכלכלה ורשות החדשנות בקידום מיזמים טכנולוגיים בעיר.', en: 'Close support from the Eilat Municipality, the Ministry of Economy, and the Innovation Authority in promoting technological ventures in the city.' },
  'hightech.support.life.title': { he: 'איכות חיים יוצאת דופן', en: 'Exceptional Quality of Life' },
  'hightech.support.life.desc': { he: 'שילוב נדיר בין עבודה מאתגרת בהייטק לבין סגנון חיים רגוע על שפת הים, ללא פקקים ועם קהילה תומכת.', en: 'A rare combination of challenging high-tech work and a relaxed lifestyle by the sea, without traffic jams and with a supportive community.' },
  
  // Communities
  'communities.title': { he: 'הקהילות שלנו', en: 'Our Communities' },
  'communities.subtitle': { he: 'הכוח של מרכז החדשנות OPEN טמון בקהילות שלו. הצטרפו לקהילות המקצועיות שלנו והיו חלק מהתנופה הטכנולוגית של אילת. אנחנו מאמינים ששיתוף פעולה ונטוורקינג הם המפתח להצלחה.', en: 'The power of the OPEN Innovation Center lies in its communities. Join our professional communities and be part of Eilat\'s technological momentum. We believe that collaboration and networking are the key to success.' },
  'communities.feature1': { he: 'קהילות מקצועיות ותומכות', en: 'Professional and Supportive Communities' },
  'communities.feature2': { he: 'חיבור ישיר להזדמנויות תעסוקה', en: 'Direct Connection to Employment Opportunities' },
  'communities.open.title1': { he: 'קהילת OPEN', en: 'OPEN Community' },
  'communities.open.title2': { he: 'קהילת החדשנות והיזמות הטכנולוגית של אילת', en: 'Eilat\'s Innovation and Tech Entrepreneurship Community' },
  'communities.open.desc': { he: 'הקהילה המרכזית שלנו, פתוחה לכולם. כאן תקבלו עדכונים שוטפים על כל מה שקורה במרכז החדשנות, אירועים קרובים, סדנאות והזדמנויות חדשות.', en: 'Our main community, open to everyone. Here you will receive regular updates on everything happening at the innovation center, upcoming events, workshops, and new opportunities.' },
  'communities.open.link': { he: 'הצטרפו לקהילה בוואטסאפ', en: 'Join the Community on WhatsApp' },
  'communities.code.title1': { he: 'OPEN_code', en: 'OPEN_code' },
  'communities.code.title2': { he: 'קהילת המפתחים', en: 'Developers Community' },
  'communities.code.desc': { he: 'קהילה מקצועית המיועדת למתכנתים ואנשי הייטק המחפשים עבודה בתחומם, שיתופי פעולה טכנולוגיים או קשר בלתי אמצעי עם אנשי מקצוע בתחום.', en: 'A professional community designed for programmers and high-tech professionals looking for work in their field, technological collaborations, or direct contact with professionals in the field.' },
  'communities.code.link': { he: 'פנו אלינו להצטרפות', en: 'Contact us to join' },
  'communities.code.note': { he: 'ההצטרפות מותנית בהתאמה מקצועית', en: 'Joining is subject to professional suitability' },
  'communities.interest.loading': { he: 'טוען...', en: 'Loading...' },
  'communities.interest.active': { he: 'מעוניין/ת', en: 'Interested' },
  'communities.interest.inactive': { he: 'אני מעוניין/ת בקהילה זו', en: 'I am interested in this community' },
  'communities.interest.login': { he: 'התחברו כדי לסמן עניין בקהילה', en: 'Log in to mark interest in the community' },
  'communities.new.title': { he: 'רוצים להקים קהילה חדשה?', en: 'Want to start a new community?' },
  'communities.new.desc': { he: 'אנחנו תמיד שמחים לתמוך ביוזמות קהילתיות חדשות. אם יש לכם רעיון לקהילה טכנולוגית או יזמית - דברו איתנו!', en: 'We are always happy to support new community initiatives. If you have an idea for a technological or entrepreneurial community - talk to us!' },
  'communities.new.button': { he: 'צרו קשר להקמת קהילה', en: 'Contact us to start a community' },
  
  // Entrepreneur Info
  'entrepreneurs.badge': { he: 'מידע ליזמים', en: 'Entrepreneur Info' },
  'entrepreneurs.title': { he: 'כל מה שיזם באילת צריך לדעת', en: 'Everything an Entrepreneur in Eilat Needs to Know' },
  'entrepreneurs.description': { he: 'העיר אילת מציעה מגוון רחב של הטבות, מענקים ותמיכה ליזמים וסטארטאפים. ריכזנו עבורכם את כל המידע הרלוונטי שיעזור לכם להצליח.', en: 'The city of Eilat offers a wide range of benefits, grants, and support for entrepreneurs and startups. We have gathered all the relevant information to help you succeed.' },
  'entrepreneurs.booklet.title': { he: 'חוברת הטבות ליזמים', en: 'Entrepreneur Benefits Booklet' },
  'entrepreneurs.booklet.subtitle': { he: 'גלו את כל ההטבות והמענקים המגיעים לכם', en: 'Discover all the benefits and grants you are entitled to' },
  
  // Contact
  'contact.badge': { he: 'בואו נדבר', en: "Let's Talk" },
  'contact.title': { he: 'צור קשר', en: 'Contact Us' },
  'contact.description': { he: 'יש לכם רעיון? רוצים להצטרף לאחת התוכניות שלנו? אנחנו כאן לכל שאלה.', en: 'Have an idea? Want to join one of our programs? We are here for any question.' },
  'contact.email.label': { he: 'אימייל', en: 'Email' },
  'contact.email.action': { he: 'צרו איתנו קשר', en: 'Contact us' },
  'contact.whatsapp.label': { he: 'וואטסאפ', en: 'WhatsApp' },
  'contact.whatsapp.action': { he: 'כתבו לנו ב-WhatsApp', en: 'Write to us on WhatsApp' },
  'contact.whatsapp.call': { he: 'או התקשרו 08-6367048', en: 'Or call 08-6367048' },
  'contact.instagram.label': { he: 'אינסטגרם', en: 'Instagram' },
  'contact.instagram.action': { he: 'עקבו אחרינו', en: 'Follow us' },
  'contact.address.label': { he: 'כתובת', en: 'Address' },
  'contact.address.value': { he: 'בלן 3, פארק תעשיות אמת"ל, אילת', en: 'Balan 3, Emtl Industrial Park, Eilat' },
  
  // Footer
  'footer.rights': { he: 'כל הזכויות שמורות © 2024 הבית של החדשנות באילת', en: 'All rights reserved © 2024 Eilat Innovation Home' },
  'footer.center': { he: 'מרכז החדשנות OPEN Eilat', en: 'OPEN Eilat Innovation Center' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('he');

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  const isRtl = language === 'he';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRtl }}>
      <div dir={isRtl ? 'rtl' : 'ltr'} className={isRtl ? 'font-sans' : 'font-sans'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

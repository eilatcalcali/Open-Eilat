import { useState, useEffect } from "react";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db, handleFirestoreError, OperationType } from "../firebase";
import { motion } from "motion/react";
import { Users, Mail, Calendar, Tag } from "lucide-react";

interface InterestRecord {
  id: string;
  uid: string;
  communityId: string;
  timestamp: any;
  userName?: string;
  userEmail?: string;
}

interface UserProfile {
  uid: string;
  displayName: string;
  email: string;
}

export default function AdminDashboard() {
  const [interests, setInterests] = useState<InterestRecord[]>([]);
  const [users, setUsers] = useState<Record<string, UserProfile>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all users to map UIDs to names
    const usersUnsubscribe = onSnapshot(collection(db, "users"), (snapshot) => {
      const usersMap: Record<string, UserProfile> = {};
      snapshot.forEach((doc) => {
        const data = doc.data() as UserProfile;
        usersMap[data.uid] = data;
      });
      setUsers(usersMap);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, "users");
    });

    // Fetch all interests
    const interestsQuery = query(collection(db, "interests"), orderBy("timestamp", "desc"));
    const interestsUnsubscribe = onSnapshot(interestsQuery, (snapshot) => {
      const interestsList: InterestRecord[] = [];
      snapshot.forEach((doc) => {
        interestsList.push({ id: doc.id, ...doc.data() } as InterestRecord);
      });
      setInterests(interestsList);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, "interests");
    });

    return () => {
      usersUnsubscribe();
      interestsUnsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <div className="py-12 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
      </div>
    );
  }

  const communityNames: Record<string, string> = {
    "open-main": "קהילת OPEN",
    "open-code": "OPEN_code",
  };

  return (
    <section id="admin-dashboard" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">ניהול קהילות - התעניינות משתמשים</h2>
          <p className="text-slate-600">כאן תוכלו לראות את כל המשתמשים שסימנו עניין בקהילות השונות.</p>
        </div>

        <div className="bg-white rounded-[32px] shadow-xl overflow-hidden border border-slate-100">
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="px-6 py-4 font-bold">משתמש</th>
                  <th className="px-6 py-4 font-bold">אימייל</th>
                  <th className="px-6 py-4 font-bold">קהילה</th>
                  <th className="px-6 py-4 font-bold">תאריך</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {interests.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-slate-500 italic">
                      טרם נרשמו התעניינויות בקהילות.
                    </td>
                  </tr>
                ) : (
                  interests.map((interest) => {
                    const user = users[interest.uid];
                    return (
                      <motion.tr 
                        key={interest.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="hover:bg-slate-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                              <Users size={16} />
                            </div>
                            <span className="font-medium text-slate-900">
                              {user?.displayName || "משתמש לא ידוע"}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-slate-600">
                            <Mail size={14} />
                            <span>{user?.email || "N/A"}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <Tag size={14} className="text-blue-600" />
                            <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                              {communityNames[interest.communityId] || interest.communityId}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Calendar size={14} />
                            <span>
                              {interest.timestamp?.toDate().toLocaleDateString('he-IL')} {interest.timestamp?.toDate().toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' })}
                            </span>
                          </div>
                        </td>
                      </motion.tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

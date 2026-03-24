import { useState, useEffect } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ToolsContent from "./components/ToolsContent";
import Podcast from "./components/Podcast";
import HighTechEilat from "./components/HighTechEilat";
import Communities from "./components/Communities";
import EntrepreneurInfo from "./components/EntrepreneurInfo";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AdminDashboard from "./components/AdminDashboard";
import AccessibilityMenu from "./components/AccessibilityMenu";

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Check if user is admin
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setIsAdmin(userData.role === "admin" || currentUser.email === "eilat.calcali@gmail.com");
        } else if (currentUser.email === "eilat.calcali@gmail.com") {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen font-sans">
      <Navbar user={user} />
      <main>
        <Hero />
        <About />
        <ToolsContent />
        <Podcast />
        <HighTechEilat />
        <Communities user={user} />
        {isAdmin && <AdminDashboard />}
        <EntrepreneurInfo />
        <Contact />
      </main>
      <Footer />
      <AccessibilityMenu />
    </div>
  );
}

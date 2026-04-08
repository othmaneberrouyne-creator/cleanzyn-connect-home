import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, CreditCard, Clock, ChevronRight, Settings, LogOut, HelpCircle, Bell } from "lucide-react";
import MobileLayout from "@/components/MobileLayout";
import BottomNav from "@/components/BottomNav";

const menuItems = [
  { icon: Clock, label: "Booking History", path: "/bookings" },
  { icon: MapPin, label: "Saved Addresses", path: "#" },
  { icon: CreditCard, label: "Payment Methods", path: "#" },
  { icon: Bell, label: "Notifications", path: "#" },
  { icon: HelpCircle, label: "Help & Support", path: "#" },
  { icon: Settings, label: "Settings", path: "#" },
];

const Profile = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout className="pb-24">
      <div className="min-h-screen pt-12">
        <h1 className="text-lg font-bold text-foreground mb-8">Profile</h1>

        {/* User Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-5 rounded-2xl gradient-hero mb-8 shadow-elevated"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-primary-foreground/20 flex items-center justify-center text-2xl font-bold text-primary-foreground">
              S
            </div>
            <div>
              <h2 className="text-lg font-bold text-primary-foreground">Sara A.</h2>
              <p className="text-sm text-primary-foreground/70">+212 6XX XXX XXX</p>
              <p className="text-xs text-primary-foreground/60 mt-1">Member since 2024</p>
            </div>
          </div>

          <div className="flex gap-4 mt-5">
            <div className="flex-1 py-3 rounded-xl bg-primary-foreground/10 text-center">
              <p className="text-xl font-bold text-primary-foreground">12</p>
              <p className="text-[10px] text-primary-foreground/70">Bookings</p>
            </div>
            <div className="flex-1 py-3 rounded-xl bg-primary-foreground/10 text-center">
              <p className="text-xl font-bold text-primary-foreground">4.8</p>
              <p className="text-[10px] text-primary-foreground/70">Avg Rating</p>
            </div>
            <div className="flex-1 py-3 rounded-xl bg-primary-foreground/10 text-center">
              <p className="text-xl font-bold text-primary-foreground">3</p>
              <p className="text-[10px] text-primary-foreground/70">Addresses</p>
            </div>
          </div>
        </motion.div>

        {/* Menu */}
        <div className="space-y-2">
          {menuItems.map((item, i) => (
            <motion.button
              key={item.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => navigate(item.path)}
              className="w-full flex items-center gap-4 p-4 rounded-2xl bg-card shadow-card active:scale-[0.98] transition-transform"
            >
              <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                <item.icon size={18} className="text-foreground" />
              </div>
              <span className="flex-1 text-left text-sm font-medium text-foreground">{item.label}</span>
              <ChevronRight size={16} className="text-muted-foreground" />
            </motion.button>
          ))}
        </div>

        {/* Logout */}
        <button className="w-full flex items-center justify-center gap-2 mt-8 py-3 text-destructive text-sm font-medium">
          <LogOut size={16} />
          Log Out
        </button>
      </div>
      <BottomNav />
    </MobileLayout>
  );
};

export default Profile;

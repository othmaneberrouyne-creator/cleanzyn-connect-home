import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Car, Home as HomeIcon, Shirt, Calendar } from "lucide-react";
import MobileLayout from "@/components/MobileLayout";
import BottomNav from "@/components/BottomNav";

const bookings = [
  { service: "Car Wash", icon: Car, date: "Apr 5, 2026", time: "10:00", status: "Completed", price: "80 MAD", color: "bg-cleanzyn-blue-light", iconColor: "text-cleanzyn-blue" },
  { service: "Home Cleaning", icon: HomeIcon, date: "Mar 28, 2026", time: "14:00", status: "Completed", price: "150 MAD", color: "bg-cleanzyn-green-light", iconColor: "text-cleanzyn-green" },
  { service: "Laundry", icon: Shirt, date: "Mar 20, 2026", time: "09:00", status: "Completed", price: "40 MAD", color: "bg-cleanzyn-orange-light", iconColor: "text-cleanzyn-orange" },
];

const Bookings = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout className="pb-24">
      <div className="min-h-screen pt-12">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
            <ArrowLeft size={18} className="text-foreground" />
          </button>
          <h1 className="text-lg font-bold text-foreground">My Bookings</h1>
        </div>

        <div className="space-y-3">
          {bookings.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-4 rounded-2xl bg-card shadow-card"
            >
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl ${b.color} flex items-center justify-center`}>
                  <b.icon size={22} className={b.iconColor} />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-foreground">{b.service}</h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <Calendar size={12} className="text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{b.date} · {b.time}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-primary">{b.price}</p>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-cleanzyn-green-light text-cleanzyn-green font-medium">
                    {b.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <BottomNav />
    </MobileLayout>
  );
};

export default Bookings;

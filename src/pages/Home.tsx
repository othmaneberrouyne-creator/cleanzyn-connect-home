import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Car, Home as HomeIcon, Shirt, ChevronRight, MapPin, Bell, Search, Star, Clock } from "lucide-react";
import MobileLayout from "@/components/MobileLayout";
import BottomNav from "@/components/BottomNav";
import promoBanner from "@/assets/promo-banner.jpg";

const services = [
  { icon: Car, label: "Car Wash", color: "bg-cleanzyn-blue-light", iconColor: "text-cleanzyn-blue", price: "from 50 MAD" },
  { icon: HomeIcon, label: "Cleaning", color: "bg-cleanzyn-green-light", iconColor: "text-cleanzyn-green", price: "from 100 MAD" },
  { icon: Shirt, label: "Laundry", color: "bg-cleanzyn-orange-light", iconColor: "text-cleanzyn-orange", price: "from 30 MAD" },
];

const recentProviders = [
  { name: "Youssef M.", rating: 4.9, jobs: 234, service: "Car Wash" },
  { name: "Fatima Z.", rating: 4.8, jobs: 189, service: "Home Cleaning" },
];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout className="pb-24">
      {/* Header */}
      <div className="pt-12 pb-4 flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Good morning 👋</p>
          <h1 className="text-xl font-bold text-foreground">What do you need?</h1>
        </div>
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
            <Bell size={18} className="text-foreground" />
          </button>
        </div>
      </div>

      {/* Location */}
      <button className="flex items-center gap-2 mb-6 text-sm text-muted-foreground">
        <MapPin size={14} className="text-primary" />
        <span>Casablanca, Morocco</span>
        <ChevronRight size={14} />
      </button>

      {/* Search */}
      <div className="relative mb-6">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search services..."
          className="w-full h-12 pl-11 pr-4 rounded-2xl bg-card shadow-card text-sm border-0 focus:outline-none focus:ring-2 focus:ring-primary/20"
        />
      </div>

      {/* Services */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-foreground">Services</h2>
          <button className="text-xs text-primary font-medium">See all</button>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-6">
          {services.map((service) => (
            <button
              key={service.label}
              onClick={() => navigate("/booking")}
              className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-card shadow-card active:scale-95 transition-transform"
            >
              <div className={`w-12 h-12 rounded-xl ${service.color} flex items-center justify-center`}>
                <service.icon size={22} className={service.iconColor} />
              </div>
              <span className="text-xs font-semibold text-foreground">{service.label}</span>
              <span className="text-[10px] text-muted-foreground">{service.price}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Promo Banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-6"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-card">
          <img src={promoBanner} alt="Promotion" className="w-full h-36 object-cover" loading="lazy" width={1200} height={600} />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40 flex flex-col justify-center px-5">
            <span className="text-[10px] font-bold text-primary-foreground/80 uppercase tracking-wider">Limited offer</span>
            <h3 className="text-lg font-bold text-primary-foreground mt-1">30% Off First Booking</h3>
            <p className="text-xs text-primary-foreground/80 mt-1">Use code: CLEAN30</p>
          </div>
        </div>
      </motion.div>

      {/* Quick Book */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="mb-6"
      >
        <button
          onClick={() => navigate("/booking")}
          className="w-full p-4 rounded-2xl gradient-green flex items-center justify-between shadow-elevated active:scale-[0.98] transition-transform"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-secondary-foreground/10 flex items-center justify-center">
              <Clock size={20} className="text-secondary-foreground" />
            </div>
            <div className="text-left">
              <p className="text-sm font-bold text-secondary-foreground">Quick Book</p>
              <p className="text-xs text-secondary-foreground/70">Book in under 30 seconds</p>
            </div>
          </div>
          <ChevronRight size={20} className="text-secondary-foreground" />
        </button>
      </motion.div>

      {/* Top Providers */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold text-foreground">Top Providers</h2>
          <button className="text-xs text-primary font-medium">See all</button>
        </div>
        <div className="space-y-3">
          {recentProviders.map((provider) => (
            <button
              key={provider.name}
              onClick={() => navigate("/providers")}
              className="w-full flex items-center gap-3 p-4 rounded-2xl bg-card shadow-card active:scale-[0.98] transition-transform"
            >
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center text-primary-foreground font-bold text-lg">
                {provider.name[0]}
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm font-semibold text-foreground">{provider.name}</p>
                <p className="text-xs text-muted-foreground">{provider.service} · {provider.jobs} jobs</p>
              </div>
              <div className="flex items-center gap-1">
                <Star size={14} className="text-cleanzyn-orange fill-cleanzyn-orange" />
                <span className="text-sm font-semibold text-foreground">{provider.rating}</span>
              </div>
            </button>
          ))}
        </div>
      </motion.div>

      <BottomNav />
    </MobileLayout>
  );
};

export default HomePage;

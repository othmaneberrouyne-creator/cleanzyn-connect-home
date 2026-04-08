import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";
import onboardingCarwash from "@/assets/onboarding-carwash.jpg";
import onboardingCleaning from "@/assets/onboarding-cleaning.jpg";
import onboardingLaundry from "@/assets/onboarding-laundry.jpg";

const slides = [
  {
    image: onboardingCarwash,
    title: "Car Wash at Home",
    subtitle: "Professional car cleaning delivered to your door. Sparkling results, zero effort.",
  },
  {
    image: onboardingCleaning,
    title: "Home Cleaning",
    subtitle: "Trusted cleaners for your home. Book in seconds, relax in minutes.",
  },
  {
    image: onboardingLaundry,
    title: "Laundry Service",
    subtitle: "Pickup, wash, fold & deliver. Fresh clothes without lifting a finger.",
  },
];

const Onboarding = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const next = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1);
    } else {
      navigate("/auth");
    }
  };

  return (
    <div className="min-h-screen bg-card flex justify-center">
      <div className="w-full max-w-md min-h-screen flex flex-col relative overflow-hidden">
        {/* Skip */}
        <button
          onClick={() => navigate("/auth")}
          className="absolute top-12 right-6 z-10 text-sm font-medium text-muted-foreground"
        >
          Skip
        </button>

        {/* Logo */}
        <div className="pt-14 px-6 flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg gradient-hero flex items-center justify-center">
            <Sparkles size={18} className="text-primary-foreground" />
          </div>
          <span className="text-lg font-bold text-foreground">Cleanzyn</span>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-center px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-64 h-64 mb-10 rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src={slides[current].image}
                  alt={slides[current].title}
                  className="w-full h-full object-cover"
                  width={256}
                  height={256}
                />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                {slides[current].title}
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-[280px]">
                {slides[current].subtitle}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots & Button */}
        <div className="px-6 pb-12 flex items-center justify-between">
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === current ? "w-8 bg-primary" : "w-2 bg-border"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-14 h-14 rounded-2xl gradient-hero flex items-center justify-center shadow-elevated active:scale-95 transition-transform"
          >
            <ChevronRight size={24} className="text-primary-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;

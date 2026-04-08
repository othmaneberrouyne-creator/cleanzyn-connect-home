import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Star, Clock, MapPin, Shield } from "lucide-react";
import MobileLayout from "@/components/MobileLayout";
import { Button } from "@/components/ui/button";

const providers = [
  { name: "Youssef M.", rating: 4.9, reviews: 234, distance: "1.2 km", eta: "8 min", specialty: "Car Wash Expert", verified: true },
  { name: "Fatima Z.", rating: 4.8, reviews: 189, distance: "2.0 km", eta: "12 min", specialty: "Home Cleaning Pro", verified: true },
  { name: "Ahmed K.", rating: 4.7, reviews: 156, distance: "2.5 km", eta: "15 min", specialty: "Multi-Service", verified: false },
];

const Providers = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="min-h-screen pt-12 pb-8">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
            <ArrowLeft size={18} className="text-foreground" />
          </button>
          <h1 className="text-lg font-bold text-foreground">Available Providers</h1>
        </div>

        <p className="text-sm text-muted-foreground mb-6">3 providers near you</p>

        <div className="space-y-4">
          {providers.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-4 rounded-2xl bg-card shadow-card"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-14 h-14 rounded-xl gradient-hero flex items-center justify-center text-primary-foreground font-bold text-xl">
                  {p.name[0]}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-foreground">{p.name}</h3>
                    {p.verified && <Shield size={14} className="text-cleanzyn-green" />}
                  </div>
                  <p className="text-xs text-muted-foreground">{p.specialty}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <div className="flex items-center gap-1">
                      <Star size={12} className="text-cleanzyn-orange fill-cleanzyn-orange" />
                      <span className="text-xs font-semibold text-foreground">{p.rating}</span>
                      <span className="text-xs text-muted-foreground">({p.reviews})</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin size={12} className="text-primary" />
                  {p.distance}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock size={12} className="text-cleanzyn-green" />
                  ETA {p.eta}
                </div>
              </div>

              <Button
                onClick={() => navigate("/tracking")}
                className="w-full h-11 rounded-xl gradient-hero text-primary-foreground font-semibold text-sm"
              >
                Select Provider
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </MobileLayout>
  );
};

export default Providers;

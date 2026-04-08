import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Phone, MessageCircle, Check, Clock, Truck, Sparkles } from "lucide-react";
import MobileLayout from "@/components/MobileLayout";
import BottomNav from "@/components/BottomNav";

const statuses = [
  { icon: Check, label: "Confirmed", time: "10:00 AM", done: true },
  { icon: Truck, label: "On the way", time: "10:15 AM", done: true },
  { icon: Sparkles, label: "In progress", time: "10:30 AM", done: false, active: true },
  { icon: Check, label: "Completed", time: "--:--", done: false },
];

const Tracking = () => {
  const navigate = useNavigate();

  return (
    <MobileLayout className="pb-24">
      <div className="min-h-screen pt-12">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
            <ArrowLeft size={18} className="text-foreground" />
          </button>
          <h1 className="text-lg font-bold text-foreground">Order Tracking</h1>
        </div>

        {/* Map placeholder */}
        <div className="w-full h-48 rounded-2xl bg-cleanzyn-blue-light mb-6 flex items-center justify-center overflow-hidden relative">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: "radial-gradient(circle at 30% 40%, hsl(217 91% 55%) 1px, transparent 1px), radial-gradient(circle at 70% 60%, hsl(160 64% 45%) 1px, transparent 1px)",
            backgroundSize: "30px 30px"
          }} />
          <div className="text-center z-10">
            <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center mx-auto mb-2 animate-pulse-soft">
              <Truck size={20} className="text-primary-foreground" />
            </div>
            <p className="text-sm font-semibold text-primary">Provider is on the way</p>
            <p className="text-xs text-muted-foreground">Arriving in ~15 min</p>
          </div>
        </div>

        {/* Provider Card */}
        <div className="p-4 rounded-2xl bg-card shadow-card mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center text-primary-foreground font-bold text-lg">
              Y
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-foreground">Youssef M.</h3>
              <p className="text-xs text-muted-foreground">Car Wash Expert · ⭐ 4.9</p>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-xl bg-cleanzyn-green-light flex items-center justify-center">
                <Phone size={16} className="text-cleanzyn-green" />
              </button>
              <button className="w-10 h-10 rounded-xl bg-cleanzyn-blue-light flex items-center justify-center">
                <MessageCircle size={16} className="text-cleanzyn-blue" />
              </button>
            </div>
          </div>
        </div>

        {/* Status Timeline */}
        <h2 className="font-bold text-foreground mb-4">Order Status</h2>
        <div className="space-y-0">
          {statuses.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  s.done ? "gradient-hero" : s.active ? "bg-cleanzyn-green animate-pulse-soft" : "bg-muted"
                }`}>
                  <s.icon size={18} className={s.done || s.active ? "text-primary-foreground" : "text-muted-foreground"} />
                </div>
                {i < statuses.length - 1 && (
                  <div className={`w-0.5 h-8 my-1 ${s.done ? "bg-primary" : "bg-muted"}`} />
                )}
              </div>
              <div className="pt-2">
                <p className={`text-sm font-semibold ${s.done || s.active ? "text-foreground" : "text-muted-foreground"}`}>
                  {s.label}
                </p>
                <p className="text-xs text-muted-foreground">{s.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <BottomNav />
    </MobileLayout>
  );
};

export default Tracking;

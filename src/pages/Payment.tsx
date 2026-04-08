import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CreditCard, Banknote, Check, Shield } from "lucide-react";
import MobileLayout from "@/components/MobileLayout";
import { Button } from "@/components/ui/button";

const methods = [
  { id: "cash", icon: Banknote, label: "Cash on Delivery", desc: "Pay when service is complete" },
  { id: "card", icon: CreditCard, label: "Credit / Debit Card", desc: "Visa, Mastercard" },
];

const Payment = () => {
  const navigate = useNavigate();
  const [method, setMethod] = useState("cash");

  return (
    <MobileLayout>
      <div className="min-h-screen flex flex-col pt-12 pb-8">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
            <ArrowLeft size={18} className="text-foreground" />
          </button>
          <h1 className="text-lg font-bold text-foreground">Payment</h1>
        </div>

        <h2 className="text-xl font-bold text-foreground mb-2">Choose payment</h2>
        <p className="text-sm text-muted-foreground mb-8">Select your preferred payment method</p>

        <div className="space-y-3 mb-8">
          {methods.map((m) => (
            <button
              key={m.id}
              onClick={() => setMethod(m.id)}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${
                method === m.id ? "border-primary bg-cleanzyn-blue-light" : "border-transparent bg-card shadow-card"
              }`}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${method === m.id ? "gradient-hero" : "bg-muted"}`}>
                <m.icon size={22} className={method === m.id ? "text-primary-foreground" : "text-muted-foreground"} />
              </div>
              <div className="text-left flex-1">
                <p className="text-sm font-semibold text-foreground">{m.label}</p>
                <p className="text-xs text-muted-foreground">{m.desc}</p>
              </div>
              {method === m.id && (
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <Check size={14} className="text-primary-foreground" />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Summary */}
        <div className="p-4 rounded-2xl bg-card shadow-card mb-6 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Service</span>
            <span className="font-medium text-foreground">80 MAD</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Discount</span>
            <span className="font-medium text-cleanzyn-green">-24 MAD</span>
          </div>
          <div className="border-t border-border pt-2 flex justify-between">
            <span className="font-semibold text-foreground">Total</span>
            <span className="text-xl font-bold text-primary">56 MAD</span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-6 text-muted-foreground">
          <Shield size={14} />
          <span className="text-xs">Secure payment · 100% money-back guarantee</span>
        </div>

        <div className="mt-auto">
          <Button
            onClick={() => navigate("/rating")}
            className="w-full h-14 rounded-2xl gradient-hero text-primary-foreground font-semibold text-base shadow-elevated"
          >
            Confirm & Pay
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Payment;

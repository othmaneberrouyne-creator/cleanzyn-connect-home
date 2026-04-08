import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Sparkles, Shield } from "lucide-react";
import MobileLayout from "@/components/MobileLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Auth = () => {
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const navigate = useNavigate();

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 3) {
      const next = document.getElementById(`otp-${index + 1}`);
      next?.focus();
    }
  };

  const handleSubmit = () => {
    if (step === "phone") {
      setStep("otp");
    } else {
      navigate("/home");
    }
  };

  return (
    <MobileLayout>
      <div className="min-h-screen flex flex-col pt-16">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-12">
          <div className="w-10 h-10 rounded-xl gradient-hero flex items-center justify-center">
            <Sparkles size={20} className="text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Cleanzyn</span>
        </div>

        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {step === "phone" ? (
            <>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Welcome back
              </h1>
              <p className="text-muted-foreground mb-10">
                Enter your phone number to get started
              </p>

              <div className="space-y-4">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2 text-muted-foreground">
                    <Phone size={18} />
                    <span className="text-sm font-medium">+212</span>
                    <div className="w-px h-5 bg-border" />
                  </div>
                  <Input
                    type="tel"
                    placeholder="6XX XXX XXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="h-14 pl-28 text-lg rounded-2xl bg-muted border-0 font-medium"
                  />
                </div>

                <Button
                  onClick={handleSubmit}
                  className="w-full h-14 rounded-2xl gradient-hero text-primary-foreground font-semibold text-base gap-2 shadow-elevated"
                >
                  Continue
                  <ArrowRight size={18} />
                </Button>
              </div>

              <div className="flex items-center gap-2 mt-6 text-muted-foreground">
                <Shield size={14} />
                <span className="text-xs">Your data is secure and encrypted</span>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Verify your number
              </h1>
              <p className="text-muted-foreground mb-10">
                We sent a code to +212 {phone}
              </p>

              <div className="flex gap-3 mb-8">
                {otp.map((digit, i) => (
                  <input
                    key={i}
                    id={`otp-${i}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleOtpChange(i, e.target.value)}
                    className="w-16 h-16 text-center text-2xl font-bold rounded-2xl bg-muted border-2 border-transparent focus:border-primary focus:outline-none transition-colors"
                  />
                ))}
              </div>

              <Button
                onClick={handleSubmit}
                className="w-full h-14 rounded-2xl gradient-hero text-primary-foreground font-semibold text-base gap-2 shadow-elevated"
              >
                Verify & Continue
                <ArrowRight size={18} />
              </Button>

              <button className="w-full mt-4 text-sm text-primary font-medium">
                Resend code
              </button>
            </>
          )}
        </motion.div>
      </div>
    </MobileLayout>
  );
};

export default Auth;

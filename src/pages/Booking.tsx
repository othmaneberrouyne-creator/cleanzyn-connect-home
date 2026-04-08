import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Car, Home as HomeIcon, Shirt, MapPin, Calendar, Clock, ChevronRight, Check } from "lucide-react";
import MobileLayout from "@/components/MobileLayout";
import { Button } from "@/components/ui/button";

const serviceTypes = [
  { icon: Car, label: "Car Wash", id: "carwash" },
  { icon: HomeIcon, label: "Cleaning", id: "cleaning" },
  { icon: Shirt, label: "Laundry", id: "laundry" },
];

const carOptions = ["Sedan", "SUV", "Truck", "Compact"];
const cleanTypes = ["Interior", "Exterior", "Full", "Premium"];
const timeSlots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00"];

const Booking = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [service, setService] = useState("carwash");
  const [option, setOption] = useState("Full");
  const [carType, setCarType] = useState("Sedan");
  const [selectedTime, setSelectedTime] = useState("10:00");
  const [selectedDate, setSelectedDate] = useState(0);

  const dates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return d;
  });

  const price = service === "carwash" ? (option === "Premium" ? 120 : option === "Full" ? 80 : 50) : service === "cleaning" ? 150 : 40;

  const steps = ["Service", "Details", "Schedule", "Confirm"];

  return (
    <MobileLayout>
      <div className="min-h-screen flex flex-col pt-12 pb-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <button onClick={() => step > 0 ? setStep(step - 1) : navigate(-1)} className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
            <ArrowLeft size={18} className="text-foreground" />
          </button>
          <h1 className="text-lg font-bold text-foreground">Book Service</h1>
        </div>

        {/* Progress */}
        <div className="flex gap-2 mb-8">
          {steps.map((_, i) => (
            <div key={i} className={`h-1 flex-1 rounded-full transition-colors ${i <= step ? "bg-primary" : "bg-muted"}`} />
          ))}
        </div>

        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
          className="flex-1"
        >
          {step === 0 && (
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">Choose a service</h2>
              <p className="text-sm text-muted-foreground mb-6">What do you need today?</p>
              <div className="space-y-3">
                {serviceTypes.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setService(s.id)}
                    className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${
                      service === s.id ? "border-primary bg-cleanzyn-blue-light" : "border-transparent bg-card shadow-card"
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${service === s.id ? "gradient-hero" : "bg-muted"}`}>
                      <s.icon size={22} className={service === s.id ? "text-primary-foreground" : "text-muted-foreground"} />
                    </div>
                    <span className="font-semibold text-foreground">{s.label}</span>
                    {service === s.id && (
                      <div className="ml-auto w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                        <Check size={14} className="text-primary-foreground" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">Select options</h2>
              <p className="text-sm text-muted-foreground mb-6">Customize your service</p>

              {service === "carwash" && (
                <>
                  <p className="text-sm font-semibold text-foreground mb-3">Car Type</p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {carOptions.map((c) => (
                      <button
                        key={c}
                        onClick={() => setCarType(c)}
                        className={`p-3 rounded-xl text-sm font-medium transition-all ${
                          carType === c ? "bg-primary text-primary-foreground" : "bg-card shadow-card text-foreground"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </>
              )}

              <p className="text-sm font-semibold text-foreground mb-3">Cleaning Type</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {cleanTypes.map((c) => (
                  <button
                    key={c}
                    onClick={() => setOption(c)}
                    className={`p-3 rounded-xl text-sm font-medium transition-all ${
                      option === c ? "bg-primary text-primary-foreground" : "bg-card shadow-card text-foreground"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>

              {/* Location */}
              <p className="text-sm font-semibold text-foreground mb-3">Location</p>
              <button className="w-full flex items-center gap-3 p-4 rounded-2xl bg-card shadow-card">
                <MapPin size={18} className="text-primary" />
                <span className="text-sm text-foreground flex-1 text-left">Casablanca, Maarif</span>
                <ChevronRight size={16} className="text-muted-foreground" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">Pick date & time</h2>
              <p className="text-sm text-muted-foreground mb-6">Choose when you want the service</p>

              {/* Dates */}
              <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                {dates.map((d, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedDate(i)}
                    className={`flex-shrink-0 flex flex-col items-center gap-1 w-14 py-3 rounded-2xl transition-all ${
                      selectedDate === i ? "gradient-hero text-primary-foreground" : "bg-card shadow-card text-foreground"
                    }`}
                  >
                    <span className="text-[10px] font-medium opacity-70">
                      {d.toLocaleDateString("en", { weekday: "short" })}
                    </span>
                    <span className="text-lg font-bold">{d.getDate()}</span>
                  </button>
                ))}
              </div>

              {/* Time Slots */}
              <div className="flex items-center gap-2 mb-4">
                <Clock size={16} className="text-primary" />
                <p className="text-sm font-semibold text-foreground">Available times</p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {timeSlots.map((t) => (
                  <button
                    key={t}
                    onClick={() => setSelectedTime(t)}
                    className={`py-3 rounded-xl text-sm font-medium transition-all ${
                      selectedTime === t ? "bg-primary text-primary-foreground" : "bg-card shadow-card text-foreground"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">Confirm booking</h2>
              <p className="text-sm text-muted-foreground mb-6">Review your order details</p>

              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-card shadow-card space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Service</span>
                    <span className="font-semibold text-foreground capitalize">{service === "carwash" ? "Car Wash" : service}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Type</span>
                    <span className="font-semibold text-foreground">{option}</span>
                  </div>
                  {service === "carwash" && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Car</span>
                      <span className="font-semibold text-foreground">{carType}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Date</span>
                    <span className="font-semibold text-foreground">
                      {dates[selectedDate].toLocaleDateString("en", { month: "short", day: "numeric" })}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Time</span>
                    <span className="font-semibold text-foreground">{selectedTime}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Location</span>
                    <span className="font-semibold text-foreground">Casablanca, Maarif</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-cleanzyn-blue-light">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-foreground">Total Price</span>
                    <span className="text-2xl font-bold text-primary">{price} MAD</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>

        {/* Bottom Button */}
        <div className="mt-6">
          <Button
            onClick={() => {
              if (step < 3) setStep(step + 1);
              else navigate("/payment");
            }}
            className="w-full h-14 rounded-2xl gradient-hero text-primary-foreground font-semibold text-base shadow-elevated"
          >
            {step < 3 ? "Continue" : `Pay ${price} MAD`}
          </Button>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Booking;

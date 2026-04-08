import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Star, Sparkles } from "lucide-react";
import MobileLayout from "@/components/MobileLayout";
import { Button } from "@/components/ui/button";

const Rating = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");

  return (
    <MobileLayout>
      <div className="min-h-screen flex flex-col items-center justify-center pb-8">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="text-center w-full"
        >
          {/* Success badge */}
          <div className="w-20 h-20 rounded-3xl gradient-hero flex items-center justify-center mx-auto mb-6 shadow-elevated">
            <Sparkles size={36} className="text-primary-foreground" />
          </div>

          <h1 className="text-2xl font-bold text-foreground mb-2">Service Complete!</h1>
          <p className="text-sm text-muted-foreground mb-8">How was your experience with Youssef M.?</p>

          {/* Stars */}
          <div className="flex justify-center gap-2 mb-8">
            {[1, 2, 3, 4, 5].map((i) => (
              <button key={i} onClick={() => setRating(i)} className="transition-transform active:scale-90">
                <Star
                  size={40}
                  className={`transition-colors ${
                    i <= rating ? "text-cleanzyn-orange fill-cleanzyn-orange" : "text-muted"
                  }`}
                />
              </button>
            ))}
          </div>

          {rating > 0 && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <p className="text-sm font-semibold text-foreground mb-3">
                {rating >= 4 ? "Awesome! 🎉" : rating >= 3 ? "Thanks!" : "Sorry to hear that 😔"}
              </p>
              <textarea
                placeholder="Leave a comment (optional)"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                className="w-full h-24 p-4 rounded-2xl bg-muted text-sm text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 mb-6"
              />
            </motion.div>
          )}

          <Button
            onClick={() => navigate("/home")}
            className="w-full h-14 rounded-2xl gradient-hero text-primary-foreground font-semibold text-base shadow-elevated"
          >
            Done
          </Button>

          <button onClick={() => navigate("/home")} className="mt-3 text-sm text-muted-foreground">
            Skip
          </button>
        </motion.div>
      </div>
    </MobileLayout>
  );
};

export default Rating;

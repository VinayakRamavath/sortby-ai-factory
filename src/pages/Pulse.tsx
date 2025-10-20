import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Pulse = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Pulse</span>
          </h1>
          <div className="inline-block mb-6 px-6 py-2 glass rounded-full">
            <span className="text-sm font-medium text-accent">
              Coming Soon
            </span>
          </div>
        </motion.div>

        {/* Pulse - Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative glass rounded-3xl p-12 md:p-20 text-center overflow-hidden">
            {/* Animated Background */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 blur-3xl"
            />

            <div className="relative z-10">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 20px hsl(180 55% 55% / 0.3)",
                    "0 0 60px hsl(180 55% 55% / 0.6)",
                    "0 0 20px hsl(180 55% 55% / 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-flex p-8 bg-primary/10 rounded-3xl mb-8"
              >
                <Sparkles className="w-20 h-20 text-primary" />
              </motion.div>

              <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">Pulse</span>
              </h2>

              <div className="inline-block mb-6 px-6 py-2 glass rounded-full">
                <span className="text-sm font-medium text-accent">
                  Coming Soon
                </span>
              </div>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                The next evolution in AI-powered enterprise transformation.
                Stay tuned for groundbreaking innovation.
              </p>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 glass rounded-full font-semibold inline-flex items-center gap-2"
                >
                  Get Early Access
                  <ArrowRight />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pulse;

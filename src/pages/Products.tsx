import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
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
            Our <span className="gradient-text">Products</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Productized AI platforms designed for enterprise velocity and impact
          </p>
        </motion.div>

        {/* Suvira Product */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="glass rounded-3xl overflow-hidden">
            {/* Video Banner Placeholder */}
            <div className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="inline-flex p-6 bg-primary/10 rounded-3xl glow mb-6"
                >
                  <Sparkles className="w-16 h-16 text-primary" />
                </motion.div>
                <h2 className="font-display text-4xl md:text-6xl font-bold gradient-text mb-4">
                  Suvira
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto px-6">
                  Video content coming soon...
                </p>
              </div>
            </div>

            {/* Suvira Details */}
            <div className="p-8 md:p-12">
              <h3 className="font-display text-3xl md:text-4xl font-bold mb-6">
                The AI-Powered Business Analytics Across All Your Company's Data
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Seamlessly integrate with your data systems to deliver real-time analytics, surface critical insights, and support high-impact decision-making accelerating performance across operations, strategy, and growth.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="glass p-6 rounded-xl">
                  <h4 className="font-semibold text-xl mb-2 text-primary">
                    25-40%
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Time savings in testing & engineering
                  </p>
                </div>
                <div className="glass p-6 rounded-xl">
                  <h4 className="font-semibold text-xl mb-2 text-primary">
                    Reduced
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Failure rates with AI-driven quality assurance
                  </p>
                </div>
                <div className="glass p-6 rounded-xl">
                  <h4 className="font-semibold text-xl mb-2 text-primary">
                    Improved
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Funnel & retention metrics
                  </p>
                </div>
              </div>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold inline-flex items-center gap-2"
                >
                  Learn More About Suvira
                  <ArrowRight />
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Pulse - Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
                Feel the Market Before You Move. AI-powered synthetic consumers that test your strategies in minutes, not months. Generate evidence-based insights that guide campaign design and go-to-market strategies
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

export default Products;

import { motion } from "framer-motion";
import { ArrowRight, Zap, Target, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
import Hero3D from "@/components/Hero3D";

const Home = () => {
  const features = [
    {
      icon: Zap,
      title: "AI Readiness",
      description: "Data modernization, strategy, and Center of Excellence setup",
    },
    {
      icon: Target,
      title: "AI Acceleration",
      description: "Targeted copilots with measurable ROI in sales, retention, and productivity",
    },
    {
      icon: Rocket,
      title: "AI Reimagination",
      description: "Transform processes and roles with AI-native workflows",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Hero3D />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6 px-6 py-2 glass rounded-full"
            >
              <span className="text-sm font-medium gradient-text">
                AI Service as Software
              </span>
            </motion.div>

            <h1 className="font-display text-6xl md:text-8xl font-bold mb-6">
              Transform with{" "}
              <span className="gradient-text">AI Innovation</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Bridge the gap between AI potential and enterprise reality with our
              productized platforms, repeatable delivery, and measurable outcomes
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg flex items-center gap-2 glow"
                >
                  Explore Products
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass rounded-full font-semibold text-lg"
                >
                  Get Started
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </motion.div>
      </section>

      {/* Value Ladder Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Three-Stage <span className="gradient-text">Value Ladder</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From foundation to transformation, we accelerate your AI journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="glass p-8 rounded-2xl card-3d group"
              >
                <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-2xl glow">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-12 md:p-20 rounded-3xl text-center max-w-4xl mx-auto glow"
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Join leading enterprises leveraging our AI Innovation Factory for
              measurable business outcomes
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg inline-flex items-center gap-2"
              >
                Start Your Journey
                <ArrowRight />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

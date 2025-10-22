import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Suvira = () => {
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
            <span className="gradient-text">Suvira</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The AI-Powered Business Analytics Across All Your Company's Data
          </p>
        </motion.div>

        {/* Suvira Product */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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

        {/* How Suvira Works Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">How Suvira Works</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Transform natural language questions into powerful SQL insights with Knowledge Graph-enhanced AI intelligence
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass p-8 rounded-3xl glow"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  1
                </motion.div>
                <h3 className="font-display text-2xl md:text-3xl font-bold gradient-text">
                  Train Your AI Model
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Suvira builds a comprehensive understanding of your data through advanced Knowledge Graph technology layered on top of RAG. This dual approach creates deeper contextual relationships between your data entities.
              </p>
              
              {/* Features List */}
              <div className="space-y-3 mb-6">
                {[
                  "Maps relationships with Knowledge Graph architecture",
                  "Automatically analyzes your database schema (DDL)",
                  "Learns from your existing SQL queries",
                  "Understands complex business terminology and connections"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {["Knowledge Graph", "RAG", "Vector Database", "LLM"].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="glass p-8 rounded-3xl glow"
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div
                  className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  2
                </motion.div>
                <h3 className="font-display text-2xl md:text-3xl font-bold gradient-text">
                  Ask & Execute
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Simply ask questions in plain English. Suvira's Knowledge Graph understands context and relationships, generating precise SQL queries that capture your true intent.
              </p>
              
              {/* Features List */}
              <div className="space-y-3 mb-6">
                {[
                  "Natural language to SQL with contextual understanding",
                  "Knowledge Graph-powered query optimization",
                  "Real-time execution and intelligent results",
                  "Self-learning from user feedback"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {["Auto-correction", "Feedback Loop", "Vanna AI"].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </div>
  );
};

export default Suvira;

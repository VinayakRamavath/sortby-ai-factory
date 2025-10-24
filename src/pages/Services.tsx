import { motion } from "framer-motion";
import { Database, Brain, LineChart, Lightbulb, Users, Zap, Target, Rocket, CheckCircle, TrendingUp, Shield, Clock } from "lucide-react";
import podEvolution from "../assets/pod-evolution-new.gif";

const Services = () => {
  const coreServices = [
    {
      icon: Database,
      title: "Data Engineering & Architecture",
      subtitle: "Beyond pipelines—we build data foundations that scale",
      description: "Stop fighting with fragmented data systems. We architect unified data platforms that turn your scattered information into AI-ready assets, handling billions of records with sub-second query times.",
      deliverables: [
        "Real-time streaming architectures processing 100K+ events/second",
        "Self-healing data pipelines with 99.9% uptime SLAs",
        "Automated data quality monitoring catching issues before they impact models",
        "Cost-optimized storage strategies (typically 40% reduction in cloud costs)",
        "Zero-downtime migration from legacy systems"
      ]
    },
    {
      icon: Brain,
      title: "AI/ML Engineering",
      subtitle: "From notebook to production in weeks, not months",
      description: "Most ML projects die in the 'last mile' to production. Our ML engineers specialize in the unglamorous but critical work of making models reliable, scalable, and maintainable in real-world conditions.",
      deliverables: [
        "Model serving infrastructure handling 10M+ predictions daily",
        "A/B testing frameworks for continuous model improvement",
        "Automated retraining pipelines responding to data drift",
        "Edge deployment for sub-10ms inference latency",
        "Model explainability dashboards for regulatory compliance"
      ]
    },
    {
      icon: LineChart,
      title: "Applied Data Science",
      subtitle: "Business problems first, algorithms second",
      description: "We start where most data scientists stop—understanding your actual business constraints, not just optimizing metrics. Our team has deployed models that have generated $500M+ in verified business value.",
      deliverables: [
        "Custom models outperforming off-the-shelf solutions by 30-50%",
        "Causal inference studies proving ROI before full deployment",
        "Interpretable models that your stakeholders actually trust",
        "Rapid prototyping—first results in 2 weeks",
        "Post-deployment impact measurement and iteration"
      ]
    },
    {
      icon: Lightbulb,
      title: "AI Transformation Strategy",
      subtitle: "Roadmaps grounded in engineering reality",
      description: "We've seen enough 'AI strategies' gathering dust. Our approach combines strategic vision with tactical execution plans, because transformation happens through deployed systems, not PowerPoints.",
      deliverables: [
        "Technical debt assessment and remediation planning",
        "Build vs. buy vs. partner decision frameworks",
        "Skills gap analysis with specific training recommendations",
        "Vendor-agnostic technology selection guidance",
        "Executive dashboards tracking AI initiative ROI"
      ]
    }
  ];

  const transformationStages = [
    {
      stage: "Stage 1",
      title: "Foundation",
      timeframe: "Months 0-6",
      subtitle: "Get your house in order",
      description: "Before chasing shiny AI use cases, we help you build the boring but essential foundation. This isn't glamorous work, but it's what separates successful AI programs from expensive failures.",
      outcomes: [
        "Unified data platform eliminating 80% of data prep time",
        "First production model proving the approach",
        "Governance framework preventing future technical debt",
        "Core team trained and operational",
        "Executive alignment on 18-month roadmap"
      ]
    },
    {
      stage: "Stage 2",
      title: "Acceleration",
      timeframe: "Months 6-18",
      subtitle: "Scale what works, kill what doesn't",
      description: "With foundations in place, we rapidly deploy AI across high-impact use cases while building your internal capabilities. This is where ROI becomes undeniable.",
      outcomes: [
        "5-10 production models across business units",
        "Internal CoE reducing external dependency by 50%",
        "Automated MLOps cutting deployment time 75%",
        "Measurable impact on core KPIs",
        "Cross-functional teams collaborating effectively"
      ]
    },
    {
      stage: "Stage 3",
      title: "Transformation",
      timeframe: "Months 18+",
      subtitle: "AI becomes how you operate",
      description: "AI shifts from 'project' to 'platform'—embedded in your operations, culture, and competitive advantage. You're not just using AI; you're an AI-native organization.",
      outcomes: [
        "AI-first process redesign across major functions",
        "Proprietary models creating competitive moats",
        "Internal platform serving 100+ use cases",
        "Continuous innovation culture",
        "Industry leadership position"
      ]
    }
  ];

  const whyPartner = [
    {
      icon: Zap,
      title: "Platform Advantage = 60% Faster Delivery",
      description: "While others start from scratch, we deploy on our proven platform with pre-built components for data ingestion, model serving, monitoring, and governance. It's like starting at mile 20 of a marathon."
    },
    {
      icon: Users,
      title: "We've Been Where You Are",
      description: "Our team isn't consultants who learned AI from courses—we're engineers who've built and scaled AI systems in production. We've made the mistakes, learned the lessons, and know what actually works in production."
    },
    {
      icon: Target,
      title: "We Measure Success in Production Metrics",
      description: "94% of our models reach production (industry average: 20%). Average time to production: 12 weeks (industry average: 9 months). Client NPS score: 72 (industry average: 32)."
    },
    {
      icon: Shield,
      title: "Our Failures Made Us Better",
      description: "We've had projects fail—and we share those lessons upfront. We'll tell you when your data isn't ready, when a use case won't deliver ROI, or when you should build internally instead of hiring us. This honesty has earned us 90% client retention."
    }
  ];


  const accelerators = [
    "50+ pre-built feature engineering templates",
    "20+ industry-specific models (retail, finance, healthcare, manufacturing)",
    "100+ data quality check patterns",
    "30+ MLOps pipeline templates"
  ];

  const postEngagement = [
    "Monthly office hours for your team",
    "First priority for platform feature requests"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Text Section */}
      <section className="pt-16 pb-8 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6">
              Core Service <span className="gradient-text">Offerings</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
              Transform your AI ambitions into operational reality with services designed for measurable business impact
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pod Evolution Content Box */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="glass p-6 md:p-12 rounded-3xl backdrop-blur-sm border border-primary/20 max-w-6xl mx-auto text-center"
          >
            <motion.h2 
              className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Pod Evolution: <span className="gradient-text">Human + AI Collaboration</span>
            </motion.h2>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Our AI-augmented pods combine human expertise with AI agents for accelerated delivery
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Image Hero Section */}
      <section className="relative flex items-center justify-center py-8 md:py-12 px-4 md:px-6">
        {/* Image Container */}
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="aspect-[2644/1264] w-full">
            <img 
              src={podEvolution}
              alt="Pod Evolution - Human + AI Collaboration"
              className="w-full h-full object-contain"
            />
          </div>
          
          {/* Simple Border */}
          <div className="absolute inset-0 border-2 border-primary/30 rounded-xl"></div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass p-8 md:p-12 rounded-3xl max-w-5xl mx-auto"
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="p-4 bg-primary/10 rounded-2xl glow">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-primary mb-2">0{index + 1}</div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-2">
                      {service.title}
                    </h2>
                    <p className="text-lg text-primary/80 italic mb-4">{service.subtitle}</p>
                    <p className="text-lg text-muted-foreground mb-6">{service.description}</p>
                  </div>
                </div>
                
                <div className="ml-20">
                  <h3 className="font-semibold text-xl mb-4">What we deliver:</h3>
                  <ul className="space-y-3">
                    {service.deliverables.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Stages of AI Transformation */}
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
              Three Stages of <span className="gradient-text">AI Transformation</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We've guided 10+ enterprises through AI adoption. Here's the pattern that works:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {transformationStages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -8 }}
                className="glass p-8 rounded-2xl"
              >
                <div className="text-sm font-semibold text-primary mb-2">{stage.stage}</div>
                <h3 className="font-display text-2xl font-bold mb-2">{stage.title}</h3>
                <div className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {stage.timeframe}
                </div>
                <p className="text-lg font-semibold mb-3">{stage.subtitle}</p>
                <p className="text-muted-foreground mb-6">{stage.description}</p>
                
                <h4 className="font-semibold mb-3">Key outcomes:</h4>
                <ul className="space-y-2">
                  {stage.outcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
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
              Why Partner <span className="gradient-text">With Us</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
            {whyPartner.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="glass p-8 rounded-2xl"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <reason.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold flex-1">{reason.title}</h3>
                </div>
                <p className="text-muted-foreground">{reason.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Industry-Specific Accelerators */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Industry-Specific <span className="gradient-text">Accelerators</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              We don't start from zero. Our library includes:
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 md:p-12 rounded-3xl max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {accelerators.map((accelerator, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <TrendingUp className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground font-semibold">{accelerator}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Post-Engagement Success */}
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
              Post-Engagement <span className="gradient-text">Success</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Unlike traditional consultancies, we're invested in your long-term success:
            </p>
            <div className="space-y-4 mb-10">
              {postEngagement.map((item, index) => (
                <div key={index} className="flex items-center justify-center gap-3">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;

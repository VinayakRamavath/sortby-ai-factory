import { motion } from "framer-motion";
import { Brain, Code, Database, Zap, Users, Shield } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "AI Strategy & CoE",
      description:
        "Build your AI Center of Excellence with strategic roadmaps, governance frameworks, and executive alignment for sustainable transformation.",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Database,
      title: "Data Modernization",
      description:
        "Transform legacy data infrastructure into AI-ready platforms with automated pipelines, quality assurance, and scalable architectures.",
      gradient: "from-secondary to-accent",
    },
    {
      icon: Code,
      title: "AI Copilots & Solutions",
      description:
        "Deploy function-specific AI assistants for sales, support, engineering, and operations with measurable productivity gains.",
      gradient: "from-accent to-primary",
    },
    {
      icon: Zap,
      title: "AI Innovation Factory",
      description:
        "Rapid POC-to-production delivery with AI-pods, design thinking, and fail-fast methodology for accelerated time-to-value.",
      gradient: "from-primary to-accent",
    },
    {
      icon: Users,
      title: "Domain Expertise",
      description:
        "Industry-specific AI playbooks and accelerators for healthcare, finance, retail, and manufacturing verticals.",
      gradient: "from-secondary to-primary",
    },
    {
      icon: Shield,
      title: "AI Governance",
      description:
        "Enterprise-grade security, compliance, and ethical AI frameworks with continuous monitoring and risk management.",
      gradient: "from-accent to-secondary",
    },
  ];

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
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            End-to-end AI transformation services delivered through our proven
            AI Innovation Factory methodology
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -12, rotateY: 5 }}
              className="relative group"
            >
              <div className="glass rounded-2xl p-8 h-full card-3d">
                {/* Gradient Background on Hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient}`}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6 glow"
                  >
                    <service.icon className="w-8 h-8 text-primary" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-bold mb-4 group-hover:gradient-text transition-all">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  {/* Hover Border Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-20 blur-xl`} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Delivery Model Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-32 glass rounded-3xl p-12 md:p-20 text-center max-w-5xl mx-auto"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            AI Innovation <span className="gradient-text">Factory</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our delivery playbook combines configurable AI-pods, co-staffed teams,
            and design-thinking methodologies to accelerate POCs to production with
            predictable pricing and governance.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass p-6 rounded-xl">
              <h4 className="font-display text-2xl font-bold mb-3 text-primary">
                Fast
              </h4>
              <p className="text-sm text-muted-foreground">
                Rapid POC to production with fail-fast methodology
              </p>
            </div>
            <div className="glass p-6 rounded-xl">
              <h4 className="font-display text-2xl font-bold mb-3 text-primary">
                Predictable
              </h4>
              <p className="text-sm text-muted-foreground">
                Fixed pricing, clear milestones, and transparent governance
              </p>
            </div>
            <div className="glass p-6 rounded-xl">
              <h4 className="font-display text-2xl font-bold mb-3 text-primary">
                Measurable
              </h4>
              <p className="text-sm text-muted-foreground">
                Concrete KPIs and business impact tracking
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;

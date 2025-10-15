import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, TrendingUp, Lightbulb, Rocket } from "lucide-react";

const Blogs = () => {
  const blogs = [
    {
      icon: TrendingUp,
      title: "The AI Transformation Playbook: From POC to Production",
      excerpt:
        "Discover how leading enterprises are bridging the gap between AI potential and reality with our proven three-stage approach.",
      author: "SortBy Team",
      date: "Oct 10, 2025",
      category: "Strategy",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Lightbulb,
      title: "Measuring AI ROI: Beyond the Hype",
      excerpt:
        "Learn how to track meaningful KPIs and demonstrate concrete business value from your AI initiatives.",
      author: "SortBy Team",
      date: "Oct 8, 2025",
      category: "Insights",
      gradient: "from-secondary to-accent",
    },
    {
      icon: Rocket,
      title: "Building Your AI Innovation Factory",
      excerpt:
        "A deep dive into our delivery methodology that accelerates time-to-value with configurable AI-pods and design thinking.",
      author: "SortBy Team",
      date: "Oct 5, 2025",
      category: "Innovation",
      gradient: "from-accent to-primary",
    },
    {
      icon: TrendingUp,
      title: "Data Modernization: The Foundation of AI Success",
      excerpt:
        "Why legacy data infrastructure is holding back your AI transformation and how to fix it.",
      author: "SortBy Team",
      date: "Oct 1, 2025",
      category: "Technology",
      gradient: "from-primary to-accent",
    },
    {
      icon: Lightbulb,
      title: "AI Governance: Balancing Innovation and Risk",
      excerpt:
        "Enterprise-grade frameworks for secure, compliant, and ethical AI deployment at scale.",
      author: "SortBy Team",
      date: "Sep 28, 2025",
      category: "Governance",
      gradient: "from-secondary to-primary",
    },
    {
      icon: Rocket,
      title: "The Rise of Function-Specific AI Copilots",
      excerpt:
        "How targeted AI assistants are delivering 25-40% productivity gains across sales, support, and engineering teams.",
      author: "SortBy Team",
      date: "Sep 25, 2025",
      category: "Products",
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
            Insights & <span className="gradient-text">Perspectives</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Thought leadership on AI transformation, innovation, and enterprise strategy
          </p>
        </motion.div>

        {/* Featured Blog */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass rounded-3xl overflow-hidden mb-16 card-3d group cursor-pointer"
        >
          <div className="grid md:grid-cols-2">
            {/* Image/Icon Side */}
            <div className="relative h-64 md:h-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center p-12">
              <motion.div
                animate={{ rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="glow"
              >
                <TrendingUp className="w-32 h-32 text-primary" />
              </motion.div>
            </div>

            {/* Content Side */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                  Featured
                </span>
                <span className="px-3 py-1 text-xs font-semibold bg-secondary/10 text-secondary rounded-full">
                  Strategy
                </span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 group-hover:gradient-text transition-all">
                The AI Transformation Playbook: From POC to Production
              </h2>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                Discover how leading enterprises are bridging the gap between AI potential
                and reality with our proven three-stage approach to sustainable transformation.
              </p>

              <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>SortBy Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Oct 10, 2025</span>
                </div>
              </div>

              <button className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                Read Article
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -12 }}
              className="glass rounded-2xl overflow-hidden card-3d group cursor-pointer h-full flex flex-col"
            >
              {/* Icon Header */}
              <div className={`relative h-48 bg-gradient-to-br ${blog.gradient} flex items-center justify-center`}>
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-6 bg-background/10 rounded-2xl backdrop-blur-sm"
                >
                  <blog.icon className="w-12 h-12 text-foreground" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full">
                    {blog.category}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold mb-3 group-hover:gradient-text transition-all">
                  {blog.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-6 flex-1">
                  {blog.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-4">
                  <div className="flex items-center gap-2">
                    <User className="w-3 h-3" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    <span>{blog.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

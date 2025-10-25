import { motion } from "framer-motion";
import { ArrowRight, Zap, Target, Rocket, ChevronDown, ChevronUp, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Hero3D from "@/components/Hero3D";
import HeroVideo from "@/components/HeroVideo";
import GlitchBackground from "@/components/GlitchBackground";
import GlitchText from "@/components/GlitchText";

// Import all assets
import snowflake from "../assets/Snowflake.png";
import googleBigQuery from "../assets/google-big-query-logo.jpg";
import amazonRedshift from "../assets/amazon_redshift.png";
import postgresql from "../assets/postgresql.png";
import mysql from "../assets/mysql.png";
import microsoftSqlServer from "../assets/microsoft_sql_server.png";
import microsoftAzure from "../assets/Microsoft_Azure.png";
import mongodb from "../assets/MongoDB.png";
import ibmdb2 from "../assets/ibmdb2.png";
import teradata from "../assets/Teradata.png";
import sqlite from "../assets/sqlite.png";
import apacheSpark from "../assets/apache-spark.png";
import amazonAthena from "../assets/amazon_athena.png";
import oracleDatabase from "../assets/oracle_database.png";
import druid from "../assets/druid.png";
import presto from "../assets/presto.png";
import linkedin from "../assets/Linkedin.png";
import servicenow from "../assets/servicenow.png";
import salesforce from "../assets/salesforce.png";
import shopify from "../assets/shopify.png";
import amplitude from "../assets/amplitude.png";
import googleAds from "../assets/Google-ads.png";
import googleAnalytics from "../assets/Google-Analytics-Logo.png";
import firebase from "../assets/firebase.png";
import workday from "../assets/workday.png";
import magento from "../assets/magento.png";
import woocommerce from "../assets/woocommerce.png";
import meta from "../assets/meta.png";
import sqlEditor from "../assets/sql_editor.png";
import dashboards from "../assets/dashboards.png";
import automation from "../assets/automation.png";
import platform from "../assets/platform.png";
 

const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAboutSuviraOpen, setIsAboutSuviraOpen] = useState(false);

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
      {/* Hero Section (Glitch Inspired) */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-8 sm:py-12 md:py-16">
        <GlitchBackground />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6"
            >
              <motion.button
                onClick={() => {
                  setIsDropdownOpen(!isDropdownOpen);
                  if (!isDropdownOpen) {
                    // Scroll to dropdown content after a short delay to allow animation to start
                    setTimeout(() => {
                      const dropdownElement = document.getElementById('ai-service-dropdown');
                      if (dropdownElement) {
                        dropdownElement.scrollIntoView({ 
                          behavior: 'smooth', 
                          block: 'start',
                          inline: 'nearest'
                        });
                      }
                    }, 100);
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 glass rounded-full border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 cursor-pointer group"
              >
                <span className="text-sm font-medium gradient-text group-hover:text-primary transition-colors">
                AI Service as Software
              </span>
                <motion.div
                  animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-4 h-4 text-primary" />
            </motion.div>
              </motion.button>
            </motion.div>
            <div className="mb-6">
              <GlitchText text="SORTBY" playOnce={false} />
            </div>
          </div>
        </div>
        
        {/* Agent Suvira Awaiting Hook - Bottom Left Corner of Section */}
        <motion.div
          initial={{ opacity: 0, x: -20, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-8 left-8 z-20"
        >
          <div className="inline-block px-6 py-3 glass rounded-full border border-primary/30 bg-primary/10 shadow-lg">
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex items-center gap-3"
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold text-primary">
                Agent Suvira awaiting
              </span>
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* AI Service as Software Dropdown Content */}
      <motion.div
        id="ai-service-dropdown"
        initial={false}
        animate={{ 
          height: isDropdownOpen ? "auto" : 0,
          opacity: isDropdownOpen ? 1 : 0
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="overflow-hidden bg-gradient-to-b from-background to-muted/20 border-t border-primary/10 relative"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isDropdownOpen ? 1 : 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center mb-20 relative"
            >
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                <span className="glitch-sans-static">AI SERVICE AS SOFTWARE</span>
            </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                <span className="glitch-sans-static">WE DON'T DELIVER SOFTWARE, WE DELIVER OUTCOMES</span>
              </p>
              
              {/* Decorative Line */}
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-transparent mx-auto mt-8 rounded-full"></div>
            </motion.div>

            {/* The Paradigm Shift */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isDropdownOpen ? 1 : 0, y: isDropdownOpen ? 0 : 20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-16"
            >
              <h3 className="font-display text-3xl font-bold mb-8 text-center">
                The Paradigm <span className="gradient-text">Shift</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8 text-center max-w-4xl mx-auto">
                For decades, software ate the world by digitizing manual processes. Now, AI is eating software by automating the work itself.
              </p>
              
              {/* Old vs New Model */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Old Model */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isDropdownOpen ? 1 : 0, x: isDropdownOpen ? 0 : -20 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="bg-primary/10 border border-primary/20 rounded-lg p-6 backdrop-blur-sm"
                >
                  <h4 className="text-xl font-bold text-primary mb-4">The Old Model: Software-as-a-Service</h4>
                  <p className="text-muted-foreground mb-4">You buy tools. You hire people. You train them. You hope for results.</p>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm font-mono text-muted-foreground">
                      <strong>Example:</strong><br />
                      Buy Salesforce → Hire SDRs → Train them on the platform → Cross your fingers they hit quota
                    </p>
                  </div>
                  <p className="text-sm text-primary/80 mt-4">
                    <strong>The problem:</strong> You're responsible for the outcome. The software vendor just provides access.
                  </p>
                </motion.div>

                {/* New Model */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: isDropdownOpen ? 1 : 0, x: isDropdownOpen ? 0 : 20 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="bg-primary/10 border border-primary/20 rounded-lg p-6 backdrop-blur-sm"
                >
                  <h4 className="text-xl font-bold text-primary mb-4">The New Model: Service-as-Software</h4>
                  <p className="text-muted-foreground mb-4">You buy outcomes. AI agents do the work. The platform guarantees results.</p>
                  <div className="bg-muted/50 rounded-lg p-4">
                    <p className="text-sm font-mono text-muted-foreground">
                      <strong>Example:</strong><br />
                      Engage AI sales agent → Qualified pipeline delivered automatically → You focus on closing
                    </p>
                  </div>
                  <p className="text-sm text-primary/80 mt-4">
                    <strong>The difference:</strong> We're responsible for the outcome. The platform delivers the service.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Our Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isDropdownOpen ? 1 : 0, y: isDropdownOpen ? 0 : 20 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="mb-16"
            >
              <h3 className="font-display text-3xl font-bold mb-8 text-center">
                Our Vision: Platform-Powered <span className="gradient-text">Service Delivery</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8 text-center max-w-4xl mx-auto">
                At SortBy, we're not building AI features to bolt onto existing services. We're reimagining service delivery from the ground up with AI at the core.
              </p>
              
              {/* Platform Architecture Diagram */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: isDropdownOpen ? 1 : 0, scale: isDropdownOpen ? 1 : 0.9 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="text-center mb-8"
              >
                <img 
                  src={platform} 
                  alt="Platform Architecture" 
                  className="max-w-4xl h-auto mx-auto rounded-lg shadow-2xl"
                />
              </motion.div>

              {/* Three Layers */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isDropdownOpen ? 1 : 0, y: isDropdownOpen ? 0 : 20 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="text-center mb-12"
              >
                <h3 className="font-display text-3xl font-bold mb-4">
                  AI Agents + Platform + <span className="gradient-text">Human Expertise</span>
                </h3>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* AI Agent Services Layer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isDropdownOpen ? 1 : 0, y: isDropdownOpen ? 0 : 20 }}
                  transition={{ delay: 1.6, duration: 0.6 }}
                  className="group relative p-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border border-blue-500/20 rounded-2xl backdrop-blur-sm hover:border-blue-400/40 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">
                    AI Agent Services Layer
                  </h4>
                  
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Autonomous agents that deliver complete business functions end-to-end—from billing support to data entry to customer service. Each agent is purpose-built to own outcomes, not just execute tasks.
                  </p>
                  
                  {/* Feature highlights */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-blue-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>End-to-end business functions</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-blue-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>Outcome-focused design</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-blue-300">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                      <span>Autonomous operation</span>
                    </div>
                  </div>
                </motion.div>

                {/* SortBy Platform Layer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isDropdownOpen ? 1 : 0, y: isDropdownOpen ? 0 : 20 }}
                  transition={{ delay: 1.8, duration: 0.6 }}
                  className="group relative p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/5 border border-purple-500/20 rounded-2xl backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-4 text-white group-hover:text-purple-300 transition-colors">
                    SortBy Platform Layer
                  </h4>
                  
                  <p className="text-slate-300 leading-relaxed mb-6">
                    The underlying infrastructure that powers everything—data engineering, AI/ML operations, and applied data science capabilities. This is where the heavy lifting happens: real-time data processing, model serving, automated MLOps, and governance frameworks.
                  </p>
                  
                  {/* Feature highlights */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-purple-300">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      <span>Real-time data processing</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-purple-300">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      <span>Automated MLOps</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-purple-300">
                      <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                      <span>Governance frameworks</span>
                    </div>
                  </div>
                </motion.div>

                {/* Human Expertise Layer */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isDropdownOpen ? 1 : 0, y: isDropdownOpen ? 0 : 20 }}
                  transition={{ delay: 2.0, duration: 0.6 }}
                  className="group relative p-8 bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border border-emerald-500/20 rounded-2xl backdrop-blur-sm hover:border-emerald-400/40 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  
                  <h4 className="text-xl font-bold mb-4 text-white group-hover:text-emerald-300 transition-colors">
                    Human Expertise Layer
                  </h4>
                  
                  <p className="text-slate-300 leading-relaxed mb-6">
                    Strategic guidance, domain knowledge, and judgment that AI can't replicate. Our teams focus on business problem framing, technical architecture decisions, domain-specific model design, and stakeholder management.
                  </p>
                  
                  {/* Feature highlights */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-emerald-300">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                      <span>Strategic guidance</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-emerald-300">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                      <span>Domain expertise</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-emerald-300">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                      <span>Stakeholder management</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Three-Stage Value Ladder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isDropdownOpen ? 1 : 0, y: isDropdownOpen ? 0 : 20 }}
              transition={{ delay: 2.2, duration: 0.6 }}
              className="text-center mb-16 relative"
            >
              {/* Section Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-12"></div>
              
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                Three-Stage <span className="gradient-text">Value Ladder</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                From foundation to transformation, we accelerate your AI journey
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isDropdownOpen ? 1 : 0, y: isDropdownOpen ? 0 : 20 }}
              transition={{ delay: 2.4, duration: 0.6 }}
              className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: isDropdownOpen ? 1 : 0, y: isDropdownOpen ? 0 : 30 }}
                  transition={{ delay: 2.6 + (index * 0.2), duration: 0.6 }}
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
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Featured Product Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="relative">
              {/* Tech Background Box */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-2xl blur-xl"></div>
              <div className="relative glass rounded-2xl p-8 md:p-12 border border-primary/30 overflow-hidden">
                {/* Animated Grid Background */}
                <div className="absolute inset-0 opacity-20">
                  <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                    {Array.from({ length: 48 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="border border-primary/20"
                        animate={{
                          opacity: [0.1, 0.3, 0.1],
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          delay: i * 0.05,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Floating Tech Elements */}
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="absolute top-4 right-4 w-8 h-8 border-2 border-accent rounded-full flex items-center justify-center"
                >
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                </motion.div>

                <motion.div
                  animate={{
                    x: [0, 20, 0],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-4 left-4 w-6 h-6 border border-secondary rounded"
                >
                  <div className="w-full h-full bg-gradient-to-br from-secondary to-accent opacity-60"></div>
                </motion.div>

                {/* Main Text */}
                <div className="relative z-10">
                  <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
                    <span className="glitch-sans" data-text="FEATURED PRODUCT AGENT SUVIRA">FEATURED PRODUCT AGENT SUVIRA</span>
                  </h2>
                  
                  {/* Tech Status Indicators */}
                  <div className="flex justify-center items-center gap-6 mt-6">
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm font-mono text-green-400">ACTIVE</span>
                    </motion.div>
                    
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <span className="text-sm font-mono text-blue-400">ONLINE</span>
                    </motion.div>
                    
                    <motion.div
                      animate={{ opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 2, delay: 1, repeat: Infinity }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-sm font-mono text-purple-400">READY</span>
                    </motion.div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex justify-center items-center gap-4 mt-8">
                <motion.button
                      onClick={() => setIsAboutSuviraOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-base hover:bg-primary/90 transition-all duration-300 glow"
                >
                      About Suvira
                </motion.button>
                    
                    <Link to="/products/suvira">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold text-base hover:bg-primary/90 transition-all duration-300 glow"
                >
                        Meet Suvira
                </motion.button>
              </Link>
                  </div>
                </div>

                {/* Scanning Line Effect */}
                <motion.div
                  animate={{ y: [0, 200, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-60"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Explore Data Sources Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4 font-sans transition-all duration-300 ease-in-out" id="db-title">
              Connect any database or warehouse
            </h2>
            <p className="text-white/80 text-base sm:text-lg max-w-3xl mx-auto transition-all duration-300 ease-in-out" id="db-description">
              Connect SUVIRA directly to your database or warehouse to build dashboards and query your data in minutes.
            </p>
          </motion.div>

          {/* Database Logos Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-wrap justify-center items-center gap-12 md:gap-16 max-w-7xl mx-auto animate-scroll-horizontal"
          >
            {/* Snowflake */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.3, 
                duration: 0.5,
                type: "spring", 
                stiffness: 300, 
                damping: 20
              }}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
              }}
              className="flex items-center justify-center cursor-pointer"
              onMouseEnter={() => {
                document.getElementById('db-title')!.textContent = 'Connect Snowflake';
                document.getElementById('db-description')!.textContent = 'Seamlessly integrate with Snowflake data warehouse for advanced analytics and reporting.';
              }}
              onMouseLeave={() => {
                document.getElementById('db-title')!.textContent = 'Connect any database or warehouse';
                document.getElementById('db-description')!.textContent = 'Connect SUVIRA directly to your database or warehouse to build dashboards and query your data in minutes.';
              }}
            >
              <img 
                src={snowflake} 
                alt="Snowflake" 
                className="w-16 h-16 md:w-20 md:h-20 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>

            {/* Google BigQuery */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.4, 
                duration: 0.5,
                type: "spring", 
                stiffness: 300, 
                damping: 20
              }}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
              }}
              className="flex items-center justify-center cursor-pointer"
              onMouseEnter={() => {
                document.getElementById('db-title')!.textContent = 'Connect Google BigQuery';
                document.getElementById('db-description')!.textContent = 'Access Google Cloud BigQuery for serverless, highly scalable data analytics.';
              }}
              onMouseLeave={() => {
                document.getElementById('db-title')!.textContent = 'Connect any database or warehouse';
                document.getElementById('db-description')!.textContent = 'Connect SUVIRA directly to your database or warehouse to build dashboards and query your data in minutes.';
              }}
            >
              <img 
                src={googleBigQuery} 
                alt="Google BigQuery" 
                className="w-16 h-16 md:w-20 md:h-20 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>

            {/* Amazon Redshift */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.5, 
                duration: 0.5,
                type: "spring", 
                stiffness: 300, 
                damping: 20
              }}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
              }}
              className="flex items-center justify-center cursor-pointer"
              onMouseEnter={() => {
                document.getElementById('db-title')!.textContent = 'Connect Amazon Redshift';
                document.getElementById('db-description')!.textContent = 'Leverage AWS Redshift for fast, scalable data warehousing and analytics.';
              }}
              onMouseLeave={() => {
                document.getElementById('db-title')!.textContent = 'Connect any database or warehouse';
                document.getElementById('db-description')!.textContent = 'Connect SUVIRA directly to your database or warehouse to build dashboards and query your data in minutes.';
              }}
            >
              <img 
                src={amazonRedshift} 
                alt="Amazon Redshift" 
                className="w-16 h-16 md:w-20 md:h-20 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>

            {/* PostgreSQL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.6, 
                duration: 0.5,
                type: "spring", 
                stiffness: 300, 
                damping: 20
              }}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
              }}
              className="flex items-center justify-center cursor-pointer"
              onMouseEnter={() => {
                document.getElementById('db-title')!.textContent = 'Connect PostgreSQL';
                document.getElementById('db-description')!.textContent = 'Connect to PostgreSQL for robust, open-source relational database management.';
              }}
              onMouseLeave={() => {
                document.getElementById('db-title')!.textContent = 'Connect any database or warehouse';
                document.getElementById('db-description')!.textContent = 'Connect SUVIRA directly to your database or warehouse to build dashboards and query your data in minutes.';
              }}
            >
              <img 
                src={postgresql} 
                alt="PostgreSQL" 
                className="w-16 h-16 md:w-20 md:h-20 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>

            {/* MySQL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.7, 
                duration: 0.5,
                type: "spring", 
                stiffness: 300, 
                damping: 20
              }}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
              }}
              className="flex items-center justify-center cursor-pointer"
              onMouseEnter={() => {
                document.getElementById('db-title')!.textContent = 'Connect MySQL';
                document.getElementById('db-description')!.textContent = 'Integrate with MySQL for reliable, high-performance relational database management.';
              }}
              onMouseLeave={() => {
                document.getElementById('db-title')!.textContent = 'Connect any database or warehouse';
                document.getElementById('db-description')!.textContent = 'Connect SUVIRA directly to your database or warehouse to build dashboards and query your data in minutes.';
              }}
            >
              <img 
                src={mysql} 
                alt="MySQL" 
                className="w-16 h-16 md:w-20 md:h-20 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>

            {/* Microsoft SQL Server */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.9, 
                duration: 0.5,
                type: "spring", 
                stiffness: 300, 
                damping: 20
              }}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
              }}
              className="flex items-center justify-center cursor-pointer"
              onMouseEnter={() => {
                document.getElementById('db-title')!.textContent = 'Connect Microsoft SQL Server';
                document.getElementById('db-description')!.textContent = 'Connect to Microsoft SQL Server for enterprise-grade database management and analytics.';
              }}
              onMouseLeave={() => {
                document.getElementById('db-title')!.textContent = 'Connect any database or warehouse';
                document.getElementById('db-description')!.textContent = 'Connect SUVIRA directly to your database or warehouse to build dashboards and query your data in minutes.';
              }}
            >
              <img 
                src={microsoftSqlServer} 
                alt="Microsoft SQL Server" 
                className="w-16 h-16 md:w-20 md:h-20 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>

            {/* Microsoft Azure */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 1.0, 
                duration: 0.5,
                type: "spring", 
                stiffness: 300, 
                damping: 20
              }}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
              }}
              className="flex items-center justify-center cursor-pointer"
              onMouseEnter={() => {
                document.getElementById('db-title')!.textContent = 'Connect Microsoft Azure';
                document.getElementById('db-description')!.textContent = 'Leverage Microsoft Azure cloud services for scalable database and analytics solutions.';
              }}
              onMouseLeave={() => {
                document.getElementById('db-title')!.textContent = 'Connect any database or warehouse';
                document.getElementById('db-description')!.textContent = 'Connect SUVIRA directly to your database or warehouse to build dashboards and query your data in minutes.';
              }}
            >
              <img 
                src={microsoftAzure} 
                alt="Microsoft Azure" 
                className="w-16 h-16 md:w-20 md:h-20 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>

            {/* MongoDB */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 1.1, 
                duration: 0.5,
                type: "spring", 
                stiffness: 300, 
                damping: 20
              }}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
              }}
              className="flex items-center justify-center cursor-pointer"
              onMouseEnter={() => {
                document.getElementById('db-title')!.textContent = 'Connect MongoDB';
                document.getElementById('db-description')!.textContent = 'Integrate with MongoDB for flexible, document-based NoSQL database solutions.';
              }}
              onMouseLeave={() => {
                document.getElementById('db-title')!.textContent = 'Connect any database or warehouse';
                document.getElementById('db-description')!.textContent = 'Connect SUVIRA directly to your database or warehouse to build dashboards and query your data in minutes.';
              }}
            >
              <img 
                src={mongodb} 
                alt="MongoDB" 
                className="w-16 h-16 md:w-20 md:h-20 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>

            {/* IBM Db2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 1.2, 
                duration: 0.5,
                type: "spring", 
                stiffness: 300, 
                damping: 20
              }}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
              }}
              className="flex items-center justify-center cursor-pointer"
              onMouseEnter={() => {
                document.getElementById('db-title')!.textContent = 'Connect IBM Db2';
                document.getElementById('db-description')!.textContent = 'Integrate with IBM Db2 for enterprise-grade database management and AI-powered analytics.';
              }}
              onMouseLeave={() => {
                document.getElementById('db-title')!.textContent = 'Connect any database or warehouse';
                document.getElementById('db-description')!.textContent = 'Connect SUVIRA directly to your database or warehouse to build dashboards and query your data in minutes.';
              }}
            >
              <img 
                src={ibmdb2} 
                alt="IBM Db2" 
                className="w-16 h-16 md:w-20 md:h-20 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>

            {/* Teradata */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 1.3, 
                duration: 0.5,
                type: "spring", 
                stiffness: 300, 
                damping: 20
              }}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
              }}
              className="flex items-center justify-center cursor-pointer"
              onMouseEnter={() => {
                document.getElementById('db-title')!.textContent = 'Connect Teradata';
                document.getElementById('db-description')!.textContent = 'Connect to Teradata for advanced analytics and data warehousing solutions.';
              }}
              onMouseLeave={() => {
                document.getElementById('db-title')!.textContent = 'Connect any database or warehouse';
                document.getElementById('db-description')!.textContent = 'Connect SUVIRA directly to your database or warehouse to build dashboards and query your data in minutes.';
              }}
            >
              <img 
                src={teradata} 
                alt="Teradata" 
                className="w-24 h-24 md:w-28 md:h-28 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>

            {/* SQLite */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 1.4, 
                duration: 0.5,
                type: "spring", 
                stiffness: 300, 
                damping: 20
              }}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
              }}
              className="flex items-center justify-center cursor-pointer group"
              onMouseEnter={() => {
                document.getElementById('db-title')!.textContent = 'Connect SQLite';
                document.getElementById('db-description')!.textContent = 'Integrate with SQLite for lightweight, embedded database solutions.';
              }}
              onMouseLeave={() => {
                document.getElementById('db-title')!.textContent = 'Connect any database or warehouse';
                document.getElementById('db-description')!.textContent = 'Connect SUVIRA directly to your database or warehouse to build dashboards and query your data in minutes.';
              }}
            >
              <div className="relative p-1 rounded-xl transition-all duration-300 group-hover:bg-white group-hover:shadow-lg">
                <img 
                  src={sqlite} 
                  alt="SQLite" 
                  className="w-16 h-16 md:w-20 md:h-20 grayscale hover:grayscale-0 transition-all duration-300"
                />
          </div>
        </motion.div>

            {/* Spark SQL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 1.5, 
                duration: 0.5,
                type: "spring", 
                stiffness: 300, 
                damping: 20
              }}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
              }}
              className="flex items-center justify-center cursor-pointer group"
              onMouseEnter={() => {
                document.getElementById('db-title')!.textContent = 'Connect Apache Spark SQL';
                document.getElementById('db-description')!.textContent = 'Integrate with Apache Spark SQL for big data processing and analytics.';
              }}
              onMouseLeave={() => {
                document.getElementById('db-title')!.textContent = 'Connect any database or warehouse';
                document.getElementById('db-description')!.textContent = 'Connect SUVIRA directly to your database or warehouse to build dashboards and query your data in minutes.';
              }}
            >
              <div className="relative p-1 rounded-xl transition-all duration-300 group-hover:bg-white group-hover:shadow-lg">
                <img 
                  src={apacheSpark} 
                  alt="Spark SQL" 
                  className="w-24 h-24 md:w-28 md:h-28 grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>

            {/* Amazon Athena */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 1.6, 
                duration: 0.5,
                type: "spring", 
                stiffness: 300, 
                damping: 20
              }}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
              }}
              className="flex items-center justify-center cursor-pointer"
              onMouseEnter={() => {
                document.getElementById('db-title')!.textContent = 'Connect Amazon Athena';
                document.getElementById('db-description')!.textContent = 'Query data in Amazon S3 using Amazon Athena serverless analytics service.';
              }}
              onMouseLeave={() => {
                document.getElementById('db-title')!.textContent = 'Connect any database or warehouse';
                document.getElementById('db-description')!.textContent = 'Connect SUVIRA directly to your database or warehouse to build dashboards and query your data in minutes.';
              }}
            >
              <img 
                src={amazonAthena} 
                alt="Amazon Athena" 
                className="w-16 h-16 md:w-20 md:h-20 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>

            {/* Oracle Database */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 1.7, 
                duration: 0.5,
                type: "spring", 
                stiffness: 300, 
                damping: 20
              }}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
              }}
              className="flex items-center justify-center cursor-pointer"
              onMouseEnter={() => {
                document.getElementById('db-title')!.textContent = 'Connect Oracle Database';
                document.getElementById('db-description')!.textContent = 'Integrate with Oracle Database for enterprise-grade data management and analytics.';
              }}
              onMouseLeave={() => {
                document.getElementById('db-title')!.textContent = 'Connect any database or warehouse';
                document.getElementById('db-description')!.textContent = 'Connect SUVIRA directly to your database or warehouse to build dashboards and query your data in minutes.';
              }}
            >
              <img 
                src={oracleDatabase} 
                alt="Oracle Database" 
                className="w-16 h-16 md:w-20 md:h-20 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>

            {/* Druid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 1.8, 
                duration: 0.5,
                type: "spring", 
                stiffness: 300, 
                damping: 20
              }}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
              }}
              className="flex items-center justify-center cursor-pointer"
              onMouseEnter={() => {
                document.getElementById('db-title')!.textContent = 'Connect Apache Druid';
                document.getElementById('db-description')!.textContent = 'Integrate with Apache Druid for real-time analytics and OLAP queries.';
              }}
              onMouseLeave={() => {
                document.getElementById('db-title')!.textContent = 'Connect any database or warehouse';
                document.getElementById('db-description')!.textContent = 'Connect SUVIRA directly to your database or warehouse to build dashboards and query your data in minutes.';
              }}
            >
              <img 
                src={druid} 
                alt="Druid" 
                className="w-12 h-12 md:w-16 md:h-16 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>

            {/* Presto */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 1.9, 
                duration: 0.5,
                type: "spring", 
                stiffness: 300, 
                damping: 20
              }}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
              }}
              className="flex items-center justify-center cursor-pointer group"
              onMouseEnter={() => {
                document.getElementById('db-title')!.textContent = 'Connect Presto';
                document.getElementById('db-description')!.textContent = 'Connect to Presto for distributed SQL query engine across multiple data sources.';
              }}
              onMouseLeave={() => {
                document.getElementById('db-title')!.textContent = 'Connect any database or warehouse';
                document.getElementById('db-description')!.textContent = 'Connect SUVIRA directly to your database or warehouse to build dashboards and query your data in minutes.';
              }}
            >
              <div className="relative p-1 rounded-xl transition-all duration-300 group-hover:bg-white group-hover:shadow-lg">
                <img 
                  src={presto} 
                  alt="Presto" 
                  className="w-20 h-20 md:w-24 md:h-24 grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Connect Applications Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-4 font-sans transition-all duration-300 ease-in-out" id="app-title">
              Connect your Applications
            </h2>
            <p className="text-white/80 text-base sm:text-lg max-w-3xl mx-auto transition-all duration-300 ease-in-out" id="app-description">
              Seamlessly integrate SUVIRA with your favorite business applications and tools for unified data workflows.
            </p>
          </motion.div>

          {/* Application Logos Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-wrap justify-center items-center gap-12 md:gap-16 max-w-7xl mx-auto animate-scroll-horizontal"
          >

            {/* LinkedIn */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.4, 
                duration: 0.5,
                type: "spring", 
                stiffness: 300, 
                damping: 20
              }}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
              }}
              className="flex items-center justify-center cursor-pointer group"
              onMouseEnter={() => {
                document.getElementById('app-title')!.textContent = 'Connect LinkedIn';
                document.getElementById('app-description')!.textContent = 'Integrate with LinkedIn for professional network analytics and B2B marketing insights.';
              }}
              onMouseLeave={() => {
                document.getElementById('app-title')!.textContent = 'Connect your Applications';
                document.getElementById('app-description')!.textContent = 'Seamlessly integrate SUVIRA with your favorite business applications and tools for unified data workflows.';
              }}
            >
              <div className="relative p-1 rounded-xl transition-all duration-300 group-hover:bg-white group-hover:shadow-lg">
                <img 
                  src={linkedin} 
                  alt="LinkedIn" 
                  className="w-20 h-20 md:w-24 md:h-24 grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>

            {/* ServiceNow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.5, 
                duration: 0.5,
                type: "spring", 
                stiffness: 300, 
                damping: 20
              }}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
              }}
              className="flex items-center justify-center cursor-pointer group"
              onMouseEnter={() => {
                document.getElementById('app-title')!.textContent = 'Connect ServiceNow';
                document.getElementById('app-description')!.textContent = 'Integrate with ServiceNow for IT service management and workflow automation analytics.';
              }}
              onMouseLeave={() => {
                document.getElementById('app-title')!.textContent = 'Connect your Applications';
                document.getElementById('app-description')!.textContent = 'Seamlessly integrate SUVIRA with your favorite business applications and tools for unified data workflows.';
              }}
            >
              <div className="relative p-1 rounded-xl transition-all duration-300 group-hover:bg-white group-hover:shadow-lg">
                <img 
                  src={servicenow} 
                  alt="ServiceNow" 
                  className="w-16 h-16 md:w-20 md:h-20 grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </motion.div>

            {/* Salesforce */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.6, 
                duration: 0.5,
                type: "spring", 
                stiffness: 300, 
                damping: 20
              }}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
              }}
              className="flex items-center justify-center cursor-pointer"
              onMouseEnter={() => {
                document.getElementById('app-title')!.textContent = 'Connect Salesforce';
                document.getElementById('app-description')!.textContent = 'Integrate with Salesforce CRM for comprehensive customer data analytics and sales insights.';
              }}
              onMouseLeave={() => {
                document.getElementById('app-title')!.textContent = 'Connect your Applications';
                document.getElementById('app-description')!.textContent = 'Seamlessly integrate SUVIRA with your favorite business applications and tools for unified data workflows.';
              }}
            >
              <img 
                src={salesforce} 
                alt="Salesforce" 
                className="w-20 h-20 md:w-24 md:h-24 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>

            {/* Shopify */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.7, 
                duration: 0.5,
                type: "spring", 
                stiffness: 300, 
                damping: 20
              }}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
              }}
              className="flex items-center justify-center cursor-pointer"
              onMouseEnter={() => {
                document.getElementById('app-title')!.textContent = 'Connect Shopify';
                document.getElementById('app-description')!.textContent = 'Integrate with Shopify for e-commerce analytics and online store performance insights.';
              }}
              onMouseLeave={() => {
                document.getElementById('app-title')!.textContent = 'Connect your Applications';
                document.getElementById('app-description')!.textContent = 'Seamlessly integrate SUVIRA with your favorite business applications and tools for unified data workflows.';
              }}
            >
              <img 
                src={shopify} 
                alt="Shopify" 
                className="w-20 h-20 md:w-24 md:h-24 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>

            {/* Amplitude */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.7, 
                duration: 0.5,
                type: "spring", 
                stiffness: 300, 
                damping: 20
              }}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
              }}
              className="flex items-center justify-center cursor-pointer"
              onMouseEnter={() => {
                document.getElementById('app-title')!.textContent = 'Connect Amplitude';
                document.getElementById('app-description')!.textContent = 'Integrate with Amplitude for product analytics and user behavior insights.';
              }}
              onMouseLeave={() => {
                document.getElementById('app-title')!.textContent = 'Connect your Applications';
                document.getElementById('app-description')!.textContent = 'Seamlessly integrate SUVIRA with your favorite business applications and tools for unified data workflows.';
              }}
            >
              <img 
                src={amplitude} 
                alt="Amplitude" 
                className="w-16 h-16 md:w-20 md:h-20 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>

            {/* Google Ads */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.8, 
                duration: 0.5,
                type: "spring", 
                stiffness: 300, 
                damping: 20
              }}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
              }}
              className="flex items-center justify-center cursor-pointer"
              onMouseEnter={() => {
                document.getElementById('app-title')!.textContent = 'Connect Google Ads';
                document.getElementById('app-description')!.textContent = 'Integrate with Google Ads for comprehensive advertising campaign analytics and insights.';
              }}
              onMouseLeave={() => {
                document.getElementById('app-title')!.textContent = 'Connect your Applications';
                document.getElementById('app-description')!.textContent = 'Seamlessly integrate SUVIRA with your favorite business applications and tools for unified data workflows.';
              }}
            >
              <img 
                src={googleAds} 
                alt="Google Ads" 
                className="w-16 h-16 md:w-20 md:h-20 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>

            {/* Google Analytics */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.9, 
                duration: 0.5,
                type: "spring", 
                stiffness: 300, 
                damping: 20
              }}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
              }}
              className="flex items-center justify-center cursor-pointer"
              onMouseEnter={() => {
                document.getElementById('app-title')!.textContent = 'Connect Google Analytics';
                document.getElementById('app-description')!.textContent = 'Integrate with Google Analytics for detailed website traffic and user behavior insights.';
              }}
              onMouseLeave={() => {
                document.getElementById('app-title')!.textContent = 'Connect your Applications';
                document.getElementById('app-description')!.textContent = 'Seamlessly integrate SUVIRA with your favorite business applications and tools for unified data workflows.';
              }}
            >
              <img 
                src={googleAnalytics} 
                alt="Google Analytics" 
                className="w-16 h-16 md:w-20 md:h-20 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>

            {/* Firebase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 1.0, 
                duration: 0.5,
                type: "spring", 
                stiffness: 300, 
                damping: 20
              }}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
              }}
              className="flex items-center justify-center cursor-pointer"
              onMouseEnter={() => {
                document.getElementById('app-title')!.textContent = 'Connect Firebase';
                document.getElementById('app-description')!.textContent = 'Integrate with Firebase for real-time database analytics and mobile app insights.';
              }}
              onMouseLeave={() => {
                document.getElementById('app-title')!.textContent = 'Connect your Applications';
                document.getElementById('app-description')!.textContent = 'Seamlessly integrate SUVIRA with your favorite business applications and tools for unified data workflows.';
              }}
            >
              <img 
                src={firebase} 
                alt="Firebase" 
                className="w-16 h-16 md:w-20 md:h-20 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>


            {/* Workday */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 1.3, 
                duration: 0.5,
                type: "spring", 
                stiffness: 300, 
                damping: 20
              }}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
              }}
              className="flex items-center justify-center cursor-pointer"
              onMouseEnter={() => {
                document.getElementById('app-title')!.textContent = 'Connect Workday';
                document.getElementById('app-description')!.textContent = 'Integrate with Workday for human capital management and financial analytics.';
              }}
              onMouseLeave={() => {
                document.getElementById('app-title')!.textContent = 'Connect your Applications';
                document.getElementById('app-description')!.textContent = 'Seamlessly integrate SUVIRA with your favorite business applications and tools for unified data workflows.';
              }}
            >
              <img 
                src={workday} 
                alt="Workday" 
                className="w-16 h-16 md:w-20 md:h-20 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>

            {/* Magento */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 1.5, 
                duration: 0.5,
                type: "spring", 
                stiffness: 300, 
                damping: 20
              }}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
              }}
              className="flex items-center justify-center cursor-pointer"
              onMouseEnter={() => {
                document.getElementById('app-title')!.textContent = 'Connect Magento';
                document.getElementById('app-description')!.textContent = 'Integrate with Magento for enterprise e-commerce platform analytics and performance insights.';
              }}
              onMouseLeave={() => {
                document.getElementById('app-title')!.textContent = 'Connect your Applications';
                document.getElementById('app-description')!.textContent = 'Seamlessly integrate SUVIRA with your favorite business applications and tools for unified data workflows.';
              }}
            >
              <img 
                src={magento} 
                alt="Magento" 
                className="w-16 h-16 md:w-20 md:h-20 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>

            {/* WooCommerce */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 1.6, 
                duration: 0.5,
                type: "spring", 
                stiffness: 300, 
                damping: 20
              }}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
              }}
              className="flex items-center justify-center cursor-pointer"
              onMouseEnter={() => {
                document.getElementById('app-title')!.textContent = 'Connect WooCommerce';
                document.getElementById('app-description')!.textContent = 'Integrate with WooCommerce for WordPress-based e-commerce store analytics and insights.';
              }}
              onMouseLeave={() => {
                document.getElementById('app-title')!.textContent = 'Connect your Applications';
                document.getElementById('app-description')!.textContent = 'Seamlessly integrate SUVIRA with your favorite business applications and tools for unified data workflows.';
              }}
            >
              <img 
                src={woocommerce} 
                alt="WooCommerce" 
                className="w-16 h-16 md:w-20 md:h-20 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>

            {/* Meta */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 1.7, 
                duration: 0.5,
                type: "spring", 
                stiffness: 300, 
                damping: 20
              }}
              whileHover={{ 
                scale: 1.1,
                filter: "brightness(1.2) drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))"
              }}
              className="flex items-center justify-center cursor-pointer"
              onMouseEnter={() => {
                document.getElementById('app-title')!.textContent = 'Connect Meta';
                document.getElementById('app-description')!.textContent = 'Integrate with Meta platforms for social media analytics and advertising insights.';
              }}
              onMouseLeave={() => {
                document.getElementById('app-title')!.textContent = 'Connect your Applications';
                document.getElementById('app-description')!.textContent = 'Seamlessly integrate SUVIRA with your favorite business applications and tools for unified data workflows.';
              }}
            >
              <img 
                src={meta} 
                alt="Meta" 
                className="w-16 h-16 md:w-20 md:h-20 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
              Proven <span className="gradient-text">Performance</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Measurable results that speak for themselves
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="glass p-8 rounded-2xl text-center glow"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.8, type: "spring", stiffness: 200 }}
                className="text-6xl md:text-7xl font-black gradient-text mb-4"
              >
                30x
              </motion.div>
              <h3 className="font-display text-xl font-bold mb-2">
                Lower Hallucination Rate
                </h3>
                <p className="text-muted-foreground">
                Than GPT-5
                </p>
              </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="glass p-8 rounded-2xl text-center glow"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 200 }}
                className="text-6xl md:text-7xl font-black gradient-text mb-4"
              >
                99%
              </motion.div>
              <h3 className="font-display text-xl font-bold mb-2">
                SQL Error Resolution Rate
              </h3>
              <p className="text-muted-foreground">
                Automated debugging success
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="glass p-8 rounded-2xl text-center glow"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 200 }}
                className="text-6xl md:text-7xl font-black gradient-text mb-4"
              >
                20x
              </motion.div>
              <h3 className="font-display text-xl font-bold mb-2">
                Faster Setup
              </h3>
              <p className="text-muted-foreground">
                Than an MCP
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* SQL Editor Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Text Content */}
          <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
              className="text-center lg:text-left"
          >
              <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
                <span className="gradient-text">SQL Editor</span>
            </h2>
              <div className="inline-block mb-6 px-4 py-2 glass rounded-full">
                <span className="text-sm font-medium text-muted-foreground">
                  Format: Command + S
                </span>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This query calculates the percentage distribution of each subscription plan rounded to the nearest whole number. 
                It joins the subscription_plans table with the user_subscriptions table on the plan_id column. 
                The count of subscriptions for each plan is divided by the total number of subscriptions, multiplied by 100 to get a percentage, 
                and then rounded to the nearest whole number. The results are grouped by plan_name and ordered by the rounded subscription 
                percentage in descending order.
              </p>
            </motion.div>

            {/* Image Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, rotateY: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
                whileHover={{ 
                  scale: 1.02, 
                  rotateY: 2,
                  boxShadow: "0 20px 40px -12px rgba(93, 217, 208, 0.3)"
                }}
                className="rounded-3xl overflow-hidden"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.img 
                  src={sqlEditor} 
                  alt="SQL Editor Interface" 
                  className="w-full h-auto"
                  whileInView={{ scale: [1, 1.01, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Subtle Code Highlighting Effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8, duration: 1 }}
                >
                  <motion.div
                    className="absolute top-4 left-4 w-2 h-2 bg-primary rounded-full"
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1
                    }}
                  />
                  <motion.div
                    className="absolute top-8 right-8 w-1.5 h-1.5 bg-primary rounded-full"
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1.5
                    }}
                  />
                  <motion.div
                    className="absolute bottom-6 left-6 w-1 h-1 bg-primary rounded-full"
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 2
                    }}
                  />
                </motion.div>

                {/* Subtle Border Glow */}
                <motion.div
                  className="absolute inset-0 rounded-3xl pointer-events-none"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(93, 217, 208, 0)",
                      "0 0 20px 2px rgba(93, 217, 208, 0.1)",
                      "0 0 0 0 rgba(93, 217, 208, 0)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
              Create <span className="gradient-text">Stunning Dashboards</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Build powerful product, sales, customer success, and marketing dashboards in just minutes.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No SQL. No hassle. Just insights.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* 3D Floating Dashboard Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
              whileHover={{ 
                scale: 1.02, 
                rotateY: 5,
                boxShadow: "0 25px 50px -12px rgba(93, 217, 208, 0.25), 0 0 0 1px rgba(93, 217, 208, 0.1)"
              }}
              className="relative glass rounded-3xl overflow-hidden glow"
              style={{ 
                transformStyle: "preserve-3d",
                perspective: "1000px"
              }}
            >
              {/* Dashboard Image with Parallax Effect */}
              <motion.div
                whileInView={{ scale: [1, 1.05, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <img 
                  src={dashboards} 
                  alt="Dashboard Interface" 
                  className="w-full h-auto"
                />
                
                {/* Floating Data Points Overlay */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  {/* Animated Data Points */}
                  {[
                    { x: "15%", y: "25%", delay: 0 },
                    { x: "75%", y: "30%", delay: 0.5 },
                    { x: "45%", y: "60%", delay: 1 },
                    { x: "25%", y: "70%", delay: 1.5 },
                    { x: "80%", y: "75%", delay: 2 }
                  ].map((point, index) => (
              <motion.div
                key={index}
                      className="absolute w-3 h-3 bg-primary rounded-full"
                      style={{ left: point.x, top: point.y }}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ 
                        scale: [0, 1.2, 1], 
                        opacity: [0, 1, 0.8] 
                      }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: point.delay, 
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 3
                      }}
                      animate={{
                        y: [0, -10, 0],
                        boxShadow: [
                          "0 0 0 0 rgba(93, 217, 208, 0.7)",
                          "0 0 0 10px rgba(93, 217, 208, 0)",
                          "0 0 0 0 rgba(93, 217, 208, 0)"
                        ]
                      }}
                    />
                  ))}
                </motion.div>

                {/* Scanning Line Effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  <motion.div
                    className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
                    animate={{ 
                      top: ["0%", "100%"],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      repeatDelay: 4,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* 3D Corner Accents */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary opacity-60" />
              <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary opacity-60" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary opacity-60" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary opacity-60" />
            </motion.div>


            {/* Background Particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-primary rounded-full opacity-30"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -100, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chat with Data Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Chat with your data</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Suvira lets your whole team make data-based decisions
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Main Automation Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateX: -10 }}
              whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, type: "spring", stiffness: 80 }}
              whileHover={{ 
                scale: 1.02,
                rotateX: 2,
                boxShadow: "0 30px 60px -12px rgba(93, 217, 208, 0.3), 0 0 0 1px rgba(93, 217, 208, 0.1)"
              }}
              className="relative glass rounded-3xl overflow-hidden glow"
              style={{ 
                transformStyle: "preserve-3d",
                perspective: "1200px"
              }}
            >
              {/* Automation Image with Advanced Effects */}
              <motion.div
                className="relative"
                whileInView={{ scale: [1, 1.03, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <img 
                  src={automation} 
                  alt="Automation Interface" 
                  className="w-full h-auto"
                />

                {/* Pulsing Glow Effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(93, 217, 208, 0.4)",
                      "0 0 20px 5px rgba(93, 217, 208, 0.1)",
                      "0 0 0 0 rgba(93, 217, 208, 0.4)"
                    ]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* 3D Corner Highlights */}
              <div className="absolute top-6 left-6 w-6 h-6 border-l-2 border-t-2 border-primary opacity-70" />
              <div className="absolute top-6 right-6 w-6 h-6 border-r-2 border-t-2 border-primary opacity-70" />
              <div className="absolute bottom-6 left-6 w-6 h-6 border-l-2 border-b-2 border-primary opacity-70" />
              <div className="absolute bottom-6 right-6 w-6 h-6 border-r-2 border-b-2 border-primary opacity-70" />
            </motion.div>

            {/* Feature Highlights */}
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="glass p-8 rounded-2xl glow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="text-2xl">💬</span>
                  </motion.div>
                  <h3 className="font-display text-2xl font-bold gradient-text">
                    Natural Language Queries
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Ask questions in plain English and get instant insights from your data without writing complex SQL.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="glass p-8 rounded-2xl glow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <span className="text-2xl">⚡</span>
                  </motion.div>
                  <h3 className="font-display text-2xl font-bold gradient-text">
                    Real-time Insights
                </h3>
                </div>
                <p className="text-muted-foreground">
                  Get instant answers and visualizations that update in real-time as your data changes.
                </p>
              </motion.div>
            </div>

            {/* Background Floating Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(15)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-primary/20 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -50, 0],
                    x: [0, Math.random() * 20 - 10, 0],
                    opacity: [0, 0.8, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: Math.random() * 4 + 3,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
    {/* Transform with AI Innovation Section */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroVideo />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
            <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-6">
              Transform Your Enterprise with{" "}
              <span className="gradient-text">AI Innovation</span>
            </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold text-lg flex items-center gap-2 glow"
              >
                Start your journey
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </div>
          </motion.div>
        </div>
      </section>

      {/* About Suvira Modal */}
      {isAboutSuviraOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsAboutSuviraOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-gradient-to-b from-background to-muted/20 rounded-2xl border border-primary/20 shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-end p-6 border-b border-primary/10">
              <motion.button
                onClick={() => setIsAboutSuviraOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full hover:bg-muted/50 transition-colors"
              >
                <X className="w-5 h-5 text-slate-400" />
              </motion.button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-8">
              {/* Hero Section */}
              <div className="text-center">
                <h3 className="font-display text-3xl font-bold mb-8 text-center">
                  AI-POWERED BUSINESS ANALYTICS ACROSS ALL YOUR <span className="gradient-text">COMPANY'S DATA</span>
                </h3>
                <p className="text-lg text-muted-foreground mb-8 text-center max-w-4xl mx-auto">
                  Seamlessly integrate with your data systems to deliver real-time analytics, surface critical insights, and support high-impact decision-making accelerating performance across operations, strategy, and growth.
                </p>
              </div>

              {/* Main Features Grid */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* One Platform, All Your Data */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 p-6 rounded-xl border border-blue-500/20"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-blue-400" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-white mb-3">One Platform, All Your Data</h4>
                  <p className="text-slate-300 mb-4">
                    Suvira connects directly to your databases, warehouses, and business applications. No complex integrations. No data migration. Just plug in your data sources and start asking questions.
                  </p>
                  <p className="text-slate-400 text-sm">
                    Whether your data lives in Snowflake, Salesforce, Google Analytics, or dozens of other systems, Suvira brings it all together in one place. Your team gets a single source of truth without the typical setup headaches.
                  </p>
                </motion.div>

                {/* Analytics For Everyone */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-gradient-to-br from-emerald-500/10 to-green-500/5 p-6 rounded-xl border border-emerald-500/20"
                >
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-emerald-400" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-white mb-3">Analytics For Everyone, Not Just Analysts</h4>
                  <p className="text-slate-300 mb-4">
                    You shouldn't need to know SQL or wait on your data team to get answers. With Suvira, anyone on your team can ask questions in plain English and get instant insights.
                  </p>
                  <div className="space-y-2 text-slate-400 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                      <span>Sales teams check pipeline health</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                      <span>Marketing reviews campaign performance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                      <span>Operations spots bottlenecks</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>
                      <span>Finance tracks key metrics</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Key Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20"
              >
                <h4 className="font-display text-xl font-bold text-white mb-4 text-center">All in Real-Time, Without Writing a Single Line of Code</h4>
                <div className="grid sm:grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Rocket className="w-4 h-4 text-purple-400" />
                    </div>
                    <h5 className="font-display font-semibold text-white mb-1">Instant Insights</h5>
                    <p className="text-sm text-slate-400">Get answers in seconds, not hours</p>
                  </div>
                  <div className="p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Zap className="w-4 h-4 text-purple-400" />
                    </div>
                    <h5 className="font-display font-semibold text-white mb-1">No Code Required</h5>
                    <p className="text-sm text-slate-400">Plain English questions only</p>
                  </div>
                  <div className="p-4 bg-slate-800/50 rounded-lg">
                    <div className="w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Target className="w-4 h-4 text-purple-400" />
                    </div>
                    <h5 className="font-display font-semibold text-white mb-1">Team-Wide Access</h5>
                    <p className="text-sm text-slate-400">Everyone can ask questions</p>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </motion.div>
      )}

      
    </div>
  );
};

export default Home;

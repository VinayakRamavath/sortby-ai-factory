import { motion } from "framer-motion";
import { ArrowRight, Zap, Target, Rocket } from "lucide-react";
import { Link } from "react-router-dom";
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
        <HeroVideo />
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

      </section>
      

      

      {/* Value Ladder Section */}
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
                  <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
                    <span className="glitch-sans" data-text="FEATURED PRODUCT SUVIRA">FEATURED PRODUCT SUVIRA</span>
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
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 font-sans" id="db-title">
              Connect any database or warehouse
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto" id="db-description">
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
              transition={{ delay: 0.3, duration: 0.5 }}
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
              transition={{ delay: 0.4, duration: 0.5 }}
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
              transition={{ delay: 0.5, duration: 0.5 }}
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
              transition={{ delay: 0.6, duration: 0.5 }}
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
              transition={{ delay: 0.7, duration: 0.5 }}
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
              transition={{ delay: 0.9, duration: 0.5 }}
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
              transition={{ delay: 1.0, duration: 0.5 }}
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
              transition={{ delay: 1.1, duration: 0.5 }}
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
              transition={{ delay: 1.2, duration: 0.5 }}
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
              transition={{ delay: 1.3, duration: 0.5 }}
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
              transition={{ delay: 1.4, duration: 0.5 }}
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
              transition={{ delay: 1.5, duration: 0.5 }}
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
              transition={{ delay: 1.6, duration: 0.5 }}
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
              transition={{ delay: 1.7, duration: 0.5 }}
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
              transition={{ delay: 1.8, duration: 0.5 }}
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
              transition={{ delay: 1.9, duration: 0.5 }}
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
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 font-sans" id="app-title">
              Connect your Applications
            </h2>
            <p className="text-white/80 text-lg max-w-3xl mx-auto" id="app-description">
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
              transition={{ delay: 0.4, duration: 0.5 }}
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
              transition={{ delay: 0.5, duration: 0.5 }}
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
              transition={{ delay: 0.6, duration: 0.5 }}
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
              transition={{ delay: 0.7, duration: 0.5 }}
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
              transition={{ delay: 0.7, duration: 0.5 }}
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
              transition={{ delay: 0.8, duration: 0.5 }}
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
              transition={{ delay: 0.9, duration: 0.5 }}
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
              transition={{ delay: 1.0, duration: 0.5 }}
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
              transition={{ delay: 1.3, duration: 0.5 }}
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
              transition={{ delay: 1.5, duration: 0.5 }}
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
              transition={{ delay: 1.6, duration: 0.5 }}
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
              transition={{ delay: 1.7, duration: 0.5 }}
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
      
    {/* Hero Section (Glitch Inspired) moved to bottom */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <GlitchBackground />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            <div className="mb-6">
              <GlitchText text="SORTBY" playOnce />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              AI Service as Software — modern systems, measurable outcomes
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
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default Home;

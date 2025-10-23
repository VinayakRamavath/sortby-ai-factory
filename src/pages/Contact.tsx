import { motion } from "framer-motion";
import { Mail, Send, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // EmailJS configuration
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_sortby';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_contact';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          message: formData.message,
          to_email: 'sortbysalesteam@gmail.com',
        },
        publicKey
      );
      
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your enterprise with AI? Let's start the conversation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="glass rounded-3xl p-8 md:p-12">
              <h2 className="font-display text-3xl font-bold mb-8">
                Send us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    placeholder="Tell us about your AI transformation goals..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold inline-flex items-center justify-center gap-2 glow disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="space-y-8"
          >
            {/* Email Card */}
            <div className="glass rounded-3xl p-8 card-3d group">
              <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-6 glow">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">
                Email Us
              </h3>
              <a
                href="mailto:sortbysalesteam@gmail.com"
                className="text-lg text-muted-foreground hover:text-primary transition-colors"
              >
                sortbysalesteam@gmail.com
              </a>
            </div>

            {/* Office Card */}
            <div className="glass rounded-3xl p-8 card-3d group">
              <div className="inline-flex p-4 bg-secondary/10 rounded-2xl mb-6 glow">
                <MapPin className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">
                Global Presence
              </h3>
              <p className="text-lg text-muted-foreground">
                Serving enterprises worldwide with our AI Innovation Factory
              </p>
            </div>

            {/* Support Card */}
            <div className="glass rounded-3xl p-8 card-3d group">
              <div className="inline-flex p-4 bg-accent/10 rounded-2xl mb-6 glow">
                <Phone className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">
                24/7 Support
              </h3>
              <p className="text-lg text-muted-foreground">
                Enterprise-grade support for all our clients
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 glass rounded-3xl p-12 text-center max-w-4xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join leading enterprises transforming with SortBy's AI Innovation Factory
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:sortbysalesteam@gmail.com">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-semibold inline-flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Email Sales Team
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

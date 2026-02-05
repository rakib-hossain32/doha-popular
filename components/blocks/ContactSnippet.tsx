"use client";

import { motion, Variants } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Globe, ShieldCheck, HeartHandshake } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const contactData = [
  { 
    title: "Global Headquarters", 
    value: "Building 123, West Bay Business District, Doha, Qatar", 
    icon: MapPin,
    tag: "Primary Hub"
  },
  { 
    title: "Direct Hotlines", 
    value: "+974 4400 0000 / +974 7700 0000", 
    icon: Phone,
    tag: "24/7 Available"
  },
  { 
    title: "Corporate Email", 
    value: "inquiry@dohapopular.com.qa", 
    icon: Mail,
    tag: "Official Inquiry"
  },
  { 
    title: "Operations Clock", 
    value: "Sun - Thu: 08:00 AM - 06:00 PM (GMT+3)", 
    icon: Clock,
    tag: "Office Hours"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

export function ContactSnippet() {
  return (
    <section id="contact-info" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-size-[60px_60px]" />
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* --- LEFT SIDE: THE DETAILS --- */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-12">
            <SectionHeader 
               badge="Corporate Presence"
               title="Connect with the"
               highlight="Heart of Doha."
               description="Our strategic presence in West Bay ensures that we are always at the center of Qatar's evolving corporate and industrial landscape."
               align="left"
               className="mb-0 md:items-start md:text-left text-center"
            />

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid sm:grid-cols-2 gap-x-12 gap-y-12"
            >
              {contactData.map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  className="group space-y-4"
                >
                  <div className="flex items-center justify-between group-hover:pl-2 transition-all duration-500">
                    <div className="size-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                      <item.icon className="size-5" />
                    </div>
                    <span className="text-[9px] font-black text-primary/40 uppercase tracking-widest">{item.tag}</span>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-accent/40">{item.title}</h4>
                    <p className="text-sm font-bold text-accent group-hover:text-primary transition-colors leading-relaxed">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Micro-Interaction Bar */}
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 0.6 }}
               className="flex items-center gap-8 pt-6 border-t border-slate-100"
            >
               <div className="flex items-center gap-2 text-muted">
                  <Globe className="size-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Global Standards</span>
               </div>
               <div className="flex items-center gap-2 text-muted">
                  <ShieldCheck className="size-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Local Precision</span>
               </div>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: THE VISUAL MAP --- */}
          <div className="lg:col-span-12 xl:col-span-7 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: 20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-video lg:aspect-auto lg:h-[600px] rounded-[3rem] overflow-hidden border-12 border-slate-50 shadow-[0_40px_100px_rgba(0,0,0,0.12)] group"
            >
              <div className="absolute inset-0 bg-accent/5 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
              
              {/* Premium Map Filter Overlay */}
              <div className="absolute inset-0 bg-primary/10 mix-blend-color opacity-30 pointer-events-none z-20" />
              
              <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115456.96962259648!2d51.44222477543946!3d25.285447299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45da70d30c5e8b%3A0xf6466f8090886b!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sbd!4v1700400000000!5m2!1sen!2sbd" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  title="Google Map Doha HQ"
                  className="relative z-0 grayscale contrast-125 group-hover:grayscale-0 transition-all duration-1000"
              ></iframe>

              {/* Floating Address Card on Map */}
              <motion.div 
                 initial={{ y: 20, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.8 }}
                 className="absolute bottom-10 left-10 right-10 md:left-auto md:right-10 bg-white/95 backdrop-blur-xl p-8 rounded-4xl shadow-2xl z-30 border border-white/50 max-w-sm"
              >
                 <div className="space-y-4">
                    <div className="flex items-center gap-3 text-primary">
                       <HeartHandshake className="size-6" />
                       <span className="text-xs font-black uppercase tracking-widest leading-none">Open for Partnership</span>
                    </div>
                    <h4 className="text-xl font-black text-accent">Doha Popular Co.</h4>
                    <p className="text-xs font-medium text-muted leading-relaxed">
                       Visit our facility for a detailed consultation regarding your specific corporate requirements.
                    </p>
                    <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-primary border-b border-primary/20 pb-1 hover:border-primary transition-all">
                       Get Directions <ArrowUpRight className="size-3" />
                    </button>
                 </div>
              </motion.div>
            </motion.div>

            {/* Decorative Ornaments */}
            <div className="absolute -top-12 -right-12 size-48 border-2 border-primary/10 rounded-full animate-pulse" />
            <div className="absolute -bottom-16 -left-16 size-64 bg-accent/5 rounded-full blur-3xl -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}

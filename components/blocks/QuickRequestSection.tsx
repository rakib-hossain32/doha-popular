"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Send, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  ChevronRight,
  Headphones,
  Zap,
  Globe
} from "lucide-react";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";

const benefits = [
  { icon: Clock, text: "60-Minute Rapid Response", sub: "Guaranteed priority for corporate clients." },
  { icon: ShieldCheck, text: "ISO Certified Standards", sub: "Rigorous quality control on every task." },
  { icon: Headphones, text: "24/7 Dedicated Support", sub: "Always available for emergency needs." },
  { icon: Globe, text: "GCC Region Reliability", sub: "Consistent service across Qatar & beyond." },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

export function QuickRequestSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Architectural Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50/50 -skew-x-12 translate-x-1/2 -z-10" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* --- LEFT SIDE: THE PITCH --- */}
          <div className="lg:col-span-6 space-y-12 flex flex-col items-center lg:items-start text-center lg:text-left">
            <SectionHeader 
               badge="Priority Access"
               title="Ready to Experience"
               highlight="Superiority?"
               description="Start your journey with Qatar's most trusted service partner. Our experts are ready to optimize your operational infrastructure."
               align="left"
               className="mb-0 md:items-start md:text-left text-center"
            />

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid sm:grid-cols-2 gap-8 w-full"
            >
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  className="group space-y-3 flex flex-col items-center lg:items-start"
                >
                  <div className="size-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                    <benefit.icon className="size-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-accent group-hover:text-primary transition-colors">{benefit.text}</h4>
                    <p className="text-xs font-medium text-muted leading-relaxed line-clamp-2">{benefit.sub}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Trusted By Row */}
            <motion.div 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: 0.6 }}
               className="pt-8 border-t border-slate-100 w-full flex flex-col items-center lg:items-start"
            >
               <p className="text-[10px] font-bold text-muted uppercase tracking-[0.2em] mb-6">Trusted Infrastructure Partner of</p>
               <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 grayscale opacity-40">
                  <div className="h-6 w-24 bg-slate-200 rounded-md animate-pulse" />
                  <div className="h-6 w-24 bg-slate-200 rounded-md animate-pulse" />
                  <div className="h-6 w-24 bg-slate-200 rounded-md animate-pulse" />
               </div>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: THE FORM --- */}
          <div className="lg:col-span-6 relative">
             <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
               className="relative z-10"
             >
               <div className="bg-white rounded-[2.5rem] p-10 md:p-12 shadow-[0_30px_80px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group">
                  {/* Decorative Background Accent */}
                  <div className="absolute top-0 right-0 size-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10 group-hover:bg-primary/10 transition-colors duration-700" />
                  
                  <div className="mb-10 space-y-2">
                    <h3 className="text-3xl font-black text-accent">Request a <span className="text-primary italic font-serif">Briefing.</span></h3>
                    <p className="text-sm font-medium text-muted">Complete the fields below for an immediate corporate response.</p>
                  </div>

                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                       <div className="space-y-2">
                         <label className="text-[10px] font-black uppercase tracking-widest text-accent">Full Name</label>
                         <Input placeholder="E.g. Jassim Al-Kuwari" className="h-14 rounded-xl bg-slate-50/50 border-slate-100 focus:bg-white focus:ring-primary/20 transition-all text-sm font-medium" />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] font-black uppercase tracking-widest text-accent">Contact Number</label>
                          <Input placeholder="+974 0000 0000" className="h-14 rounded-xl bg-slate-50/50 border-slate-100 focus:bg-white focus:ring-primary/20 transition-all text-sm font-medium" />
                       </div>
                    </div>

                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-accent">Service Sector</label>
                       <div className="relative">
                          <select className="w-full h-14 px-4 rounded-xl bg-slate-50/50 border border-slate-100 text-sm font-medium focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all appearance-none cursor-pointer">
                              <option>Facility Management</option>
                              <option>Industrial Support</option>
                              <option>Specialized Manpower</option>
                              <option>Events & Logistics</option>
                          </select>
                          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted">
                             <ChevronRight className="rotate-90 size-4" />
                          </div>
                       </div>
                    </div>

                    <div className="space-y-2">
                       <label className="text-[10px] font-black uppercase tracking-widest text-accent">Project Details</label>
                       <Textarea placeholder="Describe your operational requirements..." className="min-h-[120px] rounded-2xl bg-slate-50/50 border-slate-100 focus:bg-white focus:ring-primary/20 transition-all resize-none p-4 text-sm font-medium" />
                    </div>

                    <Button type="button" className="w-full h-16 rounded-full bg-accent text-white hover:bg-primary transition-all duration-500 shadow-xl shadow-accent/10 group/btn">
                       <span className="flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-xs">
                          Initialize Consultation <Send className="size-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                       </span>
                    </Button>
                  </form>

                  {/* Trust Footer in Form */}
                  <div className="mt-8 pt-8 border-t border-slate-100 flex items-center justify-center gap-10 grayscale opacity-40 group-hover:opacity-60 transition-opacity duration-700">
                     <CheckCircle2 className="size-5" />
                     <div className="h-4 w-1 bg-slate-200 rounded-full" />
                     <ShieldCheck className="size-5" />
                  </div>
               </div>
             </motion.div>

             {/* Floating Background Decoration */}
             <div className="absolute -z-10 -bottom-12 -left-12 size-64 border-2 border-primary/10 rounded-full" />
             <div className="absolute -z-10 -top-12 -right-12 size-64 border-2 border-accent/5 rounded-full" />
          </div>

        </div>
      </div>
    </section>
  );
}

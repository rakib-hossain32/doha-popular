"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { 
  Star, 
  Quote, 
  Plus, 
  X, 
  MessageSquarePlus, 
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const initialTestimonials = [
  {
    name: "Ahmed Al-Thani",
    role: "Property Manager, West Bay Towers",
    content: "The level of professionalism displayed by the Qatar Multi-Service team is unparalleled. Our facility maintenance has never been smoother.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sarah Williams",
    role: "Operational Officer, The Pearl",
    content: "Consistent, reliable, and high-quality cleaning services. They truly understand what premium service means in Doha's luxury market.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Khalid Mansour",
    role: "Project Lead, Lusail Stadium",
    content: "Their manpower supply service provided us with highly skilled technicians exactly when we needed them. A partner you can fully trust.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/85.jpg"
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

export function Testimonials() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
    }, 2000);
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      {/* Premium Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-linear-to-b from-white to-transparent" />
      <div className="absolute top-[20%] right-[-10%] size-96 bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="container px-4 md:px-6 mx-auto relative z-10">
        
        <SectionHeader 
          badge="Voice of Success"
          title="Trusted by"
          highlight="Doha's Elite"
          description="Real testimonials from the leaders shaping Qatar's most iconic landscapes and infrastructures."
          align="center"
          className="mb-0 text-center"
        />

        {/* --- GRID --- */}
        <div className="grid lg:grid-cols-3 gap-8">
          {initialTestimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group relative p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-primary/10 transition-all duration-500 overflow-hidden"
            >
              {/* Top Quote Icon */}
              <div className="absolute top-10 right-10 size-12 text-primary/5 group-hover:text-primary transition-colors duration-500">
                <Quote className="size-full fill-current" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="size-3.5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-accent text-lg font-medium leading-relaxed mb-10 min-h-[140px]">
                &ldquo;{item.content}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-10 border-t border-slate-50">
                <div className="relative size-14 rounded-full overflow-hidden border-2 border-slate-100 group-hover:border-primary transition-colors duration-500">
                  <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-black text-accent group-hover:text-primary transition-colors">{item.name}</h4>
                  <p className="text-[10px] font-bold text-muted uppercase tracking-[0.2em]">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- CTA BUTTON --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex flex-col items-center gap-6"
        >
          <div className="h-12 w-px bg-linear-to-b from-primary/30 to-transparent" />
          <Button 
              onClick={() => setIsModalOpen(true)}
              className="rounded-full h-16 px-10 bg-accent text-white hover:bg-primary transition-all duration-300 shadow-xl shadow-accent/10 group"
          >
            <span className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
              Share Your Experience <MessageSquarePlus className="size-5" />
            </span>
          </Button>
          <p className="text-[10px] font-bold text-muted uppercase tracking-[0.2em]">Join the leaders of Qatar</p>
        </motion.div>

        {/* --- MODAL --- */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute inset-0 bg-accent/40 backdrop-blur-sm"
              />
              
              {/* Modal Content */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-8 right-8 size-10 rounded-full bg-slate-50 flex items-center justify-center text-accent hover:bg-primary hover:text-white transition-all shadow-sm z-10"
                >
                  <X className="size-5" />
                </button>

                <div className="p-10 md:p-12">
                   {!isSubmitted ? (
                      <div className="space-y-10">
                        <div className="space-y-4 text-center md:text-left">
                           <h3 className="text-3xl font-black text-accent">Submit a <span className="text-primary italic font-serif">Review.</span></h3>
                           <p className="text-muted text-sm font-medium">Your feedback drives our pursuit of operational excellence across Doha.</p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                           <div className="grid md:grid-cols-2 gap-6">
                              <div className="space-y-2">
                                 <label className="text-[10px] font-black uppercase tracking-widest text-accent">Full Name</label>
                                 <Input placeholder="Ahmed Khalid" required className="h-14 rounded-xl border-slate-100 focus:ring-primary/20" />
                              </div>
                              <div className="space-y-2">
                                 <label className="text-[10px] font-black uppercase tracking-widest text-accent">Professional Role</label>
                                 <Input placeholder="Property Manager" required className="h-14 rounded-xl border-slate-100 focus:ring-primary/20" />
                              </div>
                           </div>
                           <div className="space-y-2">
                              <label className="text-[10px] font-black uppercase tracking-widest text-accent">Your Experience</label>
                              <Textarea placeholder="Share details about our performance..." required className="min-h-[140px] rounded-2xl border-slate-100 focus:ring-primary/20 p-4" />
                           </div>
                           
                           <Button type="submit" className="w-full h-16 rounded-full bg-accent text-white hover:bg-primary transition-all duration-500 shadow-xl shadow-accent/10">
                              <span className="flex items-center gap-2 font-bold uppercase tracking-widest text-xs">
                                 Relay Feedback <ChevronRight className="size-4" />
                              </span>
                           </Button>
                        </form>
                      </div>
                   ) : (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="py-12 flex flex-col items-center text-center space-y-6"
                      >
                         <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <CheckCircle2 className="size-10" />
                         </div>
                         <div className="space-y-2">
                            <h4 className="text-2xl font-black text-accent">Feedback Received</h4>
                            <p className="text-muted text-sm font-medium">Thank you for helping us maintain Qatari corporate standards.</p>
                         </div>
                      </motion.div>
                   )}
                </div>
                
                {/* Decorative Bottom Bar */}
                <div className="h-2 w-full bg-linear-to-r from-primary via-primary/80 to-accent" />
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

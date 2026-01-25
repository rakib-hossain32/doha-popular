"use client";

import { motion, Variants } from "framer-motion";
import { 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  ChevronRight, 
  Phone, 
  Mail, 
  Globe
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import React from "react";

const features = [
  "Licensed Regional Professionals",
  "24/7 Rapid Response Unit",
  "ISO Standard Quality Control",
  "Strategic Resource Planning",
  "Advanced Safety Compliance",
  "Turn-key Project Completion"
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
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

interface ServiceDetailsClientProps {
  slug: string;
  formattedTitle: string;
}

import { PageHero } from "@/components/ui/page-hero";

export function ServiceDetailsClient({ slug, formattedTitle }: ServiceDetailsClientProps) {
  return (
    <main className="min-h-screen bg-white">
      <PageHero 
        badge="Specialized Capability"
        title={formattedTitle}
        highlight="Solutions."
        description="Engineering precision and operational excellence for Qatar's most demanding institutional and commercial requirements."
        watermark="Elite"
        centered
        breadcrumb={[
          { label: "Services", href: "/services" },
          { label: formattedTitle, href: `/services/${slug}` }
        ]}
      />

      {/* --- CONTENT SECTION --- */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            
            {/* LEFT: INFORMATION */}
            <div className="lg:col-span-12 xl:col-span-7 space-y-16">
               <div className="space-y-10">
                  <SectionHeader 
                    badge="Capabilities Overview"
                    title="Premier"
                    highlight="Framework."
                    align="left"
                    className="mb-0"
                  />
                  <div className="space-y-6 text-muted text-lg leading-relaxed">
                     <p>
                        Our <span className="text-accent font-bold capitalize">{formattedTitle}</span> service is built on a foundation of technical mastery and rigorous ISO-certified protocols. 
                        We don't just provide a service; we integrate a specialized framework designed to optimize your assets and ensure 
                        seamless operational flow.
                     </p>
                     <p>
                        By deploying the latest industrial technologies and a vetted workforce, we maintain the highest standards 
                        demanded by Doha's premier corporations and residential estates.
                     </p>
                  </div>
               </div>

               <div className="grid sm:grid-cols-2 gap-x-12 gap-y-12 border-t border-slate-100 pt-16">
                  {features.map((feature, i) => (
                     <motion.div 
                       key={i}
                       initial={{ opacity: 0, y: 10 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.1 }}
                       className="flex items-center gap-4 group"
                     >
                        <div className="size-10 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                           <CheckCircle2 className="size-5" />
                        </div>
                        <span className="text-sm font-bold text-accent group-hover:text-primary transition-colors">{feature}</span>
                     </motion.div>
                  ))}
               </div>

               {/* Accreditations */}
               <div className="flex flex-wrap items-center gap-12 grayscale opacity-30 pt-8">
                  <div className="flex items-center gap-2">
                     <ShieldCheck className="size-6 text-accent" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-accent">ISO 9001</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <Globe className="size-6 text-accent" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-accent">GCC Standard</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <Clock className="size-6 text-accent" />
                     <span className="text-[10px] font-black uppercase tracking-widest text-accent">24/7 Ops</span>
                  </div>
               </div>
            </div>

            {/* RIGHT: ACTION CARD */}
            <div className="lg:col-span-12 xl:col-span-5 relative">
               <motion.div
                 initial={{ opacity: 0, x: 30 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                 className="sticky top-32"
               >
                  <div className="bg-white rounded-[3rem] p-10 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.1)] border border-slate-100 relative overflow-hidden group">
                     {/* Decorative Background */}
                     <div className="absolute top-0 right-0 size-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 -z-10" />

                     <div className="space-y-8">
                        <div>
                           <h3 className="text-2xl font-black text-accent mb-2">Request a Briefing.</h3>
                           <p className="text-sm font-medium text-muted">Initialize a consultation for your specific <span className="capitalize text-primary font-bold">{formattedTitle}</span> requirements.</p>
                        </div>

                        <div className="space-y-4">
                           <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4 group/item hover:bg-white hover:border-primary/20 transition-all">
                              <div className="size-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm border border-slate-100 group-hover/item:bg-primary group-hover/item:text-white transition-all">
                                 <Phone className="size-5" />
                              </div>
                              <div>
                                 <p className="text-[10px] font-black text-muted uppercase tracking-widest">Hotline</p>
                                 <p className="text-sm font-bold text-accent">+974 4400 0000</p>
                              </div>
                           </div>
                           <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-4 group/item hover:bg-white hover:border-primary/20 transition-all">
                              <div className="size-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm border border-slate-100 group-hover/item:bg-primary group-hover/item:text-white transition-all">
                                 <Mail className="size-5" />
                              </div>
                              <div>
                                 <p className="text-[10px] font-black text-muted uppercase tracking-widest">Digital Mail</p>
                                 <p className="text-sm font-bold text-accent">inquiry@qatarmultiservice.qa</p>
                              </div>
                           </div>
                        </div>

                        <div className="h-px w-full bg-slate-100" />

                        <Button asChild size="lg" className="w-full h-16 rounded-full bg-accent text-white hover:bg-primary transition-all duration-500 shadow-xl shadow-accent/10 group/btn">
                           <Link href={`/contact?service=${slug}`} className="flex items-center justify-center gap-3 font-bold uppercase tracking-[0.2em] text-xs">
                              Request a Quote <ChevronRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
                           </Link>
                        </Button>

                        <p className="text-[10px] font-bold text-center text-muted uppercase tracking-widest">
                           Estimated Response time: 60 Minutes
                        </p>
                     </div>
                  </div>
                  
                  {/* Background Ornaments */}
                  <div className="absolute -bottom-6 -left-6 size-32 border-2 border-primary/10 rounded-full -z-20" />
               </motion.div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}

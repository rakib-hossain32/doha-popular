"use client";

import { motion, Variants } from "framer-motion";
import { 
  Wrench, 
  Zap, 
  HardHat, 
  Truck, 
  ShieldCheck, 
  Paintbrush, 
  ArrowRight, 
  ChevronRight,
  Droplets,
  Building2,
  Users,
  Settings,
  ShieldAlert,
  Briefcase,
  Boxes,
  Globe
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";

const allServices = [
  {
    category: "Strategic Maintenance",
    badge: "Operational Precision",
    description: "Multi-disciplinary technical services for national-scale infrastructure and residential landmarks.",
    items: [
      { 
        name: "HVAC Management", 
        icon: Zap, 
        desc: "Precision AC engineering, central cooling audits, and specialized duct sanitization for Qatar's climate.",
        tag: "Premium Quality"
      },
      { 
        name: "Plumbing Infrastructure", 
        icon: Droplets, 
        desc: "Advanced leak detection, industrial-grade pump maintenance, and complex pipe fit-out solutions.",
        tag: "ISO Certified"
      },
      { 
        name: "Electrical Systems", 
        icon: Wrench, 
        desc: "Master wiring systems, LV/HV DB dressing, and high-efficiency smart lighting installations.",
        tag: "Safety Standard"
      },
    ]
  },
  {
    category: "Elite Cleaning Solutions",
    badge: "Eco-Tech Sanitization",
    description: "Industrial and residential high-fidelity cleaning services meeting global hygienic compliance standards.",
    items: [
      { 
        name: "Luxury Villa Care", 
        icon: Building2, 
        desc: "End-to-end deep cleaning for exclusive residences, focus on premium surfaces and sanitized environments.",
        tag: "Residential"
      },
      { 
        name: "Facade Engineering", 
        icon: Settings, 
        desc: "Specialized high-rise glass maintenance and external cladding cleaning for Doha's iconic skyline.",
        tag: "Industrial"
      },
      { 
        name: "Corporate Flooring", 
        icon: Paintbrush, 
        desc: "Professional restoration and clinical shampoo cleaning for carpets and marble in high-traffic offices.",
        tag: "Commercial"
      },
    ]
  },
  {
    category: "Institutional Support",
    badge: "Human Resource & Logistics",
    description: "Mission-critical staffing and supply chain management for Qatar's large-scale corporate ventures.",
    items: [
      { 
        name: "Technical Manpower", 
        icon: Users, 
        desc: "Elite technicians, safety inspectors, and skilled laborers vetted for specialized industrial projects.",
        tag: "Vetted Staff"
      },
      { 
        name: "Fleet & Logistics", 
        icon: Truck, 
        desc: "Secure heavy vehicle procurement and end-to-end supply chain movement across the GCC region.",
        tag: "24/7 Ops"
      },
      { 
        name: "Safety Compliance", 
        icon: ShieldAlert, 
        desc: "Rigorous corporate safety audits, fire-prevention inspections, and total facility risk assessments.",
        tag: "QCD Approved"
      },
    ]
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

export function ServicesClient() {
  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO SECTION --- */}
      <section className="relative py-24 md:py-32 bg-accent overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[40px_40px]" />
        
        {/* Massive Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[18rem] font-black text-white/2 select-none pointer-events-none uppercase">
          Capabilities
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
               <Briefcase className="size-3.5 text-primary" />
               <span className="text-[10px] font-black text-white uppercase tracking-[0.3em]">Full-Scale Capacity</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tight">
              Operational <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/60 italic font-serif">Excellence.</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
              We engineer multi-disciplinary solutions that power Qatar's infrastructure. 
              Our capacity scales from individual units to national gateways.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- SERVICES CONTENT --- */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto space-y-32">
          {allServices.map((group, idx) => (
            <div key={idx} className="space-y-12">
               <SectionHeader 
                 badge={group.badge}
                 title={group.category.split(' ')[0]}
                 highlight={group.category.split(' ').slice(1).join(' ')}
                 description={group.description}
                 align="left"
               />

               <motion.div 
                 variants={containerVariants}
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, margin: "-50px" }}
                 className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
               >
                 {group.items.map((item, i) => (
                   <motion.div
                     key={i}
                     variants={cardVariants}
                     className="group relative h-full"
                   >
                     <div className="h-full bg-slate-50/50 hover:bg-white border border-slate-100 hover:border-primary/20 p-8 rounded-[2rem] transition-all duration-500 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] flex flex-col justify-between overflow-hidden relative">
                        {/* Subtle Card Glow */}
                        <div className="absolute top-0 right-0 size-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-all duration-700 blur-2xl" />

                        <div className="relative space-y-8">
                           {/* Icon Box */}
                           <div className="size-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:rotate-45 transition-all duration-500">
                              <item.icon className="size-7 group-hover:-rotate-45 transition-transform" />
                           </div>

                           <div className="space-y-4">
                              <div className="flex items-center gap-2">
                                 <span className="text-[10px] font-black text-primary/40 uppercase tracking-widest px-2 py-0.5 border border-primary/10 rounded-full">
                                    {item.tag}
                                 </span>
                              </div>
                              <h3 className="text-2xl font-black text-accent group-hover:text-primary transition-colors">
                                 {item.name}
                              </h3>
                              <p className="text-muted text-sm leading-relaxed font-medium">
                                 {item.desc}
                              </p>
                           </div>
                        </div>

                        <div className="pt-10 flex items-center justify-between">
                           <Link href={`/services/${item.name.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-accent hover:text-primary transition-colors group/link">
                              Request Specialist <ChevronRight className="size-4 group-hover/link:translate-x-1 transition-transform" />
                           </Link>
                        </div>
                     </div>
                   </motion.div>
                 ))}
               </motion.div>
            </div>
          ))}

          {/* --- CUSTOM SERVICE CTA --- */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden bg-accent p-12 md:p-20 text-center"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-size-[30px_30px]" />
            <div className="absolute top-0 right-0 size-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
               <div className="size-20 bg-white/5 border border-white/10 rounded-3xl flex items-center justify-center mx-auto text-primary mb-8">
                  <Boxes className="size-10" />
               </div>
               <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                  Require a <span className="text-primary italic font-serif">Bespoke</span> Framework?
               </h2>
               <p className="text-slate-400 text-lg leading-relaxed">
                  We engineer custom facility management packages designed for the specific needs of large-scale 
                  corporations, government entities, and private estates.
               </p>
               <Button asChild size="lg" className="h-16 px-12 rounded-full bg-white text-accent hover:bg-primary hover:text-white transition-all duration-300 shadow-2xl">
                  <Link href="/contact" className="gap-2 uppercase tracking-widest font-black text-xs">
                     Discuss Master Agreement <ArrowRight className="size-4" />
                  </Link>
               </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- BOTTOM LOGO STRIP --- */}
      <section className="py-20 border-t border-slate-100 flex items-center justify-center gap-12 grayscale opacity-30">
          <ShieldCheck className="size-6" />
          <div className="h-1 w-1 bg-slate-400 rounded-full" />
          <Globe className="size-6" />
          <div className="h-1 w-1 bg-slate-400 rounded-full" />
          <Zap className="size-6" />
          <div className="h-1 w-1 bg-slate-400 rounded-full" />
          <Building2 className="size-6" />
      </section>
    </main>
  );
}

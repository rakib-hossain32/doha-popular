"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { 
  Building2, 
  MapPin, 
  Layers, 
  ArrowUpRight, 
  Globe, 
  ShieldCheck, 
  Clock,
  Zap,
  TrendingUp,
  HardHat,
  ChevronRight
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const projects = [
  {
    title: "West Bay Corporate Tower",
    category: "Full Facility Management",
    stats: "50-Story Complex",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2000&auto=format&fit=crop",
    status: "Active Portfolio",
    location: "West Bay district",
    desc: "Comprehensive integration of MEP, HVAC, and security systems for a Tier-1 financial hub."
  },
  {
    title: "The Pearl Luxury Villas",
    category: "Industrial Cleaning",
    stats: "200+ Unit Estate",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    status: "Completed",
    location: "Porto Arabia",
    desc: "Bespoke deep-cleaning and sanitization operations for Qatar's most exclusive residential address."
  },
  {
    title: "Lusail Logistics Hub",
    category: "Supply Chain Support",
    stats: "24/7 Operations",
    image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=2000&auto=format&fit=crop",
    status: "Active Portfolio",
    location: "Lusail City",
    desc: "Strategic manpower and fleet management ensuring seamless flow for national-scale stadium events."
  },
  {
    title: "Doha Metro Inspection",
    category: "Specialized Manpower",
    stats: "Safety Certifed",
    image: "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=2000&auto=format&fit=crop",
    status: "Ongoing",
    location: "National Network",
    desc: "Deployment of technical specialists for complex structural and safety audits across the metro network."
  },
  {
    title: "Hamad Port Facilities",
    category: "Industrial Maintenance",
    stats: "ISO Integrated",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop",
    status: "Active Portfolio",
    location: "Mesaieed",
    desc: "Long-term asset management and technical support for one of the region's largest maritime gateways."
  },
  {
    title: "Education City Center",
    category: "Hospitality Support",
    stats: "Premier Quality",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop",
    status: "Completed",
    location: "Ar-Rayyan",
    desc: "Elite specialized staffing and high-end facility services for world-class academic institutions."
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
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

export function ProjectsClient() {
  return (
    <main className="min-h-screen bg-white">
      {/* --- HERO HEADER --- */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 bg-accent overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[50px_50px]" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 z-0" />
        
        <div className="container px-4 md:px-6 mx-auto relative z-10 text-center">
          <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             className="space-y-6 max-w-4xl mx-auto"
          >
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-2">
                <TrendingUp className="size-3 text-primary" />
                <span className="text-[10px] font-bold text-white uppercase tracking-[0.3em]">Institutional Success Portfolio</span>
             </div>
             <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight">
               Built for the <br />
               <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-primary/60 italic font-serif">Qatar Elite.</span>
             </h1>
             <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed mx-auto">
               Showcasing a decade of precision in Qatar's most iconic landscapes. From West Bay towers 
               to national infrastructure, we define excellence.
             </p>

             <div className="flex flex-wrap gap-8 pt-8 grayscale opacity-30 justify-center">
                <div className="flex items-center gap-2 text-white">
                   <ShieldCheck className="size-5" />
                   <span className="text-[10px] font-black uppercase tracking-widest">ISO 9001:2015</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                   <Globe className="size-5" />
                   <span className="text-[10px] font-black uppercase tracking-widest">GCC Standards</span>
                </div>
                <div className="flex items-center gap-2 text-white">
                   <Clock className="size-5" />
                   <span className="text-[10px] font-black uppercase tracking-widest">24/7 Operations</span>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* --- PROJECTS GRID --- */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group flex flex-col"
              >
                <div className="relative aspect-4/5 rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-2xl transition-all duration-700">
                  {/* Background Image */}
                  <Image 
                     src={project.image} 
                     alt={project.title}
                     fill
                     className="object-cover group-hover:scale-110 transition-transform duration-1000"
                  />
                  
                  {/* Overlays */}
                  <div className="absolute inset-0 bg-linear-to-t from-accent via-accent/10 to-transparent group-hover:via-accent/40 transition-all duration-700" />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-700" />

                  {/* Top Floating Badge */}
                  <div className="absolute top-6 left-6">
                     <div className="px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                        <span className="text-[9px] font-bold text-white uppercase tracking-widest">{project.category}</span>
                     </div>
                  </div>

                  {/* Interaction Button */}
                  <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                     <div className="size-12 rounded-full bg-white text-accent flex items-center justify-center shadow-2xl">
                        <ArrowUpRight className="size-6" />
                     </div>
                  </div>

                  {/* Primary Content Base */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                     <div className="space-y-4">
                        <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">
                          {project.title}
                        </h3>
                        <div className="h-px w-full bg-white/20 group-hover:bg-primary/50 transition-colors" />
                        <div className="flex items-center gap-6">
                           <div className="flex flex-col gap-0.5">
                              <p className="text-[8px] uppercase font-black tracking-widest text-white/40">Scale</p>
                              <p className="text-xs font-bold text-white flex items-center gap-1.5">
                                 <Layers className="size-3 text-primary" /> {project.stats}
                              </p>
                           </div>
                           <div className="flex flex-col gap-0.5">
                              <p className="text-[8px] uppercase font-black tracking-widest text-white/40">Location</p>
                              <p className="text-xs font-bold text-white flex items-center gap-1.5">
                                 <MapPin className="size-3 text-primary" /> {project.location}
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
                </div>

                {/* Expanded Card Detail Placeholder */}
                <div className="pt-6 space-y-4">
                   <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${project.status === 'Ongoing' ? 'text-primary' : 'text-accent/40'}`}>
                         • {project.status}
                      </span>
                      <ChevronRight className="size-4 text-slate-200 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                   </div>
                   <p className="text-sm font-medium text-muted leading-relaxed line-clamp-2 group-hover:text-accent transition-colors">
                      {project.desc}
                   </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- FOOTER CTA SECTION --- */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
         <div className="container px-4 md:px-6 mx-auto text-center space-y-10">
            <SectionHeader 
               badge="Work with Us"
               title="Ready to Start Your"
               highlight="Iconic Journey?"
               description="Our corporate division is standing by to integrate our elite services into your operational workflow."
               align="center"
               className="mb-0"
            />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
               <Button asChild size="lg" className="h-16 px-12 rounded-full bg-accent text-white hover:bg-primary transition-all duration-300 shadow-xl shadow-accent/10">
                  <Link href="/contact" className="gap-2 uppercase tracking-widest font-black text-xs">
                     Inquire About Partnership <Zap className="size-4" />
                  </Link>
               </Button>
               <Button asChild variant="outline" size="lg" className="h-16 px-12 rounded-full border-slate-200 gap-2 uppercase tracking-widest font-black text-xs hover:bg-white hover:border-primary">
                  <Link href="/services">
                     Browse Capacity <HardHat className="size-4" />
                  </Link>
               </Button>
            </div>
         </div>
      </section>
    </main>
  );
}

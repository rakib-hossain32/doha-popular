"use client";

import { motion, Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Plus, Building2, MapPin, Layers } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const projects = [
  { 
    title: "West Bay Corporate Tower", 
    category: "Full Facility Management", 
    stats: "45,000 SQM",
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=2000&auto=format&fit=crop",
    location: "Doha Central"
  },
  { 
    title: "The Pearl Luxury Residences", 
    category: "Premium Deep Cleaning", 
    stats: "200+ Villas",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    location: "Porto Arabia"
  },
  { 
    title: "Lusail Stadium Support", 
    category: "Logistics & Staffing", 
    stats: "24/7 Support",
    image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25?q=80&w=2000&auto=format&fit=crop",
    location: "Lusail City"
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

export function ProjectSnippet() {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
        <SectionHeader 
          badge="Portfolio of Excellence"
          title="Iconic"
          highlight="Success Stories."
          align="center"
          className="md:items-start md:text-left text-center lg:max-w-none md:max-w-none ml-0 mb-0 max-md:mx-auto"
        />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="hidden md:flex pb-2"
          >
            <Button asChild className="rounded-full h-16 px-10 bg-accent text-white hover:bg-primary transition-all duration-300 shadow-xl shadow-accent/10 group">
              <Link href="/projects" className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest">
                Explore All Projects <Plus className="size-5 group-hover:rotate-90 transition-transform duration-500" />
              </Link>
            </Button>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative"
            >
              <div className="relative aspect-4/5 rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-2xl shadow-slate-200 group-hover:shadow-primary/20 transition-all duration-700">
                {/* Background Image */}
                <Image 
                   src={project.image} 
                   alt={project.title}
                   fill
                   className="object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                
                {/* Dynamic Overlays */}
                <div className="absolute inset-0 bg-linear-to-t from-accent via-accent/20 to-transparent group-hover:via-accent/40 transition-all duration-700" />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-700" />

                {/* Floating Tags */}
                <div className="absolute top-6 left-6 flex flex-col gap-2">
                   <div className="px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                      <span className="text-[10px] font-bold text-white uppercase tracking-widest">{project.category}</span>
                   </div>
                </div>

                {/* Main Content Area */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                   <div className="space-y-6">
                      <h3 className="text-3xl font-black text-white leading-tight group-hover:text-primary transition-colors duration-500">
                        {project.title}
                      </h3>
                      
                      <div className="h-px w-full bg-white/10 group-hover:bg-primary/30 transition-colors" />

                      <div className="flex items-center justify-between text-white/70">
                         <div className="flex items-center gap-6">
                            <div className="flex flex-col gap-1">
                               <p className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/40">Scale</p>
                               <p className="text-xs font-bold text-white flex items-center gap-1.5 italic">
                                  <Layers className="size-3 text-primary" /> {project.stats}
                               </p>
                            </div>
                            <div className="flex flex-col gap-1">
                               <p className="text-[9px] uppercase font-bold tracking-[0.2em] text-white/40">Location</p>
                               <p className="text-xs font-bold text-white flex items-center gap-1.5 italic">
                                  <MapPin className="size-3 text-primary" /> {project.location}
                               </p>
                            </div>
                         </div>
                         <div className="size-12 rounded-full bg-white text-accent flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                            <ArrowUpRight className="size-6" />
                         </div>
                      </div>
                   </div>
                </div>

                {/* Interaction Overlay */}
                <Link href={`/projects/${index}`} className="absolute inset-0 z-20" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* --- MOBILE CTA BUTTON --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex md:hidden justify-center mt-12"
        >
          <Button asChild className="w-full h-16 rounded-full bg-accent text-white hover:bg-primary transition-all duration-300 shadow-xl shadow-accent/10 group">
            <Link href="/projects" className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-widest">
              Explore All Projects <Plus className="size-5" />
            </Link>
          </Button>
        </motion.div>

        {/* --- BOTTOM DECORATION --- */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-20 flex justify-center gap-3 opacity-20"
        >
            <Building2 className="size-6 text-accent" />
            <Building2 className="size-6 text-primary" />
            <Building2 className="size-6 text-accent" />
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { 
  ArrowUpRight, 
  Plus, 
  Building2, 
  MapPin, 
  Layers,
  X,
  Calendar,
  CheckCircle2,
  Zap,
  ChevronRight,
  ChevronLeft
} from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

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
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const }
  }
};

export function ProjectSnippet() {
  const [dbProjects, setDbProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects");
        const data = await res.json();
        setDbProjects(data);
      } catch (err) {
        console.error("Failed to fetch featured projects:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  const featuredProjects = dbProjects.slice(0, 3);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
      );
    }
  };

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

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="size-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          >
            {featuredProjects.map((project, index) => (
              <motion.div
                key={index}
                layoutId={`home-card-${project.slug}`}
                onClick={() => setSelectedProject(project)}
                variants={cardVariants}
                className="group relative cursor-pointer"
              >
                <div className="relative aspect-4/5 rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-2xl shadow-slate-200 group-hover:shadow-primary/20 transition-all duration-700">
                  {/* Background Image */}
                  <motion.div layoutId={`home-image-${project.slug}`} className="absolute inset-0 size-full">
                    <Image 
                       src={project.image} 
                       alt={project.title}
                       fill
                       className="object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                  </motion.div>
                  
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
                        <motion.h3 layoutId={`home-title-${project.slug}`} className="text-3xl font-black text-white leading-tight group-hover:text-primary transition-colors duration-500">
                          {project.title}
                        </motion.h3>
                        
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
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

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

      {/* --- ENHANCED RESPONSIVE MODAL --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-9999 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full sm:h-auto sm:max-h-[95vh] sm:max-w-[95vw] md:max-w-5xl lg:max-w-6xl xl:max-w-7xl bg-white sm:rounded-3xl overflow-hidden shadow-2xl z-10 flex flex-col"
            >
              <button 
                 onClick={() => setSelectedProject(null)}
                 className="absolute top-4 right-4 sm:top-6 sm:right-6 size-10 sm:size-12 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md flex items-center justify-center text-white transition-all z-50 group"
              >
                 <X className="size-5 sm:size-6 group-hover:rotate-90 transition-transform" />
              </button>

              <div className="flex flex-col lg:flex-row h-full sm:h-auto">
                <div className="relative w-full lg:w-1/2 h-[40vh] sm:h-[50vh] lg:h-[85vh] bg-slate-950 flex flex-col">
                   <div className="relative flex-1">
                      <AnimatePresence mode="wait">
                         <motion.div 
                            key={currentImageIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0"
                         >
                            <Image 
                               src={selectedProject.gallery[currentImageIndex]} 
                               alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                               fill
                               className="object-cover"
                               priority
                            />
                         </motion.div>
                      </AnimatePresence>
                      
                      {selectedProject.gallery.length > 1 && (
                         <>
                            <button 
                               onClick={(e) => { e.stopPropagation(); prevImage(); }}
                               className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 size-9 sm:size-10 md:size-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 active:scale-95 transition-all z-20"
                            >
                               <ChevronLeft className="size-4 sm:size-5 md:size-6" />
                            </button>
                            <button 
                               onClick={(e) => { e.stopPropagation(); nextImage(); }}
                               className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 size-9 sm:size-10 md:size-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/30 active:scale-95 transition-all z-20"
                            >
                               <ChevronRight className="size-4 sm:size-5 md:size-6" />
                            </button>
                         </>
                      )}
                      
                      <div className="absolute top-4 left-4 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-black/50 backdrop-blur-md rounded-full z-20">
                         <span className="text-[10px] sm:text-xs font-bold text-white">{currentImageIndex + 1} / {selectedProject.gallery.length}</span>
                      </div>
                   </div>

                   {selectedProject.gallery.length > 1 && (
                      <div className="hidden sm:flex gap-2 p-3 md:p-4 bg-slate-950/95 backdrop-blur-md overflow-x-auto scrollbar-hide">
                         {selectedProject.gallery.map((img: string, idx: number) => (
                            <button
                               key={idx}
                               onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                               className={`relative shrink-0 size-12 sm:size-14 md:size-16 rounded-lg md:rounded-xl overflow-hidden border-2 transition-all ${
                                  idx === currentImageIndex 
                                     ? 'border-primary scale-105 shadow-lg shadow-primary/20' 
                                     : 'border-white/20 hover:border-white/40 opacity-60 hover:opacity-100'
                               }`}
                            >
                               <Image 
                                  src={img} 
                                  alt={`Thumbnail ${idx + 1}`}
                                  fill
                                  className="object-cover"
                               />
                            </button>
                         ))}
                      </div>
                   )}
                </div>

                <div className="relative w-full lg:w-1/2 flex flex-col bg-white h-auto lg:h-[85vh] overflow-hidden">
                   <div className="flex-1 p-6 sm:p-8 md:p-10 lg:p-10 space-y-5 sm:space-y-6">
                      <div className="space-y-3 sm:space-y-4">
                         <motion.h2 
                            layoutId={`home-title-${selectedProject.slug}`} 
                            className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-black text-accent leading-[1.1]"
                         >
                            {selectedProject.title}
                         </motion.h2>
                         <p className="text-xs sm:text-sm md:text-base text-slate-500 font-medium leading-relaxed line-clamp-3">
                            {selectedProject.desc} Comprehensive facility management excellence delivered at the highest tier.
                         </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 sm:gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                         {[
                            { label: "Location", value: selectedProject.location, icon: MapPin },
                            { label: "Scale", value: selectedProject.stats, icon: Layers },
                            { label: "Status", value: selectedProject.status, icon: CheckCircle2 },
                            { label: "Completion", value: "Q4 2024", icon: Calendar }
                         ].map((stat, i) => (
                            <div key={i} className="space-y-0.5">
                               <p className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-muted">{stat.label}</p>
                               <p className="text-xs font-bold text-accent flex items-center gap-1.5">
                                  <stat.icon className="size-3 text-primary shrink-0" /> 
                                  <span className="truncate">{stat.value}</span>
                               </p>
                            </div>
                         ))}
                      </div>

                      <div className="space-y-3 sm:space-y-4">
                         <h4 className="text-xs sm:text-sm font-black uppercase tracking-widest text-accent border-b border-slate-100 pb-3 sm:pb-4">Operational Impact</h4>
                         <ul className="space-y-2 sm:space-y-3">
                            {[
                               "100% Uptime Guarantee Initiated",
                               "ISO 9001 Protocol Integration",
                               "Specialized Safety Workforce Deployed",
                               "Sustainable Resource Optimization"
                            ].map((item, i) => (
                               <li key={i} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm font-medium text-muted">
                                  <span className="size-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                                  <span>{item}</span>
                               </li>
                            ))}
                         </ul>
                      </div>
                   </div>

                   <div className="p-4 sm:p-6 md:p-8 border-t border-slate-100 bg-white">
                      <Button asChild className="w-full h-12 sm:h-14 rounded-xl sm:rounded-2xl bg-accent text-white hover:bg-primary shadow-xl shadow-accent/10 text-xs sm:text-sm">
                         <Link href="/contact" className="flex items-center justify-center gap-2 font-black uppercase tracking-widest">
                            Request Case Study <Zap className="size-3 sm:size-4" />
                         </Link>
                      </Button>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

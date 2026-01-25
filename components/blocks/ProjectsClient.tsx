"use client";

import { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Building2, 
  MapPin, 
  Layers, 
  ArrowUpRight, 
  Zap,
  ChevronRight,
  X,
  Calendar,
  CheckCircle2,
  ChevronLeft,
  Loader2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PageHero } from "@/components/ui/page-hero";

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
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const } 
  }
};

export function ProjectsClient() {
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
        console.error("Failed to fetch projects:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

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
    <main className="min-h-screen bg-white">
      <PageHero 
        badge="Institutional Portfolio"
        title="Built for the"
        highlight="Qatar Elite."
        description="Showcasing a decade of precision in Qatar's most iconic landscapes. From West Bay towers to national infrastructure, we define excellence."
        watermark="Portfolio"
        centered
        breadcrumb={[{ label: "Projects", href: "/projects" }]}
      />

      <section className="py-16 md:py-24">
        <div className="container px-4 sm:px-6 mx-auto">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="size-10 text-primary animate-spin" />
            </div>
          ) : (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10"
            >
              {dbProjects.map((project, index) => (
                <motion.div
                  key={index}
                  onClick={() => setSelectedProject(project)}
                  variants={cardVariants}
                  className="group flex flex-col cursor-pointer"
                >
                  <div className="relative aspect-4/5 rounded-4xl sm:rounded-[2.5rem] overflow-hidden bg-slate-100 shadow-xl transition-all duration-700">
                    <div className="absolute inset-0 size-full">
                      <Image 
                         src={project.image} 
                         alt={project.title}
                         fill
                         className="object-cover group-hover:scale-110 transition-transform duration-1000"
                      />
                    </div>
                    <div className="absolute inset-0 bg-linear-to-t from-accent via-accent/20 to-transparent group-hover:via-accent/40 transition-all duration-700" />
                    
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                       <div className="px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                          <span className="text-[8px] sm:text-[9px] font-bold text-white uppercase tracking-widest">{project.category}</span>
                       </div>
                    </div>

                    <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                       <div className="space-y-4">
                          <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white leading-tight">
                            {project.title}
                          </h3>
                          <div className="h-px w-full bg-white/20 group-hover:bg-primary/50 transition-colors" />
                          <div className="flex items-center gap-4 sm:gap-6">
                             <div className="flex flex-col gap-0.5">
                                <p className="text-[7px] sm:text-[8px] uppercase font-black tracking-widest text-white/40">Scale</p>
                                <p className="text-[10px] sm:text-xs font-bold text-white flex items-center gap-1.5">
                                   <Layers className="size-3 text-primary" /> {project.stats}
                                </p>
                             </div>
                             <div className="flex flex-col gap-0.5">
                                <p className="text-[7px] sm:text-[8px] uppercase font-black tracking-widest text-white/40">Location</p>
                                <p className="text-[10px] sm:text-xs font-bold text-white flex items-center gap-1.5">
                                   <MapPin className="size-3 text-primary" /> {project.location}
                                </p>
                             </div>
                          </div>
                       </div>
                    </div>
                  </div>

                  <div className="pt-4 sm:pt-6 space-y-3">
                     <div className="flex items-center justify-between">
                        <span className={`text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] ${project.status === 'Ongoing' ? 'text-primary' : 'text-accent/40'}`}>
                           • {project.status}
                        </span>
                        <ChevronRight className="size-4 text-slate-200 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                     </div>
                     <p className="text-xs sm:text-sm font-medium text-muted leading-relaxed line-clamp-2">
                        {project.desc}
                     </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* --- ENHANCED RESPONSIVE MODAL --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-999 flex items-center justify-center p-0 sm:p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-6xl bg-white sm:rounded-[2.5rem] overflow-hidden shadow-2xl z-10 flex flex-col lg:flex-row"
            >
              <button 
                 onClick={() => setSelectedProject(null)}
                 className="absolute top-4 right-4 size-10 sm:size-12 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md flex items-center justify-center text-white transition-all z-60 group"
              >
                 <X className="size-5 sm:size-6" />
              </button>

              {/* Left: Responsive Gallery */}
              <div className="relative w-full lg:w-3/5 h-[45vh] sm:h-[50vh] lg:h-auto flex flex-col bg-slate-950 shrink-0 overflow-hidden">
                 <div className="relative flex-1">
                    <AnimatePresence mode="wait">
                       <motion.div 
                          key={currentImageIndex}
                          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                          className="absolute inset-0"
                       >
                          <Image 
                             src={selectedProject.gallery[currentImageIndex]} 
                             alt="Gallery" fill className="object-cover" priority
                          />
                       </motion.div>
                    </AnimatePresence>
                    
                    {selectedProject.gallery.length > 1 && (
                       <>
                          <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 size-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-all z-20">
                             <ChevronLeft className="size-6" />
                          </button>
                          <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 size-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary transition-all z-20">
                             <ChevronRight className="size-6" />
                          </button>
                       </>
                    )}
                 </div>

                 {/* Thumbnails - Horizontal Scroll on All Devices */}
                 <div className="flex gap-2 p-4 bg-black/20 overflow-x-auto scrollbar-hide shrink-0">
                    {selectedProject.gallery.map((img: any, i: number) => (
                       <button key={i} onClick={() => setCurrentImageIndex(i)} className={`relative size-12 sm:size-14 rounded-xl overflow-hidden border-2 shrink-0 transition-all ${i === currentImageIndex ? 'border-primary' : 'border-transparent opacity-50'}`}>
                          <Image src={img} alt="Thumb" fill className="object-cover" />
                       </button>
                    ))}
                 </div>
              </div>

              {/* Right: Content details */}
              <div className="flex-1 flex flex-col min-w-0 bg-white overflow-hidden">
                 <div className="flex-1 overflow-y-auto p-6 sm:p-8 lg:p-12 space-y-6 sm:space-y-8 scrollbar-hide">
                    <div className="space-y-4">
                       <div className="flex items-center gap-2">
                          <div className="h-4 w-1 bg-primary rounded-full" />
                          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{selectedProject.category}</span>
                       </div>
                       <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-accent uppercase tracking-tighter leading-none italic">{selectedProject.title}</h2>
                       <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed">
                          {selectedProject.desc}
                       </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 p-5 rounded-4xl bg-slate-50 border border-slate-100">
                       {[
                          { label: "Location", value: selectedProject.location, icon: MapPin },
                          { label: "Metric", value: selectedProject.stats, icon: Layers },
                          { label: "Completion", value: "Q4 2024", icon: Calendar },
                          { label: "Status", value: selectedProject.status, icon: CheckCircle2 }
                       ].map((stat, i) => (
                          <div key={i} className="space-y-0.5">
                             <p className="text-[8px] font-black uppercase text-slate-400 tracking-widest">{stat.label}</p>
                             <p className="text-xs sm:text-sm font-bold text-accent truncate flex items-center gap-2">
                                <stat.icon className="size-3 text-primary shrink-0" /> {stat.value}
                             </p>
                          </div>
                       ))}
                    </div>

                    <div className="space-y-4">
                       <h4 className="text-[10px] font-black uppercase tracking-widest text-accent border-b border-slate-100 pb-4">Operational Performance</h4>
                       <div className="grid grid-cols-1 gap-3">
                          {["ISO Certified Maintenance", "24/7 Priority Support", "Elite Technical Personnel"].map((item, i) => (
                             <div key={i} className="flex items-center gap-3 text-xs font-bold text-slate-500">
                                <div className="size-1.5 rounded-full bg-primary" /> {item}
                             </div>
                          ))}
                       </div>
                    </div>
                 </div>

                 <div className="p-6 sm:p-8 bg-slate-50 border-t border-slate-100 shrink-0">
                    <Button asChild className="w-full h-14 rounded-2xl bg-accent hover:bg-primary shadow-xl shadow-accent/10 transition-all font-black uppercase tracking-[0.2em] text-[10px]">
                       <Link href="/contact" className="gap-2">Request Technical Briefing <Zap className="size-4" /></Link>
                    </Button>
                 </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}

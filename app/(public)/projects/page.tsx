"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/button"; // Assuming Badge component exists or using basic styling
import Image from "next/image"; // In a real app. For now we use divs with colors/gradients.

const projects = [
  {
    title: "West Bay Tower Maintenance",
    category: "Facility Management",
    description: "Complete HVAC and electrical maintenance for a 50-story commercial tower.",
    image: "bg-blue-900", // Placeholder for actual image
    status: "Completed",
    location: "West Bay, Doha"
  },
  {
    title: "Pearl Qatar Villa Renovation",
    category: "Construction",
    description: "Luxury villa interior fit-out and landscaping renovation.",
    image: "bg-amber-900",
    status: "Completed",
    location: "The Pearl"
  },
  {
    title: "Lusail Stadium Cleaning",
    category: "Cleaning",
    description: "Post-event massive cleaning operation management.",
    image: "bg-emerald-900",
    status: "Completed",
    location: "Lusail City"
  },
  {
    title: "Metro Station Manpower",
    category: "Manpower",
    description: "Deploying 200+ skilled technicians for safety inspections.",
    image: "bg-purple-900",
    status: "Ongoing",
    location: "Doha Metro"
  }
];

export default function ProjectsPage() {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      <section className="relative py-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-secondary/10" />
        <div className="container px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-secondary">Projects</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            A showcase of our excellence delivering results across Qatar's most iconic locations.
          </p>
        </div>
      </section>

      <section className="container px-4 mx-auto py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all"
            >
              {/* Image Placeholder */}
              <div className={`h-64 w-full ${project.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/90 text-slate-900 text-xs font-bold px-2 py-1 rounded-full uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                   <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                     {project.title}
                   </h3>
                   <span className={`text-xs font-medium px-2 py-1 rounded-full border ${project.status === 'Completed' ? 'border-green-500 text-green-500' : 'border-amber-500 text-amber-500'}`}>
                     {project.status}
                   </span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 mb-4">
                  {project.description}
                </p>
                <div className="flex items-center text-sm text-slate-400">
                  <span className="font-semibold text-secondary mr-2">Location:</span> {project.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

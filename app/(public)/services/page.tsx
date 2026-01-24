"use client";

import { motion } from "framer-motion";
import { Wrench, Zap, HardHat, Truck, ShieldCheck, Paintbrush, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const allServices = [
  {
    category: "Maintenance",
    items: [
      { name: "HVAC Maintenance", icon: Wrench, desc: "AC repair, installation, and duct cleaning." },
      { name: "Plumbing Services", icon: Wrench, desc: "Leak detection, pipe repair, and fitting." },
      { name: "Electrical Works", icon: Zap, desc: "Wiring, DB dressing, and lighting installation." },
    ]
  },
  {
    category: "Cleaning (Commercial & Residential)",
    items: [
      { name: "Deep Cleaning", icon: Paintbrush, desc: "Villa, apartment, and office deep cleaning." },
      { name: "Sofa & Carpet", icon: Paintbrush, desc: "Shampoo cleaning and sanitization." },
      { name: "Facade Cleaning", icon: Paintbrush, desc: "High-rise glass and exterior building cleaning." },
    ]
  },
  {
    category: "Corporate Support",
    items: [
      { name: "Manpower Supply", icon: HardHat, desc: "Helpers, masons, and skilled technicians." },
      { name: "Logistics", icon: Truck, desc: "Heavy vehicle rental and goods transport." },
      { name: "Safety Audits", icon: ShieldCheck, desc: "Fire safety inspection and compliance." },
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-background min-h-screen pb-20">
      <section className="relative py-20 bg-accent overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container px-4 relative z-10 text-center mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-highlight">Services</span>
          </h1>
          <p className="text-secondary/60 text-lg max-w-2xl mx-auto">
            Comprehensive solutions tailored for the unique needs of the Qatari market.
          </p>
        </div>
      </section>

      <div className="container px-4 mx-auto mt-16 space-y-16">
        {allServices.map((section, idx) => (
          <div key={idx} className="text-accent">
            <h2 className="text-2xl font-bold mb-8 border-l-4 border-primary pl-4">
              {section.category}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((item, i) => (
                <ServiceCard key={i} item={item} />
              ))}
            </div>
          </div>
        ))}
        
        <div className="bg-primary rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-card">
            <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">Need a Custom Service?</h2>
                <p className="mb-8 text-white/80 max-w-xl mx-auto">
                    We offer tailored facility management packages for large corporate clients. Contact us to discuss your specific requirements.
                </p>
                <Button variant="highlight" size="lg" asChild>
                    <Link href="/contact">Contact Support</Link>
                </Button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ item }: { item: any }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-surface p-6 rounded-xl shadow-soft border border-slate-100 flex gap-4 hover:border-primary/30 transition-all text-accent group"
    >
      <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
        <item.icon className="size-6 text-primary group-hover:text-white" />
      </div>
      <div>
        <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{item.name}</h3>
        <p className="text-sm text-muted mb-4 leading-relaxed">{item.desc}</p>
        <Link href={`/services/request?type=${item.name}`} className="text-sm font-bold text-highlight hover:text-primary transition-colors inline-flex items-center">
          Request Quote <ArrowRight className="ml-2 size-3" />
        </Link>
      </div>
    </motion.div>
  );
}

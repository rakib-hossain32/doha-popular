"use client";

import { motion } from "framer-motion";
import { Building2, Users, Trophy, History, ShieldCheck } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Header */}
      <section className="relative py-20 bg-accent overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container px-4 relative z-10 mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            About <span className="text-highlight">Qatar Multi-Service</span>
          </motion.h1>
          <p className="text-secondary/60 text-lg max-w-2xl">
            We are the leading facility management and corporate service provider in Doha, committed to excellence since 2010.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20 text-accent">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
            <div className="space-y-6 text-muted leading-relaxed">
              <p>
                Our mission is to elevate the standard of living and working in Qatar by providing reliable, high-quality, and efficient maintenance and corporate services.
              </p>
              <p>
                We envision a future where every building in Qatar operates at peak efficiency, and every business has the logistical support it needs to thrive on a global scale.
              </p>
            </div>
          </div>
          <div className="bg-surface p-8 rounded-2xl shadow-card border border-slate-100">
             <div className="grid grid-cols-2 gap-6">
                <StatCard number="10+" label="Years Experience" icon={History} />
                <StatCard number="500+" label="Projects Done" icon={Trophy} />
                <StatCard number="100+" label="Team Members" icon={Users} />
                <StatCard number="100%" label="Safety Record" icon={ShieldCheck} />
             </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-accent mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 text-accent">
            <ValueCard 
              title="Integrity" 
              description="We operate with complete transparency and honesty in all our dealings."
            />
            <ValueCard 
              title="Excellence" 
              description="We never settle for 'good enough'. We strive for perfection in every task."
            />
            <ValueCard 
              title="Innovation" 
              description="Adopting the latest technologies to serve our clients better."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function StatCard({ number, label, icon: Icon }: { number: string, label: string, icon: React.ElementType }) {
  return (
    <div className="flex flex-col items-center text-center p-4 bg-background rounded-xl border border-slate-100">
      <Icon className="size-8 text-highlight mb-2" />
      <span className="text-2xl font-bold text-accent">{number}</span>
      <span className="text-sm text-muted">{label}</span>
    </div>
  );
}

function ValueCard({ title, description }: { title: string, description: string }) {
  return (
    <div className="p-6 bg-surface rounded-xl shadow-soft border border-slate-100 hover:border-primary/50 transition-colors">
      <h3 className="text-xl font-bold text-accent mb-3 flex items-center gap-2">
        <Building2 className="text-primary size-5" />
        {title}
      </h3>
      <p className="text-muted">{description}</p>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, Calendar, User, Briefcase, Trash2, Loader2, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Application {
  _id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  message: string;
  status: string;
  appliedAt: string;
}

export function CareerManager() {
  const [apps, setApps] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchApps = async () => {
    try {
      const res = await fetch("/api/careers");
      const data = await res.json();
      setApps(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApps();
  }, []);

  const deleteApp = async (id: string) => {
    if (!confirm("Are you sure you want to remove this application?")) return;
    try {
      await fetch(`/api/careers/${id}`, { method: "DELETE" }); // Assuming we have a delete route
      fetchApps();
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <Loader2 className="size-10 animate-spin text-primary" />
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Retrieving Talent Pipeline...</p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div className="space-y-1">
        <h2 className="text-3xl font-black text-accent uppercase tracking-tighter italic">Talent <span className="text-primary italic">Pipeline.</span></h2>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Manage incoming career inquiries and specialized staff profiles</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <AnimatePresence>
          {apps.map((app) => (
            <motion.div 
              key={app._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-[2.5rem] border border-slate-100 p-8 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 group"
            >
              <div className="flex flex-col md:flex-row justify-between gap-8">
                <div className="space-y-6 flex-1">
                  <div className="flex items-center gap-4">
                     <div className="size-12 rounded-2xl bg-slate-50 flex items-center justify-center text-accent group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                        <User className="size-6" />
                     </div>
                     <div>
                        <h3 className="text-xl font-black text-accent uppercase tracking-tighter italic">{app.name}</h3>
                        <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest">
                           <Briefcase className="size-3" /> {app.position}
                        </div>
                     </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <a href={`mailto:${app.email}`} className="flex items-center gap-3 text-slate-500 hover:text-primary transition-colors">
                       <Mail className="size-4" />
                       <span className="text-xs font-bold">{app.email}</span>
                    </a>
                    <a href={`tel:${app.phone}`} className="flex items-center gap-3 text-slate-500 hover:text-primary transition-colors">
                       <Phone className="size-4" />
                       <span className="text-xs font-bold">{app.phone}</span>
                    </a>
                  </div>

                  <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 relative group-hover:bg-white transition-colors">
                     <MessageSquare className="absolute -top-3 -left-3 size-8 text-primary shadow-xl bg-white rounded-full p-2" />
                     <p className="text-sm text-slate-600 font-medium leading-relaxed italic line-clamp-3 group-hover:line-clamp-none">
                       "{app.message}"
                     </p>
                  </div>
                </div>

                <div className="flex md:flex-col justify-between items-end gap-4 min-w-[140px]">
                   <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-4 py-2 rounded-full">
                      <Calendar className="size-3" /> {new Date(app.appliedAt).toLocaleDateString()}
                   </div>
                   
                   <button 
                     onClick={() => deleteApp(app._id)}
                     className="size-12 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all shadow-sm"
                   >
                     <Trash2 className="size-5" />
                   </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {apps.length === 0 && (
          <div className="text-center py-20 bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
             <Briefcase className="size-12 text-slate-300 mx-auto mb-4" />
             <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">No applications received yet</p>
          </div>
        )}
      </div>
    </div>
  );
}

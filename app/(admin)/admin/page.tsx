"use client";

import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

// Admin Components
import { Sidebar } from "@/components/admin/Sidebar";
import { DashboardHeader } from "@/components/admin/DashboardHeader";
import { DashboardOverview } from "@/components/admin/DashboardOverview";
import { ProjectTable } from "@/components/admin/ProjectTable";
import { ProjectFormModal } from "@/components/admin/ProjectFormModal";
import { TestimonialManager } from "@/components/admin/TestimonialManager";

interface Project {
  _id: string;
  slug: string;
  title: string;
  category: string;
  stats: string;
  image: string;
  gallery: string[];
  status: string;
  location: string;
  desc: string;
}

export default function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard"); // Default to dashboard
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Handle Responsive Layout Stability
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (!mobile) setSidebarOpen(true);
      else setSidebarOpen(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/projects");
      const data = await res.json();
      setProjects(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to permanently remove this record?")) return;
    try {
      await fetch(`/api/projects/${id}`, { method: "DELETE" });
      fetchProjects();
    } catch (err) {
      console.error(err);
    }
  };

  const filteredProjects = projects.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-50 flex overflow-hidden font-sans">
      {/* 1. Sidebar Section */}
      <Sidebar 
        sidebarOpen={sidebarOpen} 
        isMobile={isMobile} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        setSidebarOpen={setSidebarOpen} 
      />

      {/* 2. Main Container Section */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden relative">
        <DashboardHeader 
          isMobile={isMobile} 
          sidebarOpen={sidebarOpen} 
          activeTab={activeTab} 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          setSidebarOpen={setSidebarOpen} 
        />

        {/* Dynamic Content Area */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10 scrollbar-hide">
          <div className="max-w-7xl mx-auto space-y-10 pb-10">
            {activeTab === "dashboard" && <DashboardOverview projects={projects} />}

            {activeTab === "reviews" && <TestimonialManager />}

            {activeTab === "projects" && (
              <div className="space-y-8">
                {/* Management Toolbar */}
                <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-6 rounded-4xl border border-slate-100 shadow-sm gap-6">
                  <div className="flex items-center gap-4">
                    <div className="h-8 w-1.5 rounded-full bg-primary" />
                    <div>
                      <h2 className="text-sm font-black text-accent uppercase tracking-widest leading-none">Record Repository</h2>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1.5">Manage institutional assets</p>
                    </div>
                  </div>
                  <Button onClick={() => { setEditingProject(null); setShowProjectModal(true); }} className="h-14 px-10 rounded-2xl bg-accent hover:bg-primary shadow-xl shadow-accent/10 w-full sm:w-auto font-black uppercase tracking-widest text-[10px]">
                    <Plus className="size-5 mr-2" /> Add New Project
                  </Button>
                </div>

                {/* Data Table Layer */}
                <ProjectTable 
                  projects={filteredProjects} 
                  loading={loading} 
                  onEdit={(p) => { setEditingProject(p); setShowProjectModal(true); }} 
                  onDelete={handleDelete} 
                />
              </div>
            )}

            {/* Default Page Placeholder for other tabs */}
            {!["dashboard", "projects", "reviews"].includes(activeTab) && (
              <div className="flex flex-col items-center justify-center min-h-[50vh] text-center gap-6">
                 <div className="size-24 rounded-full bg-slate-100 flex items-center justify-center">
                    <div className="size-16 rounded-full border-4 border-slate-200 border-t-primary animate-spin" />
                 </div>
                 <h3 className="text-2xl font-black text-accent uppercase tracking-tighter italic">Optimizing Module</h3>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* 3. Global Modal Layer */}
      <ProjectFormModal 
        isOpen={showProjectModal}
        onClose={() => setShowProjectModal(false)}
        project={editingProject}
        onSuccess={() => { fetchProjects(); setShowProjectModal(false); }}
      />
    </div>
  );
}

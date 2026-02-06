"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Building2, Mail, MapPin, Facebook, Instagram, Linkedin, Globe, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

import { useSettings } from "@/components/providers/SettingsProvider"

export function Header() {
  const { settings } = useSettings()
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* --- DOHA POPULAR TOP STRIP --- */}
      <div className={cn(
        "hidden lg:block bg-slate-950 py-2.5 transition-all duration-700 relative z-60 overflow-hidden",
        scrolled ? "opacity-0 -translate-y-full pointer-events-none" : "opacity-100 translate-y-0"
      )}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px)] bg-size-[40px_1px]" />
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative z-10">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2.5 group cursor-default">
              <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <Mail className="size-3 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/50">{settings.email}</span>
            </div>
            <div className="flex items-center gap-2.5 group cursor-default">
              <div className="size-6 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                <MapPin className="size-3 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-white/50">{settings.address}</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4 pr-6 border-r border-white/5">
              <a href={settings.facebook || "#"} target="_blank" rel="noopener noreferrer">
                <Facebook className="size-3.5 text-white/30 hover:text-primary transition-all cursor-pointer hover:-translate-y-0.5" />
              </a>
              <a href={settings.instagram || "#"} target="_blank" rel="noopener noreferrer">
                <Instagram className="size-3.5 text-white/30 hover:text-primary transition-all cursor-pointer hover:-translate-y-0.5" />
              </a>
              <a href={settings.linkedin || "#"} target="_blank" rel="noopener noreferrer">
                <Linkedin className="size-3.5 text-white/30 hover:text-primary transition-all cursor-pointer hover:-translate-y-0.5" />
              </a>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer">
              <Globe className="size-3.5 text-primary group-hover:rotate-12 transition-transform" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white group-hover:text-primary transition-colors">عربي</span>
            </div>
          </div>
        </div>
      </div>

      {/* --- MAIN ARCHITECTURAL HEADER --- */}
      <header
        className={cn(
          "fixed w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]",
          scrolled
            ? "top-4 px-4 md:px-8"
            : "top-0 lg:top-11 px-0"
        )}
      >
        <div
          className={cn(
            "container mx-auto transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] relative",
            scrolled
              ? "max-w-7xl bg-white/80 backdrop-blur-3xl border border-white/40 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] rounded-[2.5rem] py-3.5 px-8"
              : "py-6 px-4 md:px-6 bg-transparent"
          )}
        >
          <div className="flex items-center justify-between">
            {/* Structured Premium Logo */}
            <Link href="/" className="flex items-center gap-4 group relative">
              <div className={cn(
                "bg-primary rounded-xl flex items-center justify-center text-white transition-all duration-500 relative overflow-hidden",
                scrolled ? "size-10 scale-95" : "size-12 shadow-[0_12px_24px_rgba(138,21,56,0.2)] group-hover:shadow-[0_12px_32px_rgba(138,21,56,0.3)]"
              )}>
                {/* Premium Architectural SVG Icon (Matches icon.svg exactly) */}
                <svg viewBox="0 0 32 32" className={cn("transition-all duration-500 group-hover:scale-110", scrolled ? "size-6" : "size-8")} fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 6L8 11V24H12V16H20V24H24V11L16 6Z" fill="currentColor" fillOpacity="0.1" />
                  <path d="M16 6L8 11V24H12V16H20V24H24V11L16 6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                  <rect x="15" y="6" width="2" height="18" fill="currentColor" fillOpacity="0.2" />
                  <circle cx="16" cy="11" r="2" fill="currentColor" />
                </svg>
                <div className="absolute inset-0 border border-white/10 rounded-xl" />
                <motion.div
                  initial={false}
                  animate={{ x: scrolled ? "100%" : "-100%" }}
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1">
                  <span className={cn(
                    "font-black tracking-tighter leading-none text-accent transition-all duration-500",
                    scrolled ? "text-lg xl:text-xl" : "text-xl xl:text-2xl"
                  )}>
                    {settings.siteName.split(' ')[0] || "DOHA"}
                  </span>
                  <div className="size-1.5 rounded-full bg-primary animate-pulse" />
                </div>
                <span className="text-[8px] xl:text-[9px] font-black tracking-[0.5em] text-primary uppercase leading-none mt-1.5 opacity-80">
                  {settings.siteName.split(' ').slice(1).join(' ') || "Integrated Excellence"}
                </span>
              </div>
            </Link>

            {/* High-Fidelity Pill Navigation */}
            <nav className={cn(
              "hidden lg:flex items-center gap-1 p-1 rounded-full transition-all duration-500",
              scrolled ? "bg-slate-900/5" : "bg-white/5 backdrop-blur-md border border-white/10 shadow-sm"
            )}>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[10px] font-black uppercase tracking-widest xl:tracking-[0.25em] px-3 xl:px-7 py-3 rounded-full transition-all duration-500 relative group overflow-hidden",
                    pathname === item.href
                      ? "text-white"
                      : "text-accent/60 hover:text-accent"
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                  {pathname === item.href && (
                    <motion.div
                      layoutId="navActiveGlow"
                      className="absolute inset-0 bg-accent rounded-full z-0 shadow-lg shadow-accent/20"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.7 }}
                    />
                  )}
                  {pathname !== item.href && (
                    <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 rounded-full transition-all duration-500" />
                  )}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-4 xl:gap-10">
              <a href={`tel:${settings.phone.replace(/\s/g, '')}`} className="flex flex-col items-end group">
                <div className="flex items-center gap-2.5">
                  <span className="text-[9px] font-black text-primary uppercase tracking-[0.25em] group-hover:tracking-[0.35em] transition-all duration-500">Service Hotline</span>
                  <div className="relative size-2">
                    <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
                    <div className="relative size-2 rounded-full bg-emerald-500" />
                  </div>
                </div>
                <span className="text-sm font-black text-accent tracking-tighter group-hover:text-primary transition-colors duration-500">{settings.phone}</span>
              </a>
              <Button variant="default" size="lg" className="rounded-full h-11 xl:h-12 px-6 xl:px-10 border-white/20 shadow-xl shadow-primary/10 group/cta" asChild>
                <Link href="/contact" className="gap-2 xl:gap-2.5 text-[9px] xl:text-[10px] font-black uppercase tracking-widest xl:tracking-[0.2em] flex items-center">
                  Initialize Quote <ChevronRight className="size-3 xl:size-3.5 group-hover/cta:translate-x-1.5 transition-transform duration-500" />
                </Link>
              </Button>
            </div>

            {/* Premium Mobile Menu Trigger */}
            <div className="lg:hidden flex items-center gap-4">
              <a href={`tel:${settings.phone}`} className="size-10 rounded-2xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all active:scale-90">
                <Phone className="size-5" />
              </a>
              <button
                className={cn(
                  "size-10 rounded-2xl flex items-center justify-center transition-all duration-500 cursor-pointer",
                  isOpen ? "bg-accent text-white rotate-90" : "bg-slate-100 text-accent"
                )}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* --- LUXE MOBILE NAVIGATION OVERLAY --- */}
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden absolute top-full left-4 right-4 mt-5 bg-white/95 backdrop-blur-2xl rounded-[3rem] shadow-[0_48px_96px_rgba(0,0,0,0.18)] border border-white/40 overflow-hidden z-50 p-10"
            >
              <div className="flex flex-col gap-3.5">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center justify-between p-6 rounded-4xl transition-all duration-500 group",
                        pathname === item.href
                          ? "bg-accent text-white shadow-xl shadow-accent/20"
                          : "bg-slate-50 text-accent hover:bg-primary/5 hover:translate-x-1"
                      )}
                    >
                      <span className="text-sm font-black uppercase tracking-[0.25em]">{item.name}</span>
                      <div className={cn(
                        "size-8 rounded-full flex items-center justify-center transition-all duration-500",
                        pathname === item.href ? "bg-primary text-white" : "bg-white text-slate-300 group-hover:text-primary"
                      )}>
                        <ChevronRight className="size-4 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="mt-8 pt-10 border-t border-slate-100 flex flex-col items-center space-y-10"
                >
                  <div className="flex flex-col gap-4 items-center">
                    <p className="text-[10px] font-black text-muted uppercase tracking-[0.4em] opacity-40">Follow our journey</p>
                    <div className="flex gap-10">
                      <Facebook className="size-5 text-accent/20 hover:text-primary transition-all hover:-translate-y-1" />
                      <Instagram className="size-5 text-accent/20 hover:text-primary transition-all hover:-translate-y-1" />
                      <Linkedin className="size-5 text-accent/20 hover:text-primary transition-all hover:-translate-y-1" />
                    </div>
                  </div>

                  <Button variant="shiny" className="w-full h-16 rounded-[2.25rem] text-xs font-black uppercase tracking-[0.3em] shadow-[0_20px_40px_rgba(138,21,56,0.15)] active:scale-95 transition-all" asChild>
                    <Link href="/contact" onClick={() => setIsOpen(false)}>Get Immediate Response</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

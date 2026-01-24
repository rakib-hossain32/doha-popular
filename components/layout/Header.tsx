"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Phone, Building2, Mail, MapPin, Facebook, Instagram, Linkedin, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Top Bar - Hidden on Scroll for clean floating effect */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            className="hidden lg:block bg-accent text-white py-2 border-b border-white/5 relative z-50"
          >
            <div className="container mx-auto px-4 md:px-6 flex justify-between items-center text-xs font-medium">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <Mail className="size-3 text-highlight" />
                  <span>info@qatarmultiservice.qa</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="size-3 text-highlight" />
                  <span>West Bay, Doha, Qatar</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 pr-4 border-r border-white/10">
                  <Facebook className="size-3.5 hover:text-highlight cursor-pointer transition-colors" />
                  <Instagram className="size-3.5 hover:text-highlight cursor-pointer transition-colors" />
                  <Linkedin className="size-3.5 hover:text-highlight cursor-pointer transition-colors" />
                </div>
                <div className="flex items-center gap-1 cursor-pointer hover:text-highlight transition-colors">
                  <Globe className="size-3.5" />
                  <span>AR (عربي)</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <header
        className={cn(
          "fixed w-full z-50 transition-all duration-500 ",
          scrolled 
            ? "top-4 px-4" 
            : "top-0 lg:top-8" 
        )}
      >
        <div 
          className={cn(
            "container mx-auto transition-all duration-500 ",
            scrolled 
              ? "max-w-6xl bg-white/80 backdrop-blur-xl border border-white/20 shadow-card rounded-2xl py-3 px-6" 
              : "py-4 px-4 md:px-6 "
          )}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
               <div className={cn(
                 "bg-primary rounded-xl flex items-center justify-center text-secondary transition-all duration-300",
                 scrolled ? "size-9" : "size-11 shadow-lg shadow-primary/20"
               )}>
                 <Building2 className={scrolled ? "size-5" : "size-6"} />
               </div>
               <div className="flex flex-col">
                 <span className={cn(
                   "font-bold font-sans tracking-tight leading-none text-primary transition-all duration-300",
                   scrolled ? "text-lg" : "text-xl"
                 )}>
                   QATAR
                 </span>
                 <span className="text-[10px] font-bold tracking-[0.2em] text-highlight uppercase leading-none mt-0.5">
                   Multi-Service
                 </span>
               </div>
            </Link>
            
            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1.5 p-1 bg-slate-100/30 rounded-full border border-slate-200/50">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[11px] font-bold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 relative group overflow-hidden",
                    pathname === item.href
                      ? "text-white"
                      : "text-accent hover:text-primary"
                  )}
                >
                  <span className="relative z-10">{item.name}</span>
                  {pathname === item.href && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-primary rounded-full z-0"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  {/* Hover background for non-active */}
                  {pathname !== item.href && (
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 rounded-full transition-colors duration-300" />
                  )}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-6">
                <a href="tel:+97400000000" className="flex items-center gap-3 group">
                    <div className="size-9 rounded-full bg-primary/5 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                        <Phone className="size-4 text-primary group-hover:text-white" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[10px] text-muted font-bold uppercase tracking-widest leading-none">Call Experts</span>
                        <span className="text-sm font-bold text-accent leading-tight">+974 0000 0000</span>
                    </div>
                </a>
                <Button variant="highlight" size="default" className="rounded-full px-6 shadow-highlight/20 hover:shadow-highlight/40" asChild>
                    <Link href="/contact">Book Now</Link>
                </Button>
            </div>

            {/* Mobile Toggle */}
            <div className="md:hidden flex items-center gap-4">
              <a href="tel:+97400000000" className="size-9 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Phone className="size-4" />
              </a>
              <button
                className="p-2 text-accent"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="md:hidden absolute top-20 left-4 right-4 bg-white rounded-3xl shadow-card border border-slate-100 overflow-hidden"
            >
              <div className="p-6 flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-base font-bold uppercase tracking-widest p-4 rounded-2xl transition-all",
                      pathname === item.href 
                        ? "bg-primary text-white" 
                        : "text-accent hover:bg-primary/5"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-4">
                   <div className="flex items-center justify-center gap-6 py-2">
                      <Facebook className="size-5 text-accent/20" />
                      <Instagram className="size-5 text-accent/20" />
                      <Linkedin className="size-5 text-accent/20" />
                   </div>
                   <Button variant="highlight" className="w-full h-12 rounded-2xl text-base font-bold uppercase tracking-widest" asChild>
                      <Link href="/contact">Get Free Quote</Link>
                   </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}

"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone } from "lucide-react";

// Basic schema for validation
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(8, "Phone number is too short"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Here we will eventually connect to the backend API
    alert("Thank you! Your message has been sent.");
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <section className="bg-slate-900 py-16 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
        <p className="text-slate-400">We are here to help you 24/7</p>
      </section>

      <div className="container px-4 mx-auto py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Get In Touch</h2>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                Whether you have a question about our services, need a quote, or want to discuss a large project, our team is ready to assist you.
              </p>
            </div>

            <div className="space-y-6">
              <ContactItem 
                icon={Phone} 
                title="Phone Number" 
                content="+974 0000 0000" 
              />
              <ContactItem 
                icon={Mail} 
                title="Email Address" 
                content="info@qatarmultiservice.com.qa" 
              />
              <ContactItem 
                icon={MapPin} 
                title="Office Location" 
                content="Building 123, Street 45, West Bay, Doha, Qatar" 
              />
            </div>

            <div className="w-full h-64 bg-slate-200 rounded-2xl overflow-hidden relative">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115456.96962259648!2d51.44222477543946!3d25.285447299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45da70d30c5e8b%3A0xf6466f8090886b!2sDoha%2C%20Qatar!5e0!3m2!1sen!2sbd!4v1700400000000!5m2!1sen!2sbd" 
                 width="100%" 
                 height="100%" 
                 style={{border:0}} 
                 allowFullScreen={true} 
                 loading="lazy" 
                 title="Google Map"
               ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-lg border border-slate-200 dark:border-slate-800">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Send us a Message</h3>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Your Name</label>
                  <input 
                    {...form.register("name")}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                  {form.formState.errors.name && <p className="text-red-500 text-xs">{form.formState.errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number</label>
                  <input 
                    {...form.register("phone")}
                    className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                    placeholder="+974 ..."
                  />
                   {form.formState.errors.phone && <p className="text-red-500 text-xs">{form.formState.errors.phone.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                <input 
                  {...form.register("email")}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
                 {form.formState.errors.email && <p className="text-red-500 text-xs">{form.formState.errors.email.message}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Message</label>
                <textarea 
                  {...form.register("message")}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                  placeholder="How can we help you?"
                />
                 {form.formState.errors.message && <p className="text-red-500 text-xs">{form.formState.errors.message.message}</p>}
              </div>

              <Button type="submit" className="w-full h-12 text-base" variant="shiny">Send Message</Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

function ContactItem({ icon: Icon, title, content }: { icon: any, title: string, content: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
        <Icon className="size-5 text-primary" />
      </div>
      <div>
        <h4 className="font-bold text-slate-900 dark:text-white">{title}</h4>
        <p className="text-slate-600 dark:text-slate-400">{content}</p>
      </div>
    </div>
  );
}

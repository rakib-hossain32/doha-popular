import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      <section className="bg-slate-900 py-20 text-white">
        <div className="container px-4">
          <Link href="/services" className="inline-flex items-center text-slate-400 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="mr-2 size-4" /> Back to Services
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold capitalize">
            {slug.replace(/-/g, " ")} Services
          </h1>
        </div>
      </section>

      <section className="container px-4 mx-auto -mt-10 relative z-10">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 dark:border-slate-800">
          <div className="grid md:grid-cols-3 gap-12">
            
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Overview</h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                  We provide professional {slug.replace(/-/g, " ")} solutions tailored for commercial and residential needs in Qatar. Our team is fully equipped with modern tools and safety gear to ensure the highest quality of service.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">What We Offer</h3>
                <ul className="grid sm:grid-cols-2 gap-4">
                  {["Licensed Professionals", "24/7 Support", "Affordable Pricing", "Quality Guarantee", "Safety Compliance", "On-Time Completion"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
                      <CheckCircle className="size-5 text-secondary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-50 dark:bg-slate-950 p-6 rounded-2xl border border-slate-200 dark:border-slate-800">
                <h3 className="font-bold text-lg mb-4 text-slate-900 dark:text-white">Ready to book?</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">
                  Get a free quote for your {slug} needs today.
                </p>
                <Button className="w-full" size="lg" variant="shiny" asChild>
                  <Link href={`/contact?service=${slug}`}>Request Quote</Link>
                </Button>
              </div>

              <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20">
                <h3 className="font-bold text-lg mb-2 text-primary">Need Help?</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                  Call our support line directly.
                </p>
                <div className="text-2xl font-bold text-slate-900 dark:text-white">
                  +974 0000 0000
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

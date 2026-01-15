import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Wrench, HardHat, Home as HomeIcon, Brush, TrendingUp, Phone } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Home() {
  const services = [
    {
      title: "Property Management",
      description: "Comprehensive day-to-day management including tenant coordination, rent collection, regular inspections, and issue resolution.",
      icon: Building2
    },
    {
      title: "Facility Management",
      description: "Technical oversight of electrical systems, plumbing, water supply, generators, and common area maintenance.",
      icon: Wrench
    },
    {
      title: "Construction Supervision",
      description: "Expert project management for new builds and renovations, coordinating contractors and ensuring quality standards.",
      icon: HardHat
    },
    {
      title: "Short-Let Management",
      description: "Complete operations for short-term rentals including guest check-ins, cleaning, and guest communication.",
      icon: HomeIcon
    },
    {
      title: "Cleaning Services",
      description: "Professional post-construction cleanup, routine maintenance cleaning, and deep cleaning services.",
      icon: Brush
    },
    {
      title: "Sales & Marketing",
      description: "Strategic promotion of listings, managing property sales, leasing, and conducting professional inspections.",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* unsplash photo of modern luxury apartment building exterior architecture */}
          <img 
            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern Property" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-90" />
        </div>

        <div className="container relative z-10 px-4 md:px-6 pt-20">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary border border-secondary/30 text-sm font-semibold mb-6 backdrop-blur-sm">
                Premier Property Solutions in Lagos
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6">
                Professional Property Management
              </h1>
              <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto font-light leading-relaxed">
                From minor fixes to essential upkeep, ProCare ensures your property stays functional and well cared for.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4"
            >
              <Link href="/contact">
                <Button size="lg" className="h-14 px-8 text-lg bg-accent text-primary hover:bg-white hover:text-primary transition-all font-semibold rounded-xl w-full sm:w-auto">
                  Get a Quote
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white text-white hover:bg-white hover:text-primary transition-all font-semibold rounded-xl w-full sm:w-auto">
                  Explore Services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">Our Services</h2>
            <p className="text-muted-foreground text-lg">
              We offer a complete range of property services designed to give you peace of mind and maximize your property's potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard {...service} className="h-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full z-0 blur-xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full z-0 blur-xl" />
              <div className="relative z-10 grid grid-cols-2 gap-4">
                {/* unsplash photo of modern building construction site */}
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
                  alt="Construction Management" 
                  className="rounded-2xl shadow-lg w-full h-64 object-cover mt-12"
                />
                {/* unsplash photo of clean modern living room interior */}
                <img 
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop" 
                  alt="Interior Management" 
                  className="rounded-2xl shadow-lg w-full h-64 object-cover"
                />
              </div>
            </div>
            
            <div className="space-y-8 order-1 lg:order-2">
              <span className="text-accent font-bold tracking-wider uppercase text-sm">Why Choose Us</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary">
                Dedicated to Excellence in Every Detail
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                At Procare, we understand that your property is a significant investment. Our team of experienced professionals is dedicated to maintaining and enhancing the value of your assets through rigorous management practices and superior service delivery.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Experienced Team of Professionals",
                  "Comprehensive 360° Management",
                  "Transparent Reporting & Communication",
                  "Proactive Maintenance Approach"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-600" />
                    </div>
                    <span className="text-primary font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-slate-50" id="contact">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary">
                Let's Discuss Your Property Needs
              </h2>
              <p className="text-muted-foreground text-lg">
                Whether you need full-service management or specific maintenance solutions, our team is ready to assist you. Contact us today for a consultation.
              </p>
              
              <div className="space-y-8 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-accent border border-gray-100 shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-primary mb-1">Visit Us</h3>
                    <p className="text-muted-foreground">
                      14 Victor Okwodu Street, Seaside Estate,<br />
                      Badore-Ajah, Lagos
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-accent border border-gray-100 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-primary mb-1">Call Us</h3>
                    <p className="text-muted-foreground mb-1">Mon-Fri from 8am to 6pm</p>
                    <a href="tel:09044681080" className="text-lg font-semibold hover:text-accent transition-colors">
                      0904 468 1080
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

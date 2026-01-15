import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { Building2, Wrench, HardHat, Home, Brush, TrendingUp, CheckCircle } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Property Management",
      description: "We handle the day-to-day operations of your real estate assets. From tenant screening and rent collection to lease administration and conflict resolution, we ensure your property runs smoothly and profitably.",
      icon: Building2,
      features: ["Tenant Screening & Selection", "Rent Collection & Financial Reporting", "Lease Administration", "Regular Inspections"]
    },
    {
      title: "Facility Management",
      description: "Our technical team ensures all systems in your building function optimally. We manage power systems, plumbing, security infrastructure, and common areas to maintain a safe and comfortable environment.",
      icon: Wrench,
      features: ["Electrical System Maintenance", "Plumbing & Water Treatment", "Generator Maintenance", "Security Systems"]
    },
    {
      title: "Construction Supervision",
      description: "Building or renovating? We act as your representative on-site, coordinating contractors, monitoring quality, managing timelines, and ensuring the project stays within budget.",
      icon: HardHat,
      features: ["Project Planning & Scheduling", "Contractor Coordination", "Quality Control", "Budget Management"]
    },
    {
      title: "Short-Let Management",
      description: "Maximize your rental income with our premium short-let management. We handle listing optimization, guest communication, check-ins, cleaning, and maintenance for a 5-star guest experience.",
      icon: Home,
      features: ["Listing Management", "Guest Communication 24/7", "Professional Cleaning", "Maintenance Support"]
    },
    {
      title: "Cleaning Services",
      description: "From post-construction cleanup to routine janitorial services, our professional cleaning team uses industry-standard equipment and eco-friendly products to keep your spaces pristine.",
      icon: Brush,
      features: ["Post-Construction Cleaning", "Deep Cleaning", "Routine Maintenance Cleaning", "Fumigation Services"]
    },
    {
      title: "Sales & Marketing",
      description: "Looking to sell or lease? Our marketing experts use targeted strategies to showcase your property to the right audience, ensuring quick turnover and optimal pricing.",
      icon: TrendingUp,
      features: ["Market Analysis", "Professional Photography", "Targeted Advertising", "Showings & Negotiations"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navigation />

      {/* Page Header */}
      <div className="bg-primary text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Our Services</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive solutions for every aspect of property ownership and management.
          </p>
        </div>
      </div>

      {/* Services Content */}
      <div className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Side */}
                <div className="w-full lg:w-1/2">
                  <ServiceCard 
                    title={service.title} 
                    description={service.description} 
                    icon={service.icon}
                    className="h-full bg-white shadow-lg border-none" 
                  />
                </div>

                {/* Details Side */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-primary">
                    {service.title} Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                        <span className="font-medium text-slate-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

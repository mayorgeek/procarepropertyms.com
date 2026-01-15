import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navigation />

      {/* Page Header */}
      <div className="bg-primary text-white pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Get in touch with our team for inquiries, quotes, or support.
          </p>
        </div>
      </div>

      <div className="py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-primary mb-2">Phone</h3>
                <p className="text-muted-foreground mb-4">Call us directly for immediate assistance.</p>
                <a href="tel:09044681080" className="text-lg font-semibold text-accent hover:underline">
                  0904 468 1080
                </a>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-primary mb-2">Email</h3>
                <p className="text-muted-foreground mb-4">Send us a detailed message anytime.</p>
                <a href="mailto:info@procarepm.com" className="text-lg font-semibold text-accent hover:underline">
                  info@procarepm.com
                </a>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-4">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-primary mb-2">Office</h3>
                <p className="text-muted-foreground">
                  14 Victor Okwodu Street,<br />
                  Seaside Estate, Badore-Ajah,<br />
                  Lagos
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-primary mb-2">Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Area */}
            <div className="lg:col-span-2">
              <ContactForm />
              
              {/* Map Placeholder */}
              <div className="mt-8 bg-gray-200 rounded-2xl h-[300px] overflow-hidden shadow-inner relative">
                <div className="absolute inset-0 flex items-center justify-center bg-slate-200">
                    <div className="text-center">
                        {/* <MapPin className="w-12 h-12 text-slate-400 mx-auto mb-2" />
                        <p className="text-slate-500 font-medium">Interactive Map Would Load Here</p>
                        <p className="text-slate-400 text-sm">Seaside Estate, Badore-Ajah, Lagos</p> */}

                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31713.360004551014!2d3.5782420843689215!3d6.500151183480159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bfb328af12319%3A0x1e48fa1ce3930059!2sSeaside%20Residential%20Estate!5e0!3m2!1sen!2sng!4v1768514640626!5m2!1sen!2sng" width="800" height="600" className="border-0" loading="lazy"></iframe>
                    </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

import { Link } from "wouter";
import { Phone, MapPin, Mail, Instagram, Twitter, Linkedin } from "lucide-react";
import logoImg from "@assets/procare-logo_1768425692146.jpg";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/" className="inline-block bg-white p-2 rounded-lg">
              <img src={logoImg} alt="Procare Logo" className="h-10 w-auto" />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Delivering excellence in property management, facility maintenance, and construction services across Lagos.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="https://instagram.com/ProcarePMS" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://twitter.com/Pro_Care_PMS_01" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-accent transition-colors">Our Services</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="text-gray-300 hover:text-accent transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Services</h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-300">Property Management</li>
              <li className="text-gray-300">Facility Maintenance</li>
              <li className="text-gray-300">Construction Supervision</li>
              <li className="text-gray-300">Short-let Management</li>
              <li className="text-gray-300">Cleaning Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">
                  14 Victor Okwodu Street,<br />
                  Seaside Estate, Badore-Ajah,<br />
                  Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href="tel:09044681080" className="text-gray-300 text-sm hover:text-white transition-colors">
                  0904 468 1080
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary shrink-0" />
                <a href="mailto:Procarepropertymanagement7@gmail.com" className="text-gray-300 text-sm hover:text-white transition-colors">
                  Procarepropertymanagement7@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Procare Property Management Service. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Designed for Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}

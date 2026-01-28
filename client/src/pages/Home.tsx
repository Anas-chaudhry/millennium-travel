/* Design Philosophy: Dynamic Modernism with Cultural Fusion
 * - Energetic, flowing layouts with organic shapes
 * - Vibrant color blocks inspired by destinations
 * - Playful animations with elastic easing
 * - Typography: Poppins (headlines), Montserrat (sections), Open Sans (body)
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Plane,
  FileText,
  Globe,
  Shield,
  Clock,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  Send,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const destinations = [
    {
      name: "Qatar",
      image: "/images/qatar.jpeg",
      highlights: "Museum of Islamic Art, The Pearl-Qatar, Souq Waqif",
      description: "Experience modern luxury and rich cultural heritage in the heart of the Arabian Gulf.",
    },
    {
      name: "Cambodia",
      image: "/images/cambodia.jpeg",
      highlights: "Angkor Wat, Bayon Temple, Royal Palace",
      description: "Discover ancient temples and the fascinating history of the Khmer Empire.",
    },
    {
      name: "Indonesia",
      image: "/images/indonesia.jpg",
      highlights: "Bali Temples, Borobudur, Tanah Lot",
      description: "Explore tropical paradise with stunning beaches, temples, and volcanic landscapes.",
    },
    {
      name: "Jordan",
      image: "/images/jordan.jpg",
      highlights: "Petra, Wadi Rum Desert, Dead Sea",
      description: "Journey through ancient wonders and breathtaking desert landscapes.",
    },
    {
      name: "Malaysia",
      image: "/images/malaysia.jpeg",
      highlights: "Petronas Towers, Batu Caves, Langkawi",
      description: "Experience the perfect blend of modern cities and tropical rainforests.",
    },
    {
      name: "Morocco",
      image: "/images/morocco.jpg",
      highlights: "Marrakech Medina, Hassan II Mosque, Sahara",
      description: "Immerse yourself in vibrant markets, Islamic architecture, and desert adventures.",
    },
  ];

  const services = [
    {
      icon: FileText,
      title: "Visa Processing",
      description: "Fast and reliable visa application services for all our destination countries.",
      color: "#FF6B35",
    },
    {
      icon: Globe,
      title: "Travel Planning",
      description: "Customized itineraries tailored to your preferences and budget.",
      color: "#006D77",
    },
    {
      icon: Shield,
      title: "Travel Insurance",
      description: "Comprehensive coverage to protect your journey and peace of mind.",
      color: "#FFB627",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your travel needs and emergencies.",
      color: "#83142C",
    },
  ];

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/hero-travel.png')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#2C3E50]/80 via-[#006D77]/70 to-[#FF6B35]/60"></div>
        </div>

        {/* Floating decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FFB627]/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#006D77]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>

        {/* Content */}
        <div className="container relative z-10 text-center text-white">
          <div className={`space-y-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Your Journey
              <br />
              <span className="text-[#FFB627]">Begins Here</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-white/90">
              Explore the world with confidence. We provide expert visa services and travel planning for unforgettable adventures across Qatar, Cambodia, Indonesia, Jordan, Malaysia, and Morocco.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button
                size="lg"
                className="rounded-full px-8 py-6 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 bg-[#FF6B35] hover:bg-[#FF6B35]/90"
                style={{ fontFamily: 'Raleway, sans-serif' }}
                onClick={scrollToContact}
              >
                <Plane className="w-5 h-5 mr-2" />
                Start Your Adventure
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full px-8 py-6 text-lg font-bold border-2 border-white text-white hover:bg-white hover:text-[#2C3E50] transition-all duration-300 hover:scale-110"
                style={{ fontFamily: 'Raleway, sans-serif' }}
                onClick={() => {
                  const element = document.querySelector("#destinations");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Destinations
              </Button>
            </div>
          </div>
        </div>

        {/* Curved bottom divider */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg
            className="relative block w-full h-16 md:h-24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z"
              fill="#FFF8F0"
            />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF6B35]/5 rounded-full blur-3xl"></div>
        
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Our <span className="text-[#FF6B35]">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive travel solutions designed to make your journey seamless and memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-[#FF6B35]/50 rounded-3xl overflow-hidden bg-card"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <CardContent className="p-8 text-center space-y-4">
                  <div
                    className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: service.color }}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3
                    className="text-xl font-bold text-card-foreground"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations Section */}
      <section id="destinations" className="py-20 md:py-32 bg-gradient-to-br from-[#FFF8F0] to-[#F5EFE7] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-0 w-72 h-72 bg-[#006D77]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-[#FFB627]/10 rounded-full blur-3xl"></div>

        <div className="container relative z-10">
          <div className="text-center mb-16">
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Discover <span className="text-[#006D77]">Amazing Destinations</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              We specialize in visa services for these incredible countries. Let us help you explore the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest, index) => (
              <Card
                key={index}
                className="group overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-0"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3
                      className="text-3xl font-bold text-white mb-2"
                      style={{ fontFamily: 'Poppins, sans-serif' }}
                    >
                      {dest.name}
                    </h3>
                    <div className="flex items-start gap-2 text-white/90 text-sm">
                      <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <p className="line-clamp-1">{dest.highlights}</p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 bg-white">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {dest.description}
                  </p>
                  <Button
                    className="w-full rounded-full font-semibold"
                    variant="outline"
                    onClick={scrollToContact}
                  >
                    Apply for Visa
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/about-millennium.png"
                alt="Millennium Travel Agency"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2
                className="text-4xl md:text-5xl font-bold text-foreground"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Why Choose <span className="text-[#FF6B35]">Millennium</span>?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With years of experience in the travel industry, Millennium Travel Agency has helped thousands of travelers explore the world with confidence. We specialize in providing hassle-free visa services and personalized travel planning for your dream destinations.
              </p>
              <div className="space-y-4">
                {[
                  "Expert visa processing for 6+ countries",
                  "Personalized travel itineraries",
                  "Competitive pricing and transparent fees",
                  "24/7 customer support throughout your journey",
                  "Trusted by thousands of satisfied travelers",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#006D77] flex-shrink-0 mt-0.5" />
                    <p className="text-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <Button
                size="lg"
                className="rounded-full px-8 font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mt-6"
                style={{ fontFamily: 'Raleway, sans-serif' }}
                onClick={scrollToContact}
              >
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/images/contact-background.png')",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8F0] via-[#FFF8F0]/95 to-[#FFF8F0]"></div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                Let's Plan Your <span className="text-[#FF6B35]">Next Adventure</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Get in touch with us today and start your journey to amazing destinations.
              </p>
            </div>

            <Card className="rounded-3xl shadow-2xl border-0 overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Contact Info */}
                  <div className="space-y-6">
                    <div>
                      <h3
                        className="text-2xl font-bold text-foreground mb-6"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        Contact Information
                      </h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FF6B35]/5 hover:bg-[#FF6B35]/10 transition-colors duration-300">
                        <div className="w-12 h-12 rounded-xl bg-[#FF6B35] flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground mb-1">Phone Numbers</p>
                          <a
                            href="tel:+97333238737"
                            className="block text-muted-foreground hover:text-[#FF6B35] transition-colors"
                          >
                            +973 3323 8737
                          </a>
                          <a
                            href="tel:+923069513249"
                            className="block text-muted-foreground hover:text-[#FF6B35] transition-colors"
                          >
                            +92 306 951 3249
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#006D77]/5 hover:bg-[#006D77]/10 transition-colors duration-300">
                        <div className="w-12 h-12 rounded-xl bg-[#006D77] flex items-center justify-center flex-shrink-0">
                          <Mail className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground mb-1">Email Address</p>
                          <a
                            href="mailto:Naveedgill156@gmail.com"
                            className="text-muted-foreground hover:text-[#006D77] transition-colors break-all"
                          >
                            Naveedgill156@gmail.com
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFB627]/5 hover:bg-[#FFB627]/10 transition-colors duration-300">
                        <div className="w-12 h-12 rounded-xl bg-[#FFB627] flex items-center justify-center flex-shrink-0">
                          <Send className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-foreground mb-1">Contact Person</p>
                          <p className="text-muted-foreground">Naveed Gill</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Journey Image */}
                  <div className="relative rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src="/images/journey-begins.png"
                      alt="Start your journey"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                      <p
                        className="text-white text-xl font-bold"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        Ready to explore the world?
                      </p>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-6 border-t border-border">
                  <p className="text-muted-foreground mb-4">
                    Reach out to us via phone or email, and our team will get back to you within 24 hours.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="rounded-full px-8 font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      style={{ fontFamily: 'Raleway, sans-serif' }}
                      onClick={() => window.location.href = 'tel:+97333238737'}
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="rounded-full px-8 font-bold border-2 hover:scale-105 transition-all duration-300"
                      style={{ fontFamily: 'Raleway, sans-serif' }}
                      onClick={() => window.location.href = 'mailto:Naveedgill156@gmail.com'}
                    >
                      <Mail className="w-5 h-5 mr-2" />
                      Send Email
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

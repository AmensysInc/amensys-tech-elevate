import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Heart, ShoppingCart, Cog, GraduationCap, Banknote } from "lucide-react";
import healthcareImage from "@/assets/healthcare-tech.jpg";
import financeImage from "@/assets/finance-tech.jpg";
import manufacturingImage from "@/assets/manufacturing-tech.jpg";

const Industries = () => {
  const industries = [
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Healthcare",
      description: "Revolutionizing patient care with AI-powered diagnostics, secure health records, and telemedicine platforms.",
      image: healthcareImage,
      stats: "50+ Healthcare Partners",
      highlights: ["HIPAA Compliant", "AI Diagnostics", "Telehealth Solutions"]
    },
    {
      icon: <Banknote className="h-8 w-8 text-corporate-cyan" />,
      title: "Financial Services",
      description: "Transforming finance with blockchain solutions, algorithmic trading, and advanced security systems.",
      image: financeImage,
      stats: "100+ Financial Institutions",
      highlights: ["Blockchain Security", "AI Trading", "Regulatory Compliance"]
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-corporate-purple" />,
      title: "Retail & E-commerce",
      description: "Enhancing customer experiences with personalized AI, inventory optimization, and omnichannel solutions.",
      image: manufacturingImage,
      stats: "200+ Retail Brands",
      highlights: ["AI Personalization", "Inventory AI", "Omnichannel"]
    },
    {
      icon: <Cog className="h-8 w-8 text-primary" />,
      title: "Manufacturing",
      description: "Enabling Industry 4.0 with IoT sensors, predictive maintenance, and smart automation systems.",
      image: manufacturingImage,
      stats: "75+ Manufacturing Plants",
      highlights: ["IoT Integration", "Predictive Maintenance", "Smart Automation"]
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-corporate-cyan" />,
      title: "Education",
      description: "Modernizing education with virtual classrooms, AI tutoring, and comprehensive learning management systems.",
      image: healthcareImage,
      stats: "150+ Educational Institutions",
      highlights: ["Virtual Learning", "AI Tutoring", "LMS Solutions"]
    },
    {
      icon: <Building2 className="h-8 w-8 text-corporate-purple" />,
      title: "Government",
      description: "Digitizing public services with secure citizen portals, AI-powered analytics, and smart city solutions.",
      image: financeImage,
      stats: "25+ Government Agencies",
      highlights: ["Citizen Portals", "Smart Cities", "Data Analytics"]
    }
  ];

  return (
    <section id="industries" className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(214 94% 58% / 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, hsl(188 100% 60% / 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-bounce-in">
            🏢 Industry Expertise
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Transforming <span className="text-gradient">Every Industry</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            From healthcare to finance, our cutting-edge technology solutions drive innovation 
            across diverse sectors worldwide.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className="group hover-lift bg-gradient-card border-border shadow-card-hover overflow-hidden relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <img 
                  src={industry.image} 
                  alt={`${industry.title} Technology`}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardContent className="relative z-10 p-8">
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-lg bg-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {industry.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {industry.description}
                </p>

                {/* Stats */}
                <div className="text-sm font-semibold text-primary mb-4">
                  {industry.stats}
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {industry.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-white transition-all"
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-gradient-primary rounded-2xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 20% 20%, white 2px, transparent 2px),
                                 radial-gradient(circle at 80% 80%, white 1px, transparent 1px)`
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                Don't See Your Industry?
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                We customize solutions for any sector. Let's discuss how we can transform your specific industry challenges.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-gray-100">
                  Schedule Industry Consultation
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
                  View All Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
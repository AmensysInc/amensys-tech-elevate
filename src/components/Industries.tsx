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
    <section id="industries" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4">
            Transforming <span className="text-gradient">Every Industry</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From healthcare to finance, our cutting-edge technology solutions drive innovation 
            across diverse sectors worldwide.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {industries.map((industry, index) => (
            <Card 
              key={index} 
              className="group hover-lift border-border overflow-hidden"
            >
              <CardContent className="p-6">
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center">
                    {industry.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                  {industry.description}
                </p>

                {/* Stats */}
                <div className="text-xs font-semibold text-primary mb-4">
                  {industry.stats}
                </div>

                {/* Highlights */}
                <div className="space-y-1.5 mb-4">
                  {industry.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center text-xs">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      <span className="text-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="w-full font-medium"
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-8 bg-primary text-primary-foreground border-0">
            <h3 className="text-2xl font-semibold mb-3">
              Don't See Your Industry?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-xl mx-auto">
              We customize solutions for any sector. Let's discuss how we can transform your specific industry challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white text-primary hover:bg-gray-100 font-medium"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Schedule Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/20 text-white hover:bg-white/10 font-medium"
                onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Case Studies
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Industries;
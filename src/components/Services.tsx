import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Cloud, 
  Cpu, 
  Shield, 
  Code, 
  Settings, 
  BarChart3,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Cloud className="h-12 w-12 text-primary" />,
      title: "Cloud Solutions",
      description: "Migrate, optimize, and scale your infrastructure with our comprehensive cloud services across AWS, Azure, and Google Cloud.",
      benefits: ["99.9% Uptime", "Cost Optimization", "24/7 Support"]
    },
    {
      icon: <Cpu className="h-12 w-12 text-primary" />,
      title: "AI & Automation",
      description: "Harness the power of artificial intelligence and automation to streamline operations and drive innovation.",
      benefits: ["Process Automation", "Predictive Analytics", "Smart Solutions"]
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Cybersecurity",
      description: "Protect your business with enterprise-grade security solutions and comprehensive risk management.",
      benefits: ["Threat Protection", "Compliance", "Risk Assessment"]
    },
    {
      icon: <Code className="h-12 w-12 text-primary" />,
      title: "Software Development",
      description: "Build custom applications and digital solutions tailored to your unique business requirements.",
      benefits: ["Custom Solutions", "Agile Development", "Modern Tech Stack"]
    },
    {
      icon: <Settings className="h-12 w-12 text-primary" />,
      title: "IT Consulting",
      description: "Strategic technology consulting to align your IT infrastructure with business objectives.",
      benefits: ["Digital Strategy", "Technology Roadmap", "Best Practices"]
    },
    {
      icon: <BarChart3 className="h-12 w-12 text-primary" />,
      title: "Managed IT Support",
      description: "Comprehensive IT support and maintenance to keep your systems running smoothly.",
      benefits: ["24/7 Monitoring", "Proactive Maintenance", "Help Desk Support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive IT solutions designed to accelerate your digital transformation 
            and drive sustainable business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover-lift border-border bg-card shadow-card-hover group"
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-lg bg-accent">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="space-y-2">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="w-full mt-4 group-hover:bg-primary group-hover:text-white transition-all">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-card rounded-lg p-8 shadow-corporate border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let our experts help you choose the right technology solutions for your unique business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg">
                Schedule Free Consultation
              </Button>
              <Button variant="outline-corporate" size="lg">
                View Case Studies
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Users, Globe, Award } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8 text-primary" />, number: "500+", label: "Happy Clients" },
    { icon: <Globe className="h-8 w-8 text-primary" />, number: "50+", label: "Countries Served" },
    { icon: <Award className="h-8 w-8 text-primary" />, number: "15+", label: "Years Experience" },
    { icon: <CheckCircle className="h-8 w-8 text-primary" />, number: "99.9%", label: "Success Rate" }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We stay at the forefront of technology to deliver cutting-edge solutions that drive business growth."
    },
    {
      title: "Reliability",
      description: "Our proven track record of successful implementations ensures your technology investments deliver results."
    },
    {
      title: "Partnership",
      description: "We build long-term relationships with our clients, becoming a trusted extension of their teams."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            About <span className="text-gradient">Amensys</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            For over 15 years, Amensys Technologies has been empowering businesses worldwide 
            with innovative IT solutions that drive digital transformation and sustainable growth.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">Our Story</h3>
            <p className="text-muted-foreground leading-relaxed">
              Founded in 2008, Amensys began with a simple mission: to help businesses harness 
              the power of technology to achieve their goals. What started as a small consulting 
              firm has grown into a global leader in IT services and digital transformation.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, we serve over 500 clients across 50 countries, from Fortune 500 enterprises 
              to innovative startups. Our team of certified experts specializes in cloud solutions, 
              AI implementation, cybersecurity, and custom software development.
            </p>
            
            <div className="pt-4">
              <Button 
                variant="cta" 
                size="lg"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Learn More About Us
              </Button>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover-lift bg-card border-border shadow-card-hover">
                <CardContent className="space-y-3">
                  <div className="mx-auto w-fit p-3 rounded-lg bg-accent">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-gradient-subtle border-border">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              To empower businesses with innovative technology solutions that drive growth, 
              enhance efficiency, and create competitive advantages in the digital economy.
            </p>
          </Card>
          
          <Card className="p-8 bg-gradient-subtle border-border">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To be the world's most trusted technology partner, enabling organizations to 
              thrive in an increasingly connected and digital world.
            </p>
          </Card>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <h4 className="text-xl font-semibold text-primary">{value.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
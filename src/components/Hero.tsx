import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-tech.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern IT Services and Digital Transformation"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-subtle"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-8 animate-fade-in">
            🚀 Leading IT Solutions Provider
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Empowering Businesses with{" "}
            <span className="text-gradient">Innovative Technology</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in">
            Transform your business with cutting-edge IT solutions, cloud services, and digital innovation. 
            Partner with Amensys to accelerate growth and achieve operational excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button variant="hero" size="xl" className="min-w-[200px]">
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline-corporate" size="xl" className="min-w-[200px]">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 animate-fade-in">
            <p className="text-sm text-muted-foreground mb-6">Trusted by 500+ companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-2xl font-bold text-muted-foreground">Fortune 500</div>
              <div className="text-2xl font-bold text-muted-foreground">Startups</div>
              <div className="text-2xl font-bold text-muted-foreground">Healthcare</div>
              <div className="text-2xl font-bold text-muted-foreground">Finance</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
    </section>
  );
};

export default Hero;
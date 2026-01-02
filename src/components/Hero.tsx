import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-corporate-tech.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-accent/30">
      {/* Clean Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Futuristic Corporate Technology Environment"
          className="w-full h-full object-cover opacity-[0.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background/95"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-border text-sm font-medium text-foreground/70 mb-8">
            <Sparkles className="h-4 w-4 text-primary" />
            Trusted IT Solutions Provider Worldwide
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            Empowering Tomorrow's
            <br />
            <span className="text-gradient">Digital Leaders</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Transform your business with AI-powered solutions, cutting-edge cloud infrastructure, 
            and strategic technology consulting that drives exponential growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              variant="default" 
              size="lg" 
              className="min-w-[200px] font-medium"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="min-w-[200px] font-medium"
              onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="mr-2 h-4 w-4" />
              View Success Stories
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Global Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Years Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime SLA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-foreground mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
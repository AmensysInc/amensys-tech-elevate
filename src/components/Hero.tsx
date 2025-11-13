import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Sparkles, Zap, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-corporate-tech.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden floating-particles">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Futuristic Corporate Technology Environment"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-tech"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-corporate-cyan/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute top-40 right-32 w-24 h-24 bg-corporate-purple/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-40 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 right-20 w-28 h-28 bg-corporate-cyan/15 rounded-full blur-xl animate-float" style={{ animationDelay: '0.5s' }}></div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Animated Badge */}
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-card border border-primary/20 text-foreground font-medium mb-8 animate-bounce-in shadow-glow">
            <Sparkles className="mr-2 h-5 w-5 text-primary animate-pulse" />
            🚀 #1 Trusted IT Solutions Provider Worldwide
            <TrendingUp className="ml-2 h-5 w-5 text-corporate-cyan" />
          </div>

          {/* Main Headline with Gradient */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 animate-fade-in">
            <span className="text-foreground">Empowering </span>
            <span className="text-gradient-secondary">Tomorrow's </span>
            <br />
            <span className="text-gradient">Digital Leaders</span>
          </h1>

          {/* Enhanced Subheadline */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Transform your business with <span className="text-primary font-semibold">AI-powered solutions</span>, 
            cutting-edge cloud infrastructure, and strategic technology consulting that drives 
            <span className="text-corporate-cyan font-semibold"> exponential growth</span>.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="hero" 
              size="xl" 
              className="min-w-[250px] pulse-glow group"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Zap className="mr-2 h-6 w-6 group-hover:animate-bounce" />
              Start Your Transformation
              <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline-corporate" 
              size="xl" 
              className="min-w-[250px] hover-glow group bg-background/10 backdrop-blur-sm"
              onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Play className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
              Watch Success Stories
            </Button>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <p className="text-sm text-muted-foreground mb-8 font-medium">
              🏆 Trusted by 500+ Global Enterprises • 🌍 50+ Countries • ⚡ 99.9% Success Rate
            </p>
            
            {/* Dynamic Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center group hover-scale">
                <div className="text-3xl sm:text-4xl font-bold text-gradient mb-2">500+</div>
                <div className="text-sm text-muted-foreground">Global Clients</div>
              </div>
              <div className="text-center group hover-scale">
                <div className="text-3xl sm:text-4xl font-bold text-gradient-secondary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">Years Excellence</div>
              </div>
              <div className="text-center group hover-scale">
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime SLA</div>
              </div>
              <div className="text-center group hover-scale">
                <div className="text-3xl sm:text-4xl font-bold text-corporate-cyan mb-2">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
          </div>

          {/* Video Preview Section */}
          <div className="mt-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="video-container max-w-4xl mx-auto aspect-video bg-gradient-card border border-primary/20 rounded-xl overflow-hidden hover-lift">
              <div className="w-full h-full bg-gradient-subtle flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-neon hover-scale cursor-pointer">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Watch Our AI Revolution Demo</h3>
                  <p className="text-muted-foreground">See how we transformed Fortune 500 companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20"></div>
    </section>
  );
};

export default Hero;
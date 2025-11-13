import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ArrowRight, TrendingUp, DollarSign, Clock } from "lucide-react";
import teamImage from "@/assets/team-success.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      position: "CTO",
      company: "TechFlow Industries",
      rating: 5,
      content: "Amensys completely transformed our cloud infrastructure. Their AI-powered monitoring reduced our downtime by 99.8% and saved us $2M annually. The team's expertise is unmatched!",
      results: "99.8% Uptime • $2M Saved • 3x Performance",
      avatar: "SC",
      industry: "Technology"
    },
    {
      name: "Michael Rodriguez",
      position: "CEO", 
      company: "HealthFirst Medical",
      rating: 5,
      content: "The HIPAA-compliant telehealth platform Amensys built helped us serve 10x more patients during the pandemic. Their security-first approach gave us complete peace of mind.",
      results: "10x Patient Capacity • 100% Compliance • Zero Breaches",
      avatar: "MR",
      industry: "Healthcare"
    },
    {
      name: "Emma Thompson",
      position: "CFO",
      company: "Global Finance Corp",
      rating: 5,
      content: "Amensys implemented blockchain security that prevented $50M in potential fraud. Their real-time analytics dashboard revolutionized our risk management strategy.",
      results: "$50M Fraud Prevention • Real-time Analytics • Enhanced Security",
      avatar: "ET",
      industry: "Finance"
    },
    {
      name: "David Kim",
      position: "Operations Director",
      company: "SmartManufacturing Ltd",
      rating: 5,
      content: "The IoT and predictive maintenance system increased our production efficiency by 45% and reduced maintenance costs by 60%. ROI achieved in just 8 months!",
      results: "45% Efficiency Gain • 60% Cost Reduction • 8 Month ROI",
      avatar: "DK",
      industry: "Manufacturing"
    },
    {
      name: "Lisa Wang",
      position: "VP of Innovation",
      company: "EduTech Solutions",
      rating: 5,
      content: "Their AI-powered learning platform personalized education for our 100K+ students. Student engagement increased 200% and completion rates improved by 85%.",
      results: "200% Engagement • 85% Completion Rate • 100K+ Students",
      avatar: "LW",
      industry: "Education"
    },
    {
      name: "James Wilson",
      position: "Digital Director",
      company: "RetailMax Chain",
      rating: 5,
      content: "The omnichannel AI solution boosted our sales by 150% and customer satisfaction by 90%. The recommendation engine alone increased average order value by 40%.",
      results: "150% Sales Increase • 90% Satisfaction • 40% Higher AOV",
      avatar: "JW",
      industry: "Retail"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-corporate-cyan/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-corporate-cyan/10 text-corporate-cyan text-sm font-medium mb-6 animate-bounce-in">
            ⭐ Client Success Stories
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Don't just take our word for it. See how we've helped organizations worldwide 
            achieve remarkable digital transformation results.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="group hover-lift bg-gradient-card border-border shadow-card-hover relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 relative z-10">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-12 w-12 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-foreground leading-relaxed mb-6 relative z-10">
                  "{testimonial.content}"
                </blockquote>

                {/* Results */}
                <div className="bg-primary/5 rounded-lg p-4 mb-6">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm font-semibold text-primary">Key Results</span>
                  </div>
                  <p className="text-sm text-foreground font-medium">{testimonial.results}</p>
                </div>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  </div>
                </div>

                {/* Industry Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full font-medium">
                    {testimonial.industry}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-card rounded-2xl p-12 mb-16 border border-border animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-3xl font-bold text-foreground text-center mb-12">
            Our Impact in Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group hover-scale">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gradient mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center group hover-scale">
              <div className="w-16 h-16 bg-corporate-cyan/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-corporate-cyan" />
              </div>
              <div className="text-3xl font-bold text-gradient-secondary mb-2">$500M+</div>
              <div className="text-sm text-muted-foreground">Client Savings</div>
            </div>
            <div className="text-center group hover-scale">
              <div className="w-16 h-16 bg-corporate-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-corporate-purple" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-muted-foreground">Average Uptime</div>
            </div>
            <div className="text-center group hover-scale">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold text-gradient mb-2">6 Months</div>
              <div className="text-sm text-muted-foreground">Average ROI</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="relative overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 opacity-10">
              <img 
                src={teamImage} 
                alt="Successful Team"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="relative z-10 bg-gradient-card rounded-2xl p-12 border border-border">
              <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Ready to Join Our Success Stories?
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you achieve similar transformational results for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="cta" 
                  size="lg" 
                  className="min-w-[200px]"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start Your Success Story
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline-corporate" 
                  size="lg" 
                  className="min-w-[200px]"
                  onClick={() => document.getElementById('industries')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  View More Case Studies
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
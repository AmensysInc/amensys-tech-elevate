import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight, TrendingUp, DollarSign, Clock } from "lucide-react";

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
    <section id="testimonials" className="section-padding bg-accent/30">
      <div className="container mx-auto container-padding">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See how we've helped organizations worldwide
            achieve remarkable digital transformation results.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover-lift border-border relative"
            >
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-foreground leading-relaxed mb-4 text-sm">
                  "{testimonial.content}"
                </blockquote>

                {/* Results */}
                <div className="bg-accent rounded-lg p-3 mb-4">
                  <div className="flex items-center mb-1">
                    <TrendingUp className="h-3 w-3 text-primary mr-2" />
                    <span className="text-xs font-semibold text-primary">Key Results</span>
                  </div>
                  <p className="text-xs text-foreground font-medium">{testimonial.results}</p>
                </div>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.position} • {testimonial.company}</div>
                  </div>
                </div>

                {/* Industry Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 bg-accent text-foreground text-xs rounded-full font-medium">
                    {testimonial.industry}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <Card className="p-8 mb-16 border-border">
          <h3 className="text-2xl font-semibold text-foreground text-center mb-10">
            Our Impact in Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">98%</div>
              <div className="text-xs text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">$500M+</div>
              <div className="text-xs text-muted-foreground">Client Savings</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">99.9%</div>
              <div className="text-xs text-muted-foreground">Average Uptime</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">6 Months</div>
              <div className="text-xs text-muted-foreground">Average ROI</div>
            </div>
          </div>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-8 border-border">
            <h3 className="text-2xl font-semibold text-foreground mb-3">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Let's discuss how we can help you achieve similar transformational results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                className="font-medium"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Start Your Success Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="font-medium"
                onClick={() => document.getElementById('industries')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View More Case Studies
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
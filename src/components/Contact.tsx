import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
const Contact = () => {
  const contactInfo = [{
    icon: <Mail className="h-6 w-6 text-primary" />,
    title: "Email Us",
    content: "services@amensys.com",
    subContent: "sales@amensys.com"
  }, {
    icon: <Phone className="h-6 w-6 text-primary" />,
    title: "Call Us",
    content: "+1 972 801 9970",
    subContent: "+1 (555) 765-4321"
  }, {
    icon: <MapPin className="h-6 w-6 text-primary" />,
    title: "Visit Us",
    content: "860 Hebron Parkway, Suite# 604",
    subContent: "Lewisville, TX - 75057"
  }, {
    icon: <Clock className="h-6 w-6 text-primary" />,
    title: "Business Hours",
    content: "Mon - Fri: 9AM - 6PM",
    subContent: "Sat: 10AM - 4PM"
  }];
  return <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with innovative technology solutions? 
            Let's discuss how we can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Contact Information</h3>
              <p className="text-muted-foreground">
                Reach out to us through any of these channels, and our team will get back to you within 24 hours.
              </p>
            </div>
            
            {contactInfo.map((info, index) => <Card key={index} className="p-4 hover-lift bg-card border-border">
                <div className="flex items-start space-x-4">
                  <div className="p-2 rounded-lg bg-accent">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{info.title}</h4>
                    <p className="text-muted-foreground text-sm">{info.content}</p>
                    
                  </div>
                </div>
              </Card>)}

            <Card className="p-6 bg-primary text-primary-foreground">
              <h4 className="font-semibold mb-2">24/7 Emergency Support</h4>
              <p className="text-sm opacity-90">
                Critical issues? Our emergency support team is available around the clock.
              </p>
              <Button 
                variant="secondary" 
                size="sm" 
                className="mt-4"
                onClick={() => window.location.href = 'tel:+19728019970'}
              >
                Emergency Hotline
              </Button>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-card border-border shadow-corporate">
              <CardHeader className="px-0 pt-0">
                <CardTitle className="text-2xl font-semibold text-foreground">
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" className="border-border focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" className="border-border focus:border-primary" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john.doe@company.com" className="border-border focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="border-border focus:border-primary" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input id="company" placeholder="Acme Corporation" className="border-border focus:border-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interest</Label>
                      <Select>
                        <SelectTrigger className="border-border focus:border-primary">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cloud">Cloud Solutions</SelectItem>
                          <SelectItem value="ai">AI & Automation</SelectItem>
                          <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                          <SelectItem value="development">Software Development</SelectItem>
                          <SelectItem value="consulting">IT Consulting</SelectItem>
                          <SelectItem value="support">Managed IT Support</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us about your project requirements and how we can help..." rows={6} className="border-border focus:border-primary" />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button 
                      variant="cta" 
                      size="lg" 
                      className="flex-1"
                      type="submit"
                      onClick={(e) => {
                        e.preventDefault();
                        alert('Thank you for your message! Our team will contact you within 24 hours.');
                      }}
                    >
                      Send Message
                    </Button>
                    <Button 
                      variant="outline-corporate" 
                      size="lg" 
                      className="flex-1"
                      type="button"
                      onClick={() => window.location.href = 'tel:+19728019970'}
                    >
                      Schedule Call
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;
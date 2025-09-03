import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, collaborations, 
            and innovative projects. Feel free to reach out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-card">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                  Get In Touch
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-primary mr-4" />
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a 
                        href="mailto:akshayachigullapally1@gmail.com" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        akshayachigullapally1@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-primary mr-4" />
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <a 
                        href="tel:+918919314789" 
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        +91 8919314789
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-4" />
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">Hyderabad, Telangana, India</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Links & Actions */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 shadow-card">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                  Connect Online
                </h3>
                
                <div className="space-y-4">
                  <Button 
                    variant="outline" 
                    className="w-full justify-start" 
                    asChild
                  >
                    <a 
                      href="https://github.com/akshayachigullapally" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <Github className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform" />
                      View GitHub Profile
                      <ExternalLink className="h-4 w-4 ml-auto" />
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full justify-start" 
                    asChild
                  >
                    <a 
                      href="https://www.linkedin.com/in/akshaya-chigullapally/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <Linkedin className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                      Connect on LinkedIn
                      <ExternalLink className="h-4 w-4 ml-auto" />
                    </a>
                  </Button>
                  
                  <Button 
                    variant="hero" 
                    className="w-full justify-center" 
                    asChild
                  >
                    <a href="mailto:akshayachigullapally1@gmail.com">
                      <Mail className="h-5 w-5 mr-3" />
                      Send Me an Email
                    </a>
                  </Button>
                </div>

                <div className="mt-8 p-4 bg-accent/20 rounded-lg border border-primary/10">
                  <p className="text-sm text-muted-foreground text-center">
                    <strong className="text-foreground">Open to opportunities:</strong><br />
                    Full-stack development, AI/ML projects, internships, and collaborative projects
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: "CGPA", value: "9.45" },
              { label: "Projects", value: "5+" },
              { label: "Certifications", value: "6+" },
              { label: "Hackathons", value: "3+" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-card/30 backdrop-blur-sm border border-primary/20 rounded-lg p-4 text-center hover:bg-card/50 transition-all duration-300"
              >
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Calendar, ExternalLink } from "lucide-react";
import { certificates } from "@/assets/certificates";

const Achievements = () => {
 

  const certifications = [
    {
      title: "Webathon Challenge",
      issuer: "Technical Competition",
      description: "Participated in intensive web development competition, building innovative web solutions under time constraints.",
      date: "2024",
      certificateUrl: certificates.webathon,
      type: "Hackathon Winner",
    },
    {
      title: "TechnoVista 2024 - 24Hr Hackathon",
      issuer: "VNRVJIET - DS-CyS Carnival",
      description: "Selected as a finalist in the 24-hour hackathon showcasing problem-solving under pressure and teamwork in real-time development.",
      date: "June 2024",
      certificateUrl: certificates.generalCertificate,
      type: "Hackathon Finalist",
    },
    
    {
      title: "Flutter Workshop Certification",
      issuer: "VNRVJIET - Convergence 2K23",
      description: "Participated in Flutter Workshop during the National Annual Technical Symposium CONVERGENCE 2K23, Experience Innovation.",
      date: "December 2023",
      certificateUrl: certificates.flutterWorkshop,
      type: "Workshop",
    },
    {
      title: "Entrepreneurial Thinking",
      issuer: "IUCEE Foundation",
      description: "Completed 6 Webinars with Assignments on Entrepreneurial Thinking from VNR Vignana Jyothi Institute of Engineering and Technology.",
      date: "June to August 2025",
      certificateUrl: certificates.entrepreneurialThinking,
      type: "Professional Development",
    },
    {
      title: "Programming in Modern C++",
      issuer: "NPTEL - IIT Kharagpur",
      description: "Successfully completed the 12-week course with a consolidated score of 60%, certified among 1749 candidates.",
      date: "July - October 2024",
      certificateUrl: certificates.cppProgramming,
      type: "Technical Certification",
    },
    {
      title: "Tableau Training Certificate",
      issuer: "Internshala Trainings",
      description: "Successfully completed a 6-week online training on Tableau covering Getting Started, Creating Charts, Filters, Dashboard creation and Advanced features.",
      date: "March 2024",
      certificateUrl: certificates.tableau,
      type: "Data Visualization",
    },
    {
      title: "Cyber Suraksha Course",
      issuer: "TATA STRIVE & Microsoft",
      description: "Successfully completed a 40-hour online Cyber Suraksha course, gaining comprehensive knowledge in cybersecurity fundamentals.",
      date: "May 2024",
      certificateUrl: certificates.generalCertificate,
      type: "Cybersecurity",
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        



        {/* Certifications Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Achievements and Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Recognitions and continuous learning through achievements, certifications, and professional development.          </p> 
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card/40 backdrop-blur-sm border-primary/20 hover:border-primary/40">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <CardTitle className="text-base font-semibold leading-tight group-hover:text-primary transition-colors">
                        {cert.title}
                      </CardTitle>
                      <Badge variant="secondary" className="text-xs px-2 py-1 bg-primary/10 text-primary border-primary/20">
                        {cert.type}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm font-medium text-primary/80">
                      {cert.issuer}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {cert.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span className="font-medium">{cert.date}</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-xs hover:text-primary hover:bg-primary/10 group-hover:translate-x-1 transition-all duration-300"
                    asChild
                  >
                    <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                      View Certificate
                      <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
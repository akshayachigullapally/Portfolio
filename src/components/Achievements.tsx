import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Calendar, ExternalLink } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      id: 1,
      title: "GRIET National Hackathon",
      subtitle: "Winner - Legal Tech Innovation",
      issuer: "GRIET - Vivitsu 2025",
      description: "Won the national-level hackathon for developing an AI-powered legal assistant platform in the domain of Legal Awareness and Civic Governance.",
      date: "March 2025",
      type: "Hackathon Winner",
      icon: <Trophy className="h-6 w-6 text-yellow-500" />,
      bgGradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      id: 2,
      title: "TechnoVista 2024 - 24Hr Hackathon",
      subtitle: "Finalist Achievement",
      issuer: "VNRVJIET - DS-CyS Carnival",
      description: "Selected as a finalist in the 24-hour hackathon showcasing problem-solving under pressure and teamwork in real-time development.",
      date: "June 2024",
      type: "Hackathon Finalist",
      icon: <Trophy className="h-6 w-6 text-orange-500" />,
      bgGradient: "from-orange-500/20 to-red-500/20",
    },
    {
      id: 3,
      title: "Webathon Challenge",
      subtitle: "Web Development Competition",
      issuer: "Technical Fest",
      description: "Participated in intensive web development competition, building innovative web solutions under time constraints.",
      date: "2024",
      type: "Competition",
      icon: <Award className="h-6 w-6 text-blue-500" />,
      bgGradient: "from-blue-500/20 to-cyan-500/20",
    },
  ];

  const certifications = [
    {
      title: "ICCMA 2025 - NIT Silchar",
      issuer: "International Conference Paper",
      description: "Presented 'Efficient Decision-Making: Deep Q-Networks for Reinforcement Learning' at ICCMA 2025, organized by the Department of Mathematics, NIT Silchar.",
      date: "Jan 2025",
    },
    {
      title: "Flutter Workshop Certification",
      issuer: "VNRVJIET - Convergence 2K23",
      description: "Participated in Flutter Workshop during the National Annual Technical Symposium CONVERGENCE 2K23, Experience Innovation.",
      date: "December 2023",
    },
    {
      title: "Entrepreneurial Thinking",
      issuer: "IUCEE Foundation",
      description: "Completed 6 Webinars with Assignments on Entrepreneurial Thinking from VNR Vignana Jyothi Institute of Engineering and Technology.",
      date: "June to August 2025",
    },
    {
      title: "Programming in Modern C++",
      issuer: "NPTEL - IIT Kharagpur",
      description: "Successfully completed the 12-week course with a consolidated score of 60%, certified among 1749 candidates.",
      date: "July - October 2024",
    },
    {
      title: "Tableau Training Certificate",
      issuer: "Internshala Trainings",
      description: "Successfully completed a 6-week online training on Tableau covering Getting Started, Creating Charts, Filters, Dashboard creation and Advanced features.",
      date: "March 2024",
    },
    {
      title: "Cyber Suraksha Course",
      issuer: "TATA STRIVE & Microsoft",
      description: "Successfully completed a 40-hour online Cyber Suraksha course, gaining comprehensive knowledge in cybersecurity fundamentals.",
      date: "May 2024",
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Achievements and Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Milestones and recognitions that mark my journey
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {achievements.map((achievement) => (
            <Card key={achievement.id} className="group relative overflow-hidden hover:shadow-elegant transition-all duration-500 hover:scale-105 bg-card/70 backdrop-blur-md border-primary/30">
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <CardHeader className="relative text-center pb-4">
                <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${achievement.bgGradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {achievement.icon}
                </div>
                
                <Badge variant="outline" className="mb-3 w-fit mx-auto border-primary/40 text-primary bg-primary/5 group-hover:bg-primary/10 transition-colors">
                  {achievement.type}
                </Badge>
                
                <CardTitle className="text-xl font-bold group-hover:text-primary-foreground transition-colors relative z-10">
                  {achievement.title}
                </CardTitle>
                <CardDescription className="font-semibold text-primary group-hover:text-primary-foreground/90 transition-colors relative z-10">
                  {achievement.subtitle}
                </CardDescription>
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/80 mt-2 relative z-10">
                  {achievement.issuer}
                </p>
              </CardHeader>
              
              <CardContent className="relative text-center">
                <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/90 mb-6 leading-relaxed relative z-10">
                  {achievement.description}
                </p>
                
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground group-hover:text-primary-foreground/80 mb-6 relative z-10">
                  <Calendar className="h-4 w-4" />
                  <span>{achievement.date}</span>
                </div>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="group/btn relative z-10 hover:bg-primary hover:text-primary-foreground border-primary/40 hover:border-primary transition-all duration-300 hover:shadow-lg"
                >
                  View Certificate
                  <ExternalLink className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Certifications
          </h3>
          <p className="text-muted-foreground">
            Professional certifications and training programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card/30 backdrop-blur-sm border-primary/10">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Award className="h-4 w-4 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-base font-semibold leading-tight">
                      {cert.title}
                    </CardTitle>
                    <CardDescription className="text-sm font-medium text-primary">
                      {cert.issuer}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                  {cert.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{cert.date}</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-xs hover:text-primary"
                  >
                    View Certificate
                    <ExternalLink className="ml-1 h-3 w-3" />
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
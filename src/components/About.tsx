import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, MapPin, Code, Palette, Server, Database, Wrench, Sparkles } from "lucide-react";
import developerAvatar from "@/assets/developer-avatar.png";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-heading text-responsive-4xl lg:text-5xl font-bold text-foreground mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate full-stack developer with expertise in modern web technologies
            </p>
          </div>

          {/* Main About Card */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 mb-8 sm:mb-12">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                {/* Profile Image */}
                <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                  <div className="relative">
                    <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 p-1">
                      <div className="w-full h-full rounded-full bg-card overflow-hidden">
                        <img 
                          src={developerAvatar} 
                          alt="Akshaya Chigullapally - Software Developer" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    {/* Animated ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
                  <h3 className="text-responsive-3xl font-bold text-foreground text-center lg:text-left">
                    Full-Stack Developer & Problem Solver
                  </h3>
                  
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    I'm a dedicated Full-Stack Developer with a strong track record of building 
                    scalable, high-performance web applications. Proficient in both frontend and 
                    backend technologies, I focus on delivering intuitive user experiences backed by 
                    reliable and efficient systems.
                  </p>
                  
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    Driven by a passion for clean code and thoughtful design, I approach every project 
                    with attention to detail and a commitment to excellence. I thrive in team-driven 
                    environments and continuously explore emerging tools and practices to stay ahead 
                    in the ever-evolving world of web development.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Work Experience Section */}
          <Card id="experience" className="bg-card/50 backdrop-blur-sm border-border/50 mb-8 sm:mb-12">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-responsive-2xl font-bold text-foreground mb-6 sm:mb-8 text-center">
                Work <span className="text-primary">Experience</span>
              </h3>
              
              <div className="relative">
                {/* Timeline line - hidden on mobile */}
                <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
                
                {/* Experience entries */}
                <div className="space-y-6 sm:space-y-8">
                  {/* Software Developer Intern at Webgen */}
                  <div className="relative flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                    {/* Timeline dot - hidden on mobile */}
                    <div className="hidden sm:flex flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full border-4 border-primary/30 items-center justify-center relative">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping"></div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-grow bg-muted/30 rounded-lg p-4 sm:p-6 border border-border/50">
                      <div className="flex flex-col gap-3 mb-4">
                        <div>
                          <h4 className="text-lg sm:text-xl font-semibold text-primary">Software Developer Intern</h4>
                          <p className="text-base sm:text-lg text-foreground font-medium">Webgen (College Startup)</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <div className="px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-full font-medium">
                            Jun 2025 – Jul 2025
                          </div>
                          <div className="px-3 py-1 bg-secondary/10 text-secondary text-xs sm:text-sm rounded-full font-medium">
                            Hybrid
                          </div>
                        </div>
                      </div>
                      
                      {/* Rest of experience content with responsive spacing */}
                      <div className="space-y-3">
                        <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            Contributed to building a project management platform by developing core web application modules and optimizing system workflows.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            Collaborated with UX designers and business teams to translate product requirements into scalable, user-friendly features.
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            Applied startup-focused workflows such as rapid prototyping, agile sprints, and iterative design to ensure timely delivery of platform features.
                          </li>
                        </ul>
                        
                        <div className="flex flex-wrap gap-2">
                          {["Project Management", "Web Development", "UX Collaboration", "Agile Development", "Startup Environment"].map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-primary/5 text-primary text-xs rounded border border-primary/20">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Technical Head Position */}
                  <div className="relative flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                    <div className="hidden sm:flex flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full border-4 border-primary/30 items-center justify-center relative">
                      <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                      <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping"></div>
                    </div>
                    
                    <div className="flex-grow bg-muted/30 rounded-lg p-4 sm:p-6 border border-border/50">
                      <div className="flex flex-col gap-3 mb-4">
                        <div>
                          <h4 className="text-lg sm:text-xl font-semibold text-primary">Technical Head of CSI</h4>
                          <p className="text-base sm:text-lg text-foreground font-medium">CSI VNR Student Chapter, VNRVJIET</p>
                        </div>
                        <div className="px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-full font-medium w-fit">
                          2024 - Present
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <p className="text-sm sm:text-base text-muted-foreground">
                          Leading technical initiatives and club-led tech events as Technical Head. Spearheaded web development projects, coordinated technical infrastructure, and mentored team members in technology implementation and evaluation workflows.
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {["Event Planning", "Web Development", "Figma", "Tailwind CSS", "Team Leadership"].map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-primary/5 text-primary text-xs rounded border border-primary/20">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Internship Experience */}
                  <div className="relative flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                    <div className="hidden sm:flex flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full border-4 border-primary/30 items-center justify-center relative">
                      <div className="w-3 h-3 bg-primary rounded-full"></div>
                    </div>
                    
                    <div className="flex-grow bg-muted/30 rounded-lg p-4 sm:p-6 border border-border/50">
                      <div className="flex flex-col gap-3 mb-4">
                        <div>
                          <h4 className="text-lg sm:text-xl font-semibold text-primary">Full Stack Developer Intern</h4>
                          <p className="text-base sm:text-lg text-foreground font-medium">Apslion Labs</p>
                        </div>
                        <div className="px-3 py-1 bg-primary/10 text-primary text-xs sm:text-sm rounded-full font-medium w-fit">
                          Current
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <p className="text-sm sm:text-base text-muted-foreground">
                          Currently developing an <span className="text-foreground font-medium">AI-powered real estate platform</span> that leverages machine learning to provide intelligent property recommendations and market insights.
                        </p>
                        
                        <div className="flex flex-wrap gap-2">
                          {["React.js", "Node.js", "AI/ML", "Real Estate Tech", "Full Stack"].map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-primary/5 text-primary text-xs rounded border border-primary/20">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education and Location cards with responsive grid */}
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-primary">Education</h3>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground text-sm sm:text-base">B.Tech Computer Science & Engineering</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">VNR VJIET, 2023-2027</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-primary">Location</h3>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-foreground text-sm sm:text-base">Hyderabad, India</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">Available for remote work and collaboration</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Technology Stack Section with responsive grid */}
          <Card id="skills" className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-responsive-2xl font-bold text-foreground mb-6 sm:mb-8 text-center">
                Technology <span className="text-primary">Stack</span>
              </h3>
              
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {/* Languages */}
                <div className="bg-muted/30 rounded-lg p-4 sm:p-6 border border-border/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Code className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-primary">Languages</h4>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    {["C++", "Python", "JavaScript", "TypeScript"].map((skill) => (
                      <div key={skill} className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Frontend */}
                <div className="bg-muted/30 rounded-lg p-4 sm:p-6 border border-border/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Palette className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-primary">Frontend</h4>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    {["Next.js", "React.js", "HTML", "CSS", "Tailwind", "Bootstrap"].map((skill) => (
                      <div key={skill} className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Backend */}
                <div className="bg-muted/30 rounded-lg p-4 sm:p-6 border border-border/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Server className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-primary">Backend</h4>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    {["Node.js", "Express.js"].map((skill) => (
                      <div key={skill} className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Databases */}
                <div className="bg-muted/30 rounded-lg p-4 sm:p-6 border border-border/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Database className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-primary">Databases</h4>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    {["MongoDB", "MySQL", "OracleSQL", "Prisma"].map((skill) => (
                      <div key={skill} className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tools & Services */}
                <div className="bg-muted/30 rounded-lg p-4 sm:p-6 border border-border/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Wrench className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-primary">Tools & Services</h4>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    {["Git", "Docker", "Azure", "AWS", "Power BI", "Nodemailer"].map((skill) => (
                      <div key={skill} className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Other */}
                <div className="bg-muted/30 rounded-lg p-4 sm:p-6 border border-border/50">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-primary" />
                    </div>
                    <h4 className="text-base sm:text-lg font-semibold text-primary">Other</h4>
                  </div>
                  <div className="space-y-2 sm:space-y-3">
                    {["REST APIs", "JWT Auth", "Cloud Deployment", "ML Fundamentals"].map((skill) => (
                      <div key={skill} className="flex items-center gap-2 text-xs sm:text-sm text-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
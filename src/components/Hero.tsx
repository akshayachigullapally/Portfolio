import { Button } from "@/components/ui/button";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import AnimatedTagline from "./AnimatedTagline";
import { ResumeAkshaya } from "@/assets/certificates";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-6 animate-fade-in whitespace-nowrap">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Akshaya Chigullapally
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in delay-200">
            <AnimatedTagline />
          </p>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in delay-400">
            B.Tech Computer Science Engineering student with a focus on building innovative web platforms, 
            AI-driven applications, and contributing to open-source communities. Skilled in the MERN stack, 
            AI integration, and modern software development practices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in delay-600">
            <Button 
              variant="hero" 
              size="lg" 
              onClick={scrollToProjects}
              className="group"
            >
              View My Work
              <ExternalLink className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              asChild
            >
              <a href={ResumeAkshaya} download className="group">
                Download Resume
                <Download className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Tech Stack Highlights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto animate-fade-in delay-800">
            {["React", "Node.js", "Python", "AI/ML"].map((tech, index) => (
              <div 
                key={tech}
                className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-4 hover:bg-card/70 transition-all duration-300 hover:scale-105"
              >
                <span className="font-mono text-sm text-primary font-medium">{tech}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
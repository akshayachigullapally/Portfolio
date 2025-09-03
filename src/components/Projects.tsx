import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Award, Trophy } from "lucide-react";
import aiCareerCoachImage from "@/assets/ai-career-coach.jpg";
import imagifyImage from "@/assets/imagify-app.jpg";
import chatAppImage from "@/assets/chat-app.jpg";
import bookBaseImage from "@/assets/book-base.jpg";
import permaImage from "@/assets/perma-app.jpg";
import zeroHungerImage from "@/assets/zero-hunger.jpg";
import blogAppImage from "@/assets/blog-app.jpg";
import habitQuestImage from "@/assets/habit-quest.jpg";
import movieAppImage from "@/assets/movie-app.jpg";
import ecommerceImage from "@/assets/ecommerce-app.jpg";
import csiWebsiteImage from "@/assets/csi-website.png";
import flashforteImage from "@/assets/flashforte-website.png";

const personalProjects = [
  {
    title: "Habit Quest",
    description: "A gamified habit tracking application that helps users build and maintain positive habits through engaging challenges and progress tracking.",
    technologies: ["React", "Node.js", "MongoDB", "Gamification", "Progress Tracking"],
    image: habitQuestImage,
    github: "https://github.com/akshayachigullapally/habit-quest",
    demo: "#",
    featured: true,
    award: "Hackathon Winner"
  },
  {
    title: "AI Career Coach",
    description: "An AI-powered career coaching platform that provides personalized guidance, interview preparation, and AI-powered tools for job success.",
    technologies: ["React", "Node.js", "AI/ML", "MongoDB", "Express"],
    image: aiCareerCoachImage,
    github: "https://github.com/akshayachigullapally/AI-Career-Coach",
    demo: "https://ai-career-coach-one-ruddy.vercel.app/",
    featured: true
  },
  {
    title: "Imagify",
    description: "A text-to-image generator application that transforms text prompts into stunning visual art using advanced AI models.",
    technologies: ["React", "Node.js", "AI/ML", "Image Generation", "API Integration"],
    image: imagifyImage,
    github: "https://github.com/akshayachigullapally/Imagify",
    demo: "https://imagify-2-rulv.onrender.com/"
  },
  {
    title: "Real-Time Chat App",
    description: "A full-featured real-time messaging application with modern UI, user authentication, and instant message delivery.",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    image: chatAppImage,
    github: "https://github.com/akshayachigullapally/chat-app",
    demo: "https://chat-app-r7tb.onrender.com/"
  },
  {
    title: "Movie App",
    description: "A React Native mobile application for browsing movies, viewing details, and managing watchlists with intuitive user interface.",
    technologies: ["React Native", "JavaScript", "Movie API", "Mobile Development"],
    image: movieAppImage,
    github: "https://github.com/akshayachigullapally/MOVIEAPP"
  },
  {
    title: "Zero Hunger Initiative",
    description: "A food donation and distribution platform designed to tackle food wastage and help feed those in need within communities.",
    technologies: ["React", "Node.js", "MongoDB", "Geolocation", "Real-time Tracking"],
    image: zeroHungerImage,
    github: "https://github.com/akshayachigullapally/ZeroHunger",
    demo: "https://zero-hunger-phi.vercel.app/"
  },
  {
    title: "Blog Application",
    description: "A modern blogging platform where users can create, publish, and share articles with a clean, responsive design.",
    technologies: ["React", "Node.js", "MongoDB", "Rich Text Editor", "User Management"],
    image: blogAppImage,
    github: "https://github.com/akshayachigullapally/Blog-app",
    demo: "https://github.com/akshayachigullapally/Blog-app"
  },
  {
    title: "BookBase Library Management",
    description: "A comprehensive library management system for tracking books, managing borrowers, and automating library operations.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Authentication"],
    image: bookBaseImage,
    github: "https://github.com/Rishithagaddam/BookBase-Library-Management-System"
  },
  {
    title: "PERMA Wellness Platform",
    description: "A mental health and wellbeing application based on positive psychology principles to enhance overall life satisfaction.",
    technologies: ["React", "Node.js", "MongoDB", "Wellness APIs", "Data Analytics"],
    image: permaImage,
    github: "https://github.com/akshayachigullapally/PERMA"
  },
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce solution with product management, shopping cart, payment integration, and order tracking.",
    technologies: ["React", "Node.js", "MongoDB", "Payment Gateway", "Admin Dashboard"],
    image: ecommerceImage,
    github: "#",
    demo: "#"
  }
];

const academicProjects = [
  {
    title: "CSI Website",
    description: "Official website for Computer Society of India VNRVJIET chapter with event management, member registration, and college branding.",
    technologies: ["React", "Node.js", "MongoDB", "Event Management", "College Portal"],
    image: csiWebsiteImage,
    github: "https://github.com/shravani2905/VNRVJIET_CSI_WEB",
    demo: "https://vnrvjietcsi.com/",
    academic: true
  },
  {
    title: "FlashForte 2k25",
    description: "A multi-reality hackathon platform for ideation, design, gaming, and expression events with modern UI and event management.",
    technologies: ["React", "Node.js", "Event Platform", "Modern UI", "Hackathon Management"],
    image: flashforteImage,
    github: "https://github.com/nagasresht/flashfirte-verse-explorer-53",
    demo: "https://flashforte2k25.vercel.app/",
    academic: true
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in web development, AI applications, and innovative solutions
          </p>
        </div>

        {/* Personal Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {personalProjects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 transition-all duration-300 hover:scale-[1.02] group"
            >
              <CardHeader className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={`${project.title} preview`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                        <Award className="h-3 w-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}
                  {project.award && (
                    <div className="absolute top-2 left-2">
                      <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                        🏆 {project.award}
                      </div>
                    </div>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="p-6">
                <CardTitle className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                
                <CardDescription className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1" 
                    asChild
                  >
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group/btn"
                    >
                      <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Code
                    </a>
                  </Button>
                  
                  {project.demo && project.demo !== "#" && (
                    <Button 
                      variant="hero" 
                      size="sm" 
                      className="flex-1" 
                      asChild
                    >
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group/btn"
                      >
                        <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Academic Projects */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Academic <span className="text-primary">Projects</span>
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Club and college-based projects showcasing collaborative development and technical leadership
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {academicProjects.map((project, index) => (
              <Card 
                key={index}
                className="bg-gradient-to-br from-secondary/5 to-primary/5 backdrop-blur-sm border-primary/30 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] group"
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={project.image} 
                      alt={`${project.title} preview`}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/30">
                        Academic Project
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <CardTitle className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  
                  <CardDescription className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs border-primary/20">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 border-primary/30 hover:bg-primary/10" 
                      asChild
                    >
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group/btn"
                      >
                        <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        Code
                      </a>
                    </Button>
                    
                    {project.demo && project.demo !== "#" && (
                      <Button 
                        variant="hero" 
                        size="sm" 
                        className="flex-1" 
                        asChild
                      >
                        <a 
                          href={project.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="group/btn"
                        >
                          <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 transition-transform" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button variant="outline" size="lg" asChild>
            <a 
              href="https://github.com/akshayachigullapally" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Github className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform" />
              View All Projects on GitHub
              <ExternalLink className="h-4 w-4 ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
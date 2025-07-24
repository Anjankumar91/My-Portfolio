import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-6 py-20 relative overflow-hidden">
      {/* Disco Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl transform rotate-45 animate-disco-lights animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl transform -rotate-12 animate-disco-lights animate-float-slow" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 rounded-full blur-2xl animate-disco-lights animate-levitate" style={{ animationDelay: '1.4s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full animate-sparkle" style={{ animationDelay: '0.3s' }}></div>
        <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-white rounded-full animate-sparkle" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute bottom-1/4 left-3/4 w-3 h-3 bg-white rounded-full animate-sparkle" style={{ animationDelay: '1.2s' }}></div>
      </div>
      <div className="max-w-4xl mx-auto text-center animate-popup transform perspective-1000 shadow-popup hover:shadow-glow-intense transition-all duration-700">
        <div className="mb-6 animate-popup" style={{ animationDelay: '0.2s' }}>
          <Badge variant="secondary" className="mb-4 text-sm animate-glow-pulse">
            🤖 AI & Machine Learning Engineer
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-popup" style={{ animationDelay: '0.4s' }}>
            Building the Future with AI
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-popup" style={{ animationDelay: '0.6s' }}>
            Passionate about Generative AI, Deep Learning, and creating intelligent solutions 
            that transform how we interact with technology.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-popup" style={{ animationDelay: '0.8s' }}>
          <Button size="lg" variant="gradient" className="text-lg px-8 py-4 shadow-glow hover:shadow-glow-intense transform hover:scale-105 hover:-translate-y-2 transition-all duration-300">
            <Mail className="w-5 h-5" />
            Get In Touch
          </Button>
          <Button size="lg" variant="professional" className="text-lg px-8 py-4 shadow-popup hover:shadow-glow transform hover:scale-105 hover:-translate-y-2 transition-all duration-300">
            <Github className="w-5 h-5" />
            View My Work
          </Button>
        </div>
        
        <div className="flex justify-center gap-6 mb-16 animate-popup" style={{ animationDelay: '1s' }}>
          <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 hover:shadow-glow">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 hover:shadow-glow">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 transform hover:scale-125 hover:-translate-y-1 hover:shadow-glow">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        
        <div className="animate-bounce animate-popup" style={{ animationDelay: '1.2s' }}>
          <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground animate-glow-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
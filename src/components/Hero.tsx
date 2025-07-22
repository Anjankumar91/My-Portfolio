import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-subtle px-6 py-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-6">
          <Badge variant="secondary" className="mb-4 text-sm">
            🤖 AI & Machine Learning Engineer
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Building the Future with AI
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate about Generative AI, Deep Learning, and creating intelligent solutions 
            that transform how we interact with technology.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" variant="gradient" className="text-lg px-8 py-4">
            <Mail className="w-5 h-5" />
            Get In Touch
          </Button>
          <Button size="lg" variant="professional" className="text-lg px-8 py-4">
            <Github className="w-5 h-5" />
            View My Work
          </Button>
        </div>
        
        <div className="flex justify-center gap-6 mb-16">
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
        
        <div className="animate-bounce">
          <ArrowDown className="w-6 h-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
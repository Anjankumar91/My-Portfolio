import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Play } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI Content Generator",
      description: "Advanced text generation system using transformer models for creative content creation.",
      techStack: ["Python", "PyTorch", "Hugging Face", "FastAPI", "React"],
      github: "#",
      demo: "#",
      image: "🤖",
      category: "Generative AI"
    },
    {
      title: "Smart Image Classifier",
      description: "Deep learning model for multi-class image classification with 98% accuracy.",
      techStack: ["TensorFlow", "CNN", "OpenCV", "Flask", "Docker"],
      github: "#",
      demo: "#",
      image: "🖼️",
      category: "Computer Vision"
    },
    {
      title: "ML Pipeline Automation",
      description: "End-to-end MLOps pipeline for model training, validation, and deployment.",
      techStack: ["MLflow", "Apache Airflow", "AWS", "Python", "Kubernetes"],
      github: "#",
      demo: "#",
      image: "⚙️",
      category: "MLOps"
    },
    {
      title: "Sentiment Analysis API",
      description: "Real-time sentiment analysis service for social media monitoring and insights.",
      techStack: ["BERT", "FastAPI", "PostgreSQL", "Redis", "Docker"],
      github: "#",
      demo: "#",
      image: "📊",
      category: "NLP"
    },
    {
      title: "Neural Style Transfer",
      description: "Artistic style transfer application using convolutional neural networks.",
      techStack: ["PyTorch", "CNN", "Streamlit", "PIL", "NumPy"],
      github: "#",
      demo: "#",
      image: "🎨",
      category: "Deep Learning"
    },
    {
      title: "Predictive Analytics Dashboard",
      description: "Interactive dashboard for business intelligence and predictive modeling.",
      techStack: ["Scikit-learn", "Plotly", "Dash", "Pandas", "SQL"],
      github: "#",
      demo: "#",
      image: "📈",
      category: "Data Science"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-popup">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-glow-pulse">
            🚀 Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Innovative AI solutions that demonstrate technical excellence and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className={`group shadow-popup hover:shadow-glow-intense animate-popup transition-all duration-700 hover:-translate-y-6 hover:scale-110 bg-card/70 backdrop-blur-sm border border-border/50 ${
              index % 3 === 0 ? 'animate-glow-pulse' : 
              index % 3 === 1 ? 'animate-glow-accent-pulse' : 
              'animate-float'
            }`} style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-4xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 animate-float">{project.image}</div>
                  <Badge variant="secondary" className="text-xs transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 shadow-glow">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors transform group-hover:scale-105 duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs transform hover:scale-110 hover:-translate-y-1 hover:shadow-glow transition-all duration-300">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" asChild className="transform hover:scale-110 hover:-translate-y-2 hover:shadow-glow transition-all duration-300">
                    <a href={project.github}>
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" variant="emerald" asChild className="transform hover:scale-110 hover:-translate-y-2 hover:shadow-glow-accent transition-all duration-300">
                    <a href={project.demo}>
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-popup" style={{ animationDelay: '0.6s' }}>
          <Button size="lg" variant="gradient" className="shadow-glow-intense hover:shadow-popup transform hover:scale-110 hover:-translate-y-3 transition-all duration-500 animate-glow-pulse">
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
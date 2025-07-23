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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🚀 Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground">
            Innovative AI solutions that demonstrate technical excellence and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group shadow-3d hover:shadow-glow transition-all duration-500 hover:-translate-y-3 hover:scale-105 bg-card/70 backdrop-blur-sm border border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-4xl">{project.image}</div>
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github}>
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" variant="emerald" asChild>
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

        <div className="text-center mt-12">
          <Button size="lg" variant="gradient">
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
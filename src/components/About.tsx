import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🧠 About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            AI Engineer with expertise in transforming complex problems into intelligent solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-primary">
                  <Brain className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Innovation</h3>
                  <p className="text-muted-foreground">
                    Specialized in developing cutting-edge AI models and generative systems that push the boundaries of what's possible.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-accent">
                  <Code className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Technical Excellence</h3>
                  <p className="text-muted-foreground">
                    Deep expertise in machine learning frameworks, with a focus on practical implementation and scalable solutions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-primary">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Future-Ready</h3>
                  <p className="text-muted-foreground">
                    Constantly learning and adapting to the rapidly evolving AI landscape, staying ahead of emerging technologies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="shadow-3d transform hover:scale-105 transition-all duration-500 bg-card/50 backdrop-blur-sm border border-border/50">
            <CardContent className="p-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Professional Summary</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Passionate AI Engineer with a strong foundation in machine learning, deep learning, and generative AI. 
                  Currently focused on developing innovative solutions that bridge the gap between research and practical applications.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">🎯 Current Focus</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Large Language Models</Badge>
                      <Badge variant="secondary">Computer Vision</Badge>
                      <Badge variant="secondary">MLOps</Badge>
                      <Badge variant="secondary">Neural Networks</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">📚 Learning Path</h4>
                    <p className="text-sm text-muted-foreground">
                      Continuously expanding knowledge in transformer architectures, reinforcement learning, 
                      and responsible AI development practices.
                    </p>
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
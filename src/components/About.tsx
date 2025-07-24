import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Code, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-background relative overflow-hidden">
      {/* 3D Disco Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-48 h-48 rounded-full blur-3xl animate-disco-lights animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full blur-3xl animate-disco-lights animate-float-slow" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full animate-sparkle" style={{ animationDelay: '0.5s' }}></div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-popup perspective-1000 transform hover:rotateX-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-disco-lights">
            🧠 About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I use AI to make hard problems easier to understand.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-popup" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6">
              <div className="flex items-start gap-4 animate-popup transform hover:scale-105 hover:-translate-y-2 transition-all duration-500" style={{ animationDelay: '0.3s' }}>
                <div className="p-3 rounded-lg bg-gradient-primary shadow-glow animate-glow-pulse">
                  <Brain className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Innovation</h3>
                  <p className="text-muted-foreground">
                    I explore ideas that let machines imagine, generate, and adapt — not just compute.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 animate-popup transform hover:scale-105 hover:-translate-y-2 transition-all duration-500" style={{ animationDelay: '0.5s' }}>
                <div className="p-3 rounded-lg bg-gradient-accent shadow-glow-accent animate-glow-accent-pulse">
                  <Code className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Technical Excellence</h3>
                  <p className="text-muted-foreground">
                    I care less about the framework, more about what it solves.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 animate-popup transform hover:scale-105 hover:-translate-y-2 transition-all duration-500" style={{ animationDelay: '0.7s' }}>
                <div className="p-3 rounded-lg bg-gradient-primary shadow-glow animate-glow-pulse">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Future-Ready</h3>
                  <p className="text-muted-foreground">
                    I stay curious, always learning and adapting to where AI is heading next.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Card className="shadow-popup hover:shadow-glow-intense animate-popup transform hover:scale-105 hover:-translate-y-4 transition-all duration-700 backdrop-blur-sm border perspective-1000 hover:rotateY-3 animate-disco-bg animate-disco-lights" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold animate-glow-pulse">Professional Summary</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Not just patterns in data, but meaning.
                  Not just code, but thought.
                  A quiet pursuit of intelligence — not to control machines,but to understand what it means to think, to learn, to evolve.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">🎯 Current Focus</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 hover:shadow-glow">Prompt Engineering & LLMs</Badge>
                      <Badge variant="secondary" className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 hover:shadow-glow">Python & ML Frameworks</Badge>
                      <Badge variant="secondary" className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 hover:shadow-glow">Generative AI Models</Badge>
                      <Badge variant="secondary" className="transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 hover:shadow-glow">Data Analysis & Interpretation</Badge>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-2">📚 Learning Path</h4>
                    <p className="text-sm text-muted-foreground">
                      Building expertise in Programming, ML Algorithms, Deep Learning Architectures, 
                      and Deploying Scalable AI and Data-Driven Solutions.
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

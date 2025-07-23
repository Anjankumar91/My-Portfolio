import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "🐍 Programming Languages",
      skills: ["Python", "JavaScript/TypeScript", "R", "SQL", "C++"]
    },
    {
      title: "🤖 AI & ML Tools",
      skills: ["TensorFlow/Keras", "PyTorch", "Scikit-learn", "Hugging Face", "OpenAI API"]
    },
    {
      title: "🌐 Web Development",
      skills: ["React/Next.js", "Node.js", "FastAPI/Flask", "Docker", "AWS/GCP"]
    },
    {
      title: "🛠️ Other Tools",
      skills: ["Git/GitHub", "Jupyter Notebooks", "MLflow", "Streamlit", "Tableau"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            💻 Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground">
            A comprehensive toolkit for building intelligent solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-3d hover:shadow-glow transition-all duration-500 transform hover:-translate-y-1 hover:scale-105 bg-card/70 backdrop-blur-sm border border-border/50">
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto shadow-3d bg-card/50 backdrop-blur-sm border border-border/50">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">🎓 Currently Learning</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline">Transformer Architecture</Badge>
                <Badge variant="outline">MLOps Best Practices</Badge>
                <Badge variant="outline">Computer Vision</Badge>
                <Badge variant="outline">Reinforcement Learning</Badge>
                <Badge variant="outline">Edge AI Deployment</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
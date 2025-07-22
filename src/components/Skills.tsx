import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const skillCategories = [
    {
      title: "🐍 Programming Languages",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript/TypeScript", level: 88 },
        { name: "R", level: 82 },
        { name: "SQL", level: 85 },
        { name: "C++", level: 75 }
      ]
    },
    {
      title: "🤖 AI & ML Tools",
      skills: [
        { name: "TensorFlow/Keras", level: 92 },
        { name: "PyTorch", level: 90 },
        { name: "Scikit-learn", level: 95 },
        { name: "Hugging Face", level: 88 },
        { name: "OpenAI API", level: 85 }
      ]
    },
    {
      title: "🌐 Web Development",
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "FastAPI/Flask", level: 88 },
        { name: "Docker", level: 82 },
        { name: "AWS/GCP", level: 80 }
      ]
    },
    {
      title: "🛠️ Other Tools",
      skills: [
        { name: "Git/GitHub", level: 95 },
        { name: "Jupyter Notebooks", level: 98 },
        { name: "MLflow", level: 78 },
        { name: "Streamlit", level: 85 },
        { name: "Tableau", level: 75 }
      ]
    }
  ];

  const getProgressColor = (level: number) => {
    if (level >= 90) return "bg-accent";
    if (level >= 80) return "bg-primary";
    return "bg-muted";
  };

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
            <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <Badge variant="secondary" className="text-xs">
                        {skill.level}%
                      </Badge>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto shadow-card">
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
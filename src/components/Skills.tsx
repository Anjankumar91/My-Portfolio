import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "🐍 Programming Languages",
      skills: ["Python", "GOlang", "R", "SQL", "C"]
    },
    {
      title: "🤖 AI & ML Tools",
      skills: ["TensorFlow/Keras", "PyTorch", "Scikit-learn", "Hugging Face", "OpenAI API", "Prompt Engineering", "Numpy", "Pandas", "Matplotlib"]
    },
    {
      title: "🌐 Data Tools",
      skills: ["Excel", "Google Sheets", "Power BI", "Looker/Looker Studio"]
    },
    {
      title: "🛠️ Other Tools",
      skills: ["Git/GitHub", "Jupyter Notebooks", "Goolab Colab", "MLflow", "Streamlit", "AWS/GCP/Azure"]
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
            <Card key={index} className={`shadow-float hover:shadow-float-hover transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 backdrop-blur-sm border perspective-1000 hover:rotate-y-2 animate-disco-bg ${
              index % 4 === 0 ? 'animate-float animate-disco-lights' : 
              index % 4 === 1 ? 'animate-float-slow animate-disco-lights' : 
              index % 4 === 2 ? 'animate-float-delayed animate-disco-lights' : 
              'animate-levitate animate-disco-lights'
            }`} style={{ animationDelay: `${index * 0.3}s` }}>
              <CardHeader>
                <CardTitle className="text-xl transform transition-transform duration-300 hover:translateZ-4">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-lg">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto shadow-float animate-float-slow bg-card/50 backdrop-blur-sm border border-border/50 transform hover:-translate-y-3 hover:scale-105 transition-all duration-500">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4 transform transition-transform duration-300 hover:translateZ-2">🎓 Currently Learning</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline" className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-md">LangChain & AI Agents</Badge>
                <Badge variant="outline" className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-md">Prompt Engineering</Badge>
                <Badge variant="outline" className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-md">Streamlit Cloud + Firebase</Badge>
                <Badge variant="outline" className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-md">Python Projects</Badge>
                <Badge variant="outline" className="transform transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-md">AI Engineering</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;

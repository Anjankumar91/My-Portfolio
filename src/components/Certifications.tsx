import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Calendar } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      name: "Machine Learning Engineering Professional",
      organization: "Google Cloud",
      date: "2024",
      credentialId: "GCP-MLE-2024-001",
      link: "#",
      skills: ["TensorFlow", "Vertex AI", "MLOps"]
    },
    {
      name: "AWS Certified Machine Learning - Specialty",
      organization: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-MLS-2023-456",
      link: "#",
      skills: ["SageMaker", "Deep Learning", "AI Services"]
    },
    {
      name: "Deep Learning Specialization",
      organization: "DeepLearning.AI",
      date: "2023",
      credentialId: "DL-SPEC-2023-789",
      link: "#",
      skills: ["Neural Networks", "CNN", "RNN", "Transformers"]
    },
    {
      name: "TensorFlow Developer Certificate",
      organization: "Google",
      date: "2023",
      credentialId: "TF-DEV-2023-321",
      link: "#",
      skills: ["TensorFlow", "Keras", "Computer Vision", "NLP"]
    },
    {
      name: "Applied Data Science with Python",
      organization: "University of Michigan",
      date: "2022",
      credentialId: "UMICH-ADS-2022-654",
      link: "#",
      skills: ["Python", "Pandas", "Matplotlib", "Scikit-learn"]
    },
    {
      name: "Generative AI Fundamentals",
      organization: "IBM",
      date: "2024",
      credentialId: "IBM-GAI-2024-987",
      link: "#",
      skills: ["GPT", "Prompt Engineering", "LLMs"]
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-gradient-subtle relative overflow-hidden">
      {/* 3D Disco Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/3 w-52 h-52 rounded-full blur-3xl animate-disco-lights animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-44 h-44 rounded-full blur-2xl animate-disco-lights animate-float-slow" style={{ animationDelay: '0.9s' }}></div>
        <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-white rounded-full animate-sparkle" style={{ animationDelay: '0.4s' }}></div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-popup perspective-1000 transform hover:rotateX-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-disco-lights">
            🏆 Certifications
          </h2>
          <p className="text-lg text-muted-foreground">
            Professional credentials validating expertise in AI and machine learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 transform hover:-translate-y-4 hover:scale-105 backdrop-blur-sm animate-disco-bg animate-disco-lights perspective-1000 hover:rotateY-2" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gradient-primary">
                      <Award className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-lg leading-tight">
                        {cert.name}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground font-medium">
                        {cert.organization}
                      </p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {cert.date}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Credential ID: {cert.credentialId}</span>
                </div>
                
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
                
                <Button size="sm" variant="emerald" className="w-full" asChild>
                  <a href={cert.link}>
                    <ExternalLink className="w-4 h-4" />
                    View Credential
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-md mx-auto shadow-card">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">📚 Currently Pursuing</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Advanced Computer Vision Specialization
              </p>
              <Badge variant="secondary">Stanford University</Badge>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
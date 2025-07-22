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
    <section id="certifications" className="py-20 px-6 bg-gradient-subtle">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🏆 Certifications
          </h2>
          <p className="text-lg text-muted-foreground">
            Professional credentials validating expertise in AI and machine learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300">
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
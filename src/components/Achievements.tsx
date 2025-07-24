import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Target, Zap } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      year: "2024",
      title: "AI Innovation Award",
      description: "Recognized for developing breakthrough generative AI solution that improved content creation efficiency by 300%",
      category: "Innovation",
      icon: <Trophy className="w-5 h-5" />
    },
    {
      year: "2024",
      title: "Top 1% Kaggle Contributor",
      description: "Achieved Kaggle Expert status with multiple competition wins in computer vision and NLP challenges",
      category: "Competition",
      icon: <Star className="w-5 h-5" />
    },
    {
      year: "2023",
      title: "Open Source ML Library",
      description: "Published Python library for automated hyperparameter tuning, adopted by 10k+ developers",
      category: "Open Source",
      icon: <Target className="w-5 h-5" />
    },
    {
      year: "2023",
      title: "Research Paper Publication",
      description: "Co-authored paper on efficient training of large language models, published in top-tier ML conference",
      category: "Research",
      icon: <Zap className="w-5 h-5" />
    },
    {
      year: "2023",
      title: "Hackathon Grand Prize",
      description: "Led team to victory in 48-hour AI4Good hackathon with healthcare diagnostic solution",
      category: "Competition",
      icon: <Trophy className="w-5 h-5" />
    },
    {
      year: "2022",
      title: "Tech Conference Speaker",
      description: "Keynote speaker at AI Summit 2022 on 'Democratizing AI: Building Accessible ML Solutions'",
      category: "Speaking",
      icon: <Star className="w-5 h-5" />
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      Innovation: "bg-gradient-primary",
      Competition: "bg-gradient-accent", 
      "Open Source": "bg-primary",
      Research: "bg-accent",
      Speaking: "bg-primary-glow"
    };
    return colors[category as keyof typeof colors] || "bg-primary";
  };

  return (
    <section id="achievements" className="py-20 px-6 bg-background relative overflow-hidden">
      {/* 3D Disco Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-56 h-56 rounded-full blur-3xl animate-disco-lights animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-40 h-40 rounded-full blur-2xl animate-disco-lights animate-levitate" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/4 left-3/4 w-1 h-1 bg-white rounded-full animate-sparkle" style={{ animationDelay: '0.6s' }}></div>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-popup perspective-1000 transform hover:rotateX-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-disco-lights">
            🌟 Achievements & Recognition
          </h2>
          <p className="text-lg text-muted-foreground">
            Milestones and recognitions in the AI/ML journey
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>
          
          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div key={index} className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>
                
                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <Card className="shadow-card hover:shadow-glow transition-all duration-300 transform hover:-translate-y-3 hover:scale-105 backdrop-blur-sm animate-disco-bg animate-disco-lights perspective-1000 hover:rotateY-2" style={{ animationDelay: `${index * 0.2}s` }}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-lg ${getCategoryColor(achievement.category)}`}>
                          <div className="text-white">
                            {achievement.icon}
                          </div>
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {achievement.year}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {achievement.category}
                            </Badge>
                          </div>
                          
                          <h3 className="text-xl font-bold mb-2">
                            {achievement.title}
                          </h3>
                          
                          <p className="text-muted-foreground leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-lg mx-auto shadow-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">🎯 Current Goals</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-sm">Publish 3 more research papers in top ML conferences</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Launch AI startup focused on ethical AI solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent-emerald rounded-full"></div>
                  <span className="text-sm">Contribute to 5 open-source ML projects</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
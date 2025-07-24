import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Download, Eye } from "lucide-react";

const Resume = () => {
  return (
    <section id="resume" className="py-20 px-6 bg-gradient-subtle relative overflow-hidden">
      {/* 3D Disco Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-60 h-60 rounded-full blur-3xl animate-disco-lights animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full blur-2xl animate-disco-lights animate-float-delayed" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-1/2 left-3/4 w-2 h-2 bg-white rounded-full animate-sparkle" style={{ animationDelay: '0.2s' }}></div>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-popup perspective-1000 transform hover:rotateX-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-disco-lights">
            📄 Resume
          </h2>
          <p className="text-lg text-muted-foreground">
            Complete professional profile and experience overview
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Resume Preview */}
          <Card className="shadow-card transform hover:-translate-y-4 hover:scale-105 transition-all duration-500 backdrop-blur-sm animate-disco-bg animate-disco-lights perspective-1000 hover:rotateY-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Resume Preview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-muted rounded-lg p-6 aspect-[8.5/11] flex items-center justify-center border-2 border-dashed border-border">
                <div className="text-center space-y-4">
                  <FileText className="w-16 h-16 mx-auto text-muted-foreground" />
                  <div>
                    <h3 className="font-semibold text-lg">AI Engineer Resume</h3>
                    <p className="text-sm text-muted-foreground">
                      Complete professional experience, education, and skills
                    </p>
                  </div>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <p>• 5+ Years AI/ML Experience</p>
                    <p>• 15+ Completed Projects</p>
                    <p>• Multiple Certifications</p>
                    <p>• Published Research</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resume Actions */}
          <div className="space-y-6">
            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">📋 Quick Actions</h3>
                <div className="space-y-4">
                  <Button size="lg" variant="gradient" className="w-full">
                    <Download className="w-5 h-5" />
                    Download PDF Resume
                  </Button>
                  
                  <Button size="lg" variant="professional" className="w-full">
                    <Eye className="w-5 h-5" />
                    View Full Screen
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">📊 Resume Highlights</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Experience</span>
                    <span className="font-semibold">5+ Years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Projects Completed</span>
                    <span className="font-semibold">15+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Certifications</span>
                    <span className="font-semibold">6 Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Publications</span>
                    <span className="font-semibold">3 Papers</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Languages</span>
                    <span className="font-semibold">5+</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">🎯 Key Strengths</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>End-to-end ML pipeline development</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Large-scale model deployment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-emerald rounded-full"></div>
                    <span>Cross-functional team leadership</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                    <span>Research to production translation</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto shadow-card">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold mb-4">💼 Looking for Opportunities</h3>
              <p className="text-muted-foreground mb-6">
                Open to full-time positions, consulting projects, and research collaborations 
                in AI/ML engineering, focusing on generative AI and deep learning applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button variant="emerald">
                  Schedule Interview
                </Button>
                <Button variant="outline">
                  Discuss Project
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Resume;
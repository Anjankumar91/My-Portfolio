import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "venkatanjan91@gmail.com",
      link: "venkatanjan91@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+919392510221",
      link: "tel:+919392510221"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Guntur, Andhra Pradesh",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      username: "Popuri Venkat Anjan Kumar",
      link: "https://www.linkedin.com/in/venkat-anjan-kumar-p/",
      color: "hover:text-blue-600"
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      username: "Venkatanjan91",
      link: "https://github.com/Venkatanjan91",
      color: "hover:text-gray-900"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      username: "Get in touch",
      link: "venkatanjan91@gmail.com",
      color: "hover:text-red-500"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-background relative overflow-hidden">
      {/* 3D Disco Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 w-48 h-48 rounded-full blur-3xl animate-disco-lights animate-levitate"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full blur-3xl animate-disco-lights animate-float" style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-white rounded-full animate-sparkle" style={{ animationDelay: '0.3s' }}></div>
      </div>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-popup perspective-1000 transform hover:rotateX-2">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-disco-lights">
            📬 Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to collaborate on the next breakthrough AI project
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card transform hover:-translate-y-4 hover:scale-105 transition-all duration-500 backdrop-blur-sm animate-disco-bg animate-disco-lights perspective-1000 hover:rotateY-2">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Name</label>
                    <Input placeholder="Your full name" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Subject</label>
                  <Input placeholder="Project collaboration, consultation, etc." />
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project, timeline, and how I can help..."
                    className="min-h-32"
                  />
                </div>
                
                <Button size="lg" variant="gradient" className="w-full">
                  <Send className="w-5 h-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.link}
                      className="flex items-center gap-4 p-4 rounded-lg hover:bg-muted transition-colors group"
                    >
                      <div className="p-3 rounded-lg bg-gradient-primary group-hover:shadow-glow transition-all">
                        <div className="text-primary-foreground">
                          {contact.icon}
                        </div>
                      </div>
                      <div>
                        <p className="font-medium">{contact.label}</p>
                        <p className="text-sm text-muted-foreground">{contact.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Social Links</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      className={`flex items-center gap-3 p-4 rounded-lg border border-border hover:shadow-card transition-all ${social.color}`}
                    >
                      {social.icon}
                      <div>
                        <p className="font-medium text-sm">{social.label}</p>
                        <p className="text-xs text-muted-foreground">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">🤝 Open to</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Full-time AI/ML Engineer positions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Consulting & freelance projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent-emerald rounded-full"></div>
                    <span>Data Analyst / Data Scientist Roles</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                    <span>Software Developer Roles</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Generative AI Projects & Open source contribution</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart, Users, Award, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            About ACES
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At ACES, we strive to enhance the academic, technical, and personal
            growth of computer engineering students through a wide range of
            activities. We are a student-driven committee dedicated to creating
            a vibrant and engaging environment within the department.
          </p>
        </div>

        {/* Mission, Vision, Values - Updated Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-0">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6 mx-auto">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                Our Vision
              </h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                To empower computer engineering students through continuous
                learning, innovation, and collaboration, creating a dynamic
                platform that nurtures technical excellence, leadership, and
                holistic development.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-0">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6 mx-auto">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                Our Mission
              </h3>
              <div className="text-muted-foreground leading-relaxed text-center space-y-3">
                <p>
                  • To organize technical and non-technical events that foster
                  curiosity, creativity, and practical skills among students.
                </p>
                <p>
                  • To bridge the gap between classroom knowledge and real-world
                  applications through workshops, competitions, and industry
                  interactions.
                </p>
                <p>
                  • To promote teamwork, communication, and leadership by
                  providing students with opportunities to lead and contribute
                  to impactful initiatives.
                </p>
                <p>
                  • To build a vibrant and inclusive community where every
                  computer engineering student is encouraged to learn, grow, and
                  excel.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-colors">
            <CardContent className="p-0">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6 mx-auto">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                Our Values
              </h3>
              <p className="text-muted-foreground leading-relaxed text-center">
                Excellence, Innovation, Collaboration, and Integrity form the
                foundation of everything we do. We believe in empowering every
                member to achieve their full potential.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Updated Statistics */}
        <div className="bg-muted rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">35+</div>
              <div className="text-muted-foreground">Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Events</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">4+</div>
              <div className="text-muted-foreground">Years</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, ExternalLink, Users, Heart } from "lucide-react";

const Contact = () => {
  const handleJoinACES = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLScbEQA2rpHeM7cJktcdMF6oqcjz8elE9NYzkiVrBsggcJT9cw/viewform?usp=header",
      "_blank",
    );
  };

  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-primary mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground">
            Get in touch with the ACES family
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Get In Touch
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary mr-3" />
                  <span className="text-muted-foreground">
                    comp.aces@nmiet.edu.in
                  </span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-primary mr-3 mt-0.5" />
                  <span className="text-muted-foreground">
                    PCET's Nutan Maharashtra Institute of Engineering and
                    Technology, Pune
                  </span>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      window.open(
                        "https://www.instagram.com/aces_nmiet/",
                        "_blank",
                      )
                    }
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Instagram
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/aces-nmiet-706a17234/",
                        "_blank",
                      )
                    }
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    LinkedIn
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8">
            <CardContent className="p-0">
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Heart className="w-6 h-6 text-primary" />
                Join the ACES Family
              </h2>
              <p className="text-muted-foreground mb-6">
                Ready to be part of something amazing? Join the ACES family and
                connect with passionate computer engineering students who are
                shaping the future together.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    Why Join Our Family?
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Access to exclusive workshops and events</li>
                    <li>
                      • Networking opportunities with industry professionals
                    </li>
                    <li>• Technical skill development programs</li>
                    <li>• Leadership and project management experience</li>
                    <li>• Be part of a supportive and vibrant community</li>
                  </ul>
                </div>
                <Button onClick={handleJoinACES} className="w-full mt-6">
                  <Heart className="w-4 h-4 mr-2" />
                  Become Part of Our Family
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;

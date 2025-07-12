import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Eye,
  Target,
  Heart,
  Calendar,
  MapPin,
  Users,
  Trophy,
  Rocket,
  Brain,
} from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const events = [
    {
      id: 1,
      title: "🚀 REBOOT 2K24",
      date: "August 28, 2024",
      type: "Conference",
      attendees: "100+ participants",
      location: "Main Auditorium, B Wing NMIET",
      duration: "Full Day",
      description:
        "🚀 REBOOT 2K24 – A Grand Kickoff! On August 28th, 2024, ACES made a powerful comeback with REBOOT 2K24 and its official inauguration. Held at the Auditorium Hall, the event sparked enthusiasm across campus with a full house of tech enthusiasts! Participants battled it out in a series of high-energy challenges: 🔀 Tech Jumble – Unscrambled their way through technical terms ⌨️ Keyboard Smackdown – Proved their shortcut mastery 🖨 3D Visionaries Challenge – Recreated a 3D printer model with precision and teamwork. It was a memorable start to the ACES journey, setting the stage for innovation, competition, and camaraderie!",
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2Fae7643b69d90447eb4df56524a3ace8b%2F6a00651b42174098b805c41874bd91bc?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2Fae7643b69d90447eb4df56524a3ace8b%2F2fa69200e86748ba9cdafe2e21e62ed8?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2Fae7643b69d90447eb4df56524a3ace8b%2Fd18d0512c546443693307d43d4777f71?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2Fae7643b69d90447eb4df56524a3ace8b%2F39a91672115b4040aea8c1dd1b58e753?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2Fae7643b69d90447eb4df56524a3ace8b%2Fb4427631f26c42549f53130dbc2d3928?format=webp&width=800",
      ],
    },
    {
      id: 2,
      title: "💠 Tech-Quest 2K25",
      date: "March 26, 2025",
      type: "Competition",
      attendees: "100+ participants",
      location: "Main Auditorium, B Wing NMIET",
      duration: "Full Day",
      description:
        "💠 Tech-Quest 2K25 – The Ultimate Tech Showdown! On March 26th, 2025, ACES hosted its flagship event Tech-Quest 2K25 at the Computer Engineering Department, NMIET. A day filled with innovation, strategy, and high-energy competition! Participants competed in three thrilling rounds: 🧠 Tech KBC – A quiz that tested their technical depth and accuracy 🎨 AesthetIQs of Figma – A UI/UX design face-off with surprise themes and creative challenges ⚔️ Algo Arena – A two-round coding battle to guess, write, and implement algorithms with real-world context. With teams battling for cash prizes worth ₹10,000, Tech-Quest 2K25 proved to be a spectacular blend of tech, creativity, and competitive spirit!",
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2Fae7643b69d90447eb4df56524a3ace8b%2Ff6e009a244014f35a89bbe83f2c47ab1?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2Fae7643b69d90447eb4df56524a3ace8b%2F24a2a0e8b49a4e33bdd40497bdeb31b3?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2Fae7643b69d90447eb4df56524a3ace8b%2F8fd1c30bfa1f48a88788c00f905c5a4e?format=webp&width=800",
      ],
    },
    {
      id: 3,
      title: "NAAC Peer Team Visit",
      date: "September 26-27, 2024",
      type: "Academic",
      attendees: "Faculty & Students",
      location: "NMIET Campus",
      duration: "2 Days",
      description:
        "NAAC Peer Team Visit – A Milestone Moment for NMIET. NMIET recently had the honor of welcoming the NAAC peer team for its first-ever accreditation cycle. Over two insightful days, the team thoroughly assessed various facets of our academic and institutional excellence. 🔍 Their visit included in-depth reviews of our academic environment, interactions with faculty and staff, and a showcase of innovative student projects in emerging technologies—demonstrating our dedication to cutting-edge education. 🚀 🤝 The peer team also experienced the strong sense of community and collaboration that defines NMIET through meaningful engagements with our passionate faculty members. 🎭 To express our heartfelt gratitude, we organized a vibrant lineup of cultural performances, celebrating the diversity and spirit of our campus. 🌺 This visit wasn't just an evaluation—it was a proud reflection of our journey so far and a promising blueprint for what lies ahead. We look forward to many more enriching exchanges like this one! ✨",
      images: [
        "https://cdn.builder.io/api/v1/image/assets%2Fae7643b69d90447eb4df56524a3ace8b%2Fc178e78067fe4c7f95e694cebfe30507?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2Fae7643b69d90447eb4df56524a3ace8b%2Fb23cb165972647ebb3dc45a6d0fd4fcf?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2Fae7643b69d90447eb4df56524a3ace8b%2F65fb9c20fb564e8aa153fbdd63ecd474?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2Fae7643b69d90447eb4df56524a3ace8b%2Fb704ac4752f6453e80f7a0194a6a5232?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2Fae7643b69d90447eb4df56524a3ace8b%2Fcbd26cfd6a0c4fe8b242bdac3dd8b809?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2Fae7643b69d90447eb4df56524a3ace8b%2F900af1b0b0f34bffb9870a9b24bb7d66?format=webp&width=800",
      ],
    },
    
    {
      id: 4,
      title: "💡 TechIgnite 2025",
      date: "July 10, 2025",
      type: "Conference",
      attendees: "100+ ",
      location: "Main Auditorium, B Wing NMIET",
      duration: "4 hours",
      description:
        "💡 Tech Ignite 2025 – Welcoming the New Wave! Tech Ignite 2025 marked a heartfelt beginning as ACES warmly welcomed the new SE batch into the fold. The event began with a serene Saraswati Pujan, followed by inspiring words from our esteemed faculty. 🌼 We also celebrated our dedicated mentors whose support continues to shape the journey of every student. The event was a perfect blend of tradition, motivation, and unity—setting the tone for an exciting year ahead with the ACES family! 📚✨",
      images: [
         "https://cdn.builder.io/api/v1/image/assets%2Fae7643b69d90447eb4df56524a3ace8b%2Ff568d33bc72b42ceb8f75f739cede2a2?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2Fae7643b69d90447eb4df56524a3ace8b%2Fd81efbc896834206a546e7a44b147f03?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2Fae7643b69d90447eb4df56524a3ace8b%2Fc53fcc22f9b14cd782b05a7dbe392b08?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2Fae7643b69d90447eb4df56524a3ace8b%2Fe8b86d79812f4cd3b8c649f174ca7cb3?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2Fae7643b69d90447eb4df56524a3ace8b%2Fa1dfb3e2a3634841a42c0d563ace2fe2?format=webp&width=800",
        "https://cdn.builder.io/api/v1/image/assets%2Fae7643b69d90447eb4df56524a3ace8b%2F19d87935fa0e4a9b9be7a46cef2a4eec?format=webp&width=800",
      ],
    },
  ];

  const getTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      Conference: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      Competition: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      Workshop: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      Networking: "bg-green-500/20 text-green-400 border-green-500/30",
      Project: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      Academic: "bg-red-500/20 text-red-400 border-red-500/30",
    };
    return colors[type] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
  <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/50"></div>
  <div className="relative z-10 text-center max-w-4xl mx-auto">
    <div className="mb-8">
      <div className="inline-flex items-center gap-3 mb-6">
        <Rocket className="w-12 h-12 text-primary" />
        <h1 className="text-6xl md:text-8xl font-bold text-primary">ACES</h1>
        <Trophy className="w-12 h-12 text-primary" />
      </div>
    </div>
    <p className="text-xl md:text-2xl text-foreground/90 mb-4 font-semibold">
      Association of Computer Engineering Students
    </p>
    <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
      By the Students, For the Students
    </p>
    <div className="flex justify-center">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLScbEQA2rpHeM7cJktcdMF6oqcjz8elE9NYzkiVrBsggcJT9cw/viewform?usp=header"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="outline"
          size="lg"
          className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10"
        >
          <Users className="w-5 h-5 mr-2" />
          Join Us
        </Button>
      </a>
    </div>
  </div>
</section>

      {/* Enhanced About Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <Brain className="w-8 h-8 text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                About ACES
              </h2>
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We are a dynamic community also known as Black Commandos of Computer Engineering,
              dedicated to fostering innovation, technical excellence, and
              professional growth at NMIET.
            </p>
          </div>

          {/* Mission, Vision, Values with enhanced design */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="group p-8 bg-gradient-to-br from-card to-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CardContent className="p-0">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full mb-6 mx-auto group-hover:from-primary/40 group-hover:to-primary/20 transition-all">
                  <Target className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed text-center">
                  To organize technical and non-technical events that foster curiosity, creativity, and practical skills among students.To bridge the gap between classroom knowledge and real-world applications through workshops, competitions, and industry interactions.

                </p>
              </CardContent>
            </Card>

            <Card className="group p-8 bg-gradient-to-br from-card to-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CardContent className="p-0">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full mb-6 mx-auto group-hover:from-primary/40 group-hover:to-primary/20 transition-all">
                  <Eye className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4 text-center">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed text-center">
                  To empower computer engineering students through continuous learning, innovation, and collaboration, creating a dynamic platform that nurtures technical excellence, leadership, and holistic development.
                </p>
              </CardContent>
            </Card>

            <Card className="group p-8 bg-gradient-to-br from-card to-card/50 border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CardContent className="p-0">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full mb-6 mx-auto group-hover:from-primary/40 group-hover:to-primary/20 transition-all">
                  <Heart className="w-10 h-10 text-primary" />
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

          {/* Enhanced Stats Section */}
          <div className="bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-2xl p-12 border border-primary/20">
            <h3 className="text-3xl font-bold text-primary mb-8 text-center">
              Our Impact at NMIET
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  35+
                </div>
                <div className="text-muted-foreground font-medium">
                  Active Members
                </div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  5+
                </div>
                <div className="text-muted-foreground font-medium">
                  Events Organized
                </div>
              </div>
              
              <div className="text-center">
                <div className="text-5xl font-bold text-primary mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  4+
                </div>
                <div className="text-muted-foreground font-medium">
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Events Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <Calendar className="w-8 h-8 text-primary" />
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                Events & Activities
              </h2>
              <Trophy className="w-8 h-8 text-primary" />
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From technical workshops to hackathons, we organize diverse events
              that enhance learning and foster innovation at NMIET.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Card
                key={event.id}
                className="group cursor-pointer hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl bg-gradient-to-br from-card to-card/50"
                onClick={() => setSelectedEvent(event)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`border ${getTypeColor(event.type)}`}>
                      {event.type}
                    </Badge>
                    <Calendar className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3 font-medium">
                    {event.date}
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    {event.attendees}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                    <span className="line-clamp-1">{event.location}</span>
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full mt-4 group-hover:bg-primary/10 group-hover:text-primary border border-transparent group-hover:border-primary/20"
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-border shadow-2xl">
            <div className="p-6 border-b border-border flex items-center justify-between sticky top-0 bg-card/95 backdrop-blur">
              <div className="flex items-center gap-3">
                <Badge className={`border ${getTypeColor(selectedEvent.type)}`}>
                  {selectedEvent.type}
                </Badge>
                <h2 className="text-2xl font-bold text-foreground line-clamp-1">
                  {selectedEvent.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedEvent(null)}
                className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-lg"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6 p-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Event Details
                </h3>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start text-sm">
                    <Calendar className="w-4 h-4 mr-3 text-primary mt-0.5" />
                    <div>
                      <span className="text-muted-foreground">Date:</span>
                      <span className="ml-2 text-foreground font-medium">
                        {selectedEvent.date}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start text-sm">
                    <MapPin className="w-4 h-4 mr-3 text-primary mt-0.5" />
                    <div>
                      <span className="text-muted-foreground">Location:</span>
                      <span className="ml-2 text-foreground font-medium">
                        {selectedEvent.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start text-sm">
                    <span className="w-4 h-4 mr-3 text-primary mt-0.5">⏱</span>
                    <div>
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="ml-2 text-foreground font-medium">
                        {selectedEvent.duration}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start text-sm">
                    <Users className="w-4 h-4 mr-3 text-primary mt-0.5" />
                    <div>
                      <span className="text-muted-foreground">
                        Participants:
                      </span>
                      <span className="ml-2 text-foreground font-medium">
                        {selectedEvent.attendees}
                      </span>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-foreground mt-6 mb-3 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Description
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedEvent.description}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  Event Gallery
                </h3>
                <div className="space-y-4">
                  {selectedEvent.images.map((image: string, index: number) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${selectedEvent.title} - Image ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg border border-border hover:scale-105 transition-transform"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;

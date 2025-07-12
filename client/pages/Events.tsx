import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users, Trophy, Rocket, Brain } from "lucide-react";
import { useState } from "react";

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const upcomingEvents = [
    {
      id: 1,
      title: "Tech Reboot",
      date: "Coming Soon",
      type: "Conference",
      location: "Main Auditorium, B Wing NMIET",
      attendees: "100+ participants",
      status: "Upcoming",
      duration: "Full Day",
      description:
        "Get ready for an exciting tech event that will reboot your knowledge and skills!",
      images: [],
    },
    {
      id: 2,
      title: "Hackathon",
      date: "Coming Soon",
      type: "Competition",
      location: "Main Auditorium, B Wing NMIET",
      attendees: "100+ participants",
      status: "Upcoming",
      duration: "48 Hours",
      description: "A coding marathon where innovation meets competition!",
      images: [],
    },
  ];

  const pastEvents = [
    {
      id: 3,
      title: "💠 Tech-Quest 2K25",
      date: "March 26, 2025",
      type: "Competition",
      location: "Main Auditorium, B Wing NMIET",
      attendees: "100+ participants",
      status: "Completed",
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
      id: 4,
      title: "💡 TechIgnite 2025",
      date: "2025",
      type: "Conference",
      location: "Main Auditorium, B Wing NMIET",
      attendees: "100+ participants",
      status: "Completed",
      duration: "Full Day",
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
    {
      id: 5,
      title: "🚀 REBOOT 2K24",
      date: "August 28, 2024",
      type: "Conference",
      location: "Main Auditorium, B Wing NMIET",
      attendees: "100+ participants",
      status: "Completed",
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
      id: 6,
      title: "NAAC Peer Team Visit",
      date: "September 26-27, 2024",
      type: "Academic",
      location: "NMIET Campus",
      attendees: "Faculty & Students",
      status: "Completed",
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

  const getStatusColor = (status: string) => {
    const colors: { [key: string]: string } = {
      Upcoming: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      Ongoing: "bg-green-500/20 text-green-400 border-green-500/30",
      Recurring: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      Completed: "bg-gray-500/20 text-gray-400 border-gray-500/30",
    };
    return colors[status] || "bg-gray-500/20 text-gray-400 border-gray-500/30";
  };

  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <Calendar className="w-8 h-8 text-primary" />
            <h1 className="text-5xl md:text-6xl font-bold text-primary">
              Events & Activities
            </h1>
            <Trophy className="w-8 h-8 text-primary" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From technical workshops to hackathons, we organize diverse events
            that enhance learning and foster innovation at NMIET.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Rocket className="w-7 h-7 text-primary" />
            Upcoming Events
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card
                key={event.id}
                className="group hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer bg-gradient-to-br from-card to-card/50"
                onClick={() => setSelectedEvent(event)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`border ${getTypeColor(event.type)}`}>
                      {event.type}
                    </Badge>
                    <Badge className={`border ${getStatusColor(event.status)}`}>
                      {event.status}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2 text-primary" />
                      {event.attendees}
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary/10 group-hover:text-primary border border-transparent group-hover:border-primary/20"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
            <Brain className="w-7 h-7 text-primary" />
            Past Events
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <Card
                key={event.id}
                className="group hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer bg-gradient-to-br from-card to-card/50"
                onClick={() => setSelectedEvent(event)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge className={`border ${getTypeColor(event.type)}`}>
                      {event.type}
                    </Badge>
                    <Badge className={`border ${getStatusColor(event.status)}`}>
                      {event.status}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2 text-primary" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2 text-primary" />
                      {event.attendees}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    className="w-full"
                    disabled={event.status === "Completed"}
                  >
                    {event.status === "Completed"
                      ? "View Event Details"
                      : "Learn More"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Event Detail Modal with Better Image Layout */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto border border-border shadow-2xl">
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

            <div className="p-6">
              {/* Event Details */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Event Details
                </h3>
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-start text-sm">
                    <Calendar className="w-4 h-4 mr-3 text-primary mt-0.5" />
                    <div>
                      <span className="text-muted-foreground">Date:</span>
                      <span className="ml-2 text-foreground font-medium block">
                        {selectedEvent.date}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start text-sm">
                    <MapPin className="w-4 h-4 mr-3 text-primary mt-0.5" />
                    <div>
                      <span className="text-muted-foreground">Location:</span>
                      <span className="ml-2 text-foreground font-medium block">
                        {selectedEvent.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start text-sm">
                    <span className="w-4 h-4 mr-3 text-primary mt-0.5">⏱</span>
                    <div>
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="ml-2 text-foreground font-medium block">
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
                      <span className="ml-2 text-foreground font-medium block">
                        {selectedEvent.attendees}
                      </span>
                    </div>
                  </div>
                </div>

                <h4 className="text-lg font-semibold text-foreground mt-6 mb-3 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-primary" />
                  Description
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {selectedEvent.description}
                </p>
              </div>

              {/* Event Gallery with Improved Layout */}
              {selectedEvent.images && selectedEvent.images.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-primary" />
                    Event Gallery
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {selectedEvent.images.map(
                      (image: string, index: number) => (
                        <div
                          key={index}
                          className="group relative overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-all"
                        >
                          <img
                            src={image}
                            alt={`${selectedEvent.title} - Image ${index + 1}`}
                            className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <svg
                                className="w-8 h-8 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;

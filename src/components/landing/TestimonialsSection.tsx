import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer",
    company: "Hired at Google",
    avatar: "SC",
    content: "I was skeptical about AI-generated cover letters, but ApplyAI blew me away. It captured my experience perfectly and I got callbacks from 5 out of 7 applications!",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Marketing Manager",
    company: "Hired at Spotify",
    avatar: "MJ",
    content: "The tone selector is a game-changer. I used 'Bold' for a startup and 'Professional' for a Fortune 500 company. Landed interviews at both.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Product Designer",
    company: "Hired at Airbnb",
    avatar: "ER",
    content: "I used to spend 2 hours on each cover letter. Now it takes me 2 minutes. The quality is honestly better than what I was writing myself.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Loved by
            <span className="text-gradient"> Job Seekers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See what others are saying about their ApplyAI experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

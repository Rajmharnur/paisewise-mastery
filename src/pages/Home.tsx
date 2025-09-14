import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Shield, 
  TrendingUp, 
  Target, 
  BookOpen,
  Star,
  CheckCircle,
  Zap
} from "lucide-react";
import heroImage from "@/assets/hero-finance.jpg";

const features = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Smart Expense Tracking",
    description: "Automatically categorize expenses and get insights into your spending patterns"
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Goal Achievement",
    description: "Set financial goals and get personalized recommendations to reach them faster"
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Financial Education",
    description: "Learn with interactive modules and build your financial literacy"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Privacy First",
    description: "Your data stays secure with end-to-end encryption and zero data resale"
  }
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    content: "Monarch Money helped me save ₹50,000 in just 6 months by tracking my expenses smartly!",
    rating: 5
  },
  {
    name: "Rahul Gupta",
    role: "Marketing Manager", 
    content: "The debt payoff calculator showed me I could be debt-free 8 months earlier!",
    rating: 5
  },
  {
    name: "Anita Patel",
    role: "Teacher",
    content: "Finally, a finance app that teaches while it tracks. Perfect for beginners!",
    rating: 5
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/10">
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in">
                  <Zap className="w-4 h-4 mr-2" />
                  Your Money, Your Mastery
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight animate-slide-in">
                  Save Smarter with{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Monarch Money
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground animate-fade-in animation-delay-200">
                  Take control of your finances with intelligent expense tracking, 
                  personalized goals, and financial education that grows with you.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-scale-in animation-delay-400">
                <Button 
                  size="lg" 
                  className="gradient-primary shadow-medium hover:shadow-glow text-lg px-8 py-6"
                  asChild
                >
                  <Link to="/dashboard">
                    Start Saving Today
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg px-8 py-6 border-primary/20 hover:bg-primary/5"
                  asChild
                >
                  <Link to="/learn">
                    Learn Finance
                  </Link>
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-muted-foreground animate-fade-in animation-delay-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-success mr-2" />
                  Free to start
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-success mr-2" />
                  No hidden fees
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-success mr-2" />
                  Bank-level security
                </div>
              </div>
            </div>

            <div className="relative animate-float">
              <div className="absolute inset-0 gradient-primary opacity-20 blur-3xl rounded-full" />
              <img 
                src={heroImage} 
                alt="Monarch Money Financial Dashboard" 
                className="relative w-full h-auto rounded-2xl shadow-medium hover:shadow-glow transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Everything you need to master your money
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Powerful tools and insights to help you save more, spend wisely, and build lasting financial health.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="border-0 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary text-white flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Trusted by thousands of smart savers
            </h2>
            <p className="text-xl text-muted-foreground">
              See how Monarch Money is helping people achieve their financial goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="border-0 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold text-white">
            Ready to transform your financial future?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join thousands who've already started their journey to financial freedom with Monarch Money.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-8 py-6 bg-white text-primary hover:bg-white/90 shadow-medium"
              asChild
            >
              <Link to="/dashboard">
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-white/30 text-white hover:bg-white/10"
              asChild
            >
              <Link to="/learn">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
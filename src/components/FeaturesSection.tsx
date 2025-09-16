import { Truck, Shield, Headphones, CreditCard } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Truck,
      title: "Ship It Free",
      description: "Free delivery on all qualifying orders, straight to your door.",
    },
    {
      icon: Shield,
      title: "Money-Back Guarantee",
      description: "Return your item for a full refund if it doesn't meet your expectations.",
    },
    {
      icon: Headphones,
      title: "24/7 Customer Support",
      description: "Our team is available 24/7 to address your inquiries.",
    },
    {
      icon: CreditCard,
      title: "Safe Checkout",
      description: "Your payment details are always protected with advanced security.",
    },
  ];

  return (
    <section className="py-16 bg-neutral-100">
      <div className="container-width section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-primary-foreground rounded-lg mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
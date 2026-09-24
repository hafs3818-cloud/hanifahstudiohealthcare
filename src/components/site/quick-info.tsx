import { Ambulance, Award, Clock, Users } from "lucide-react";

const items = [
  {
    icon: Ambulance,
    title: "Same day urgent visits",
    description:
      "Call before noon and we will fit you in the same day for urgent concerns that are not emergencies.",
  },
  {
    icon: Users,
    title: "Doctors who stay",
    description:
      "Our average physician has been with Cedar Health for over a decade. You will see the same faces.",
  },
  {
    icon: Clock,
    title: "Evening and Saturday hours",
    description:
      "We keep weekday evening and Saturday hours so work and school do not have to wait.",
  },
  {
    icon: Award,
    title: "Family owned since 1984",
    description:
      "Founded by Dr. Robert Cedar, the clinic is still locally owned and rooted in this community.",
  },
];

export function QuickInfo() {
  return (
    <section className="relative -mt-8 lg:-mt-12 z-10">
      <div className="container mx-auto px-4">
        <div className="bg-background rounded-2xl lg:rounded-3xl shadow-xl shadow-primary/10 border border-border p-6 lg:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {items.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 items-start group"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

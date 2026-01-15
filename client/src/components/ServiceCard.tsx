import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export function ServiceCard({ title, description, icon: Icon, className }: ServiceCardProps) {
  return (
    <Card className={cn(
      "group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-border/50 bg-white",
      className
    )}>
      <div className="absolute top-0 left-0 w-1 h-full bg-primary transform origin-top scale-y-0 transition-transform duration-300 group-hover:scale-y-100" />
      
      <CardHeader className="pb-4">
        <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
          <Icon className="w-6 h-6" />
        </div>
        <CardTitle className="text-xl font-bold font-display text-slate-800 group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <p className="text-muted-foreground leading-relaxed text-sm md:text-base group-hover:text-slate-600 transition-colors">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

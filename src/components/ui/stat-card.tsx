import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative" | "neutral";
  icon?: ReactNode;
  description?: string;
  className?: string;
  variant?: "default" | "gradient" | "glass";
}

export function StatCard({
  title,
  value,
  change,
  changeType = "neutral",
  icon,
  description,
  className,
  variant = "default"
}: StatCardProps) {
  const getChangeColor = () => {
    switch (changeType) {
      case "positive":
        return "text-success";
      case "negative":
        return "text-destructive";
      default:
        return "text-muted-foreground";
    }
  };

  const cardVariants = {
    default: "bg-card shadow-soft",
    gradient: "gradient-card shadow-medium",
    glass: "glass shadow-soft"
  };

  return (
    <Card className={cn(
      "border-0 transition-all duration-300 hover:shadow-glow hover:-translate-y-1",
      cardVariants[variant],
      className
    )}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">
              {title}
            </p>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-foreground">
                {value}
              </p>
              {change && (
                <p className={cn("text-sm font-medium", getChangeColor())}>
                  {change}
                </p>
              )}
              {description && (
                <p className="text-xs text-muted-foreground">
                  {description}
                </p>
              )}
            </div>
          </div>
          {icon && (
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              {icon}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
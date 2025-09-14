import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Plus,
  Target,
  Calendar,
  TrendingUp,
  CheckCircle,
  Clock,
  DollarSign
} from "lucide-react";

const goals = [
  {
    id: 1,
    name: "Emergency Fund",
    description: "Build a safety net for unexpected expenses",
    targetAmount: 100000,
    currentAmount: 45000,
    targetDate: "2024-12-31",
    priority: "high",
    status: "active",
    monthlyContribution: 5000
  },
  {
    id: 2,
    name: "Vacation to Goa",
    description: "Family trip to Goa next summer",
    targetAmount: 50000,
    currentAmount: 18000,
    targetDate: "2024-06-15",
    priority: "medium",
    status: "active", 
    monthlyContribution: 3000
  },
  {
    id: 3,
    name: "New Laptop",
    description: "MacBook Pro for work",
    targetAmount: 80000,
    currentAmount: 32000,
    targetDate: "2024-08-30",
    priority: "medium",
    status: "active",
    monthlyContribution: 4000
  },
  {
    id: 4,
    name: "Home Down Payment",
    description: "Save for house down payment",
    targetAmount: 500000,
    currentAmount: 125000,
    targetDate: "2025-12-31",
    priority: "high",
    status: "active",
    monthlyContribution: 15000
  }
];

const priorityColors = {
  high: "bg-destructive text-destructive-foreground",
  medium: "bg-warning text-warning-foreground",
  low: "bg-muted text-muted-foreground"
};

const statusColors = {
  active: "bg-primary text-primary-foreground",
  completed: "bg-success text-success-foreground",
  paused: "bg-muted text-muted-foreground"
};

export default function Goals() {
  const [isAddGoalOpen, setIsAddGoalOpen] = useState(false);

  const calculateProgress = (current: number, target: number) => {
    return Math.round((current / target) * 100);
  };

  const calculateMonthsRemaining = (targetDate: string) => {
    const now = new Date();
    const target = new Date(targetDate);
    const diffTime = target.getTime() - now.getTime();
    const diffMonths = Math.ceil(diffTime / (1000 * 60 * 60 * 24 * 30));
    return diffMonths;
  };

  const totalSaved = goals.reduce((sum, goal) => sum + goal.currentAmount, 0);
  const totalTarget = goals.reduce((sum, goal) => sum + goal.targetAmount, 0);
  const overallProgress = Math.round((totalSaved / totalTarget) * 100);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Savings Goals
          </h1>
          <p className="text-muted-foreground">
            Track your progress towards financial milestones
          </p>
        </div>
        <Dialog open={isAddGoalOpen} onOpenChange={setIsAddGoalOpen}>
          <DialogTrigger asChild>
            <Button className="gradient-primary shadow-soft hover:shadow-glow">
              <Plus className="w-4 h-4 mr-2" />
              Add Goal
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Create New Goal</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="goalName">Goal Name</Label>
                <Input
                  id="goalName"
                  placeholder="e.g., Emergency Fund"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  placeholder="Brief description of your goal"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="targetAmount">Target Amount (₹)</Label>
                <Input
                  id="targetAmount"
                  type="number"
                  placeholder="100000"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="targetDate">Target Date</Label>
                <Input
                  id="targetDate"
                  type="date"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="monthlyContribution">Monthly Contribution (₹)</Label>
                <Input
                  id="monthlyContribution"
                  type="number"
                  placeholder="5000"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setIsAddGoalOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  className="flex-1 gradient-primary"
                  onClick={() => setIsAddGoalOpen(false)}
                >
                  Create Goal
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-soft border-0 gradient-card">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Saved
                </p>
                <p className="text-2xl font-bold text-foreground">
                  ₹{totalSaved.toLocaleString()}
                </p>
              </div>
              <div className="p-2 rounded-lg bg-success/10 text-success">
                <DollarSign className="w-5 h-5" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Target
                </p>
                <p className="text-2xl font-bold text-foreground">
                  ₹{totalTarget.toLocaleString()}
                </p>
              </div>
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Target className="w-5 h-5" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Overall Progress
                </p>
                <p className="text-2xl font-bold text-foreground">
                  {overallProgress}%
                </p>
              </div>
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {goals.map((goal) => {
          const progress = calculateProgress(goal.currentAmount, goal.targetAmount);
          const monthsRemaining = calculateMonthsRemaining(goal.targetDate);
          const remainingAmount = goal.targetAmount - goal.currentAmount;

          return (
            <Card key={goal.id} className="shadow-soft border-0 hover:shadow-medium transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <CardTitle className="text-lg font-semibold">
                      {goal.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {goal.description}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Badge className={priorityColors[goal.priority as keyof typeof priorityColors]}>
                      {goal.priority}
                    </Badge>
                    <Badge className={statusColors[goal.status as keyof typeof statusColors]}>
                      {goal.status}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Progress */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-muted-foreground">
                      Progress
                    </span>
                    <span className="text-sm font-bold text-foreground">
                      {progress}%
                    </span>
                  </div>
                  <Progress value={progress} className="h-3" />
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground font-medium">
                      ₹{goal.currentAmount.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground">
                      of ₹{goal.targetAmount.toLocaleString()}
                    </span>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                  <div className="text-center">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted/50 mx-auto mb-2">
                      <DollarSign className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <p className="text-xs text-muted-foreground">Remaining</p>
                    <p className="text-sm font-bold text-foreground">
                      ₹{remainingAmount.toLocaleString()}
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted/50 mx-auto mb-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <p className="text-xs text-muted-foreground">Months Left</p>
                    <p className="text-sm font-bold text-foreground">
                      {monthsRemaining}
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted/50 mx-auto mb-2">
                      <TrendingUp className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <p className="text-xs text-muted-foreground">Monthly</p>
                    <p className="text-sm font-bold text-foreground">
                      ₹{goal.monthlyContribution.toLocaleString()}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Add Money
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1">
                    Edit Goal
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Achievement Section */}
      <Card className="shadow-soft border-0 gradient-hero text-white">
        <CardContent className="p-8 text-center">
          <div className="space-y-4">
            <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold">
              You're doing great!
            </h3>
            <p className="text-white/90 max-w-md mx-auto">
              You've saved ₹{totalSaved.toLocaleString()} towards your goals. 
              Keep up the momentum to achieve your financial dreams!
            </p>
            <Button variant="secondary" className="mt-4">
              View Achievements
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
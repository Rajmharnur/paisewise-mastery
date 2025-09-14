import { StatCard } from "@/components/ui/stat-card";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Target,
  CreditCard,
  PiggyBank,
  AlertTriangle,
  Plus,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

const recentTransactions = [
  {
    id: 1,
    description: "Grocery Shopping - BigBazar",
    amount: -2450,
    category: "Food & Dining",
    date: "Today, 2:30 PM",
    type: "expense"
  },
  {
    id: 2,
    description: "Salary Credit",
    amount: 85000,
    category: "Income",
    date: "Yesterday, 9:00 AM",
    type: "income"
  },
  {
    id: 3,
    description: "Netflix Subscription",
    amount: -649,
    category: "Entertainment",
    date: "2 days ago",
    type: "expense"
  },
  {
    id: 4,
    description: "Fuel - Indian Oil",
    amount: -3200,
    category: "Transportation",
    date: "3 days ago",
    type: "expense"
  }
];

const savingsGoals = [
  {
    name: "Emergency Fund",
    current: 45000,
    target: 100000,
    progress: 45,
    color: "bg-success"
  },
  {
    name: "Vacation Trip",
    current: 18000,
    target: 50000,
    progress: 36,
    color: "bg-primary"
  },
  {
    name: "New Laptop",
    current: 32000,
    target: 80000,
    progress: 40,
    color: "bg-accent"
  }
];

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Welcome back, Raj 👋
          </h1>
          <p className="text-muted-foreground">
            Here's your financial snapshot for this month
          </p>
        </div>
        <Button className="gradient-primary shadow-soft hover:shadow-glow">
          <Plus className="w-4 h-4 mr-2" />
          Add Transaction
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Balance"
          value="₹2,45,678"
          change="+12.5% from last month"
          changeType="positive"
          icon={<DollarSign className="w-5 h-5" />}
          variant="gradient"
        />
        <StatCard
          title="Monthly Income"
          value="₹85,000"
          change="+5.2% from last month"
          changeType="positive"
          icon={<TrendingUp className="w-5 h-5" />}
        />
        <StatCard
          title="Monthly Expenses"
          value="₹52,340"
          change="-3.1% from last month"
          changeType="positive"
          icon={<CreditCard className="w-5 h-5" />}
        />
        <StatCard
          title="Savings Rate"
          value="38.4%"
          change="+2.1% from last month"
          changeType="positive"
          icon={<PiggyBank className="w-5 h-5" />}
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Transactions */}
        <div className="lg:col-span-2">
          <Card className="shadow-soft border-0">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl font-semibold">Recent Transactions</CardTitle>
              <Button variant="ghost" size="sm">
                View All
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-lg ${
                      transaction.type === 'income' 
                        ? 'bg-success/10 text-success' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {transaction.type === 'income' ? (
                        <ArrowUpRight className="w-4 h-4" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {transaction.description}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {transaction.category} • {transaction.date}
                      </p>
                    </div>
                  </div>
                  <div className={`font-semibold ${
                    transaction.amount > 0 ? 'text-success' : 'text-foreground'
                  }`}>
                    {transaction.amount > 0 ? '+' : ''}₹{Math.abs(transaction.amount).toLocaleString()}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Savings Goals */}
        <div className="space-y-6">
          <Card className="shadow-soft border-0">
            <CardHeader>
              <CardTitle className="text-xl font-semibold flex items-center">
                <Target className="w-5 h-5 mr-2 text-primary" />
                Savings Goals
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {savingsGoals.map((goal, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-foreground">{goal.name}</p>
                    <span className="text-sm text-muted-foreground">
                      {goal.progress}%
                    </span>
                  </div>
                  <Progress value={goal.progress} className="h-2" />
                  <div className="flex justify-between text-sm">
                    <span className="text-foreground font-medium">
                      ₹{goal.current.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground">
                      of ₹{goal.target.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full">
                <Plus className="w-4 h-4 mr-2" />
                Add New Goal
              </Button>
            </CardContent>
          </Card>

          {/* Budget Alert */}
          <Card className="shadow-soft border-0 border-l-4 border-l-warning">
            <CardContent className="p-6">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-5 h-5 text-warning mt-0.5" />
                <div className="space-y-2">
                  <p className="font-medium text-foreground">
                    Budget Alert
                  </p>
                  <p className="text-sm text-muted-foreground">
                    You're 80% through your dining budget with 12 days left this month.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-sm">
                    Adjust Budget →
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
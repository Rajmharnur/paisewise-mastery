import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
  Search,
  Filter,
  Download,
  Calendar,
  TrendingDown,
  TrendingUp,
  Minus
} from "lucide-react";

const categories = [
  "Food & Dining",
  "Transportation",
  "Shopping",
  "Entertainment",
  "Bills & Utilities",
  "Healthcare",
  "Education",
  "Travel",
  "Other"
];

const expenses = [
  {
    id: 1,
    description: "Lunch at Cafe Coffee Day",
    amount: 450,
    category: "Food & Dining",
    date: "2024-01-15",
    paymentMethod: "UPI"
  },
  {
    id: 2,
    description: "Metro Card Recharge",
    amount: 500,
    category: "Transportation",
    date: "2024-01-14",
    paymentMethod: "Debit Card"
  },
  {
    id: 3,
    description: "Netflix Subscription",
    amount: 649,
    category: "Entertainment",
    date: "2024-01-13",
    paymentMethod: "Credit Card"
  },
  {
    id: 4,
    description: "Grocery Shopping",
    amount: 2450,
    category: "Food & Dining",
    date: "2024-01-12",
    paymentMethod: "Cash"
  },
  {
    id: 5,
    description: "Book Purchase",
    amount: 799,
    category: "Education",
    date: "2024-01-11",
    paymentMethod: "UPI"
  }
];

const categoryColors = {
  "Food & Dining": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  "Transportation": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  "Shopping": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  "Entertainment": "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
  "Bills & Utilities": "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  "Healthcare": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  "Education": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  "Travel": "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-300",
  "Other": "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
};

export default function Expenses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isAddExpenseOpen, setIsAddExpenseOpen] = useState(false);

  const filteredExpenses = expenses.filter(expense => {
    const matchesSearch = expense.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || expense.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const thisMonthExpenses = expenses
    .filter(expense => new Date(expense.date).getMonth() === new Date().getMonth())
    .reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Expense Tracker
          </h1>
          <p className="text-muted-foreground">
            Track and categorize all your expenses
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Dialog open={isAddExpenseOpen} onOpenChange={setIsAddExpenseOpen}>
            <DialogTrigger asChild>
              <Button className="gradient-primary shadow-soft hover:shadow-glow">
                <Plus className="w-4 h-4 mr-2" />
                Add Expense
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Add New Expense</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Input
                    id="description"
                    placeholder="Enter expense description"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount (₹)</Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0.00"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    defaultValue={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="payment">Payment Method</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cash">Cash</SelectItem>
                      <SelectItem value="upi">UPI</SelectItem>
                      <SelectItem value="debit">Debit Card</SelectItem>
                      <SelectItem value="credit">Credit Card</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-3 pt-4">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setIsAddExpenseOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="flex-1 gradient-primary"
                    onClick={() => setIsAddExpenseOpen(false)}
                  >
                    Add Expense
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="shadow-soft border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  This Month
                </p>
                <p className="text-2xl font-bold text-foreground">
                  ₹{thisMonthExpenses.toLocaleString()}
                </p>
              </div>
              <div className="p-2 rounded-lg bg-destructive/10 text-destructive">
                <TrendingDown className="w-5 h-5" />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card className="shadow-soft border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Total Expenses
                </p>
                <p className="text-2xl font-bold text-foreground">
                  ₹{totalExpenses.toLocaleString()}
                </p>
              </div>
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Minus className="w-5 h-5" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-soft border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Average/Day
                </p>
                <p className="text-2xl font-bold text-foreground">
                  ₹{Math.round(thisMonthExpenses / new Date().getDate()).toLocaleString()}
                </p>
              </div>
              <div className="p-2 rounded-lg bg-accent/10 text-accent">
                <Calendar className="w-5 h-5" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card className="shadow-soft border-0">
        <CardHeader>
          <CardTitle className="text-xl font-semibold">All Expenses</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search expenses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full sm:w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Expenses List */}
          <div className="space-y-4">
            {filteredExpenses.map((expense) => (
              <div
                key={expense.id}
                className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 rounded-lg bg-muted">
                    <Minus className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      {expense.description}
                    </p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge 
                        variant="secondary" 
                        className={categoryColors[expense.category as keyof typeof categoryColors]}
                      >
                        {expense.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {new Date(expense.date).toLocaleDateString()} • {expense.paymentMethod}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-foreground">
                    -₹{expense.amount.toLocaleString()}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredExpenses.length === 0 && (
            <div className="text-center py-8">
              <p className="text-muted-foreground">
                No expenses found matching your criteria.
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
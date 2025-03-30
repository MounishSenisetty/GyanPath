import React from 'react';
import { Book, Trophy, Star, Clock } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Dashboard = () => {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Welcome back, Student!</h1>
          <p className="text-lg opacity-90">Continue your learning journey with personalized courses and AI-powered assistance.</p>
        </div>
      </section>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={Book}
          label="Courses"
          value="5"
          subtext="In Progress"
        />
        <StatCard
          icon={Trophy}
          label="Achievements"
          value="12"
          subtext="Unlocked"
        />
        <StatCard
          icon={Star}
          label="Streak"
          value="7"
          subtext="Days"
        />
        <StatCard
          icon={Clock}
          label="Study Time"
          value="24h"
          subtext="This Week"
        />
      </div>

      {/* Progress Section */}
      <section className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-6">Your Progress</h2>
        <div className="space-y-6">
          <ProgressItem
            title="Mathematics"
            progress={75}
            color="bg-blue-500"
          />
          <ProgressItem
            title="Science"
            progress={60}
            color="bg-green-500"
          />
          <ProgressItem
            title="English"
            progress={90}
            color="bg-purple-500"
          />
        </div>
      </section>
    </div>
  );
};

const StatCard = ({ icon: Icon, label, value, subtext }) => (
  <div className="bg-white rounded-xl p-6 shadow-sm">
    <div className="flex items-start justify-between">
      <div>
        <p className="text-gray-600 text-sm">{label}</p>
        <p className="text-3xl font-bold mt-1">{value}</p>
        <p className="text-gray-500 text-sm mt-1">{subtext}</p>
      </div>
      <Icon className="h-6 w-6 text-primary" />
    </div>
  </div>
);

const ProgressItem = ({ title, progress, color }) => (
  <div className="space-y-2">
    <div className="flex justify-between items-center">
      <h3 className="font-medium">{title}</h3>
      <span className="text-sm text-gray-600">{progress}%</span>
    </div>
    <Progress value={progress} className="h-2" />
  </div>
);

export default Dashboard;
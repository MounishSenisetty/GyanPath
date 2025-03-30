import React from 'react';
import { Calendar, Clock, Target, Award, TrendingUp, BookOpen } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const ProgressPage = () => {
  const subjects = [
    {
      name: "Mathematics",
      progress: 75,
      topics: 24,
      hoursSpent: 45,
      lastActivity: "2 hours ago",
      streak: 15
    },
    {
      name: "Physics",
      progress: 60,
      topics: 18,
      hoursSpent: 32,
      lastActivity: "1 day ago",
      streak: 8
    },
    {
      name: "Chemistry",
      progress: 85,
      topics: 30,
      hoursSpent: 50,
      lastActivity: "5 hours ago",
      streak: 12
    }
  ];

  const achievements = [
    { name: "Quick Learner", date: "March 15, 2024", points: 500 },
    { name: "Problem Solver", date: "March 12, 2024", points: 300 },
    { name: "Knowledge Seeker", date: "March 10, 2024", points: 400 }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Your Learning Progress</h1>
          <p className="text-lg opacity-90">Track your journey and celebrate your achievements.</p>
        </div>
      </section>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center space-x-4">
            <Clock className="h-8 w-8 text-primary" />
            <div>
              <p className="text-gray-600">Total Study Time</p>
              <p className="text-2xl font-bold">127 hours</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center space-x-4">
            <Target className="h-8 w-8 text-primary" />
            <div>
              <p className="text-gray-600">Completed Topics</p>
              <p className="text-2xl font-bold">72 topics</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center space-x-4">
            <Calendar className="h-8 w-8 text-primary" />
            <div>
              <p className="text-gray-600">Current Streak</p>
              <p className="text-2xl font-bold">15 days</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subject Progress */}
      <section className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <BookOpen className="h-6 w-6 mr-2 text-primary" />
          Subject Progress
        </h2>
        <div className="space-y-6">
          {subjects.map((subject) => (
            <div key={subject.name} className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-lg">{subject.name}</h3>
                <span className="text-sm text-gray-600">
                  Last activity: {subject.lastActivity}
                </span>
              </div>
              <div className="space-y-2">
                <Progress value={subject.progress} className="h-2" />
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{subject.progress}% complete</span>
                  <span>{subject.topics} topics</span>
                  <span>{subject.hoursSpent} hours spent</span>
                  <span>{subject.streak} day streak</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Achievements */}
      <section className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <Award className="h-6 w-6 mr-2 text-primary" />
          Recent Achievements
        </h2>
        <div className="space-y-4">
          {achievements.map((achievement) => (
            <div
              key={achievement.name}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <Award className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-semibold">{achievement.name}</h3>
                  <p className="text-sm text-gray-600">{achievement.date}</p>
                </div>
              </div>
              <div className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                +{achievement.points} points
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProgressPage;
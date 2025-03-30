import React from 'react';
import { Trophy, Star, Medal, Crown, Users } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Leaderboard = () => {
  const leaderboardData = [
    {
      rank: 1,
      name: "Priya Sharma",
      points: 2500,
      streak: 15,
      badges: 8,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      rank: 2,
      name: "Rahul Kumar",
      points: 2350,
      streak: 12,
      badges: 7,
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop"
    },
    {
      rank: 3,
      name: "Anita Patel",
      points: 2200,
      streak: 10,
      badges: 6,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    }
  ];

  const achievements = [
    { icon: Star, label: "Quick Learner", description: "Complete 5 lessons in a day" },
    { icon: Medal, label: "Math Wizard", description: "Score 100% in 3 math quizzes" },
    { icon: Crown, label: "Knowledge Champion", description: "Top 3 in weekly rankings" },
    { icon: Users, label: "Team Player", description: "Help 5 students in community" }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Leaderboard</h1>
          <p className="text-lg opacity-90">Compete with fellow learners and earn achievements!</p>
        </div>
      </section>

      {/* Top Performers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {leaderboardData.map((user) => (
          <div key={user.rank} className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="absolute -top-2 -right-2 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  #{user.rank}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg">{user.name}</h3>
                <p className="text-gray-600">{user.points} points</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="text-center p-2 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Streak</p>
                <p className="font-bold text-primary">{user.streak} days</p>
              </div>
              <div className="text-center p-2 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600">Badges</p>
                <p className="font-bold text-primary">{user.badges}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <section className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <Trophy className="h-6 w-6 mr-2 text-primary" />
          Available Achievements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement) => {
            const Icon = achievement.icon;
            return (
              <div
                key={achievement.label}
                className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <Icon className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">{achievement.label}</h3>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Weekly Challenges */}
      <section className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-6">Weekly Challenges</h2>
        <div className="space-y-4">
          <Challenge
            title="Mathematics Marathon"
            description="Complete 20 math problems with 90% accuracy"
            progress={65}
            reward="500 points"
          />
          <Challenge
            title="Science Explorer"
            description="Watch and summarize 5 science videos"
            progress={40}
            reward="300 points"
          />
          <Challenge
            title="Language Master"
            description="Practice vocabulary for 30 minutes daily"
            progress={85}
            reward="400 points"
          />
        </div>
      </section>
    </div>
  );
};

const Challenge = ({
  title,
  description,
  progress,
  reward
}: {
  title: string;
  description: string;
  progress: number;
  reward: string;
}) => (
  <div className="border rounded-lg p-4">
    <div className="flex justify-between items-start mb-2">
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
        {reward}
      </div>
    </div>
    <div className="space-y-2">
      <Progress value={progress} className="h-2" />
      <div className="flex justify-between text-sm">
        <span className="text-gray-600">Progress</span>
        <span className="font-medium">{progress}%</span>
      </div>
    </div>
  </div>
);

export default Leaderboard;
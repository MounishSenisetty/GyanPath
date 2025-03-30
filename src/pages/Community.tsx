import React from 'react';
import { Users, MessageSquare, Heart, Share2, BookOpen, Award } from 'lucide-react';

const Community = () => {
  const discussions = [
    {
      id: 1,
      user: {
        name: "Priya Sharma",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
        badge: "Top Contributor"
      },
      title: "Understanding Quantum Physics",
      content: "Can someone explain the double-slit experiment in simple terms? I'm having trouble grasping the concept.",
      subject: "Physics",
      likes: 24,
      replies: 8,
      timeAgo: "2 hours ago"
    },
    {
      id: 2,
      user: {
        name: "Rahul Kumar",
        avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop",
        badge: "Physics Expert"
      },
      title: "Calculus Problem Help",
      content: "I'm stuck on this integration problem. Any help would be appreciated!",
      subject: "Mathematics",
      likes: 15,
      replies: 12,
      timeAgo: "4 hours ago"
    },
    {
      id: 3,
      user: {
        name: "Anita Patel",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
        badge: "Rising Star"
      },
      title: "English Grammar Question",
      content: "What's the difference between 'affect' and 'effect'? I always get confused.",
      subject: "English",
      likes: 19,
      replies: 6,
      timeAgo: "1 day ago"
    }
  ];

  const topContributors = [
    {
      name: "Dr. Sharma",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      contributions: 156,
      expertise: "Mathematics"
    },
    {
      name: "Prof. Kumar",
      avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop",
      contributions: 143,
      expertise: "Physics"
    },
    {
      name: "Ms. Gupta",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
      contributions: 128,
      expertise: "Chemistry"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Learning Community</h1>
          <p className="text-lg opacity-90">Connect, share, and learn together with fellow students.</p>
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Discussion List */}
          <div className="space-y-6">
            {discussions.map((discussion) => (
              <div key={discussion.id} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <img
                    src={discussion.user.avatar}
                    alt={discussion.user.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold">{discussion.user.name}</h3>
                      <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                        {discussion.user.badge}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{discussion.timeAgo}</p>
                    <h2 className="text-lg font-semibold mb-2">{discussion.title}</h2>
                    <p className="text-gray-600 mb-4">{discussion.content}</p>
                    <div className="flex items-center space-x-6 text-sm text-gray-600">
                      <button className="flex items-center space-x-2 hover:text-primary transition-colors">
                        <Heart className="h-4 w-4" />
                        <span>{discussion.likes}</span>
                      </button>
                      <button className="flex items-center space-x-2 hover:text-primary transition-colors">
                        <MessageSquare className="h-4 w-4" />
                        <span>{discussion.replies} replies</span>
                      </button>
                      <button className="flex items-center space-x-2 hover:text-primary transition-colors">
                        <Share2 className="h-4 w-4" />
                        <span>Share</span>
                      </button>
                      <span className="flex items-center space-x-2">
                        <BookOpen className="h-4 w-4" />
                        <span>{discussion.subject}</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Top Contributors */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Award className="h-5 w-5 mr-2 text-primary" />
              Top Contributors
            </h2>
            <div className="space-y-4">
              {topContributors.map((contributor) => (
                <div key={contributor.name} className="flex items-center space-x-4">
                  <img
                    src={contributor.avatar}
                    alt={contributor.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{contributor.name}</h3>
                    <p className="text-sm text-gray-600">{contributor.expertise}</p>
                  </div>
                  <div className="text-sm text-primary font-medium">
                    {contributor.contributions} answers
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Community Stats */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 flex items-center">
              <Users className="h-5 w-5 mr-2 text-primary" />
              Community Stats
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Active Members</span>
                <span className="font-semibold">1,234</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Questions Asked</span>
                <span className="font-semibold">456</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Answers Given</span>
                <span className="font-semibold">789</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
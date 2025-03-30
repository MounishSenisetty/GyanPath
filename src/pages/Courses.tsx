import React from 'react';
import { Book, Clock, Star, Users, PlayCircle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Mathematics Fundamentals",
      description: "Master essential mathematical concepts from arithmetic to algebra",
      instructor: "Dr. Priya Sharma",
      duration: "8 weeks",
      enrolled: 1250,
      rating: 4.8,
      progress: 65,
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop"
    },
    {
      id: 2,
      title: "Physics for Beginners",
      description: "Understanding basic physics principles through interactive lessons",
      instructor: "Prof. Rahul Kumar",
      duration: "10 weeks",
      enrolled: 980,
      rating: 4.7,
      progress: 30,
      image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=800&h=400&fit=crop"
    },
    {
      id: 3,
      title: "English Communication",
      description: "Improve your English speaking and writing skills",
      instructor: "Ms. Sarah Johnson",
      duration: "6 weeks",
      enrolled: 1500,
      rating: 4.9,
      progress: 85,
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=400&fit=crop"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">Your Learning Journey</h1>
          <p className="text-lg opacity-90">Explore our curated courses designed for your success.</p>
        </div>
      </section>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="relative h-48">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                <PlayCircle className="h-12 w-12 text-white opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 mb-4">{course.description}</p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-1" />
                    {course.enrolled} students
                  </div>
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-4 w-4 mr-1" />
                    {course.rating}
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium">{course.progress}%</span>
                  </div>
                  <Progress value={course.progress} className="h-2" />
                </div>

                <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-600 transition-colors">
                  Continue Learning
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
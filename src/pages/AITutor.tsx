import React, { useState } from 'react';
import { Send, Book, Brain, MessageSquare, Trophy, Languages } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const AITutor = () => {
  const [message, setMessage] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('english');
  const [selectedSubject, setSelectedSubject] = useState('mathematics');

  const languages = [
    { id: 'english', name: 'English' },
    { id: 'hindi', name: 'हिंदी' },
    { id: 'tamil', name: 'தமிழ்' },
    { id: 'telugu', name: 'తెలుగు' },
  ];

  const subjects = [
    { id: 'mathematics', name: 'Mathematics', icon: Brain },
    { id: 'science', name: 'Science', icon: Book },
    { id: 'english', name: 'English', icon: MessageSquare },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold mb-4">AI Learning Assistant</h1>
          <p className="text-lg opacity-90">Get personalized help with your studies in your preferred language.</p>
        </div>
      </section>

      {/* Language and Subject Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Languages className="h-5 w-5 mr-2" />
            Select Language
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {languages.map((lang) => (
              <button
                key={lang.id}
                onClick={() => setSelectedLanguage(lang.id)}
                className={`p-3 rounded-lg text-left transition-colors ${
                  selectedLanguage === lang.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Book className="h-5 w-5 mr-2" />
            Select Subject
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {subjects.map((subject) => {
              const Icon = subject.icon;
              return (
                <button
                  key={subject.id}
                  onClick={() => setSelectedSubject(subject.id)}
                  className={`p-3 rounded-lg text-left flex items-center transition-colors ${
                    selectedSubject === subject.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  {subject.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Chat Interface */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="h-[500px] flex flex-col">
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            {/* Sample messages - To be replaced with actual chat history */}
            <Message
              type="assistant"
              content="Hello! I'm your AI tutor. How can I help you with your studies today?"
            />
          </div>
          <div className="border-t p-4">
            <div className="flex space-x-4">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask any question..."
                className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <button
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary-600 transition-colors flex items-center"
              >
                <Send className="h-4 w-4 mr-2" />
                Send
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Learning Progress */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-xl font-semibold mb-6 flex items-center">
          <Trophy className="h-5 w-5 mr-2" />
          Learning Progress
        </h2>
        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Questions Asked</h3>
              <span className="text-sm text-gray-600">24</span>
            </div>
            <Progress value={24} max={100} className="h-2" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="font-medium">Concepts Mastered</h3>
              <span className="text-sm text-gray-600">12</span>
            </div>
            <Progress value={12} max={50} className="h-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Message = ({ type, content }: { type: 'user' | 'assistant'; content: string }) => (
  <div className={`flex ${type === 'user' ? 'justify-end' : 'justify-start'}`}>
    <div
      className={`max-w-[80%] rounded-lg p-4 ${
        type === 'user'
          ? 'bg-primary text-white'
          : 'bg-gray-100 text-gray-900'
      }`}
    >
      {content}
    </div>
  </div>
);

export default AITutor;
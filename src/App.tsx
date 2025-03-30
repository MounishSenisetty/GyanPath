import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Book, Trophy, Users, Brain } from 'lucide-react';
import Navigation from './components/Navigation';
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import AITutor from './pages/AITutor';
import ProgressPage from './pages/Progress';
import Leaderboard from './pages/Leaderboard';
import Community from './pages/Community';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/ai-tutor" element={<AITutor />} />
            <Route path="/progress" element={<ProgressPage />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
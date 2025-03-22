import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { FeatureCard } from './components/FeatureCard';
import { QuizModal } from './components/QuizModal';
import { features } from './data/features';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

import './styles/App.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showQuizModal, setShowQuizModal] = useState(false);

  useEffect(() => {
    if (darkMode) document.body.classList.add('dark-mode');
    else document.body.classList.remove('dark-mode');
  }, [darkMode]);

  return (
    <div>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <div className="features">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} setLoading={setLoading} />
          ))}
        </div>
      </main>
      <QuizModal showQuizModal={showQuizModal} setShowQuizModal={setShowQuizModal} />
    </div>
  );
};

export default App;

import React from 'react';
import { Brain, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = ({ darkMode, setDarkMode }) => (
  <header className="bg-white shadow-sm fixed w-full top-0 z-50">
    <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Brain className="text-blue-600" />
        <h1 className="text-xl font-bold text-gray-800">StudyAI</h1>
      </div>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun /> : <Moon />}
        </Button>
        <Button>Sign In</Button>
      </div>
    </nav>
  </header>
);

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        document.body.classList.toggle('dark', !isDarkMode);
    };

    return (
        <div className={`bg-gray-50 ${isDarkMode ? 'dark' : ''}`}>
            <Header toggleTheme={toggleTheme} />
            <main className="container mx-auto px-4 pt-24 pb-12">
                <Hero />
                <Features />
                <Pricing />
                <Testimonials />
            </main>
            <Footer />
        </div>
    );
};

export default App;
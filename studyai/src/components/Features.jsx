import React, { useState } from 'react';

const featuresData = [
    {
        icon: "bi-file-pdf",
        title: "PDF Analyzer",
        
        description: "Upload your study materials and get AI-generated insights, key topics, and predicted questions."
    },
    {
        icon: "bi-chat-dots",
        title: "AI Tutor",
        description: "Chat with AI to get instant explanations and step-by-step solutions from your notes."
    },
    {
        icon: "bi-camera-video",
        title: "Video to Notes",
        description: "Convert video lectures into structured notes with auto-generated diagrams and flashcards."
    },
    {
        icon: "bi-question-circle",
        title: "Quiz Generator",
        description: "Generate practice tests from your materials with multiple question types and instant feedback."
    },
    {
        icon: "bi-graph-up",
        title: "Smart Learning Dashboard",
        description: "Track your progress, identify weaknesses, and get personalized study plans based on your performance."
    }
];

const featureCardStyle = {
    height: '300px',
    width: '380px',
    border: '1px solid #E2E8F0',
    borderRadius: '8px',
    padding: '16px',
    margin: '16px',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    background: 'linear-gradient(145deg, #ffffff, #e6e6e6)', // Gradient background
    boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px rgba(255, 255, 255, 0.5)', // 3D shadow effect
};




const hoverStyle = {
    transform: 'translateY(-5px)', // Lift the card up
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)', // Enhanced shadow on hover
};

const Features = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            <div style={{ display: 'flex', justifyContent: 'center', color: 'black', fontSize: '20px', fontWeight: 'bold',}}>
            AI-Powered Learning Tools

            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {featuresData.map((feature, index) => (
                    <div
                        key={index}
                        style={{
                            ...featureCardStyle,
                            ...(hoveredIndex === index ? hoverStyle : {}),
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <div className="feature-icon">
                            <i className={`bi ${feature.icon}`} style={{ fontSize: '24px', color: '#3182CE' }}></i>
                        </div>
                        <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}>{feature.title}</h2>
                        <p style={{ color: '#4A5568' }}>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;

import React from 'react';
import { BsJustify } from 'react-icons/bs';

const heroStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: '48px 16px',
    textAlign: 'center',
};



const heroTitleStyle = {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '16px',
    width: '76%',
    color: 'black',
};

const highlightStyle = {
    color: '#3182CE',
};

const heroDescriptionStyle = {
    color: '#4A5568',
    fontSize: '18px',
    marginBottom: '24px',
};

const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
};

const buttonStyle = {
    padding: '12px 24px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    margin: '8px',
};

const Hero = () => {
    return (
        <section style={heroStyle}>
            <div style={{display: 'flex',flexDirection: 'column' , width: '50%'}}>

                <h2 style={heroTitleStyle}>
                    Transform Your Learning with <span style={highlightStyle}>AI-Powered</span> Study Tools
                </h2>
                <p style={heroDescriptionStyle}>
                    Unlock the power of artificial intelligence to enhance your study experience. Generate notes, quizzes, and get personalized learning recommendations.
                </p>
                <div style={buttonContainerStyle}>
                    <button style={{ ...buttonStyle, backgroundColor: '#3182CE', color: '#ffffff' }}>Get Started Free</button>
                    <button style={{ ...buttonStyle, backgroundColor: '#ffffff', border: '1px solid #E2E8F0', color: 'black'}}>
                        <i className="bi bi-play-fill"></i> Watch Demo
                    </button>
                </div>
            </div>
            <div>
                <img src=".\assets\studyai1.jpg" alt="Student using StudyAI" style={{ borderRadius: '8px', maxHeight: '400px', objectFit: 'cover' }} />
            </div>
        </section>
    );
};

export default Hero;
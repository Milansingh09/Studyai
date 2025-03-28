import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#2D3748', color: '#ffffff', padding: '48px 16px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
                <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>StudyAI</h1>
                <p style={{ color: '#A0AEC0', marginBottom: '24px' }}>AI-powered learning platform designed to help students study smarter, not harder.</p>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
                    <a href="#" style={{ color: '#A0AEC0', margin: '0 8px' }}><i className="bi bi-twitter"></i></a>
                    <a href="#" style={{ color: '#A0AEC0', margin: '0 8px' }}><i className="bi bi-facebook"></i></a>
                    <a href="#" style={{ color: '#A0AEC0', margin: '0 8px' }}><i className="bi bi-instagram"></i></a>
                    <a href="#" style={{ color: '#A0AEC0', margin: '0 8px' }}><i className="bi bi-linkedin"></i></a>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
                    <div>
                        <h3 style={{ fontWeight: 'bold' }}>Features</h3>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><a href="#" style={{ color: '#A0AEC0' }}>PDF Analyzer</a></li>
                            <li><a href="#" style={{ color: '#A0AEC0' }}>AI Tutor</a></li>
                            <li><a href="#" style={{ color: '#A0AEC0' }}>Video to Notes</a></li>
                            <li><a href="#" style={{ color: '#A0AEC0' }}>Quiz Generator</a></li>
                            <li><a href="#" style={{ color: '#A0AEC0' }}>Learning Dashboard</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 style={{ fontWeight: 'bold' }}>Resources</h3>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><a href="#" style={{ color: '#A0AEC0' }}>Blog</a></li>
                            <li><a href="#" style={{ color: '#A0AEC0' }}>Tutorials</a></li>
                            <li><a href="#" style={{ color: '#A0AEC0' }}>Help Center</a></li>
                            <li><a href="#" style={{ color: '#A0AEC0' }}>API Documentation</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 style={{ fontWeight: 'bold' }}>Company</h3>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li><a href="#" style={{ color: '#A0AEC0' }}>About Us</a></li>
                            <li><a href="#" style={{ color: '#A0AEC0' }}>Careers</a></li>
                            <li><a href="#" style={{ color: '#A0AEC0' }}>Privacy Policy</a></li>
                            <li><a href="#" style={{ color: '#A0AEC0' }}>Terms of Service</a></li>
                        </ul>
                    </div>
                </div>
                <div style={{ borderTop: '1px solid #4A5568', paddingTop: '16px' }}>
                    <p style={{ color: '#A0AEC0' }}>&copy; 2023 StudyAI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

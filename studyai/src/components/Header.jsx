import React, { useState } from 'react';

const headerStyle = {
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    width: '100%',
    height: '82px',
    top: 0,
    zIndex: 50,
  
};

const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px',
    maxWidth: '1200px',
    margin: '0 auto',
};

const logoStyle = {
    display: 'flex',
    alignItems: 'center',
};

const titleStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginLeft: '8px',
    color: 'black',
};

const navLinkStyle = {
    margin: '0 16px',
    color: '#4A5568',
    textDecoration: 'none',
};

const buttonStyle = {
    backgroundColor: 'white',
    padding: '8px 16px',
    border: 'none',
    cursor: 'pointer',
};

const mobileMenuStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#ffffff',
    zIndex: 998,
    display: 'flex',
    flexDirection: 'column',
};

const Header = ({ toggleTheme }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header style={headerStyle}>
            <nav style={navStyle}>
                <div style={logoStyle}>
                    <span>Brain Icon</span>
                    <h1 style={titleStyle}>StudyAI</h1>
                </div>
                <div className="nav-links">
                    <a href="#features" style={navLinkStyle}>Features</a>
                    <a href="#pricing" style={navLinkStyle}>Pricing</a>
                    <button onClick={toggleTheme} style={buttonStyle}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" fill="currentColor" viewBox="0 0 128 128" style={{ filter: 'invert(100%)' }}>
                            <path d="M106.056 66.085a1.746 1.746 0 0 0-2.04.715A31.016 31.016 0 1 1 61.2 23.984a1.749 1.749 0 0 0-1.1-3.218 43.413 43.413 0 1 0 47.13 47.13 1.749 1.749 0 0 0-1.174-1.811zM64 103.917A39.925 39.925 0 0 1 53.791 25.4a34.52 34.52 0 1 0 48.814 48.813A39.662 39.662 0 0 1 64 103.917z"/>
                        </svg>
                    </button>
                    <button style={{ ...buttonStyle, backgroundColor: '#3182CE', color: '#ffffff' }}>
                        Sign In
                    </button>
                </div>
            </nav>

            {mobileMenuOpen && (
                <div style={mobileMenuStyle}>
                    <div style={navStyle}>
                        <div style={logoStyle}>
                            <span>Brain Icon</span>
                            <h1 style={titleStyle}>StudyAI</h1>
                        </div>
                        <button style={buttonStyle} onClick={() => setMobileMenuOpen(false)}>
                            X Icon
                        </button>
                    </div>
                    <div style={{ padding: '16px' }}>
                        <a href="#features" style={navLinkStyle}>Features</a>
                        <a href="#pricing" style={navLinkStyle}>Pricing</a>
                        <button onClick={toggleTheme} style={buttonStyle}>
                            Moon Icon Toggle Theme
                        </button>
                        <button style={{ ...buttonStyle, backgroundColor: '#3182CE', color: '#ffffff' }}>
                            Sign In
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
import React from 'react';
import { WiDayCloudy } from 'react-icons/wi';

const Pricing = () => {
    const pricingCardStyle = {
        border: '1px solid #E2E8F0',
        borderRadius: '8px',
        padding: '16px',
        margin: '16px',
        textAlign: 'left', // Align text to the left
        width: '27%',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        boxShadow: '5px 5px 15px rgba(0, 0, 0, 0.1), -5px -5px 15px rgba(255, 255, 255, 0.5)', // 3D shadow effect
    };

    const hoverStyle = {
        transform: 'translateY(-5px)', // Lift the card up on hover
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)', // Enhanced shadow on hover
    };

    return (
        <section style={{ padding: '48px 16px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '24px' }}>Choose Your Plan</h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                <div style={pricingCardStyle}>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold',color:'black' }}>Free</h3>
                    <p style={{ fontSize: '32px', fontWeight: 'bold', color:'black' }}>$0<span style={{ fontSize: '14px', color: '#A0AEC0' }}>/month</span></p>
                    <ul style={{ listStyleType: 'none', padding: 0 , color:'black'}}>
                        <li>Basic AI queries (10/day)</li>
                        <li>5 practice tests/month</li>
                        <li>100MB notes storage</li>
                        <li>Web access only</li>
                        <li style={{ color: '#E53E3E' }}>Advanced analytics</li>
                        <li style={{ color: '#E53E3E' }}>PDF chat</li>
                    </ul>
                    <button style={{ padding: '12px 24px', borderRadius: '4px', border: 'none', backgroundColor: '#E2E8F0', cursor: 'pointer' }}>Get Started</button>
                </div>
                <div style={{ ...pricingCardStyle, backgroundColor: '#3182ce', color: '#ffffff' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Pro</h3>
                    <p style={{ fontSize: '32px', fontWeight: 'bold' }}>$15<span style={{ fontSize: '14px', color: '#A0AEC0' }}>/month</span></p>
                    <ul style={{ listStyleType: 'none', padding: 0, color:'black' }}>
                        <li>Unlimited AI queries</li>
                        <li>Unlimited practice tests</li>
                        <li>5GB notes storage</li>
                        <li>Web & mobile access</li>
                        <li>Advanced analytics</li>
                        <li>Full PDF chat & analysis</li>
                    </ul>
                    <button style={{ padding: '12px 24px', borderRadius: '4px', border: 'none', backgroundColor: '#ffffff', color: '#3182CE', cursor: 'pointer' }}>Subscribe Now</button>
                </div>
                <div style={pricingCardStyle}>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold',color:'black' }}>Team</h3>
                    <p style={{ fontSize: '32px', fontWeight: 'bold' , color:'black'}}>$49<span style={{ fontSize: '14px', color: '#A0AEC0' }}>/month</span></p>
                    <ul style={{ listStyleType: 'none', padding: 0, color:'black' }}>
                        <li>All Pro features</li>
                        <li>Up to 5 team members</li>
                        <li>20GB shared storage</li>
                        <li>Team collaboration tools</li>
                        <li>Admin dashboard</li>
                        <li>Priority support</li>
                    </ul>
                    <button style={{ padding: '12px 24px', borderRadius: '4px', border: 'none', backgroundColor: '#E2E8F0', cursor: 'pointer' }}>Contact Sales</button>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
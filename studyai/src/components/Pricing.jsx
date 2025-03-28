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
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '24px', color:'black' }}>Choose Your Plan</h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                
                    
                <div style={pricingCardStyle}>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold',color:'black' }}>Free</h3>
                    <p style={{ fontSize: '32px', fontWeight: 'bold', color:'black' }}>$0<span style={{ fontSize: '14px', color: '#A0AEC0' }}>/month</span></p>
                    <ul style={{ listStyleType: 'none', padding: 0 , color:'black',}}>
                        <li style={{ marginBottom: '5px',fontWeight: 'bold'}}>
                        <img src="/assets/check.png" alt="check" style={{ width: '16px', marginRight: '5px' }} />
                        Basic AI queries (10/day)</li>
                        <li style={{ marginBottom: '5px',fontWeight: 'bold'}}>
                        <img src="/assets/check.png" alt="check" style={{ width: '16px', marginRight: '5px' }} />
                        5 practice tests/month</li>
                        <li style={{ marginBottom: '5px',fontWeight: 'bold'}}>
                        <img src="/assets/check.png" alt="check" style={{ width: '16px', marginRight: '5px' }} />
                        100MB notes storage</li>
                        <li style={{ marginBottom: '5px',fontWeight: 'bold'}}>
                        <img src="/assets/check.png" alt="check" style={{ width: '16px', marginRight: '5px' }} />
                        Web access only</li>
                        <li style={{ color: '#E53E3E',marginBottom: '5px',fontWeight: 'bold' }}>
                        <img src="/assets/cross.png" alt="cross" style={{ width: '16px', marginRight: '5px' }} />
                           Advanced analytics</li>
                        <li style={{ color: '#E53E3E',marginBottom: '5px',fontWeight: 'bold' }}>
                        <img src="/assets/cross.png" alt="cross" style={{ width: '16px', marginRight: '5px' }} />
                        PDF chat</li>
                    </ul>
                    <button style={{ padding: '12px 24px', borderRadius: '4px', border: 'none', backgroundColor: '#E2E8F0', cursor: 'pointer', color: 'black'}}>Get Started</button>
                </div>
                <div style={{ ...pricingCardStyle, backgroundColor: '#3182ce', color: '#ffffff' }}>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Pro</h3>
                    <p style={{ fontSize: '32px', fontWeight: 'bold' }}>$15<span style={{ fontSize: '14px', color: '#A0AEC0' }}>/month</span></p>
                    <ul style={{ listStyleType: 'none', padding: 0, color:'black' }}>
                        <li style={{ marginBottom: '5px',fontWeight: 'bold'}}>
                        <img src="/assets/check.png" alt="check" style={{ width: '16px', marginRight: '5px' }} />
                        Unlimited AI queries</li>
                        <li style={{ marginBottom: '5px',fontWeight: 'bold'}}><img src="/assets/check.png" alt="check" style={{ width: '16px', marginRight: '5px' }} />
                        Unlimited practice tests</li>
                        <li style={{ marginBottom: '5px',fontWeight: 'bold'}}>
                        <img src="/assets/check.png" alt="check" style={{ width: '16px', marginRight: '5px' }} />
                        5GB notes storage</li>
                        <li style={{ marginBottom: '5px',fontWeight: 'bold'}}>
                        <img src="/assets/check.png" alt="check" style={{ width: '16px', marginRight: '5px' }} />
                        Web & mobile access</li>
                        <li style={{ marginBottom: '5px',fontWeight: 'bold'}}>
                        <img src="/assets/check.png" alt="check" style={{ width: '16px', marginRight: '5px' }} />
                        Advanced analytics</li>
                        <li style={{ marginBottom: '5px',fontWeight: 'bold'}}>
                        <img src="/assets/check.png" alt="check" style={{ width: '16px', marginRight: '5px' }} />
                        Full PDF chat & analysis</li>
                    </ul>
                    <button style={{ padding: '12px 24px', borderRadius: '4px', border: 'none', backgroundColor: '#ffffff', color: '#3182CE', cursor: 'pointer' }}>Subscribe Now</button>
                </div>
                <div style={pricingCardStyle}>
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold',color:'black' }}>Team</h3>
                    <p style={{ fontSize: '32px', fontWeight: 'bold' , color:'black'}}>$49<span style={{ fontSize: '14px', color: '#A0AEC0' }}>/month</span></p>
                    <ul style={{ listStyleType: 'none', padding: 0, color:'black' }}>
                        <li style={{ marginBottom: '5px',fontWeight: 'bold'}}>
                        <img src="/assets/check.png" alt="check" style={{ width: '16px', marginRight: '5px' }} />
                        All Pro features</li>
                        <li style={{ marginBottom: '5px',fontWeight: 'bold'}}>
                        <img src="/assets/check.png" alt="check" style={{ width: '16px', marginRight: '5px' }} />Up to 5 team members</li>

                        <li style={{ marginBottom: '5px',fontWeight: 'bold'}}>
                        <img src="/assets/check.png" alt="check" style={{ width: '16px', marginRight: '5px' }} />
                        20GB shared storage</li>
                        <li style={{ marginBottom: '5px',fontWeight: 'bold'}}>
                        <img src="/assets/check.png" alt="check" style={{ width: '16px', marginRight: '5px' }} />
                        Team collaboration tools</li>
                        <li style={{ marginBottom: '5px',fontWeight: 'bold'}}>
                        <img src="/assets/check.png" alt="check" style={{ width: '16px', marginRight: '5px' }} />
                        Admin dashboard</li>
                        <li style={{ marginBottom: '5px',fontWeight: 'bold'}}>
                        <img src="/assets/check.png" alt="check" style={{ width: '16px', marginRight: '5px' }} />
                        Priority support</li>
                    </ul>
                    <button style={{ padding: '12px 24px', borderRadius: '4px', border: 'none', backgroundColor: '#E2E8F0', cursor: 'pointer', color:'black' }}>Contact Sales</button>
                </div>
                </div>
            
        </section>
    );
};

export default Pricing;

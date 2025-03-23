import React from 'react';

const testimonialsData = [
    {
        name: "James Smith",
        role: "Engineering Student",
        feedback: "StudyAI transformed how I study. The AI tutor explains concepts better than my professor! I improved my grades significantly.",
        rating: 5
    },
    {
        name: "Amelia Parker",
        role: "Medical Student",
        feedback: "The video to notes feature is a game changer! I no longer have to spend hours taking notes during lectures.",
        rating: 4.5
    },
    {
        name: "Raj Kumar",
        role: "Computer Science Student",
        feedback: "The quiz generator helped me prepare for my finals. The personalized study plan identified my weak areas that I needed to focus on.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section style={{ padding: '48px 16px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '24px' }}>What Students Say</h2>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} style={{ border: '1px solid #E2E8F0', borderRadius: '8px', padding: '16px', margin: '16px', textAlign: 'center', width: '300px' }}>
                        <div style={{ marginBottom: '8px' }}>
                            {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                                <i key={i} className="bi bi-star-fill" style={{ color: '#FFD700' }}></i>
                            ))}
                            {testimonial.rating % 1 !== 0 && <i className="bi bi-star-half" style={{ color: '#FFD700' }}></i>}
                        </div>
                        <p style={{ color: '#4A5568', marginBottom: '16px' }}>"{testimonial.feedback}"</p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#3182CE', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '8px' }}>
                                {testimonial.name.charAt(0)}
                            </div>
                            <div>
                                <h4 style={{ fontWeight: 'bold' }}>{testimonial.name}</h4>
                                <p style={{ fontSize: '14px', color: '#A0AEC0' }}>{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
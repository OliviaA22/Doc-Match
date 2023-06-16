import React from 'react';
import './HomePage.css';

const HomePage: React.FC = () => {
    return (
        <div className="home">
            <main>
                <h1 className="home-header">Welcome to DocMatch</h1>
                <p className="home-intro">Find the right doctor for you, effortlessly.</p>
                
                <section>
                    <h2>Why DocMatch?</h2>
                    <p>We make it easy to find doctors that suit your needs. Browse by specialty, read reviews, and book appointments in just a few clicks.</p>
                </section>
                
                <section className="home-cta">
                    <h2>Ready to find your match?</h2>
                    <button>Start Your Search</button>
                </section>
            </main>
            <footer className="home-footer">
                Some Footer Content
            </footer>
        </div>
    );
}

export default HomePage;

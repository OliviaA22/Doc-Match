import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import DoctorProfile from './pages/DoctorProfile';
import BookingPage from './pages/BookingPage';
import UserProfile from './pages/UserProfile';
import LoginPage from './pages/LoginPage';

const App: React.FC = () => {
    return (
        <Router>
            <Header />

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/doctor/:id" element={<DoctorProfile />} />
                <Route path="/booking/:id" element={<BookingPage />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/login" element={<LoginPage />} /> {/* Define the route for the LoginPage */}
                {/* Add a 404 Not Found page if you wish */}
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;

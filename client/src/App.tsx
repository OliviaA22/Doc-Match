import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DoctorProfile from './pages/DoctorProfile';
import BookingPage from './pages/BookingPage';
import UserProfile from './pages/UserProfile';
import LoginPage from './pages/LoginPage';
import SearchResultsPage from './pages/SearchResultsPage';
import BlogList from './pages/BlogList';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/doctor/:id" element={<DoctorProfile />} />
                <Route path="/booking/:id" element={<BookingPage />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/search" element={<SearchResultsPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/blogs" element={<BlogList />} />
            </Routes>
        </Router>
    );
}

export default App;

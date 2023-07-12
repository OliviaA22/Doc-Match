import React, { useState } from 'react';
import axios from 'axios';

const DoctorCreate = () => {
    const [doctor, setDoctor] = useState({
        id: '',
        name: '',
        image: '',
        rating: '',
        specialist: '',
        location: '',
        qualification: '',
        languages: [],
        experience: '',
        available: [],
        gender: '',
        fees: '',
        category: [],
        phone: '',
        email: '',
        htmltext: '',
        reviews: [],
        social: []
    });

    const handleChange = (e, index = null, field = null) => {
        if (index !== null && field !== null) {
            let newArray = [...doctor[field]];
            newArray[index] = e.target.value;
            setDoctor({ ...doctor, [field]: newArray });
        } else {
            setDoctor({ ...doctor, [e.target.name]: e.target.value });
        }
    }

    const handleReviewChange = (e, index, key) => {
        let newReviews = [...doctor.reviews];
        newReviews[index][key] = e.target.value;
        setDoctor({ ...doctor, reviews: newReviews });
    }

    const handleSocialChange = (e, index, key) => {
        let newSocial = [...doctor.social];
        newSocial[index][key] = e.target.value;
        setDoctor({ ...doctor, social: newSocial });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/api/doctors', doctor).then(response => console.log(response));
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                ID:
                <input type="text" name="id" value={doctor.id} onChange={handleChange} />
            </label>
            <label>
                Name:
                <input type="text" name="name" value={doctor.name} onChange={handleChange} />
            </label>
            <label>
                Image:
                <input type="text" name="image" value={doctor.image} onChange={handleChange} />
            </label>
            <label>
                Rating:
                <input type="number" name="rating" value={doctor.rating} onChange={handleChange} />
            </label>
            <label>
                Specialist:
                <input type="text" name="specialist" value={doctor.specialist} onChange={handleChange} />
            </label>
            <label>
                Location:
                <input type="text" name="location" value={doctor.location} onChange={handleChange} />
            </label>
            <label>
                Qualification:
                <input type="text" name="qualification" value={doctor.qualification} onChange={handleChange} />
            </label>
            <label>
                Experience:
                <input type="number" name="experience" value={doctor.experience} onChange={handleChange} />
            </label>
            <label>
                Gender:
                <input type="text" name="gender" value={doctor.gender} onChange={handleChange} />
            </label>
            <label>
                Fees:
                <input type="number" name="fees" value={doctor.fees} onChange={handleChange} />
            </label>
            <label>
                Category:
                <input type="text" name="category" value={doctor.category} onChange={handleChange} />
            </label>
            <label>
                Phone:
                <input type="text" name="phone" value={doctor.phone} onChange={handleChange} />
            </label>
            <label>
                Email:
                <input type="text" name="email" value={doctor.email} onChange={handleChange} />
            </label>
            <label>
                HTML Text:
                <input type="text" name="htmltext" value={doctor.htmltext} onChange={handleChange} />
            </label>
            <label>
                Languages:
                {doctor.languages.map((language, index) => (
                    <input type="text" value={language} onChange={(e) => handleChange(e, index, 'languages')} />
                ))}
            </label>
            <label>
                Available:
                {doctor.available.map((day, index) => (
                    <input type="text" value={day} onChange={(e) => handleChange(e, index, 'available')} />
                ))}
            </label>
            <label>
                Reviews:
                {doctor.reviews.map((review, index) => (
                    <div>
                        <input type="text" name="user" value={review.user} onChange={(e) => handleReviewChange(e, index, 'user')} />
                        <input type="text" name="commentdate" value={review.commentdate} onChange={(e) => handleReviewChange(e, index, 'commentdate')} />
                        <input type="text" name="rating" value={review.rating} onChange={(e) => handleReviewChange(e, index, 'rating')} />
                        <input type="text" name="comment" value={review.comment} onChange={(e) => handleReviewChange(e, index, 'comment')} />
                    </div>
                ))}
            </label>
            <label>
                Social:
                {doctor.social.map((social, index) => (
                    <div>
                        <input type="text" name="icon" value={social.icon} onChange={(e) => handleSocialChange(e, index, 'icon')} />
                        <input type="text" name="title" value={social.title} onChange={(e) => handleSocialChange(e, index, 'title')} />
                        <input type="text" name="url" value={social.url} onChange={(e) => handleSocialChange(e, index, 'url')} />
                    </div>
                ))}
            </label>
            <button type="submit">Create Doctor</button>
        </form>
    )
}

export default DoctorCreate;

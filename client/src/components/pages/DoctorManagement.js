import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DoctorManagement() {

  const doctorManagementStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const doctorItemStyle = {
    marginBottom: '20px',
  };

  const doctorFormStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  };

  const formRowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-between',
  };

  const formGroupStyle = {
    flex: '0 0 48%',
    marginBottom: '20px',
  };

  const formGroupLabelStyle = {
    display: 'block',
  };

  const formGroupInputStyle = {
    width: '100%',
  };


  const initialFormState = {
    id: null,
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
  };

  const [doctors, setDoctors] = useState([]);
  const [newDoctor, setNewDoctor] = useState(initialFormState);
  const [isEditing, setIsEditing] = useState(false);
  const [editDoctorId, setEditDoctorId] = useState(null);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    const response = await axios.get('http://your-api-url.com/doctors');
    setDoctors(response.data);
  };

  const addDoctor = async (doctor) => {
    const response = await axios.post('http://your-api-url.com/doctors', doctor);
    setDoctors([...doctors, response.data]);
  };

  const deleteDoctor = async (id) => {
    await axios.delete(`http://your-api-url.com/doctors/${id}`);
    setDoctors(doctors.filter(doctor => doctor.id !== id));
  };

  const updateDoctor = async (id, updatedDoctor) => {
    const response = await axios.put(`http://your-api-url.com/doctors/${id}`, updatedDoctor);
    setDoctors(doctors.map(doctor => (doctor.id === id ? response.data : doctor)));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewDoctor({ ...newDoctor, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (isEditing) {
      updateDoctor(editDoctorId, newDoctor);
    } else {
      addDoctor(newDoctor);
    }
  };

  const startEditing = (id) => {
    const doctorToEdit = doctors.find((doctor) => doctor.id === id);
    setEditDoctorId(id);
    setNewDoctor(doctorToEdit);
    setIsEditing(true);
  };

  const cancelEditing = () => {
    setEditDoctorId(null);
    setNewDoctor(initialFormState); // corrected here
    setIsEditing(false);
  };

  return (
    <div className="doctor-management">
      {/* Your doctors list here */}
      {doctors.map(doctor => (
        <div key={doctor.id} className="doctor-item">
          <h2>{doctor.name}</h2>
          <button onClick={() => deleteDoctor(doctor.id)}>Delete</button>
          <button onClick={() => startEditing(doctor.id)}>Edit</button>
        </div>
      ))}

<form onSubmit={handleFormSubmit} className="doctor-form">
        <div className="form-row">
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" value={newDoctor.name} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Image</label>
            <input type="text" name="image" value={newDoctor.image} onChange={handleInputChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Rating</label>
            <input type="number" name="rating" value={newDoctor.rating} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Specialist</label>
            <input type="text" name="specialist" value={newDoctor.specialist} onChange={handleInputChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Location</label>
            <input type="text" name="location" value={newDoctor.location} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Qualification</label>
            <input type="text" name="qualification" value={newDoctor.qualification} onChange={handleInputChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Languages</label>
            <input type="text" name="languages" value={newDoctor.languages} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Experience</label>
            <input type="text" name="experience" value={newDoctor.experience} onChange={handleInputChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Available</label>
            <input type="text" name="available" value={newDoctor.available} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <input type="text" name="gender" value={newDoctor.gender} onChange={handleInputChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Fees</label>
            <input type="text" name="fees" value={newDoctor.fees} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Category</label>
            <input type="text" name="category" value={newDoctor.category} onChange={handleInputChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Phone</label>
            <input type="text" name="phone" value={newDoctor.phone} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" value={newDoctor.email} onChange={handleInputChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>HTML Text</label>
            <input type="text" name="htmltext" value={newDoctor.htmltext} onChange={handleInputChange} />
          </div>

          <div className="form-group">
            <label>Reviews</label>
            <input type="text" name="reviews" value={newDoctor.reviews} onChange={handleInputChange} />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Social</label>
            <input type="text" name="social" value={newDoctor.social} onChange={handleInputChange} />
          </div>
        </div>

        <button type="submit">{isEditing ? 'Update Doctor' : 'Add Doctor'}</button>
        {isEditing && <button type="button" onClick={cancelEditing}>Cancel Editing</button>}
      </form>
    </div>
  );
}

export default DoctorManagement;

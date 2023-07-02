import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Doctor from '../components/Doctor';

type DoctorType = {
  _id: string;
  title: string;
  firstName: string;
  lastName: string;
  address: {
    street: string;
    city: string;
    postcode: number;
    state: string;
    country: string;
    location: {
      type: string;
      coordinates: number[];
    };
  };
  language: string[];
  specialisation: string[];
  createdAt: string;
};

// Styled-components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: #fafafa;
  min-height: 100vh;
  font-family: 'Helvetica Neue', Arial, sans-serif;
`;

const SearchInput = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 10px;
  border: none;
  border-radius: 4px;
  margin-bottom: 20px;
  font-size: 16px;
  box-shadow: 0px 2px 10px rgba(0,0,0,0.05);
  transition: all 0.3s ease;

  &:focus {
    box-shadow: 0px 2px 10px rgba(0,0,0,0.1);
  }
`;

const LoadingIndicator = styled.div`
  font-size: 16px;
  color: #777;
`;

const ErrorMessage = styled.div`
  font-size: 16px;
  color: red;
  margin-bottom: 20px;
`;

const DoctorsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  width: 100%;
`;

const SearchResultsPage: React.FC = () => {
  const [doctors, setDoctors] = useState<DoctorType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const location = useLocation();
  const searchTerm = new URLSearchParams(location.search).get('query') || '';

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError('');
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/doctor?search=${searchTerm}`
        );
        setDoctors(response.data);
      } catch (error) {
        console.error('Failed to fetch doctors: ', error);
        setError('Failed to fetch doctors.');
      }
      setIsLoading(false);
    };
    fetchData();
  }, [searchTerm]);

  return (
    <Container>
      <SearchInput
        type="text"
        placeholder="Search..."
        value={searchTerm}
      />

      {isLoading ? (
        <LoadingIndicator>Loading...</LoadingIndicator>
      ) : error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <DoctorsContainer>
          {doctors.map((doctor) => <Doctor key={doctor._id} doctor={doctor} />)}
        </DoctorsContainer>
      )}
    </Container>
  );
};

export default SearchResultsPage;

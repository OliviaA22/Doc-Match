import React from 'react';
import styled from 'styled-components';

type DoctorType = {
  title: string;
  firstName: string;
  lastName: string;
  specialisation: string[];
  language: string[];
  _id: string;
};

type DoctorProps = {
  doctor: DoctorType;
};

const DoctorCard = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.05);
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const DoctorName = styled.h2`
  margin: 0 0 10px 0;
  color: #333;
`;

const DoctorInfo = styled.p`
  margin: 0;
  color: #666;
`;

const Doctor: React.FC<DoctorProps> = ({ doctor }) => {
  return (
    <DoctorCard>
      <DoctorName>
        {doctor.title} {doctor.firstName} {doctor.lastName}
      </DoctorName>
      <DoctorInfo>
        Specialisation: {doctor.specialisation.join(', ')}
        <br />
        Languages: {doctor.language.join(', ')}
      </DoctorInfo>
    </DoctorCard>
  );
};

export default Doctor;

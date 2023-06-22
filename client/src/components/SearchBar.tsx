import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

// Styled-components
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

const SearchBar: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
  
    const handleSearch = (e: React.FormEvent) => {
      e.preventDefault();
      navigate(`/search?query=${searchTerm}`);
    };
  
    return (
      <form onSubmit={handleSearch}>
        <SearchInput
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearchTerm(e.target.value)
          }
        />
      </form>
    );
  };
  
  export default SearchBar;

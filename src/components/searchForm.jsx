import React, { useState } from 'react';
import { searchPets } from '../services/api';

const SearchForm = ({ setPets }) => {
    const [animal, setAnimal] = useState('');
    const [location, setLocation] = useState('');
    const [breed, setBreed] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await searchPets(animal, location, breed);
            setPets(data.pets);
        } catch (error) {
            console.error('Error searching pets:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={animal}
                onChange={(e) => setAnimal(e.target.value)}
                placeholder="Animal Type"
            />
            <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
            />
            <input
                type="text"
                value={breed}
                onChange={(e) => setBreed(e.target.value)}
                placeholder="Breed"
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchForm;

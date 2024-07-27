import React, { useState } from 'react';
import { searchPets } from '../services/api';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
    const [animal, setAnimal] = useState('');
    const [location, setLocation] = useState('');
    const [breed, setBreed] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous error message
        console.log('Form submitted:', { animal, location, breed });
        try {
            const data = await searchPets(animal, location, breed);
            console.log('Data received:', data.pets);

            if (data.pets.length > 0) {
                // Navigate to the first pet's details page
                navigate(`/pet/${data.pets[0].id}`);
            } else {
                // Set error message if no pets are found
                setError('No pets found matching the criteria.');
            }
        } catch (error) {
            console.error('Error searching pets:', error);
            setError('Error searching for pets. Please try again.');
        }
    };

    return (
        <div>
            <form className='d-flex align-items-center justify-content-center' onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={animal}
                    onChange={(e) => setAnimal(e.target.value)}
                    placeholder="Animal Type"
                    className="form-control mb-3"
                    required
                />
                <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Location"
                    className="form-control mb-3"
                    required
                />
                <input
                    type="text"
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                    placeholder="Breed"
                    className="form-control mb-3"
                    required
                />
                <button type="submit" className="btn btn-secondary mt-0">Search</button>
            </form>
            {error && <div className="alert alert-danger mt-3 text-center">{error}</div>}
        </div>
    );
};

export default SearchForm;

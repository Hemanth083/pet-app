import React, { useEffect, useState } from 'react';
import { fetchPetById } from '../services/api';
import { useParams } from 'react-router-dom';

const PetDetails = () => {
    const { id } = useParams();
    const [pet, setPet] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPet = async () => {
            try {
                const data = await fetchPetById(id);
                setPet(data.pet);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getPet();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!pet) return <div>Pet not found.</div>;

    return (
        <div>
            <h1>{pet.name}</h1>
            <p>{pet.description}</p>
            <img src={pet.image} alt={pet.name} />
        </div>
    );
};

export default PetDetails;

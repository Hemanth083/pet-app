import React, { useEffect, useState } from 'react';
import { fetchPets } from '../services/api';
import { Link } from 'react-router-dom';

const PetList = () => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPets = async () => {
            try {
                const data = await fetchPets();
                setPets(data.pets);
                console.log(data)
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getPets();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            {pets.length === 0 ? (
                <div>No pets found.</div>
            ) : (
                pets.map((pet) => (
                    <div key={pet.id}>
                        <img src={pet.images[0]} />
                        <Link to={`/pet/${pet.id}`}>{pet.name}</Link>
                    </div>
                ))
            )}
        </div>
    );
};

export default PetList;

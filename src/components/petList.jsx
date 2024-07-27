// src/components/PetList.jsx
import React, { useEffect, useState } from 'react';
import { fetchPets } from '../services/api';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../App.css';

const PetList = () => {
    const [pets, setPets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPets = async () => {
            try {
                const data = await fetchPets();
                setPets(data.pets);
                console.log(data);
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
        <div className="container mt-4">
            {pets.length === 0 ? (
                <div>No pets found.</div>
            ) : (
                <div className="row">
                    {pets.map((pet) => (
                        <div key={pet.id} className="col-md-4 mb-4">
                            <div className="card ">
                                <Link to={`/pet/${pet.id}`} className="btn">

                                    <div className='w-100 image-container'>
                                        <img
                                            src={pet.images[0]}
                                            className="card-img-top"
                                            alt={pet.name}
                                        />
                                    </div>
                                </Link>
                                <div className="card-body d-flex align-items-center flex-column">
                                    <h5 className="card-title w-100">{`name :   ${pet.name}`}</h5>
                                    {/* <p className='w-25 rounded-sm text-white bg-orange-500'>{pet.animal}</p> */}
                                    <p> </p>
                                    <Link to={`/pet/${pet.id}`} className="btn btn-secondary w-100 rounded-0">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default PetList;

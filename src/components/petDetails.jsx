import React, { useEffect, useState } from 'react';
import { fetchPetById } from '../services/api';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

const PetDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [pet, setPet] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPet = async () => {
            try {
                const data = await fetchPetById(id);
                setPet(data.pets[0]);
                console.log(data.pets);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getPet();
    }, [id]);

    if (loading) return <div className="text-center my-5">Loading...</div>;
    if (error) return <div className="text-center my-5">Error: {error}</div>;
    if (!pet) return <div className="text-center my-5">Pet not found.</div>;

    const handleClose = () => {
        navigate('/');
    };

    return (
        <div className="container mt-5">
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={pet.images[0]} className="img-fluid rounded-start" alt={pet.name} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title">{`${pet.name} is an ${pet.animal}`}</h1>
                            <p className="text-start "><strong>City:</strong> {pet.city}</p>
                            <p className=" text-start"><strong>Description:</strong> {pet.description}</p>
                            <p className="text-start"><strong>Breed:</strong> {pet.breed}</p>
                            <p> </p>
                            <button onClick={handleClose} className="btn btn-secondary w-50 mt-9">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetDetails;

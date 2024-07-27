import React, { useState } from 'react';
import SearchForm from '../components/searchForm';
import PetList from '../components/petList';

const Home = () => {
    const [pets, setPets] = useState([]);

    return (
        <div className='w-100 d-flex align-items-center justify-center flex-column' style={{width:'100vh'}}>
            <SearchForm setPets={setPets} />
            <PetList pets={pets} /> 
        </div>
    );
};

export default Home;

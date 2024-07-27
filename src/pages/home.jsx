import React, { useState } from 'react';
import SearchForm from '../components/searchForm';
import PetList from '../components/petList';

const Home = () => {
    const [pets, setPets] = useState([]);

    return (
        <div>
            <SearchForm setPets={setPets} />
            <PetList pets={pets} />
        </div>
    );
};

export default Home;

// src/services/api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://pets-v2.dev-apis.com',
});

export const fetchPets = async () => {
    try {
        const response = await api.get('/pets');
        return response.data;
    } catch (error) {
        console.error('Error fetching pets:', error);
        throw error;
    }
};

export const fetchPetById = async (id) => {
    try {
        const response = await api.get(`/pets?id=${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching pet with ID ${id}:`, error);
        throw error;
    }
};

export const fetchBreedsByAnimal = async (animal) => {
    try {
        const response = await api.get(`/breeds?animal=${animal}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching breeds for animal ${animal}:`, error);
        throw error;
    }
};

export const searchPets = async (animal, location, breed) => {
    try {
        const response = await api.get(`/pets?animal=${animal}&location=${location}&breed=${breed}`);
        return response.data;
    } catch (error) {
        console.error('Error searching pets:', error);
        throw error;
    }
};

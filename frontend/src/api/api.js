import axios from 'axios';

const API_BASE_URL = 'http://localhost:YOUR_PORT'; // Change to your backend URL

export const getCauses = async () => {
    const response = await axios.get(`${API_BASE_URL}/api/causes`);
    return response.data;
};

export const addCause = async (name, description, targetAmount) => {
    const response = await axios.post(`${API_BASE_URL}/api/causes`, {
        name,
        description,
        target_amount: targetAmount,
    });
    return response.data;
};

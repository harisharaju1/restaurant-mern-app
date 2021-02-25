import axios from "axios";

export const createItem = async (formData) => { 
    const response = await axios.post('/api/item', formData);      
    return response;
}
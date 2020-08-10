import axios from "axios";

export const createItem = async (formData) => {
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }
    
    const response = await axios.post('/api/item/create', formData,config);    
    return response;
}
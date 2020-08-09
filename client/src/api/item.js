import axios from "axios";

export const createItem = async (formData) => {
    const config = {
        headers:{
            'Content-Type':'application/json'
        }
    }

    console.log(formData);
    const response = await axios.post('/api/item', formData,config);
    console.log('got here!')
    return response;
}
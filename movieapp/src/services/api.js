import axios from "axios";

export const getCategoriesMovie = async(API_URL) =>{
    try {
        let response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.log('Server error', error.message);
        return error.response.data
    }
}
import axios from 'axios';

const API_KEY = '';
const BASE_URL = 'https://pixabay.com/api/';

axios.defaults.baseURL = BASE_URL;

export const getPhoto = async () => {
    try {
        const response = await axios.get(
            `?q=request&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
        );
        return response.data;
    } 
    catch (error) {
        console.log(error);
    }
};


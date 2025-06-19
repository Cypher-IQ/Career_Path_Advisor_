import axios from 'axios';

const BASE_URL = '/get_options'; // Proxy will redirect to Flask

export const getOptions = async (educationLevel, optionType) => {
    try {
        const response = await axios.post(BASE_URL, {
            education_level: educationLevel,
            option_type: optionType
        });
        return response.data.options || [];
    } catch (error) {
        console.error("Error fetching options:", error.response?.data || error.message);
        return [];
    }
};

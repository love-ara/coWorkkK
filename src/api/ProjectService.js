import axios from "axios";

const baseURL = 'http://localhost:8080/api/v1/cowork/projects';

export async function createProject(projectData) {
    try {
        const response = await axios.post(`${baseURL}/createProject`, projectData);
        return response.data;
    } catch (error) {
        handleError(error, "Create Project Error");
    }
}




export const fetchProjects = async () => {
    try {
        const response = await axios.get(baseURL);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch projects');
    }
};
export const fetchProjectById = async () => {
    try {
        const response = await axios.get(baseURL);
        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch projects');
    }
};

function handleError(error, context) {
    if (error.response) {
        console.error(`${context}:`, error.response.data);
        throw error.response.data;
    } else {
        console.error("Error:", error.message);
        throw new Error("An unexpected error occurred.");
    }
}

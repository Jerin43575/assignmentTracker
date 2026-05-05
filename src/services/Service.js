import axios from "axios"

const API_URL = "http://localhost:8080/assignments";

export const getAllAssignments = async() => {
    const response = await axios.get(`${API_URL}/all`);
    return response.data;
}

export const getAssignmentById = async()=>{
    const response = await axios.get(`${API_URL}/{assignmentId}`);
    return response.data;
}

export const createAssignment = async(formData) => {
    const response = await axios.post(`${API_URL}/create`, formData);
    return response.data;
}

export const editAssignment = async(formData) => {
    const response = await axios.put(`${API_URL}/update`, formData);
    return response.data;
}

export const deleteAssignment = async(assignmentId) => {
    const response = await axios.delete(`${API_URL}/delete/${assignmentId}`);
    return response.data;
}
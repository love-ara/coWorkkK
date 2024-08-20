import axios from "axios";

const baseURL = 'http://localhost:8080/api/v1/cowork/users';

export async function createTask(taskData) {
    try {
        const response = await axios.post(`${baseURL}/createTask`, taskData);
        return response.data;
    } catch (error) {
        handleError(error, "Create Task Error");
    }
}

export async function updateTask(taskData) {
    try {
        const response = await axios.patch(`${baseURL}/updateTask`, taskData);
        return response.data;
    } catch (error) {
        handleError(error, "Update Task Error");
    }
}

export async function assignTask(assignTaskData) {
    try {
        const response = await axios.patch(`${baseURL}/assignTask`, assignTaskData);
        return response.data;
    } catch (error) {
        handleError(error, "Assign Task Error");
    }
}

export async function viewTask(taskId) {
    try {
        const response = await axios.get(`${baseURL}/viewTask/${taskId}`);
        return response.data;
    } catch (error) {
        handleError(error, "View Task Error");
    }
}

export async function viewAllProjectTasks(projectId) {
    try {
        const response = await axios.get(`${baseURL}/viewAllProjectTasks`, {
            params: { projectId },
        });
        return response.data;
    } catch (error) {
        handleError(error, "View All Project Tasks Error");
    }
}

export async function viewAllUserTasks(userId) {
    try {
        const response = await axios.get(`${baseURL}/viewAllUserTasks`, {
            params: { userId },
        });
        return response.data;
    } catch (error) {
        handleError(error, "View All User Tasks Error");
    }
}

export async function viewAllUserTasksInProject(taskInProjectData) {
    try {
        const response = await axios.get(`${baseURL}/viewAllUserTasksInProject`, {
            data: taskInProjectData,
        });
        return response.data;
    } catch (error) {
        handleError(error, "View All User Tasks In Project Error");
    }
}

export async function viewAllUserTasksByDueDate(dueDateData) {
    try {
        const response = await axios.get(`${baseURL}/viewAllUserTasksByDueDate`, {
            data: dueDateData,
        });
        return response.data;
    } catch (error) {
        handleError(error, "View All User Tasks By Due Date Error");
    }
}

export async function viewAllUserTasksByStatus(statusData) {
    try {
        const response = await axios.get(`${baseURL}/viewAllUserTasksByStatus`, {
            data: statusData,
        });
        return response.data;
    } catch (error) {
        handleError(error, "View All User Tasks By Status Error");
    }
}

export async function deleteTask(taskId) {
    try {
        const response = await axios.delete(`${baseURL}/deleteTask/${taskId}`);
        return response.data;
    } catch (error) {
        handleError(error, "Delete Task Error");
    }
}

function handleError(error, context) {
    if (error.response) {
        console.error(`${context}:`, error.response.data);
        throw error.response.data;
    } else {
        console.error("Error:", error.message);
        throw new Error("An unexpected error occurred.");
    }
}

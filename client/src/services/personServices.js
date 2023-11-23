import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:3000';
// Function to retrieve all person records.
export async function getPersons() {
    try {
        // Making a GET request to fetch all person records
        const { data } = await axios.get(`/api/persons`);
        console.log('data', data)
        // Returning the retrieved data
        return { data };
    } catch (error) {
        // Handling errors if the request fails
        return { error: "Cannot Find persons Data" }
    }
}

// Function to Add a new person record
export async function createPerson(credentials) {
    try {
        // Making a POST request to add a new person record
        const { data: { msg } } = await axios.post(`/api/persons`, credentials);
        // Resolving the promise with success message
        return Promise.resolve(msg)
    } catch (error) {
        // Rejecting the promise with an error if the request fails
        return Promise.reject({ error })
    }
}

// Function to update a person record
export async function updatePerson(response, id) {
    try {
        // Making a PUT request to update a person record by ID
        const data = await axios.put(`/api/persons/${id}`, response);
        // Resolving the promise with the updated data
        return Promise.resolve({ data })
    } catch (error) {
        // Rejecting the promise with an error if the request fails
        return Promise.reject({ error: "Couldn't Update The Person Data...!" })
    }
}
// Function to retrieve a specific person by ID
export async function getPersonById(id) {
    try {
        // Making a GET request to fetch a specific person by ID
        const { data } = await axios.get(`/api/persons/${id}`);
        // Returning the retrieved data
        return { data };
    } catch (error) {
        // Handling errors if the request fails
        return { error: "Cannot Find List Data" }
    }
}
// Function to delete a person record by ID
export async function deletePerson(id) {
    try {
        // Making a DELETE request to delete a person record by ID
        await axios.delete(`/api/persons/${id}`);
        // Resolving the promise with success message
        return Promise.resolve({ msg: "Person Deleted..!" })
    } catch (error) {
        // Rejecting the promise with an error if the request fails
        return Promise.reject({ error: "Couldn't Delete Person...!" })
    }
}
// Function to retrieve persons records or filter by searchTerm
export async function getPersonFilter(searchTerm) {
    try {
        // Making a GET request to fetch person records with search term
        const { data } = await axios.get(`/api/person/filter`, {
            params: {
                search: searchTerm,
            },
        });
        // Returning the retrieved data
        return { data };

    } catch (error) {
        // Handling errors if the request fails
        return { error: "Cannot Find persons Data" }
    }
}
import toast from 'react-hot-toast'


// Function to validate the create form
export async function createValidation(values) {
    // Call the nameVerify emailVerify and age functions to validate name email and age
    const errors = emailVerify({}, values);
    ageVerify(errors, values);
    nameVerify(errors, values);
    // Return the errors object
    return errors;
}

// Function to validate the username
function nameVerify(error = {}, values) {
    // Check if the name is empty
    if (!values.name) {
        // If empty, set an error message using toast
        error.name = toast.error('name Required...!');
    }
    // Return the errors object
    return error;
}
// Function to validate the age
function ageVerify(error = {}, values) {
    // Check if the age is empty
    if (!values.age) {
        // If empty, set an error message using toast
        error.name = toast.error('age Required...!');
    }
    // Return the errors object
    return error;
}

// Function to validate the email
function emailVerify(error = {}, values) {
    // Check if the email is empty
    if (!values.email) {
        // If empty, set an error message using toast
        error.email = toast.error("Email Required...!");
    } else if (values.email.includes(" ")) {
        // Check if the email contains spaces
        // If yes, set an error message using toast
        error.email = toast.error("Wrong Email...!")
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        // Check if the email contains spaces
        // If yes, set an error message using toast
        error.email = toast.error("Invalid email address...!")
    }
    // Return the errors object
    return error;
}


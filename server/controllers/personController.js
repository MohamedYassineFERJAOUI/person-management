import PersonModel from '../model/Person.model.js'

// Function to Add a new person record
export async function createPerson(req, res) {

    try {
        // Destructure the required data from the request body
        const { name, age, email } = req.body;
        // check for existing email
        const existEmail = new Promise((resolve, reject) => {
            PersonModel.findOne({ email })
                .then(email => {
                    if (email) reject({ error: "Please use unique Email" });
                    resolve();
                })
        });

        // If no existing email is found, proceed to create the person
        existEmail
            .then(() => {
                // Create a new PersonModel instance
                const person = new PersonModel({
                    name,
                    age,
                    email
                });

                // Save the person to the database and handle the result
                person.save()
                    .then(result => res.status(201).send({ msg: "person created" }))
                    .catch(error => res.status(500).send({ error }))

            }).catch(error => {
                return res.status(500).send({ error })
            })


    } catch (error) {
        return res.status(500).send(error);
    }

}

// Function to update a person record
export const updatePerson = async (req, res) => {
    try {
        const id = req.params.id;
        // Check if an ID is provided
        if (id) {
            const { name, age, email } = req.body;

            // Check for existing email in other records
            const existEmail = await PersonModel.findOne({ email });

            // Check if the email already exists in other records
            if (existEmail && existEmail._id != id) {
                return res.status(400).send({ error: "Please use a unique Email" });
            }

            // Update the data in the database
            await PersonModel.updateOne({ _id: id }, { name, age, email });

            return res.status(201).send({ msg: "Record Updated...!" });

        } else {
            return res.status(401).send({ error: "Person Not Found...!" });
        }

    } catch (error) {
        return res.status(401).send({ error });
    }
}

// Function to retrieve all person records.
export async function getPersons(req, res) {
    try {
        // Read all persons from the database
        PersonModel.find()
            .then(person => {
                return res.status(201).send(person);
            })

    } catch (error) {
        return res.status(404).send({ error: "Cannot Find persons Data" });
    }
}

// Function to retrieve a specific person by ID
export const getPerson = async (req, res) => {
    const { id } = req.params;

    try {
        // Check if a valid ID is provided
        if (!id) return res.status(501).send({ error: "Invalid Person" });
        // Find the person by ID in the database
        PersonModel.findOne({ _id: id })
            .then(person => {
                // Check if the person exists
                if (!person) return res.status(501).send({ error: "Couldn't Find the Person" });
                // Return the person data
                return res.status(201).send(person);
            })
            .catch(error => {
                return res.status(404).send({ error: "Cannot Find Person Data" });
            })

    } catch (error) {
        return res.status(404).send({ error: "Cannot Find Person Data" });
    }
}

// Function to delete a person record by ID
export const deletePerson = async (req, res) => {
    try {
        //const id = req.query.id;
        // Delete the person by ID from the database
        PersonModel.deleteOne({ _id: req.params.id })
            .then(() => res.status(201).send({ msg: "Person Deleted...!" }))
            .catch(error => res.status(401).json({ error }));

    } catch (error) {
        return res.status(401).send({ error });
    }
}

// Function to retrieve persons records or filter by name or age
export const filterPersons = async (req, res) => {
    try {

        const filter = {};

        // Add filters based on query parameters
        if (req.query.search) {
            const searchValue = req.query.search;

            // Check if the search term is a valid number
            const isNumber = !isNaN(searchValue);

            if (isNumber) {
                // If it's a number, filter by age
                filter.age = searchValue;
            } else {
                // If it's not a number, filter by name using a case-insensitive regular expression
                const searchRegex = new RegExp('^' + searchValue, 'i');
                filter.name = { $regex: searchRegex };
            }
        }
        const persons = await PersonModel.find(filter);
        res.status(200).json(persons);
    } catch (error) {
        return res.status(401).send({ error });
    }
}
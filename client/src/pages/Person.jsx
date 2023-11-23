import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import "../styles/person.css";
import Background from '../assets/Background.png';
import toast, { Toaster } from 'react-hot-toast';
import logo from '../assets/logo.png';
import { useFormik } from 'formik';
import { createValidation } from './validate.js'
import { createPerson, getPersonById, updatePerson } from '../services/personServices.js';

const Person = () => {
    // Extracting the "id" parameter from the URL using useParams hook
    const { id } = useParams();
    // useEffect to fetch person data when the component mounts
    useEffect(() => {
        // Check if the id is "new" (creating a new person) or an existing person's id
        if (id === "new") return;

        // Function to fetch person data by id
        const fetchPerson = async () => {
            const personData = await getPersonById(id);
            // Setting form values with the fetched person data
            formik.setValues({
                name: personData.data.name,
                age: personData.data.age,
                email: personData.data.email,
            });
        };
        fetchPerson(); // Calling the fetchPerson function



    }, []);
    // Formik hook for handling form state and validation
    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            email: '',
        },
        validate: createValidation,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            // Check if the id is "new" to create a new person, or update an existing person
            if (id === "new") {
                let createPromise = createPerson(values)
                // Display toast notifications based on the promise status
                toast.promise(createPromise, {
                    loading: 'Creating...',
                    success: <b>create Successfully...!</b>,
                    error: <b>Could not create. Existed Email!!</b>
                })
            }

            else {
                let updatePromise = updatePerson(values, id)
                // Display toast notifications based on the promise status
                toast.promise(updatePromise, {
                    loading: 'Creating...',
                    success: <b>Update Successfully...!</b>,
                    error: <b>Could not Update. Existed Email!!</b>
                })
            }


        }
    })
    return (
        <div style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',


        }}>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <img
                src={logo}
                alt="Logo"
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '75px',
                    height: '40px',

                }}
            />
            <div>

                <form className='cover' onSubmit={formik.handleSubmit}>
                    <h1>New person</h1>
                    <input className='textbox' {...formik.getFieldProps('name')} type="text" placeholder='Name' />
                    <input className='textbox' {...formik.getFieldProps('age')} type="number" placeholder='Age' min='0' max='100' />
                    <input className='textbox' {...formik.getFieldProps('email')} type="email" placeholder='Email (demo@gmail.com)' />

                    <button className='btn' type='submit'>{id === "new" ? "Create Person" : "Update Person"}</button>

                    < span > You Dont Want To ADD?  <Link to='/persons'>BACK TO LIST</Link>
                    </span>
                </form>


            </div>
        </div >
    );
};

export default Person;
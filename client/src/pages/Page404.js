import React from 'react';
import Background from '../assets/Background.png';
import logo from '../assets/logo.png';

const Page404 = () => {
    return (
        <div style={{
            backgroundImage: `url(${Background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',


        }}>
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
            <div style={styles.container} >
                <h2 style={styles.title}>Oops! Page Not Found</h2>
                <p style={styles.text}>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                <p style={styles.text}>Here are some suggestions:</p>
                <ul style={styles.list}>
                    <li>Double-check the URL.</li>
                    <li>Contact the website administrator if you believe this is an error.</li>
                </ul>
                <p style={styles.text}>Alternatively, you can use the search bar to look for content on our site:</p>
            </div></div>

    );
};

const styles = {
    container: {
        maxWidth: '600px',
        margin: 'auto',
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#f4f4f4',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    },
    title: {
        color: '#e74c3c',
        fontSize: '2em',
        marginBottom: '10px',
    },
    text: {
        color: '#555',
        fontSize: '1.2em',
        marginBottom: '10px',
    },
    list: {
        textAlign: 'left',
        marginLeft: '20px',
    },
};

export default Page404;
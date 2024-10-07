import React from 'react';
import { FaEnvelope, FaLinkedin, FaWhatsapp, FaInstagram, FaPhone } from 'react-icons/fa';

// CSS styles for the Contact component
const styles = {
    contactSticky: {
        position: 'fixed',
        right: '0px', // Adjust as needed
        top: '150px', // Adjust as needed
        background: 'transparent', // Background color
        border: '0px solid #ccc', // Border
        padding: '-5px', // Padding for better spacing
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)', // Shadow effect
        zIndex: 1000, // Ensure it is above other content
        borderRadius: '5px', // Rounded corners
    },
    header: {
        marginBottom: '1px', // Spacing below the header
    },
    list: {
        listStyleType: 'none', // Remove default list styling
        padding: -1, // Remove default padding
    },
    listItem: {
        margin: '25px 0', // Spacing between list items
    },
    link: {
        textDecoration: 'none', // Remove underline
        color: '#007bff', // Link color
        display: 'flex', // Flexbox for icon and text
        alignItems: 'center', // Center items vertically
    },
    icon: {
        marginRight: '2px', // Spacing between icon and text
        fontSize: '30px', // Adjust icon size here
    },
};

const Contact = () => {
    return (
        <div style={styles.contactSticky}>
            {/* Header text added */}
            <ul style={styles.list}>
                <li style={styles.listItem}>
                    <a href="mailto:kumarabhishek44279@gmail.com" aria-label="Email me" style={styles.link}>
                        <FaEnvelope style={styles.icon} /> 
                    </a>
                </li>
                <li style={styles.listItem}>
                    <a href="https://www.linkedin.com/in/abhishekkumarai0/" target="_blank" rel="noopener noreferrer" aria-label="Visit my LinkedIn profile" style={styles.link}>
                        <FaLinkedin style={styles.icon} /> 
                    </a>
                </li>
                <li style={styles.listItem}>
                    <a href="https://wa.me/7518531311" target="_blank" rel="noopener noreferrer" aria-label="Message me on WhatsApp" style={styles.link}>
                        <FaWhatsapp style={styles.icon} /> 
                    </a>
                </li>
                <li style={styles.listItem}>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit my Instagram profile" style={styles.link}>
                        <FaInstagram style={styles.icon} /> 
                    </a>
                </li>
                <li style={styles.listItem}>
                    <a href="tel:+917518531311" aria-label="Call me" style={styles.link}>
                        <FaPhone style={styles.icon} /> 
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Contact; // Ensure this line is present

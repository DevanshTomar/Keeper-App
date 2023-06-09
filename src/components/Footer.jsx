import React from 'react';

function Year(){
    return new Date().getFullYear();
}

function Footer(){
    return (
        <footer>
            <p>&copy; Devansh Tomar {Year()}.</p>
        </footer>
    );
};

export default Footer;



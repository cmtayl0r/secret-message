// -----------------------------------------------------------------------------
// IMPORTS
// -----------------------------------------------------------------------------

import 'materialize-css/dist/css/materialize.min.css';

// -----------------------------------------------------------------------------
// DOM ELEMENTS
// -----------------------------------------------------------------------------

const formMsg = document.querySelector('#message-form');
const formLink = document.querySelector('#link-form');
const inputMsg = document.querySelector('#message-input');
const inputLink = document.querySelector('#link-input');
const messageShow = document.querySelector('#message-show');

// -----------------------------------------------------------------------------
// FORM SUBMISSION
// -----------------------------------------------------------------------------

formMsg.addEventListener('submit', e => {
    e.preventDefault(); // Prevent the default form submission

    formMsg.classList.add('hide'); // Hide the message form
    formLink.classList.remove('hide'); // Show the link form

    const encrypted = btoa(inputMsg.value); // Encrypt the message
    inputLink.value = `${window.location}#${encrypted}`; // Set the input value to the encrypted
    inputLink.select(); // Select the input value
});

// -----------------------------------------------------------------------------
// MESSAGE SHOW
// -----------------------------------------------------------------------------
// Check if there is a hash in the URL
const { hash } = window.location;
const message = atob(hash.replace('#', '')); // Decrypt the message

if (message) {
    formMsg.classList.add('hide'); // Hide the message form
    formLink.classList.add('hide'); // Hide the link form
    messageShow.classList.remove('hide'); // Show the message

    messageShow.querySelector('h2').innerHTML = message; // Set the message
}

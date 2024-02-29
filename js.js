document.addEventListener('DOMContentLoaded', function () {
    // Code inside this function runs when the DOM is fully loaded and parsed.

    // Get the element with the ID 'navbar' and store it in the 'navbar' variable.
    const navbar = document.getElementById('navbar');

    // Create a new 'button' element.
    // const button = document.createElement('button');

    // Set the inner HTML content of the button to 'Toggle Navbar'.
    // button.innerHTML = 'Toggle Navbar';

    // Insert the button before the 'navbar' element in the document body.
    document.body.insertBefore( navbar);

    // Add an event listener to the button. This function runs when the button is clicked.
    button.addEventListener('click', function () {
        // Toggle the 'show' class on the 'navbar' element.
        navbar.classList.toggle('show');
    });
});

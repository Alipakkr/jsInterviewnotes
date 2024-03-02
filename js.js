// document.addEventListener('DOMContentLoaded', function () {
//     // Code inside this function runs when the DOM is fully loaded and parsed.

// const { type } = require("os");

//     // Get the element with the ID 'navbar' and store it in the 'navbar' variable.
//     const navbar = document.getElementById('navbar');

//     // Create a new 'button' element.
//     // const button = document.createElement('button'); 

//     // Set the inner HTML content of the button to 'Toggle Navbar'.
//     // button.innerHTML = 'Toggle Navbar';

//     // Insert the button before the 'navbar' element in the document body.
//     document.body.insertBefore( navbar);

//     // Add an event listener to the button. This function runs when the button is clicked.
//     button.addEventListener('click', function () {
//         // Toggle the 'show' class on the 'navbar' element.
//         navbar.classList.toggle('show');
//     });
// });
function bubbleSort(arr) {
    const len = arr.length;
  
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          // Swap elements if they are in the wrong order
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
  }
  const unsortedArray = [64, 25, 12, 22, 11];
  const sortedArray = bubbleSort(unsortedArray);
  
  console.log("Unsorted Array:", unsortedArray);
  console.log("Sorted Array:", sortedArray);
  
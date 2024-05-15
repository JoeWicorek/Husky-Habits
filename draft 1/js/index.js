'use strict';



// Function to mark a habit as completed
function completeHabit(buttonId) {
    var button = document.getElementById(buttonId);
    button.textContent = "Completed"; // Change button text
    button.disabled = true; // Disable button
}
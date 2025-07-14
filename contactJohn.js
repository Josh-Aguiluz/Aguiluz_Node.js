// Function to generate the contact page message using the provided name
function getContactMessage(name) {
    // Uses the passed 'name' parameter
    return `${name}, if you want additional details about this activity go to this site: <a href="https://www.tutorialsteacher.com/nodejs/nodejs-tutorials" target="_blank">https://www.tutorialsteacher.com/nodejs/nodejs-tutorials</a>`;
}

// Export the function
module.exports.generateContact = getContactMessage;

/*
    Name: Josh Aguiluz
    Date: July 14 2025
    Section: WD-302
*/
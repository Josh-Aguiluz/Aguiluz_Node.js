// Function to generate the about page message using the provided name
function getAboutMessage(name) {
    // Uses the passed 'name' parameter
    return `Hello ${name}. This activity will teach on how to deal with a simple server and local modules in Node.js`;
}

// Export the function
module.exports.generateAbout = getAboutMessage;
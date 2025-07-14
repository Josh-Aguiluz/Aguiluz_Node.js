// Function to generate the welcome message using the provided name
function getWelcomeMessage(name) {
    // Uses the passed 'name' parameter
    return `Welcome ${name}. This is an activity about basics of Node.js`;
}

// Export the function
module.exports.generateWelcome = getWelcomeMessage;
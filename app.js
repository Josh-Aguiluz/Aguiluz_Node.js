const http = require('http');

// Import the local modules
const welcomeModule = require('./greetJohn'); 
const aboutModule = require('./aboutModule');
const contactModule = require('./contactJohn');

// Define a constant for the name "John Smith" to pass to the modules
const userName = "John Smith";

// Set the port number
const port = 5000; 

// Create the server
const server = http.createServer((req, res) => {
    // Determine the route based on the request URL
    const url = req.url;

    // Handle different routes
    switch (url) {
       case '/':
    // Content for the root route (/)
    res.writeHead(200, {'Content-Type': 'text/html'});
    // Corrected syntax and added H1 tags for bold and larger text
    res.write('<h1>Welcome to my Node.js Application</h1><br>');
    
    // Use the module function to get the message for this route
    const welcomeMessage = welcomeModule.generateWelcome(userName);
    res.write(welcomeMessage);
    
    res.end();
    break;

        case '/about':
            // Content for the /about route
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<h1>This is the About Page</h1><br>');

            // Use the module function to get the message for this route
            const aboutMessage = aboutModule.generateAbout(userName);
            res.write(aboutMessage);
            
            res.end();
            break;

        case '/contact':
            // Content for the /contact route
            res.writeHead(200, {'Content-Type': 'text/html'});
            
            // Add the heading for the Contact Page here:
            res.write('<h1>This is the Contact Page</h1><br>');

            // Use the module function to get the message for this route
            const contactMessage = contactModule.generateContact(userName);
            res.write(contactMessage);
            
            res.end();
            break;

        case '/gallery':
        
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write('<h1>This is the Gallery Page</h1>');
            res.end();
            break;
            
   
        default:
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write('Invalid Request');
            res.end();
            break;
    }
});


server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

/*
    Name: Josh Aguiluz
    Date: July 14 2025
    Section: WD-302
*/
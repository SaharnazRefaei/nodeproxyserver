// Import the necessary modules
const express = require('express');

// Create an Express application
const app = express();
const port = 3000; // You can choose any available port

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
  // Send a JSON response with the message "Hello, World!"
  res.json({ message: 'Proxy is running!' });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

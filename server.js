const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  try {
    // Read the content of the local index.html file
    const indexPath = path.join(__dirname, 'public', 'index.html');
    res.sendFile(indexPath);
  } catch (error) {
    console.error('Error reading index.html:', error.message);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

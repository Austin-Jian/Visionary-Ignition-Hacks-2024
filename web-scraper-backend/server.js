const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const PORT = 8000;

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(express.json()); // Parse JSON bodies

// POST route to scrape a webpage
app.post('/scrape', async (req, res) => {
  const { url } = req.body;

  try {
    // Fetch the webpage content
    const { data } = await axios.get(url);
    
    // Load the HTML into cheerio for parsing
    const $ = cheerio.load(data);

    // Extract text content (you can customize this selector)
    const scrapedText = $('body').text();

    // Send the scraped content back to the client
    res.json({ text: scrapedText });
  } catch (error) {
    res.status(500).json({ error: 'Failed to scrape the website.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
app.get('/', (req, res) => {
    res.send('Backend server is running!');
  });
  

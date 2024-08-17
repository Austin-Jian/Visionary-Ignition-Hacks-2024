const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');

const app = express();
const PORT = 8000;

// Middleware
app.use(cors());
app.use(express.json());

// POST route to scrape a webpage
app.post('/scrape', async (req, res) => {
  const { url } = req.body;

  try {
    // Fetch the webpage content
    const { data } = await axios.get(url);

    // Load the HTML into cheerio
    const $ = cheerio.load(data);

    // Select common tags that contain meaningful content
    const scrapedText = $('p, h1, h2, h3, h4, h5, h6')
      .map((_, element) => $(element).text().trim())
      .get()
      .filter(text => text.length > 0) // Remove empty strings
      .join('\n\n'); // Add line breaks between paragraphs and headings

    // Send the cleaned text content back to the client
    res.json({ text: scrapedText });
  } catch (error) {
    console.error('Error during scraping:', error.message);
    res.status(500).json({ error: 'Failed to scrape the website.' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Simple GET route
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

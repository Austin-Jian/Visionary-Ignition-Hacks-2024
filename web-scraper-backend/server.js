const express = require('express');
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors');
const OpenAI = require('openai'); // Updated import for OpenAI SDK v4.x

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

// Initialize the OpenAI client
require('dotenv').config();

const apiKey = process.env.OPENAI_API_KEY;
console.log(apiKey); // Ensure it's loaded correctly


app.post('/scrape', async (req, res) => {
  const { url } = req.body;

  try {
    // Fetch the webpage content
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    // Extract meaningful content from common tags
    const scrapedText = $('p, h1, h2, h3, h4, h5, h6')
      .map((_, element) => $(element).text().trim())
      .get()
      .filter(text => text.length > 0)
      .join('\n\n');

    // Log the scraped text for debugging
    console.log('Scraped Text:', scrapedText);

    // Request a summary from the OpenAI API
    const gptResponse = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are an assistant that provides concise summaries.',
        },
        {
          role: 'user',
          content: `Summarize the following content in a concise manner, focusing only on the key points:\n\n${scrapedText}`,
        },
      ],
      max_tokens: 80,
      temperature: 0.5,
    });

    // Log the GPT response for debugging
    console.log('GPT Response:', gptResponse);

    // Extract the summary from the GPT response
    const summary = gptResponse.choices[0].message.content.trim();
    res.json({ text: summary });
  } catch (error) {
    // Log the error details for debugging
    console.error('Error during scraping or summarization:', error);

    // Send a detailed error response to the client
    res.status(500).json({ error: `Failed to scrape and summarize the website. Error: ${error.message}` });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Simple GET route for health check
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

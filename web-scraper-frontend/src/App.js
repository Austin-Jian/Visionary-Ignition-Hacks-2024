import React, { useState } from 'react';
import './App.css';

function App() {
  const [inputURL, setInputURL] = useState('');
  const [outputText, setOutputText] = useState('');
  const [loading, setLoading] = useState(false);

  const summarizeContent = async () => {
    if (!inputURL) {
      alert('Please enter a URL to scrape!');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/scrape', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: inputURL }),
      });

      const data = await response.json();
      setOutputText(data.text);
    } catch (error) {
      setOutputText('Error: Unable to fetch data from the server.');
    }
    setLoading(false);
  };

  const clearText = () => {
    setInputURL('');
    setOutputText('');
  };

  return (
    <div className="App">
      <h1>Web Scraper and Summarizer</h1>
      <h3>Enter a URL to Scrape:</h3>
      <input
        type="text"
        value={inputURL}
        onChange={(e) => setInputURL(e.target.value)}
        placeholder="Enter URL here..."
      />
      <br />
      <button onClick={summarizeContent} disabled={loading}>
        {loading ? 'Loading...' : 'Summarize'}
      </button>
      <h3>Scraped Output:</h3>
      <textarea
        value={outputText}
        readOnly
        placeholder="The summary will appear here..."
        rows="10"
      />
      <br />
      <button onClick={clearText}>Clear</button>

      {/* Home Button */}
      <br /><br />
      <a href="/home.html">
        <button>Home</button>
      </a>
    </div>
  );
}

export default App;

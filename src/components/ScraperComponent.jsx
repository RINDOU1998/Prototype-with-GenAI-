// src/components/ScraperComponent.jsx
import React, { useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import './ScraperComponent.css'; // Import the CSS file

const ScraperComponent = () => {
    const [url, setUrl] = useState('');
    const [data, setData] = useState([]);

    const handleUrlChange = (e) => {
        setUrl(e.target.value);
    };

    const scrapeYMCA = async () => {
        if (!url) {
            alert('Please enter a valid URL');
            return;
        }

        try {
            const response = await axios.get('https://corsproxy.io/?' + encodeURIComponent(url));
            const htmlString = response.data;

            // Parse HTML and extract required data here
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlString, 'text/html');

            const results = [];
            // Example: Modify selectors according to the actual structure of the target page
            doc.querySelectorAll('.event').forEach(event => {
                const startTime = event.querySelector('.start-time').textContent;
                const endTime = event.querySelector('.end-time').textContent;
                const postTime = event.querySelector('.post-time').textContent;
                const numberOfMembers = event.querySelector('.number-of-members').textContent;

                results.push({
                    startTime,
                    endTime,
                    postTime,
                    numberOfMembers
                });
            });

            setData(results);
        } catch (error) {
            console.error('Error scraping the site:', error);
        }
    };

    const downloadCSV = () => {
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Scraped Data');
        XLSX.writeFile(wb, 'scraped_data.csv');
    };

    return (
        <div className="scraper-container">
            <div className="scraper-box">
                <input
                    type="text"
                    value={url}
                    onChange={handleUrlChange}
                    placeholder="Enter URL to scrape"
                    className="input-field"
                />
                <button onClick={scrapeYMCA} className="scrape-button">Start Scrape</button>
                <button onClick={downloadCSV} disabled={data.length === 0} className="download-button">Download CSV</button>
            </div>
            <pre className="data-display">{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default ScraperComponent;

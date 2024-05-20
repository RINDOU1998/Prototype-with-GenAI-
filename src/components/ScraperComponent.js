// src/components/ScraperComponent.js
import React, { useState } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';

const ScraperComponent = () => {
    const [data, setData] = useState([]);

    const scrapeYMCA = async () => {
        try {
            const response = await axios.get('https://corsproxy.io/?' + encodeURIComponent('https://www.ymcawebsite.com/your-target-page'));
            const htmlString = response.data;
            
            // Parse HTML and extract required data here
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlString, 'text/html');
            
            const results = [];
            // Example: Modify selectors according to the actual structure of the YMCA page
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
            console.error('Error scraping YMCA site:', error);
        }
    };

    const downloadCSV = () => {
        const ws = XLSX.utils.json_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'YMCA Data');
        XLSX.writeFile(wb, 'ymca_data.csv');
    };

    return (
        <div>
            <button onClick={scrapeYMCA}>Scrape YMCA Data</button>
            <button onClick={downloadCSV} disabled={data.length === 0}>Download CSV</button>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
    );
};

export default ScraperComponent;

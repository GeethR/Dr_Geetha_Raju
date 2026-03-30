#!/usr/bin/env node

import XLSX from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

const excelFilePath = '/Users/geetharaju/Downloads/geetha_raju_events.xlsx';
const outputFilePath = path.join(process.cwd(), 'data', 'speeches.json');

console.log('Reading Excel file...');

try {
  // Read the Excel file
  const workbook = XLSX.readFile(excelFilePath);

  // Get the first worksheet
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];

  console.log(`Reading sheet: ${sheetName}`);

  // Convert to JSON
  const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  console.log(`Found ${jsonData.length} rows in the Excel file`);

  // Skip header row and parse data
  const speeches = [];

  for (let i = 1; i < jsonData.length; i++) {
    const row = jsonData[i];

    if (row && row.length >= 6 && row[0] !== 'Name of event') { // Skip header row
      const speech = {
        id: i - 1, // Adjust ID to start from 1
        title: row[3] || '', // Theme / topic as title
        event: row[0] || '', // Name of event as event
        date: row[4] || '', // Date
        location: `${row[1] || ''}${row[1] && row[2] ? ', ' : ''}${row[2] || ''}`, // Venue + Place
        role: row[6] || '', // Role
        organization: row[5] || '', // Organisation or host name
        socialLinks: [],
        photos: [],
      };

      speeches.push(speech);
    }
  }

  console.log(`Parsed ${speeches.length} speeches`);

  if (speeches.length > 0) {
    console.log('Sample speech:', JSON.stringify(speeches[0], null, 2));

    // Ensure the data directory exists
    const dataDir = path.dirname(outputFilePath);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Write the data to the JSON file
    fs.writeFileSync(outputFilePath, JSON.stringify(speeches, null, 2));
    console.log(`✅ Successfully updated ${outputFilePath} with ${speeches.length} speeches`);
  } else {
    console.log('❌ No speeches found in the Excel file');
  }

} catch (error) {
  console.error('❌ Error processing Excel file:', error.message);
}
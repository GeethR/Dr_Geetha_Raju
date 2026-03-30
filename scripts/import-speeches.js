#!/usr/bin/env node

import { readExcelFile, updateSpeechesData } from '../lib/excelReader.js';

const excelFilePath = '/Users/geetharaju/Downloads/geetha_raju_events.xlsx';

console.log('Reading Excel file...');
const speeches = readExcelFile(excelFilePath);

if (speeches.length > 0) {
  console.log(`Found ${speeches.length} speeches in the Excel file`);
  console.log('Sample speech:', speeches[0]);

  console.log('Updating speeches data...');
  updateSpeechesData(speeches);

  console.log('✅ Successfully imported speeches from Excel file!');
} else {
  console.log('❌ No speeches found in the Excel file or error reading file');
}
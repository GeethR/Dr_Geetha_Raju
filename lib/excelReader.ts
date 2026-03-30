import * as XLSX from 'xlsx';
import * as fs from 'fs';
import * as path from 'path';

interface SpeechData {
  id: number;
  title: string;
  event: string;
  date: string;
  location: string;
  role: string;
  organization: string;
  socialLinks: string[];
  photos: string[];
}

export function readExcelFile(filePath: string): SpeechData[] {
  try {
    // Read the Excel file
    const workbook = XLSX.readFile(filePath);

    // Get the first worksheet
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    // Convert to JSON
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    // Skip header row and parse data
    const speeches: SpeechData[] = [];

    for (let i = 1; i < jsonData.length; i++) {
      const row = jsonData[i] as any[];

      if (row.length >= 7) { // Ensure we have enough columns
        const speech: SpeechData = {
          id: i,
          title: row[0] || '',
          event: row[1] || '',
          date: row[2] || '',
          location: row[3] || '',
          role: row[4] || '',
          organization: row[5] || '',
          socialLinks: row[6] ? row[6].split(',').map((link: string) => link.trim()) : [],
          photos: row[7] ? row[7].split(',').map((photo: string) => photo.trim()) : [],
        };

        speeches.push(speech);
      }
    }

    return speeches;
  } catch (error) {
    console.error('Error reading Excel file:', error);
    return [];
  }
}

// Function to update the speeches.json file
export function updateSpeechesData(speeches: SpeechData[]) {
  const filePath = path.join(process.cwd(), 'data', 'speeches.json');

  try {
    // Ensure the data directory exists
    const dataDir = path.dirname(filePath);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Write the data to the JSON file
    fs.writeFileSync(filePath, JSON.stringify(speeches, null, 2));
    console.log(`Successfully updated ${filePath} with ${speeches.length} speeches`);
  } catch (error) {
    console.error('Error writing speeches data:', error);
  }
}
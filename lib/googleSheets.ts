import { google } from 'googleapis';

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];

export async function getGoogleSheetsData(spreadsheetId: string, range: string) {
  try {
    // For production, use environment variables or a secure key management system
    const credentials = process.env.GOOGLE_SHEETS_CREDENTIALS
      ? JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS)
      : null;

    if (!credentials) {
      console.warn('Google Sheets credentials not found. Using fallback data.');
      return null;
    }

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: SCOPES,
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    return response.data.values;
  } catch (error) {
    console.error('Error fetching Google Sheets data:', error);
    return null;
  }
}
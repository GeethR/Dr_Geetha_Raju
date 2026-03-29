import { getGoogleSheetsData } from '@/lib/googleSheets';

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  status?: string;
  year?: string;
  collaborators?: string[];
}

// Google Sheets configuration
const SPREADSHEET_ID = '1b3C54taIcGK_vcdH0KucBVVS__DLxHBx'; // Your spreadsheet ID
const PROJECTS_RANGE = 'Projects!A2:G'; // Adjust range based on your sheet structure

// Fallback data in case Google Sheets fails
const fallbackProjects: Project[] = [
  {
    id: 1,
    title: 'Research Project 1',
    description: 'Description of your research project and its impact.',
    tags: ['Research', 'AI', 'Data Science'],
    link: 'https://example.com',
  },
  {
    id: 2,
    title: 'Research Project 2',
    description: 'Another significant research project.',
    tags: ['Machine Learning', 'NLP'],
    link: 'https://example.com',
  },
];

export async function getProjects(): Promise<Project[]> {
  try {
    const data = await getGoogleSheetsData(SPREADSHEET_ID, PROJECTS_RANGE);

    if (!data || data.length === 0) {
      console.log('No data from Google Sheets, using fallback data');
      return fallbackProjects;
    }

    // Parse the Google Sheets data
    // Assuming columns: Title, Description, Tags (comma-separated), Link, Status, Year, Collaborators
    const projects: Project[] = data.map((row: any[], index: number) => ({
      id: index + 1,
      title: row[0] || 'Untitled Project',
      description: row[1] || 'No description available',
      tags: row[2] ? row[2].split(',').map((tag: string) => tag.trim()) : [],
      link: row[3] || undefined,
      status: row[4] || undefined,
      year: row[5] || undefined,
      collaborators: row[6] ? row[6].split(',').map((collab: string) => collab.trim()) : undefined,
    }));

    return projects;
  } catch (error) {
    console.error('Error fetching projects from Google Sheets:', error);
    return fallbackProjects;
  }
}
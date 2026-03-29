import ProjectCard from '@/components/ProjectCard';
import { getProjects, type Project } from '@/lib/projects';
import ProjectsClient from './ProjectsClient';

export default async function Projects() {
  const projectsData = await getProjects();

  return <ProjectsClient initialProjects={projectsData} />;
}

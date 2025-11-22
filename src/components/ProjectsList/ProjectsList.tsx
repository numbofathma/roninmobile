import ProjectsItem from '@/components/ProjectsItem';
import { IProject } from '@/interfaces/app';
import { getProjects } from '@/helpers/api';

const ProjectsList = async () => {
  const { projects = [] } = await getProjects();

  return (
    <div className='grid auto-rows-max grid-cols-1 gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2'>
      {projects.map((project: IProject) => (
        <ProjectsItem key={project.slug} {...project} />
      ))}
    </div>
  );
};

export default ProjectsList;

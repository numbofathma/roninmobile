import { IProject } from '@/interfaces/app';
import { BASE_URL, CDN_URL } from '@/constants';

export const getProjects = async () => {
  try {
    const response = await fetch(`${BASE_URL}/api/projects`);
    const { data = [], ok } = await response.json();

    return {
      ok,
      projects: data as IProject[],
    };
  } catch (_) {
    return {
      ok: false,
      projects: [],
    };
  }
};

export const getProjectBySlug = async (slug: string) => {
  try {
    const response = await fetch(`${BASE_URL}/api/projects/${slug}`);
    const { data = {}, ok } = await response.json();

    return {
      ok,
      project: data as IProject,
    };
  } catch (_) {
    return {
      ok: false,
    };
  }
};

export const getMetadataInfo = async (
  slug: string,
  language: { title: string; description: string },
  resolver: (slug: string) => Promise<{ ok: boolean; project?: IProject }>,
) => {
  const { title, description } = language;

  try {
    const { project } = await resolver(slug);
    const { title: projectTitle, description: projectDescription } = project || {};

    return {
      title: `${title} ~ ${projectTitle}`,
      description: projectDescription,
      openGraph: {
        title: `${title} ~ ${projectTitle}`,
        description: projectDescription,
        images: [{ url: `${CDN_URL}/static/img/roninmobile.webp` }],
      },
    };
  } catch {
    return { title, description };
  }
};

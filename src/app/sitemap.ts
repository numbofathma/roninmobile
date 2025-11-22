import { BASE_URL, CDN_URL } from '@/constants';
import { projects } from '@/constants/db';
import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/project/${project.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    images: [project.image, ...project.portfolio],
    priority: 1,
  }));

  const policyPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/policy/${project.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
    images: [project.image, ...project.portfolio],
  }));

  const termsPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/terms/${project.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.7,
    images: [project.image, ...project.portfolio],
  }));

  const homepage: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1,
      images: [`${CDN_URL}/static/img/roninmobile.webp`],
    },
  ];

  return [...homepage, ...projectPages, ...policyPages, ...termsPages];
}

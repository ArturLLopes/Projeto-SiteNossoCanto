import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  
  const routes = [
    '/',
    '/sobre',
    '/linha-do-tempo',
    '/favoritos',
    '/galeria',
    '/documentos',
    '/historias',
    '/tributos',
  ];

  return routes.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: now,
  }));
}
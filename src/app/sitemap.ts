import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
export default function sitemap(): MetadataRoute.Sitemap { const now = new Date(); return ['/','/sobre','/linha-do-tempo','/favoritos','/galeria','/historias','/tributos'].map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: now })); }

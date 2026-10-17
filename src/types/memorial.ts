export interface Memorial {
  name: string;
  birthDate: string;
  deathDate: string;
  birthPlace: string;
  deathPlace: string;
  quote: string;
  biography: string[];
  familyCredit: string;
  avatarUrl?: string;
  coverUrl?: string;
}

export interface TimelineEvent {
  date: string;
  title: string;
  description: string;
}

export interface Favorite {
  label: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  date: string;
  imageUrl?: string;
}

export interface GalleryFolder {
  id: string;
  title: string;
  date: string;
  comment: string;
  items: GalleryItem[];
}

export type DocumentCategoryType = "cartazes" | "convites" | "correspondencias" | "certificados" | "programas" | "correspondencias_cartas";

export interface DocumentItem {
  id: string;
  title: string;
  description: string;
  date: string;
  category: DocumentCategoryType;
  imageUrl?: string;
  images?: string[];
  notes?: string;
}


export interface DocumentDivision {
  id: DocumentCategoryType;
  title: string;
  description: string;
  dateRange: string;
  items: DocumentItem[];
}

export interface AudioItem {
  id: string;
  title: string;
  date: string;
  duration: string;
  speaker: string;
  comment: string;
  audioUrl?: string;
  youtubeId?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  date: string;
  comment: string;
  youtubeId: string;
}

export interface Story {
  id: string;
  title: string;
  author: string;
  date: string;
  summary: string;
}

export interface Tribute {
  id: string;
  author: string;
  message: string;
  createdAt: string;
}

export interface RecentUpdate {
  type: 'tributo' | 'fotografia' | 'historia';
  title: string;
  date: string;
}

export interface RemembranceDay {
  label: string;
  date: string;
  description: string;
}

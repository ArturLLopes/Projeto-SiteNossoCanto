export interface Memorial {
  name: string;
  birthDate: string;
  deathDate: string;
  birthPlace: string;
  deathPlace: string;
  quote: string;
  biography: string[];
  familyCredit: string;
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

export interface AudioItem {
  id: string;
  title: string;
  date: string;
  duration: string;
  speaker: string;
  comment: string;
  audioUrl?: string;
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

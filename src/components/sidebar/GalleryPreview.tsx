import { Card } from '@/components/ui/Card';
import { galleryItems } from '@/data/memorial';
export function GalleryPreview(){ return <Card className="p-5"><div className="flex items-center justify-between"><h3 className="font-display text-xl">Galeria</h3><a href="#galeria" className="text-xs font-semibold text-[var(--sage-dark)]">Ver tudo</a></div><div className="mt-4 grid grid-cols-3 gap-2">{galleryItems.slice(0,6).map((item)=><div key={item.id} className="placeholder-sheen aspect-square rounded-xl" aria-label={item.title} role="img"/> )}</div></Card>; }

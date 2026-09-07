import { Coffee, Flower2, Footprints, Heart, Library, Music2 } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { favorites } from '@/data/memorial';
const icons = [Flower2, Library, Music2, Coffee, Footprints, Heart];
export function Favorites() { return <section id="favoritos" className="scroll-mt-24"><SectionTitle eyebrow="Favoritos" title="Coisas que amava" description="Pequenos detalhes que ajudam a contar quem ela foi."/><div className="grid grid-cols-2 gap-3 sm:grid-cols-3">{favorites.map((item,index) => { const Icon=icons[index]; return <Card key={item.label} className="p-4 sm:p-5"><Icon className="h-5 w-5 text-[var(--sage-dark)]" aria-hidden="true"/><h3 className="mt-3 font-display text-lg">{item.label}</h3><p className="mt-1 text-xs leading-5 text-[var(--warm-gray)]">{item.description}</p></Card>; })}</div></section>; }

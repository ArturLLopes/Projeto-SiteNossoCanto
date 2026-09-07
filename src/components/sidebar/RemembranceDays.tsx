import { CalendarHeart } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { remembranceDays } from '@/data/memorial';
export function RemembranceDays(){ return <Card className="p-5"><h3 className="font-display text-xl">Datas de lembrança</h3><div className="mt-4 space-y-4">{remembranceDays.map((day)=><div key={day.label} className="flex gap-3"><CalendarHeart className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sage-dark)]"/><div><p className="text-sm font-medium text-[#4f554d]">{day.date} · {day.label}</p><p className="mt-1 text-xs leading-5 text-[var(--warm-gray)]">{day.description}</p></div></div>)}</div></Card>; }

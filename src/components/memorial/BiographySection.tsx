import { Card } from '@/components/ui/Card';
import { SectionTitle } from '@/components/ui/SectionTitle';
import { memorialInfo } from '@/data/memorial';
export function BiographySection() { return <section id="biografia" className="scroll-mt-24"><SectionTitle eyebrow="Memória" title="Uma vida para lembrar"/><Card className="p-6 sm:p-8"><div className="max-w-3xl space-y-5 text-[15px] leading-7 text-[#555a53]">{memorialInfo.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><p className="mt-8 text-sm font-medium text-[#4d554b]">— {memorialInfo.familyCredit}</p></Card></section>; }

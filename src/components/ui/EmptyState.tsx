import { Heart } from 'lucide-react';
export function EmptyState({ children }: { children: React.ReactNode }) { return <div className="flex min-h-36 flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--border)] bg-[#fbfaf7] px-5 text-center text-sm text-[var(--warm-gray)]"><Heart className="mb-3 h-5 w-5" aria-hidden="true" />{children}</div>; }

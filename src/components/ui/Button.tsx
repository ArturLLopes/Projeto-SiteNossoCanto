import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
export function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) { return <button className={cn('inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--sage)] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[var(--sage-dark)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--sage)] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50', className)} {...props} />; }

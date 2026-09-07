import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';
export function Card({ className, ...props }: HTMLAttributes<HTMLElement>) { return <section className={cn('rounded-3xl border border-[var(--border)] bg-[var(--card)] shadow-[var(--shadow-soft)]', className)} {...props} />; }

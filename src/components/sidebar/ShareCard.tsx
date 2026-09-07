'use client';
import { Check, Link2, Share2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
export function ShareCard(){ const [copied,setCopied]=useState(false); async function share(){ const url=window.location.href; if(navigator.share){ await navigator.share({title:document.title,url}).catch(()=>{}); } else { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(()=>setCopied(false),2000); } } return <Card className="p-5"><h3 className="font-display text-xl">Compartilhe este memorial</h3><p className="mt-2 text-sm leading-6 text-[var(--warm-gray)]">Convide familiares e amigos a preservar histórias juntos.</p><Button className="mt-4 w-full" onClick={share}>{copied?<Check className="h-4 w-4"/>:<Share2 className="h-4 w-4"/>}{copied?'Link copiado!':'Compartilhar memorial'}</Button><p className="mt-3 flex items-center justify-center gap-1 text-xs text-[var(--warm-gray)]"><Link2 className="h-3 w-3"/> Preparado para Web Share API</p></Card>; }

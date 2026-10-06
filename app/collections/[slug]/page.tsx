import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ArrowLink, CollectionGrid, Eyebrow, Photo, Reveal } from '@/components/site'
import { images } from '@/lib/data'
export function generateStaticParams(){return images.collections.map(x=>({slug:x.slug}))}
export default function CollectionDetail({params}:{params:{slug:string}}){const item=images.collections.find(x=>x.slug===params.slug);if(!item)notFound();return <><section className="detail-hero"><div className="detail-copy"><Eyebrow>THOUGHTFUL TOKENS™ / COLLECTIONS</Eyebrow><h1>{item.title}</h1><p>{item.desc} Tell us a little about your occasion and we’ll shape something just for you.</p><Link className="button-dark" href="/contact">Enquire about this collection <ArrowRight size={16}/></Link></div><Photo src={item.src} alt={item.title} className="detail-image"/></section><section className="section-pad detail-bottom"><Reveal><Eyebrow>MADE PERSONAL, MADE MEMORABLE</Eyebrow><h2>Thoughtfully chosen.<br/><em>Uniquely yours.</em></h2><p>Choose a direction, then make it your own with personal notes, custom packaging and thoughtful details for your people.</p><ArrowLink href="/contact">Start planning</ArrowLink></Reveal></section><section className="section-pad"><Eyebrow>MORE TO EXPLORE</Eyebrow><CollectionGrid limit={3}/></section></>}

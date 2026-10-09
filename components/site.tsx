'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react'
import { nav, images, visualJournalItems, companyLogoPlaceholders } from '@/lib/data'

export function Header() {
 const [scrolled,setScrolled]=useState(false), [open,setOpen]=useState(false)
 useEffect(()=>{const f=()=>setScrolled(window.scrollY>32);window.addEventListener('scroll',f,{passive:true});return()=>window.removeEventListener('scroll',f)},[])
 const headerNav=nav
 return <header className={`site-header ${scrolled?'is-scrolled':''}`}><div className="nav-wrap">
  <Link className="wordmark" href="/" aria-label="Thoughtful Tokens home"><Image className="brand-mark" src="/images/thoughtful-tokens-mark.jpg" alt="" width={42} height={42}/><span className="brand-name">Thoughtful Tokens<span>™</span></span></Link>
  <nav className="desktop-nav" aria-label="Main navigation">{headerNav.map(x=><Link key={x.label} href={x.href}>{x.label}</Link>)}</nav>
  <Link className="nav-cta" href="/contact">Get a quote <ArrowUpRight size={15}/></Link>
  <button className="menu-toggle" aria-label={open?'Close menu':'Open menu'} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
 </div><AnimatePresence>{open&&<motion.nav className="mobile-nav" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} aria-label="Mobile navigation">{headerNav.map((x,i)=><motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:i*.04}} key={x.label}><Link href={x.href} onClick={()=>setOpen(false)}>{x.label}<ArrowUpRight size={17}/></Link></motion.div>)}<Link className="mobile-cta" href="/contact" onClick={()=>setOpen(false)}>Get a quote <ArrowRight size={16}/></Link></motion.nav>}</AnimatePresence></header>
}
export function Footer(){return <footer className="footer"><div className="footer-main"><div><Link className="wordmark footer-mark" href="/"><Image className="brand-mark" src="/images/thoughtful-tokens-mark.jpg" alt="" width={48} height={48}/><span className="brand-name">Thoughtful Tokens<span>™</span></span></Link><p>Making gifts meaningful & useful.<br/>Har tohfe mein ek ehsaas chupa hota hai.</p></div><div className="footer-links"><div><small>EXPLORE</small>{[...nav,{label:'Contact',href:'/contact'}].map(x=><Link key={x.href} href={x.href}>{x.label}</Link>)}</div><div><small>SAY HELLO</small><a href="mailto:hello@thoughtfultokens.in">hello@thoughtfultokens.in</a><a href="tel:+910000000000">+91 00000 00000</a><a href="https://www.instagram.com/thoughtfultokenspvt.ltd/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13}/></a></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Thoughtful Tokens™</span><span>Made with thought, in India.</span><Link href="#top">Back to top ↑</Link></div></footer>}
export function Photo({
 src,
 alt,
 className = '',
 priority = false,
}: {
 src: string
 alt: string
 className?: string
 priority?: boolean
}) {
 return (
  <div className={`photo ${className}`}>
   <Image
    src={src}
    alt={alt}
    fill
    sizes="(max-width: 768px) 100vw, 60vw"
    priority={priority}
    loading={priority ? 'eager' : 'lazy'}
   />
  </div>
 )
}

export function Reveal({
 children,
 className = '',
 delay = 0,
}: {
 children: React.ReactNode
 className?: string
 delay?: number
}) {
 const reduceMotion = useReducedMotion()

 return (
  <motion.div
   className={className}
   initial={reduceMotion ? false : { opacity: 0, y: 16 }}
   whileInView={{ opacity: 1, y: 0 }}
   viewport={{
    once: true,
    amount: 0,
    margin: '0px 0px 100px 0px',
   }}
   transition={{
    duration: reduceMotion ? 0.01 : 0.4,
    delay,
    ease: [0.22, 1, 0.36, 1],
   }}
  >
   {children}
  </motion.div>
 )
}
export function ArrowLink({href,children}:{href:string,children:React.ReactNode}){return <Link className="text-link" href={href}>{children}<span><ArrowUpRight size={17}/></span></Link>}
export function Eyebrow({children}:{children:React.ReactNode}){return <p className="eyebrow">{children}</p>}
export function SectionTitle({eyebrow,title,copy}:{eyebrow:string,title:string,copy?:string}){return <div className="section-title"><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{copy&&<p>{copy}</p>}</div>}
export function CompanyShowcase(){
 const reduceMotion=useReducedMotion()
 return <section className="company-showcase" aria-labelledby="company-showcase-title"><motion.div className="company-showcase__inner" initial={reduceMotion?false:{opacity:0,y:18}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.2}} transition={{duration:reduceMotion?.01:.7,ease:[.22,1,.36,1]}}>
  <div className="company-showcase__intro"><Eyebrow>03 — OUR PARTNERSHIPS</Eyebrow><h2 id="company-showcase-title">In Good<br/><em>Company</em></h2><p>A selection of brands and people we've had the privilege of working with.</p></div>
  <ul className="company-showcase__logos" aria-label="Client logo placeholders, to be replaced with confirmed partner logos">{companyLogoPlaceholders.map(item=><li key={item.id}><span>{item.label}</span></li>)}</ul>
 </motion.div></section>
}
export function Hero(){
 const reduceMotion=useReducedMotion()
 const [active,setActive]=useState(0)
 useEffect(()=>{if(reduceMotion)return;const timer=window.setInterval(()=>setActive(index=>(index+1)%images.heroStack.length),4200);return()=>window.clearInterval(timer)},[reduceMotion])
 const current=images.heroStack[active]
 return <section className="hero hero-editorial" id="top"><div className="hero-editorial__inner">
  <div className="hero-side hero-side--left"><Eyebrow>THOUGHTFUL GIFTING</Eyebrow><p>Har tohfe mai ek<br/>ehsaas chupa hota hai.</p><span className="hero-side__line"/></div>
  <div className="hero-stack" aria-label="A changing collection of Thoughtful Tokens gift imagery">
   <div className="hero-stack__layer hero-stack__layer--back" aria-hidden="true"><Image src={images.heroStack[1].src} alt="" fill sizes="(max-width: 700px) 76vw, 32vw"/></div>
   <div className="hero-stack__layer hero-stack__layer--middle" aria-hidden="true"><Image src={images.heroStack[2].src} alt="" fill sizes="(max-width: 700px) 76vw, 32vw"/></div>
   <div className="hero-stack__layer hero-stack__layer--front" aria-hidden="true"><Image src={images.heroStack[3].src} alt="" fill sizes="(max-width: 700px) 76vw, 32vw"/></div>
   <div className="hero-stack__layer hero-stack__layer--rear" aria-hidden="true"><Image src={images.heroStack[4].src} alt="" fill sizes="(max-width: 700px) 76vw, 32vw"/></div>
   <AnimatePresence mode="wait" initial={false}><motion.div key={current.src} className="hero-stack__image" initial={reduceMotion?{opacity:1}:{opacity:0,y:18,scale:.97,rotate:1.5}} animate={{opacity:1,y:0,scale:1,rotate:0}} exit={reduceMotion?{opacity:1}:{opacity:0,y:-12,scale:1.015,rotate:-1}} transition={{duration:reduceMotion?.01:.95,ease:[.22,1,.36,1]}}>
    <Image src={current.src} alt={current.alt} fill priority={active===0} sizes="(max-width: 700px) 76vw, (max-width: 1100px) 38vw, 32vw" />
   </motion.div></AnimatePresence>
   <span className="hero-stack__caption">{current.label}</span><span className="hero-stack__count">{String(active+1).padStart(2,'0')} / {String(images.heroStack.length).padStart(2,'0')}</span>
  </div>
  <div className="hero-side hero-side--right"><h1><span>CURATE.</span><span>PERSONALIZE.</span><span>CELEBRATE.</span></h1><Link href="/collections" className="hero-side__link">Explore collections <ArrowDownRight size={16}/></Link></div>
  <div className="hero-editorial__foot"><span>THOUGHTFUL TOKENS™</span><span>MADE WITH MEANING · MADE TO BE REMEMBERED</span><Link href="/contact">Get a quote <ArrowUpRight size={14}/></Link></div>
 </div></section>
}

export function CategoryGallery(){return <div className="category-grid">{images.categories.map((x,i)=><Link href={x.href} className={`category-item category-${i+1}`} key={x.n}><Photo src={x.src} alt={x.alt}/><div className="category-meta"><span>{x.n}</span><h3>{x.title}</h3><ArrowUpRight size={18}/></div><p className="category-description">{x.desc}</p></Link>)}</div>}
export function CollectionGrid({limit}:{limit?:number}){return <div className="collection-grid">{images.collections.slice(0,limit).map((x,i)=><Link href={`/collections/${x.slug}`} className={`collection-item collection-${i+1}`} key={x.slug}><Photo src={x.src} alt={x.title}/><div className="collection-meta"><div><h3>{x.title}</h3><p>{x.desc}</p></div><span className="round-arrow"><ArrowUpRight size={17}/></span></div></Link>)}</div>}
export function JournalGrid(){
 const stageRef=useRef<HTMLDivElement>(null)
 const inView=useInView(stageRef,{once:true,amount:.08})
 const reduceMotion=useReducedMotion()
 const [bounds,setBounds]=useState({width:0,height:0})
 useEffect(()=>{
  const stage=stageRef.current
  if(!stage)return
  const observer=new ResizeObserver(([entry])=>setBounds({width:entry.contentRect.width,height:entry.contentRect.height}))
  observer.observe(stage)
  return()=>observer.disconnect()
 },[])
 return <div className="journal-orbit" ref={stageRef} role="region" aria-label="Thoughtful Tokens visual journal">
  <div className="journal-orbit__field" aria-hidden="true"/>
  <div className="journal-orbit__center-wrap"><motion.div className="journal-orbit__center" initial={{opacity:0,y:16}} animate={inView?{opacity:1,y:0}:{opacity:0,y:16}} transition={{duration:.8,ease:[.22,1,.36,1]}}>
   <span className="journal-orbit__brand">THOUGHTFUL TOKENS™</span>
   <h2>Visual Journal</h2>
   <p>A collection of thoughtful details, meaningful moments and gifts worth remembering.</p>
   <a href="https://www.instagram.com/thoughtfultokenspvt.ltd/" target="_blank" rel="noreferrer">Visit our Instagram <ArrowUpRight size={14}/></a>
  </motion.div></div>
  {visualJournalItems.map((item,index)=>{
   const radiusX=Math.max(0,bounds.width*(item.orbitX+(bounds.width<640?.14:0)))
   const radiusY=Math.max(0,bounds.height*item.orbitY)
   const angle=(deg:number)=>((item.startAngle+deg)*Math.PI)/180
   const frames=Array.from({length:73},(_,step)=>step*5)
   const x=frames.map(deg=>Math.cos(angle(deg))*radiusX)
   const y=frames.map(deg=>Math.sin(angle(deg))*radiusY)
   const depth=frames.map(deg=>.93+((Math.sin(angle(deg))+1)/2)*.08)
   const visibility=frames.map(deg=>.82+((Math.sin(angle(deg))+1)/2)*.18)
   const initialX=x[0]??0,initialY=y[0]??0
   return <motion.div className="journal-orbit__traveler" key={`${item.label}-${index}`} initial={reduceMotion?false:{opacity:0,x:initialX,y:initialY,scale:.88}} animate={reduceMotion?{opacity:1,x:initialX,y:initialY,scale:.97}:{opacity:inView?visibility:0,x:inView?x:initialX,y:inView?y:initialY,scale:inView?depth:.88}} transition={{opacity:{duration:.7,delay:item.delay},scale:reduceMotion?{duration:.3}:{duration:item.duration,ease:'linear',repeat:Infinity,delay:item.delay},x:{duration:item.duration,ease:'linear',repeat:reduceMotion?0:Infinity,delay:item.delay},y:{duration:item.duration,ease:'linear',repeat:reduceMotion?0:Infinity,delay:item.delay}}} style={{left:'50%',top:'50%',zIndex:Math.round(Math.sin(angle(0))*2+3)}}>
    <motion.a className="journal-orbit__image" href="https://www.instagram.com/thoughtfultokenspvt.ltd/" target="_blank" rel="noreferrer" aria-label={`${item.label} — view Thoughtful Tokens on Instagram`} whileHover={reduceMotion?{scale:1.05}:{scale:1.07}} transition={{duration:.3,ease:[.22,1,.36,1]}} style={{width:`min(${item.width}px, var(--journal-image-max))`,height:`min(${item.height}px, var(--journal-image-max-height))`,rotate:`${item.rotation}deg`}}>
     <Image src={item.src} alt={item.alt} fill sizes="(max-width: 640px) 92px, (max-width: 1100px) 120px, 154px" style={{objectFit:'cover',objectPosition:item.objectPosition}}/>
     <span>{item.label}</span>
    </motion.a>
   </motion.div>
  })}
 </div>
}

'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion'
import { ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react'
import { nav, images, visualJournalItems } from '@/lib/data'

export function Header() {
 const [scrolled,setScrolled]=useState(false), [open,setOpen]=useState(false)
 useEffect(()=>{const f=()=>setScrolled(window.scrollY>32);window.addEventListener('scroll',f,{passive:true});return()=>window.removeEventListener('scroll',f)},[])
 return <header className={`site-header ${scrolled?'is-scrolled':''}`}><div className="nav-wrap">
  <Link className="wordmark" href="/">Thoughtful Tokens<span>™</span></Link>
  <nav className="desktop-nav" aria-label="Main navigation">{nav.map(x=><Link key={x.href} href={x.href}>{x.label}</Link>)}</nav>
  <Link className="nav-cta" href="/contact">Get a quote <ArrowUpRight size={15}/></Link>
  <button className="menu-toggle" aria-label={open?'Close menu':'Open menu'} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
 </div><AnimatePresence>{open&&<motion.nav className="mobile-nav" initial={{height:0,opacity:0}} animate={{height:'auto',opacity:1}} exit={{height:0,opacity:0}} aria-label="Mobile navigation">{nav.map((x,i)=><motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:i*.04}} key={x.href}><Link href={x.href} onClick={()=>setOpen(false)}>{x.label}<ArrowUpRight size={17}/></Link></motion.div>)}<Link className="mobile-cta" href="/contact" onClick={()=>setOpen(false)}>Get a quote <ArrowRight size={16}/></Link></motion.nav>}</AnimatePresence></header>
}
export function Footer(){return <footer className="footer"><div className="footer-main"><div><Link className="wordmark footer-mark" href="/">Thoughtful Tokens<span>™</span></Link><p>Making gifts meaningful & useful.<br/>Har tohfe mein ek ehsaas chupa hota hai.</p></div><div className="footer-links"><div><small>EXPLORE</small>{[...nav,{label:'Contact',href:'/contact'}].map(x=><Link key={x.href} href={x.href}>{x.label}</Link>)}</div><div><small>SAY HELLO</small><a href="mailto:hello@thoughtfultokens.in">hello@thoughtfultokens.in</a><a href="tel:+910000000000">+91 00000 00000</a><a href="https://www.instagram.com/thoughtfultokenspvt.ltd/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight size={13}/></a></div></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Thoughtful Tokens™</span><span>Made with thought, in India.</span><Link href="#top">Back to top ↑</Link></div></footer>}
export function Reveal({children,className='',delay=0}:{children:React.ReactNode,className?:string,delay?:number}){return <motion.div className={className} initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'0px 0px -70px 0px'}} transition={{duration:.7,delay,ease:[.22,1,.36,1]}}>{children}</motion.div>}
export function Photo({src,alt,className='',priority=false}:{src:string,alt:string,className?:string,priority?:boolean}){return <div className={`photo ${className}`}><Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 60vw" priority={priority}/></div>}
export function ArrowLink({href,children}:{href:string,children:React.ReactNode}){return <Link className="text-link" href={href}>{children}<span><ArrowUpRight size={17}/></span></Link>}
export function Eyebrow({children}:{children:React.ReactNode}){return <p className="eyebrow">{children}</p>}
export function SectionTitle({eyebrow,title,copy}:{eyebrow:string,title:string,copy?:string}){return <div className="section-title"><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{copy&&<p>{copy}</p>}</div>}
export function Hero(){
 const reduceMotion=useReducedMotion()
 const float=reduceMotion?{}:{y:[0,-10,0],rotate:[0,-.7,0],transition:{duration:8,repeat:Infinity,ease:'easeInOut' as const}}
 return <section className="hero" id="top"><div className="hero-top"><Eyebrow>A gifting studio for meaningful moments</Eyebrow><span className="hero-index">01 / THOUGHTFULLY, ALWAYS</span></div>
  <div className="hero-title"><h1>Har tohfe mai<br/><em>ek ehsaas</em><br/>chupa hota hai.</h1><div className="hero-intro"><span className="hero-rule"/><p>Thoughtfully curated gifts designed to make every occasion, milestone and relationship memorable.</p><Link href="/collections" className="text-link">Explore collections <span><ArrowDownRight size={17}/></span></Link></div></div>
  <div className="hero-orbit" aria-label="A floating collection of thoughtful gifts">
   <motion.div className="orbit-photo orbit-main" animate={float}><Photo src={images.hero.src} alt="A thoughtfully wrapped gift, ready to be given" priority/></motion.div>
   <motion.div className="orbit-photo orbit-detail" animate={reduceMotion?{}:{y:[0,9,0],rotate:[2,3,2],transition:{duration:7,repeat:Infinity,ease:'easeInOut'}}}><Photo src={images.story.src} alt="A hand-tied gift with a soft ribbon"/></motion.div>
   <motion.div className="orbit-photo orbit-stationery" animate={reduceMotion?{}:{y:[0,-7,0],rotate:[-3,-2,-3],transition:{duration:9,repeat:Infinity,ease:'easeInOut'}}}><Photo src={images.categories[5].src} alt="Elegant stationery and keepsakes"/></motion.div>
   <motion.div className="orbit-photo orbit-hamper" animate={reduceMotion?{}:{y:[0,8,0],rotate:[2,1,2],transition:{duration:8.5,repeat:Infinity,ease:'easeInOut'}}}><Photo src={images.detail.src} alt="A curated gift box for a special occasion"/></motion.div>
   <span className="orbit-note orbit-note-top">OBJECTS WITH<br/>A LITTLE MORE MEANING</span><span className="orbit-note orbit-note-bottom">CURATED WITH INTENTION · MADE TO BE REMEMBERED</span>
   <Link href="/collections" className="hero-discover">Explore<br/>collections <ArrowDownRight size={19}/></Link>
  </div><div className="hero-foot"><span>THOUGHTFUL TOKENS™</span><span>Scroll to discover ↓</span></div>
 </section>
}

export function CategoryGallery(){return <div className="category-grid">{images.categories.map((x,i)=><Link href="/corporate" className={`category-item category-${i+1}`} key={x.n}><Photo src={x.src} alt={x.alt}/><div className="category-meta"><span>{x.n}</span><h3>{x.title}</h3><ArrowUpRight size={18}/></div></Link>)}</div>}
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

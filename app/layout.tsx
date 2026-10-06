import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans } from 'next/font/google'
import './globals.css'
import { Header, Footer } from '@/components/site'
const serif=Cormorant_Garamond({subsets:['latin'],variable:'--font-serif',weight:['400','500','600'],display:'swap'})
const sans=DM_Sans({subsets:['latin'],variable:'--font-sans',weight:['400','500','600','700'],display:'swap'})
export const metadata:Metadata={title:'Thoughtful Tokens™ — Har tohfe mai ek ehsaas chupa hota hai',description:'Thoughtfully curated corporate and occasion gifts, made to make every relationship feel valued.'}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en" className={`${serif.variable} ${sans.variable}`}><body><Header/><main>{children}</main><Footer/></body></html>}


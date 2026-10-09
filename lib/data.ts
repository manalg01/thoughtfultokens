export const images = {
 hero: { src: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=2200&q=88', alt: 'A thoughtfully wrapped gift, ready to be given' },
 heroStack: [
  { src:'https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=1200&q=85', alt:'A refined gift box tied with a ribbon', label:'Thoughtful details' },
  { src:'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=85', alt:'A colorful wrapped gift ready to be shared', label:'A moment to celebrate' },
  { src:'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1200&q=85', alt:'A curated gift arrangement with personal touches', label:'Made personal' },
  { src:'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=85', alt:'Carefully arranged lifestyle objects and keepsakes', label:'Useful, beautifully chosen' },
  { src:'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1200&q=85', alt:'Stationery and keepsakes arranged with care', label:'Little things, lasting meaning' },
  { src:'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1200&q=85', alt:'A considered assortment for a thoughtful gift', label:'Curated with intention' },
 ],
 story: { src: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1400&q=85', alt: 'A hand-tied gift with a soft ribbon' },
 detail: { src: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1400&q=85', alt: 'Carefully arranged gift packaging' },
 categories: [
  { n:'01', title:'Corporate Gifting', desc:'Meaningful gifts for employees, clients, partners and teams.', href:'/corporate', src:'https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=1100&q=85', alt:'Beautifully wrapped corporate gifts' },
  { n:'02', title:'Mementos', desc:'Keepsakes that honour a gathering, milestone or achievement.', href:'/occasions', src:'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1100&q=85', alt:'Elegant keepsakes and stationery' },
  { n:'03', title:"Kids' Gifts", desc:'Thoughtful, playful finds for little celebrations.', href:'/occasions', src:'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1100&q=85', alt:'A colorful gift prepared for a special moment' },
  { n:'04', title:'Occasion Gifts', desc:'A considered way to mark birthdays, festivals and more.', href:'/occasions', src:'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1100&q=85', alt:'A premium gift arrangement for a celebration' },
  { n:'05', title:'Customized Gifts', desc:'Personal touches, custom packaging and made-to-order sets.', href:'/contact', src:'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1100&q=85', alt:'Personal details on a thoughtfully arranged gift' },
 ],
 collections: [
  { slug:'executive-edit', title:'The executive edit', desc:'Considered essentials for the people who move you forward.', src:'https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=1300&q=85' },
  { slug:'welcome-sets', title:'A warm welcome', desc:'A thoughtful first impression, from day one.', src:'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=1300&q=85' },
  { slug:'wellness', title:'Room to reset', desc:'Everyday rituals, made a little more special.', src:'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=1300&q=85' },
  { slug:'festive', title:'The festive table', desc:'A season of giving, gathered beautifully.', src:'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1300&q=85' },
  { slug:'personalized', title:'Made just for you', desc:'Personal touches that make a gift truly yours.', src:'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1300&q=85' },
  { slug:'keepsakes', title:'Little keepsakes', desc:'A lasting reminder of a moment well spent.', src:'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=1300&q=85' }
 ],
 journal: [
  'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80', 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80'
 ]
}
const journalImage = (src: string) => { const url = new URL(src); url.searchParams.set('w', '520'); url.searchParams.set('q', '78'); return url.toString() }

export const visualJournalItems = [
 { src: journalImage(images.hero.src), alt: 'A thoughtful gift box tied with a satin ribbon', label: 'Premium gift boxes', width: 150, height: 112, rotation: -5, orbitX: .37, orbitY: .35, startAngle: 0, duration: 24, delay: 0, objectPosition: 'center 52%' },
 { src: journalImage(images.story.src), alt: 'A carefully wrapped gift, ready to be shared', label: 'Thoughtful details', width: 122, height: 148, rotation: 4, orbitX: .45, orbitY: .32, startAngle: 30, duration: 21, delay: .2, objectPosition: 'center 50%' },
 { src: journalImage(images.detail.src), alt: 'A keepsake arranged with care', label: 'Keepsakes', width: 142, height: 104, rotation: 2, orbitX: .52, orbitY: .40, startAngle: 60, duration: 27, delay: .5, objectPosition: 'center 60%' },
 { src: journalImage(images.categories[4].src), alt: 'A personalized gift detail with a considered finish', label: 'Made personal', width: 108, height: 138, rotation: -7, orbitX: .36, orbitY: .44, startAngle: 90, duration: 19, delay: .1, objectPosition: 'center 45%' },
 { src: journalImage(images.detail.src), alt: 'Stationery and small details for a memorable gift', label: 'Stationery', width: 154, height: 116, rotation: 5, orbitX: .48, orbitY: .29, startAngle: 120, duration: 26, delay: .4, objectPosition: 'center 50%' },
 { src: journalImage(images.collections[2].src), alt: 'A considered lifestyle gift for a quiet moment', label: 'Everyday rituals', width: 120, height: 144, rotation: -3, orbitX: .40, orbitY: .38, startAngle: 150, duration: 22, delay: .3, objectPosition: 'center 50%' },
 { src: journalImage(images.categories[0].src), alt: 'A premium gift prepared for a business relationship', label: 'Corporate gifting', width: 146, height: 108, rotation: 6, orbitX: .53, orbitY: .34, startAngle: 180, duration: 29, delay: .6, objectPosition: 'center 55%' },
 { src: journalImage(images.categories[1].src), alt: 'A gift chosen to celebrate a team milestone', label: 'Employee gifting', width: 112, height: 142, rotation: -4, orbitX: .34, orbitY: .42, startAngle: 210, duration: 20, delay: .15, objectPosition: 'center 45%' },
 { src: journalImage(images.collections[3].src), alt: 'A festive gift finished with a thoughtful ribbon', label: 'Festive gifting', width: 152, height: 112, rotation: 3, orbitX: .47, orbitY: .45, startAngle: 240, duration: 25, delay: .45, objectPosition: 'center 52%' },
 { src: journalImage(images.collections[5].src), alt: 'A small memento selected to make a moment last', label: 'Mementos', width: 118, height: 146, rotation: -6, orbitX: .39, orbitY: .27, startAngle: 270, duration: 18, delay: .25, objectPosition: 'center 50%' },
 { src: journalImage(images.collections[1].src), alt: 'A welcome gift assembled for a new beginning', label: 'Welcome gifts', width: 144, height: 106, rotation: 1, orbitX: .50, orbitY: .37, startAngle: 300, duration: 28, delay: .55, objectPosition: 'center 55%' },
 { src: journalImage(images.collections[4].src), alt: 'A personal touch made for someone special', label: 'Personalized gifts', width: 114, height: 140, rotation: 7, orbitX: .43, orbitY: .31, startAngle: 330, duration: 23, delay: .35, objectPosition: 'center 48%' },
] as const
export const nav = [{label:'Home',href:'/'},{label:'Corporate Gifting',href:'/corporate'},{label:'Collections',href:'/collections'},{label:'Visual Journal',href:'/#visual-journal'},{label:'About',href:'/about'}]
export const companyLogoPlaceholders = [
 { id:'partner-placeholder-1', label:'Client logo placeholder' },
 { id:'partner-placeholder-2', label:'Client logo placeholder' },
 { id:'partner-placeholder-3', label:'Client logo placeholder' },
 { id:'partner-placeholder-4', label:'Client logo placeholder' },
]







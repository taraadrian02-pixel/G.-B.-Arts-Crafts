
import React from 'react';
import { Product, Category, Translations } from './types';

export const BUSINESS_INFO = {
  name: "G. B. Arts&Crafts",
  email: "contact@gbartscrafts.ro",
  phone: "+40 743 649 948",
  address: "Strada Grui, Bl 6, Sc B, Ap 5, Zărnești, Brașov, România",
  instagram: "https://instagram.com/gbartscrafts",
  facebook: "https://facebook.com/gbartscrafts",
};

export const PRODUCTS: Product[] = [
  // PAINTINGS (€200)
  {
    id: "p1",
    name: { en: "Honda Type R - Midnight Ridge", ro: "Honda Type R - Creasta de Miezul Nopții" },
    description: { 
        en: "3D mixed media painting featuring a blue Honda Type R model navigating a textured, relief-carved mountain pass under a textured moon.", 
        ro: "Pictură mixed media 3D cu un model Honda Type R albastru parcurgând o trecătoare montană sculptată în relief sub o lună texturată." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "https://pixabay.com/photos/art-car-honda-typer-car-model-10121101"
  },
  {
    id: "p2",
    name: { en: "BMW X6 Silver Splatter", ro: "BMW X6 Silver Splatter" },
    description: { 
        en: "Expressive automotive art with a silver BMW X6 model as the centerpiece on a dark, dynamic canvas with vibrant gold and red splatters.", 
        ro: "Artă auto expresivă cu un model BMW X6 argintiu ca punct central pe o pânză întunecată și dinamică, cu stropi vibranți de aur și roșu." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "p3",
    name: { en: "The Yellow Bicycle Study", ro: "Studiu Bicicletă Galbenă" },
    description: { 
        en: "A striking yellow bicycle set against a deep textured background of dark grit and atmospheric metallic light.", 
        ro: "O bicicletă galbenă vibrantă situată pe un fundal cu textură profundă, cu granulație închisă și lumină metalică atmosferică." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "p4",
    name: { en: "G-Wagon Abstract Horizon", ro: "G-Wagon Orizont Abstract" },
    description: { 
        en: "Black Mercedes G-Class surrounded by chaotic, expressive brushstrokes of crimson and emerald on a dark field with gold accents.", 
        ro: "Mercedes G-Class negru înconjurat de pensulații haotice și expresive de roșu și smarald pe un fundal întunecat cu accente aurii." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "https://pixabay.com/photos/art-canvas-painting-mercedes-10121102"
  },
  {
    id: "p5",
    name: { en: "Mercedes G-Class Drift", ro: "Mercedes G-Class Drift" },
    description: { 
        en: "Dynamic composition featuring a black G-Wagon making a sharp turn, simulated by a dramatic thick white arc of textured paint.", 
        ro: "Compoziție dinamică prezentând un G-Wagon negru într-un viraj strâns, simulat printr-un arc alb gros și dramatic de vopsea texturată." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800"
  },

  // FIGURINES (€700 - €1000)
  {
    id: "f1",
    name: { en: "The Guardian Angel (Textured)", ro: "Îngerul Păzitor (Texturat)" },
    description: { 
        en: "Industrial metal angel with heavily welded, porous wings and a flowing gown made from delicate wire mesh.", 
        ro: "Înger din metal industrial cu aripi masive sudate și poroase și o robă fluidă realizată din plasă metalică delicată." 
    },
    price: 850,
    category: Category.FIGURINES,
    image: "https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "f2",
    name: { en: "Grand Central Guitar Clock", ro: "Ceas Chitară Grand Central" },
    description: { 
        en: "Functional guitar sculpture built from transmission chains, sprockets, and bolts, featuring a vintage Grand Central Terminal clock.", 
        ro: "Sculptură funcțională de chitară construită din lanțuri de transmisie, pinioane și șuruburi, cu un ceas vintage Grand Central Terminal." 
    },
    price: 980,
    category: Category.FIGURINES,
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "f3",
    name: { en: "Minimalist Metal Angel", ro: "Înger Metalic Minimalist" },
    description: { 
        en: "A sleek, contemporary angel figurine with flat plate-metal wings and a polished silhouette.", 
        ro: "O figurină de înger contemporană, cu aripi din foi plate de metal și o siluetă polișată." 
    },
    price: 700,
    category: Category.FIGURINES,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "f4",
    name: { en: "The Burden of Sisyphus", ro: "Povara lui Sisif" },
    description: { 
        en: "A metal figure straining to pull a natural stone with a thick industrial chain, symbolizing human perseverance.", 
        ro: "O figurină metalică ce depune efort pentru a trage o piatră naturală cu un lanț industrial gros, simbolizând perseverența umană." 
    },
    price: 750,
    category: Category.FIGURINES,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "f5",
    name: { en: "Lunar Ritual Gathering", ro: "Adunarea Ritualului Lunar" },
    description: { 
        en: "An intricate multi-figure installation with wire-mesh beings connected by chains standing before a large illuminated moon.", 
        ro: "O instalație complexă cu mai multe figurine din plasă metalică conectate prin lanțuri în fața unei luni iluminate mari." 
    },
    price: 1000,
    category: Category.FIGURINES,
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "f6",
    name: { en: "The Scholar on Gear", ro: "Cărturarul pe Roată Dințată" },
    description: { 
        en: "A serene figure reading an industrial steel book, seated atop a large weathered metal gear base.", 
        ro: "O figurină senină citind o carte din oțel industrial, așezată pe o bază mare din roată dințată metalică." 
    },
    price: 820,
    category: Category.FIGURINES,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "f7",
    name: { en: "Spirit of Dynamic Energy", ro: "Spiritul Energiei Dinamice" },
    description: { 
        en: "Abstract seated wire figure with a flowing mesh cape, capturing a moment of intense forward momentum.", 
        ro: "Figurină abstractă din sârmă așezată, cu o pelerină fluidă din plasă, capturând un moment de impuls intens." 
    },
    price: 800,
    category: Category.FIGURINES,
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "f8",
    name: { en: "The Tree of Thought", ro: "Arborele Gândului" },
    description: { 
        en: "Surreal sculpture with branch-like neural root extensions emerging from a central figure, merging nature with machine.", 
        ro: "Sculptură suprarealistă cu extensii ramificate asemănătoare rădăcinilor neurale care ies dintr-o figură centrală." 
    },
    price: 880,
    category: Category.FIGURINES,
    image: "https://images.unsplash.com/photo-1444491741275-3747c53c99b4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "f9",
    name: { en: "Kneeling Paladin", ro: "Paladin Îngenuncheat" },
    description: { 
        en: "Wire warrior sculpture kneeling before a steel sword embedded in a raw stone base.", 
        ro: "Sculptură de războinic din sârmă îngenuncheat în fața unei săbii din oțel înfipte într-o bază de piatră brută." 
    },
    price: 900,
    category: Category.FIGURINES,
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "f10",
    name: { en: "The Iron Bull", ro: "Taurul de Fier" },
    description: { 
        en: "Massive bull sculpture built entirely from heavy-duty chains, sprockets, and industrial scrap metal.", 
        ro: "Sculptură masivă de taur realizată integral din lanțuri grele, pinioane și deșeuri metalice industriale." 
    },
    price: 950,
    category: Category.FIGURINES,
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "f11",
    name: { en: "Mesh Contemplation", ro: "Contemplare în Plasă" },
    description: { 
        en: "Seated figurine showcasing the delicate transparency of hand-woven wire mesh over a solid mechanical base.", 
        ro: "Figurină așezată care prezintă transparența delicată a plasei metalice țesute manual peste o bază mecanică solidă." 
    },
    price: 800,
    category: Category.FIGURINES,
    image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&q=80&w=800"
  }
];

export const TRANSLATIONS: Translations = {
  nav_home: { en: "Home", ro: "Acasă" },
  nav_gallery: { en: "Gallery", ro: "Galerie" },
  nav_bio: { en: "The Artist", ro: "Artistul" },
  nav_contact: { en: "Contact", ro: "Contact" },
  hero_title: { en: "Where Metal Meets Passion", ro: "Unde Metalul Întâlnește Pasiunea" },
  hero_subtitle: { en: "Handcrafted automotive art and metal sculptures that redefine industrial beauty.", ro: "Artă auto lucrată manual și sculpturi metalice care definesc frumusețea industrială." },
  shop_now: { en: "Shop Collection", ro: "Explorează Colecția" },
  add_to_cart: { en: "Add to Cart", ro: "Adaugă în Coș" },
  cart_title: { en: "Shopping Cart", ro: "Coșul de Cumpărături" },
  cart_empty: { en: "Your cart is empty.", ro: "Coșul tău este gol." },
  checkout: { en: "Proceed to Checkout", ro: "Spre Finalizare" },
  bio_title: { en: "The Story of George Băbău", ro: "Povestea lui George Băbău" },
  bio_content: { 
    en: "George Băbău, the heart behind G. B. Arts&Crafts, transforms cold, industrial metal into warm, evocative pieces of art. Based in the scenic town of Zărnești, George's work is inspired by his lifelong obsession with automotive engineering and the raw power of machinery. Every piece is unique, hand-welded, and infused with the spirit of craftsmanship.",
    ro: "George Băbău, inima din spatele G. B. Arts&Crafts, transformă metalul rece și industrial în piese de artă calde și evocatoare. Stabilit în pitorescul oraș Zărnești, munca lui George este inspirată de pasiunea sa de o viață pentru ingineria auto și puterea brută a utilajelor. Fiecare piesă este unică, sudată manual și infuzată cu spiritul măiestriei."
  },
  contact_us: { en: "Get in Touch", ro: "Contactează-ne" },
  send_message: { en: "Send Message", ro: "Trimite Mesaj" },
  success_order: { en: "Thank you for your order!", ro: "Vă mulțumim pentru comandă!" },
  total: { en: "Total", ro: "Total" },
  footer_text: { en: "Handcrafted in the heart of Transylvania.", ro: "Creat manual în inima Transilvaniei." }
};

export const Icons = {
  Cart: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  ),
  Menu: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  Close: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  Instagram: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  ),
  Facebook: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.324v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
    </svg>
  )
};

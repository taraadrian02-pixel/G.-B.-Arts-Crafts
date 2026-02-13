
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

/**
 * IMAGE FOLDER INSTRUCTIONS:
 * Create a folder named 'images' in your root directory.
 * Rename your files as follows:
 * - george.jpg (Artist photo)
 * - p1.jpg through p5.jpg (Paintings)
 * - f1.jpg through f11.jpg (Figurines)
 */
export const PRODUCTS: Product[] = [
  // --- 5 PAINTINGS (€200) ---
  {
    id: "p1",
    name: { en: "Honda Type R - Midnight Ridge", ro: "Honda Type R - Creasta de Miezul Nopții" },
    description: { 
        en: "3D mixed media painting featuring a blue Honda Type R navigating a textured relief mountain pass under a golden moon.", 
        ro: "Pictură mixed media 3D cu un model Honda Type R albastru parcurgând o trecătoare montană în relief sub o lună aurie." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "./images/p1.jpg"
  },
  {
    id: "p2",
    name: { en: "BMW X6 Silver Splatter", ro: "BMW X6 Silver Splatter" },
    description: { 
        en: "Dynamic silver BMW X6 model centered on a dark canvas with energetic paint splatters in gold, red, and emerald.", 
        ro: "Model BMW X6 argintiu centrat pe o pânză închisă cu stropi energetici de vopsea aurie, roșie și verde smarald." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "./images/p2.jpg"
  },
  {
    id: "p3",
    name: { en: "The Yellow Bicycle Study", ro: "Studiu Bicicletă Galbenă" },
    description: { 
        en: "Vibrant yellow bicycle miniature set against a deep textured background with metallic gold leaf and dark grit accents.", 
        ro: "Miniatură de bicicletă galbenă vibrantă pe un fundal texturat profund cu foiță de aur metalică și accente de granulație închisă." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "./images/p3.jpg"
  },
  {
    id: "p4",
    name: { en: "G-Class Abstract 'Banier'", ro: "G-Class Abstract 'Banier'" },
    description: { 
        en: "Black Mercedes G-Class surrounded by expressive, chaotic brushstrokes and textured 'Banier' lettering at the base.", 
        ro: "Mercedes G-Class negru înconjurat de pensulații haotice expresive și inscripția texturată 'Banier' la bază." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "./images/p4.jpg"
  },
  {
    id: "p5",
    name: { en: "Mercedes G - White Arc Drift", ro: "Mercedes G - Drift Arc Alb" },
    description: { 
        en: "Dramatic white paint arc simulating a high-speed drift from a black G-Wagon on an industrial dark background.", 
        ro: "Arc dramatic de vopsea albă simulând un drift de mare viteză al unui G-Wagon negru pe un fundal industrial." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "./images/p5.jpg"
  },

  // --- 11 FIGURINES (€700 - €1000) ---
  {
    id: "f1",
    name: { en: "The Mesh Angel", ro: "Îngerul din Plasă" },
    description: { 
        en: "Industrial metal angel with a black sphere head, heavily welded textured wings, and a flowing mesh gown.", 
        ro: "Înger din metal industrial cu cap sferic negru, aripi texturate sudate masiv și o robă fluidă din plasă." 
    },
    price: 850,
    category: Category.FIGURINES,
    image: "./images/f1.jpg"
  },
  {
    id: "f2",
    name: { en: "Minimalist Metal Angel", ro: "Înger Metalic Minimalist" },
    description: { 
        en: "Contemporary angel figurine with flat metal-plate wings and a slender industrial silhouette.", 
        ro: "Figurină de înger contemporană cu aripi din foi de metal plate și o siluetă industrială subțire." 
    },
    price: 700,
    category: Category.FIGURINES,
    image: "./images/f2.jpg"
  },
  {
    id: "f3",
    name: { en: "Grand Central Guitar Clock", ro: "Ceas Chitară Grand Central" },
    description: { 
        en: "Intricate guitar sculpture crafted from bicycle chains and gears, featuring a functional 'Grand Central' clock face.", 
        ro: "Sculptură de chitară complexă realizată din lanțuri de bicicletă și pinioane, cu un ceas 'Grand Central' funcțional." 
    },
    price: 980,
    category: Category.FIGURINES,
    image: "./images/f3.jpg"
  },
  {
    id: "f4",
    name: { en: "The Chain of Sisyphus", ro: "Lanțul lui Sisif" },
    description: { 
        en: "Metal figure made of welded rods and chains, captured in the act of pulling a natural stone burden.", 
        ro: "Figurină metalică realizată din tije sudate și lanțuri, capturată în timp ce trage o piatră naturală." 
    },
    price: 750,
    category: Category.FIGURINES,
    image: "./images/f4.jpg"
  },
  {
    id: "f5",
    name: { en: "Triple Figure Lunar Ritual", ro: "Ritual Lunar - Trei Figuri" },
    description: { 
        en: "Three wire-mesh figures connected by chains standing before a large, illuminated lunar backdrop.", 
        ro: "Trei figurine din plasă de sârmă conectate prin lanțuri în fața unui fundal lunar mare, iluminat." 
    },
    price: 1000,
    category: Category.FIGURINES,
    image: "./images/f5.jpg"
  },
  {
    id: "f6",
    name: { en: "The Wire Scholar", ro: "Cărturarul din Sârmă" },
    description: { 
        en: "Delicate figure hand-woven from wire, reading a small metal book while seated on a gear foundation.", 
        ro: "Figurină delicată țesută manual din sârmă, citind o mică carte metalică, așezată pe o bază din roată dințată." 
    },
    price: 820,
    category: Category.FIGURINES,
    image: "./images/f6.jpg"
  },
  {
    id: "f7",
    name: { en: "Flying Spirit on Gear", ro: "Spirit Zburător pe Roată Dințată" },
    description: { 
        en: "Wire-mesh figure with a cape in motion, mounted atop a weathered industrial gear base.", 
        ro: "Figurină din plasă de sârmă cu pelerină în mișcare, montată pe o bază din roată dințată industrială." 
    },
    price: 800,
    category: Category.FIGURINES,
    image: "./images/f7.jpg"
  },
  {
    id: "f8",
    name: { en: "Tree of Thought", ro: "Copacul Gândului" },
    description: { 
        en: "Surreal wire sculpture featuring a figure with branching neural-like extensions from the head.", 
        ro: "Sculptură suprarealistă din sârmă cu o figurină ale cărei extensii ramificate pornesc din cap." 
    },
    price: 850,
    category: Category.FIGURINES,
    image: "./images/f8.jpg"
  },
  {
    id: "f9",
    name: { en: "Kneeling Paladin with Sword", ro: "Paladin Îngenuncheat cu Sabie" },
    description: { 
        en: "Wire warrior kneeling before a steel sword embedded in a raw stone, symbolizing honor.", 
        ro: "Războinic din sârmă îngenuncheat în fața unei săbii de oțel înfipte într-o piatră brută, simbolizând onoarea." 
    },
    price: 900,
    category: Category.FIGURINES,
    image: "./images/f9.jpg"
  },
  {
    id: "f10",
    name: { en: "The Iron Bull", ro: "Taurul de Fier" },
    description: { 
        en: "Powerful bull sculpture constructed from heavy transmission chains, sprockets, and industrial scrap.", 
        ro: "Sculptură puternică de taur construită din lanțuri de transmisie grele, pinioane și resturi industriale." 
    },
    price: 950,
    category: Category.FIGURINES,
    image: "./images/f10.jpg"
  },
  {
    id: "f11",
    name: { en: "Wire-Mesh Contemplation", ro: "Contemplare din Plasă" },
    description: { 
        en: "Abstract seated figure showcasing the delicate texture of hand-woven wire mesh over mechanical parts.", 
        ro: "Figurină abstractă așezată ce prezintă textura delicată a plasei de sârmă țesute manual peste piese mecanice." 
    },
    price: 780,
    category: Category.FIGURINES,
    image: "./images/f11.jpg"
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

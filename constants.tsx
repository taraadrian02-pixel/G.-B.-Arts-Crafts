
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
    name: { en: "Honda Type R Moonlight", ro: "Honda Type R sub Lună" },
    description: { 
        en: "3D mixed media painting featuring a blue Honda Type R model driving on a textured road beneath a golden moon.", 
        ro: "Pictură mixed media 3D cu un model Honda Type R albastru parcurgând un drum texturat sub o lună aurie." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&q=80&w=800" // Replace with image 1
  },
  {
    id: "p2",
    name: { en: "BMW X6 Gold Splatter", ro: "BMW X6 cu Stropi de Aur" },
    description: { 
        en: "Expressive automotive art with a silver BMW X6 centerpiece on a dark background with vibrant color splatters.", 
        ro: "Artă auto expresivă cu un BMW X6 argintiu pe un fundal întunecat cu stropi de vopsea vibranți." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800" // Replace with image 13
  },
  {
    id: "p3",
    name: { en: "The Yellow Bike", ro: "Bicicleta Galbenă" },
    description: { 
        en: "Textural painting featuring a bright yellow miniature bicycle against a high-contrast industrial background.", 
        ro: "Pictură texturală prezentând o bicicletă galbenă miniaturală pe un fundal industrial cu contrast ridicat." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800" // Replace with image 14
  },
  {
    id: "p4",
    name: { en: "G-Class Abstract Horizon", ro: "G-Class Orizont Abstract" },
    description: { 
        en: "Black Mercedes G-Class set within an abstract field of deep reds, greens, and gold texture.", 
        ro: "Mercedes G-Class negru situat într-un câmp abstract de nuanțe roșii, verzi și texturi aurii." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "https://images.unsplash.com/photo-1520050206274-a1af446338cb?auto=format&fit=crop&q=80&w=800" // Replace with image 15
  },
  {
    id: "p5",
    name: { en: "The White Drift - G-Class", ro: "Driftul Alb - G-Class" },
    description: { 
        en: "Dynamic composition featuring a G-Wagon making a dramatic turn, represented by a thick white arc of paint.", 
        ro: "Compoziție dinamică prezentând un G-Wagon într-un viraj dramatic, reprezentat printr-un arc gros de vopsea albă." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800" // Replace with image 16
  },

  // FIGURINES (€700 - €1000)
  {
    id: "f1",
    name: { en: "The Guardian Angel", ro: "Îngerul Păzitor" },
    description: { 
        en: "Heavily textured metal angel sculpture with porous wings and a flowing wire-mesh dress.", 
        ro: "Sculptură metalică de înger cu aripi poroase și o rochie fluidă realizată din plasă de sârmă." 
    },
    price: 850,
    category: Category.FIGURINES,
    image: "https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&q=80&w=800" // Replace with image 2
  },
  {
    id: "f2",
    name: { en: "Grand Central Guitar Clock", ro: "Ceas Chitară Grand Central" },
    description: { 
        en: "Industrial guitar sculpture featuring a vintage clock face, crafted from gears, chains, and bicycle parts.", 
        ro: "Sculptură industrială de chitară cu un cadran de ceas vintage, realizată din roți dințate, lanțuri și piese de bicicletă." 
    },
    price: 950,
    category: Category.FIGURINES,
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800" // Replace with image 3
  },
  {
    id: "f3",
    name: { en: "Minimalist Messenger", ro: "Mesager Minimalist" },
    description: { 
        en: "Sleek angel figurine with thin, plate-metal wings and a polished silver finish.", 
        ro: "Figurină de înger elegantă, cu aripi din foi de metal subțiri și un finisaj argintiu polișat." 
    },
    price: 700,
    category: Category.FIGURINES,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800" // Replace with image 4
  },
  {
    id: "f4",
    name: { en: "The Sisyphus Chain", ro: "Lanțul lui Sisif" },
    description: { 
        en: "Dynamic sculpture of a metal figure pulling a natural stone with a thick industrial chain.", 
        ro: "Sculptură dinamică a unei figurine metalice trăgând o piatră naturală cu un lanț industrial gros." 
    },
    price: 750,
    category: Category.FIGURINES,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800" // Replace with image 5
  },
  {
    id: "f5",
    name: { en: "Lunar Ritual Gathering", ro: "Ritualul sub Lună" },
    description: { 
        en: "Multi-figure wire mesh composition standing before a glowing, backlit moon installation.", 
        ro: "Compoziție din plasă de sârmă cu mai multe figurine, situată în fața unei instalații lunare iluminate." 
    },
    price: 1000,
    category: Category.FIGURINES,
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800" // Replace with image 6
  },
  {
    id: "f6",
    name: { en: "The Scholar", ro: "Cărturarul" },
    description: { 
        en: "Intricate wire figure reading a book while seated on a heavy industrial gear base.", 
        ro: "Figurină complexă din sârmă citind o carte, așezată pe o bază grea din roată dințată industrială." 
    },
    price: 800,
    category: Category.FIGURINES,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800" // Replace with image 7/9
  },
  {
    id: "f7",
    name: { en: "Spirit of Flight", ro: "Spiritul Zborului" },
    description: { 
        en: "Seated wire figure with a flowing mesh cape, mounted on a rusted gear foundation.", 
        ro: "Figurină din sârmă așezată, cu o pelerină fluidă din plasă, montată pe o fundație din roată dințată ruginită." 
    },
    price: 800,
    category: Category.FIGURINES,
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800" // Replace with image 8
  },
  {
    id: "f8",
    name: { en: "The Tree Thinker", ro: "Gânditorul-Arbore" },
    description: { 
        en: "A surreal figurine with branch-like neural extensions, merging nature's patterns with metalcraft.", 
        ro: "O figurină suprarealistă cu extensii ramificate, îmbinând formele naturii cu prelucrarea metalului." 
    },
    price: 850,
    category: Category.FIGURINES,
    image: "https://images.unsplash.com/photo-1444491741275-3747c53c99b4?auto=format&fit=crop&q=80&w=800" // Replace with image 10
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
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&q=80&w=800" // Replace with image 11
  },
  {
    id: "f10",
    name: { en: "Iron Bull", ro: "Taur de Fier" },
    description: { 
        en: "Massive bull sculpture constructed from heavy-duty chains, sprockets, and mechanical scrap metal.", 
        ro: "Sculptură masivă de taur construită din lanțuri grele, pinioane și deșeuri metalice mecanice." 
    },
    price: 950,
    category: Category.FIGURINES,
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=800" // Replace with image 12
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
  bio_title: { en: "The Story of G. B.", ro: "Povestea G. B." },
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

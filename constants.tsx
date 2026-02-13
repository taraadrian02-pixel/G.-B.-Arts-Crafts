
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
  // --- 5 PAINTINGS (€200) ---
  {
    id: "p1",
    name: { en: "Honda Type R - Midnight Relief", ro: "Honda Type R - Relief de Noapte" },
    description: { 
        en: "3D mixed media painting featuring a blue Honda Type R on a brown textured relief road, set under a brilliant gold leaf moon.", 
        ro: "Pictură mixed media 3D cu un Honda Type R albastru pe un drum montan în relief, sub o lună strălucitoare din foiță de aur." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "images/p1.jpg"
  },
  {
    id: "p2",
    name: { en: "BMW X6 Silver Splatter", ro: "BMW X6 Silver Splatter" },
    description: { 
        en: "Silver BMW X6 model centered on a dark canvas with high-energy splatters of red, gold, and emerald green.", 
        ro: "Model BMW X6 argintiu centrat pe o pânză închisă cu stropi energetici de roșu, aur și verde smarald." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "images/p2.jpg"
  },
  {
    id: "p3",
    name: { en: "Industrial Yellow Bicycle", ro: "Bicicleta Galbenă Industrială" },
    description: { 
        en: "A vibrant yellow miniature bicycle set against a deep black background with heavy gold texture and white accents.", 
        ro: "O miniatură de bicicletă galbenă vibrantă pe un fundal negru profund cu textură aurie densă și accente albe." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "images/p3.jpg"
  },
  {
    id: "p4",
    name: { en: "G-Class Abstract 'Banier'", ro: "G-Class Abstract 'Banier'" },
    description: { 
        en: "A black Mercedes G-Class immersed in a colorful field of red and green abstract strokes, featuring 'BANIER' industrial lettering.", 
        ro: "Un Mercedes G-Class negru imersat într-un câmp colorat de pensulații abstracte roșii și verzi, cu litere industriale 'BANIER'." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "images/p4.jpg"
  },
  {
    id: "p5",
    name: { en: "Mercedes G - The White Drift", ro: "Mercedes G - Driftul Alb" },
    description: { 
        en: "Minimalist yet powerful 3D drift scene with a black G-Wagon and a massive, textured white paint arc on a dark industrial background.", 
        ro: "Scenă de drift 3D minimalistă dar puternică, cu un G-Wagon negru și un arc masiv de vopsea albă texturată pe un fundal industrial." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "images/p5.jpg"
  },

  // --- 11 FIGURINES (€700 - €1000) ---
  {
    id: "f1",
    name: { en: "The Mesh Guardian Angel", ro: "Îngerul Păzitor din Plasă" },
    description: { 
        en: "Large-scale metal angel with heavy welded wings, a black polished sphere head, and a flowing wire-mesh gown.", 
        ro: "Înger din metal la scară largă cu aripi sudate masiv, cap din sferă neagră lustruită și o robă fluidă din plasă de sârmă." 
    },
    price: 850,
    category: Category.FIGURINES,
    image: "images/f1.jpg"
  },
  {
    id: "f2",
    name: { en: "Minimalist Plate Angel", ro: "Înger Minimalist din Placă" },
    description: { 
        en: "Contemporary sculpture featuring sleek, hand-bent metal plate wings and a slender industrial rod body.", 
        ro: "Sculptură contemporană cu aripi subțiri din placă de metal îndoită manual și un corp subțire din tijă industrială." 
    },
    price: 700,
    category: Category.FIGURINES,
    image: "images/f2.jpg"
  },
  {
    id: "f3",
    name: { en: "Grand Central Guitar Clock", ro: "Ceas Chitară Grand Central" },
    description: { 
        en: "An extraordinary piece built from bicycle chains, bolts, and gears, housing a vintage 'Grand Central Terminal' clock.", 
        ro: "O piesă extraordinară construită din lanțuri de bicicletă, șuruburi și pinioane, adăpostind un ceas vintage 'Grand Central Terminal'." 
    },
    price: 980,
    category: Category.FIGURINES,
    image: "images/f3.jpg"
  },
  {
    id: "f4",
    name: { en: "The Burden of Sisyphus", ro: "Povara lui Sisif" },
    description: { 
        en: "Metal chain-link figure straining to pull a large natural beige stone, mounted on a rusted iron base.", 
        ro: "Figurină din zale de lanț metalic străduindu-se să tragă o piatră naturală bej mare, montată pe o bază de fier ruginit." 
    },
    price: 750,
    category: Category.FIGURINES,
    image: "images/f4.jpg"
  },
  {
    id: "f5",
    name: { en: "Triple Figure Lunar Ritual", ro: "Ritual Lunar - Trei Figuri" },
    description: { 
        en: "Three wire-mesh figures connected by chains in a ritual pose, standing before a giant glowing moon installation.", 
        ro: "Trei figurine din plasă de sârmă conectate prin lanțuri într-o poză ritualică, stând în fața unei instalații cu o lună gigantă luminată." 
    },
    price: 1000,
    category: Category.FIGURINES,
    image: "images/f5.jpg"
  },
  {
    id: "f6",
    name: { en: "The scholar on Gear", ro: "Cărturarul pe Roată Dințată" },
    description: { 
        en: "Delicate wire-wrapped figure reading an open metal book, perched atop a heavy industrial gear.", 
        ro: "Figurină delicată înfășurată în sârmă citind o carte metalică deschisă, cocoțată pe o roată dințată industrială grea." 
    },
    price: 820,
    category: Category.FIGURINES,
    image: "images/f6.jpg"
  },
  {
    id: "f7",
    name: { en: "Spirit of Motion", ro: "Spiritul Mișcării" },
    description: { 
        en: "Dynamic wire figure with a flowing mesh cape captured in mid-flight, mounted on a vintage sprocket.", 
        ro: "Figurină din sârmă dinamică cu o pelerină din plasă fluidă capturată în plin zbor, montată pe un pinion vintage." 
    },
    price: 800,
    category: Category.FIGURINES,
    image: "images/f7.jpg"
  },
  {
    id: "f8",
    name: { en: "Tree of Iron Life", ro: "Arborele Vieții de Fier" },
    description: { 
        en: "Thought-provoking head sculpture with branching neural extensions made of hand-twisted wire.", 
        ro: "Sculptură de cap care îndeamnă la reflexie, cu extensii neurale ramificate realizate din sârmă răsucită manual." 
    },
    price: 850,
    category: Category.FIGURINES,
    image: "images/f8.jpg"
  },
  {
    id: "f9",
    name: { en: "Kneeling Paladin", ro: "Paladin Îngenuncheat" },
    description: { 
        en: "Steel warrior figure kneeling in honor before a vertical sword embedded in a natural stone base.", 
        ro: "Figurină de războinic din oțel îngenuncheat în semn de onoare în fața unei săbii verticale înfipte într-o bază de piatră naturală." 
    },
    price: 900,
    category: Category.FIGURINES,
    image: "images/f9.jpg"
  },
  {
    id: "f10",
    name: { en: "The Industrial Bull", ro: "Taurul Industrial" },
    description: { 
        en: "Aggressive bull sculpture crafted from heavy motorcycle chains, gears, and perforated metal plates.", 
        ro: "Sculptură de taur agresivă realizată din lanțuri grele de motocicletă, pinioane și plăci metalice perforate." 
    },
    price: 950,
    category: Category.FIGURINES,
    image: "images/f10.jpg"
  },
  {
    id: "f11",
    name: { en: "Mesh Contemplation", ro: "Contemplare din Plasă" },
    description: { 
        en: "Abstract seated figure with wire-wrapped limbs and a mesh torso, reflecting on an industrial gear seat.", 
        ro: "Figurină abstractă așezată cu membre înfășurate în sârmă și torace din plasă, reflectând pe un scaun din roată dințată." 
    },
    price: 780,
    category: Category.FIGURINES,
    image: "images/f11.jpg"
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
    en: "George Băbău, the heart behind G. B. Arts&Crafts, transforms cold, industrial metal into warm, evocative pieces of art. Based in the scenic town of Zărnești, George's work is inspired by his lifelong obsession with automotive engineering and the raw power of machinery. Every piece is unique, hand-welded, and infused with the spirit of Transylvanian craftsmanship.",
    ro: "George Băbău, inima din spatele G. B. Arts&Crafts, transformă metalul rece și industrial în piese de artă calde și evocatoare. Stabilit în pitorescul oraș Zărnești, munca lui George este inspirată de pasiunea sa de o viață pentru ingineria auto și puterea brută a utilajelor. Fiecare piesă este unică, sudată manual și infuzată cu spiritul măiestriei transilvănene."
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

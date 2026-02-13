
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
    name: { en: "Honda Type R - Moonlight Relief", ro: "Honda Type R - Relief de Noapte" },
    description: { 
        en: "A deep blue Honda Type R model scaling a meticulously crafted brown mountain relief under a hand-applied gold-leaf moon.", 
        ro: "Un model Honda Type R albastru închis urcând un relief montan maro lucrat meticulos sub o lună din foiță de aur." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "https://i.ibb.co/xtKG1Bg1/p1.png"
  },
  {
    id: "p2",
    name: { en: "BMW X6 Silver Splatter", ro: "BMW X6 Silver Splatter" },
    description: { 
        en: "Dynamic silver BMW X6 scale model centered on a dark grey canvas with energetic splatters in ruby red, emerald green, and gold.", 
        ro: "Model la scară BMW X6 argintiu dinamic centrat pe o pânză gri închis cu stropi energetici în roșu rubin, verde smarald și aur." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "https://i.ibb.co/XxcgnMjq/p2.png"
  },
  {
    id: "p3",
    name: { en: "Industrial Yellow Bicycle", ro: "Bicicleta Galbenă Industrială" },
    description: { 
        en: "An intricate yellow miniature bicycle poised against a rich, dark background flowing with metallic gold and deep black textures.", 
        ro: "O bicicletă galbenă miniaturală complexă așezată pe un fundal întunecat și bogat, cu texturi de aur metalic și negru profund." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "https://i.ibb.co/zhxWLSjh/p3.png"
  },
  {
    id: "p4",
    name: { en: "Mercedes G-Class 'BANIER'", ro: "Mercedes G-Class 'BANIER'" },
    description: { 
        en: "A black Mercedes G-Class scale model set against an expressive abstract background of red and green strokes with bold 'BANIER' industrial lettering.", 
        ro: "Un model la scară Mercedes G-Class negru așezat pe un fundal abstract expresiv de pensulații roșii și verzi, cu inscripția industrială 'BANIER'." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "https://i.ibb.co/NnnTSQhq/p4.png"
  },
  {
    id: "p5",
    name: { en: "G-Class White Arc Drift", ro: "G-Class Drift Arc Alb" },
    description: { 
        en: "The ultimate representation of power: a black G-Wagon appearing to drift with a massive, 3D-textured white paint arc simulating high-speed energy.", 
        ro: "Reprezentarea supremă a puterii: un model G-Wagon negru ce pare să facă drift cu un arc masiv de vopsea albă texturată 3D, simulând energia vitezei." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "https://i.ibb.co/V07NcqS9/p5.png"
  },

  // --- 9 FIGURINES (€700 - €1000) ---
  {
    id: "f1",
    name: { en: "The Mesh Guardian Angel", ro: "Îngerul Păzitor din Plasă" },
    description: { 
        en: "A haunting guardian angel featuring a polished black sphere for a head, massive heavily-welded textured wings, and a delicate mesh gown.", 
        ro: "Un înger păzitor cu cap din sferă neagră lustruită, aripi masive din fier sudat și texturat, și o robă delicată din plasă." 
    },
    price: 850,
    category: Category.FIGURINES,
    image: "https://i.ibb.co/MqZz61S/f1.png"
  },
  {
    id: "f2",
    name: { en: "Grand Central Guitar Clock", ro: "Ceas Chitară Grand Central" },
    description: { 
        en: "A full-scale industrial guitar sculpture made of bicycle chains, nuts, and bolts, featuring a functional 'Grand Central Terminal' clock face.", 
        ro: "O sculptură de chitară industrială la scară reală, realizată din lanțuri de bicicletă, piulițe și șuruburi, cu un ceas funcțional 'Grand Central Terminal'." 
    },
    price: 980,
    category: Category.FIGURINES,
    image: "https://i.ibb.co/3yf1sksB/f2.png"
  },
  {
    id: "f3",
    name: { en: "Minimalist Plate Angel", ro: "Înger Minimalist din Placă" },
    description: { 
        en: "A sleek contemporary interpretation of an angel using hand-cut metal plates for wings attached to a slender iron rod silhouette.", 
        ro: "O interpretare contemporană elegantă a unui înger, folosind plăci metalice tăiate manual pentru aripi, atașate unei siluete din tijă de fier." 
    },
    price: 700,
    category: Category.FIGURINES,
    image: "https://i.ibb.co/twGsb9fS/f3.png"
  },
  {
    id: "f4",
    name: { en: "The Burden of Sisyphus", ro: "Povara lui Sisif" },
    description: { 
        en: "A powerful representation of effort, showing a figure made from welded chain links straining to pull a natural stone across a steel base.", 
        ro: "O reprezentare puternică a efortului, arătând o figurină din zale de lanț sudate ce se străduiește să tragă o piatră naturală pe o bază de oțel." 
    },
    price: 750,
    category: Category.FIGURINES,
    image: "https://i.ibb.co/nM2N5bPN/f4.png"
  },
  {
    id: "f5",
    name: { en: "Triple Figure Lunar Ritual", ro: "Ritual Lunar - Trei Figuri" },
    description: { 
        en: "Three wire-mesh figures connected by chains in a ritual formation standing before a large, glowing full moon installation.", 
        ro: "Trei figurine din plasă de sârmă conectate prin lanțuri într-o formație ritualică, stând în fața unei instalații mari cu lună plină luminată." 
    },
    price: 1000,
    category: Category.FIGURINES,
    image: "https://i.ibb.co/zh7tMqTr/f5.png"
  },
  {
    id: "f6",
    name: { en: "The Scholar on Gear", ro: "Cărturarul pe Roată Dințată" },
    description: { 
        en: "A delicate mesh figure hand-woven from wire, deeply immersed in reading a small metal book while perched on a salvaged industrial gear.", 
        ro: "O figurină delicată din plasă de sârmă, absorbită de citirea unei mici cărți metalice, cocoțată pe o roată dințată industrială recuperată." 
    },
    price: 820,
    category: Category.FIGURINES,
    image: "https://i.ibb.co/ZRb6X5y7/f6.png"
  },
  {
    id: "f9",
    name: { en: "Kneeling Paladin", ro: "Paladin Îngenuncheat" },
    description: { 
        en: "A wire warrior figure kneeling in deep reverence before a vertical steel sword embedded in a raw stone base.", 
        ro: "O figurină de războinic din sârmă îngenuncheată în semn de respect în fața unei săbii de oțel înfipte în piatră naturală." 
    },
    price: 900,
    category: Category.FIGURINES,
    image: "https://i.ibb.co/tMCZz4Rr/f9.png"
  },
  {
    id: "f10",
    name: { en: "The Industrial Bull", ro: "Taurul Industrial" },
    description: { 
        en: "A robust bull sculpture composed of heavy-duty drive chains and large industrial sprockets on a raw metal base.", 
        ro: "O sculptură de taur robustă compusă din lanțuri de transmisie grele și pinioane industriale mari pe o bază de metal brut." 
    },
    price: 950,
    category: Category.FIGURINES,
    image: "https://i.ibb.co/HTX9jk7f/f10.png"
  },
  {
    id: "f11",
    name: { en: "Seated Contemplation", ro: "Contemplare Așezată" },
    description: { 
        en: "A mesh figure sitting in a thoughtful pose on a large circular industrial sprocket, representing the soul within the machine.", 
        ro: "O figurină din plasă stând într-o poză gânditoare pe un pinion industrial circular mare, reprezentând sufletul din interiorul mașinii." 
    },
    price: 780,
    category: Category.FIGURINES,
    image: "https://i.ibb.co/B5W87cVx/f11.png"
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

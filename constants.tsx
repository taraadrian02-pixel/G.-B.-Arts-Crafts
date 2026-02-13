
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
        en: "A striking 3D mixed media work featuring a blue Honda Type R model ascending a textured brown mountain path under a glowing gold-leaf moon.", 
        ro: "O lucrare mixed media 3D impresionantă, prezentând un model Honda Type R albastru urcând o potecă montană maro texturată sub o lună strălucitoare din foiță de aur." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "./images/p1.jpg"
  },
  {
    id: "p2",
    name: { en: "BMW X6 Silver Splatter", ro: "BMW X6 Silver Splatter" },
    description: { 
        en: "The silver BMW X6 silhouette is centered amidst an explosion of red, emerald, and gold paint splatters on a deep grey industrial canvas.", 
        ro: "Silueta BMW X6 argintie este centrată în mijlocul unei explozii de stropi de vopsea roșie, smarald și aurie pe o pânză industrială gri închis." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "./images/p2.jpg"
  },
  {
    id: "p3",
    name: { en: "Industrial Yellow Bicycle", ro: "Bicicleta Galbenă Industrială" },
    description: { 
        en: "A miniature yellow bicycle set against a complex background of flowing black and gold textures, representing motion and urban grit.", 
        ro: "O bicicletă galbenă miniaturală pe un fundal complex de texturi negre și aurii fluide, reprezentând mișcarea și spiritul urban." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "./images/p3.jpg"
  },
  {
    id: "p4",
    name: { en: "Mercedes G-Class 'BANIER'", ro: "Mercedes G-Class 'BANIER'" },
    description: { 
        en: "A black G-Wagon scale model immersed in a chaotic, vibrant field of red, green, and gold abstract strokes with 'BANIER' industrial lettering.", 
        ro: "Un model la scară G-Wagon negru imersat într-un câmp haotic și vibrant de pensulații abstracte roșii, verzi și aurii, cu litere industriale 'BANIER'." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "./images/p4.jpg"
  },
  {
    id: "p5",
    name: { en: "G-Class White Arc Drift", ro: "G-Class Drift Arc Alb" },
    description: { 
        en: "Captured high-speed motion featuring a black G-Class model and a massive, textured white paint arc simulating a cloud of smoke and power.", 
        ro: "Mișcare de mare viteză capturată, prezentând un model G-Class negru și un arc masiv de vopsea albă texturată simulând un nor de fum și putere." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "./images/p5.jpg"
  },

  // --- 11 FIGURINES (€700 - €1000) ---
  {
    id: "f1",
    name: { en: "The Mesh Guardian", ro: "Păzitorul din Plasă" },
    description: { 
        en: "A tall industrial angel with a black sphere head and heavy, textured metal wings that showcase raw welding artistry.", 
        ro: "Un înger industrial înalt cu cap din sferă neagră și aripi metalice grele, texturate, care pun în valoare arta sudurii brute." 
    },
    price: 850,
    category: Category.FIGURINES,
    image: "./images/f1.jpg"
  },
  {
    id: "f2",
    name: { en: "Minimalist Plate Angel", ro: "Înger Minimalist din Placă" },
    description: { 
        en: "A sleek, contemporary angel sculpture using flat metal plates for wings and a slender, vertically oriented body.", 
        ro: "O sculptură de înger contemporană elegantă, folosind plăci metalice plate pentru aripi și un corp subțire, orientat vertical." 
    },
    price: 700,
    category: Category.FIGURINES,
    image: "./images/f2.jpg"
  },
  {
    id: "f3",
    name: { en: "Grand Central Guitar", ro: "Chitara Grand Central" },
    description: { 
        en: "An incredible industrial guitar built from bicycle chains, nuts, and bolts, featuring a 'Grand Central Terminal' clock face.", 
        ro: "O chitară industrială incredibilă construită din lanțuri de bicicletă, piulițe și șuruburi, cu un ceas 'Grand Central Terminal'." 
    },
    price: 980,
    category: Category.FIGURINES,
    image: "./images/f3.jpg"
  },
  {
    id: "f4",
    name: { en: "The Chain of Sisyphus", ro: "Lanțul lui Sisif" },
    description: { 
        en: "A powerful representation of effort, showing a figure made of chains straining to pull a natural stone across a steel base.", 
        ro: "O reprezentare puternică a efortului, arătând o figurină din lanțuri străduindu-se să tragă o piatră naturală pe o bază de oțel." 
    },
    price: 750,
    category: Category.FIGURINES,
    image: "./images/f4.jpg"
  },
  {
    id: "f5",
    name: { en: "Triple Figure Ritual", ro: "Ritual în Trei Figuri" },
    description: { 
        en: "Three wire-mesh figures connected by chains in a ceremonial pose before a large, glowing full moon installation.", 
        ro: "Trei figurine din plasă de sârmă conectate prin lanțuri într-o poză ceremonială în fața unei instalații mari cu lună plină luminată." 
    },
    price: 1000,
    category: Category.FIGURINES,
    image: "./images/f5.jpg"
  },
  {
    id: "f6",
    name: { en: "The Scholar on Gear", ro: "Cărturarul pe Roată Dințată" },
    description: { 
        en: "A seated wire figure engrossed in a small metal book, perched atop a heavy, salvaged industrial gear.", 
        ro: "O figurină din sârmă așezată, absorbită de o mică carte metalică, cocoțată pe o roată dințată industrială grea, recuperată." 
    },
    price: 820,
    category: Category.FIGURINES,
    image: "./images/f6.jpg"
  },
  {
    id: "f7",
    name: { en: "The Caped Spirit", ro: "Spiritul cu Pelerină" },
    description: { 
        en: "A dynamic figure with a mesh cape captured in mid-leap, symbolizing freedom and the soul of industrial movement.", 
        ro: "O figurină dinamică cu o pelerină din plasă capturată în plin salt, simbolizând libertatea și sufletul mișcării industriale." 
    },
    price: 800,
    category: Category.FIGURINES,
    image: "./images/f7.jpg"
  },
  {
    id: "f8",
    name: { en: "Tree of Iron Thought", ro: "Arborele Gândului de Fier" },
    description: { 
        en: "A surreal head sculpture with complex, branching wire extensions representing neural pathways or the growth of ideas.", 
        ro: "O sculptură suprarealistă de cap cu extensii ramificate complexe din sârmă, reprezentând căile neurale sau creșterea ideilor." 
    },
    price: 850,
    category: Category.FIGURINES,
    image: "./images/f8.jpg"
  },
  {
    id: "f9",
    name: { en: "Kneeling Paladin", ro: "Paladin Îngenuncheat" },
    description: { 
        en: "A wire warrior figure in a pose of deep respect or prayer, kneeling before a vertical steel sword set in a natural stone.", 
        ro: "O figurină de războinic din sârmă într-o poză de respect profund sau rugăciune, îngenuncheată în fața unei săbii de oțel verticale înfipte într-o piatră naturală." 
    },
    price: 900,
    category: Category.FIGURINES,
    image: "./images/f9.jpg"
  },
  {
    id: "f10",
    name: { en: "The Gear Bull", ro: "Taurul din Pinioane" },
    description: { 
        en: "A robust bull sculpture composed of heavy-duty drive chains and large industrial sprockets on a raw metal base.", 
        ro: "O sculptură de taur robustă compusă din lanțuri de transmisie grele și pinioane industriale mari pe o bază de metal brut." 
    },
    price: 950,
    category: Category.FIGURINES,
    image: "./images/f10.jpg"
  },
  {
    id: "f11",
    name: { en: "Abstract Contemplation", ro: "Contemplare Abstractă" },
    description: { 
        en: "A wire figure with a caped silhouette sitting contemplatively on a circular gear foundation.", 
        ro: "O figurină din sârmă cu siluetă cu pelerină, stând contemplativ pe o fundație din roată dințată circulară." 
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

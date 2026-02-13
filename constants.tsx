
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
    name: { en: "Night Drive - Honda Type R", ro: "Cursă de Noapte - Honda Type R" },
    description: { 
        en: "3D mixed media painting featuring a blue Honda Type R model navigating a textured mountain pass under a golden moon.", 
        ro: "Pictură 3D mixed media cu un model Honda Type R albastru parcurgând o trecătoare montană texturată sub o lună aurie." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "p2",
    name: { en: "BMW X6 Abstract Splatter", ro: "BMW X6 Abstract Splatter" },
    description: { 
        en: "Dynamic silver BMW X6 model centered on a dark canvas with energetic gold, red, and green paint splatters.", 
        ro: "Model argintiu BMW X6 centrat pe o pânză închisă, cu stropi energetici de vopsea aurie, roșie și verde." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "p3",
    name: { en: "Golden Bicycle Study", ro: "Studiu Bicicletă Aurie" },
    description: { 
        en: "Striking yellow bicycle set against a deep textured background with metallic gold accents and dark grit.", 
        ro: "Bicicletă galbenă vibrantă pe un fundal texturat profund, cu accente metalice aurii și texturi industriale." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "p4",
    name: { en: "G-Wagon Abstract Horizon", ro: "G-Wagon Orizont Abstract" },
    description: { 
        en: "Black Mercedes G-Class surrounded by chaotic, expressive brushstrokes of crimson and emerald on a dark field.", 
        ro: "Mercedes G-Class negru înconjurat de pensulații haotice și expresive de roșu și smarald pe un fundal întunecat." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "https://images.unsplash.com/photo-1520050206274-a1af446338cb?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "p5",
    name: { en: "Mercedes G Midnight Drift", ro: "Mercedes G Drift de Miezul Nopții" },
    description: { 
        en: "Dramatic white paint arc simulating a high-speed drift from a black G-Wagon on a dark, industrial background.", 
        ro: "Arc dramatic de vopsea albă simulând un drift de mare viteză al unui G-Wagon negru pe un fundal industrial." 
    },
    price: 200,
    category: Category.AUTOMOTIVE,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800"
  },

  // FIGURINES (€700 - €1000)
  {
    id: "f1",
    name: { en: "The Textured Angel", ro: "Îngerul Texturat" },
    description: { 
        en: "Industrial metal angel with cavernous, heavily welded wings and a delicate wire-mesh robe.", 
        ro: "Înger din metal industrial cu aripi masive sudate și o robă delicată din plasă metalică." 
    },
    price: 850,
    category: Category.FIGURINES,
    image: "https://images.unsplash.com/photo-1554188248-986adbb73be4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "f2",
    name: { en: "Industrial Guitar Clock", ro: "Ceas Chitară Industrială" },
    description: { 
        en: "Functional timepiece built into a guitar sculpture crafted from bicycle chains, gears, and bolts.", 
        ro: "Ceas funcțional integrat într-o sculptură de chitară realizată din lanțuri de bicicletă, roți dințate și șuruburi." 
    },
    price: 950,
    category: Category.FIGURINES,
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "f3",
    name: { en: "Minimalist Metal Angel", ro: "Înger Metalic Minimalist" },
    description: { 
        en: "A sleek, contemporary angel figurine with polished metal wings and a clean silhouette.", 
        ro: "Figurină de înger contemporană, cu aripi din metal polișat și o siluetă curată." 
    },
    price: 700,
    category: Category.FIGURINES,
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "f4",
    name: { en: "The Chain of Burden", ro: "Lanțul Poverii" },
    description: { 
        en: "A metal figure straining to pull a natural stone using a heavy industrial chain, signifying perseverance.", 
        ro: "O figurină metalică ce depune efort pentru a trage o piatră naturală cu un lanț industrial greu, simbolizând perseverența." 
    },
    price: 750,
    category: Category.FIGURINES,
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "f5",
    name: { en: "Lunar Ritual Gathering", ro: "Adunarea Ritualului Lunar" },
    description: { 
        en: "An intricate scene of wire-mesh figures connected by chains standing before an illuminated lunar surface.", 
        ro: "O scenă complexă de figurine din plasă metalică conectate prin lanțuri în fața unei suprafețe lunare iluminate." 
    },
    price: 1000,
    category: Category.FIGURINES,
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "f6",
    name: { en: "The Reader on Gear", ro: "Cititorul pe Roata Dințată" },
    description: { 
        en: "A serene wire-mesh figure reading a book, seated atop a large weathered industrial gear.", 
        ro: "O figurină senină din plasă metalică citind o carte, așezată pe o roată dințată industrială mare." 
    },
    price: 800,
    category: Category.FIGURINES,
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "f7",
    name: { en: "Spirit of Motion", ro: "Spiritul Mișcării" },
    description: { 
        en: "Abstract wire figure mounted on a gear base, capturing a sense of flight or dynamic energy.", 
        ro: "Figură abstractă din sârmă montată pe o bază de roată dințată, capturând un sentiment de zbor sau energie dinamică." 
    },
    price: 800,
    category: Category.FIGURINES,
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "f8",
    name: { en: "Tree of Iron Life", ro: "Copacul Vieții de Fier" },
    description: { 
        en: "Figurine with branching, root-like extensions from the head, blending organic form with industrial metal.", 
        ro: "Figurină cu extensii ramificate asemănătoare rădăcinilor, îmbinând forma organică cu metalul industrial." 
    },
    price: 850,
    category: Category.FIGURINES,
    image: "https://images.unsplash.com/photo-1444491741275-3747c53c99b4?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "f9",
    name: { en: "Legend of the Sword", ro: "Legenda Sabiei" },
    description: { 
        en: "A wire-sculpted warrior kneeling before a polished steel sword embedded in a raw stone base.", 
        ro: "Un războinic sculptat din sârmă îngenuncheat în fața unei săbii din oțel polișat înfiptă într-o bază de piatră brută." 
    },
    price: 900,
    category: Category.FIGURINES,
    image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "f10",
    name: { en: "The Chain Bull", ro: "Taurul din Lanțuri" },
    description: { 
        en: "A robust bull sculpture built entirely from transmission chains, sprockets, and mechanical scrap.", 
        ro: "O sculptură robustă de taur realizată integral din lanțuri de transmisie, pinioane și deșeuri mecanice." 
    },
    price: 950,
    category: Category.FIGURINES,
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "f11",
    name: { en: "Mesh Figure - Contemplation", ro: "Figurină Plasă - Contemplare" },
    description: { 
        en: "Seated wire-mesh figure showing the unique transparency and texture achieved through hand-weaving metal.", 
        ro: "Figurină așezată din plasă metalică ce arată transparența și textura unică obținute prin țeserea manuală a metalului." 
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

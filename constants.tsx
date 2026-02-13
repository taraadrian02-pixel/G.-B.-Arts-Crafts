
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
  // Automotive Art
  {
    id: "a1",
    name: { en: "Vintage V12 Engine Engraving", ro: "Gravură Motor V12 Vintage" },
    description: { en: "Intricate steel engraving of a legendary performance engine.", ro: "Gravură detaliată pe oțel a unui motor legendar de înaltă performanță." },
    price: 450,
    category: Category.AUTOMOTIVE,
    image: "https://picsum.photos/seed/engine1/600/800"
  },
  {
    id: "a2",
    name: { en: "Minimalist Porsche 911 Outline", ro: "Contur Porsche 911 Minimalist" },
    description: { en: "Precision cut aluminum silhouette of the iconic 911.", ro: "Siluetă din aluminiu tăiată cu precizie a iconicului 911." },
    price: 320,
    category: Category.AUTOMOTIVE,
    image: "https://picsum.photos/seed/porsche/600/800"
  },
  {
    id: "a3",
    name: { en: "F1 Steering Wheel Sculpture", ro: "Sculptură Volan Formula 1" },
    description: { en: "Full-scale metal replica of a modern racing steering wheel.", ro: "Replică metalică la scară reală a unui volan de curse modern." },
    price: 780,
    category: Category.AUTOMOTIVE,
    image: "https://picsum.photos/seed/steering/600/800"
  },
  {
    id: "a4",
    name: { en: "The Gearhead's Clock", ro: "Ceasul Pasionatului Auto" },
    description: { en: "Industrial wall clock made from reclaimed transmission parts.", ro: "Ceas industrial de perete realizat din componente de transmisie recondiționate." },
    price: 210,
    category: Category.AUTOMOTIVE,
    image: "https://picsum.photos/seed/clock/600/800"
  },
  {
    id: "a5",
    name: { en: "Cylinder Head Coffee Table", ro: "Măsuță de Cafea Chiuloasă" },
    description: { en: "Large glass-top table supported by a polished engine block.", ro: "Masă mare cu blat de sticlă susținută de un bloc motor polișat." },
    price: 1200,
    category: Category.AUTOMOTIVE,
    image: "https://picsum.photos/seed/table/600/800"
  },
  {
    id: "a6",
    name: { en: "Abstract Turbocharger Print", ro: "Tablou Abstract Turbosuflantă" },
    description: { en: "High-contrast metal print featuring a turbo assembly.", ro: "Print pe metal cu contrast ridicat reprezentând un ansamblu turbo." },
    price: 180,
    category: Category.AUTOMOTIVE,
    image: "https://picsum.photos/seed/turbo/600/800"
  },
  {
    id: "a7",
    name: { en: "Classic Grille Wall Art", ro: "Decor Perete Grilaj Clasic" },
    description: { en: "Hand-welded representation of a 1950s front grille.", ro: "Reprezentare sudată manual a unei grile frontale din anii '50." },
    price: 540,
    category: Category.AUTOMOTIVE,
    image: "https://picsum.photos/seed/grille/600/800"
  },
  {
    id: "a8",
    name: { en: "Spark Plug Chess Set", ro: "Set de Șah din Bujii" },
    description: { en: "Full chess set with pieces crafted from custom spark plugs.", ro: "Set de șah complet cu piese realizate din bujii personalizate." },
    price: 390,
    category: Category.AUTOMOTIVE,
    image: "https://picsum.photos/seed/chess/600/800"
  },
  // Figurines
  {
    id: "f1",
    name: { en: "The Welder", ro: "Sudorul" },
    description: { en: "A dynamic figurine of an artisan at work, made from nuts and bolts.", ro: "O figurină dinamică a unui artizan la lucru, realizată din șuruburi și piulițe." },
    price: 125,
    category: Category.FIGURINES,
    image: "https://picsum.photos/seed/welder/600/800"
  },
  {
    id: "f2",
    name: { en: "Metallic Saxophonist", ro: "Saxofonist Metalic" },
    description: { en: "Abstract metal figure capturing the soul of jazz.", ro: "Figură metalică abstractă ce surprinde sufletul jazz-ului." },
    price: 145,
    category: Category.FIGURINES,
    image: "https://picsum.photos/seed/sax/600/800"
  },
  {
    id: "f3",
    name: { en: "Iron Horse (Small)", ro: "Cal de Fier (Mic)" },
    description: { en: "An elegant equine sculpture crafted from chain links.", ro: "O sculptură ecvină elegantă realizată din zale de lanț." },
    price: 185,
    category: Category.FIGURINES,
    image: "https://picsum.photos/seed/horse/600/800"
  },
  {
    id: "f4",
    name: { en: "Cybernetic Owl", ro: "Bufniță Cibernetică" },
    description: { en: "A wise night hunter rendered in gears and washers.", ro: "O bufniță înțeleaptă realizată din roți dințate și șaibe." },
    price: 210,
    category: Category.FIGURINES,
    image: "https://picsum.photos/seed/owl/600/800"
  },
  {
    id: "f5",
    name: { en: "The Thinker (Nut & Bolt)", ro: "Gânditorul (Șuruburi)" },
    description: { en: "A metal reimagining of Rodin's masterpiece.", ro: "O reinterpretare metalică a capodoperei lui Rodin." },
    price: 110,
    category: Category.FIGURINES,
    image: "https://picsum.photos/seed/thinker/600/800"
  },
  {
    id: "f6",
    name: { en: "Medieval Knight Figurine", ro: "Figurină Cavaler Medieval" },
    description: { en: "Sturdy knight with a shield made from industrial scrap.", ro: "Cavaler robust cu scut realizat din deșeuri industriale." },
    price: 165,
    category: Category.FIGURINES,
    image: "https://picsum.photos/seed/knight/600/800"
  },
  {
    id: "f7",
    name: { en: "Biker Sculpture", ro: "Sculptură Motociclist" },
    description: { en: "Feel the speed in this lean, mean metal machine.", ro: "Simte viteza în această mașinărie metalică zveltă." },
    price: 250,
    category: Category.FIGURINES,
    image: "https://picsum.photos/seed/biker/600/800"
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

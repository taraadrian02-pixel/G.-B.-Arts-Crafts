
import React from 'react';
import { Product, Category, Translations } from './types';

export const BUSINESS_INFO = {
  name: "G. B. Arts&Crafts",
  email: "george.babau@mail.com",
  phone: "+40 743 649 948",
  address: "Strada Grui, Bl 6, Sc B, Ap 5, Zărnești, Brașov, România",
  instagram: "https://instagram.com/gbartscrafts",
  facebook: "https://www.facebook.com/profile.php?id=61588405826505",
  tiktok: "https://www.tiktok.com/@g.b.arts.and.crafts"
};

export const PRODUCTS: Product[] = [
  // --- PAINTINGS ---
  {
    id: "p6",
    name: { en: "Drum în Vălvătăi", ro: "Drum în Vălvătăi" },
    description: { 
        en: "An original mixed media work with 3D elements created in 2026. The piece features a red Renault on a dangerous road symbolized by lava traces, representing a challenge. It is a unique, hand-painted artwork.", 
        ro: "O lucrare originală mixtă cu elemente 3D creată în 2026. Piesa reprezintă un Renault roșu pe un drum periculos simbolizat prin urme de lavă, sugerând o provocare. Este o operă de artă unică, pictată manual." 
    },
    category: Category.AUTOMOTIVE,
    image: "https://pixabay.com/images/download/u_1916vmqe0b-image-10128523_1920.png",
    aspectRatio: 'landscape'
  },
  {
    id: "p2",
    name: { en: "BMW X6", ro: "BMW X6" },
    description: { 
        en: "An original work created in a modern abstract style, depicting a small BMW X6 against an abstract background. The artwork utilizes rotation and dripping techniques with gray, green, red, and gold to convey dynamism.", 
        ro: "O lucrare originală creată într-un stil abstract modern, înfățișând un mic BMW X6 pe un fundal abstract. Opera utilizează tehnici de rotație și picurare cu gri, verde, roșu și aur pentru a transmite dinamism." 
    },
    category: Category.AUTOMOTIVE,
    image: "https://pixabay.com/images/download/u_1916vmqe0b-image-10128524_1920.png",
    aspectRatio: 'landscape',
    isSold: false
  },
  {
    id: "p1",
    name: { en: "Honda Type R - Moonlight Relief", ro: "Honda Type R - Relief de Noapte" },
    description: { 
        en: "A deep blue Honda Type R model scaling a meticulously crafted brown mountain relief under a hand-applied gold-leaf moon.", 
        ro: "Un model Honda Type R albastru închis urcând un relief montan maro lucrat meticulos sub o lună din foiță de aur." 
    },
    category: Category.AUTOMOTIVE,
    image: "https://i.ibb.co/xtKG1Bg1/p1.png"
  },
  {
    id: "p7",
    name: { en: "Aripi pentru Drumul Interior", ro: "Aripi pentru Drumul Interior" },
    description: { 
        en: "An original, unique work created in 2026 using mixed techniques on a rigid support with integrated three-dimensional elements. Features a red car set within a winged style composition.", 
        ro: "O lucrare originală, unică, creată în 2026 folosind tehnici mixte pe suport rigid cu elemente tridimensionale integrate. Include o mașină roșie într-o compoziție cu aripi." 
    },
    category: Category.AUTOMOTIVE,
    image: "https://pixabay.com/images/download/u_1916vmqe0b-image-10128521_1920.png",
    aspectRatio: 'landscape'
  },
  {
    id: "p8",
    name: { en: "Îngeri Protectori", ro: "Îngeri Protectori" },
    description: { 
        en: "Created using materials such as acrylic and sculptural clay, this piece took 36 hours to complete. It features a winged artwork presented in a timeless vintage style.", 
        ro: "Creată folosind materiale precum acrilic și lut sculptural, această piesă a necesitat 36 de ore de muncă. Reprezintă o operă cu aripi prezentată într-un stil vintage atemporal." 
    },
    category: Category.AUTOMOTIVE,
    image: "https://pixabay.com/images/download/u_1916vmqe0b-image-10128520_1920.png",
    aspectRatio: 'landscape'
  },
  {
    id: "p9",
    name: { en: "Emerald GT - Forest Flow", ro: "GT Smarald - Flux Forestier" },
    description: { 
        en: "A sleek green Porsche-inspired design emerging from a lush, textured background of deep emerald and forest green.", 
        ro: "Un design elegant de inspirație Porsche, de culoare verde, ce emerge dintr-un fundal texturat bogat în nuanțe de smarald și verde pădure." 
    },
    category: Category.AUTOMOTIVE,
    image: "https://pixabay.com/images/download/u_1916vmqe0b-image-10128523_1920.png",
    aspectRatio: 'landscape'
  },
  {
    id: "p10",
    name: { en: "Cobalt Racer - Electric Blue", ro: "Cobalt Racer - Albastru Electric" },
    description: { 
        en: "High-speed energy depicted through a blue racer silhouette cutting through vibrant cobalt and sapphire textures.", 
        ro: "Energia vitezei mari reprezentată printr-o siluetă de mașină de curse albastră ce taie prin texturi vibrante de cobalt și safir." 
    },
    category: Category.AUTOMOTIVE,
    image: "https://pixabay.com/images/download/u_1916vmqe0b-image-10128524_1920.png",
    aspectRatio: 'landscape'
  },
  {
    id: "p11",
    name: { en: "Silver Phantom - Grey Scale", ro: "Silver Phantom - Scară Gri" },
    description: { 
        en: "A sophisticated silver-grey supercar design set against a monochromatic abstract landscape of metallic textures.", 
        ro: "Un design sofisticat de supercar gri-argintiu așezat pe un peisaj abstract monocrom de texturi metalice." 
    },
    category: Category.AUTOMOTIVE,
    image: "https://pixabay.com/images/download/u_1916vmqe0b-image-10128525_1920.png",
    aspectRatio: 'landscape'
  },
  {
    id: "p3",
    name: { en: "Introspecție Urbană", ro: "Introspecție Urbană" },
    description: { 
        en: "A contemporary mixed technique work titled 'Momentum' containing 3D elements. Reflects movement, balance, and personal progress through a yellow bicycle against an abstract black background.", 
        ro: "O lucrare contemporană cu tehnică mixtă intitulată 'Momentum', conținând elemente 3D. Reflectă mișcarea, echilibrul și progresul personal printr-o bicicletă galbenă pe un fundal negru abstract." 
    },
    category: Category.AUTOMOTIVE,
    image: "https://i.ibb.co/zhxWLSjh/p3.png"
  },
  {
    id: "p4",
    name: { en: "BANIER", ro: "BANIER" },
    description: { 
        en: "An original artwork in a modern abstract style that blends various materials and colors (red, green, black, gold) to present a sense of strength. Features car elements and the 'BANIER' inscription.", 
        ro: "O lucrare originală într-un stil abstract modern care îmbină diverse materiale și culori (roșu, verde, negru, aur) pentru a prezenta forță. Include elemente auto și inscripția 'BANIER'." 
    },
    category: Category.AUTOMOTIVE,
    image: "https://i.ibb.co/NnnTSQhq/p4.png",
    isSold: true
  },
  {
    id: "p5",
    name: { en: "Mercedes G", ro: "Mercedes G" },
    description: { 
        en: "An original painting presented in a modern texture style. It combines a 3D vehicle with impasto techniques, using black, white, and bronze to merge realism with dynamic abstraction.", 
        ro: "O pictură originală prezentată într-un stil cu textură modernă. Combină un vehicul 3D cu tehnici impasto, folosind negru, alb și bronz pentru a îmbina realismul cu abstracția dinamică." 
    },
    category: Category.AUTOMOTIVE,
    image: "https://pixabay.com/images/download/u_1916vmqe0b-image-10128525_1920.png",
    aspectRatio: 'landscape'
  },

  // --- FIGURINES ---
  {
    id: "f1",
    name: { en: "The Mesh Guardian Angel", ro: "Îngerul Păzitor din Plasă" },
    description: { 
        en: "A haunting guardian angel featuring a polished black sphere for a head, massive heavily-welded textured wings, and a delicate mesh gown.", 
        ro: "Un înger păzitor cu cap din sferă neagră lustruită, aripi masive din fier sudat și texturat, și o robă delicată din plasă." 
    },
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
    category: Category.FIGURINES,
    image: "https://i.ibb.co/ZRb6X5y7/f6.png"
  },
  {
    id: "f11",
    name: { en: "Seated Contemplation", ro: "Contemplare Așezată" },
    description: { 
        en: "A mesh figure sitting in a thoughtful pose on a large circular industrial sprocket, representing the soul within the machine.", 
        ro: "O figurină din plasă stând într-o poză gânditoare pe un pinion industrial circular mare, reprezentând sufletul din interiorul mașinii." 
    },
    category: Category.FIGURINES,
    image: "https://i.ibb.co/B5W87cVx/f11.png"
  },
  {
    id: "f10",
    name: { en: "The Industrial Bull", ro: "Taurul Industrial" },
    description: { 
        en: "A robust bull sculpture composed of heavy-duty drive chains and large industrial sprockets on a raw metal base.", 
        ro: "O sculptură de taur robustă compusă din lanțuri de transmisie grele și pinioane industriale mari pe o bază de metal brut." 
    },
    category: Category.FIGURINES,
    image: "https://i.ibb.co/HTX9jk7f/f10.png"
  },
  {
    id: "f9",
    name: { en: "Kneeling Paladin", ro: "Paladin Îngenuncheat" },
    description: { 
        en: "A wire warrior figure kneeling in deep reverence before a vertical steel sword embedded in a raw stone base.", 
        ro: "O figurină de războinic din sârmă îngenuncheată în semn de respect în fața unei săbii de oțel înfipte în piatră naturală." 
    },
    category: Category.FIGURINES,
    image: "https://i.ibb.co/tMCZz4Rr/f9.png"
  }
];

export const TRANSLATIONS: Translations = {
  nav_home: { en: "Home", ro: "Acasă" },
  nav_gallery: { en: "Gallery", ro: "Galerie" },
  nav_bio: { en: "The Artist", ro: "Artistul" },
  nav_contact: { en: "Contact", ro: "Contact" },
  hero_title: { en: "Where Metal Meets Passion", ro: "Unde Metalul Întâlnește Pasiunea" },
  hero_subtitle: { en: "Handcrafted automotive art and metal sculptures that redefine industrial beauty.", ro: "Artă auto lucrată manual și sculpturi metalice care definesc frumusețea industrială." },
  shop_now: { en: "Request Works", ro: "Solicită Lucrări" },
  add_to_cart: { en: "Add to Request", ro: "Adaugă la Cerere" },
  cart_title: { en: "Requested Items", ro: "Produse Solicitate" },
  cart_empty: { en: "Your request list is empty.", ro: "Lista de solicitări este goală." },
  checkout: { en: "Send Request via Email", ro: "Trimite Cererea prin Email" },
  bio_title: { en: "The Vision of Băbău George Cosmin", ro: "Viziunea lui Băbău George Cosmin" },
  bio_content: { 
    en: "The artistic journey of Băbău George Cosmin is not one that began in a classroom or a studio, but with a divine vision. In 2023, a dream changed the course of his life: God appeared to him and delivered a clear, profound command—to create an Angel and an Arc made of steel. At the time, he possessed no knowledge of welding. He had never held a torch, never fused two pieces of metal. Yet, compelled by the vision, he obeyed. The very next day, he acquired a welding station. What happened next can only be described as a miracle. As if guided by a force beyond himself, he began to weld with the confidence and skill of a lifelong master. It was as if the knowledge had been placed directly into his hands. This supernatural spark ignited a profound passion for creation. From that moment of divine intervention, his abilities expanded beyond welding into sculpting and painting. Today, every piece he creates—whether a 3D relief or a mixed media painting like 'Honda Type R'—carries the echo of that first miracle. His work is not just art; it is the physical manifestation of a calling, a testament to talent that was given, not learned.",
    ro: "Călătoria artistică a lui Băbău George Cosmin nu a început într-o sală de clasă sau într-un studio, ci cu o viziune divină. In 2023, un vis a schimbat cursul vieții sale: Dumnezeu i s-a arătat și i-a dat o poruncă clară și profundă – să creeze un Înger și un Arc din oțel. La acel moment, nu avea nicio cunoștință despre sudură. Nu ținuse niciodată un aparat de sudură în mână, nu fuzionase niciodată două bucăți de metal. Cu toate acestea, mânat de viziune, s-a supus. Chiar a doua zi, și-a achiziționat un post de sudură. Ceea ce s-a întâmplat în continuare poate fi descris doar ca un miracol. Ca și cum ar fi fost ghidat de o forță dincolo de el însuși, a început să sudeze cu încrederea și îndemânarea unui maestru cu experiență de o viață. Era ca și cum cunoștințele i-ar fi fost puse direct în mâini. Această scânteie supranaturală a aprins o pasiune profundă pentru creație. Din acel moment de intervenție divină, abilitățile sale s-au extins dincolo de sudură, spre sculptură și pictură. Astăzi, fiecare piesă pe care o creează – fie că este un relief 3D sau o pictură mixtă precum 'Honda Type R' – poartă ecoul acelui prim miracol. Munca lui nu este doar artă; este manifestarea fizică a unei chemări, o dovadă a unui talent care a fost dăruit, nu învățat."
  },
  contact_us: { en: "Get in Touch", ro: "Contactează-ne" },
  send_message: { en: "Send Message", ro: "Trimite Mesaj" },
  success_order: { en: "Thank you for your request!", ro: "Vă mulțumim pentru cerere!" },
  total: { en: "Total Items", ro: "Total Produse" },
  footer_text: { en: "Handcrafted in the heart of Transylvania.", ro: "Creat manual în inima Transilvaniei." },
  
  // New Translations
  collection_label: { en: "The Collection", ro: "Colecția" },
  featured_works: { en: "Featured Works", ro: "Lucrări Reprezentative" },
  cat_all: { en: "All", ro: "Toate" },
  cat_automotive: { en: "Automotive Art", ro: "Artă Auto" },
  cat_figurines: { en: "Metal Figurines", ro: "Figurine Metalice" },
  sold: { en: "SOLD", ro: "VÂNDUT" },
  bio_label: { en: "Behind the Iron", ro: "Dincolo de Fier" }
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
  ),
  TikTok: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
    </svg>
  )
};

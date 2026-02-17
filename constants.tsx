
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

// --- ICON COMPONENTS ---
// Added the missing Icons export to fix module errors across multiple components.
export const Icons = {
  Cart: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
  ),
  Close: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
  ),
  Menu: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
  ),
  Instagram: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
  ),
  Facebook: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
  ),
  TikTok: () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
  )
};

export const PRODUCTS: Product[] = [
  // --- PAINTINGS (AUTOMOTIVE ART) ---
  {
    id: "p6",
    name: { en: "Drum în Vălvătăi", ro: "Drum în Vălvătăi" },
    description: { 
        en: "An original mixed media work with 3D elements created in 2026. The piece features a red car (Renault) on a dangerous road symbolized by lava traces, representing a challenge. It is a unique, hand-painted artwork.", 
        ro: "O lucrare originală mixtă cu elemente 3D creată în 2026. Piesa reprezintă un Renault roșu pe un drum periculos simbolizat prin urme de lavă, sugerând o provocare. Este o operă de artă unică, pictată manual." 
    },
    category: Category.AUTOMOTIVE,
    image: "https://images.unsplash.com/photo-1771320251692-acfb68154ad6?q=80&w=1568&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    aspectRatio: 'landscape'
  },
  {
    id: "p2",
    name: { en: "BMW X6", ro: "BMW X6" },
    description: { 
        en: "An original work created in a modern abstract style, depicting a small BMW X6 against an abstract background. The artwork utilizes rotation and dripping techniques with colors—gray, green, red, and gold—to convey a sense of dynamism and energy.", 
        ro: "O lucrare originală creată într-un stil abstract modern, înfățișând un mic BMW X6 pe un fundal abstract. Opera utilizează tehnici de rotație și picurare cu nuanțe de gri, verde, roșu și aur pentru a transmite dinamism și energie." 
    },
    category: Category.AUTOMOTIVE,
    image: "https://images.unsplash.com/photo-1771320251705-9a73fb090b86?q=80&w=1677&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        en: "An original, unique work created in 2026. It utilizes mixed techniques on a rigid support with integrated three-dimensional elements. The artwork features a red car set within a winged style composition against a colorful background.", 
        ro: "O lucrare originală, unică, creată în 2026. Utilizează tehnici mixte pe suport rigid cu elemente tridimensionale integrate. Opera prezintă o mașină roșie așezată într-o compoziție stil aripi pe un fundal colorat." 
    },
    category: Category.AUTOMOTIVE,
    image: "https://pixabay.com/images/download/u_1916vmqe0b-image-10128521_1920.png",
    aspectRatio: 'landscape'
  },
  {
    id: "p8",
    name: { en: "Îngeri Protectori", ro: "Îngeri Protectori" },
    description: { 
        en: "Created using materials such as acrylic and sculptural clay, this piece took 36 hours to complete. It features a winged artwork presented in a vintage style.", 
        ro: "Creată folosind materiale precum acrilic și lut sculptural, această piesă a necesitat 36 de ore de muncă. Reprezintă o operă cu aripi prezentată într-un stil vintage." 
    },
    category: Category.AUTOMOTIVE,
    image: "https://pixabay.com/images/download/u_1916vmqe0b-image-10128520_1920.png",
    aspectRatio: 'landscape'
  },
  {
    id: "p9",
    name: { en: "Emerald GT - Forest Flow", ro: "GT Smarald - Flux Forestier" },
    description: { 
        en: "A sleek green supercar design emerging from a lush, textured background of deep emerald and forest green.", 
        ro: "Un design elegant de supercar verde ce emerge dintr-un fundal texturat bogat în nuanțe de smarald și verde pădure." 
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
        en: "A contemporary mixed technique work titled 'Momentum' containing 3D elements. Created in 2026 with a 24-hour production time, the theme reflects movement, balance, and personal progress. It features an abstract composition with a yellow bicycle against a black background.", 
        ro: "O lucrare contemporană cu tehnică mixtă intitulată 'Momentum', conținând elemente 3D. Creată în 2026 cu un timp de producție de 24 de ore, tema reflectă mișcarea, echilibrul și progresul personal. Include o bicicletă galbenă pe un fundal negru abstract." 
    },
    category: Category.AUTOMOTIVE,
    image: "https://i.ibb.co/zhxWLSjh/p3.png"
  },
  {
    id: "p4",
    name: { en: "BANIER", ro: "BANIER" },
    description: { 
        en: "An original artwork in a modern abstract style that blends various materials and colors (red, green, black, gold) to present a sense of strength and fusion. The piece features car elements and the 'BANIER' inscription.", 
        ro: "O lucrare originală într-un stil abstract modern care îmbină diverse materiale și culori (roșu, verde, negru, aur) pentru a prezenta forță și fuziune. Include elemente auto și inscripția 'BANIER'." 
    },
    category: Category.AUTOMOTIVE,
    image: "https://i.ibb.co/NnnTSQhq/p4.png",
    isSold: true
  },
  {
    id: "p5",
    name: { en: "Mercedes G", ro: "Mercedes G" },
    description: { 
        en: "An original oil painting presented in a modern texture style. It combines a 3D vehicle with impasto techniques, using black, white, and bronze as primary colors. The work merges realism with dynamic abstraction to convey a sense of power.", 
        ro: "O pictură în ulei originală prezentată într-un stil cu textură modernă. Combină un vehicul 3D cu tehnici impasto, folosind negru, alb și bronz ca nuanțe primare. Opera îmbină realismul cu abstracția dinamică pentru a transmite putere." 
    },
    category: Category.AUTOMOTIVE,
    image: "https://i.ibb.co/V07NcqS9/p5.png",
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
    name: { en: "Chitara Timpului Pierdut", ro: "Chitara Timpului Pierdut" },
    description: { 
        en: "A full-scale industrial guitar sculpture made of bicycle chains, nuts, and bolts, featuring a functional clock face. A tribute to the passage of time through iron.", 
        ro: "O sculptură de chitară industrială la scară reală realizată din lanțuri de bicicletă, piulițe și șuruburi, cu un ceas funcțional. Un tribut adus trecerii timpului prin fier." 
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
    name: { en: "Între Inimă si Rațiune", ro: "Între Inimă si Rațiune" },
    description: { 
        en: "Three wire-mesh figures connected by chains in a ritual formation standing before a large, glowing installation, representing the duality of human choice.", 
        ro: "Trei figurine din plasă de sârmă conectate prin lanțuri într-o formație ritualică, stând în fața unei instalații mari luminate, reprezentând dualitatea alegerii umane." 
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
    name: { en: "Taurul - Forța care nu cedează", ro: "Taurul - Forța care nu cedează" },
    description: { 
        en: "A contemplative study of strength and resilience, depicting a mesh figure integrated with industrial elements.", 
        ro: "Un studiu contemplativ asupra forței și rezilienței, înfățișând o figurină din plasă integrată cu elemente industriale." 
    },
    category: Category.FIGURINES,
    image: "https://i.ibb.co/B5W87cVx/f11.png"
  },
  {
    id: "f10",
    name: { en: "Povara Jurământului", ro: "Povara Jurământului" },
    description: { 
        en: "A robust bull sculpture composed of heavy-duty drive chains and large industrial sprockets, symbolizing a solemn commitment through iron.", 
        ro: "O sculptură de taur robustă compusă din lanțuri de transmisie grele și pinioane industriale mari, simbolizând un angajament solemn prin fier." 
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
  total: { en: "Total Items", ro: "Total Produse" },
  sold: { en: "Sold", ro: "Vândut" },
  contact_us: { en: "Contact Us", ro: "Contactează-ne" },
  send_message: { en: "Send Message", ro: "Trimite Mesaj" },
  footer_text: { 
    en: "Unique hand-welded steel sculptures and mixed media automotive art inspired by a divine vision.", 
    ro: "Sculpturi unice din oțel sudat manual și artă auto mixtă inspirată de o viziune divină." 
  },
  cat_all: { en: "All Works", ro: "Toate Lucrările" },
  cat_automotive: { en: "Automotive Art", ro: "Artă Auto" },
  cat_figurines: { en: "Metal Figurines", ro: "Figurine Metal" },
  collection_label: { en: "The Collection", ro: "Colecția" },
  featured_works: { en: "Featured Works", ro: "Lucrări Reprezentative" },
  success_order: { en: "Request sent successfully!", ro: "Cererea a fost trimisă cu succes!" },
  bio_label: { en: "Heritage", ro: "Moștenire" },
  bio_title: { en: "The Vision of Băbău George Cosmin", ro: "Viziunea lui Băbău George Cosmin" },
  bio_content: { 
    en: "The artistic journey of Băbău George Cosmin is not one that began in a classroom or a studio, but with a divine vision. In 2023, a dream changed the course of his life: God appeared to him and delivered a clear, profound command—to create an Angel and an Arc made of steel. At the time, he possessed no knowledge of welding. He had never held a torch, never fused two pieces of metal. Yet, compelled by the vision, he obeyed. The very next day, he acquired a welding station. What happened next can only be described as a miracle. As if guided by a force beyond himself, he began to weld with the confidence and skill of a lifelong master. It was as if the knowledge had been placed directly into his hands. This supernatural spark ignited a profound passion for creation. From that moment of divine intervention, his abilities expanded beyond welding into sculpting and painting. Today, every piece he creates—whether a 3D relief or a mixed media painting like 'Honda Type R'—carries the echo of that first miracle. His work is not just art; it is the physical manifestation of a calling, a testament to talent that was given, not learned.",
    ro: "Călătoria artistică a lui Băbău George Cosmin nu a început într-o sală de clasă sau într-un studio, ci cu o viziune divină. În 2023, un vis a schimbat cursul vieții sale: Dumnezeu i s-a arătat și i-a dat o poruncă clară și profundă – să creeze un Înger și un Arc din oțel. La acel moment, nu avea nicio cunoștință despre sudură. Nu ținuse niciodată un aparat de sudură în mână, nu fuzionase niciodată două bucăți de metal. Cu toate acestea, mânat de viziune, s-a supus. Chiar a doua zi, și-a achiziționat un post de sudură. Ceea ce s-a întâmplat în continuare poate fi descris doar ca un miracol. Ca și cum ar fi fost ghidat de o forță superioară, a început să sudeze cu încrederea și îndemânarea unui maestru de o viață. Această scânteie supranaturală a aprins o pasiune profundă pentru creație. De la acel moment de intervenție divină, abilitățile sale s-au extins dincolo de sudură, în sculptură și pictură. Astăzi, fiecare piesă pe care o creează poartă ecoul acelui prim miracol. Munca sa nu este doar artă; este manifestarea fizică a unei chemări, un testament al talentului care a fost dăruit, nu învățat."
  }
};

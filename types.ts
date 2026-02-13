
export type Language = 'en' | 'ro';

export enum Category {
  AUTOMOTIVE = 'Automotive Art',
  FIGURINES = 'Metal Figurines'
}

export interface Product {
  id: string;
  name: {
    en: string;
    ro: string;
  };
  description: {
    en: string;
    ro: string;
  };
  price: number;
  category: Category;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Translations {
  [key: string]: {
    en: string;
    ro: string;
  };
}

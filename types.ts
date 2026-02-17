
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
  category: Category;
  image: string;
  isSold?: boolean;
  rotate?: boolean;
  aspectRatio?: 'portrait' | 'landscape';
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

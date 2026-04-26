export interface Course {
  id?: string;
  class: string;
  title: string;
  badge: string;
  language: string;
  audience: string;
  dateStr: string;
  isPremium: boolean;
  originalPrice: string;
  currentPrice: string;
  discountText: string;
  image: string;
}

export interface User {
  phoneNumber: string | null;
  isLoggedIn: boolean;
}

export interface CartItem {
  courseTitle: string;
  quantity: number;
}

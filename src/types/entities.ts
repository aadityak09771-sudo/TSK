export interface CommonCourse {
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

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
  courseTitle: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addItem: (courseTitle: string) => void;
  updateQuantity: (courseTitle: string, delta: number) => void;
  clearCart: () => void;
  getTotalCount: () => number;
  getItemQuantity: (courseTitle: string) => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (courseTitle) => {
        const { items } = get();
        const existing = items.find(i => i.courseTitle === courseTitle);
        if (existing) {
          set({
            items: items.map(i => 
              i.courseTitle === courseTitle ? { ...i, quantity: i.quantity + 1 } : i
            )
          });
        } else {
          set({ items: [...items, { courseTitle, quantity: 1 }] });
        }
      },
      updateQuantity: (courseTitle, delta) => {
        const { items } = get();
        const updated = items.map(i => 
          i.courseTitle === courseTitle ? { ...i, quantity: i.quantity + delta } : i
        ).filter(i => i.quantity > 0);
        set({ items: updated });
      },
      clearCart: () => set({ items: [] }),
      getTotalCount: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
      getItemQuantity: (courseTitle) => get().items.find(i => i.courseTitle === courseTitle)?.quantity || 0,
    }),
    {
      name: 'cart-storage',
    }
  )
);

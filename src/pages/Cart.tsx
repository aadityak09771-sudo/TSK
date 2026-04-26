import React from 'react';
import { useCartStore } from '../store/useCartStore';
import { useAuthStore } from '../store/useAuthStore';
import { Button } from '../components/ui/Button';
import { Trash2, AlertCircle, ShoppingBag } from 'lucide-react';
import { COURSE_DATA } from '../config/courses';
import { Navigate } from 'react-router-dom';
import type { Course } from '../types';

export const Cart: React.FC = () => {
  const items = useCartStore(state => state.items);
  const updateQuantity = useCartStore(state => state.updateQuantity);
  const clearCart = useCartStore(state => state.clearCart);
  const totalCount = items.reduce((sum, i) => sum + i.quantity, 0);
  const isLoggedIn = useAuthStore(state => state.isLoggedIn);

  if (!isLoggedIn) {
     return <Navigate to="/" />;
  }

  const cartDetails = items.map(item => {
    const course = COURSE_DATA.find(c => c.title === item.courseTitle);
    return { ...item, course };
  });

  const subtotal = cartDetails.reduce((sum, item) => {
    const price = parseInt(item.course?.currentPrice.replace(/,/g, '') || '0');
    return sum + (price * item.quantity);
  }, 0);

  if (items.length === 0) {
    return (
      <div className="container py-32 text-center">
        <div className="w-24 h-24 bg-gray-50 text-gray-300 rounded-full flex items-center justify-center mx-auto mb-10">
          <ShoppingBag size={48} />
        </div>
        <h2 className="text-3xl font-black mb-4">Your cart is empty</h2>
        <p className="text-gray-500 mb-10 max-w-sm mx-auto">Looks like you haven't added any courses yet. Start exploring our featured programs!</p>
        <Button variant="solid" className="px-10">
          Explore Courses
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="container">
        <h1 className="text-4xl font-black mb-12">My Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Items List */}
          <div className="lg:col-span-2 space-y-6">
            {cartDetails.map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex gap-6 items-center">
                <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                   <img src={item.course?.image.replace('./', '/')} alt="" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">{item.courseTitle}</h3>
                  <p className="text-sm text-gray-400 font-bold uppercase">{item.course?.class}th Grade</p>
                  <p className="text-[var(--color-primary)] font-black mt-2">₹{item.course?.currentPrice}</p>
                </div>
                <div className="flex items-center gap-4 bg-gray-50 px-4 py-2 rounded-xl border border-gray-100">
                  <button 
                    onClick={() => updateQuantity(item.courseTitle, -1)}
                    className="w-8 h-8 flex items-center justify-center font-bold text-gray-500 hover:text-black transition-colors"
                  >
                    −
                  </button>
                  <span className="font-black text-gray-900 w-4 text-center">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.courseTitle, 1)}
                    className="w-8 h-8 flex items-center justify-center font-bold text-gray-500 hover:text-black transition-colors"
                  >
                    +
                  </button>
                </div>
                <button 
                   onClick={() => updateQuantity(item.courseTitle, -item.quantity)}
                   className="p-3 text-red-100 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            ))}

            <button 
              onClick={clearCart}
              className="text-sm font-bold text-gray-400 hover:text-red-500 transition-colors uppercase tracking-widest pl-6"
            >
              Clear Cart
            </button>
          </div>

          {/* Checkout Summary */}
          <div className="space-y-6">
            <div className="bg-gray-900 text-white p-8 rounded-[40px] shadow-2xl">
              <h3 className="text-xl font-black mb-8">Order Summary</h3>
              <div className="space-y-4 pb-8 border-b border-white/10">
                <div className="flex justify-between text-gray-400 font-medium">
                  <span>Total Items</span>
                  <span>{totalCount}</span>
                </div>
                <div className="flex justify-between text-gray-400 font-medium">
                  <span>Course Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-400 font-medium">
                  <span>Tax (Included)</span>
                  <span>₹0</span>
                </div>
              </div>
              <div className="py-8 flex justify-between items-center mb-4">
                <span className="text-lg font-bold">Grand Total</span>
                <span className="text-3xl font-black text-blue-400">₹{subtotal.toLocaleString()}</span>
              </div>
              <Button variant="solid" className="w-full py-5 bg-blue-600 hover:bg-blue-500 text-base uppercase tracking-widest">
                Proceed to Checkout
              </Button>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-gray-100 flex items-start gap-4 shadow-sm shadow-blue-500/5">
              <AlertCircle className="text-blue-500 shrink-0" size={24} />
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                Enrollments are processed immediately. You will receive access details via email within 10 minutes of successful payment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

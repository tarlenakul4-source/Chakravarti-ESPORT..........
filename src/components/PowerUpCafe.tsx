import React, { useState } from "react";
import { SNACKS_MENU } from "../data/mockData";
import { SnackItem } from "../types";
import { Coffee, Flame, Plus, CheckCircle2, ShoppingBag, Zap } from "lucide-react";

export const PowerUpCafe: React.FC = () => {
  const [cart, setCart] = useState<{ item: SnackItem; qty: number }[]>([]);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const addToCart = (snack: SnackItem) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.item.id === snack.id);
      if (existing) {
        return prev.map((i) => (i.item.id === snack.id ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...prev, { item: snack, qty: 1 }];
    });
  };

  const totalAmount = cart.reduce((acc, curr) => acc + curr.item.price * curr.qty, 0);

  const handlePlaceOrder = () => {
    if (cart.length === 0) return;
    setOrderConfirmed(true);
    setTimeout(() => {
      setOrderConfirmed(false);
      setCart([]);
    }, 4000);
  };

  return (
    <section id="cafe-menu" className="py-16 bg-slate-950 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-300 font-semibold mb-3">
              <Coffee className="w-3.5 h-3.5 text-emerald-400" />
              IN-ARENA DESK DELIVERY
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight uppercase font-mono">
              Power-Up <span className="text-emerald-400">Cafe Menu</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Fresh artisanal iced cold coffees, Red Bull energy drinks, peri peri fries, pizzas, and piping hot Korean ramen served straight to your gaming desk.
            </p>
          </div>

          {/* Quick Order Cart Floating Summary */}
          {cart.length > 0 && (
            <div className="bg-emerald-950/80 border border-emerald-500/40 p-4 rounded-2xl flex items-center justify-between gap-4 animate-in fade-in">
              <div>
                <p className="text-xs font-mono text-slate-300">DESK ORDER ({cart.reduce((a, c) => a + c.qty, 0)} items)</p>
                <p className="text-xl font-extrabold font-mono text-emerald-400">₹{totalAmount}</p>
              </div>
              <button
                onClick={handlePlaceOrder}
                className="px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-mono font-bold text-xs rounded-xl shadow-lg"
              >
                Order To Desk
              </button>
            </div>
          )}
        </div>

        {orderConfirmed && (
          <div className="mb-8 p-4 bg-emerald-950 border border-emerald-500/50 rounded-2xl text-emerald-300 font-mono text-sm flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
            <div>
              <p className="font-bold">Order Received! Desk Delivery En Route.</p>
              <p className="text-xs text-slate-300">Our cafe crew will bring your fresh snacks straight to your gaming station.</p>
            </div>
          </div>
        )}

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SNACKS_MENU.map((snack) => (
            <div
              key={snack.id}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-emerald-500/40 transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={snack.image}
                    alt={snack.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 bg-slate-950/90 px-2.5 py-1 rounded-lg border border-slate-800 text-xs font-mono font-extrabold text-emerald-400">
                    ₹{snack.price}
                  </div>
                </div>

                <div className="p-4 space-y-1.5">
                  <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase">
                    {snack.category}
                  </span>
                  <h3 className="font-mono font-bold text-sm text-white">{snack.name}</h3>
                  <p className="text-xs text-slate-400 line-clamp-2">{snack.description}</p>
                </div>
              </div>

              <div className="p-4 pt-0">
                <button
                  onClick={() => addToCart(snack)}
                  className="w-full py-2 px-3 text-xs font-mono font-bold text-slate-200 bg-slate-950 hover:bg-emerald-950 hover:text-emerald-400 border border-slate-800 hover:border-emerald-500/40 rounded-xl transition-all flex items-center justify-center gap-1.5"
                >
                  <Plus className="w-3.5 h-3.5" /> Add To Desk Order
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

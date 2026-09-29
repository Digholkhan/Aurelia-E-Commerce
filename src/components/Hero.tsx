import React from 'react';
import { ArrowRight, Sparkles, ShoppingBag, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  const handleScrollToProducts = () => {
    const section = document.getElementById('featured-products');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden min-h-[68vh] flex flex-col justify-center bg-linear-to-b from-slate-50 via-white to-slate-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-12 sm:py-16 lg:py-20 transition-colors duration-300">
      {/* Ambient glowing background blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 left-10 w-96 h-96 bg-primary-300/30 dark:bg-primary-900/20 rounded-full blur-3xl pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-300/30 dark:bg-indigo-900/20 rounded-full blur-3xl pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8 lg:col-span-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center space-x-2 rounded-full bg-primary-50 dark:bg-primary-950/80 border border-primary-100 dark:border-primary-800/60 px-4 py-1.5 text-xs font-semibold text-primary-700 dark:text-primary-300 shadow-sm"
            >
              <Sparkles className="h-3.5 w-3.5 text-primary-500 animate-pulse" />
              <span>New season · made for everyday delight</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl lg:leading-[1.1]"
            >
              Things that make <br />
              <span className="bg-linear-to-r from-orange-500 via-rose-500 to-amber-500 bg-clip-text text-transparent animate-gradient">
                life feel lovely.
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="max-w-xl text-base text-slate-500 dark:text-slate-400 leading-relaxed sm:text-lg"
            >
              Discover well-made favorites for your home, wardrobe, and daily rituals — thoughtfully chosen so finding your next thing feels easy.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.04, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleScrollToProducts}
                className="flex items-center justify-center space-x-2 rounded-xl bg-slate-900 dark:bg-white dark:text-slate-900 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-slate-900/15 hover:bg-slate-800 transition-all"
              >
                <span>Shop new arrivals</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.03, translateY: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#categories"
                className="flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-8 py-4 text-base font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-750 shadow-sm transition-all"
              >
                Explore Categories
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Product Image Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 lg:mt-0 lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-md md:max-w-lg aspect-square">
              {/* Outer decorative glow */}
              <div className="absolute -inset-2 rounded-3xl bg-linear-to-tr from-primary-500 via-indigo-500 to-purple-500 opacity-25 blur-2xl animate-pulse-glow"></div>
              
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl shadow-slate-200/60 dark:shadow-none"
              >
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=90"
                  alt="Woman browsing a curated fashion collection"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />

                {/* Floating Badge overlay */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute bottom-6 left-6 flex items-center space-x-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 dark:border-slate-700 backdrop-blur-md p-3.5 shadow-lg border border-white/40"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-white shadow-md">
                    <ShoppingBag className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">The weekend edit</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">Fresh finds, now in</p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      <div className="relative z-10 mx-auto mt-8 flex w-full max-w-7xl flex-wrap gap-x-8 gap-y-3 px-4 text-xs font-semibold text-stone-500 sm:px-6 lg:px-8">
        <span className="flex items-center gap-1.5"><Star className="h-3.5 w-3.5 fill-orange-400 text-orange-400" /> 4.9 from happy shoppers</span>
        <span>Free delivery on orders over $75</span><span>Easy 30-day returns</span>
      </div>

      {/* Visual Flow Indicator to Next Section */}
      <div className="mt-8 flex justify-center">
        <motion.button
          onClick={handleScrollToProducts}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center space-x-2 text-xs font-bold text-slate-400 hover:text-primary-600 transition-colors"
        >
          <span>Scroll to Explore</span>
          <ArrowRight className="h-3.5 w-3.5 rotate-90" />
        </motion.button>
      </div>
    </section>
  );
};


import { ArrowUpRight, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const stories = [
  { title: 'Golden hour', subtitle: 'Pieces for slow weekends', image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=900&q=85' },
  { title: 'The daily ritual', subtitle: 'Small upgrades, big feeling', image: 'https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=900&q=85' },
  { title: 'Soft structure', subtitle: 'Modern essentials, considered', image: 'https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?auto=format&fit=crop&w=900&q=85' },
];

export const StyleEdit: React.FC = () => (
  <section className="bg-primary-50 py-20 dark:bg-slate-950 sm:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <div>
          <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-400"><Sparkles className="h-3.5 w-3.5" /> The Aurelia edit</p>
          <h2 className="font-serif text-4xl tracking-[-0.05em] text-slate-900 dark:text-white sm:text-5xl">A little inspiration,<br />beautifully collected.</h2>
        </div>
        <a href="#featured-products" className="group inline-flex items-center gap-2 text-sm font-bold text-slate-800 dark:text-slate-100">Shop the stories <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></a>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {stories.map((story, index) => (
          <motion.a href="#featured-products" key={story.title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="group relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone-200">
            <img src={story.image} alt={story.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-950/5 to-transparent" />
            <div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-white">
              <div><p className="font-serif text-2xl">{story.title}</p><p className="mt-1 text-xs font-medium text-white/80">{story.subtitle}</p></div>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white/20 backdrop-blur"><Heart className="h-4 w-4" /></span>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

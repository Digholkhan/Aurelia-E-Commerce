import { ArrowRight, Gift, ShieldCheck, Truck } from 'lucide-react';
import { motion } from 'framer-motion';

export const MemberMoment: React.FC = () => (
  <section className="bg-slate-50 py-20 dark:bg-slate-900 sm:py-28">
    <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
      <div className="rounded-4xl bg-linear-to-br from-primary-700 via-primary-800 to-indigo-950 p-8 text-white shadow-xl shadow-primary-900/20 sm:p-12">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-200">Aurelia circle</p>
        <h2 className="mt-5 max-w-lg font-serif text-4xl leading-tight tracking-tighter sm:text-5xl">More joy in every delivery.</h2>
        <p className="mt-5 max-w-md text-sm leading-7 text-primary-100">Join our circle for first access to new drops, thoughtful rewards and a little extra care at checkout.</p>
        <a href="#newsletter" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-primary-700 transition hover:bg-primary-50">Join the circle <ArrowRight className="h-4 w-4" /></a>
      </div>
      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
        {[
          [Gift, 'Curated rewards', 'Surprises that make ordinary orders feel special.'],
          [Truck, 'Easy delivery', 'Clear updates from our door to yours.'],
          [ShieldCheck, 'Thoughtful service', 'Friendly help whenever you need it.'],
        ].map(([Icon, title, text], index) => {
          const FeatureIcon = Icon as typeof Gift;
          return <motion.div key={String(title)} initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} className="flex gap-4 rounded-3xl border border-primary-100 bg-white p-6 dark:border-slate-800 dark:bg-slate-800">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-primary-100 text-primary-600 dark:bg-primary-950 dark:text-primary-300"><FeatureIcon className="h-5 w-5" /></span>
            <div><h3 className="font-bold text-slate-900 dark:text-white">{title as string}</h3><p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">{text as string}</p></div>
          </motion.div>;
        })}
      </div>
    </div>
  </section>
);

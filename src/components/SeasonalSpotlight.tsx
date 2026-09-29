import React from 'react';
import { ArrowRight, Clock3, PackageCheck, RotateCcw, ShieldCheck, Truck } from 'lucide-react';

const benefits = [
  { icon: Truck, title: 'Free delivery', copy: 'On orders over $75' },
  { icon: RotateCcw, title: 'Easy returns', copy: '30 days, no fuss' },
  { icon: ShieldCheck, title: 'Secure checkout', copy: 'Your details stay protected' },
  { icon: PackageCheck, title: 'Carefully packed', copy: 'Ready to gift or keep' },
];

export const SeasonalSpotlight: React.FC = () => (
  <>
    <section className="bg-white py-16 dark:bg-slate-900 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid overflow-hidden rounded-4xl bg-primary-900 lg:grid-cols-2">
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-primary-300"><Clock3 className="h-4 w-4" /> A little something extra</p>
            <h2 className="mt-5 max-w-md font-serif text-4xl leading-tight tracking-tighter text-white sm:text-5xl">Take 15% off your first bright idea.</h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-primary-100">Use code <span className="rounded bg-white/15 px-2 py-1 font-bold text-white">AURELIA15</span> at checkout and discover something new to love.</p>
            <a href="#featured-products" className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-primary-700 transition hover:bg-primary-50">Explore the collection <ArrowRight className="h-4 w-4" /></a>
          </div>
          <div className="relative min-h-80">
            <img src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=85" alt="A curated clothing rail" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-linear-to-r from-primary-900/45 to-transparent lg:bg-linear-to-l" />
          </div>
        </div>
      </div>
    </section>

    <section className="border-y border-primary-100 bg-primary-50 py-7 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return <div key={benefit.title} className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-primary-600 shadow-sm dark:bg-slate-900"><Icon className="h-5 w-5" /></span><div><p className="text-sm font-bold text-slate-900 dark:text-white">{benefit.title}</p><p className="text-xs text-slate-500 dark:text-slate-400">{benefit.copy}</p></div></div>;
        })}
      </div>
    </section>
  </>
);

import { Sparkle } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BrandMark = ({ light = false }: { light?: boolean }) => (
  <Link to="/" className="group flex items-center gap-2.5" aria-label="Aurelia home">
    <span className="grid h-10 w-10 place-items-center rounded-[14px] bg-gradient-to-br from-amber-300 via-orange-400 to-rose-500 text-white shadow-lg shadow-orange-500/20 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
      <Sparkle className="h-5 w-5" strokeWidth={2.5} />
    </span>
    <span className={`font-serif text-2xl font-semibold tracking-[-0.06em] ${light ? 'text-white' : 'text-stone-900 dark:text-white'}`}>
      aurelia<span className="text-orange-500">.</span>
    </span>
  </Link>
);

import React from 'react';
import { Hero } from '../components/Hero';
import { Highlights } from '../components/Highlights';
import { Categories } from '../components/Categories';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { Testimonials } from '../components/Testimonials';
import { FAQ } from '../components/FAQ';
import { Newsletter } from '../components/Newsletter';
import { StyleEdit } from '../components/StyleEdit';
import { MemberMoment } from '../components/MemberMoment';
import { SeasonalSpotlight } from '../components/SeasonalSpotlight';

export const Home: React.FC = () => {
  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      <Hero />
      <Highlights />
      <Categories />
      <SeasonalSpotlight />
      <FeaturedProducts />
      <StyleEdit />
      <WhyChooseUs />
      <MemberMoment />
      <Testimonials />
      <FAQ />
      <Newsletter />
    </div>
  );
};

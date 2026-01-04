import React from 'react';
import { EyeOff, MapPin, Clock, ShoppingBag } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
import { GlowingEffect } from './ui/GlowingEffect';
import { cn } from '../lib/utils';

const problems = [
  {
    icon: <EyeOff className="h-6 w-6" />,
    title: 'Limited Visualization',
    description: 'Static images and videos fail to provide a true sense of product scale, texture, and detail.',
    area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: 'Expensive Showrooms',
    description: 'Businesses spend fortunes on physical locations that reach only a local audience.',
    area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: 'Time Consuming',
    description: 'Physical store visits require travel time and effort, often with limited operating hours.',
    area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
  },
  {
    icon: <ShoppingBag className="h-6 w-6" />,
    title: 'Lack of Trust',
    description: "Online shoppers often hesitate because they can't fully inspect the product before buying.",
    area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/3/13]"
  }
];

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-[#E0E0E0] dark:border-[#333333] p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] border-[#E0E0E0] dark:border-[#333333] bg-[#FFFFFF] dark:bg-[#1A1A1A] p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg p-3 text-[#000000] dark:text-[#FFFFFF]">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-[#000000] dark:text-[#FFFFFF]">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-[#666666] dark:text-[#999999]">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export function Problem() {
  return (
    <section className="py-24 bg-[#FFFFFF] dark:bg-[#000000] transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#000000] dark:text-[#FFFFFF] mb-4">
            The Challenge
          </h2>
          <p className="text-[#666666] dark:text-[#999999] max-w-2xl mx-auto">
            Traditional e-commerce and physical retail both have significant
            limitations in today's fast-paced world.
          </p>
        </FadeIn>

        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
          {problems.map((problem, index) => (
            <GridItem
              key={index}
              area={problem.area}
              icon={problem.icon}
              title={problem.title}
              description={problem.description}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
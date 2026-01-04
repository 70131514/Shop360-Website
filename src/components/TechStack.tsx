import React, { useEffect, useState } from 'react';
import { FadeIn } from './ui/FadeIn';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from './ui/carousel';
import { 
  Smartphone, 
  Lock, 
  Database, 
  HardDrive, 
  Box, 
  Code, 
  Package, 
  GitBranch, 
  Github 
} from 'lucide-react';

interface TechItem {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const techs: TechItem[] = [
  { name: 'React Native', Icon: Smartphone },
  { name: 'Firebase Auth', Icon: Lock },
  { name: 'Cloud Firestore', Icon: Database },
  { name: 'Cloud Storage', Icon: HardDrive },
  { name: 'AR Integration', Icon: Box },
  { name: 'TypeScript', Icon: Code },
  { name: 'ViroReact', Icon: Package },
  { name: 'Git', Icon: GitBranch },
  { name: 'GitHub', Icon: Github },
];

export function TechStack() {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    let intervalId: NodeJS.Timeout | null = null;

    // Wait for carousel to be ready
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        try {
          const snapList = api.scrollSnapList();
          const currentSnap = api.selectedScrollSnap();
          
          if (snapList.length === 0) {
            return;
          }

          if (currentSnap + 1 >= snapList.length) {
            api.scrollTo(0);
          } else {
            api.scrollNext();
          }
        } catch (error) {
          console.error('Carousel error:', error);
          if (intervalId) {
            clearInterval(intervalId);
          }
        }
      }, 1000);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [api]);

  // Duplicate items for infinite scroll effect
  const duplicatedTechs = [...techs, ...techs, ...techs];

  return (
    <section className="py-20 lg:py-40 bg-[#FFFFFF] dark:bg-[#000000] transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <FadeIn className="text-center mb-10">
          <h2 className="text-xl md:text-3xl lg:text-5xl tracking-tighter font-regular text-[#000000] dark:text-[#FFFFFF] mb-4">
            Built With Modern Technologies
          </h2>
        </FadeIn>
        <div className="w-full overflow-hidden">
          <Carousel setApi={setApi} className="w-full" opts={{ align: "start", loop: false }}>
            <CarouselContent className="-ml-2 md:-ml-4">
              {duplicatedTechs.map((tech, index) => (
                <CarouselItem className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6" key={`${tech.name}-${index}`}>
                  <div className="flex flex-col items-center justify-center rounded-md aspect-square bg-[#F5F5F5] dark:bg-[#1A1A1A]/50 border border-[#E0E0E0] dark:border-[#333333] p-6 hover:border-[#666666] dark:hover:border-[#666666] hover:bg-[#E0E0E0] dark:hover:bg-[#1A1A1A] transition-colors">
                    <tech.Icon className="w-8 h-8 md:w-10 md:h-10 text-[#666666] dark:text-[#CCCCCC] mb-3" />
                    <span className="text-xs md:text-sm text-[#666666] dark:text-[#CCCCCC] text-center font-medium">
                      {tech.name}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
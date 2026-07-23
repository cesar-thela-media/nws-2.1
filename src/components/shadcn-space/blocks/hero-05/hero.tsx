"use client";

import { motion, useInView } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

const RotatingBadge = () => {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <div className="absolute inset-0">
        <svg viewBox="0 0 100 100" className="w-full h-full ">
          <g
            className="origin-center animate-spin"
            style={{
              animationDuration: `12s`,
              animationDirection: "normal",
            }}
          >
            <path
              id="textPath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text className="text-[8px] uppercase font-normal fill-muted-foreground tracking-widest">
              <textPath xlinkHref="#textPath" startOffset="0%">
                JOIN CRYPTO TRENDS • EXPLORE • JOIN CRYPTO TRENDS • EXPLORE •
              </textPath>
            </text>
          </g>
        </svg>
      </div>
      <div className="relative flex items-center justify-center">
        <div className="absolute w-12 h-12 bg-teal-400/20 blur-xl rounded-full" />
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-teal-400 relative z-10"
        >
          <path
            d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

const HeroSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section className="bg-background pt-8 sm:pt-16" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6">
          {/* Left Side */}
          <div className="flex flex-col gap-6 sm:gap-8">
            <div className="flex flex-col gap-4">
              <div className="pt-10">
                <Badge className="h-7 px-3 py-1 text-sm font-normal bg-teal-400/10 text-teal-400">
                  Future of crypto trading
                </Badge>
              </div>
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium text-foreground"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 1 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.01,
                    },
                  },
                }}
              >
                {"Fast and Secure Cryptocurrency Exchange"
                  .split("")
                  .map((char, index) => (
                    <motion.span
                      key={index}
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { duration: 0.2 } },
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
              </motion.h1>
              <p className="text-base font-normal text-muted-foreground max-w-md">
                Trade cryptocurrencies with ease, security, and advanced
                features on our cutting-edge platform.
              </p>
            </div>
            <div>
              <Button className="group bg-teal-400 hover:bg-teal-400/90 px-6 py-3.5 h-12 rounded-lg w-fit gap-2 text-white cursor-pointer">
                Explore more <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute -top-7 sm:top-0 left-0 sm:left-5 z-20 scale-75 sm:scale-100">
                <RotatingBadge />
              </div>
              <img
                src="https://images.shadcnspace.com/assets/backgrounds/hero-crypto.webp"
                alt="crypto-img"
                width={564}
                height={582}
              />
              <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-background to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

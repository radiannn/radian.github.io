import Link from "next/link";
import { AnimationContainer, Icons } from "@/components";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

const Footer = () => {
  return (
    <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 md:pb-0 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">
      <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"></div>

      <div className="mt-8  pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
        <AnimationContainer delay={0.6}>
          <p className="text-sm text-muted-foreground mt-8 md:mt-0">
            &copy; {new Date().getFullYear()} Radian | All rights reserved.
          </p>
        </AnimationContainer>
      </div>

      <div className="h-[20rem] lg:h-[20rem] hidden md:flex items-center justify-center">
        <TextHoverEffect text="RADIAN" />
      </div>


    </footer>
  );
};

export default Footer;

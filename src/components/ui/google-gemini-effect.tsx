"use client";
import { cn } from "@/utils";
import { motion, MotionValue, useScroll } from "framer-motion";
import React from "react";

const transition = {
  duration: 0,
  ease: "linear",
};

export const GoogleGeminiEffect = ({
  pathLengths,
  title,
  className,
}: {
  pathLengths: MotionValue[];
  title?: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div className={cn("sticky top-20", className)}>
      <svg
        width="1440"
        height="890"
        viewBox="0 0 1440 890"
        xmlns="http://www.w3.org/2000/svg"
        className=" absolute -top-20  md:-top-20 w-full"
      >
        
        <motion.path
          d="M0 514C147.5 514.333 294.5 513.735 380.5 513.735C405.976 514.94 422.849 515.228 436.37 515.123C477.503 514.803 518.631 506.605 559.508 511.197C564.04 511.706 569.162 512.524 575 513.735C588 516.433 616 521.702 627.5 519.402C647.5 515.402 659 499.235 680.5 499.235C700.5 499.235 725 529.235 742 528.735C757.654 528.735 768.77 510.583 791.793 500.59C798.991 497.465 807.16 496.777 814.423 499.745C832.335 507.064 850.418 524.648 866 524.235C882.791 524.235 902.316 509.786 921.814 505.392C926.856 504.255 932.097 504.674 937.176 505.631C966.993 511.248 970.679 514.346 989.5 514.735C1006.3 515.083 1036.5 513.235 1055.5 513.235C1114.5 513.235 1090.5 513.235 1124 513.235C1177.5 513.235 1178.99 514.402 1241 514.402C1317.5 514.402 1274.5 512.568 1440 513.235"
          stroke="#B1C5FF"
          strokeWidth="2"
          fill="none"
          initial={{
            pathLength: 0,
          }}
          style={{
            pathLength: pathLengths[2],
          }}
          transition={transition}
        />
        
        {/* Gaussian blur for the background paths */}

        <path
          d="M0 514C147.5 514.333 294.5 513.735 380.5 513.735C405.976 514.94 422.849 515.228 436.37 515.123C477.503 514.803 518.631 506.605 559.508 511.197C564.04 511.706 569.162 512.524 575 513.735C588 516.433 616 521.702 627.5 519.402C647.5 515.402 659 499.235 680.5 499.235C700.5 499.235 725 529.235 742 528.735C757.654 528.735 768.77 510.583 791.793 500.59C798.991 497.465 807.16 496.777 814.423 499.745C832.335 507.064 850.418 524.648 866 524.235C882.791 524.235 902.316 509.786 921.814 505.392C926.856 504.255 932.097 504.674 937.176 505.631C966.993 511.248 970.679 514.346 989.5 514.735C1006.3 515.083 1036.5 513.235 1055.5 513.235C1114.5 513.235 1090.5 513.235 1124 513.235C1177.5 513.235 1178.99 514.402 1241 514.402C1317.5 514.402 1274.5 512.568 1440 513.235"
          stroke="#B1C5FF"
          strokeWidth="2"
          fill="none"
          pathLength={1}
          filter="url(#blurMe)"
        />
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
      </svg>
      <div className="flex flex-col w-full items-center lg:items-center justify-center py-8">
      <p className="text-center lg:text-center text-3xl md:text-5xl !leading-[0.5] font-medium font-heading text-foreground mt-4">
        {title || `Why choose Radian?`}
      </p>
      </div>
    </div>
  );
};

"use client";
import { AnimationContainer, MaxWidthWrapper } from "@/components";
import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import MagicCard from "@/components/ui/magic-card";
import { PROCESS } from "@/utils/constants/misc";
import { Contact } from "lucide-react";
import Contactus from "./contactus/page";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-2 mb-0 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-white-bold md:text-7xl">
        Why choose Radian?
      </motion.h1>
    </LampContainer>
  );
}


const HomePage = async () => {
  return (
    <div className="overflow-x-hidden scrollbar-hide size-full">
    
    <MaxWidthWrapper>
    <BackgroundBeamsWithCollision>
      <h2 className="text-8xl relative z-20 md:text-8xl lg:text-7xl font-bold text-center text-black  font-sans tracking-tight">
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">RADIAN</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">RADIAN</span>
          </div>
        </div>
      </h2>
      <AnimationContainer className="flex flex-col items-center justify-center w-full text-center">
            <p className="mb-3 text-lg tracking-tight text-muted-foreground md:text-xl text-balance">
            Accurate Diagnostics, Enhanced Workflow.
            <br className="hidden md:block" />
              <span className="hidden md:block">
              Revolutionizing Radiology with Unmatched Accuracy.
              </span>
            </p>
          </AnimationContainer>
    </BackgroundBeamsWithCollision>
    </MaxWidthWrapper>

      {/* About Section */}
      <MaxWidthWrapper className="pt-1">
        <AnimationContainer delay={0.1}>
            <div className="flex flex-col w-full items-center lg:items-center justify-center py-8"> 
                <h2 className="text-center bg-transparent lg:text-center text-3xl md:text-5xl !leading-[1.1] font-medium font-heading text-foreground mt-6">
                  Bring the best of  your Radiological scans
                </h2>
                <p className="mt-4 text-center bg-transparent lg:text-center text-lg text-muted-foreground max-w-lg">
                  Radian is a cutting-edge radiology platform that helps you generate accurate reports across X-Rays, MRIs, CT, Ultrasound, and PET scans.
                </p>
            </div>
        </AnimationContainer>
      <LampDemo/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full py-8 gap-4 md:gap-8">
            {PROCESS.map((process, id) => (
                <AnimationContainer delay={0.2 * id} key={id}>
                    <MagicCard className="group md:py-8">
                        <div className="flex flex-col items-start justify-center w-full">
                            <process.icon strokeWidth={1.5} className="w-10 h-10 text-foreground" />
                            <div className="flex flex-col relative items-start">
                                <span className="absolute -top-6 right-0 border-2 border-border text-foreground font-medium text-2xl rounded-full w-12 h-12 flex items-center justify-center pt-0.5">
                                    {id + 1}
                                </span>
                                <h3 className="text-base mt-6 font-medium text-foreground">
                                    {process.title}
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    {process.description}
                                </p>
                            </div>
                        </div>
                    </MagicCard>
                </AnimationContainer>
            ))}
        </div>
            </MaxWidthWrapper>

      {/* CTA Section */}
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center w-full text-center bg-gradient-to-t from-background">
          <Contactus />
        </div>
      </MaxWidthWrapper>
      

    </div>
  );
};

export default HomePage;

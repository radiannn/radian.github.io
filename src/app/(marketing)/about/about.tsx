import { AnimationContainer } from "@/components";
import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <AnimationContainer delay={0.1} className="w-full">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
          About Radian
        </h1>
        <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
          Radian is an AI-driven radiology platform built to enhance diagnostic workflows. 
          <br />
          With multi-modality support for X-Rays, MRIs, CT, Ultrasound, and PET scans, Radian achieves a remarkable 98% accuracy.
          <br />
          It integrates seamlessly with your systems, delivering faster reports and improving patient care.
        </p>
      </AnimationContainer>
    </div>
  );
};

export default About;

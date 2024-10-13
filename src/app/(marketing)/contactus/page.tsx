import AnimationContainer from "@/components/global/animation-container";
import React from 'react'

const Contactus = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <AnimationContainer delay={0.1}>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                    Contact Us
                </h1>
                <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                    Contact us for pricing and other information.
                    Email us- <a href="mailto:naman@radianimaging.com"> contact@radianimaging.com </a>
                    or
                    Call us- 9XXXXXXXXX9
                </p>
            </AnimationContainer>
        </div>
    )
};

export default Contactus

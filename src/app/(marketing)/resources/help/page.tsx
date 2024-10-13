import { AnimationContainer } from "@/components";
import React from 'react'

const HelpPage = () => {
    return (
        <div className="flex flex-col items-center justify-center py-20">
            <AnimationContainer delay={0.1} className="w-full">
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-semibold font-heading text-center mt-6 !leading-tight">
                    Help
                </h1>
                <p className="text-base md:text-lg mt-6 text-center text-muted-foreground">
                    Need help? We got you.
                    <br />
                    Email us at <a href="mailto:naman@radianimaging.com"> contact@radianimaging.com </a>.
                    <br />
                    We will get back to you as soon as possible.
                    <br />
                </p>
            </AnimationContainer>
        </div>
    )
};

export default HelpPage

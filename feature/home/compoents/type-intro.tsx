"use client"

import * as React from 'react';
import { TypeAnimation } from 'react-type-animation';

export const TypeIntro: React.FC = () => {
    return (
        <>
            <TypeAnimation
                className='text-4xl font-bold'
                sequence={[
                    500,
                    "一名全栈工程师",
                    1000,
                    "A Full stack Web. Use AI, Go, Python, React, Docker, Kubernetes, and more to build my dream.",
                    1000,
                ]}  
                speed={10}
                repeat={Infinity}
            />
        </>
    )
}
               
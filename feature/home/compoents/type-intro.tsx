"use client"

import React from 'react';

import { TypeAnimation } from 'react-type-animation';

export const TypeIntro: React.FC = () => {
    return (
        <div>
            <TypeAnimation
                className='text-4xl font-bold'
                sequence={[
                    500,
                    "一名前端开发工程师 。",
                    1000,
                    "A Web <Developer /> .",
                    1000,
                ]}  
                speed={10}
                repeat={Infinity}
            />
        </div>
    )
}
            <TypeAnimation
                sentences={[
                    'Welcome to the Next.js Starter',
                    'Get started with Next.js',
                    'Next.js with Tailwind CSS',
                    'Next.js with TypeScript',
                    'Next.js with ESLint',
                    'Next.js with Prettier',
                    'Next.js with Husky',
                    'Next.js with Lint Staged',
                    'Next.js with Jest',
                    'Next.js with React Testing Library',
                    'Next.js with Cypress',
                    'Next.js with Storybook',
                    'Next.js with Absolute Imports',
                    'Next.js with Relative Imports',
                    'Next.js with Custom Webpack Config',
                    'Next.js with Custom Babel Config',
                    'Next.js with Custom ESLint Config',
                    'Next.js with Custom Prettier Config',
                    'Next.js with Custom Jest Config',
                    'Next.js with Custom React Testing Library Config',
                    'Next.js with Custom Cypress Config',
                    'Next.js with Custom Storybook Config',
                    'Next.js with Custom Tailwind CSS Config',
                    'Next.js with Custom PostCSS Config',
                    'Next.js with Custom ESLint Ignore Config',
                    'Next.js with Custom Jest Ignore Config',
                    'Next.js with Custom Cypress Ignore Config',
                    'Next.js with Custom Storybook Ignore Config',
                    'Next.js with Custom Tailwind CSS Ignore Config',
                    'Next.js with Custom PostCSS Ignore Config',
                    'Next.js with Custom Webpack Ignore Config',
                    'Next.js with Custom Babel Ignore Config',
                    'Next.js with Custom Webpack Plugins',
                    'Next.js with Custom Webpack Loaders',
                    'Next.js with Custom Webpack Dev Server',
                    'Next.js with Custom Webpack Dev Middleware',
                    'Next.js with Custom Webpack Hot Middleware',
                    'Next.js with Custom Webpack Production Build',
                    'Next.js with Custom Webpack Production Server',
                    'Next.js with Custom Webpack Production Optimization',
                    'Next.js with Custom Webpack Production Performance',
                    'Next.js with Custom Webpack Production Output',
                    'Next.js with Custom Webpack Production Plugins',
                    'Next.js with Custom Webpack Production Loaders',
                    'Next.js with Custom Webpack Production Dev Server',
                    'Next.js with Custom Webpack Production Dev Middleware',
                    'Next.js with Custom Web
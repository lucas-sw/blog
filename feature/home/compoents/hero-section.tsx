import Link from "next/link"

import { Button, buttonVariants } from "@/components/ui/button"

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
}from '@/components/ui/tooltip'

import { NICK_NAME } from "@/constants/info"
import { PATHS } from "@/constants/path"
import {cn} from '@/lib/utils'

import { TypeIntro } from "./type-intro"

export const HeroSection = () => {
    let delay = 0
    const getDelay =()=>{delay += 200}
    return (
        <div className="flex min-h-full  max-w-screen-md flex-col justify-center gap-5 px-6 md:px-10 2xl:max-w-7xl">
            <p
                className="animate-fade-up text-2xl tracking-widest animate-ease-in-out md:text-5xl"
                style={{
                    animationDelay: `${getDelay()}ms`
                }}
            >
                你好,我是
            </p>
            <strong
                className={cn(
                    `text-5xl md:text-8xl tracking-widest font-black  bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500`,
                    "animate-fade-up animate-ease-in-out",
                )}
                style={{
                    WebkitTextFillColor: "transparent",
                    animationDelay: `${getDelay()}ms`,
                }}
            >
                {NICK_NAME}
            </strong>
            <div
                className={cn("animate-fade-up animate-ease-in-out")}
                style={{
                animationDelay: `${getDelay()}ms`,
                }}
            >
                <TypeIntro />
            </div>
            <p
                className={cn(
                "text-2xl md:text-5xl tracking-widest",
                "animate-fade-up animate-ease-in-out",
                )}
                style={{
                animationDelay: `${getDelay()}ms`,
                }}
            >
                喜欢
                <span className={`font-semibold text-[#00d8ff]`}>Go,Python</span>、
                <span className={`font-semibold text-[#007acc]`}>React</span>
                <span className="ml-4">\realize/ ~</span>
            </p>
            <p
                className={cn(
                "text-base md:text-2xl text-muted-foreground tracking-widest",
                "animate-fade-up animate-ease-in-out",
                )}
                style={{
                animationDelay: `${getDelay()}ms`,
                }}
            >
                丰富我的前端知识,用于实现我的梦想
            </p>
            <div
                className={cn("flex space-x-4", "animate-fade-up animate-ease-in-out")}
                style={{
                animationDelay: `${getDelay()}ms`,
                }}
            >
                <Link
                    href={PATHS.SITE_BLOG}
                    className={cn(buttonVariants({ variant: "outline" }))}
                >
                我的博客
                </Link>
                <Link
                href={PATHS.SITE_ABOUT}
                className={cn(buttonVariants({ variant: "outline" }))}
                >
                关于我
                </Link>
            </div>
        
        </div>
    )
}
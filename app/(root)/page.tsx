import { IntroScrollMouse } from "@/components/intro-scroll-mouse";
import { HeroSection } from "@/feature/home";


export const revaliate = 60

export default function Page() {
    return (
        <div className="relative grid h-[calc(100vh-64px)] place-content-center">
            <HeroSection/>
            
        </div>
    )
}

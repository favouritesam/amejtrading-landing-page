import {WhyAmejTrading} from "@/components/containers/why-amej-trading";
import {OurAchievements} from "@/components/containers/our-achievements";
import {CallToAction} from "@/components/containers/call-to-action";
import {Footer} from "@/components/containers/footer";
import {Navbar} from "@/components/containers/navbar";
import {HeroSection} from "@/components/containers/hero-section";
import {WhatWeAccomplished} from "@/components/containers/what-we-accomplished";


export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center">
            <Navbar/>
            <HeroSection/>
            <WhyAmejTrading/>
            <OurAchievements/>
            <WhatWeAccomplished />
            <CallToAction/>
            <Footer/>
        </main>
    )
}


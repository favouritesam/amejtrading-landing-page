import {OurAchievements} from "@/components/containers/our-achievements";
import {Footer} from "@/components/containers/footer";
import {Navbar} from "@/components/containers/navbar";
import {HeroSection} from "@/components/containers/hero-section";
import {WhatWeAccomplished} from "@/components/containers/what-we-accomplished";
import CallToAction from "@/components/containers/call-to-action";
import FeaturesSection from "@/components/containers/features-section";


export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center w-full overflow-x-hidden">
            <Navbar/>
            <HeroSection/>
            <FeaturesSection/>
            <OurAchievements/>
            <WhatWeAccomplished />
            <CallToAction/>
            <Footer/>
        </main>
    )
}


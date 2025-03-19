import {WhyAmejTrading} from "@/components/containers/why-amej-trading";
import {OurAchievements} from "@/components/containers/our-achievements";
import {CallToAction} from "@/components/containers/call-to-action";
import {Footer} from "@/components/containers/footer";


export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center">
        {/* Hero section would go here */}
        <WhyAmejTrading />
        <OurAchievements />
        <CallToAction />
        <Footer />
      </main>
  )
}


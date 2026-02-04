import { Container } from "@/components/ui/container/container";
import { Hero } from "@/components/hero/hero";
import { DivideX } from "@/components/agentix-ui/divide";
import { HeroImage } from "@/components/hero/hero-image";
import { Hero3DWebGL as Hero3D } from "@/components/hero/hero-webgl"
import { LogoCloud } from "@/components/logos-cloud"
import { Footer } from "@/components/footer";
import { Security } from "@/components/security";
import { FAQs } from "@/components/faqs";

export default function Home() {
    return (
        <>
            <DivideX />
            <Hero3D />
            <DivideX />
            <LogoCloud />
            <DivideX />
            <Security />
            <DivideX />
            <FAQs />
            <DivideX />
            <Footer />
            {/* <Hero /> */}
            {/* <HeroImage /> */}
        </>
    )
}


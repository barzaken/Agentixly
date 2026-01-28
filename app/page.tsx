import { Container } from "@/components/ui/container/container";
import { Hero } from "@/components/hero/hero";
import { DivideX } from "@/components/divide";
import { HeroImage } from "@/components/hero/hero-image";
import { Hero3DWebGL as Hero3D } from "@/components/hero/hero-webgl"

export default function Home() {
    return (
        <>
            <DivideX />
            <Hero3D />
            {/* <Hero /> */}
            <DivideX />
            {/* <HeroImage /> */}
            {/* <DivideX /> */}
        </>
    )
}


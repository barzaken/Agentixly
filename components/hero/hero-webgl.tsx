"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { useAspect, useTexture } from "@react-three/drei"
import { useMemo, useRef, useState, useEffect } from "react"
import * as THREE from "three"
import { Container } from "@/components/ui/container/container"
import { Badge } from "@/components/badge"
import { useIsMobile } from "@/hooks/use-is-mobile"
import { cn } from "@/lib/utils"
import { IconCard } from "@/components/ui/cards/icon-card"
import { Button } from "../ui/container/button"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog"
import { IconModal } from "@/components/ui/icon-modal"
import { toast } from "sonner"
import Link from "next/link"
import { LiquidImage } from "liquid-image"
const TEXTUREMAP = { src: "https://i.postimg.cc/XYwvXN8D/img-4.png" }
const DEPTHMAP = { src: "https://i.postimg.cc/2SHKQh2q/raw-4.webp" }

const WIDTH = 300
const HEIGHT = 300
const Scene = ({ isMobile }: { isMobile: boolean }) => {
    const [rawMap, depthMap] = useTexture([TEXTUREMAP.src, DEPTHMAP.src])
    const meshRef = useRef<THREE.Mesh>(null)

    const material = useMemo(() => {
        const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `

        const fragmentShader = `
      uniform sampler2D uTexture;
      uniform sampler2D uDepthMap;
      uniform vec2 uPointer;
      uniform float uProgress;
      uniform float uTime;
      varying vec2 vUv;

      // Simple noise function
      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      void main() {
        vec2 uv = vUv;
        
        // Depth-based displacement
        float depth = texture2D(uDepthMap, uv).r;
        vec2 displacement = depth * uPointer * 0.01;
        vec2 distortedUv = uv + displacement;
        
        // Base texture
        vec4 baseColor = texture2D(uTexture, distortedUv);
        
        // Create scanning effect
        float aspect = ${WIDTH}.0 / ${HEIGHT}.0;
        vec2 tUv = vec2(uv.x * aspect, uv.y);
        vec2 tiling = vec2(120.0);
        vec2 tiledUv = mod(tUv * tiling, 2.0) - 1.0;
        
        float brightness = noise(tUv * tiling * 0.5);
        float dist = length(tiledUv);
        float dot = smoothstep(0.5, 0.49, dist) * brightness;
        
        // Flow effect based on progress
        float flow = 1.0 - smoothstep(0.0, 0.02, abs(depth - uProgress));
        
        // Red scanning overlay
        vec3 mask = vec3(dot * flow * 10.0, 0.0, 0.0);
        
        // Combine effects
        vec3 final = baseColor.rgb + mask;
        
        // Use alpha from texture to maintain transparency
        gl_FragColor = vec4(final, baseColor.a);
      }
    `

        return new THREE.ShaderMaterial({
            uniforms: {
                uTexture: { value: rawMap },
                uDepthMap: { value: depthMap },
                uPointer: { value: new THREE.Vector2(0, 0) },
                uProgress: { value: 0 },
                uTime: { value: 0 },
            },
            vertexShader,
            fragmentShader,
            transparent: true,
            depthWrite: false,
        })
    }, [rawMap, depthMap])

    const [w, h] = useAspect(WIDTH, HEIGHT)

    useFrame(({ clock, pointer }) => {
        if (material.uniforms) {
            material.uniforms.uProgress.value = Math.sin(clock.getElapsedTime() * 0.5) * 0.5 + 0.5
            material.uniforms.uPointer.value = pointer
            material.uniforms.uTime.value = clock.getElapsedTime()
        }
    })

    // const scaleFactor = 0.3
    const scaleFactor = isMobile ? 0.5 : 0.3
    return (
        <mesh ref={meshRef} scale={[w * scaleFactor, h * scaleFactor, 1]} material={material}>
            <planeGeometry />
        </mesh>
    )
}

export const Hero3DWebGL = () => {
    const isMobile = useIsMobile()
    const titleWords = "Agentix".split(" ")
    const subtitle = "The UI kit for AI apps."
    const [visibleWords, setVisibleWords] = useState(0)
    const [subtitleVisible, setSubtitleVisible] = useState(false)
    const [delays, setDelays] = useState<number[]>([])
    const [subtitleDelay, setSubtitleDelay] = useState(0)
    const [dialogOpen, setDialogOpen] = useState(false)
    const [email, setEmail] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        setDelays(titleWords.map(() => Math.random() * 0.07))
        setSubtitleDelay(Math.random() * 0.1)
    }, [titleWords.length])

    useEffect(() => {
        if (visibleWords < titleWords.length) {
            const timeout = setTimeout(() => setVisibleWords(visibleWords + 1), 600)
            return () => clearTimeout(timeout)
        } else {
            const timeout = setTimeout(() => setSubtitleVisible(true), 800)
            return () => clearTimeout(timeout)
        }
    }, [visibleWords, titleWords.length])

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        const trimmedEmail = email.trim()

        if (!trimmedEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
            toast.error("Please enter a valid email address.")
            return
        }

        try {
            setIsSubmitting(true)
            const response = await fetch("/api/waitlist", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: trimmedEmail }),
            })

            const data = await response.json().catch(() => null)

            if (!response.ok || !data?.success) {
                toast.error(
                    data?.error ??
                    "Something went wrong while joining the waitlist. Please try again."
                )
                return
            }

            toast.success("You're on the waitlist!")
            setDialogOpen(false)
            setEmail("")
        } catch {
            toast.error(
                "Unable to reach the server. Please check your connection and try again."
            )
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <Container className="border-divide flex flex-col items-center h-svh pt-20 pb-10 border-x  relative px-4 md:px-0">
            <div className="relative flex flex-col items-center justify-start min-h-full w-full">
                <div className="relative z-30 items-center w-full  flex justify-center flex-col z-0  px-2">
                    <IconCard className="w-full max-w-3xl mx-auto text-center bg-background/90 flex flex-col items-center justify-center">
                        <div className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-semibold font-orbitron">
                            <div className="flex justify-center space-x-2 lg:space-x-6 overflow-hidden text-black dark:text-white">
                                {titleWords.map((word, index) => (
                                    <div
                                        key={index}
                                        className={index < visibleWords ? "fade-in mb-2" : ""}
                                        style={{
                                            animationDelay: `${index * 0.13 + (delays[index] || 0)}s`,
                                            opacity: index < visibleWords ? undefined : 0,
                                        }}
                                    >
                                        {word}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="text-xs md:text-xl xl:text-2xl 2xl:text-3xl mt-2 md:mt-3 overflow-hidden text-black dark:text-white font-bold max-w-4xl mx-auto text-center px-4">
                            <div
                                className={subtitleVisible ? "fade-in-subtitle" : ""}
                                style={{
                                    animationDelay: `${titleWords.length * 0.13 + 0.2 + subtitleDelay}s`,
                                    opacity: subtitleVisible ? undefined : 0,
                                }}
                            >
                                {subtitle}
                            </div>
                        </div>
                    </IconCard>
                </div>
                <div className="px-2 flex-1 max-h-[70%]  w-full relative ">
                    <div className="border border-divide border-t-0 border-[0.5px] max-w-3xl mx-auto flex items-center justify-center">

                        <LiquidImage src={"/agentix-logo.png"} />
                    </div>
                    {/* <Canvas
                        flat
                        gl={{
                            antialias: true,
                            alpha: true,
                            powerPreference: "high-performance",
                        }}
                        camera={{ position: [0, 0, 1] }}
                        style={{ background: "transparent" }}
                        className="z-10 relative  border-[0.5px] border-t-0 max-w-3xl mx-auto border-divide"
                    >
                        <Scene isMobile={isMobile} />
                        
                    </Canvas> */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex gap-2 z-10 text-xs sm:text-sm">
                        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                            <DialogTrigger asChild>
                                <Button className="whitespace-nowrap px-3 py-1.5 sm:px-4 sm:py-2">
                                    Join Waiting List
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="px-4">
                                <IconModal>
                                    <DialogHeader className="mb-4">
                                        <DialogTitle className="text-base md:text-lg">
                                            Join the Agentix waitlist
                                        </DialogTitle>
                                        <DialogDescription>
                                            Be the first to know when new agentic workflow features
                                            and components drop.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="space-y-1">
                                            <label
                                                htmlFor="waitlist-email"
                                                className="text-xs font-medium text-neutral-700 dark:text-neutral-300"
                                            >
                                                Work email
                                            </label>
                                            <input
                                                id="waitlist-email"
                                                type="email"
                                                autoComplete="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="you@company.com"
                                                className="block w-full rounded-md border border-divide bg-background px-3 py-2 text-sm outline-none ring-0 transition focus:border-brand focus:ring-1 focus:ring-brand dark:bg-neutral-950 text-[16px]"
                                                disabled={isSubmitting}
                                                required
                                            />
                                        </div>
                                        <Button
                                            type="submit"
                                            className="w-full text-sm md:text-base"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? "Joining..." : "Join waitlist"}
                                        </Button>
                                    </form>
                                </IconModal>
                            </DialogContent>
                        </Dialog>
                        <Button
                            as={Link}
                            href="/components"
                            variant="secondary"
                            className="whitespace-nowrap bg-stripes px-3 py-1.5 sm:px-4 sm:py-2"
                        >
                            View Components
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Hero3DWebGL

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
import MeshGradient from "../mesh-gradient"
import { PixelatedCanvas } from "../pixelated-canvas"
const TEXTUREMAP = { src: "https://i.postimg.cc/XYwvXN8D/img-4.png" }
const DEPTHMAP = { src: "https://i.postimg.cc/2SHKQh2q/raw-4.webp" }

const WIDTH = 300
const HEIGHT = 300
const Icon = ({ className }: { className: string }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            width={24}
            height={24}
            strokeWidth="1"
            stroke="currentColor"
            className={cn("text-foreground size-6 absolute", className)}
        >
            <title>Icon</title>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
        </svg>
    );
};

const Icons = () => (
    <>
        <Icon className="-top-3 -left-3" />
        <Icon className="-top-3 -right-3" />
        <Icon className="-bottom-3 -left-3" />
        <Icon className="-bottom-3 -right-3" />
    </>
);
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
    const titleWords = "Agentixly".split(" ")
    const subtitle = "The UI kit for AI apps."
    const [visibleWords, setVisibleWords] = useState(0)
    const [subtitleVisible, setSubtitleVisible] = useState(false)
    const [delays, setDelays] = useState<number[]>([])
    const [subtitleDelay, setSubtitleDelay] = useState(0)

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

    return (
        <Container className="border-divide flex flex-col items-center justify-center border-x px-4 pt-10 pb-10 md:pt-12 md:pb-20 h-svh relative">
            <div className="relative flex flex-col items-center justify-center h-full w-full">
                <div className="relative pt-4 items-center w-full  flex justify-center flex-col z-0 mt-6 px-2">
                    <IconCard className="uppercase w-full max-w-3xl mx-auto text-center bg-background/90 flex flex-col items-center justify-center">
                        {/* <Badge text="Waiting List is open" /> */}
                        {/* <div className="mt-6 md:mt-8"> */}
                        <div className="text-3xl md:text-5xl xl:text-6xl 2xl:text-7xl font-extrabold font-orbitron">
                            <div className="flex justify-center space-x-2 lg:space-x-6 overflow-hidden text-black dark:text-white">
                                {titleWords.map((word, index) => (
                                    <div
                                        key={index}
                                        className={index < visibleWords ? "fade-in" : ""}
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
                        {/* </div> */}
                    </IconCard>
                </div>
                <div className="px-2 h-full border-divide w-full relative">
                    <Canvas
                        flat
                        gl={{
                            antialias: true,
                            alpha: true,
                            powerPreference: "high-performance",
                        }}
                        camera={{ position: [0, 0, 1] }}
                        style={{ background: "transparent" }}
                        className="z-10 relative border-x border-b max-w-3xl mx-auto border-divide"
                    >
                        <Scene isMobile={isMobile} />
                        
                    </Canvas>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 flex gap-2 z-10 text-xs sm:text-sm">
                        <Button className="whitespace-nowrap px-3 py-1.5 sm:px-4 sm:py-2">
                            Join Waiting List
                        </Button>
                        <Button
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

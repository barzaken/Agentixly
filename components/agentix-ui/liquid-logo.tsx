"use client"
import { LiquidImage } from 'liquid-image'
export const LiquidLogo = () => {
    return (
        <div className="flex items-center justify-center">
            <LiquidImage width={128} height={128} src={'/symbol-lvlzai.png'} invert/>
        </div>
    )
}
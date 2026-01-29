"use client"

import * as React from "react"
import { motion, AnimatePresence } from "motion/react"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DivideX } from "@/components/agentix-ui/divide"
import { X, Pause, CheckCircle2, AlertTriangle, Play } from "lucide-react"

type SubscriptionStatus = "active" | "paused" | "cancelled"

const statusIcons = {
    active: { Icon: CheckCircle2, color: "text-green-500" },
    paused: { Icon: AlertTriangle, color: "text-yellow-500" },
    cancelled: { Icon: X, color: "text-red-500" },
} as const

const iconAnimation = {
    initial: { scale: 0, opacity: 0, rotate: -180 },
    animate: { scale: 1, opacity: 1, rotate: 0 },
    exit: { scale: 0, opacity: 0, rotate: 180 },
    transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] as const },
}

const SubscriptionCard = () => {
    const [isExpanded, setIsExpanded] = React.useState(false)
    const [status, setStatus] = React.useState<SubscriptionStatus>("active")

    return (
        <Card
            className="border-none cursor-pointer overflow-hidden transition-all duration-200 hover:shadow-md"
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <CardHeader className="p-4">
                <div className="flex gap-2 w-full align-center">
                    <div className="img relative">
                        <div className="size-8 rounded-md border border-divide bg-muted/50 flex items-center justify-center overflow-hidden">
                            <img src="https://cdn.brandfetch.io/ideQwN5lBE/w/400/h/400/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1741362553726" alt="Netflix" className="size-full object-cover" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 bg-background rounded-full p-0.5">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={status}
                                    {...iconAnimation}
                                >
                                    {(() => {
                                        const { Icon, color } = statusIcons[status]
                                        return <Icon className={`size-3.5 ${color}`} />
                                    })()}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                    <div className="details flex flex-1">
                        <div className="flex-1">
                            <CardTitle>Netflix</CardTitle>
                            <CardDescription>Premium Plan</CardDescription>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-sm font-bold">22.99$ <span className="text-xs font-normal">/ month </span> </p>
                            <span className="text-xs">Dec 20</span>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{ overflow: "hidden" }}
                    >
                        <DivideX />
                        <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                                <motion.div
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.1, duration: 0.2 }}
                                    className="flex-1"
                                >
                                    <CardDescription className="text-sm text-muted-foreground ">
                                        Using Daily for 12 days
                                    </CardDescription>
                                </motion.div>
                                <motion.div
                                    initial={{ x: 20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.15, duration: 0.2 }}
                                    className="flex gap-2"
                                >
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            status === "active" ? setStatus("paused") : setStatus("active")
                                        }}
                                    >
                                        {status === "active" ? <Pause className="size-4" /> : <Play className="size-4" />}
                                        {status === "active" ? "Pause" : "Resume"}
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setStatus("cancelled")
                                        }}
                                    >
                                        <X className="size-4" />
                                        Cancel
                                    </Button>
                                </motion.div>
                            </div>
                        </CardContent>
                    </motion.div>
                )}
            </AnimatePresence>
        </Card>
    )
}

export default SubscriptionCard
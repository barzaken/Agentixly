"use client"

import * as React from "react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export interface AICardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
  children?: React.ReactNode
  footer?: React.ReactNode
  hover?: boolean
  glow?: boolean
  delay?: number
}

const AICard = React.forwardRef<HTMLDivElement, AICardProps>(
  (
    {
      className,
      title,
      description,
      children,
      footer,
      hover = true,
      glow = true,
      delay = 0,
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        whileHover={hover ? { y: -4 } : undefined}
        className="relative"
      >
        <Card
          ref={ref}
          className={cn(
            "relative overflow-hidden transition-all duration-300",
            glow && "hover:shadow-lg hover:shadow-primary/20",
            className
          )}
          {...props}
        >
          {glow && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 hover:opacity-100 transition-opacity duration-500"
              initial={false}
            />
          )}
          
          {title && (
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>
          )}
          
          {children && <CardContent>{children}</CardContent>}
          
          {footer && <CardFooter>{footer}</CardFooter>}
        </Card>
      </motion.div>
    )
  }
)
AICard.displayName = "AICard"

export { AICard }


'use client'

import {motion} from 'framer-motion'
import {useEffect, useState} from 'react'
import {cn} from '@/lib'
import {
    IconBrandTiktok,
    IconBrandYoutube,
    IconBrandInstagram,
    IconBrandFacebook,
    IconBrandX,
} from '@tabler/icons-react'

const Skeleton = () => {
    return (
        <div className="p-8 overflow-hidden h-full relative flex items-center justify-center z-20">
            <div className="flex flex-row flex-shrink-0 justify-center items-center gap-2">
                <Container className="h-8 w-8 circle-1">
                    <IconBrandTiktok className="h-4 w-4 text-foreground"/>
                </Container>
                <Container className="h-12 w-12 circle-2">
                    <IconBrandYoutube className="h-6 w-6 text-foreground"/>
                </Container>
                <Container className="circle-3">
                    <IconBrandInstagram className="size-8 text-foreground"/>
                </Container>
                <Container className="h-12 w-12 circle-4">
                    <IconBrandFacebook className="h-6 w-6 text-foreground"/>
                </Container>
                <Container className="h-8 w-8 circle-5">
                    <IconBrandX className="h-4 w-4 text-foreground"/>
                </Container>
            </div>

            <div
                className="h-40 w-px absolute top-4 m-auto z-40 bg-gradient-to-b from-transparent via-primary to-transparent animate-move">
                <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
                    <Sparkles/>
                </div>
            </div>
        </div>
    )
}

const Sparkles = () => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const randomMove = () => Math.random() * 2 - 1
    const randomOpacity = () => Math.random()
    const random = () => Math.random()

    return (
        <div className="absolute inset-0">
            {[...Array(12)].map((_, i) => (
                <motion.span
                    key={`star-${i}`}
                    animate={{
                        top: `calc(${random() * 100}% + ${randomMove()}px)`,
                        left: `calc(${random() * 100}% + ${randomMove()}px)`,
                        opacity: randomOpacity(),
                        scale: [1, 1.2, 0],
                    }}
                    transition={{
                        duration: random() * 2 + 4,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    style={{
                        position: 'absolute',
                        top: `${random() * 100}%`,
                        left: `${random() * 100}%`,
                        width: `2px`,
                        height: `2px`,
                        borderRadius: '50%',
                        zIndex: 1,
                    }}
                    className="inline-block bg-primary"
                ></motion.span>
            ))}
        </div>
    )
}

const Container = ({
                       className,
                       children,
                   }: {
    className?: string
    children: React.ReactNode
}) => {
    return (
        <div
            className={cn(
                `h-16 w-16 rounded-lg flex items-center justify-center
        bg-transparent
        border border-primary/30
        hover:bg-primary/10
        transition-all duration-300 cursor-pointer`,
                className
            )}
        >
            {children}
        </div>
    )
}

export function AnimatedCircles() {
    return (
        <div
            className="relative rounded-lg border border-primary/20 bg-primary/5 p-[16px] backdrop-blur-lg w-full h-full shadow-[inset_0_2px_25px_rgba(19,137,253,0.03)] hover:shadow-[inset_0_2px_35px_rgba(19,137,253,0.06)] transition-shadow duration-300">
            <div className="rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-secondary/5 p-[16px] flex items-center justify-center w-full h-full shadow-[inset_0_2px_25px_rgba(255,255,255,0.03)] hover:shadow-[inset_0_2px_35px_rgba(255,255,255,0.06)] transition-shadow duration-300">
                <Skeleton/>
            </div>
        </div>
    )
}

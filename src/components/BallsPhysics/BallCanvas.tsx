import './BallCanvas.css'

import {useEffect, useRef, useState} from 'react'

import {CANVAS_HEIGHT, CANVAS_WIDTH, LOGO_FILES} from './config.ts'
import {setupInteraction} from './interaction'
import {createBalls, updatePhysics} from './physics'
import {render} from './renderer'
import type {Ball} from './types'

export function BallCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const ballsRef = useRef<Ball[]>([])
    const animationFrameRef = useRef<number>(0)
    const lastTimeRef = useRef<number>(0)
    const imagesRef = useRef<(HTMLImageElement | null)[]>([])
    const [imagesLoaded, setImagesLoaded] = useState(false)

    // Preload images
    useEffect(() => {
        const images: (HTMLImageElement | null)[] = new Array(LOGO_FILES.length).fill(null)
        let loaded = 0
        const total = LOGO_FILES.length

        LOGO_FILES.forEach((filename, index) => {
            const img = new Image()
            img.src = `logo/${filename}`
            img.onload = () => {
                images[index] = img
                loaded++
                if (loaded === total) {
                    imagesRef.current = images
                    ballsRef.current = createBalls(images)
                    setImagesLoaded(true)
                }
            }
            img.onerror = () => {
                // Оставляем null — шар с этим логотипом не будет создан
                images[index] = null
                loaded++
                if (loaded === total) {
                    imagesRef.current = images
                    ballsRef.current = createBalls(images)
                    setImagesLoaded(true)
                }
            }
        })
    }, [])

    // Animation loop
    useEffect(() => {
        if (!imagesLoaded) return

        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        if (!ctx) return

        canvas.width = CANVAS_WIDTH
        canvas.height = CANVAS_HEIGHT

        const animate = (timestamp: number) => {
            if (!lastTimeRef.current) lastTimeRef.current = timestamp
            const dtSeconds = (timestamp - lastTimeRef.current) / 1000
            lastTimeRef.current = timestamp

            const clampedDt = Math.min(dtSeconds, 0.05)

            updatePhysics(ballsRef.current, clampedDt)
            render(ctx, ballsRef.current)

            animationFrameRef.current = requestAnimationFrame(animate)
        }

        animationFrameRef.current = requestAnimationFrame(animate)

        return () => {
            cancelAnimationFrame(animationFrameRef.current)
        }
    }, [imagesLoaded])

    // Interaction
    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        return setupInteraction(canvas, ballsRef)
    }, [imagesLoaded])

    if (!imagesLoaded) {
        return <div style={{padding: '40px'}}></div>
    }

    return (
        <canvas
            ref={canvasRef}
            className={'ball-canvas'}
            data-aos="zoom-out"
        />
    )
}
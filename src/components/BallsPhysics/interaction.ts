import {MAX_VELOCITY} from './config.ts'
import type {Ball} from './types'

function getCanvasCoords(canvas: HTMLCanvasElement, e: PointerEvent) {
    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY
    }
}

function findBallAt(balls: Ball[], x: number, y: number): Ball | null {
    for (let i = balls.length - 1; i >= 0; i--) {
        const b = balls[i]
        const dx = x - b.x
        const dy = y - b.y
        if (dx * dx + dy * dy <= b.radius * b.radius) {
            return b
        }
    }
    return null
}

function clampVelocity(vx: number, vy: number): { x: number; y: number } {
    const speed = Math.sqrt(vx * vx + vy * vy)
    if (speed > MAX_VELOCITY && speed > 0) {
        const scale = MAX_VELOCITY / speed
        return {x: vx * scale, y: vy * scale}
    }
    return {x: vx, y: vy}
}

export function setupInteraction(
    canvas: HTMLCanvasElement,
    ballsRef: React.RefObject<Ball[]>
): () => void {
    let draggingBall: Ball | null = null
    let lastMouseX = 0
    let lastMouseY = 0
    let lastMoveTime = 0
    let lastVx = 0
    let lastVy = 0
    let offsetX = 0
    let offsetY = 0

    const onPointerDown = (e: PointerEvent) => {
        const {x, y} = getCanvasCoords(canvas, e)
        const balls = ballsRef.current
        draggingBall = findBallAt(balls, x, y)
        if (draggingBall) {
            draggingBall.isDragging = true
            draggingBall.vx = 0
            draggingBall.vy = 0
            // Смещение от центра шара до точки клика
            offsetX = draggingBall.x - x
            offsetY = draggingBall.y - y
            // Синхронизируем dragTarget с текущей позицией шара
            draggingBall.dragTargetX = draggingBall.x
            draggingBall.dragTargetY = draggingBall.y
            canvas.setPointerCapture(e.pointerId)
            canvas.style.cursor = 'grabbing'
        }
        lastMouseX = x
        lastMouseY = y
        lastMoveTime = performance.now()
        lastVx = 0
        lastVy = 0
    }

    const onPointerMove = (e: PointerEvent) => {
        if (!draggingBall) return
        const {x, y} = getCanvasCoords(canvas, e)
        // Учитываем смещение от центра шара до точки клика
        draggingBall.dragTargetX = x + offsetX
        draggingBall.dragTargetY = y + offsetY

        const now = performance.now()
        const dt = now - lastMoveTime
        if (dt > 0) {
            lastVx = (x - lastMouseX) / dt * 1000
            lastVy = (y - lastMouseY) / dt * 1000
        }
        lastMouseX = x
        lastMouseY = y
        lastMoveTime = now
    }

    const onPointerUp = (e: PointerEvent) => {
        if (!draggingBall) return
        const clamped = clampVelocity(lastVx, lastVy)
        draggingBall.vx = clamped.x
        draggingBall.vy = clamped.y
        draggingBall.isDragging = false
        draggingBall.dragTargetX = draggingBall.x
        draggingBall.dragTargetY = draggingBall.y
        draggingBall = null
        canvas.style.cursor = 'grab'
        canvas.releasePointerCapture(e.pointerId)
    }

    canvas.addEventListener('pointerdown', onPointerDown)
    canvas.addEventListener('pointermove', onPointerMove)
    canvas.addEventListener('pointerup', onPointerUp)
    canvas.addEventListener('pointerleave', onPointerUp)

    return () => {
        canvas.removeEventListener('pointerdown', onPointerDown)
        canvas.removeEventListener('pointermove', onPointerMove)
        canvas.removeEventListener('pointerup', onPointerUp)
        canvas.removeEventListener('pointerleave', onPointerUp)
    }
}
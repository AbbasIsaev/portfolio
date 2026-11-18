import {
    BALL_MASS,
    BALL_RADIUS,
    CANVAS_HEIGHT,
    CANVAS_WIDTH,
    FRICTION,
    GRID_COLS,
    GRID_ROWS,
    LOGO_FILES,
    SUB_STEPS,
    WALL_DAMPING
} from './config.ts'
import type {Ball} from './types'

export function createBalls(images: (HTMLImageElement | null)[]): Ball[] {
    const balls: Ball[] = []
    const padding = BALL_RADIUS + 5
    const spacingX = (CANVAS_WIDTH - 2 * padding) / (GRID_COLS - 1)
    const spacingY = (CANVAS_HEIGHT - 2 * padding) / (GRID_ROWS - 1)

    // Собираем только загруженные логотипы
    const validImages: { image: HTMLImageElement; filename: string }[] = []
    for (let i = 0; i < images.length; i++) {
        const img = images[i]
        if (img !== null) {
            validImages.push({image: img, filename: LOGO_FILES[i]})
        }
    }

    // Заполняем сетку подряд, без дырок
    let ballIndex = 0
    for (let row = 0; row < GRID_ROWS && ballIndex < validImages.length; row++) {
        for (let col = 0; col < GRID_COLS && ballIndex < validImages.length; col++) {
            // Случайная начальная скорость
            const angle = Math.random() * Math.PI * 2
            const speed = 50 + Math.random() * 100

            balls.push({
                id: ballIndex,
                x: padding + col * spacingX,
                y: padding + row * spacingY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                radius: BALL_RADIUS,
                mass: BALL_MASS,
                logoUrl: validImages[ballIndex].filename,
                image: validImages[ballIndex].image,
                isDragging: false,
                dragTargetX: padding + col * spacingX,
                dragTargetY: padding + row * spacingY
            })
            ballIndex++
        }
    }

    return balls
}

function resolveCollision(a: Ball, b: Ball): void {
    const dx = b.x - a.x
    const dy = b.y - a.y
    const dist = Math.sqrt(dx * dx + dy * dy)
    const minDist = a.radius + b.radius

    if (dist < minDist && dist > 0) {
        const nx = dx / dist
        const ny = dy / dist

        const dvx = a.vx - b.vx
        const dvy = a.vy - b.vy
        const dvn = dvx * nx + dvy * ny

        if (dvn > 0) {
            const impulse = dvn

            a.vx -= impulse * nx
            a.vy -= impulse * ny
            b.vx += impulse * nx
            b.vy += impulse * ny
        }

        const overlap = minDist - dist
        const correctionX = (overlap / 2) * nx
        const correctionY = (overlap / 2) * ny
        a.x -= correctionX
        a.y -= correctionY
        b.x += correctionX
        b.y += correctionY
    }
}

function handleWallCollisions(ball: Ball): void {
    if (ball.x - ball.radius < 0) {
        ball.x = ball.radius
        ball.vx = -ball.vx * WALL_DAMPING
    }
    if (ball.x + ball.radius > CANVAS_WIDTH) {
        ball.x = CANVAS_WIDTH - ball.radius
        ball.vx = -ball.vx * WALL_DAMPING
    }
    if (ball.y - ball.radius < 0) {
        ball.y = ball.radius
        ball.vy = -ball.vy * WALL_DAMPING
    }
    if (ball.y + ball.radius > CANVAS_HEIGHT) {
        ball.y = CANVAS_HEIGHT - ball.radius
        ball.vy = -ball.vy * WALL_DAMPING
    }
}

export function updatePhysics(balls: Ball[], dt: number): void {
    const subDt = dt / SUB_STEPS

    for (let step = 0; step < SUB_STEPS; step++) {
        // Обновляем позиции перетаскиваемых шаров и вычисляем их скорость
        for (const ball of balls) {
            if (!ball.isDragging) continue
            // Вычисляем мгновенную скорость на основе перемещения к цели (замедлено в 2 раза)
            ball.vx = (ball.dragTargetX - ball.x) / subDt / 2
            ball.vy = (ball.dragTargetY - ball.y) / subDt / 2
            ball.x = ball.dragTargetX
            ball.y = ball.dragTargetY
        }

        for (const ball of balls) {
            if (ball.isDragging) continue
            ball.vx *= FRICTION
            ball.vy *= FRICTION
            ball.x += ball.vx * subDt
            ball.y += ball.vy * subDt
        }

        // Столкновения всех шаров (включая перетаскиваемый)
        for (let i = 0; i < balls.length; i++) {
            for (let j = i + 1; j < balls.length; j++) {
                resolveCollision(balls[i], balls[j])
            }
        }

        // Сбрасываем позицию перетаскиваемых шаров к цели после столкновений
        for (const ball of balls) {
            if (!ball.isDragging) continue
            ball.x = ball.dragTargetX
            ball.y = ball.dragTargetY
        }

        for (const ball of balls) {
            handleWallCollisions(ball)
        }
    }
}
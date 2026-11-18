import {CANVAS_HEIGHT, CANVAS_WIDTH} from './config.ts'
import type {Ball} from './types'

export function render(ctx: CanvasRenderingContext2D, balls: Ball[]): void {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    for (const ball of balls) {
        // Пропускаем пустые логотипы
        if (!ball.image) continue

        const img = ball.image
        const imgAspect = img.naturalWidth / img.naturalHeight
        const maxSide = ball.radius * 2

        let drawWidth: number
        let drawHeight: number

        if (imgAspect > 1) {
            // Шире чем высокий — фиксируем ширину
            drawWidth = maxSide
            drawHeight = maxSide / imgAspect
        } else {
            // Выше чем широкий — фиксируем высоту
            drawHeight = maxSide
            drawWidth = maxSide * imgAspect
        }

        const dx = ball.x - drawWidth / 2
        const dy = ball.y - drawHeight / 2

        ctx.drawImage(img, dx, dy, drawWidth, drawHeight)
    }
}
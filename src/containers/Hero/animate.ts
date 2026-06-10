type TPositions = {
    x: number
    y: number
    transition?: string
}[]

export function getPositions(count: number): TPositions {
    const cols = Math.ceil(Math.sqrt(count))
    const rows = Math.ceil(count / cols)

    const result: { x: number; y: number }[] = []

    for (let index = 0; index < count; index++) {
        const col = index % cols
        const row = Math.floor(index / cols)

        // Базовая позиция в сетке (равномерно)
        const x = ((col + 0.5) / cols) * 100 // от 0% до 100%
        const y = ((row + 0.5) / rows) * 100

        result.push({x: x, y: y})
    }

    return result
}

export function animate(selector: string) {
    const images = document.querySelectorAll<HTMLElement>(selector)
    const container = images[0]?.parentElement
    if (!container) return
    const containerRect = container.getBoundingClientRect()

    const positions = Array.from(images).map((img) => {
        const rect = img.getBoundingClientRect()
        return {
            el: img,
            x: parseFloat(img.style.left),
            y: parseFloat(img.style.top),
            width: rect.width,
            height: rect.height,
            vx: (Math.random() - 0.5) * 1.5, // уменьшили начальную скорость
            vy: (Math.random() - 0.5) * 1.5,
            fx: 0, // сила по X
            fy: 0 // сила по Y
        }
    })

    let animationId: number

    function updatePositions() {

        const containerWidth = containerRect.width
        const containerHeight = containerRect.height

        // Сбросим ускорения
        positions.forEach((p) => {
            p.fx = 0
            p.fy = 0
        })

        // Фаза 1: Расчёт сил отталкивания
        for (let i = 0; i < positions.length; i++) {
            const a = positions[i]
            for (let j = i + 1; j < positions.length; j++) {
                const b = positions[j]

                const dx = (a.x - b.x) * containerWidth / 100
                const dy = (a.y - b.y) * containerHeight / 100
                const distance = Math.sqrt(dx * dx + dy * dy)

                const minDistance = 60 // минимальное расстояние в px
                if (distance < minDistance && distance > 0) {
                    const force = 0.8 * (minDistance - distance) / minDistance
                    const angle = Math.atan2(dy, dx)

                    // Симметричное отталкивание
                    a.fx += Math.cos(angle) * force
                    a.fy += Math.sin(angle) * force
                    b.fx -= Math.cos(angle) * force
                    b.fy -= Math.sin(angle) * force
                }
            }
        }

        // Фаза 2: Обновление позиций
        positions.forEach((p) => {
            // Применяем силы
            p.vx += p.fx
            p.vy += p.fy

            // Ограничение максимальной скорости
            const maxSpeed = 2
            const speed = Math.sqrt(p.vx + p.vy)
            if (speed > maxSpeed) {
                p.vx = (p.vx / speed) * maxSpeed
                p.vy = (p.vy / speed) * maxSpeed
            }

            // Затухание
            p.vx *= 0.95
            p.vy *= 0.95

            // Обновляем позицию
            p.x += p.vx
            p.y += p.vy

            // Размеры в %
            const widthPercent = (p.width / containerWidth) * 100
            const heightPercent = (p.height / containerHeight) * 100

            // Границы контейнера
            if (p.x < 0) {
                p.x = 0
                p.vx *= -0.7 // демпфирование
            }
            if (p.x > 100 - widthPercent) {
                p.x = 100 - widthPercent
                p.vx *= -0.7
            }
            if (p.y < 0) {
                p.y = 0
                p.vy *= -0.7
            }
            if (p.y > 100 - heightPercent) {
                p.y = 100 - heightPercent
                p.vy *= -0.7
            }

            // Применяем стили
            p.el.style.left = `${p.x}%`
            p.el.style.top = `${p.y}%`
            p.el.style.transition = `left 1s ease-in-out, top 1s ease-in-out`
        })
        // Метод для оптимизированного выполнения анимаций
        animationId = requestAnimationFrame(updatePositions)
    }

    return {
        runAnimation: updatePositions,
        stopAnimation: () => {
            cancelAnimationFrame(animationId)
        }
    }
}
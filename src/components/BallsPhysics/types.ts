export interface Ball {
    id: number;
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    mass: number;
    logoUrl: string;
    image: HTMLImageElement | null;
    isDragging: boolean;
    dragTargetX: number;
    dragTargetY: number;
}
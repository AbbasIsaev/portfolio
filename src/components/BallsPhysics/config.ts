// --- Configuration ---
export const BALL_RADIUS = 50
export const BALL_MASS = 1
export const FRICTION = 0.995
export const WALL_DAMPING = 0.9
export const MAX_VELOCITY = 1500
export const SUB_STEPS = 4
export const GRID_ROWS = 5
export const GRID_COLS = 5
export const TOTAL_CELLS = GRID_ROWS * GRID_COLS
export const EMPTY_CELLS = 0
export const BALLS_COUNT = TOTAL_CELLS - EMPTY_CELLS
// --- Canvas dimensions ---
export const CANVAS_WIDTH = 900
export const CANVAS_HEIGHT = 600

// --- Logo filenames ---
export const LOGO_FILES = [
    'react.png',
    'redux-toolkit.png',
    'vite.png',
    'webpack.png',
    'type-script.png',
    'node-js.png',
    'express-js.png',
    'sequelize.png',
    'material-ui.png',
    'bootstrap.png',
    'kendo-ui.png',
    'python.png',
    'django.png',
    'django-rest-framework.png',
    'pandas.png',
    'kafka.png',
    'postgresql.png',
    'mysql.png',
    'redis.png',
    'nginx.png',
    'docker.png',
    'docker-compose.png',
    'git.png',
    'pwa.png',
    'workbox.png'
] as const
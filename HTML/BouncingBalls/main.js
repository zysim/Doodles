import { dist, getCorner, r } from './util.js'
const c = document.createElement

const canvas = Object.assign(document.querySelector('canvas'), {
  height: innerHeight,
  width: innerWidth,
})
const RADIUS = parseInt(canvas.dataset.radius, 10)
const COUNT = parseInt(canvas.dataset.ballCount, 10)
const ctx = Object.assign(canvas.getContext('2d'), {
  fillStyle: 'rgb(200, 0, 0)',
})

const genSingleCoords = () => [
  r(RADIUS, innerWidth - 2 * RADIUS),
  r(RADIUS, innerHeight - 2 * RADIUS),
]

const genCoordsSet = count => {
  const coords = []
  while (coords.length < count) {
    let dim = genSingleCoords()
    for (const t of coords) {
      if (dist(dim, t) < 2 * RADIUS + 10) {
        dim = genSingleCoords()
      }
    }
    coords.push(dim)
  }
  return coords
}

const createBalls = dims =>
  dims.map(dim => {
    const circle = new Path2D()
    circle.arc(dim[0], dim[1], RADIUS, 0, 2 * Math.PI)
    return circle
  })

let dims = genCoordsSet(COUNT)

createBalls(dims).forEach(b => {
  ctx.fill(b)
})

let t = 0
let flipX = Array(...Array(COUNT)).fill(false)
const animate = timestamp => {
  if (timestamp - t > 300) {
    dims = dims.map((d, i) => {
      ctx.clearRect(...getCorner(d, RADIUS), 2 * RADIUS, 2 * RADIUS)
      return [d[0] + (d[0] + flipX[i] ? -10 : 10), d[1] + 5]
    })
    flipX = flipX.map((f, i) => dims[i][0] + 10 > innerWidth)
    createBalls(dims).forEach(b => ctx.fill(b))
  }
  requestAnimationFrame(animate)
}

requestAnimationFrame(animate)

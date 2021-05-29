export const getPx = pxString => parseInt(pxString.replace('px', ''), 10)

export const r = (min, max) => ~~(Math.random() * (max - min) + min)

export const dist = (a, b) => {
  const x = Math.abs(a[0] - b[0])
  const y = Math.abs(a[1] - b[1])
  return ~~Math.sqrt(x ** 2 + y ** 2)
}

export const getCorner = (centre, radius) => [
  centre[0] - radius,
  centre[1] - radius,
]

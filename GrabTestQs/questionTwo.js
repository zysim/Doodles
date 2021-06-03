const input = [1, 2, 3, 4, 10, 11, 12, 13]

const getWeeks = dates =>
  dates.map((d, _, arr) => arr.filter(a => a >= d && a <= d + 6).length)

const t = weeks => {
  const points = weeks.reduce((acc, w) => {

  }, [])
}

console.log(getWeeks(input))

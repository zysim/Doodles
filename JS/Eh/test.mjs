import solution from './solution.js'

const tests = [
  () => ({
    expected: [1, 2],
    got: solution([1, 2, 6, 7, 8, 9, 10]),
  }),
  () => ({
    expected: [1, 1],
    got: solution([1, 6, 7, 8, 9, 10, 12]),
  }),
]

tests.map((t, i) => {
  const { expected, got } = t()

  if (got === expected) {
    console.log(`Test #${i} passed`)
  } else {
    console.log(`Test #${i} failed.\nExpected`, expected, '\nBut got', got)
  }
})

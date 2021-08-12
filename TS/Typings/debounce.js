export default (fn, delay = 500, ...args) => {
  let busy = true
  return () => {
    if (!busy) {
      busy = true
      setTimeout(() => {
        busy = false
      }, delay)
      return fn(...args)
    }
  }
}

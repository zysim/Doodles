export as namespace myFuncLib
export = debounce

declare function debounce<T, R>(
  fn: (t: T) => R,
  delay: number,
  arg: T,
): () => void
declare function debounce<T1, T2, R>(
  fn: (t1: T1, t2: T2) => R,
  delay: number,
  ...args: [T1, T2]
): () => void
declare function debounce<T1, T2, T3, R>(
  fn: (t1: T1, t2: T2, t3: T3) => R,
  delay: number,
  ...args: [T1, T2, T3]
): () => void

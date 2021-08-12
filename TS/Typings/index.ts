// @ts-ignore
import debounce from '../debounce.js'

const debouncedTest = debounce((a: number) => a * 2, 500, 1)
const debouncedTest2 = debounce((a: string) => a, 500, 'a')
const debouncedTest3 = debounce<string, string, string>(
  (a: string, b: string) => `${a}${b}`,
  500,
  'a',
  'b',
)
const debouncedTest4 = debounce<Object, Object, Object, Object>(
  (a: Object, b: Object, c: Object) => ({
    ...a,
    ...b,
    ...c,
  }),
  500,
  { a: 1 },
  { b: 2 },
  { c: 3 },
)

debouncedTest()
debouncedTest2()
debouncedTest3()
debouncedTest4()

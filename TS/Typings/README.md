# Typings
This project is meant to teach myself how to write a declarations file. It is also broken* but I can't be bothered to fix it.

\* I wanted to make `debounce.ts` return the results of `fn`, and not simply return `void`. But, with the way I've written its implementation, it's very awkward to return results if we're still blocking. Maybe there's a way to _make_ `fn` only return after a block, but I can't be bothered to think about it.

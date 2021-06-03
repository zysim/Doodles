const parent = document.querySelector('#test')

const traverse = node => {
  let cnt = 0
  if (node.nodeName === 'OL' || node.nodeName === 'UL') {
    cnt++
  }
  if (!node.children.length) return cnt
  let cnts = []
  for (let i = 0; i < node.children.length; i++) {
    cnts.push(traverse(node.children.item(i)))
  }
  return cnt + Math.max(...cnts)
}

console.log(traverse(parent))

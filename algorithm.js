const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const input = []

rl.on('line', line => {
  input.push(...line.split(' ').map(Number))
}).on('close', () => {
  let max = -Infinity
  let sum = 0

  for (let num of input) {
    if (num > max) max = num
    sum += num
  }

  sum -= max

  console.log(max > sum ? 'No' : 'Yes')
})

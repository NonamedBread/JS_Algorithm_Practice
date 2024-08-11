const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const input = []

rl.on('line', line => {
  input.push(...line.split(' ').map(Number))
}).on('close', () => {
  const min = Math.min(...input)
  console.log(min)
})

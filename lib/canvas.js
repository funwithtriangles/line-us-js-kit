const canvasEl = document.getElementById('canvas')
const ctx = canvasEl.getContext('2d')

const convertY = y => 1600 - y

canvasEl.width = 2000
canvasEl.height = 3200

ctx.lineWidth = 20
ctx.strokeStyle = 'hotpink'

// ctx.moveTo(0, 0)
// ctx.lineTo(300, 150)
// ctx.stroke()

ctx.beginPath()

export const canvasMoveTo = (x, y) => {
  ctx.moveTo(x, convertY(y))
}

export const canvasLineTo = (x, y) => {
  ctx.lineTo(x, convertY(y))
  ctx.stroke()
}

export const canvasDot = (x, y) => {
  ctx.moveTo(x, convertY(y))
  ctx.arc(x, convertY(y), 3, 0, 2 * Math.PI)
  ctx.stroke()
}

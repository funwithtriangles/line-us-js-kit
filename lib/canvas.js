const canvasEl = document.getElementById('canvas')
const ctx = canvasEl.getContext('2d')

const convertY = y => 1600 - y

canvasEl.width = 2000
canvasEl.height = 3200

ctx.lineWidth = 10
ctx.strokeStyle = 'hotpink'

export const canvasMoveTo = (x, y) => {
  ctx.stroke()
  ctx.moveTo(x, convertY(y))
  ctx.beginPath()
}

export const canvasLineTo = (x, y) => {
  ctx.lineTo(x, convertY(y))
}

export const canvasDot = (x, y) => {
  ctx.stroke()
  ctx.moveTo(x, convertY(y))
  ctx.arc(x, convertY(y), 3, 0, 2 * Math.PI)
  ctx.stroke()
}

export const canvasFinish = () => ctx.stroke()

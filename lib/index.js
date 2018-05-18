import io from 'socket.io-client'
import { robotMoveTo, robotLineTo, robotDot, getItems } from './commands'
import { canvasMoveTo, canvasLineTo, canvasDot, canvasFinish } from './canvas'

import 'styles/index.scss'
import 'images/chart.png'

const socket = io('http://localhost:8081')

const buttonEl = document.getElementById('go')

buttonEl.addEventListener('click', () => {
  socket.send(getItems())
  buttonEl.innerHTML = 'Sending...'

  setTimeout(() => {
    buttonEl.innerHTML = 'Line-us Go!'
  }, 8000)
})

export const moveTo = (x, y) => {
  canvasMoveTo(x, y)
  robotMoveTo(x, y)
}

export const lineTo = (x, y) => {
  canvasLineTo(x, y)
  robotLineTo(x, y)
}

export const dot = (x, y) => {
  canvasDot(x, y)
  robotDot(x, y)
}

export const finish = () =>
  canvasFinish()

// Cheap way to stop FOUC
setTimeout(() => {
  document.body.style = ''
})

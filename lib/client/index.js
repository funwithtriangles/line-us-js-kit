/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss'

// ================================
// START YOUR APP HERE
// ================================
import io from 'socket.io-client'

var socket = io('http://localhost:8081')

socket.on('connect', function () {
  socket.on('message', function (msg) {
    console.log(msg)
  })
})

var commands = [
  'G01 X900 Y300 Z0',
  'G01 X900 Y-300 Z0',
  'G01 X900 Y-300 Z1000'
]

var buttonEl = document.getElementById('go')

buttonEl.addEventListener('click', () => {
  socket.send(commands)
})

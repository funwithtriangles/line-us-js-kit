// Lots of this borrowed from
// https://github.com/pandrr/line-us

// Robot connection
const net = require('net')
const robotHost = 'line-us.local'
const robot = new net.Socket()

// Index for looping through commands
let commands = []
let cmdIndex

robot.on('data', function (data) {
  console.log('Received: ' + data)

  // last command (or connecting) was successfull, so let's send a new command
  if (data.indexOf('hello') === 0 || data.indexOf('ok ') === 0) {
    cmdIndex++
    console.log('Sending: ' + commands[cmdIndex])
    robot.write(commands[cmdIndex] + '\x00\n')
  }

  if (data.indexOf('error') === 0) {
    console.log('Error in command ' + cmdIndex)
    console.log('Disconnecting...')
    robot.destroy()
  }

  // reached end of command array
  if (cmdIndex === commands.length) {
    console.log('Finished!')
    robot.destroy()
  }
})

robot.on('close', function () {
  console.log('Connection closed')
})

// Node server
const io = require('socket.io')(8081)
io.on('connection', function (socket) {
  socket.on('message', (msg) => {
    robot.connect(1337, robotHost, function () {
      commands = msg
      cmdIndex = -1
    })
  })
  socket.on('disconnect', function () {
    console.log('Disconnected')
  })
})

# Line-us JS Kit

![Line-us Previewer](http://funwithtriangles.net/line-us-js-kit/screenshot.png)

A fun way to use your [Line-us](https://www.line-us.com/).

1. Write commands in Javascript
2. Preview the output in the browser
3. Click the button and your Line-us will draw it!

## Quick Start

1. Make sure [Node.js](https://nodejs.org/en/) is installed on your machine.
2. Ensure Line-us is on the same wifi as your machine
3. Open terminal and run the commands below.
```bash
$ git clone https://github.com/funwithtriangles/line-us-js-kit.git
$ cd line-us-js-kit
$ npm install
$ npm start
```
4. Go to [http://localhost:8080/](http://localhost:8080/) in any browser

## Programmers Guide

Edit `sketch/index.js` to create your own drawings.

Saving will automatically refresh the browser at [http://localhost:8080/](http://localhost:8080/) so you can instantly see how your drawing will look.

You have the following commands available:

```javascript
import { moveTo, lineTo, dot } from '../lib'
import drawPolygon from '../lib/utils/drawPolygon'

// Move pen and draw lines to coordinates (X, Y)
moveTo('900', '800')
lineTo('900', '200')

// Draw a single dot (only for the brave!)
dot('1500', '800')

// Call this at the end
finish()

// Fun polygon util
// center X, center Y, radius, num of vertices, rotation (in radians)
drawPolygon(1300, -500, 80, 3)
drawPolygon(1300, -500, 200, 3, Math.PI)
drawPolygon(1300, -500, 300, 5)
```

## Code Examples

### Triangle spiral

```javascript
import { finish } from '../lib'
import drawPolygon from '../lib/utils/drawPolygon'

const numPoints = 100
const PHI = 1.618
const cx = 1230
const cy = 0

let rad = 40
let x, y, delta

for (let i = 0; i < numPoints; i++) {
  rad += 5
  delta = i * PHI
  x = cx + Math.sin(i * PHI) * rad
  y = cy + Math.cos(i * PHI) * rad
  drawPolygon(x, y, i * 1.1, 3, delta)
}

finish()
```

### Waves

```Javascript
import { moveTo, lineTo, finish } from '../lib'

const PI = Math.PI
const numRows = 100
const numPoints = 100
const xStart = 700
const xRange = 1100
const yStart = -1000
const yRange = 2000
const yStep = yRange / numRows
const xStep = xRange / numPoints
const numWavesX = 3
const numWavesY = 5
const deltaStep = PI / numPoints * numWavesX
const alphaStep = PI / numRows * numWavesY
const waveAmpY = 150
const waveAmpX = 100

let delta, alpha
let x, y

for (let i = 0; i < numRows; i++) {
  for (let j = 0; j < numPoints; j++) {
    delta = deltaStep * j
    alpha = alphaStep * i
    x = xStart + (xStep * j) + (Math.sin(alpha) * waveAmpX)
    y = yStart + (i * yStep) + (Math.sin(delta) * waveAmpY)
    if (j === 0) {
      moveTo(x, y)
    } else {
      lineTo(x, y)
    }
  }
}

finish()
```

## Possible Windows issue
You may have trouble getting this to work on Windows. The connection is made using
mDNS (Bonjour), so you may need to install Bounjour Print Services if you can't get it working. Unfortunately
this doesn't seem to work for Windows 10 machines. Please let me know if you find a way to get it working!

There is more information about how the connection happens on the [Line-us programming repo](https://github.com/Line-us/Line-us-Programming#making-a-connection).

## Contributing
All contributions welcome!

- Fork a branch from `master`
- Make changes
- Make a pull request to `master`

## Acknowledgements

- Node code taken from [Simple Node Example created by pandrr](https://github.com/pandrr/line-us)

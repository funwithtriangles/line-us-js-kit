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

// Fun polygon util
// center X, center Y, radius, num of vertices, rotation (in radians)
drawPolygon(1300, -500, 80, 3)
drawPolygon(1300, -500, 200, 3, Math.PI)
drawPolygon(1300, -500, 300, 5)
```



## Contributing
All contributions welcome!

- Fork a branch from `master`
- Make changes
- Make a pull request to `master`

## Acknowledgements

- Node code taken from [Simple Node Example created by pandrr](https://github.com/Line-us/Line-us-Programming#simple-node-example)

import { moveTo, lineTo, dot } from '../lib'
import drawPolygon from '../lib/utils/drawPolygon'

// Move pen and draw lines to coordinates
moveTo('900', '800')
lineTo('900', '200')

moveTo('1200', '800')
lineTo('1200', '200')

moveTo('900', '500')
lineTo('1200', '500')

moveTo('1500', '700')
lineTo('1500', '200')

// Draw a single dot (only for the brave!)
dot('1500', '800')

// Fun polygon util
// center X, center Y, radius, num of vertices, rotation (in radians)
drawPolygon(1300, -500, 80, 3)
drawPolygon(1300, -500, 200, 3, Math.PI)
drawPolygon(1300, -500, 300, 5)

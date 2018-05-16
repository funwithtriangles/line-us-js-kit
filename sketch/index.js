import { moveTo, lineTo, dot } from '../lib'
import drawPolygon from '../lib/utils/drawPolygon'

moveTo('800', '10')
lineTo('1000', '10')
moveTo('800', '300')
lineTo('1000', '300')
dot('1000', '400')

drawPolygon()

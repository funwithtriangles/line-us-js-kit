import { moveTo, lineTo } from '../'
const TAU = Math.PI * 2

export default (cx = 1200, cy = 0, rad = 300, numPoints = 5, baseRot = 0) => {
  const arc = TAU / numPoints
  const offset = baseRot
  let x, y

  for (let i = 0; i < numPoints + 1; i++) {
    x = cx + Math.sin(arc * i + offset) * rad
    y = cy + Math.cos(arc * i + offset) * rad

    if (i === 0) {
      moveTo(x, y)
    }
    lineTo(x, y)
  }
}

export const items = []

let prev = [0, 0]

export const robotMoveTo = (x, y) => {
  items.push(`G01 X${prev[0]} Y${prev[1]} Z1000`)
  items.push(`G01 X${x} Y${y} Z1000`)

  prev = [x, y]
}

export const robotLineTo = (x, y) => {
  items.push(`G01 X${prev[0]} Y${prev[1]} Z0`)
  items.push(`G01 X${x} Y${y} Z0`)

  prev = [x, y]
}

export const robotDot = (x, y) => {
  items.push(`G01 X${prev[0]} Y${prev[1]} Z1000`)
  items.push(`G01 X${x} Y${y} Z1000`)
  items.push(`G01 X${x} Y${y} Z0`)
  items.push(`G01 X${x} Y${y} Z1000`)

  prev = [x, y]
}

export const getItems = () => items

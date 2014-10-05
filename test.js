function sin (t, x) { return Math.sin(2 * Math.PI * t * x) }

var notes = [
  370,
  370,
  400,
  380,
  370,
  400
]

var speed = 0.5

module.exports = function (t) {
    return sin(t, 300) + sin(t,309) + sin(t,notes[Math.floor(t*speed) % notes.length])
}
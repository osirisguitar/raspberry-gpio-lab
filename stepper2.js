var swp = require("stepper-wiringpi")
var motor = swp.setup(4096, 41,42,43,44)
motor.step(500)

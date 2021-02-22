var gpiop = require('rpi-gpio').promise;

const changeState = (state) => {
  gpiop.setup(32, gpiop.DIR_OUT)
    .then(() => {
      return gpiop.write(32, state)
    })
    .then(() => {
        console.log('set', state)
        setTimeout(() => { changeState(!state) }, 2000)
    })
    .catch((err) => {
        console.log('Error: ', err.toString())
    })
}

setTimeout(() => { changeState(false) }, 2000)


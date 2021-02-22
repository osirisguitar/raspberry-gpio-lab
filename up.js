var gpiop = require('rpi-gpio').promise;
 
gpiop.setup(32, gpiop.DIR_OUT)
    .then(() => {
        return gpiop.write(32, true)
    })
    .then(() => {
        console.log('done!')
    })
    .catch((err) => {
        console.log('Error: ', err.toString())
    })

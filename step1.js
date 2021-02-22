var gpiop = require('rpi-gpio').promise;

const sleep = async (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const setupGpio = async () => { 
  try {
    console.log('setup')
    //await gpiop.setup(2, gpiop.DIR_OUT) // 5V
    await gpiop.setup(29, gpiop.DIR_OUT)
    await gpiop.setup(31, gpiop.DIR_OUT)
    await gpiop.setup(33, gpiop.DIR_OUT)
    await gpiop.setup(35, gpiop.DIR_OUT)
    //await gpiop.write(2, true) // Turn on 5V
    return
  } catch (error) {
    console.error('Error setting up gpio pins', error)
    throw (error)
  }
}

const setPins = async (pinValues) => {
  await gpiop.write(29, pinValues[0])
  await gpiop.write(31, pinValues[1])
  await gpiop.write(33, pinValues[2])
  await gpiop.write(35, pinValues[3])
}

const moveMotor = async () => {
  try {
    await setPins([1, 0, 0, 1])
    await sleep(1)    
    await setPins([0, 1, 0, 1])
    await sleep(1)    
    await setPins([0, 1, 1, 0])
    await sleep(1)    
    await setPins([1, 0, 0, 1])
    await sleep(1)    
    await setPins([1, 0, 1, 0])
    await sleep(1)    
  } catch (error) {
    console.error('Error writing to gpio pins', error)
    throw (error)
  }
}


/*setStep(1,0,0,1)
time.sleep(delay)
setStep(0,1,0,1)
time.sleep(delay)
setStep(0,1,1,0)
time.sleep(delay)
setStep(1,0,1,0)
time.sleep(delay)*/ 

const doIt = async () => {
  await setupGpio()
  console.log('setup complete')
  for (i = 0; i < 1000; i++) {
    await moveMotor()
  }
  console.log('output complete')
  process.exit(0)
}

doIt()

/*
    .then(() => {
        return gpiop.write(32, true)
    })
    .then(() => {
        console.log('done!')
    })
    .catch((err) => {
        console.log('Error: ', err.toString())
    })*/

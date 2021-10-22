import { asyncScheduler } from 'rxjs'

// const sayHi = () => console.log('hello world')
// const sayHiToSomeone = (name: string | undefined) => console.log(`hello ${name}`)

/** setTimeout */
// asyncScheduler.schedule(sayHi, 1000)
// asyncScheduler.schedule(sayHiToSomeone, 5000, 'jorge')

/** setInterval */
asyncScheduler.schedule(function (state) {
    console.log(`state: ${state}`)

    this.schedule(state as number + 1, 1000)
}, 1000, 0)

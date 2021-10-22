import { fromEvent, mapTo } from 'rxjs'

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup')

keyUp$
.pipe(
    mapTo('Boton apretado!')
)
.subscribe(console.log)
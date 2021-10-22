import { fromEvent, pluck } from 'rxjs'

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup')

keyUp$
.pipe(
    // pluck('key')
    pluck('target', 'baseURI')
)
.subscribe(console.log)
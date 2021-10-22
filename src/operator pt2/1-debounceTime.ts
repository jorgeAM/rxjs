import { debounceTime, fromEvent } from 'rxjs'

const clicks = fromEvent(document, 'click')
const result = clicks.pipe(debounceTime(1000))

result.subscribe(x => console.log(x))
import { fromEvent, interval, sample } from 'rxjs'

const interval$ = interval(500)

const click$ = fromEvent(document, 'click')

const result = interval$.pipe(
    sample(click$)
)

result.subscribe(console.log)
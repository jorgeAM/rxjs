import { fromEvent, interval, Observer, takeUntil } from 'rxjs'

const obs$ = interval(1000)

const observer: Observer<number> = {
    next: (value: number) => console.log(value),
    error: (err: Error) => console.error('ERROR: ', err),
    complete: () => console.info('completed!')
}

const click$ = fromEvent(document, 'click')

obs$
.pipe(
    takeUntil(click$)
)
.subscribe(observer)

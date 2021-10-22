import { from, Observer, reduce } from 'rxjs'

const obs$ = from([1, 2, 3, 4, 5])

const observer: Observer<number> = {
    next: (value: number) => console.log(value),
    error: (err: Error) => console.error('ERROR: ', err),
    complete: () => console.info('completed!')
}

obs$
.pipe(
    reduce((acc: number, value: number) => acc + value, 0)
)
.subscribe(observer)


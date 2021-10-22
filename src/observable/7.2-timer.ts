import { timer } from 'rxjs'

const observer = {
    next: (value: number) => console.log(value),
    complete: () => console.log('completed!')
}

// const obs$ = timer(10000)
const obs$ = timer(1000, 3000)

obs$.subscribe(observer)
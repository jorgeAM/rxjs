import { of } from 'rxjs'

of(1, 2 ,3 ,4)
.subscribe({
    next: (value: number) => console.log(value),
    error: (err: any) => console.log(err),
    complete: () => console.log('completed!')
})
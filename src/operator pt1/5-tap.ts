import {range, tap } from 'rxjs'

const obs$ = range(1, 100)

obs$
.pipe(
    tap(value => console.log(`inside tap :${value}`))
)
.subscribe(console.log)
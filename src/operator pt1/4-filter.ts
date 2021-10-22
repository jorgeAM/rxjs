import { filter, range } from 'rxjs'

const obs$ = range(1, 100)

obs$
.pipe(
    filter(value => value % 2 === 0)
)
.subscribe(console.log)
import { interval } from 'rxjs'

const obs$ = interval(5000)

obs$.subscribe(console.log)
import { fromEvent, map, range } from 'rxjs'

// const obs$ = range(1, 10)

// obs$
// .pipe(
//     map<number, number>((value: number) => value * 10)
//     // map((value, index) => {
//     //     console.log(`index: ${index}`)

//     //     return value * 10
//     // })
// )
// .subscribe(console.log)

export interface Item {
    key: string
    code: number
}

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup')

keyUp$
.pipe(
    map<KeyboardEvent, Item>((event: KeyboardEvent) => ({
        key: event.key, code: event.keyCode
    }))
)
.subscribe(console.log)
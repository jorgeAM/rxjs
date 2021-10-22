import { fromEvent, map, sampleTime } from 'rxjs'

const clicks = fromEvent<PointerEvent>(document, 'click')
const result = clicks.pipe(
    sampleTime(2000),
    map(({ x, y }) => ({ x, y}))
)

result.subscribe(console.log)
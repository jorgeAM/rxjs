import { fromEvent } from 'rxjs'

fromEvent<MouseEvent>(document, 'click').subscribe({
    next: (ev: MouseEvent) => console.log('click', {x: ev.x, y: ev.y})
})
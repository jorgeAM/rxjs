import {fromEvent, map } from 'rxjs'

const progressBar = document.getElementById('progress-bar')!
const obs$ = fromEvent<Event>(document, 'scroll')

function calculatePercentage(ev: any): number {
    const {
        clientHeight,
        scrollTop,
        scrollHeight
    } = ev.target.documentElement

    return (scrollTop/ (scrollHeight - clientHeight)) * 100
}

obs$
.pipe(
    map(calculatePercentage)
)
.subscribe((percentage: number) => {
    progressBar.style.width = `${percentage}%`
})


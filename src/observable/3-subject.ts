import { Observable, Observer, Subject } from 'rxjs'

const observer: Observer<any> = {
    next: value => console.log(value),
    error: err => console.error('ERROR: ', err),
    complete: () => console.info('completed!')
}

const obs$ = new Observable<number>(subscriber => {
    const interval = setInterval(() => {
        subscriber.next(Math.floor(Math.random() * 10) + 1)
    }, 1000)

    return () => {
        clearInterval(interval)
        console.log('intervalo destruido')
    } 
});

const subject$ = new Subject<number>()

obs$.subscribe(subject$)

const sub1 = subject$.subscribe(observer)
const sub2 = subject$.subscribe(observer)

setTimeout(() => {
    subject$.next(100)
    subject$.complete()

}, 5000)
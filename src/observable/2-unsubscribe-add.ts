import { Observable, Observer } from 'rxjs'

const observer: Observer<number> = {
    next: value => console.log(value),
    error: err => console.error('ERROR: ', err),
    complete: () => console.info('completed!')
}

const obs$ = new Observable<number>(subscriber => {
    let counter = 0

    const interval = setInterval(() => {
        counter++
        subscriber.next(counter)
        console.log('inside observable: ', counter)
    }, 1000)

    setTimeout(() => subscriber.complete(), 2500)

    return () => {
        clearInterval(interval)
        console.log('intervalo destruido')
    } 
});

const sub1 = obs$.subscribe(observer)
const sub2 = obs$.subscribe(observer)
const sub3 = obs$.subscribe(observer)

sub1.add(sub2)
sub1.add(sub3)

setTimeout(() => {
    sub1.unsubscribe()
    sub2.unsubscribe()
    sub3.unsubscribe()
    console.log('complete unsubscribe timeout')
}, 3000)
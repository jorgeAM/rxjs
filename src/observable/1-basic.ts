import { Observable, Observer } from 'rxjs'

const observer: Observer<any> = {
    next: value => console.log(value),
    error: err => console.error('ERROR: ', err),
    complete: () => console.info('completed!')
}

const obs$ = new Observable(subscriber => {
    subscriber.next(1)
    subscriber.next(2)

    // subscriber.error(new Error('something got wrong'))

    subscriber.next(3)
    subscriber.next(4)

    subscriber.complete()
});

obs$.subscribe(observer)
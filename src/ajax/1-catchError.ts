import { catchError, of, pluck } from 'rxjs'
import { ajax, AjaxError } from 'rxjs/ajax'

const apiURL = 'https://api.github.com/users?per_page=5'

ajax({ url: apiURL })
.pipe(
    pluck('response'),
    catchError((err: AjaxError) => { 
        console.warn('error', err)
        return of([])
    }),
)
.subscribe(users => console.log('usuarios: ', users))

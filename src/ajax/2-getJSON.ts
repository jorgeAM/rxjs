import { ajax } from 'rxjs/ajax'

const apiURL = 'https://api.github.com/users?per_page=5'

const obs$ = ajax.getJSON(apiURL)

obs$.subscribe(console.log)


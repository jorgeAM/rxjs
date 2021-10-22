import { debounceTime, distinctUntilChanged, fromEvent, map, mergeAll, pluck } from "rxjs"
import { ajax } from "rxjs/ajax"

const body = document.querySelector('body')!!
const textInput = document.createElement('input')
const orderList= document.createElement('ol')

body.append(textInput, orderList)


const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup')

input$
.pipe(
    debounceTime(500),
    pluck('target', 'value'),
    distinctUntilChanged(),
    map(value =>  ajax.getJSON(`https://api.github.com/search/users?q=${value}`)),
    mergeAll(),
    pluck('items'),
)
.subscribe(resp => console.log(resp))
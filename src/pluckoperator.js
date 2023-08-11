//import  { fromEvent} from 'rxjs'
import { of, from, fromEvent } from 'rxjs';
import { map, pluck } from 'rxjs/operators'

const observable = fromEvent(
    document, 'keydown'
).pipe(pluck('code'))

const subscription = observable.subscribe({
    next(value)
    {
        console.log(value)
    },
    complete()
    {
        console.log('complete')
    }
})

console.log("Hello")
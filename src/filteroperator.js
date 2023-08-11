//import  { fromEvent} from 'rxjs'
import { of, from, fromEvent, filter } from 'rxjs';
import { map, pluck } from 'rxjs/operators'

//same functionality using map operator
// const observable = fromEvent(
//     document, 'keydown'
// ).pipe(pluck('code'),
// map(event => { return event.code === 'Space' ? event.code : null})
// )

//with filter operator its better and more suitable for this job
const observable = fromEvent(
    document, 'keydown'
).pipe(pluck('code'),
filter(code=>code === 'Space')
)
//filter the space key press

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
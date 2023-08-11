//import  { fromEvent} from 'rxjs'
import { of, fromEvent, interval } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators'
import {ajax} from 'rxjs/ajax'

const button = document.querySelector('#btn')
const observable = fromEvent(button, 'click')
.pipe(
    switchMap(() => {
        return interval(1000).pipe(
            take(5),
            tap({
                complete()
                {
                    console.log('inner observable completed')
                }
            })
        )
    })
)

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
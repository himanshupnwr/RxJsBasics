//import  { fromEvent} from 'rxjs'
import { of, from } from 'rxjs';

//const observable = of(1,2,3,4,5)
const observable = from([1,2,3,4,5])
// const observable = fromEvent(
//     document, 'click'
// )

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
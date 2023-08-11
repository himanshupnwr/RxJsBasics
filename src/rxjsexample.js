import { Observable } from "rxjs";

const observable = new Observable((subscriber)=>
{
    subscriber.next("Hello")
    subscriber.next("Test")
    subscriber.error("Error!")
    //to stop the observables pushing the data to observer use complete()
    //subscriber.complete("next")
})

const subscription = observable.subscribe({
    next: (value) => {
        console.log(value)
    },

    complete: () => {
        console.log('complete called')
    },
    error: (err) => {
        console.error(err)
    }
})

//to unsubscribe when the subscription job is complete
subscription.unsubscribe();
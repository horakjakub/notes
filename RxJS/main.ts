
let button = document.getElementById('button'),
    debuggButton = document.getElementById('debuggButton');

// pytania:
// - jak nasuchujemy i tworzymy observablese?
// - co możemy z nimi zrobić - przećwiczyć operatory i ciekawe przypadki użycia
// - jak je rozwiązujemy i niszczymy

// let firstObservable = Rx.Observable.fromEvent(button, 'click')
//   .map(() => state => Object.assign({}, state, {count: state.count + 1}));

// .scan(count => count + 1, 0)
// .subscribe(count => console.log(`Clicked ${count} times`));

//firstObservable.subscribe(value => console.log(value))

//let input = Rx.Observable.fromEvent(document.querySelector('input'), 'input');

// Filter out target values less than 3 characters long
// input.filter(event => event.target.value.length > 2)
//   .subscribe(event => console.log(event.target.value)); // "hel"
//
// input.delay(200)
//     .subscribe(event => console.log(event.target.value))


debuggButton.addEventListener('click', debugFunc)




function debugFunc() {
    debugger;
}

/// ----------------- // PONIŻEJ POKAZANIE JAK DZIELONY JEST STAN //  --------------------------- //

var increaseButton = document.querySelector('#increase');

var increase = Rx.Observable.fromEvent(increaseButton, 'click')
 // Again we map to a function the will increase the count
 .map(() => state => Object.assign({}, state, {count: state.count + 1}));

var decreaseButton = document.querySelector('#decrease');
var decrease = Rx.Observable.fromEvent(decreaseButton, 'click')
 // We also map to a function that will decrease the count
 .map(() => state => Object.assign({}, state, {count: state.count - 1}));

var inputElement = document.querySelector('#input');
var input = Rx.Observable.fromEvent(inputElement, 'keypress')
 // Let us also map the keypress events to produce an inputValue state
 .map(event => state => Object.assign({}, state, {inputValue: event.target.value}));

// We merge the three state change producing observables
var state = Rx.Observable.merge(
 increase,
 decrease,
 input
).scan((state, changeFn) => changeFn(state), {
 count: 0,
 inputValue: ''
});

// We subscribe to state changes and update the DOM
state.subscribe((state) => {
 document.querySelector('#count').innerHTML = state.count;
 document.querySelector('#hello').innerHTML = 'Hello ' + state.inputValue;
});

// To optimize our renderng we can check what state
// has actually changed
var prevState = {};
prevState.count = null;
prevState.inputValue = null;

state.subscribe((state) => {
  if (state.count !== prevState.count) {
    document.querySelector('#count').innerHTML = state.count;
  }
  if (state.inputValue !== prevState.inputValue) {
    document.querySelector('#hello').innerHTML = 'Hello ' + state.inputValue;
  }
  prevState = state;
});

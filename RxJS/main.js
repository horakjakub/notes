var button = document.getElementById('button'), debuggButton = document.getElementById('debuggButton');
debuggButton.addEventListener('click', debugFunc);
function debugFunc() {
    debugger;
}
var increaseButton = document.querySelector('#increase');
var increase = Rx.Observable.fromEvent(increaseButton, 'click')
    .map(function () { return function (state) { return Object.assign({}, state, { count: state.count + 1 }); }; });
var decreaseButton = document.querySelector('#decrease');
var decrease = Rx.Observable.fromEvent(decreaseButton, 'click')
    .map(function () { return function (state) { return Object.assign({}, state, { count: state.count - 1 }); }; });
var inputElement = document.querySelector('#input');
var input = Rx.Observable.fromEvent(inputElement, 'keypress')
    .map(function (event) { return function (state) { return Object.assign({}, state, { inputValue: event.target.value }); }; });
var state = Rx.Observable.merge(increase, decrease, input).scan(function (state, changeFn) { return changeFn(state); }, {
    count: 0,
    inputValue: ''
});
state.subscribe(function (state) {
    document.querySelector('#count').innerHTML = state.count;
    document.querySelector('#hello').innerHTML = 'Hello ' + state.inputValue;
});
var prevState = {};
prevState.count = null;
prevState.inputValue = null;
state.subscribe(function (state) {
    if (state.count !== prevState.count) {
        document.querySelector('#count').innerHTML = state.count;
    }
    if (state.inputValue !== prevState.inputValue) {
        document.querySelector('#hello').innerHTML = 'Hello ' + state.inputValue;
    }
    prevState = state;
});
//# sourceMappingURL=main.js.map
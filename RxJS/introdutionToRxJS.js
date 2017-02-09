var refreshButton = document.querySelector('.refresh');
var refreshClickStream = Rx.Observable.fromEvent(refreshButton, 'click');
var closeFirstButton = document.querySelector('.close1');
var close1ClickStream = Rx.Observable.fromEvent(closeFirstButton, 'click');
var startupRequestStream = Rx.Observable.just('https://api.github.com/users');
var requestOnRefreshStream = refreshClickStream
    .map(function () {
    var randomOffset = Math.floor(Math.random() * 500);
    return 'https://api.github.com/users?since=' + randomOffset;
});
var requestStream = Rx.Observable.merge(requestOnRefreshStream, startupRequestStream);
var responseStream = requestStream
    .flatMap(function (requestUrl) {
    return Rx.Observable.fromPromise(jQuery.getJSON(requestUrl));
});
var suggestion1Stream = close1ClickStream.startWith('startup click')
    .combineLatest(responseStream, function (click, listUsers) {
    return listUsers[Math.floor(Math.random() * listUsers.length)];
})
    .merge(refreshClickStream.map(function () { return null; }))
    .startWith(null);
;
suggestion1Stream.subscribe(function (suggestion) {
    if (suggestion === null) {
    }
    else {
    }
});
//# sourceMappingURL=introdutionToRxJS.js.map
// https://gist.github.com/staltz/868e7e9bc2a7b8c1f754

let refreshButton = document.querySelector('.refresh');
let refreshClickStream = Rx.Observable.fromEvent(refreshButton, 'click');

let closeFirstButton = document.querySelector('.close1');
let close1ClickStream = Rx.Observable.fromEvent(closeFirstButton, 'click');

let startupRequestStream = Rx.Observable.just('https://api.github.com/users');

let requestOnRefreshStream = refreshClickStream
  .map(function(){
    let randomOffset = Math.floor( Math.random() * 500);
    return 'https://api.github.com/users?since=' + randomOffset;
  });

let requestStream = Rx.Observable.merge(
  requestOnRefreshStream, startupRequestStream
)

// --------- // ważne miejesce - zamiana strumienia zapytań w strumień odpowiedzi --- /// 

let responseStream = requestStream
  .flatMap(function(requestUrl) {
    return Rx.Observable.fromPromise(jQuery.getJSON(requestUrl));
  });


let suggestion1Stream = close1ClickStream.startWith('startup click')
  .combineLatest(responseStream,
    function(click, listUsers) {
      return listUsers[Math.floor(Math.random()*listUsers.length)];
    })
  .merge(
    refreshClickStream.map(function(){ return null; })
  )
  .startWith(null);;

suggestion1Stream.subscribe(function(suggestion){
    if (suggestion === null) {
      // hide the first suggestion DOM element
    }
    else {
      // show the first suggestion DOM element
      // and render the data
    }
  });

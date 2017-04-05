Opeartory do przerobienia na poczatek:

.map,
.filter,
.scan,
.swith,
.mergeMap,
.switchMap,
.combineLatest,
.concat,
.do

Observable umozliwia wykonywanie dzialan funkcjonalnych na strumieniach danych (czyli zamiast .map wykonwyany na statycznej tablicy,
map wykonywane jest na strumieniu uzysktanych danych)

Ponadto mozna chainowac dzialania na obserwowanych strumieniach Lal!

https://www.youtube.com/watch?v=D7ImfM7_mcs&t=1094s

Co umozliwia RxJS:
1. Tworzenie obserwowanych z różnych zródeł (nie koniecznie z eventów, ale z requestów, z wielu rzeczy które wydarzają się asynchronicznie),
https://github.com/Reactive-Extensions/RxJS/blob/master/doc/gettingstarted/which-static.md

Jest kilka rodzaji obserowwanych i róznia się one dziedziczonymi (delegowanymi) metodami

2. Wykonywanie dzialan na strumieniach danych w funkcyjny sposób (z uzyciem Map, Reduce, Filter), zgodnie z zalożeniami programowania funkcyjnego
przefiltrowane stumienie zwracaja kolejne strumienie (dzieki temu mozemy je chainowac),
https://github.com/Reactive-Extensions/RxJS/blob/master/doc/gettingstarted/which-instance.md

3. "Rozwiazywanie strumieni" - czyli zachowanie sie na zakonczenie kazdego strumienie
prawidlowych danych w strumieniu, bledów w strumieniu, ukonczonego strumienia

Sa metody umozliwiajace update stanu na podstawie danych znajdujacych sie strumieniu:
Wzorzec ten pozwala na oddzielenie stanu, od zmiany wykonanej przez uzytkownika (zmiany przetwarzane sa w spos�b funkcyjny)


//

Dwa wzorce porjektowe wykorzystywane przez tą bibliotekę Iterator i Observer

Iterator to wzorzec który umożliwia odczytanie aktualnej wartości - kontrola nad tym kiedy orzymamy obserwowaną wartość nalezy do iteratora, częścią jego api jest (musi być przygotowany na trzy typy odpowedzi
  wartość, błąd, albo koniec tablicy)
Observer to wzorzec który umożliwia odczytania aktualnej wartości - kontrola nad tym kiedy otrzymamy obserwowana wartość należy do kogoś innego, observer tylko zbiera informacje i je odczytuje

Observerable === Collection + Time

### Observable

Jest to array z eventów, możemy kazać mu nasłuchiwać, możemy przestać kazać mu nasłuchiwać, możemy dodawać funkjce na każdej zaobserwowanej wartości
observable.dispose(); // to metoda umożliwająca zaprzestanie nasłuchiwania przez obserwatora

często używa się słowa subscirption - czyli nowa subskrybcja

rejestrując subskrypcje wskazujemy trzy rodzaje zachowań (te zachowania są wspólne dla Iteratora i Obserwatora, to określenie protokołu)
- co robić jak zwróci wartość? (onNext)
- co robić jak zwróci błąd? (onError) -> po tym observable się kończy
- co robić jak ciąg się skończy (nie będzie wartpśco)? (onCompleted) - po tym observable się kończy

Co robi ConcatAll? w przypadku obserbvable of observable,
Łączy je dopiero po zakończeniu (po otrzymani complete )

Take Until - umożliwia zamknięcie strumienia obserwowanych po otrzymaniu konkretnego typu wartości

trzy różne strategie łączenia strumieni produkowanych przez obsevowalne
- cocncatAll - łączone są w ustalonej kolejności, nie zależnie od czasu przychodzenia. Obserwator bierze następną kolekcję, dopiero po tym jak wcześniejsza się skończny (jeżeli jakaś kolekcja jest nieskańczalna, to nigdy nie przejdzie do następnej)
- mergeAll - łączone sa w kolejności przychodzenia,
- switchLatest - patrzy na kolejność przychodzenia, ale zamyka każdy strumień z którego przechodzi jak tylko przejdzie na następny (za pomocą subscirption.dispoe())- bardzo przydatny przy interfejsie użytkownika
ponieważ, jeżeli kliknięcie generuje jakąś akcje, to możemy ją przerwać jak tylko nastąpi kolejne kliknięcie

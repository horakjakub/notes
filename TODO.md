// MediaWikiJS('https://en.wikipedia.org', {action: 'query', list: 'search', srsearch: 'Main Page', srprop: 'title', srlimit: 10}, function (data) {
       
// Napisać maila 
// .gitignore


MAIL 
1. Brak testów, dobry performance, brak czasu (opis przedświątecznego czasu),
2. Wspomnienie o Architekturze (brak procesu kompilowania i łączenia i cyklu eval), decyzja (armata do muchy, dla mnie przyjemne, moja lepsza strona)
3. Wskazanie że to wersja MVP i że jest lista TODO z której lekturą 
4. Wspomnienie że mogę przepisać całość z użyciem wskazanego frameworku (gdyby była potrzeba że muszę udowodnić znajomość)
5. Jeżeli jakieś babole Dodać info o tym że nik mi tego kodu nie sprawdzał (a pewnie by sięprzydało)
/ Nie jestem też super otrzaskany z Wikipedia API, nie miałem wcześniej żadnych doświadczeń z tym API 
/ Dlatego zapytania są najprostsze jakie znalazłem i pewne jest że możnaby jez optymalizować zgłębiając API bardziej 
/ dlatego starałem się zooptymalizować z tej strony która uważam za moją mocniejszą (manipulacje DOM, architektura frontu),  
6. Brak historii / nie zdecydowałem się na początku z korzystania z repozytorium, odłożyłem tę decyzję na później i nie 
Gdyby był jakikolwiek problem z wiar
7. Słowo o dokumentacji i kodzie - po angielsku
// Mogę wspomnieć że DOMService - to serwis który wykorzystywałem wcześniej (jest bardziej rozbudowany), do 
którego api jestem przyzwyczajony

// Dodać prefiksy do ostylowanie (font falmily, flex)
 



     
// 	debugger;

//     // https://www.mediawiki.org/wiki/API:Query
//     // https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=tom&srprop=title&srlimit=10
//    	// https://en.wikipedia.org/w/api.php?action=query&format=json&list=allpages&apfrom=al%20capone&aplimit=10
//    	// https://en.wikipedia.org/w/api.php?action=query&format=json&prop=info&inprop=url&pageids=19485464
//    	// https://www.mediawiki.org/w/api.php?action=help&modules=query%2Binfo
   	
// https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=eddie&format=json&gsrprop=snippet&prop=info&inprop=url

// https://en.wikipedia.org/w/api.php?action=query&format=json&prop=info&inprop=url&pageids=19485464
// https://en.wikipedia.org/w/api.php?action=query&format=json&titles=File:St%20Paul%27s%20Cathedral%20Interior%20Dome%203,%20London,%20UK%20-%20Diliff.jpg&prop=imageinfo&iiprop=url
// https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&titles=Eddie%20Vedder
// });
//var SearchingViewController = ModuleManager.get('SearchingViewController'); 
 


 
// poprawić teksty które lecą z Wikipedii (lepsze zapytanie) // 
// dodać dodawanie sie wszystkiego z Controllera (DOM) // 
// dodać onClick event na button do szukania  //
// przenieść na Gulp // poprzenosić pliki skryptów do folderów //
// poprawić ostylowanie //
// dodać sytuacje startową jej ostylowanie //
 
Opis

Aplikacja ma za zadanie wyszukiwanie wyników z wikipedi

DOM

1. Widok otwierający html (ostylowanie, autocomplete)
komponenty: 
- autocomlete 

2. Widok z wynikami (strona z wynikami, controller nowej strony) // 
komponenty:
- komponent pojedynczego wyniku (obrazek, opis, link), 
- komponent pagera (kolejne wyniki)

Ostylowanie 
// może bez klas, tylko na tagach ?// (raczej BEM) 
// dodać ostylowanie dla oznaczenia stanu aplikacji 

JavaScript

1. Kontroler pierwszego widok 
2. Kontroler drugiego widoku  
3. Serwis z zapytaniami 
4. Dyrektywy z komponentami (serwis budujący DOM // może mixins) 

Kontroler widok pierwszy 
- event listener do widoku (onkeydown, na autokomplete)
- wysyłanie zapytania on keydown i wypełnianie otrzymanymi wynikamia (po 3 literachs)
- przejście do strony z wynikami (on enter, on click, on submit)

Kontroler widok drugi 
- stworzenie DOM 
- umożliwienie wysyłania zapytań o szczególy w kolejce i udostępniania kolejnych elementów DOM po otrzymaniu odpowiedzi
(wykorzystnie EVENTLOOP)
- podobne kolejkowanie o 10 zapytań 

Serwis z zapytaniami
- zapytanie o podpowiedzi, 
- zapytanie o 10 odpowiedzi,
- zapytanie o detale

Serwis z cache 

Testy 
DO wszystkiego powyżej 
Może wizualne? 
Testy zależności modułów (co się stanie jeżeli ktoś przestawi kole

Deployment
- build, 
- zależności (DEV PROD), 
- testy 

Cacheowanie
- wcześniesze wyszukiwania 
- może coockies?  

Dokumentacja 
0. Historia  // skąd decyzje // skąd autocomplete // skąd brak framework lub jego brak  (bootstrap, angular )// dlaczego brak klas (normalnie używaM BEM, 
ale czemu nie oprzeć się)
1. Stan faktyczny
2. Możliwości rozwoju  
3. Testy i obsługa  
4. Wsparcie wsteczne
5. RWD 
6. Bibliografia
7. Dokumentacja ostylowania HTML

PROBLEMY 
- nieznajomość wep api wikipedii  
- nieumiejętność pisania testów // sprawdzić na szybko

TODO 
- zmiana języka (wylistowanie dostępnych oraz)
- polepszenie zapytań do obrazów (teraz to jest losowe dosyć)
- poprawić wygląd (bardzo się śpieszyłem)
- optymalizacja zapytań (testy i sprawadznie prędkości, optymalizacja obrazkó),
- większe pokrycie testami
- ostylowanie przenieść na SASS / w przypadku rozwoju systemu
- testy wizualne () 
- można by dodać lazy inicjacje modułów oraz kontrole wgrywania 
- można dodać Aria
- można dodać tabindexy
- możnaby dodać wyszukiwanie na wpisanie w URL 
- można doadać cachowanie
- autocomplete - dodać na strzałki wyszukiwanie  

MAIL 
/Dodać info o tym że nik mi tego kodu nie sprawdzał (a pewnie by sięprzydało)
/ Nie jestem też super otrzaskany z Wikipedia API, nie miałem wcześniej żadnych doświadczeń z tym API 
/ Dlatego zapytania są najprostsze jakie znalazłem i pewne jest że możnaby jez optymalizować zgłębiając API bardziej 
/ dlatego starałem się zooptymalizować z tej strony która uważam za moją mocniejszą (manipulacje DOM, architektura frontu), 
/ Może dodać rysunek architektury

External Resources

1. Modules Pattern
https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch5.md

2. Promises lib
https://github.com/kriskowal/q

3. MediaWiki 
https://github.com/brettz9/mediawiki-js 
Wzięte z listy klientów z wikipedia : https://www.mediawiki.org/wiki/API:Client_code

4. reset CSS
http://meyerweb.com/eric/tools/css/reset/

//	autocompleteOptionsList.hoveredOptionIndex = 0;
		autocompleteOptionsList.lastChangeDirection = '';
			function changeAutocompleteOption(direction, autocompleteOptionIndex){ 
			if(autocompleteOptionsList.children.length !== 0){

				if(direction === 'ArrowDown' && autocompleteOptionsList.hoveredOptionIndex === 0){
					autocompleteOptionsList.children[autocompleteOptionsList.hoveredOptionIndex].className = 'jh-autocomplete__list-item jh-autocomplete__list-item--hover';
					autocompleteOptionsList.hoveredOptionIndex = autocompleteOptionsList.hoveredOptionIndex + 1;
				} else if(direction === 'ArrowDown' && autocompleteOptionsList.hoveredOptionIndex < autocompleteOptionsList.children.length){
					autocompleteOptionsList.children[autocompleteOptionsList.hoveredOptionIndex - 1].className = 'jh-autocomplete__list-item';
					autocompleteOptionsList.children[autocompleteOptionsList.hoveredOptionIndex].className = 'jh-autocomplete__list-item jh-autocomplete__list-item--hover';
					autocompleteOptionsList.hoveredOptionIndex = autocompleteOptionsList.hoveredOptionIndex + 1;	
				} else if(direction === 'ArrowUp' && autocompleteOptionsList.hoveredOptionIndex > 0){
					autocompleteOptionsList.children[autocompleteOptionsList.hoveredOptionIndex + 1].className = 'jh-autocomplete__list-item';
					autocompleteOptionsList.children[autocompleteOptionsList.hoveredOptionIndex].className = 'jh-autocomplete__list-item jh-autocomplete__list-item--hover';
					autocompleteOptionsList.hoveredOptionIndex = autocompleteOptionsList.hoveredOptionIndex - 1;

				}
			}
		}	
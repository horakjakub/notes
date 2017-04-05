### Angular2

Ważne rzeczy - w pliku w którym, mamy zadeklarowana Apke (z pomoca system.js lub innego pluginu
laczacego skrypty i wgrywajacego je dynamicznie do strony),
ładujesz zaleznosci z podstawowego angulara (z pomoca nowej ecmasriptowej keywordów import)
a potem w deklaracji @NgModule() przyporządkowyujesz je odpowiednim rodzajom kompentów

### Deklaracja Komponentu

- czym różnią się poszczególne grupy wstrzykiwanych komponenów (declarations, imports itd.)? - to jest prawdopodobnie architektoniczne rozważąnie
-

### Component declaration

Pierwsza klasa wyeksportowana pod komponentem musi byc ta polaczona z kompontentem
(Bóg jeden raczy wiedziec dlaczego),   

Naming convention
- HeroDetailComponent is in a file named hero-detail.component.ts.
- jeżeli component 
- jak działania połączenie ze stylami,
- jak działa powiązanie z serwisami (deklaracja serwisu poprzez konstruktor kopomnentu - o co w tym chodzi?? )
- jak działa powiązanie z lifcykle hookami (czemu to jest dodawane łacznie z interfejsem)

### Services

Jak działają i wyglądaja powiązania między poszczególnymi serwisami (@Input i @Injectable - o co w tym chodzi)?
W jaki sposób wklejamy jesdo komponentów i dlaczego
Jakie są natywne serwisy angulara2

### Dyrektywy

Jakie są dyrektwy natywne dla Angulara2

### Template binding

[(ngModel)]="hero.name" - two way data binding syntax
- jak działają deklaracje
- jakie są rodzaje wiązań między komponentem, a templatem? (nawiazy kwadratowe, gwiazdki)

### Routing

Jak

## AngularJS 1x Notes 

rozkmini� priorytey w dyrektywach, eventy, ngrouting, oraz  

### do prze�wiczenia 

__og�lne__

ngApp - mo�na po��czy� ze strict mode ,
ngController - scopea mo�na nazwa� z pomoc� "as", podobnie jak w ng-repeacie,
ngJq - wymusza wystartowanie jQuery lite. Mo�na poda� nazw� innej biblioteki

__ng-form__ oraz wszyskikie te sposoby na walidacje (ng-min, ng-max, length, pattern itd.)

__inputs__ 

ngModel - umo�liwia ng-model-options="{ getterSetter: true }" !!PRZETESTOWA�!!
ngModelOptions -umo�liwia - wprowadzenie op�nienia w updatowaniu modelowanej warto�ci/ zmieni� rodzaj eventu na kt�ry ma by� updaetowany model /
ustanowi� jako ngmodel gettera settera  
 !!PRZETESTOWA�!!
ngDisabled
ngChecked 
ngMaxlength
ngMinlength 
ngList - ciekawy przypadek - mo�liwo�� dodania do inputa logiki kt�ra umo�liwia pojawienie si� w w modelu w scopie array of strings, 
zamiast pojedynczego stringa (mo�emy zdefiniowa�, jaki znak ma oznacza� rozbicie stringa. Z definicji jest to ",")
ngOptions - umo�liwia stworzenie listy do do dropdowna ))
ngPattern 
ngReadonly
ngRepeat - !!PRZETESTOWA� dodatkowe opcje!! 
ngSelected 
ngSubmit  
ngSwitch -  
ngValue - !!PRZETESTOWA� dodatkowe opcje!! 

__ciekawe dyrektywy umo�liwiaj�ce zast�pienie tradycyjnych__ {{ expressions }}

ngBind
ngBindHtml
ngBindTemplate  
ngCloak - umo�liwia ukrywanie element�w zanim zostan� skopmilowane i wy�wietlonw (wsp�pracuje ze wskazanym ostylowaniem i zostaje usuni�te)
ngNonBindable - sprawia �e wybrany element DOM jest ignorowany przez compiler angulara

__events__

ngBlur
ngChange
ngCopy
ngClick
ngCut
ngDblclick
ngFocus
ngKeydown
ngKeypress
ngKeyup 
ngMousedown
ngMouseenter
ngMouseleave
ngMousemove
ngMouseover
ngMouseup 
ngPaste

__styles__ 

ngClass
ngClassEven
ngClassOdd 
ngHide
ngStyle
ngShow

__DOM Manipulation 

ngIf 
ngInclude
ngRepeat
ngSrc - w kombie z img umo�liwia zmian� adres�w obrazi 
ngSrcset
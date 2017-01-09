## AngularJS 1x Notes 

rozkminiæ priorytey w dyrektywach, eventy, ngrouting, oraz  

### do przeæwiczenia 

__ogólne__

ngApp - mo¿na po³¹czyæ ze strict mode ,
ngController - scopea mo¿na nazwaæ z pomoc¹ "as", podobnie jak w ng-repeacie,
ngJq - wymusza wystartowanie jQuery lite. Mo¿na podaæ nazwê innej biblioteki

__ng-form__ oraz wszyskikie te sposoby na walidacje (ng-min, ng-max, length, pattern itd.)

__inputs__ 

ngModel - umo¿liwia ng-model-options="{ getterSetter: true }" !!PRZETESTOWAÆ!!
ngModelOptions -umo¿liwia - wprowadzenie opóŸnienia w updatowaniu modelowanej wartoœci/ zmieniæ rodzaj eventu na który ma byæ updaetowany model /
ustanowiæ jako ngmodel gettera settera  
 !!PRZETESTOWAÆ!!
ngDisabled
ngChecked 
ngMaxlength
ngMinlength 
ngList - ciekawy przypadek - mo¿liwoœæ dodania do inputa logiki która umo¿liwia pojawienie siê w w modelu w scopie array of strings, 
zamiast pojedynczego stringa (mo¿emy zdefiniowaæ, jaki znak ma oznaczaæ rozbicie stringa. Z definicji jest to ",")
ngOptions - umo¿liwia stworzenie listy do do dropdowna ))
ngPattern 
ngReadonly
ngRepeat - !!PRZETESTOWAÆ dodatkowe opcje!! 
ngSelected 
ngSubmit  
ngSwitch -  
ngValue - !!PRZETESTOWAÆ dodatkowe opcje!! 

__ciekawe dyrektywy umo¿liwiaj¹ce zast¹pienie tradycyjnych__ {{ expressions }}

ngBind
ngBindHtml
ngBindTemplate  
ngCloak - umo¿liwia ukrywanie elementów zanim zostan¹ skopmilowane i wyœwietlonw (wspó³pracuje ze wskazanym ostylowaniem i zostaje usuniête)
ngNonBindable - sprawia ¿e wybrany element DOM jest ignorowany przez compiler angulara

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
ngSrc - w kombie z img umo¿liwia zmianê adresów obrazi 
ngSrcset
## JS - patterns

### IIFE - ime invo func expr
	(function(){ 
		var tadam = 'tadam..'
	})()

	(function namedIIFE(){  - better 
		var tadam = 'tadam..'
	})()

Tworzy zupe�nie now� przestrze� nazw nie za�miecaj�c poprzedniej.   
Fajne, bo mo�na przekazywa� obiekty jako argumenty (jak np. window, ale te� np. jQuery)

(funciton firstModule(global){
	var foo = global;
})(Window); 

### Mixins 
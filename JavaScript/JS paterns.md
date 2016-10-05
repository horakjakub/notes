## JS - patterns

### IIFE - ime invo func expr
	(function(){ 
		var tadam = 'tadam..'
	})()

	(function namedIIFE(){  - better 
		var tadam = 'tadam..'
	})()

Tworzy zupe³nie now¹ przestrzeñ nazw nie zaœmiecaj¹c poprzedniej.   
Fajne, bo mo¿na przekazywaæ obiekty jako argumenty (jak np. window, ale te¿ np. jQuery)

(funciton firstModule(global){
	var foo = global;
})(Window); 

### Mixins 
## JS - patterns

# IIFE - ime invo func expr
	(function(){ 
		var tadam = 'tadam..'
	})()

	(function namedIIFE(){  - better 
		var tadam = 'tadam..'
	})()

Tworzy zupe³nie now¹ przestrzeñ nazw nie zaœmiecaj¹c poprzedniej \

Fajne, bo mo¿na przekazywaæ jako argumenty (jak np. window )

(funciton firstModule(global){
	var foo = global;
})(Window); 

# Mixins 
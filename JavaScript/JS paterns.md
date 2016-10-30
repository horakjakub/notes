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


### Module 

Tak naprawdê rozbudowany typ IIFE, zwracaj¹cy jednak konkretny obiekt lub funkcje (modu³), 
z przypisanymi do niej metodami i zmiennymi. Inny przypadek u¿ycia (gdy zwracane s¹ properietes, które mo¿na 
powi¹zaæ ze wskazanym obiektem)

function CoolModule() {
    var something = "cool";
    var another = [1, 2, 3];

    function doSomething() {
        console.log( something );
    }

    function doAnother() {
        console.log( another.join( " ! " ) );
    }

    return {
        doSomething: doSomething,
        doAnother: doAnother
    };
}

Ciekawy przyk³ad ze zmian¹ publicznego API:

var foo = (function CoolModule(id) {
    function change() {
        // modifying the public API
        publicAPI.identify = identify2;
    }

    function identify1() {
        console.log( id );
    }

    function identify2() {
        console.log( id.toUpperCase() );
    }

    var publicAPI = {
        change: change,
        identify: identify1
    };

    return publicAPI;
})( "foo module" );

foo.identify(); // foo module
foo.change();
foo.identify();

I sposób w jaki zosta³y zaimplementowane modu³y (serwisy), a Angularze 1, z Depedency Indjection :

var MyModules = (function Manager() {
    var modules = {};

    function define(name, deps, impl) {
        for (var i=0; i<deps.length; i++) {
            deps[i] = modules[deps[i]];
        }
        modules[name] = impl.apply( impl, deps );
    }

    function get(name) {
        return modules[name];
    }

    return {
        define: define,
        get: get
    };
})();

MyModules.define( "bar", [], function(){
    function hello(who) {
        return "Let me introduce: " + who;
    }

    return {
        hello: hello
    };
} );

MyModules.define( "foo", ["bar"], function(bar){
    var hungry = "hippo";

    function awesome() {
        console.log( bar.hello( hungry ).toUpperCase() );
    }

    return {
        awesome: awesome
    };
} );

var bar = MyModules.get( "bar" );
var foo = MyModules.get( "foo" );

console.log(
    bar.hello( "hippo" )
); // Let me introduce: hippo

foo.awesome();


### Mixins 

 'use strict'; 

var sandboxModule = function sandboxModuleCreation(){
	var button = document.getElementById('convertButton');
	var eventExerciceBtn = document.getElementById('eventExerciceBtn'); 
	var eventExerciceSpan = document.getElementById('eventExerciceSpan');


	eventExerciceBtn.addEventListener('click', function clickExcercice(event){
		// event and this  
	}, false);

	eventExerciceSpan.addEventListener('click', function clickExcercice(event){
		event.stopPropagation();
		// event and this 	
		debugger;
	});

	button.addEventListener('click', action);

	function action(){ 	
		var convertedTextEL = document.getElementById('convertedText');

		function tadam(){

		}
		
		convertedTextEL.value = tadam();
	}

	// ------------------// FUNCTIONAL PROGRAMMING // ------------------ // 

	var arrayTadam = [2, 4, 5, 7, 10]; 

	var kotekTadam = arrayTadam.reduce(function(a, b, ind, arrs){
		return a + b;
	}, 0); 		

	var kotekTadamMap = arrayTadam.map(function(a, ind, arrs){
		return a * 2;
	}); 	

	// ------------------// PROTOTYPOWANIE // ------------ // najlepiej by było poćwiczyć node

	function Mappet(name, type){
		this.name = name; 
		this.type = type;
		
		this.checkType = function checkType(){
			console.log(this.type);
		};
	} 

	var elmo = new Mappet('Elmo'); 

	Mappet.prototype.greet = function greet(greetingText) {
		console.log(this.name + 'greets the world and' + greetingText);  
		this.doneGreets.push(greetingText);  
	}; 

	var twitty = new Mappet('twitty');
	  
	Mappet.prototype.doneGreets = [];

	var lobo = { name: "Lobo", doneGreets: [] };

	elmo.greet.apply(lobo, ['tadam']); 


	function RoboMappet(name, type){
	// niepoprawny sposób tworzenia dziedziczenia 
		this.name = name;
		this.type = type;
	 	//Mappet.call(this, name);
	}

	RoboMappet.prototype = new Mappet('roboMappetName', 'roboMappet'); 

	var roboElmo = new RoboMappet('RoboElmo', 'RoboElmoKiller');

	function AnimalMappet(name, type){
		var type = type;
		this.name = name; 
	  
		this.getType = function(){
			console.log(type);
		};
	}

	AnimalMappet.prototype = new Mappet(); // 

	AnimalMappet.prototype.bark = function bark(kotek){ 
		var nameTypeInfo = this.name + ' in in type ' + this.type; 
		console.log(nameTypeInfo); 
		this.barks = [];

		this.barks.push(nameTypeInfo); 
	}; 


	var animalElmo = new AnimalMappet('animalMuppet', 'hund');

	/// propozycja Getify // najładniejsze i najczystsze rozwiązanie

	function Foo(name) {
	    this.name = name;
	}

	Foo.prototype.myName = function() {
	    return this.name;
	};

	function Bar(name,label) {
	    Foo.call( this, name );
	    this.label = label;
	}

	// here, we make a new `Bar.prototype`
	// linked to `Foo.prototype`

	Bar.prototype = Object.create( Foo.prototype );


	var bar = new Bar('Kyle', 'Simpson');

	// Beware! Now `Bar.prototype.constructor` is gone,
	// and might need to be manually "fixed" if you're
	// in the habit of relying on such properties!


	// należy unikać posługiwania się właściwością obj.constructor - ze względu na to że jest bardzo myląca
	// można ją nadpisać, zmienić, usunąć a pozoeniw wskazuje ona na funkjce która skonstuowała obiekt
	//(choć może b to zupełnie inna funkcja)

	// //////////////////////// sprawdzić instanceOf 
 	
 	// ----------------- // test na konstrukotra  
 	// przykład tego że do utworzenia obiektu i nadadnia prototypu, potrzebna jest zwykła funkcja

 	function SomeConstructor(){}

 	SomeConstructor.prototype = Object.create(AnimalMappet.prototype);

 	var randomElmo = new SomeConstructor('elmo');  

 	// pamiętaj o czterech sposobach wiązania this funkji (oraz o priorytecie ich wykorzystania): 
 	// 1. new biding
 	// 2. explicit binding (call, apply, bind)
 	// 3. implicit binding (call site foo.bar.someFunc() -> bar is call site )
 	// 4. default binding (global or undefined (strict mode))


 	// Shadowing - ustawianie zmiennych - proto shadowing 
 	// czyli jeżeli dopiszemy właściwość do obiektu zostania ona dopisana do obiektu, 
 	// chyba że prototyp ma właściwość o tej samej nazwie i property - writable: false
 	// lub prototyp ma właściwość settera o tej samej nazwie (wtedy wywoła settera)

 	function City(name, label){
 		this.name = name;  

 		Object.defineProperties(this, {
 			'_label': {
 				writable: true,
 				enumerable: false 
 			}, 
 			'label': {
 				get: function(label){
 					return this._label; 
 				}, 
 				set: function(label){ 
 					debugger;
 					this._label = label; 
 				}, 
 				configurable: true, 
				enumerable: true
 			}, 
 			'id': {
 				value: 1
 			}
 		}); 

 		this.label = label;
 	}

 	var szczytno = new City('Szczytno', 'Zadupie');

 	for(var prop in szczytno){
 	}

 	var szczytnoClone = Object.create(szczytno);

 	szczytnoClone.name = 'Szczytno';
 	// szczytnoClone.id = 2;  // not possible
 	szczytnoClone.label = 'clone';

 	debugger;

 	function SpanishCity(name, label, region){
 		City.call(this, name, label); 

 		this.region = region; 
 	}

	SpanishCity.prototype = Object.create(City.prototype); 
	SpanishCity.prototype.constructor = SpanishCity; // niekonieczne 

 	var barcelona = new SpanishCity('Barcelona', 'Katalonia');


 	debugger;
	// ------------------// PROTOTYPOWANIE I CLOSURES // ------------ //  


	function Town(buldings, streets, name){
		var buidlings = buldings, 
			streets = streets;
		this.interface = {};
		this.name = name;
		
		this.interface.getStreet = function(){
			return streets;
		};

		this.interface.getBuidlings = function(){
			return buidlings;
		};

		this.interface.addNewStreet = function(nameOfTheStreet){
		 	streets.push(nameOfTheStreet);
		}; 
	 
	} 

	var kotek = 'kotek';

	function consoleLogKotek(){
		console.log(kotek);
	}
 
 	function createNewScope(){
 		var kotek = 'piesek'; 
 		consoleLogKotek(); 
 	}

 	createNewScope();

	Town.prototype = new AnimalMappet();

	var newYork = new Town(['EmpireState', 'WordTrad'], ['21avenue', 'RidleyStreet'], 'NewYork'); 
	 
	// --------------- // ECMA SCRIPT 5 // --------------------// 

	var obj1 = {}; 

	obj1.name = "das"; 

	var thisIsTrue = obj1.hasOwnProperty('name'), 
		thisIsTrue2 = 'name' in obj1;

	obj1.kotek = "tadam";


	function checkNamedArguments(one, two, three){
		var arg = arguments;
		debugger;
	}

	//	checkNamedArguments('one', 2, true, null, undefined);

	function checkUnamedArguments(){
		var arg = arguments; 
		debugger;
	}

	//	checkUnamedArguments('one', 2, true, null, undefined);

	Object.keys(obj1); // zwraca [ name,kotek ], wszystkie policzalne własności obiektu 	

	var obj2 = {
		_name: 'Nicholas', 

		get name(){
			var tadam = '2'; 

			return this._name; 
		}, 

		set name(value){
			this._name = value; 
		}, 

		age: 23, 
		superPowers: 'Killing by the glance', 
		isHeCool: false,
		_mood: 'bored', 

		get mood(){
			return this._mood; 
		}, 
		set mood(moodValue){ 
			this._mood = moodValue; 
		} 
	};

	obj2._name = 'Kuba'; 

	Object.defineProperty(obj2, 'name', { enumerable: false }); 
	Object.defineProperty(obj2, 'age', { enumerable: false }); 

	// enumareble properties are higlithed lighter by chrome debugger engine  

	var numProps = [];

	for(var prop in obj2){
		numProps.push(prop);
	}

	obj2.propertyIsEnumerable('_name');	 	// true 
	obj2.propertyIsEnumerable('name'); 		// false

	Object.defineProperty(obj2, 'superPowers', { configurable: false }); 
	Object.defineProperty(obj2, 'mood', { configurable: false }); 


	obj2.superPowers = 'Snooring and scrafing';   // obj2.superPowers => 'Snooring and scrafing';  

	obj2.mood = 'happy';

	//delete obj2.mood;  

	var obj3 = {}; 

	Object.defineProperty(obj3, 'shape', {
		value: 'rounded', 
		configurable: true, 
		enumerable: true, 
		writable: true 
	});

	obj3.shape = 'boom';

	console.log(obj3.shape);

	Object.defineProperty(obj3, 'shape', {
		writable: false 
	});
 
	//obj3.shape = 'kwark'; // not possible

	obj3._member = 'Sons of Anarchy'; 

	Object.defineProperty(obj3, 'member', {
		get: function(){
			return this._member; 
		}, 
		set: function(val){

			this._member = val; 
		}, 
		configurable: false, 
		enumerable: false
	}); 

	obj3.member = 'Sons of Creation'; 

	console.log('obj3.member', obj3.member);

	Object.defineProperty(obj3, '_member', {
		writable: false 
	});

	// obj3.member = 'Sons of Recreation'; // not possible 

	var descriptor = Object.getOwnPropertyDescriptor(obj3, '_member');
	var descriptor2 = Object.getOwnPropertyDescriptor(obj3, 'member');

	Object.preventExtensions(obj2); 

	// obj2.knowHow = true; // not possible

	Object.seal(obj3); 

	// obj3.newProp = 'Electra'; // not possible
	// delete obj3.shape; // not possible 

	Object.freeze(obj1);

	// obj1.newProp = 'Electra'; // not possible
	// delete obj1.name; // not possible 
	// /obj1.name = 'Lucas'; // not possible

	function Folk(isHasMustage){
		this._hasMustage = isHasMustage;
		Object.defineProperty(this, 'hasMustage', {
			get: function(){
				return this._hasMustage; 
			}, 
			set: function(val){ 
				this._hasMustage = val; 
			}, 
			configurable: false, 
			enumerable: false
		}); 
	}

	Folk.prototype = {
		constructor: Folk, 

		kuryCount: 1, 

		tadamCount: 3,

		sayWobodobo: function(){
			console.log('wobodobo!');  
		}, 

		sayNeiii: function(){
			console.log('NEIII!!!'); 
		}

	};  


	var janek = new Folk(true); 

	Folk.prototype.videosCount = 1; 
	
	janek.hasMustage = false; 

	for(var prop in janek){
		console.log(prop + '!!!'); 
	} 

	/*
	with(janek){
		kuryCount = tadamCount;
	} 
	*/ 
 

	// --------------- // REQUEST XHR // --------------------// 

	
	function sendRequest(){ 
		var url = 'http://89.40.144.231:242/httpAuth/app/rest/buildQueue/';

		function onProgress(e) {  
		}

		function onError(e){  
		}	

		function onLoad(e){  
		}


		var username = 'administratorpanel',
			password = '2JLALEDG6etDDbu7'
		var req = new XMLHttpRequest();
		req.onprogress = onProgress;
		req.open("GET", url, true);
		req.withCredentials = true
		req.setRequestHeader("Authorization", "Basic " + btoa(username + ":" + password)) // "Authorization", "Basic " + btoa(username + ":" + password)
		req.onload = onLoad;
		req.onerror = onError;
		req.send(null);
 	}

 	var requestButton = document.getElementById('requestButton'); 

 	requestButton.addEventListener('click', sendRequest);
 	
 	debugger;

  	// --------------------- //  MIXINS lub extend() // -------------------- //  

  	// vastly simplified `mixin(..)` example:

	function mixin( sourceObj, targetObj ) {
	    for (var key in sourceObj) {
	        // only copy if not already present
	        if (!(key in targetObj)) {
	            targetObj[key] = sourceObj[key];
	        }
	    }

	    return targetObj;
	}

	var Vehicle = {
	    engines: 1,

	    ignition: function() {
	        console.log( "Turning on my engine." );
	    },

	    drive: function() {
	        this.ignition();
	        console.log( "Steering and moving forward!" );
	    }
	};

	var Car = mixin( Vehicle, {
	    wheels: 4,

	    drive: function() {
	        Vehicle.drive.call( this ); // jeden ze sposobów na naśladowanie polimorfizmu 
	        // nie polecany ze wzgędu na całkiem spory koszt wydajności
	        console.log( "Rolling on all " + this.wheels + " wheels!" );
	    }
	} ); 

	// IIFE, 
	// instansce of 
	// every, single, forEach - trzeba sprawdzić
	// .bind() i inne rzeczy z rozdziału 2 //
	//Object.getPrototypeOf( a )  
	//isPrototypeOf(..).
	// Object.create() umożliwia dopisywanie nowych właściwości do obiektu podonmie jak Object.defineProperty();

}();
 
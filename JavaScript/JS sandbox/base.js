'use strict'; 

var sandboxName = function sandbox() {
	var button = document.getElementById('convertButton');

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

	function Mappet(name){
		this.name = name; 
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

	function RoboMappet(name){
	 	Mappet.call(this, name);
	}

	RoboMappet.prototype = new Mappet(); 

	var roboElmo = new RoboMappet('RoboElmos');

	function AnimalMappet(name, type){
		var type = type;
		this.name = name; 
	  
		this.getType = function(){
			console.log(type);
		};
	}

	AnimalMappet.prototype = new Mappet();

	AnimalMappet.prototype.bark = function bark(kotek){ 
		var nameTypeInfo = this.name + ' in in type ' + this.type; 
		console.log(nameTypeInfo); 
		this.barks = [];

		this.barks.push(nameTypeInfo); 
	}; 


	var animalElmo = new AnimalMappet('animalMuppet', 'hund');

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
	function checkUnamedArguments(){
		var arg = arguments; 
		debugger;
	}

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

	//checkNamedArguments(); 
	// checkUnamedArguments(1, 'kotek', true);


	Object.defineProperty(obj2, 'name', { enumerable: false }); 
	Object.defineProperty(obj2, 'age', { enumerable: false }); 


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

	// delete obj2.mood; 
			// trzy rzeczy dla których kontekst 

			// poćwiczyć clousres 
			// poćwiczyć tworzenie obiektów 
			// poćwiczyć funkcjonalne obliczenie // potworzr

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


	//obj3.shape = 'kwark'; no possible

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
	};

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


	debugger;
}();

//sandbox();
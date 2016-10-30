var tests = (function(global, moduleName){ 
	var intface = {}, 
		tests = {};

	global[moduleName] = intface; 

 	intface.TestCollection = function TestCollectionConstrutor(name){ 
 		Object.defineProperty(this, 'name', {
	 		value: name,  
			enumerable: false
		});
		Object.defineProperty(this, 'module', {
	 		value: global[name],  
			enumerable: false
		}); 

 	};

 	Object.defineProperty(intface.TestCollection.prototype, 'start', {
 		value: function addCollectionToTestsObj(){	
	 		tests[this.name] = this; 
				return this;
	 	},   
		enumerable: false
	});	

	intface.run = function(){ 
		for(var collection in tests){  
			for(var test in tests[collection]){
				if(tests[collection][test](tests[collection].module)){ 
					console.log(test + ' in module ' + collection + ' is passed'); 
				} else {	
					console.log(test + ' in module ' + collection + ' is notpassed'); 
				} 
			}
		}
	};   

	return intface;
})(Window, 'tests');  

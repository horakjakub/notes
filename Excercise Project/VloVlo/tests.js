///////////////////////////////////////////////////////////////
//					TESTY MODUŁU UŻYTKOWNICY 				//
//////////////////////////////////////////////////////////////

var UserModuleTestCollection = new tests.TestCollection('UsersModule').start(); 

UserModuleTestCollection.createUserTest = function(UsersModule){
	var testName = 'Joe', 
		testSurname = 'Doe', 
		testEmail = 'joedoe@example.com',  
		testUrl = 'dfadsf.jpg',
		testPassword = 'fasijio35235';

	var testUser = new UsersModule.CreateUser(testName, testSurname, testEmail, testUrl, testPassword);  
	
	if(typeof testUser === 'object' && Object.keys(testUser).length === 5){
		return true; 
	} else {
		return false;
	} 
};

tests.run();


 var UsersModule = (function(global, moduleName){ 
	var intface = {};
	
	global[moduleName] = intface; 

	intface.CreateUser = function CreateUser(name, surname, password, email, avatarPhotoUrl){
		this.name = name;
		this.surname = surname;
		this.password = password;
		this.email = email;
		this.avatarPhotoUrl = avatarPhotoUrl || createRandomUserPhotoUrl();
	};

	createRandomUserPhotoUrl = function createRandomUserPhotoUrl(){
		return 'someRandomUrl.jpg';
	};
	 
	return intface;
})(Window, 'UsersModule');    
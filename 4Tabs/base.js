
var button = document.getElementById('convertButton');

button.addEventListener('click', convertSpacesIntoTabs);

function convertSpacesIntoTabs(mouseEvent){ 
	var textToConverEl = document.getElementById('tabsConverter'),
		convertedTextEL = document.getElementById('convertedText'), 
		newValue = '', 
		textToConvert = textToConverEl.value; 


	function checkWhitespaceCount(line){
		var letterCounter = 0, 
			whitespaceCounter = 0,	
			indexesOf4whitespaces = [];

		function checkLetter(line, counter, whitespaceCounter){ 
			var indexToCheck = counter;
			if(whitespaceCounter === 4){ 
				indexesOf4whitespaces.push(indexToCheck -1);
				whitespaceCounter = 0;
			}
			if(line[indexToCheck] === " "){
				counter++; 
				whitespaceCounter++; 
				checkLetter(line, counter, whitespaceCounter);
			} else if (line[indexToCheck] === "\t"){
				counter++; 
				checkLetter(line, counter, whitespaceCounter);
			}
			else {

			}
		} 

		checkLetter(line, letterCounter, whitespaceCounter);

		var arrayLength = indexesOf4whitespaces.length; 

		for(var i = arrayLength - 1; i !== -1; i--){ 
			var linePartOne = line.slice(0, indexesOf4whitespaces[i] - 3),
		 		linePartTwo = line.slice(indexesOf4whitespaces[i] + 1);
		 	line = linePartOne + '\t' + linePartTwo; 
		}

		return line;
	}

	var lastLineIndex = textToConvert.lastIndexOf("\n");

	while(textToConvert.indexOf('\n') > -1){ 
		var firstLine = textToConvert.slice(0, textToConvert.indexOf('\n') + 1);

		textToConvert = textToConvert.slice(textToConvert.indexOf('\n') + 1);
		firstLine = checkWhitespaceCount(firstLine); 
		newValue = newValue + firstLine;
	}
	
	convertedTextEL.value = newValue;

}

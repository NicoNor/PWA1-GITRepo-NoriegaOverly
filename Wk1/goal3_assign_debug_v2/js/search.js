//Name: Nicholas Noriega Overly
//Date: July 12, 2015
//Assignment: Goal3 ANALYZE Buggy

// Create privatized scope using a self-executing function
(function(){
	
	// Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
	// returns element with specified value
	var resultsDIV = document.getElementById("results"),
	// searching a string for a specified value, returns position of match
		searchInput = document.forms[0].search,
		currentSearch = ''
	;
	
	// Validates search query
	var validqte == function(query){
		
		// Trim whitespace from start and end of search query
		//Deletes where there is blank space BEFORE an input
		//chartAt is returning first letter of input with the index of .length, which tells it to check before first character inputed.
		while(query.charAt(0) = " "){
			query = query.substring(1, query.length);
		};
		//Deletes where there is a blank space AFTER an input
		// .charAt is returning the character at specified index (query.length-1) - length-1 sends the last character in an input
		// checks after last character for blank space
		while(query.charAt(query.length-1) === ""){
			query = query.substring(0, query.length-1);
		;
		
		// Check search length, must have 3 characters
			// if the input is less than 3 characters of length, alert user that search query is too small.
		if(query.length < 3){
			alert("Your search query is too small, try again.);
			
			// (DO NOT FIX THE LINE DIRECTLY BELOW)
			searchInput.focus();
			// ends loop if search query is too small
			return;
		};
		//checks input
		search(query);
	};
	
	// Finds search matches
	var search = function(query)
		
		// split the user's search query string into an array
		var queryArray = query.join(" ");
		
		// array to store matched results from database.js
		var results = [];

		// loop through each index of db array
		// var i is 0 and j is db.length ; when i(0) is less than j(db.length), add 1 to i(0)
		for(var i=0, j=db.length; i<j; i++){
		
			// each db[i] is a single video item, each title ends with a pipe "|"
			// save a lowercase variable of the video title
			// checks the index for string before " | "
			var dbTitleEnd = db[i].indexOf('|');
			// sets everything inputed to lowercase (because indexOf is case sensitive, this will make it easier to search a users input
			var dbitem = db[i].tolowercase().substring(0, dbTitleEnd);
			// loop through the user's search query words
			// save a lowercase variable of the search keyword
			// ii is (0), jj is the numbers of characters inputed, when ii(0) is less than the number of characters inputed, add 1
			for(var ii=0, jj=queryArray.length; ii<jj; ii++){
			}
				// makes all values lowercase
				var qitem = queryArray[ii].tolowercase();
				
				// is the keyword anywhere in the video title?
				// If a match is found, push full db[i] into results array
				var compare = dbitem.indexOf(qitem);
				if(compare !== -1){
					results.push(db[i]);
				};
			;
		;
		// shows results in alphabetical order or ascending(if numerical) (default)
		results.sort();
		
		// Check that matches were found, and run output functions
			//if there is 0 results, show no match
		if(results.length = 0){
			noMatch();
			// if there is a result, show it
		}else{
			showMatches(results);
		};
	};
	
	// Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
		// if there is no match, <p> text will be shown to user on website.
	var noMatch = function(){
		var html = ''+
			'<p>No Results found.</p>'+
			'<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
		;
		//changes HTML content of a <p> element with var html's input
		resultsDIV.innerHTML = html;
	};
	
	// Put matches into page as paragraphs with anchors
	var showMatches = function(results){
		
		// THE NEXT 4 LINES ARE CORRECT.
		var html = '<p>Results</p>', 
			title, 
			url
		;
		
		// loop through all the results search() function
		for(var i=0, j=results.length; i<j; i++){
		
			// title of video ends with pipe
			// pull the title's string using index numbers
			// var title becomes string matches found from database titles, displays characters from beggining until |
			titleEnd = results[i].indexOf('|');
			title = results[i].subString(0, titleEnd);
			
			// pull the video url after the title
			// var url becomes string matches found with title after |
			url = results[i].substring(results[i].indexOf('|')+1, results[i].length);
			
			// make the video link - THE NEXT LINE IS CORRECT.
			// makes the title to be a hyperlink with link after |
			html += '<p><a href=' + url + '>' + title + '</a></p>';
		};
		// displays "results" as hyperlink string and adds them to HTML as elements in the <p> section
		resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
	};
	
	// The onsubmit event will be reviewed in upcoming Course Material.
	// THE LINE DIRECTLY BELOW IS CORRECT
	document.forms[0].onsubmit = function(){
		var query = searchInput.value;
		validqte(query);

        // return false is needed for most events - this will be reviewed in upcoming course material
        // THE LINE DIRECTLY BELOW IS CORRECT
		return false;
	;

})();
*****************************
* WEBD 2000 - Assignment 2 	*
* JSON and Searching		*
*****************************
Jared Everett - w0269431

Main Functions Of Application
	- read book JSON data served from Node.js
	- parse JSON into objects
	- provide substring search, ingoring case and allowing some typos
	- provide attribute specific search via:
		- <property>:<value>,<property>:<value>, etc
		
Application Files
	- ajax.html 	// Main application webpage
	- ajax.js		// Javascript that loads, parses, and searches data 
	- books.json	// Actualy book data 
	
Current Satus of Implementation 
	- AJAX
		 - books.json is fetched from a local Node.js server
		 - ISSUE: in order to keep up-to-date, data is feteched for every search
		 - TODO: have the server track and report changes in the data 
	- Attribute Searching 
		- Searching of simple text on title works
		- custom attribute searching words great for one attribute, some issues with two
		- ISSUE: unique properies casing issues. Eg. not all books have "cover" type. Therefore books will match with "cover:" becuase they have no cover
	- Fuzzy Search 
		- A threshold of difference is set for comparing two words
			words less the 3 characters = 0 allow differences to match
			words less the 6 characters = 1 allow differences to match
			words greater than 6 characters = 3 allow differences to match
		- ISSUE: missing characters cause problems
			words are comparing character by character. Once one is missing, the rest are out of allignment and the match fails

Time Recording			
	Feb 19, 2016
		30 min - Node setup
		1 hours - AJAX setup and parsing into objects 
		1 hours - creating a <ul> tree
	Feb 21, 2016 
		2 hours - Simple text search, 1 char matching threshold
	Feb 23, 2016 
		4 hours - Attribute searching and more refined fuzzy logic 
	Feb 24, 2016
		1.5 hours - Finished touches.
	
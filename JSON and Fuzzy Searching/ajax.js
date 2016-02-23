
function getBooks(searchString)
{
	var http = new XMLHttpRequest();
    var books = [],
                i;
	http.onreadystatechange = function(){
		if(http.readyState === 4 && http.status=== 200){
			console.log(http.responseText);
			json = http.responseText;
			console.log(json);
			var obj = JSON.parse(json);            
            for (i in obj.books)
                books.push(obj.books[i]);
            
            searchBooks(books, searchString);
		}
	};
	http.open("GET","books.json",true);
	http.send();
}


// JSON structure
// category     : string
// title        : string[]  "lang", "text"
// author       : string[]  authors
// year         : int
// private      : double


function createTree(books, container) {
    
    $(container).empty();
    for (var i = 0; i < books.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = "<strong>" + books[i].title.text + " (" + books[i].title.lang + ")</strong>";
        
        
        for (var property in books[i]) {
            if (property != "title")
            {
                var ul = document.createElement('ul');
                if (books[i].hasOwnProperty(property)) 
                {                
                    var li2 = document.createElement('li');
                    
                        li2.innerHTML = property + ": " + books[i][property];                     
                    ul.appendChild(li2);                 
                }
                li.appendChild(ul);
            }
            
        }
        container.appendChild(li);
    }
}

// Return true if that two words are the same with a error threshold of one character
function compareWords(word1, word2)
{
    // spilt into character arrays
    var word1Chars = word1.split(''),
        word2Chars = word2.split(''),
        differences= 0,
        length,
        threshold = 1;
        
    if (word1.length > word2.length)
        length = word2.length;
    else
        length = word1.length;
        
    if (word2.length < 3)
        threshold = 0;
    if (word2.length > 5)
        threshold = 2;
        
    // only compare words if they are similar lengths
    if (word1.length >= word2.length - 1 && word1.length <= word2.length + 1)
    {
        for (var i = 0;i < length;i++)
        {
            if (word1Chars[i] != word2Chars[i])
                differences++;
        }  
    }
    else
        return false;
    
    
    if (differences > threshold)
        return false;
    else
        return true;
}

function searchBooks(allBooks, searchString)
{
    var results = [],
        attributeKeys = [],
        attributeSearchTerms = [];
    
    // Setup array to search from
    var searchPairs = searchString.split(",");
    for (var counter = 0;counter < searchPairs.length;counter++)
    {
        var data = searchPairs[counter].split(":");
        if (data.length == 2)
        {
            attributeKeys.push(data[0]);
            attributeSearchTerms.push(data[1]);
        }
        if (searchPairs.length == 1 && data.length == 1) // simple text was inputted
        {
            attributeKeys.push("title");
            attributeSearchTerms.push(data[0]);
        }
    }
    
    // search required properties
    for (var i = 0; i < allBooks.length; i++)   // loop all books
    {
        for (var property in allBooks[i])       // loop each property of book
        {
            for (var z = 0;z<attributeKeys.length;z++)  // loop at properties that are being searched on
            {
                if (attributeKeys[z] == property)       // this property is being search on
                {
                    var termString = attributeSearchTerms[z].toLowerCase();                        
                    var terms = termString.split(" ");
                    var temp = allBooks[i][property];
                    if (property == "title")                    
                        var propertyWords = String(allBooks[i][property].text).split(" ");
                    else
                        var propertyWords = String(temp).split(" ");    
                        
                    for (var x = 0;x < terms.length;x++)
                    {
                        for (var y = 0;y < propertyWords.length;y++)
                            if (compareWords(propertyWords[y].toLowerCase(), terms[x]))
                            {
                                var duplicate = false;
                                for (var t = 0;t<results.length;t++)
                                {
                                    if (allBooks[i].title.text == results[t].title.text)
                                        duplicate = true;
                                }
                                if (!duplicate)
                                    results.push(allBooks[i]);
                            }    
                    }
                }
            }
        }
    } 
    var container = document.getElementById("tree");
    createTree(results, container);
}



$("#search").on('change keyup paste', function() {
    var searchString = $('#search').val();        
    getBooks(searchString);
});
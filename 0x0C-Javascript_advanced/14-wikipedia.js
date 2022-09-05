/* Write a new function named createElement:

It accepts one argument data (String)
It creates a paragraph element
The content of the paragraph is set to data
It appends to the document body the paragraph
Create a new function named queryWikipedia:

It accepts one argument callback (function)
Using XMLHttpRequest, it get the article of Stack Overflow with the URL https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*
Once the fetch is correctly executed, it calls the callback function with the extract of the API response */


function createElement(data) {
  let paragraph = document.createElement('p');
  paragraph.appendChild(document.createTextNode(data));
  document.head.append(paragraph);
}

function queryWikipedia(callback) {
  let req = new XMLHttpRequest();
  req.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow");
  req.onreadystatechange = function (event) {
    if(req.readyState === 4) {
      if(req.status === 200) {
        callback(null, JSON.parse(req.responseText))
      } else {
        const error = new Error('Error');
        return callback(error, null);
      }
    }
  }
  req.send();
}

queryWikipedia(createElement);

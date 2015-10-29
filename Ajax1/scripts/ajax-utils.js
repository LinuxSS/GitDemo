// Get the browser-specific request object, either for
// Internet Explorer 5 and 6 (top entry) or for Firefox,
// Safari, Opera, Mozilla, Netscape, or IE 7 (bottom entry).

function getRequestObject() {
  if (window.ActiveXObject) { 
    return(new ActiveXObject("Microsoft.XMLHTTP"));
  } else if (window.XMLHttpRequest) {
    return(new XMLHttpRequest());
  } else {
    return(null);
  }
}

// Make an HTTP request to the given address. 
// Display result in the HTML element that has given ID.

function ajaxResult(address, resultRegion) {
  var request = getRequestObject();
  //alert("ajaxReslut--address,resultRegion-->"+request,resultRegion);
  
  /*
  - showResponseText() gets executed after ajaxResult().
  - This is because only when the jsp page gets a response back from the servlet
     i.e. request.readystate==4(i.e. the jsp page has receieved the response from the servlet thru ajax)
  
  --onreadystatechange execute the function showResponseText().
  */
  request.onreadystatechange = 
    function() { showResponseText(request, 
                                  resultRegion); };
                                  
  alert("ajaxResult--GET--address-->"+address);
  request.open("GET", address, true);
  request.send(null);
}

// Make an HTTP request to the given address. 
// Display result in the HTML element that has given ID.
// Use POST. 

function ajaxResultPost(address, data, resultRegion) {
  var request = getRequestObject();
  request.onreadystatechange = 
    function() { showResponseText(request, 
                                  resultRegion); };
                                  
            
  request.open("POST", address, true);
  request.setRequestHeader("Content-Type", 
                           "application/x-www-form-urlencoded");
  request.send(data);
}

// Put response text in the HTML element that has given ID.

function showResponseText(request, resultRegion) {
  if ((request.readyState == 4) &&
      (request.status == 200)) {
      
      //This request.responseText is coming from the Servlet ShowTimeInCity
      alert("showResponseText-->request.responseText-->"+request.responseText);
    htmlInsert(resultRegion, request.responseText);
  }
}

// Insert the html data into the element that has the specified id.

function htmlInsert(id, htmlData) {
  document.getElementById(id).innerHTML = htmlData;
}

// Return escaped value of textfield that has given id.
// The builtin "escape" function converts < to &lt;, etc.

function getValue(id) {
alert("getValue(id)..id-->"+id);
alert("ajax-utils.js...getElementById-->"+escape(document.getElementById(id).value));//returns the city entered
  return(escape(document.getElementById(id).value));
}

// Trick so that the Firebug console.log function will
// be ignored (instead of crashing) in Internet Explorer.
// Also see Firebug Lite and Faux Console if you want 
// logging to actually do something on IE.
// Firebug Lite: http://www.getfirebug.com/lite.html
// Faux Console: http://icant.co.uk/sandbox/fauxconsole/
 
try { console.log("Loading script"); 
} catch(e) { console = { log: function() {} }; }
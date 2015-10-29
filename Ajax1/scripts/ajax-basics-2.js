// Show the time in the city whose name is given
// by the textfield whose id is "city-1". Use GET.

function showTimeInCity(inputField, resultRegion) {
//The base address would invoke the Servlet ShowTimeInCity--see web.xml for url mapping.
  var baseAddress = "show-time-in-city";
  
  
  var data = "city=" + getValue(inputField);//show-time-in-city?city=dallas :: document.getElementById('city-1').value
  //alert("showTimeInCity..data-->"+data);
  
  var address = baseAddress + "?" + data;
  alert("showTimeInCity-->address-->"+address);
  alert("showTimeInCity-->resultRegion-->"+resultRegion);
  ajaxResult(address, resultRegion);
}

// Show the time in the city whose name is given
// by the textfield whose id is "city-2". Use POST.

function showTimeInCityPost(inputField, resultRegion) {
  var address = "show-time-in-city";
  var data = "city=" + getValue(inputField);
  // alert("showTimeInCityPost-->address,data,reslutRegion"+address,data,resultRegion);
  ajaxResultPost(address, data, resultRegion);
}
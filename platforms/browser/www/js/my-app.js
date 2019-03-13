// Initialize app
var myApp = new Framework7();


// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {

    console.log("Device is ready!");
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function (page) {
    // Do something here for "about" page

})

// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;

    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        myApp.alert('Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="about"]', function (e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    myApp.alert('Here comes About page');
})

var dollars;
var pesos;

    
    function USDMNX(){
        var http = new XMLHttpRequest(); 
        //This is my personal key for the API currency
        const url = 'http://www.apilayer.net/api/live?access_key=18607cadf33680a3606935484b43b7a2';
        http.open("GET", url); 
        http.send();

        //Function to put the data in a JSON and can handel it 
        http.onreadystatechange = (e) => {
        var response = http.responseText;
        var responseJSON = JSON.parse(response);

        console.log(responseJSON);

        var mnx = responseJSON.quotes.USDMXN;    

        //This part makes the actually change between currencies
        var input = document.getElementById('USD').value;
        var num1 = parseFloat(input);
        var result;
        result = num1 * mnx;
        document.getElementById("PESOS").innerHTML = result +" "+"Mexican Pesos";
        console.log(result);
        }
    
    } 

    function MNXUSD(){
        var http = new XMLHttpRequest(); 
        //This is my personal key for the API currency
        const url = 'http://www.apilayer.net/api/live?access_key=18607cadf33680a3606935484b43b7a2';
        http.open("GET", url); 
        http.send();

        //Function to put the data in a JSON and can handel it 
        http.onreadystatechange = (e) => {
        var response = http.responseText;
        var responseJSON = JSON.parse(response);

        console.log(responseJSON);

        var mnx = responseJSON.quotes.USDMXN;    

        //This part makes the actually change between currencies
        var input = document.getElementById('MNX').value;
        var num1 = parseFloat(input);
        var result;
        result = num1 / mnx;
        document.getElementById("DOLLARS").innerHTML = result +" "+"US Dollars";
        console.log(result);
        }
    
    } 

    
'use strict';

var hours = ['6am','7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


/* Below is a list of all the different sites as objects and their methods that are needed to get the information for each */

var firstAndPike = {
  location : '1st and Pike',
  sales : {
    minCust : 23,
    maxCust : 65,
    averageCookie : 6.3,
    hourlyCookies : []
  },
  //generates a random number based on the stores parameters for the number of cookies for an hour
  simulatedCookiesPerHour : function(){
    return(Math.ceil((Math.random() * (this.sales.maxCust - this.sales.minCust) + this.sales.minCust) * this.sales.averageCookie));
  },
  //this will generate and populate the hourly cookies.  This uses random information generated by the simulated cookies per hour function which then gets piushed to the hourly cookies array!
  calculateCookiesPerHour : function(){
    var numOfHours = hours.length;
    for(var i = 0; i < numOfHours; i++){
      this.sales.hourlyCookies.push(this.simulatedCookiesPerHour());
    }
  }
};

var seaTacAirport = {
  location : 'SeaTac Airport',
  sales : {
    minCust : 3,
    maxCust : 24,
    averageCookie : 1.2,
    hourlyCookies : []
  },
  //generates a random number based on the stores parameters for the number of cookies for an hour
  simulatedCookiesPerHour : function(){
    return(Math.ceil((Math.random() * (this.sales.maxCust - this.sales.minCust) + this.sales.minCust) * this.sales.averageCookie));
  },
  //this will generate and populate the hourly cookies.  This uses random information generated by the simulated cookies per hour function which then gets piushed to the hourly cookies array!
  calculateCookiesPerHour : function(){
    var numOfHours = hours.length;
    for(var i = 0; i < numOfHours; i++){
      this.sales.hourlyCookies.push(this.simulatedCookiesPerHour());
    }
  }
};

var seattleCenter = {
  location : 'Seattle Center',
  sales : {
    minCust : 11,
    maxCust : 38,
    averageCookie : 3.7,
    hourlyCookies : []
  },
  //generates a random number based on the stores parameters for the number of cookies for an hour
  simulatedCookiesPerHour : function(){
    return(Math.ceil((Math.random() * (this.sales.maxCust - this.sales.minCust) + this.sales.minCust) * this.sales.averageCookie));
  },
  //this will generate and populate the hourly cookies.  This uses random information generated by the simulated cookies per hour function which then gets piushed to the hourly cookies array!
  calculateCookiesPerHour : function(){
    var numOfHours = hours.length;
    for(var i = 0; i < numOfHours; i++){
      this.sales.hourlyCookies.push(this.simulatedCookiesPerHour());
    }
  }
};

var capitolHill = {
  location : 'Capitol Hill',
  sales : {
    minCust : 20,
    maxCust : 38,
    averageCookie : 2.3,
    hourlyCookies : []
  },
  //generates a random number based on the stores parameters for the number of cookies for an hour
  simulatedCookiesPerHour : function(){
    return(Math.ceil((Math.random() * (this.sales.maxCust - this.sales.minCust) + this.sales.minCust) * this.sales.averageCookie));
  },
  //this will generate and populate the hourly cookies.  This uses random information generated by the simulated cookies per hour function which then gets piushed to the hourly cookies array!
  calculateCookiesPerHour : function(){
    var numOfHours = hours.length;
    for(var i = 0; i < numOfHours; i++){
      this.sales.hourlyCookies.push(this.simulatedCookiesPerHour());
    }
  }
};

var alki = {
  location : 'Alki',
  sales : {
    minCust : 2,
    maxCust : 16,
    averageCookie : 4.6,
    hourlyCookies : []
  },
  //generates a random number based on the stores parameters for the number of cookies for an hour
  simulatedCookiesPerHour : function(){
    return(Math.ceil((Math.random() * (this.sales.maxCust - this.sales.minCust) + this.sales.minCust) * this.sales.averageCookie));
  },
  //this will generate and populate the hourly cookies.  This uses random information generated by the simulated cookies per hour function which then gets piushed to the hourly cookies array!
  calculateCookiesPerHour : function(){
    var numOfHours = hours.length;
    for(var i = 0; i < numOfHours; i++){
      this.sales.hourlyCookies.push(this.simulatedCookiesPerHour());
    }
  }
};
//Create store and push all the stores into the array
var stores = [];
stores.push(firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki);
//test stuff

//This for loop goes through each store and does 2 things, populates the numbers for the cookies
//As well as creates the appropriate HTML for storing the data into different ULs
stores.forEach(function(store){
  store.calculateCookiesPerHour();
  console.log('Results: ' + store.sales.hourlyCookies);
  //gets the salesStuff element in the code
  var bodyEL = document.getElementById('salesStuff');
  //creates 2 elements a P tag for the name of the location and a UL for that specific p tag
  var pEL = document.createElement('p');
  var ulEL = document.createElement('ul');
  //this sets the ID of the UL to the stores name for getting that ID for writing LI later
  ulEL.id = store.location;
  //write the store name into the P tag
  pEL.textContent = store.location;
  //Appends these items to the DOM
  pEL.appendChild(ulEL);
  bodyEL.appendChild(pEL);
});

//This function actually puts the information into the auto generated HTML from the previous loop
stores.forEach(function(store){
  //gets the elements that we want to add into by name as initiates the variables
  var ulEl = document.getElementById(store.location);
  var numOfHours = store.sales.hourlyCookies.length;
  var totalCookies = 0;
  //This loop adds into all the list items to the underorder list
  for (var i = 0; i < numOfHours; i++) {
    // create a <li> element
    var liEl = document.createElement('li');
    // give it content
    liEl.textContent = hours[i] + ': ' + store.sales.hourlyCookies[i] + ' Cookies';
    // put it in the DOM
    ulEl.appendChild(liEl);
    // keep running total
    totalCookies += store.sales.hourlyCookies[i];
  }
  //last line addition for total
  liEl = document.createElement('li');
  liEl.textContent = 'Total: ' + totalCookies;
  ulEl.appendChild(liEl);
});

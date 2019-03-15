'use strict';

/*
1: make an object to hold the store properties.
2: write a method to calculate hourly sales and store them in an array
3: write a method to render the store details to the page
*/
/*
There are some cookie stands that sell cookies throughout the day
-A day is from 6:00 am to 8:00 pm (14 hours)
-We know the maximum cookies per hour for each store
-We know the minimum cookies per hour for each store
-We know the avg number of cookies purchased per customer at each store
In order to have a better estimate of how many cookies to make, we need to use
a random number generator to calculate and estimate for cookies per hour for each
cookie stand.
1st and Pike
    minimum customers per hour
    maximum customers per hour
    avg cookies per customer
    Function to generate cookies per hour based on a random number of customers
    based on min and max from each store
*/

//Global variables
//var hours_in_workday = 14;

//function getRandomIntInclusive(min, max) {
// var min = this.minCustPerHr;
//  min = Math.ceil(min);
// max = Math.floor(max);
//  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
//}

//var firstAndPike = {
//storeName: 'First and Pike',
//  minCustPerHr: 23,
//maxCustPerHr: 65,
//avgCookieSale: 6.3,
// estCookieSalesPerHrArray: [],
//};

//firstAndPike.calculateSalesPerHour = function(){
//for (var i = 0; i < 14; i++){ // i += 1
//var randomCustomersPerHour = getRandomIntInclusive(this.minCustPerHr, this.maxCustPerHr);
//var randomSalesPerHour = randomCustomersPerHour * this.avgCookieSale;

//    var roundedSalesPerHour = Math.floor(randomSalesPerHour);

//  this.estCookieSalesPerHrArray.push(roundedSalesPerHour);
// }
//console.log('Number of Cust last hour: ' + randomCustomersPerHour);
//console.log('Sales last hour: ' + randomSalesPerHour);
//console.log(this.estCookieSalesPerHrArray);

//};

// A method to render the store to the page

// 1. get a reference to the parent //(make a parent); // section
// 1. create an element // p
// 1. give it content <p>Hi there </p>
// 1. connect the child to the element (appendChild)
// parent.appendChild(child)

//firstAndPike.renderEstSalesToPage = function(){
//var parent = document.getElementById('all-stores');
//var ul_el = document.createElement('ul');

// console.log(parent);
//console.log('hello');

//var title_list_item = document.createElement('li');
//console.log(title_list_item);
// title_list_item.textContent = 'First and Pike'
// title_list_item.textContent = this.storeName;
//  ul_el.appendChild(title_list_item);


//for(var i = 0; i < hours_in_workday; i++){
// var li_el = document.createElement('li');
// debugger;

//var cookies_this_hour = this.estCookieSalesPerHrArray[i];

// li_el.textContent = '6am 30 cookies';
// li_el.textContent = `${i+6}:00 ${cookies_this_hour} cookies`;
//  ul_el.appendChild(li_el);
//}

// after all lis are attached to the unordered list
// append the unordered list to the section
//parent.appendChild(ul_el);
// console.log(ul_el);


//};

// Reference the parent (section) x
// create an element(ul) x
// give content x
//  1. reference the parent (ul) x
//  2. create element ( li); x
//  3.give it content( 6am etc) x
//  parent.appendChild ul.appendChild(li) x
// append to the parent section.AC(ul)



//before I put data on the page, calculate the data
//firstAndPike.calculateSalesPerHour();
//firstAndPike.renderEstSalesToPage();
//firstAndPike.renderEstSalesToPage();
//firstAndPike.renderEstSalesToPage();
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var pike={
  minimum_custumers: 10,
  maximum_custumers: 100,
  average_sales: 6.3,
  sales_per_hour:[]
};

pike.randomiser=function(){
  var random=Math.random()*(this.maximum_custumers-this.minimum_custumers)+this.minimum_custumers*this.average_sales;
  var rounded_random=Math.floor(random);
  return rounded_random;
};

// function aka step 2
var sum=0;
pike.calculate_sales_per_hour=function(){
  for(var i=0; i<14; i++){
    // make this random
    var sales_this_hour=pike.randomiser();
    sum +=sales_this_hour;
    pike.sales_per_hour.push(sales_this_hour);
  }
};
var parentpike=document.getElementById('pike');
pike.render_to_page=function(){

  for(var t=0;t<14; t++){

    var list_item=document.createElement('li');
    list_item.textContent=hours[t]+pike.sales_per_hour[t];
    parentpike.appendChild(list_item);}
};
pike.calculate_sales_per_hour();
pike.render_to_page();
var list_item=document.createElement('li');
list_item.textContent=`total_hours${sum}`;
parentpike.appendChild(list_item);
var sumairport=0;
var airport={
  minimum_custumers: 10,
  maximum_custumers: 100,
  average_sales: 6.3,
  sales_per_hour:[]
};

airport.randomiser=function(){
  var random=Math.random()*(this.maximum_custumers-this.minimum_custumers)+this.minimum_custumers*this.average_sales;
  var rounded_random=Math.floor(random);
  return rounded_random;};

airport.calculate_sales_per_hour=function(){
  for(var i=0; i<14; i++){
    // make this random
    var sales_this_hour=airport.randomiser();
    sumairport +=sales_this_hour;
    airport.sales_per_hour.push(sales_this_hour);
  }
  this.total=sumairport;
};
var parentairport=document.getElementById('airport');
airport.render_to_page=function(){
  for(var t=0;t<14; t++){

    var list_item=document.createElement('li');
    list_item.textContent=hours[t]+airport.sales_per_hour[t];
    parentairport.appendChild(list_item);}
};
airport.calculate_sales_per_hour();
airport.render_to_page();
var list_itemairport=document.createElement('li');
list_itemairport.textContent=`total_hours${sum}`;
parentairport.appendChild(list_itemairport);
var sumcenter=0;
var center={
  minimum_custumers: 10,
  maximum_custumers: 100,
  average_sales: 6.3,
  sales_per_hour:[]
};

center.randomiser=function(){
  var random=Math.random()*(this.maximum_custumers-this.minimum_custumers)+this.minimum_custumers*this.average_sales;
  var rounded_random=Math.floor(random);
  return rounded_random;
};

// function aka step 2
center.calculate_sales_per_hour=function(){
  for(var i=0; i<14; i++){
    // make this random
    var sales_this_hour=center.randomiser();
    sumcenter +=sales_this_hour;
    center.sales_per_hour.push(sales_this_hour);
  }
  this.total=sumcenter;
};

center.render_to_page=function(){
  var parent=document.getElementById('center');
  for(var t=0;t<14; t++){
    var list_itemcenter=document.createElement('li');
    list_itemcenter.textContent=hours[t]+center.sales_per_hour[t];
    parent.appendChild(list_itemcenter);}

};
center.calculate_sales_per_hour();
center.render_to_page();
list_item=document.createElement('li');
list_item.textContent=`total_hours${sum}`;
parent.appendChild(list_item);

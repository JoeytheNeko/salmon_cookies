'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','8pm'] ;

var SalmonStore=function(minimum, maximum, average, name){
  this.minimum_custumers= minimum;
  this.maximum_custumers= maximum;
  this.average_sales= average;
  this.sales_per_hour=[];
  this.name=name;
};

SalmonStore.prototype.randomiser=function(){
  var random=Math.random()*(this.maximum_custumers-this.minimum_custumers)+this.minimum_custumers*this.average_sales;
  var rounded_random=Math.floor(random);
  return rounded_random;
};

SalmonStore.prototype.calculate_sales_per_hour=function(){
  for(var i=0; i<15; i++){
    // make this random
    var sales_this_hour=this.randomiser();
    sum +=sales_this_hour;
    this.sales_per_hour.push(sales_this_hour);
  }
};

SalmonStore.prototype.render_to_page=function(){
  var parent=document.getElementById(this.name);
  for(var t=0;t<15; t++){

    var list_item=document.createElement('li');
    list_item.textContent=hours[t]+this.sales_per_hour[t];
    parent.appendChild(list_item);
  }
  list_item=document.createElement('li');
  list_item.textContent=`total_hours${sum}`;
  parent.appendChild(list_item);
};

var pike=new SalmonStore(23, 65, 6.3, 'pike');
console.log(pike);

var airport=new SalmonStore(3, 24, 1.2, 'airport');
console.log(airport);

var center=new SalmonStore(11, 38, 3.7, 'center');
console.log(center);

var capital=new SalmonStore(20, 38, 2.3, 'capital');
console.log(capital);

var alki=new SalmonStore(2, 16, 4.6, 'alki');
console.log(alki);

// function aka step 2
var sum=0;

pike.calculate_sales_per_hour();
pike.render_to_page();

airport.calculate_sales_per_hour();
airport.render_to_page();

// function aka step 2
center.calculate_sales_per_hour();
center.render_to_page();

// Code your solution in this file!



const logDriverNames = function(drivers) {
  drivers.forEach(function (driver){
    console.log(driver.name);
  });
};

const logDriversByHometown = function(drivers,hometown){
  drivers.forEach(function (driver){
    if (driver.hometown === hometown ){
      console.log (driver.name);
    }
  });
};

 const driversByRevenue = function(drivers){
   return drivers.slice().sort(function(driver1, driver2){
     return driver1.revenue -  driver2.revenue;
   });
 };

 const driversByName = function(drivers){
   return drivers.slice().sort(function(driver1, driver2){
     return driver1.name.localeCompare(driver2.name);
   });
 };

const totalRevenue = function(drivers){
  return drivers.reduce(function(total, currentDriver){
    return currentDriver.revenue + total;
  }, 0);
};

const averageRevenue = function(drivers){
  return totalRevenue(drivers)/drivers.length;
}
// const averageRevenue = function(){};

test = [
{ name: 'Bobby',   hometown: 'Pittsburgh',  revenue: 3000 },
{ name: 'Sally',   hometown: 'New York',    revenue: 2000 },
{ name: 'Bobby',   hometown: 'Tampa Bay',   revenue: 5000 }
]

console.log(driversByRevenue(test))

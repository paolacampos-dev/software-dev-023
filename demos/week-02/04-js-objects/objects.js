//objects
//storing multiple items with a label

//each key-value pair is a property in our object
//keys are unique

//structure
//these object has 3 properties
const objectName = {
  key: "value", //property
  key: "value",
  key: "value",
};

//example

const city = {
  cityName: "Norwich",
  population: 250000,
  hasTrainStation: true,
  cityColours: ["yellow", "green"],
  companies: [
    {
      companyName: "Tech Educators",
      staffNumber: 3000,
      fields: ["education", "tech"],
    },
    {
      companyName: "Fuel Studios",
      staffNumber: 5,
      fields: ["infrastructure"],
    },
  ],
};

//acccess the data inside
//access the value of a property --> dot notation

//TODO: access the property cityName in city
city.cityName;
console.log(city.cityName); //Norwich

//TODO: access the property staffNumber in the first item of the companies property
city.companies[0].staffNumber;
console.log(city.companies[0].staffNumber); //3000

//add a new property
//dot notation

//TODO: add a property county to the city object

city.county = "Norfolk";

console.log(city);

//update an existing value inside an object
city.county = "East Anglia";

console.log(city);

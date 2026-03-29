//typescript basics
//file extension --> .ts / .tsx

//type declarations
//we need to add a type annotation to tell TS the type of data we are storing

//primitives
let myName: string = "Manny";

console.log(myName);
//when we specify a type to a variable, we cannot change the type later on!
myName = 8; //Type "number" is not assignable to type "string"

let myAge: number = 78;

let isInstructor: boolean = true;

//complex
const colours: string[] = ["blue", "purple", "yellow", "orange"];
const weather: Array<string> = ["cloudy", "sunny", "rainy"];
const misc: (string | number | boolean)[] = [5, "sun", true];
const misc2: Array<string | number | boolean> = [7, false, "sea"];

const manny: { location: string; age: number; isInstructor: boolean } = {
  location: "Norwich",
  age: 98,
  isInstructor: true,
};

const bertie: { location: string; age: number; isInstructor: boolean } = {
  location: "Leicester",
  age: 120,
  isInstructor: false,
};
//we could declare a type separately to be used in multiple objects
//the type needs to have the full list of potential properties
//if a property is optional (like office here), add the optional chaining operator (?.)
// type staffType = {
//   location: string;
//   age: number;
//   isInstructor: boolean;
//   office?: number;
// };

const tim: staffType = {
  location: "Norwich",
  age: 18,
  isInstructor: false,
};

const sam: staffType = {
  location: "Liverpool",
  age: 57,
  isInstructor: true,
};

const staff: staffType[] = [
  {
    location: "Lincoln",
    age: 52,
    isInstructor: true,
    office: 2,
  },
  {
    location: "Hull",
    age: 78,
    isInstructor: true,
  },
  {
    location: "Nottingham",
    age: 90,
    isInstructor: true,
  },
];

//functions

let x; //TS infers type "any" --> a catch-all type

//use the "any" type responsibly

function add(a: number, b: number) {
  return a + b;
}

add(2, 3);

//union types
//type declarion that specifies data type and values

type subjectsType = "physics" | "art" | "english" | "maths";

const course: subjectsType = "spanish"; // Type "spanish" is not assignable to type "subjectsType"

type staffType = {
  location: "Norwich" | "Liverpool" | "Hull" | "Lincoln" | "Nottingham";
  age: number;
  isInstructor: boolean;
  office?: number;
};

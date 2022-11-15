// Typescript

// ----------------------------------------------------------------

// Object
// ? Object is the type of all non-primitive

type Animal = {
  name: string;
  age: number;
  gender: "Male" | "Female";
  isCute?: boolean;
};

let cat: Animal = {
  name: "Caty",
  age: 2,
  gender: "Female",
  isCute: true,
};

let dog: {
  name: string;
  age: number;
  gender: "Male" | "Female";
  isCute?: boolean;
} = {
  name: "Dogy",
  age: 5,
  gender: "Male",
};

// ----------------------------------------------------------------

// By: Nikko Abucejo

export {};

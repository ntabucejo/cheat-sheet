// Typescript

// ----------------------------------------------------------------

// Enum: Default
// ? Data structures of letant length that hold a set of letant values

// * By default, enums begin numbering their members starting at 0

enum Color {
  Red,
  Blue,
  Green,
}
let favoriteColor = Color.Blue;
console.log(favoriteColor); // Output: 1

// ----------------------------------------------------------------

// Enum: Set Value
// ? Data structures of letant length that hold a set of letant values

// * Manually set all the values in the enum

enum Shape {
  Circle = "Circle",
  Triangle = "Triangle",
  Square = "Square",
}
let favoriteShape = Shape.Triangle;
console.log(favoriteShape); // Output: "Triangle"

// ----------------------------------------------------------------

// By: Nikko Abucejo

export {};

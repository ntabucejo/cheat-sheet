// Typescript

// ----------------------------------------------------------------

// Primitive: Boolean
// ? The most basic datatype is the simple true/false value

type IsBoy = boolean;

let isBoy: IsBoy = false;
let isCute: boolean = true;

// ----------------------------------------------------------------

// Primitive: String
// ? We use the type string to refer to these textual datatypes

type MyName = string;

let myName: MyName = "George";
let favoriteWord: string = "Hello, world!";

// ----------------------------------------------------------------

// Primitive: Number
// ? All numbers are stored as floating point numbers

type Age = number;

let age: Age = 12;
let height: number = 5.5;

// * These numbers can be Decimal (base 10), Hexadecimal (base 16) or Octal (base 8)

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// ----------------------------------------------------------------

// Primitive: Unknown
// ? Unknown is the type-safe counterpart of any
// ? Unknown can't be assigned to anything but itself and any

type PaymentAmount = unknown;

let paymentAmount: PaymentAmount = "Five hundred";
paymentAmount = 500;

let inDept: unknown = "No";
inDept = false;

// ----------------------------------------------------------------

// Primitive: Any
// ? The any type allows us to assign literally “any” particular value to that variable

let something: any = "Something!";
something = true;
something = 100;
something = ["Dog", "Cat", "Cow"];
something = { name: "George", age: 12 };

// ----------------------------------------------------------------

// Primitive: Void
// ? Void is a little like the opposite of any the absence of having any type at all
// ? void is used where there is no data
// ? Example if a function does not return any value then you can specify void as return type.

let greetings = (): void => {
  const word = "Hello, World!";
  console.log(word);
};
greetings(); // Output: "Hello, World!"

// * Declaring variables of type void is not useful because you can only assign undefined

let notUsable: void = undefined;

// ----------------------------------------------------------------

// Primitive: Undefined
// ? A variable is undefined when it's not assigned any value after being declared.

let secretWord;
console.log(secretWord); // Output: undefined

// ----------------------------------------------------------------

// Primitive: Null
// ? Null refers to a value that is either empty or doesn't exist. null means no value.

let noValue: null;

// ----------------------------------------------------------------

// By: Nikko Abucejo

export {};

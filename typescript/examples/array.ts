// Typescript

// ----------------------------------------------------------------

// Array
// ? Array types can be written in one of two ways
// ? In the first, you use the type of the elements followed by []
// ? The second way uses a generic array type Array<elemType>

type LuckyCode = number[];

let luckyCode: LuckyCode = [2, 8, 22];
let unluckyCode: Array<string> = ["6", "21", "13"];

// ----------------------------------------------------------------

// By: Nikko Abucejo

export {};

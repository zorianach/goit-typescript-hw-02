// Перетворіть цей код на TypeScript, вказавши відповідні типи для всіх змінних.

let age: number= 50;
let name: string = 'Max';
let toggle: boolean = true;
let empty: null = null;
let notInitialize: undefined;

let callback1 = (a: number): number => { return 100 + a };
const result1 = callback1(1);
// or
let callback2 = (a: string): string => { return 100 + a };
const result2 = callback2("1");

export {};

// Basic Types
let id: number = 5;
let company: string = 'Traversy Media';
let isPublishable: boolean = true;
let x: any = 'hello';

x = true;

let ids: number[] = [1, 2, 3];

//Tuple
let person: [string, number] = ['max', 25];
let employee: [string, number][] = [
  ['max', 25],
  ['dave', 25],
  ['jhon', 29],
];

//Union
let union: string | number = 'hello';

union = 12;

enum Direction {
  up,
  down,
  left,
  right,
}

enum Direction1 {
  up = 1,
  down,
  left,
  right,
}

//Enum's can also be assigned strings

// console.log(Direction.up);
// console.log(Direction.down);
// console.log(Direction.left);
// console.log(Direction.right);

// console.log(Direction1.up);
// console.log(Direction1.down);
// console.log(Direction1.left);
// console.log(Direction1.right);

//Objects

type User = {
  id: number;
  name: string;
};
/**
 * type same as
 * const user: { id: number; name: string } = {
  id: 1,
  name: 'max',
};
 */

const user: User = {
  id: 1,
  name: 'max',
};

//Type assertions
let cid: any = 12;
let customerId = <number>cid;
customerId = 3;
// option 2
// let customer = cid as number

function add(
  x: number,
  y: number
): number /**Last type infers returning type*/ {
  return x + y;
}

// void implies not specified return type
function log(message: string | number): void {
  console.log(message);
}

//Interfaces
interface UserInterface {
  readonly id: number; // makes id uneditable
  name: string;
  age?: number; //optional property
}
/**
 * type same as
 * const user: { id: number; name: string } = {
  id: 1,
  name: 'max',
};
 */

const user1: UserInterface = {
  id: 1,
  name: 'max',
};

interface MathFunc {
  (x: number, y: number): number;
}

const addFunc: MathFunc = (x: number, y: number): number => x + y;
const subtractFunc: MathFunc = (x: number, y: number): number => x - y;

//Generics
function GetArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numsArray = GetArray<number>([1, 2, 3]);
let strArray = GetArray<string>(['dave', 'dan', 'doug']);

numsArray.push(1);

/**
 * Define interface at component level when using React components
 * Pros are the type of interface defined at the component level
 *
 *
 * export interface Props {
 * name: string;
 * age?: number;
 * }
 *
 * const Header= (props: Props)=>{
 * ...
 * }
 */

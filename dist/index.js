"use strict";
// Basic Types
let id = 5;
let company = 'Traversy Media';
let isPublishable = true;
let x = 'hello';
x = true;
let ids = [1, 2, 3];
//Tuple
let person = ['max', 25];
let employee = [
    ['max', 25],
    ['dave', 25],
    ['jhon', 29],
];
//Union
let union = 'hello';
union = 12;
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 1] = "up";
    Direction1[Direction1["down"] = 2] = "down";
    Direction1[Direction1["left"] = 3] = "left";
    Direction1[Direction1["right"] = 4] = "right";
})(Direction1 || (Direction1 = {}));
/**
 * type same as
 * const user: { id: number; name: string } = {
  id: 1,
  name: 'max',
};
 */
const user = {
    id: 1,
    name: 'max',
};
//Type assertions
let cid = 12;
let customerId = cid;
customerId = 3;
// option 2
// let customer = cid as number
function add(x, y) {
    return x + y;
}
// void implies not specified return type
function log(message) {
    console.log(message);
}
/**
 * type same as
 * const user: { id: number; name: string } = {
  id: 1,
  name: 'max',
};
 */
const user1 = {
    id: 1,
    name: 'max',
};
const addFunc = (x, y) => x + y;
const subtractFunc = (x, y) => x - y;
//Generics
function GetArray(items) {
    return new Array().concat(items);
}
let numsArray = GetArray([1, 2, 3]);
let strArray = GetArray(['dave', 'dan', 'doug']);
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

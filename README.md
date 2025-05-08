## What are some differences between interfaces and types in TypeScript?

# Answer: TypeScript, type, and interface all define an object's structure. While the interface is extendable and primarily for object shapes, the type is more versatile, allowing unions, intersections, and more complex type definitions.

## Type in TypeScript :

## The typescript is 3 types :-
- 1. Any
- 2 .built-in
- 3. User-defined

The type system in TypeScript ensures the correctness of data types before they are used in a program. This helps reduce errors in the code and allows type-related issues to be caught early.
## Example: two TypeScript types are combined object.

type person1 = {
name:string;
age:number;
}

type person2 = {
email:string;
}
type person3 = person1 & person2
const person : person3 {
name:'Minhajul Islam Nirob',
age:20,
email: 'minhazmehadi63@gmail.com'
}
console.log (person)

## output:{"name": 'Minhajul Islam Nirob',"age": 20,"email": "minhazmehadi63@gmail.com"}


## Interface in TypeScript :

# TypeScript is a syntactical contract that entities must adhere to. It can only contain the declaration of properties, methods, and events, without any implementation.

## Example: In this example we demonstrates interface merging in TypeScript 

interface person1 {
name:string;
age: number;
}

interface person1 {
email:string;
}

const person:person1 = {
name:'Minhajul Islam Nirob',
age:20,
email: 'minhazmehadi63@gmail.com'
}

console.log (person)

## output:{"name": 'Minhajul Islam Nirob',"age": 20,"email": "minhazmehadi63@gmail.com"

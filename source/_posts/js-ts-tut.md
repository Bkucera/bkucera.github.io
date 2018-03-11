---
title: JavaScript and TypeScript for people with Java skills (ft. Party Parrots) 
date: 2018-03-10 14:16:49
tags: 
 - javascript
 - typescript

---
:congapartyparrot::congapartyparrot::congapartyparrot::congapartyparrot::congapartyparrot::congapartyparrot::congapartyparrot:


So you're looking to learn `TypeScript`, and you've got some OOP knowledge. Let's put it to work. :hammer:

![](/images/spongememe_java.png)
*Just remember to breathe.*
## What You'll Learn 
- How to write JavaScript
- Difference between Typescript and JavaScript
- How to unlock new levels of coding productivity
- Appropriate use of party parrots :parrot:

<!-- First off, you're gonna wanna shred that knowledge you've built up about Java-
Anything having to do with `abstract classes` `anonymous inner classes`, `lambda expressions`, throw it away. -->


## JavaScript is easy...
### Printing
To print something out, use `console.log("something")`
### Declaring Variables
When we declare a variable, we dont give it a type (`int`, `String`, `Boolean`, ect), we always use `let`.
We can also reassign **any variable** to **anything**, at **any time**, no questions asked. :dealwithitparrot:
```js
let a = 3
a = "a string"
console.log(a) 
//> a string
```
...unless we use `const`, which is similar to declaring a `final` variable in Java
```js
const b = 3
b = 100 //> error
```

### Types
As opposed to Java, there are only a few main types of variables in Javascript:
0. `Numbers`
0. `Strings`
0. `Booleans`
0. `Objects`
0. `Arrays`
0. `Functions`

**... yes `Functions` are variables** 

#### Numbers
Every `Number` is a floating point, no matter what.
No such thing as an `int` - If you need integer division, there's `Math.floor(num)`
```js
console.log( 5 / 2 ) //> 2.5
console.log( Math.floor(5 / 2)) 
//> 2
```

#### Strings
A `String` is just a string. There are some useful functions you can call from them as well. 
```js
let myString = "partyparrot_"
let repeated = myString.repeat(5)
console.log(repeated) 
//> partyparrot_partyparrot_partyparrot_partyparrot_partyparrot_
```

#### Booleans
A `boolean` is simply a `true/false` value. 
```js
let isParty = true
console.log(isParty) //> true
if (isParty) {
	console.log(":partyparrot:")
}
//> ":partyparrot:"
```

#### Objects
Getting trickier. An `Object` can be used like this:
```js
let myObj = {
	prop1: 123
	prop2: "my string",
	prop3: Math.floor(5/2)
}
myObj.prop1 //> 123
myObj.prop2 //> "my string"
myObj["prop3"] //> 2
```
Notice how an object is composed of `properties`, each with a `key`:`value` pair.
You can name these whatever you want, and access them in the two ways shown above.
You can assign new `properties` to objects, and accessing a nonexistant `property` will give you `undefined`:
```js
let myObj2 = {}
myObj2.myAwesomeKey //> undefined
myObj2.myAwesomeKey = "is right here"
myObj2.myAwesomeKey //> is right here
```
Since an `Object` can hold a `property` of any `type`, we can **nest Objects inside each other**:
```js
let obj1 = {
	name: "Happy Parrot"
}
let obj2 = {
	favObject: obj1
}
obj2.favObject.name //> Happy Parrot
```

#### Arrays
An `Array` acts similar to an `ArrayList` in Java, and is easily created by using brackets `[]`.
Notice `Arrays` have built-in functions on them as well.
```js
let arr = ['one', 2, 'three']
arr.length //> 3
arr[0] //> 'one'
arr[arr.length - 1] //> 'three'

let arr2 = []
arr2.push('one') //> ['one']
arr2.concat(['two', 3]) //> ['one', 'two', 3]
arr2.pop //> 3

let parrot = {name: "partyparrot"}
let arr3 = [partyparrot, {name: "evilparrot"}]
arr3[0].name //> "partyparrot"
arr3[1].name //> "evilparrot"

```


#### Functions
`Functions` can be passed around just like any other `Object`, and can be called with parens`()`.
There are many different ways to declare a `Function`, but we're going to do it the **cool way using `arrow syntax`**
```js
let listParrots = (parrot1, parrot2, parrot3) => {
	return "Parrots: " + [parrot1, parrot2, parrot3].join(', ')
}

listParrots("chill", "bored", "banana")
//> Parrots: chill, bored, banana
```

Ah, but we can make the above code prettier by:
* auto-wrapping all `parameters` into an `array`
* using `const` instead of `let` (good practice, since we don't expect to reassign the function)
```js
const listParrots = (...parrots) => {
	return "Parrots: " + parrots.join(',')
}
listParrots("chill", "bored", "banana")
//> Parrots: chill, bored, banana
```

But wait:point_up:, we can do **even better** by:
* removing the braces`{}` and using an `implicit return`
* using backticks**\`\`** to *template* the `string` (syntax highlighting not working below)
```ts
const listParrots = (...parrots) => `Parrots: ${parrots.join(',')}`

listParrots("chill", "bored", "banana")
//> Parrots: chill, bored, banana
```
**Much better** :smile:

![smelly](/images/smelly.png)
*A little too easy*


### An OOP Example
Make a variable named **polly** of type `Object` that:
 - has **name, mood** of `type` `String`
 - has **height, weight** of `type` `Number`
 - has **makeNoise** of `type` `Function`
```js
let polly = {
	name: "polly",
	mood: "grumpy",
	height: 10,
	weight: 200,
	makeNoise: () => {
		console.log("POLLY WANNA CRACKER")
	}
}
polly.mood //> grumpy
polly.makeNoise()
//> POLLY WANNA CRACKER
```

This is great, but... how can I get `polly` to tell me her own `name`?
Polly can't refer to herself as `polly` since that is refering to the name of the local variable. If the `Object` "polly" gets renamed or passed to a different scope, Polly looses reference to herself.
So this wouldn't work:
```js
let polly = {
	name: "polly",
	mood: "grumpy",
	height: 10,
	weight: 200,
	sayName: () => {
		console.log(polly.name)
	},
	makeNoise: () => {
		console.log("POLLY WANNA CRACKER")
	},
}

let pam = polly
polly = null
pam.sayName()
//> ERROR: Can't call function on type `null`
//> variable "polly" no longer exists
```

:thinking: It seems like we need `polly` to be able to maintain her own state or **variables**, so that she can remember who she is...It's like we need an object with state...
#### Clojures
**A ``Clojure`` is the term for an object with reference to its own variables**. In Java this is essentially an `instance` of `class`.
Instead of a Java `.class` file, we can simply use a `Function` to generate a `clojure`.

Let's use a real simple example. In this case, `makeParrot` is similar to a `constructor` call: 
```js
let makeParrot = (parrotName, parrotMood) => {
	let parrot = {}
	let name = parrotName
	let mood = parrotMood
	parrot.sayName = () => {
		console.log("My name is " + name)
	}
	parrot.getMood = () => {
		return mood
	}
	return parrot
}

let polly = makeParrot("Polly","grumpy")
polly.sayName()
//> My name is Polly
let frank = makeParrot("Frank","happy")
frank.getMood()
//> happy
```

### :construction: This post is still under construction, Please check back later. :construction:
:sadparrot:

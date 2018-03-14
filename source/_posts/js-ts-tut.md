---
title: JavaScript and TypeScript for people with Java skills (ft. Party Parrots)
date: 2018-03-10
tags: 
 - javascript
 - typescript

---

##### So you're looking to learn `TypeScript`, and you've got some OOP knowledge. Let's put it to work. :hammer:

![](/images/spongememe_java.png)
<em style="text-align:center;display:block">Just remember how to breathe.</em>

## What You'll Learn  
- How to write JavaScript
- Difference between Typescript and JavaScript
- How to unlock new levels of coding productivity
- Appropriate use of party parrots :parrot:

{% codeblock Array.map %}
array.map(callback[, thisArg])
{% endcodeblock %}


## JavaScript is easy...
### Printing
To print something out, use `console.log("something")`
### Declaring Variables
When we declare a variable, we dont give it a type (`int`, `String`, `Boolean`, etc), we always use `let`.
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
b = 100 //> error :fearful:
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
A `String` is just a string. There are some useful functions you can call from them as well. :point_down:
```js
let myString = "partyparrot_"
let repeated = myString.repeat(5)
console.log(repeated) 
//> partyparrot_partyparrot_partyparrot_partyparrot_partyparrot_
```

#### Booleans
A `boolean` is simply a `true/false` value.
We use a tripple equals sign `===` to test for equivalence, which will return a `boolean`.
Adding a `string` and a `number` is no problem.
```js
let isParty = "yes"+3 === "yes3" // <---- opposite of !==
console.log(isParty) //> true
if (isParty) {
 console.log("It's party time")
}
//> "It's party time"
```
:partyparrot:

#### Objects
Getting trickier :sweat_smile:. An `Object` can be used like this:
```js
let myObj = {
 prop1: 123,
 prop2: "my string",
 prop3: Math.floor(5/2)
}
myObj.prop1 //> 123
myObj.prop2 //> "my string"
myObj["prop3"] //> 2
```
Notice how an object is composed of `properties`, each with a `key`:`value` pair.
You can name these whatever you want, and access them in the two ways shown above.
You can assign new `properties` to objects, and accessing a nonexistent `property` will give you `undefined`:
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
arr2.pop() //> 3

let parrot = {name: "partyparrot"}
let arr3 = [parrot, {name: "evilparrot"}]
arr3[0].name //> "partyparrot"
arr3[1].name //> "evilparrot"

```


#### Functions
`Functions` can be passed around just like any other `Object`, and can be called with parens`()`.
There are many different ways to declare a `Function`, but we're going to do it the **cool way using `arrow syntax`**
```js
let listParrots = (parrot1, parrot2, parrot3) => {
 return "Parrots: " + [parrot1.name, parrot2.name, parrot3.name].join(', ')
}

listParrots(
 {name:"chill"},
 {name:"bored"},
 {name:"banana"}
)
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
**Much better** :thumbsup:

### Code Formatting
You don't need to worry about indentation or spacing, `JavaScript` engines are really smart. You don't even need **semi-colons**, even though `JavaScript` supports them.
```js
let obj1 = {name:"Perry",color:"blue"}
let obj2 = {color:"blue", name:"Frank"}
obj1.color === obj2.color //> true
```


![smelly](/images/smelly.png)
<span style="text-align:center;display:block">*A little too easy*...:eyes:
</span>


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
:x:
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
//> variable "polly" no longer exists :skull:
```

:thinking: It seems like we need `polly` to be able to maintain her own variables, or `state`, so that she can remember who she is...It's like we need an object with state...

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
:100: Notice that `frank` and `polly` are both `clojures`, AKA instances of `makeParrot()`. They both have their own state.
Also notice that we can only access what was returned in the `parrot` object.
```js
polly.name //> undefined
frank.mood //> undefined
frank.getMood //> [Function]
```

### :raised_hand: Wait. :raised_hand:
Before we move on, let's get ourselves a proper developer environment...

## Setting up
Since `JavaScript` is traditionally the language of the web; the best engines for running `JavaScript` code exist in **modern web browsers** such as Chrome, Firefox, Edge, ect.
However, we don't want to develop for the browser since we only care about running `JavaScript`, and we need more native accesses than the browser has (File I/O, executable permissions, ect).
In order to run `JavaScript` outside the browser, we use **Google Chrome's** `JavaScript` engine that's been wrapped with native accesses and packaged into a runtime called **"Nodejs"**.
Using **Nodejs** you can:

* Make scripts to rename or move files around
* Run a server implemented in JavaScript
* Download 3rd party libraries from [npm, the worlds largest software registry](https://www.npmjs.com/) (think Maven dependencies, but much better)
* Anything else you could need

### Download Nodejs
We will use **Node Version Manager** to install and manage **Nodejs**

##### Windows:
0. Download and install [NVM-Windows](https://github.com/coreybutler/nvm-windows/releases)
0. In command prompt:
```sh
$ nvm install latest
$ nvm use latest
```
0. Check that `node` and `npm` installed correctly
```sh
$ node --version
$ npm --version
```
If it printed a version to you, you're good to go :thumbsup:

##### Mac/Linux:
0. Install [nvm](https://github.com/creationix/nvm)
0. In terminal:
```
$ nvm install --lts
$ nvm alias default node
```

0. Check that `node` and `npm` installed correctly
```
$ node --version
$ npm --version
```
If it printed a version to you, you're good to go. :thumbsup:

**If you got it working, good job. Especially you Windows users** :thumbsupparrot:
### Developer Environment
0. We will use [Vscode](https://code.visualstudio.com/Download) as our editor. [Go ahead and download it](https://code.visualstudio.com/Download). Vscode is, incidently, the only decent product to come out of Microsoft in the last few decades.
0. Open Vscode. If you want, enable autosave in **File -> Auto Save**

### Run some code
0. Make a new folder for our project, call it `parrotSim`
0. Open the folder in Vscode
0. In the folder, make a file called `parrot.js`
0. Paste the following in `parrot.js`

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
```

<p data-height="265" data-theme-id="dark" data-slug-hash="XEdgWo" data-default-tab="js,result" data-user="Bkucera" data-embed-version="2" data-pen-title="XEdgWo" class="codepen">See the Pen <a href="https://codepen.io/Bkucera/pen/XEdgWo/">XEdgWo</a> by Ben Kucera (<a href="https://codepen.io/Bkucera">@Bkucera</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script> 


0. Press `ctrl+`` or go to **View -> Integrated Terminal**
0. Type `node parrot.js`
0. The terminal should print: "My name is Polly"
 

### Now for the TypeScript
TypeScript helps to make JavaScript more readable and less error prone by adding `type definitions` to `variables`

To run `Typescript` in `nodejs` we need to install `ts-node` and its `typescript` dependency:
``` js
$ npm install -g ts-node typescript
// installs the ts-node program globally alongside typescript dependency
```
bkucera/yzLe9tbj/1/

<script async src="//jsfiddle.net/bkucera/yzLe9tbj/1/embed/js,result/dark/"></script>

Let's convert our code to TypeScript.
Make a new file called `parrot.ts`.
Copy the contents of `parrot.js` into it.
Add some types!:pencil2:
```ts
let makeParrot = (parrotName: string, parrotMood: string) => {
  let name: string = parrotName
  let mood: string = parrotMood
  return {
  sayName: () => {
   console.log("My name is " + name)
  },
  getMood: () => {
   return mood
  }
  }
}

let polly = makeParrot("Polly", "grumpy")
polly.sayName()

```

Run the code:
```js
$ ts-node parrot.ts
//> "My name is Polly"
```

Notice we didn't have to add types to everything. We get out what we put in.
If we try doing this, we get an error now:
```ts
let frank = makeParrot(100, "happy") 
// :warning: MakeParrot "ParrotName" requires a string 
```
Sweet. :angelparrot:



It's really easy to follow OOP paradigms in a similar way to **Java**, but in a lot less code.

`TypeScript` also gives us the ability to define the structure of objects through `Interfaces`.
These are pretty similar to Java Interfaces, but much simpler.
Let's modify `parrot.ts`
```ts
interface Parrot {
 sayName: ()=>void;
 getMood: ()=>string
}

let makeParrot = (parrotName: string, parrotMood: string):Parrot => {
...
...
```
In **Vscode**, hover your cursor over the variables, and you can see the insights that adding **type definitions** adds to your code.
Run the code with `ts-node parrot.ts` to make sure it works.
:tada:

### Debugging :rotating_light:
You'll need to debug your code, and you probably don't want to rely on sprinkling `console.log`s everywhere (You've probably been there before with Java's `System.out.print`.)

#### Enter **Chrome Dev Tools**
0. In the **Google Chrome** browser, go the the URL `chrome://inspect`
![devtools](/images/devtools.png)
*Chome's devtools*

0. Click **Open dedicated DevTools for Node**
0. Add a `debugger` flag to your code in `parrot.ts`:

```ts
let polly = makeParrot("Polly", "grumpy")
debugger
polly.sayName()
```

Back in VsCode's terminal, type:

```
ts-node --inspect --inspect-brk parrot.ts
```

The window that popped up should now have some code in it, and be on a **break point**.
:confusedparrot:
Click the golden arrow to **continue from the breakpoint**, and you should get to the place you put the `debugger` flag

![devtools-arrow](/images/devtools-arrow.png)

Hover over variables in your code- notice the great information it has!
That's how you debug like a champ :chillparrot:

![devtools-power](/images/devtools-power.png)
:construction::construction::construction::construction::construction::construction::construction::construction:
### This post is still under construction
#### please check back later. 
:construction::construction::construction::construction::construction::construction::construction::construction:
:hardhatparrot:



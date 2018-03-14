interface Parrot {
	sayName: ()=>void;
	getMood: ()=>string
}

let makeParrot = (parrotName: string, parrotMood: string):Parrot => {
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
debugger
polly.sayName()

// used to define structure of an object
// also used as type

interface Named {
	readonly name: string;
}

interface Greetable extends Named {
	email: string;
	describe(phrase: string): void;
}

class Person implements Greetable {
	constructor(public name: string, public email: string, public age: number) {}

	describe(phrase: string): void {
		console.log(phrase + this.name);
	}
}

let user1: Greetable;
user1 = new Person('Hasibullah', 'hasibullah@test.com', 25);
// user1.name = 'Manu';
user1.describe("Hi-I'm ");

// INTERFACE AS FUNCTION TYPE
// type AddFn = (a: number, b: number) => number;
interface AddFn {
	(a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => {
	return n1 + n2;
};

import { Person, TypeString, TypeNumeric } from './interfaces';

const isOpen: boolean = false;
const myName: string = 'pat';
const myAge: number = 32.04;
const list: number[] = [0, 1, 2];
const me: [string, number, boolean] = ['pat', 32, false];

enum Job {
  WebDev,
  WebDeigner,
  PM
}

const job: Job = Job.WebDev;

const phone: any = 'any god damn thing we want';

// Functions in typeScript
const sayWord = (word?: string): string => {
  console.log(word || 'hello');
  return word || 'hello';
};
// sayWord('Pat');

// Default parameters
const defaultSayWord = (word = 'hello', ...otherStuff: string[]) => {
  console.log(otherStuff);
};
// defaultSayWord('Pat', 'Patrick');

// Implicit Types
let newName: any = 'pat';
newName = 'Patrick';
newName = 10;
let newNameTwo = newName;
newNameTwo = 10;

// Union Types
let unionType: string | number = 'Pat';
unionType = 'Patrick';
unionType = 10;
const makeMargin = (x: string | number) => `margin: ${x}px`;

// null types
let dog: string;
dog = 'Lucie';
dog = null;

const sayName = ({ name, age }: Person): Person => {
  return { name, age };
};
sayName({ name: 'Pat', age: 32 });
sayName({ age: 21, name: 'Pat' });

// Enums

const createNumeric = (contentType: TypeNumeric) => console.log(contentType);
createNumeric(TypeNumeric.Quiz);
createNumeric(0);

const createString = (contentType: TypeString) => console.log(contentType);
createString(TypeString.Quiz);

// Classes
class Team {
  private teamName: string; // cannot be seen from outside of the class, but can be used within
  readonly gameScore: number; // cannot be changed
  constructor(teamName) {
    this.teamName = teamName;
  }
  score(): string {
    const goal = 'goal';
    return goal;
  }
}
const redWings = new Team('Red Wings');
redWings.score();

// Generics
const outputInput = <T>(arg: T): T => {
  return arg;
};
outputInput('hello');
outputInput(3);
outputInput(true);

// Duck Typing
class Dancer implements Person {
  name: string;
  age: number;
}
let ElNino: Person = new Dancer();
const fake = {
  name: 'Pat',
  age: 30
};
ElNino = fake;

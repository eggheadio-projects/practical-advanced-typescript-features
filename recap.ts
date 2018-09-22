interface IPet {
  name: string;
  age: number;
  favoritePark?: string;
}

type ReadonlyPet = {
  +readonly [K in keyof IPet]-?: IPet[K];
}

const pet:IPet = {name: 'Buttons', age: 5};
const readonlyPet: ReadonlyPet = {
  name: 'Buttons', 
  age: 5,
  favoritePark: 'Central'
}

pet.age = 6;
readonlyPet.age = 6;

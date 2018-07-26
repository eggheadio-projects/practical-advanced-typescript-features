interface IAnimal {
  age: number;
  eat(): void;
  speak(): string;
}

type AnimalTypeAlias = {
  age: number;
  eat(): void;
  speak(): string;
};

let animalInterface: IAnimal;
let animalTypeAlias: AnimalTypeAlias;

animalInterface = animalTypeAlias;

export {};

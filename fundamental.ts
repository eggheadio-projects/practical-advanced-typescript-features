type Pet = IDog | ICat;

interface IAnimal {
  age: number;
  eat(): void;
  speak(): string;
}

function feedAnimal(animal: IAnimal) {
  animal.eat();
}

class Animal implements IAnimal {
  age = 0;

  eat() {
    console.log("nom..nom..");
  }

  speak() {
    return "roar";
  }
}

interface IDog {}
interface ICat {}

export {};

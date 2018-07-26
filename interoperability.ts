type Pet = {
  pose(): void;
};

interface IFeline {
  nightvision: boolean;
}

interface ICat extends IFeline, Pet {}

type Cat = IFeline & Pet;

class HouseCat implements IFeline, Pet {
  pose(): void {
    throw new Error("Method not implemented.");
  }
  nightvision: boolean;
}

export {};

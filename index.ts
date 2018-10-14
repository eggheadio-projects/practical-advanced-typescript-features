function generateId(seed: number) {
  return seed + "5";
}

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
type Id = ReturnType<typeof generateId>;

lookupEntity(generateId(10));
function lookupEntity(id: Id) {
  //query DB for entity by ID
}

//////////////

type UnpackPromise<T> = T extends Promise<infer K>[] ? K : any;
const arr = [Promise.resolve(true)];

type ExpectedBoolean = UnpackPromise<typeof arr>;
























export default {};



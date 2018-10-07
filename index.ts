const numbers = [2, 1]; // --> number[]

const someObject = {
    id: 21,
    name: 'Jonathan'
};

const someBoolean = true;

type Flatten<T> = T extends any[] ? T[number] :
    T extends object ? T[keyof T] :
    T;

// keyof T --> "id" | "name"
// T["id" | "name"] --> T["id"] | T["name"] --> number | string

type NumbersArrayFlattened = Flatten<typeof numbers>; // --> number
type SomeObjectFlattened = Flatten<typeof someObject>; // --> number | string
type SomeBooleanFlattened = Flatten<typeof someBoolean>; // --> boolean
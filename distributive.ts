type ArrayFilter<T> = T extends any[] ? T : never;

type StringsOrNumbers = ArrayFilter<string | number | string[] | number[]>;

/*
  1. distribute -> never | never | string[] | number[]
  2."never" is ignored -> string[] | number[]
*/
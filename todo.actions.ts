export interface Action {
  type: string;
}

export class Add implements Action {
  readonly type = "Add";
  constructor(public payload: string) {}
}

export class RemoveAll implements Action {
  readonly type = "Remove All";
}

export class RemoveOne implements Action {
  readonly type = "Remove One";
  constructor(public payload: number) {}
}

export type TodoActions = Add | RemoveAll | RemoveOne;

interface IEmail {
  from: string;
  to: string[];
  body: string;
}

interface ITodo {
  isCompleted: boolean;
  text: string;
  linkedEmail: IEmail;
}

interface IRootState {
  userId: string;
  showCompletedOnly: boolean;
  todoTypes: string[];
  todos: ITodo[];
  iconGrid: string[][];
}

type DeepReadonlyObject<T> = { readonly [K in keyof T]: DeepReadonly<T[K]> };

type DeepReadonly<T> = T extends (infer E)[][] ?
    ReadonlyArray<ReadonlyArray<DeepReadonlyObject<E>>> :
  T extends (infer E)[] ? ReadonlyArray<DeepReadonlyObject<E>> :
  T extends object ? DeepReadonlyObject<T> :
  T;

type IReadonlyRootState = DeepReadonly<IRootState>;

function rootReducer(action: any, state: IReadonlyRootState): IReadonlyRootState {
  // case action 1...
  // case action 2...
  return state;
}

let state: IReadonlyRootState;

state.showCompletedOnly = true;
state.userId = "newId";
state.todoTypes = [];
state.todoTypes[0] = "diff type";
state.todos[1].linkedEmail.body = "hi";
state.todos[1].linkedEmail.to[1] = "john@gmail.com";

state.todoTypes.map(todo => todo.toUpperCase());
state.iconGrid[0].map(icon => icon);
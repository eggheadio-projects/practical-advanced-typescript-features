interface TreeNode<T> {
  value: T;
  left: TreeNode<T>;
  right: TreeNode<T>;
}

interface LinkedListNode<T> {
  value: T;
  next: LinkedListNode<T>;
}

let node: LinkedListNode<string>;

interface Action {
  type: string;
}

// action1/state1 --> action2/state2 --> action3/state3

interface ListNode<T> {
  value: T;
  next: ListNode<T>;
  prev: ListNode<T>;
}

let action1 = { type: "LOGIN" };
let action2 = { type: "LOAD_POSTS" };

let actionNode1: ListNode<Action> = {
  value: action1,
  next: null,
  prev: null
};

let actionNode2: ListNode<Action> = {
  value: action2,
  next: null,
  prev: actionNode1
};

actionNode1.next = actionNode2;

let currentNode = actionNode2;

do {
  console.log(currentNode.value);
  currentNode = currentNode.prev;
} while (currentNode);

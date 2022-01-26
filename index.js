const assert = require("assert");

/*
  We estimate that this should take 30 to 60 minutes, but please take as much or as little time as you need.

  We have provided a fairly naive implementation of an expression tree for basic arithmetic in JavaScript and Ruby.
  Pick whichever language you feel more comfortable working in for this section.

  Apply your knowledge of good software design principles to refactor and improve the design of this code.
  Feel free to change anything in the file as part of your refactoring, apart from the final assertions that consume the tree.
*/

class Node {
  result() {
    throw new Error ("Function is not implemented");
  }
  toString() {
    throw new Error ("Function is not implemented");
  }
}

class ValueNode extends Node {
  constructor(value) {
    super();
    this.value = value;
  }
  result() { return this.value; }
  toString() { return this.value.toString(); }
}

class AddNode extends Node {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }
  result() { return this.left.result() + this.right.result(); }
  toString() { return `(${this.left.toString()} + ${this.right.toString()})`; }
}

class SubtractNode extends Node {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }
  result() { return this.left.result() - this.right.result(); }
  toString() { return `(${this.left.toString()} - ${this.right.toString()})`; }
}

class MultiplyNode extends Node {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }
  result() { return this.left.result() * this.right.result(); }
  toString() { return `(${this.left.toString()} x ${this.right.toString()})`; }
}

class DivideNode extends Node {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }
  result() { return this.left.result() / this.right.result(); }
  toString() { return `(${this.left.toString()} ÷ ${this.right.toString()})`; }
}

const tree = new DivideNode(
  new AddNode(
    new ValueNode(7),
    new MultiplyNode(
      new SubtractNode(new ValueNode(3), new ValueNode(2)),
      new ValueNode(5)
    )
  ),
  new ValueNode(6)
);

assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
assert.strictEqual(2, tree.result());




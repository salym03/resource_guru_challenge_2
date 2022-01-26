const createBinaryNodeTypeError = () => new TypeError("Only intance of Node can be passed to BinaryNodes");
const createValueNodeTypeError = () => new TypeError("Only numbers can be passed to a ValueNode");

class Node {
  result() {
    throw new Error("`result` function of Node is not implemented");
  }
  toString() {
    throw new Error("`toString` function of Node is not implemented");
  }
}

class BinaryNode extends Node {
  constructor (left, right) {
    super();
    if (!(left instanceof Node) || !(right instanceof Node)) {
      throw createBinaryNodeTypeError();
    }

    this._left = left;
    this._right = right;
  }
}

class ValueNode extends Node {
  constructor(value) {
    super();
    if (typeof value !== 'number') {
      throw createValueNodeTypeError();
    }
    this._value = value;
  }
  result() { return this._value; }
  toString() { return this._value.toString(); }
}

class AddNode extends BinaryNode {
  constructor(left, right) { super(left, right); }
  result() { return this._left.result() + this._right.result(); }
  toString() { return `(${this._left.toString()} + ${this._right.toString()})`; }
}

class SubtractNode extends BinaryNode {
  constructor(left, right) { super(left, right); }
  result() { return this._left.result() - this._right.result(); }
  toString() { return `(${this._left.toString()} - ${this._right.toString()})`; }
}

class MultiplyNode extends BinaryNode {
  constructor(left, right) { super(left, right); }
  result() { return this._left.result() * this._right.result(); }
  toString() { return `(${this._left.toString()} x ${this._right.toString()})`; }
}

class DivideNode extends BinaryNode {
  constructor(left, right) { super(left, right); }
  result() { return this._left.result() / this._right.result(); }
  toString() { return `(${this._left.toString()} ÷ ${this._right.toString()})`; }
}

module.exports = {
  ValueNode,
  AddNode,
  SubtractNode,
  MultiplyNode,
  DivideNode,
  createBinaryNodeTypeError,
  createValueNodeTypeError,
}
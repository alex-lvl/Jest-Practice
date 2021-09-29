class Calculator {
  constructor(operand1, operand2) {
    this.operand1 = operand1;
    this.operand2 = operand2;
  }

  add() {
    return this.operand1 + this.operand2;
  }

  subtract() {
    return this.operand1 - this.operand2;
  }

  divide() {
    return this.operand1 / this.operand2;
  }

  multiply() {
    return this.operand1 * this.operand2;
  }
}

export { Calculator } 
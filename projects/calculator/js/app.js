(function() {
  const model = {
    _firstOperand: null,
    _secondOperand: null,
    _operator: null,

    set firstOperand(operand) {
      this._firstOperand = operand;
    },

    get firstOperand(operand) {
      return this._firstOperand;
    },

    set secondOperand(operand) {
      this._secondOperand = operand;
    },

    get secondOperand() {
      return this._secondOperand;
    },

    set operator(operator) {
      this._operator = operator
    },

    get operator() {
      return this._operator;
    }
  };

  const controller = {

  };

  const view = {

  };
});

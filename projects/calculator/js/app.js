(function () {
  const model = {
    _mainOperand: null,
    _secondaryOperand: null,
    _operator: null,
    _strFormat: '',

    set mainOperand(operand) {
      this._mainOperand = operand;
    },

    get mainOperand() {
      return this._mainOperand;
    },

    set secondaryOperand(operand) {
      this._secondaryOperand = operand;
    },

    get secondaryOperand() {
      return this._secondaryOperand;
    },

    set operator(operator) {
      this._operator = operator
    },

    get operator() {
      return this._operator;
    },

    set strFormat(str) {
      this._strFormat = str;
    },

    get strFormat() {
      return this._strFormat;
    },

    clearStrFormat() {
      this.strFormat = '';
    },

    operateOn() {
      const
        first = this.mainOperand,
        second = this.secondaryOperand,
        opt = this.operator;

      let result;
      switch (opt) {
        case 'add': {
          result = this.mainOperand + this.secondaryOperand;
          break;
        }
        case 'substract': {
          result = this.mainOperand - this.secondaryOperand;
          break;
        }
        case 'divide': {
          if (this.secondaryOperand === 0)
            throw new Error('Numbers can\'t be divided 0');

          result = this.mainOperand / this.secondaryOperand;
          break;
        }
        case 'multiply': {
          result = this.mainOperand * this.secondaryOperand;
          break;
        }
      }

      return result;
    }
  };


/* CONTROLLER */
  const controller = {
    init() {
      numPadView.init();
    },

    setMainOperand(operand) {
      model.mainOperand = operand;
    },

    setSecondaryOperand(operand) {
      model.secondaryOperand = operand;
    },

    setOperator(opt) {
      model.operator = opt;
    },

    getOperator() {
      return model.operator;
    },

    getMainOperand() {
      return model.mainOperand;
    },

    getSecondaryOperand() {
      return model.secondaryOperand;
    },

    storeAsStringFormat(str, destroyRest) {
      if (destroyRest) {
        // This is useful when chaging the sign
        this.clearString();
        this.storeAsStringFormat(str);
        return;
      }

      if (model.strFormat && model.strFormat.length > 8) {
        // Accept no more numbers
        return;
      }

      // If there is no previous strings stored
      if (str === '') {
        model.strFormat = str
        return;
      }

      const arrayFormat = model.strFormat.split('');
      arrayFormat.push(str);
      model.strFormat = arrayFormat.join('');
    },

    getStringFormat() {
      return model.strFormat;
    },

    clearString() {
      model.clearStrFormat();
      numPadView.render();
    },

    changeSign() {
      const str = controller.getStringFormat();
      controller.storeAsStringFormat(-Number.parseFloat(str), true);
      numPadView.render();
    }
  };


  /* NUMPADVIEW */
  const numPadView = {
    init() {
      this.outputArea = document.querySelector('#output');
      const numPad = document.querySelector('.numpad');

      numPad.addEventListener('click', e => {
        const selectedCharacter = e.target.textContent;

        // Notice these are not keyboard interpreted plus and minus
        // TODO: Implement this!
        if (selectedCharacter === '+/−') {
          controller.changeSign();
          return;
        }

        // If AC is clicked
        if (selectedCharacter === 'AC') {
          controller.clearString();
          return;
        }

        // If it's not a number stop function execution for the rest
        if (Number.isNaN(Number(selectedCharacter))) {
          return;
        }

        controller.storeAsStringFormat(selectedCharacter);


        this.render();
      });
    },

    render() {
      const data = controller.getStringFormat() || '0';
      this.outputArea.textContent = data;
    }
  };

  const operatorView = {

  };

  controller.init();
})();
(function () {
  const model = {
    _mainOperand: null,
    _secondaryOperand: null,
    _operator: null,
    _strFormat: '',
    _actionPerformed: false,

    get actionPerformed() {
      return this._actionPerformed;
    },

    set actionPerformed(bool) {
      this._actionPerformed = bool;
    },

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
        first = Number.parseFloat(this.mainOperand),
        second = Number.parseFloat(this.secondaryOperand),
        opt = this.operator;

      let result;
      switch (opt) {
        case 'add': {
          result = first +second;
          break;
        }
        case 'substract': {
          result = first - second;
          break;
        }
        case 'divide': {
          if (this.secondaryOperand === 0)
            throw new Error('Numbers can\'t be divided 0');

          result = first / second;
          break;
        }
        case 'multiply': {
          result = first * second;
          break;
        }
        case 'percentage': {
          result = first / 100;
        }
      }

      this.actionPerformed = true;
      return result;
    }
  };


/* CONTROLLER */
  const controller = {
    init() {
      numPadView.init();
      operatorView.init();
    },

    setMainOperand(operand) {
      model.mainOperand = Number.parseFloat(operand);
    },

    setSecondaryOperand(operand) {
      model.secondaryOperand = Number.parseFloat(operand);
    },

    setOperator(opt) {
      if (opt === 'percentage') {
        this.doMath(true);
      }
      model.operator = opt;
      this.setMainOperand(this.getStringFormat());
      // Clear the string to select fresh second operand
      this.clearString();
      // }
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
      model.actionPerformed = false
      numPadView.render();
    },

    changeSign() {
      const str = controller.getStringFormat();
      controller.storeAsStringFormat(-Number.parseFloat(str), true);
      numPadView.render();
    },

    doMath(now) {
      let result;
      if (now) {
        result = model.operateOn();
        numPadView.render(result);
      }
      else if (model.mainOperand) {
        model.secondaryOperand = this.getStringFormat();
        result = model.operateOn();
        numPadView.render(result);
      }
    },

    calculationDone() {
      return model.actionPerformed;
    }


  };


  /* NUMPADVIEW */
  const numPadView = {
    init() {
      this.outputArea = document.querySelector('#output');
      const numPad = document.querySelector('.numpad');

      numPad.addEventListener('click', e => {
        const selectedCharacter = e.target.textContent;

        switch (selectedCharacter) {
          case '+/−': {
            controller.changeSign();
            return;
          }
          case 'AC': {
            controller.setMainOperand(null);
            controller.setSecondaryOperand(null);
            controller.setOperator(null);
            controller.clearString();
            controller.clearString();
            return;
          }
          case '%': {
            controller.setOperator('percentage');
            return;
          }
        }

        // If it comes this far it means it might be a number
        // If it's not a number stop function execution for the rest
        if (Number.isNaN(Number(selectedCharacter))) {
          return;
        }

        if (controller.calculationDone()) {
          controller.clearString();
        }

        controller.storeAsStringFormat(selectedCharacter);
        this.render();
      });
    },

    render(result) {
      if (result) {
        this.outputArea.textContent = result;
        return;
      }

      const data = controller.getStringFormat() || '0';
      this.outputArea.textContent = data;
    }
  };

  const operatorView = {
    init() {
      const operatorPad = document.querySelector('.operators');

      operatorPad.addEventListener('click', e => {
        const optType = e.target.textContent;

        switch (optType) {
          case '÷': {
            try {
              controller.setOperator('divide');
            } catch (e) {
              alert('You should\'t be dividing numbers with 0!');
            }
            return;
          }
          case '⨯': {
            controller.setOperator('multiply');
            return;
          }
          case '−': {
            controller.setOperator('substract');
            return;
          }
          case '+': {
            controller.setOperator('add');
            return;
          }
          case '=': {
            controller.doMath();
            return;
          }
        }
      });
    }
  };

  controller.init();
})();

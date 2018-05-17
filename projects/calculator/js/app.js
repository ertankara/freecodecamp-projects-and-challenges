(function() {
  const model = {
    _mainOperand: null,
    _secondaryOperand: null,
    _operator: null,

    get operator() {
      return this._operator;
    },

    set operator(operator) {
      return this._operator = operator;
    },

    get mainOperand() {
      return this._mainOperand;
    },

    set mainOperand(operand) {
      this._mainOperand = operand;
    },

    get secondaryOperand() {
      return this._secondaryOperand;
    },

    set secondaryOperand(operand) {
      this._secondaryOperand = operand;
    },
  };


  const control = {
    strFormat: '',

    init() {
      outputView.init();
      appView.init();
    },

    // ==== OPERATEON BEGIN ====
    operateOn(opt) {
      const first = model.mainOperand;
      const second = model.secondaryOperand;
      const operator = model.operator;
      console.log('first: ', first,'second: ', second,'third: ', operator);
      if ((first) || !second && !operator) {
        outputView.render(first || '0');
        this.resetOperands();
        this.strFormat = '';
        outputView.clearText();
      }
      if (first == undefined || second == undefined || operator == undefined) {
        return;
      }

      let result;


      try {
        switch (operator) {
          case 'add': {
            result = first + second;
            break;
          }
          case 'substract': {
            result = first - second;
            break;
          }
          case 'divide': {
            if (second === 0) {
              throw new Error('Error!');
            }
            result = first / second;
            break;
          }
          case 'multiply': {
            result = first * second;
            break;
          }
        }
        if (result > 999999999)
          throw new Error('Too big!');
      } catch(e) {
        outputView.render(e.message);
        this.resetOperands();
        this.strFormat = '';
        outputView.clearText();
        return 1;
      }

      // this.resetOperands();
      outputView.render(Number.isInteger(result) ? result : result.toFixed(2));
      model.mainOperand = result;
      model.secondaryOperand = null;
      outputView.clearText();
      console.log(model.mainOperand, model.secondaryOperand);
      return 0;
    },
    // ==== OPERATEON END ====

    setOperator(operator) {
      if (model.mainOperand && model.secondaryOperand) {
        this.operateOn();
        model.operator = operator;
        return;
      }
      if (model.mainOperand !== null) {
        model.operator = operator;
      }
    },

    setOperand() {
      if (model.mainOperand !== null && this.numberFormat()) {
        model.secondaryOperand = this.numberFormat();
        this.strFormat = '';
        return;
      }

      if (this.numberFormat()) {
        model.mainOperand = this.numberFormat();
        outputView.render('0');
        this.strFormat = '';
        outputView.clearText();
      }
    },

    percentify() {
      const num = this.numberFormat();
      if (!num)
        return;
      outputView.render(num / 100);
      this.resetOperands();
      this.strFormat = '';
    },

    changeSign() {
      const num = this.numberFormat();
      if (num === null || Number.isNaN(num))
        return;
      outputView.render(-num);
      this.strFormat = String(-this.numberFormat());
      // this.resetOperands();
      // this.strFormat = '';
    },

    clear() {
      this.resetOperands();
      outputView.render('0');
    },

    resetOperands() {
      model.mainOperand = null;
      model.secondaryOperand = null;
      model.operator = null;
    },

    stringFormat(str) {
      if (str.indexOf(',') !== -1) {
        str = str.replace(/,/g, '.');
      }
      this.strFormat = str;
    },

    numberFormat() {
      return Number.parseFloat(this.strFormat);
    }
  };

  const outputView = {
    clearText() {
      this.currentText = '';
    },

    init() {
      this.currentText = '';
      this.outputArea = document.querySelector('#output');
      this.numPad = document.querySelector('.numpad');

      this.numPad.addEventListener('click', e => {
        e.preventDefault();
        const clickedButtonContent = e.target.textContent;

        switch (clickedButtonContent) {
          case 'AC': {
            control.clear();
            this.currentText = '';
            break;
          }
          case '+/−': {
            control.changeSign();
            break;
          }
          case '%': {
            control.percentify();
            break;
          }
          case ',': {
            if (this.currentText.indexOf(',') === -1) {
              this.currentText = this.currentText + ',';
              this.render();
            }
            break;
          }
        }

        if (Number.isNaN(Number(clickedButtonContent))) {
          return;
        }

        if (this.currentText) {
          if (this.currentText.length > 8)
            return;
          const eachNum = this.currentText.split('');
          eachNum.push(clickedButtonContent);
          this.currentText = eachNum.join('');
          this.render();
          return;
        }

        this.currentText = clickedButtonContent;
        this.render();
      });
    },

    render(content) {
      //this.outputArea.textContent = '';
      // This should happen through `control`so no new data will be
      // introduced so it's safe to not to call 'getNumber'
      // method here
      if (content !== undefined) {
        if (String(content).indexOf('.') !== -1) {
          content = String(content).replace(/\./g, ',');
        }
        this.outputArea.textContent = content;
        return;
      }
      this.outputArea.textContent = this.currentText;
      control.stringFormat(this.currentText);
    }
  };


  const appView = {
    init() {
      this.operatorPad = document.querySelector('.operators');
      this.operatorPad.addEventListener('click', e => {
        e.preventDefault();
        const opt = e.target.textContent;
        control.setOperand();
        switch (opt) {
          case '÷': {
            control.setOperator('divide');
            break;
          }
          case '⨯': {
            control.setOperator('multiply');
            break;
          }
          case '−': {
            control.setOperator('substract');
            break;
          }
          case '+': {
            control.setOperator('add');
            break;
          }
          case '=': {
            control.operateOn();
            break;
          }
        }
      });
    },
  }

  control.init();
})();

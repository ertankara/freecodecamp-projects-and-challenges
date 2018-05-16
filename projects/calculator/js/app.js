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
    onStart:false,

    init() {
      outputView.init();
      appView.init();
    },

    operateOn(opt) {
      const first = model.mainOperand;
      const second = model.secondaryOperand;
      const operator = model.operator;

      if (!first || !second || !this.operateOn) {
        return;
      }


      const result = first

    },

    getOperator() {
      const first = model.mainOperand;
      if (!first) {
        return;
      }

      model.operator = '';
    },

    getNumber(num) {
      // If first operand is set, then set the second one
      if (model.mainOperand) {
        model.secondaryOperand = num;
        return;
      }
      model.mainOperand = num;
    },

    clear() {
      this.mainOperand = null;
      this.result = null;
      outputView.render('0');
    },

    updateOutputView(x) {
      outputView.render(x);
    }
  };

  const outputView = {
    init() {
      this.currentText = '';
      this.outputArea = document.querySelector('#output');
      this.numPad = document.querySelector('.numpad');

      this.numPad.addEventListener('click', e => {
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
        this.render(clickedButtonContent);
      });
    },

    render(content) {
      // This should happen through `control`so no new data will be
      // introduced so it's safe to not to call 'getNumber'
      // method here
      if (content) {
        this.outputArea.textContent = content;
        return;
      }
      this.outputArea.textContent = this.currentText;
      control.getNumber();
    }
  };


  const appView = {
    init() {
      this.operatorPad = document.querySelector('.operators');
      this.optType;
      this.operatorPad.addEventListener('click', e => {
        console.log('dead in the sea');
        const opt = e.target.textContent;
        switch (opt) {
          case '÷': {
            this.optType = 'divide';
            break;
          }
          case '⨯': {
            this.optType = 'multiply';
            break;
          }
          case '−': {
            this.optType = 'substract';
            break;
          }
          case '+': {
            this.optType = 'add';
            break;
          }
          case '=': {
            control.operateOn();
            break;
          }
        }
      });
    },

    render() {
      control.operateOn(this.optType);
    }
  }

  control.init();
})();

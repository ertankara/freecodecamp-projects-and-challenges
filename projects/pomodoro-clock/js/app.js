(() => {
  const model = {
    init() {
      if (!localStorage.pomodoro) {
        // If there are no previous settings then assign it with
        // default values
        const pomodoro = {
          pomodoroLength: 25,
          breakLength: 5,
          longBreakLength: 15,
          longBreakAfter: 4
        };

        localStorage.pomodoro = JSON.stringify(pomodoro);
      }
    },

    renderData() {
      const data = JSON.parse(localStorage.pomodoro);
      $('#pomodoro').text(data.pomodoroLength);
      $('#short-break').text(data.breakLength);
      $('#long-break').text(data.longBreakLength);
      $('#until-long-break').text(data.longBreakAfter);
    },

    renderView() {
      const data = JSON.parse(localStorage.pomodoro);
      console.log(data);
      $('.time').text(data.pomodoroLength + ':' + '00');
    }
  };


  function changeData(selector, action) {
    let currentVal = Number(selector.text());

    if (action === 'decrease') {
      if (currentVal > 1) {
        currentVal--;
      }
    }
    else {
      if (currentVal < 59) {
        currentVal++;
      }
    }

    selector.text(currentVal);
  }


  function formatTime(secondsLeft) {
    return {
      minutes: String(Math.floor(secondsLeft / 60)).padStart(2, '0'),
      seconds: String(secondsLeft % 60).padStart(2, '0')
    };
  }


  const main = function() {
    $('.gear').click(function() {
      $('.settings-modal').fadeIn(600);
    });


    $('#save-button').click(function() {
      $('.settings-modal').fadeOut(600);
    });

    $(document).keyup(function(e) {
      if (e.keyCode === 27)
        $('.settings-modal').fadeOut(600);
    });


    let interval;

    $('.timer-button').click(function() {
      if ($(this).text() === 'Reset') {
        clearInterval(interval);
        const data = JSON.parse(localStorage.pomodoro);
        $('.time').text(data.pomodoroLength + ':' + '00');
        $('.fill').css('height', '0%');
        $('.timer-button').text('Start Timer');
        return;
      }

      const seconds = Number.parseInt($('.time').text()) * 60,
            delta = 1,
            increaseAmount = Number.parseFloat(delta * 100 / seconds);

      if (seconds === 0) {
        console.log('entered');
        return;
      }

      $('.timer-button').text('Reset');

      let currentProgress = increaseAmount,
          counter = 0;

      interval = setInterval(() => {
        counter += delta;
        if (counter >= seconds) {
          clearInterval(interval);
        }

        let printableTime = formatTime(seconds - counter);

        $('.time').text(printableTime.minutes + ':' + printableTime.seconds);

        currentProgress += increaseAmount;
        $('.fill').css('height', currentProgress + '%');
      }, delta * 1000);
    });

    // Update preference
    $('#save-button').click(function() {
      const newData =  {
        pomodoroLength: $('#pomodoro').text(),
        breakLength: $('#short-break').text(),
        longBreakLength: $('#long-break').text(),
        longBreakAfter: $('#until-long-break').text()
      };
      localStorage.pomodoro = JSON.stringify(newData);
      model.renderView();
    });



    /* INCREASE -- DECREASE BEGIN */

    $('#decrease-pomodoro').click(function() {
      changeData($('#pomodoro'), 'decrease');
    });


    $('#increase-pomodoro').click(function() {
      changeData($('#pomodoro'), 'increase');
    });


    $('#decrease-short').click(function() {
      changeData($('#short-break'), 'decrease');
    });


    $('#increase-short').click(function() {
      changeData($('#short-break'), 'increase');
    });


    $('#decrease-long').click(function() {
      changeData($('#long-break'), 'decrease');
    });


    $('#increase-long').click(function() {
      changeData($('#long-break'), 'increase');
    });


    $('#decrease-until').click(function() {
      changeData($('#until-long-break'), 'decrase');
    });


    $('#increase-until').click(function() {
      changeData($('#until-long-break'), 'increase');
    });

    /* INCREASE -- DECREASE END */

    // Initilize data
    model.init();
    model.renderData();
  };


  $(document).ready(main);
})();

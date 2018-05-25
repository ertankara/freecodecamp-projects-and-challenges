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


    let interval,
        totalPomodoros = 1;

    function startBreak() {
      const data = JSON.parse(localStorage.pomodoro);
      $('.time').text(data.breakLength);
      if (totalPomodoros == data.longBreakAfter) {
        timeEventHandler('long-break');
        totalPomodoros = 1;
      } else {
        timeEventHandler('short-break');
      }
      totalPomodoros++;
    }


    $('.timer-start-button').click(function() {
      if ($(this).text() !== 'Reset') {
        timeEventHandler('pomodoro');
      }
      else {
        timeEventHandler();
      }
    });


    function timeEventHandler(timerType) {
      if (!timerType && $('.timer-start-button').text() === 'Reset') {
        clearInterval(interval);
        const data = JSON.parse(localStorage.pomodoro);
        $('.time').text(data.pomodoroLength + ':' + '00');
        $('.fill').css('height', '0%');
        $('.timer-start-button').text('Start Session');
        return;
      }

      const data = JSON.parse(localStorage.pomodoro);
      let seconds;

      if (timerType === 'pomodoro') {
        seconds = data.pomodoroLength * 60;
      }
      else if (timerType === 'short-break') {
        seconds = data.breakLength * 60;
      }
      else if (timerType === 'long-break') {
        seconds = data.longBreakLength * 60;
      }
      const delta = 1,
            increaseAmount = Number.parseFloat(delta * 100 / seconds);

      if (seconds === 0) {
        return;
      }

      $('.timer-start-button').text('Reset');

      let currentProgress = increaseAmount,
          startingTime = Date.now(),
          endingTime = startingTime + (seconds * 1000),
          timeLeft;

      interval = setInterval(() => {
        timeLeft = endingTime - Date.now();
        if (timeLeft < 0) {
          clearInterval(interval);
          if (timerType === 'short-break' || timerType === 'long-break') {
            timeEventHandler('pomodoro');
          }
          else {
            startBreak();
          }

          new Audio('audio/bell.mp3').play();
        }
        let printableTime = formatTime(Math.round(timeLeft / 1000));
        console.log(printableTime);
        $('.time').text(printableTime.minutes + ':' + printableTime.seconds);

        currentProgress += increaseAmount;
        $('.fill').css('height', currentProgress + '%');
      }, delta * 1000);
    }

    // Update preference
    $('#save-button').click(function() {
      const newData =  {
        pomodoroLength: $('#pomodoro').text(),
        breakLength: $('#short-break').text(),
        longBreakLength: $('#long-break').text(),
        longBreakAfter: $('#until-long-break').text()
      };
      localStorage.pomodoro = JSON.stringify(newData);
      if (!interval)
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
      changeData($('#until-long-break'), 'decrease');
    });


    $('#increase-until').click(function() {
      changeData($('#until-long-break'), 'increase');
    });

    /* INCREASE -- DECREASE END */

    // Initilize data
    model.init();
    model.renderData();
    model.renderView();
  };


  $(document).ready(main);
})();

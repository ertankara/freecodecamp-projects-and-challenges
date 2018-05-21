(() => {
  const main = function() {

    const currentUserPosition = function _currentUserPosition() {
      return new Promise(function(resolve, reject) {
        navigator.geolocation.getCurrentPosition(function(position) {
            if (position) {
              resolve(position);
            }
        });

        setTimeout(() => {
          // If no response in 10 seconds then reject it
          reject('Failed to retrieve location');
        }, 10000);
      });
    };



    const makeRequest = function _makeRequest(response) {
      const editedURL =
        `https://fcc-weather-api.glitch.me/api/current?lat=${response.coords.latitude}&lon=${response.coords.longitude}`;

      $.ajax({
        type: "GET",
        url: editedURL,
        dataType: "json",
        success: handleData,
        error: function() {
          console.log('Failed to retrieve local weather');
        }
      });
    };



    const handleData = function _handleData(response) {
      console.log(response);

      const degree = Number.parseInt(response.main.temp);
      let windDirection;

      if (response.wind.deg < 90) {
        windDirection = 'North East';
      }
      else if (response.wind.deg < 180) {
        windDirection = 'South East';
      }
      else if (response.wind.deg < 270) {
        windDirection = 'South West';
      }
      else {
        windDirection = 'North West';
      }

      $('.country')
        .text(response.sys.country);

      $('#degree')
        .text(degree + '℃');


      $('.city')
        .text(response.name);

      $('.weather-icon')
        .attr('src', response.weather[0].icon);

      $('.weather-details')
        .append(
          '<li class="list-item">-- ' +
            response.weather[0].description +' --</li>',

          '<li class="list-item">Pressure: ' +
            response.main.pressure + ' hPA</li>',

          '<li class="list-item">Humidity: ' +
            response.main.humidity +'%</li>',

          '<li class="list-item">Visibility: ' +
            response.visibility +  '</li>',
            '<li class="list-item">Wind: '  +
            windDirection + ' / ' +
            response.wind.speed + ' kph</li>'
        );
    };



    const getWeatherInfo = function _getWeatherInfo() {
      currentUserPosition()
      .then(makeRequest)
      .catch(e => {
        if (e === 'Failed to retrieve location') alert(e);
        else console.log(e);
      });
    };



    $('label > input').click(function(e) {
      const currentDegree = Number.parseInt($('#degree').text());
      if (!currentDegree) {
        e.preventDefault();
        return;
      }
      if ($(this).prop('checked') === true) {
        const fahr = Math.round((9 / 5) * currentDegree + 32);
        $('#degree')
          .text(fahr + '℉');
      }
      else {
        const celsius = Math.round((currentDegree - 32) * (5 / 9));
        $('#degree')
          .text(celsius + '℃');
      }
      console.log(currentDegree);
    });


    // Get data on start
    getWeatherInfo();

    // Make sure the checkbox is unchecked at the start
    $('input').prop('checked', false);
  };

  $(document).ready(main);

})();

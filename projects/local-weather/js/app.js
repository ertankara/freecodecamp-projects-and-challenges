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
  };


  currentUserPosition()
  .then(makeRequest)
  .catch(e => {
    if (e === 'Failed to retrieve location') alert(e);
    else console.log(e);
  });
};

$(document).ready(main);

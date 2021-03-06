
// Foursquare API Info
const clientId = 'QRTMAEMLVSOSZNU5ISWABQ5PIQIEYSLWOXJEO2K3YKKMDJY5';
const clientSecret = '4GTMNASYVDFXXKKXNR2XNPXFOTPM1GT12GTVJPVS04I33LUO';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';


// APIXU Info
const apiKey = '4698a55916a8418b8a8195532181510';
const forecastUrl = 'http://api.apixu.com/v1/current.xml?key=';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDivs = [$("#weather1"), $("#weather2"), $("#weather3"), $("#weather4")];
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

/*const formatDate = () =>{
  const todayDate = new Date();
  let month = todayDate.getMonth();
  if(month < 10){
    month = "0" + month;
  };
  const year = todayDate.getFullYear();
  const day = todayDate.getDate();
  if(day < 10){
    day = "0" + day;
  }
  const fullDate = `${year}${month}${day}`
  return fullDate;
}
*/

const today = new Date();
today.month = today.getMonth();
today.year = today.getFullYear();
today.day = today.getDate();
console.log(today.day);

const formatDate = () =>{
  let month = today.month;
  if(month < 10){
    month = "0" + month;
  };
  const year = today.year;
  let day = today.day;
  if(day < 10){
    day = "0" + day;
  };
  const fullDate = `${year}${month}${day}`;
  return fullDate;
}

const date = formatDate();


// Add AJAX functions here:
const getVenues = async() => {
  const city = $input.val();
  const urlToFetch = `${url}${city}&limit=5&client_id=${clientId}&client_secret=${clientSecret}&v=${date}` 
  try{
    const response = await fetch(urlToFetch);
    if(response.ok){
      console.log(response);
    }
    const jsonResponse = await response.json();
    const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
    return venues;
  }
  
  
  catch(error){
    console.log(error);
  }
}

const getForecast = async () => {
  const urlToFetch = `${forecastUrl}${apiKey}&q=${$input.val()}&days=4&hour=11`
  try{
    console.log(urlToFetch);
    const response = await fetch(urlToFetch)
    if(response.ok){
      const jsonResponse = await response.json();
      console.log(jsonResponse);
      const days = jsonResponse.forecase.forecastday;
      return days
    }
  }
  catch(error){
    console.log(error);
  }
}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:
    const venue = venues[index];
    const venueIcon = venue.categories[0].icon;
    const venueImgSrc = venueIcon.prefix + 'bg_64' + venueIcon.suffix;
    let venueContent = createVenueHTML(venue.name, venue.location, venueImgSrc);
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (days) => {
  $weatherDivs.forEach(($day, index) => {
    // Add your code here:
    //console.log(today.getDay());
    //const currentDay = weekDays[today.getDay()]
    const currentDay = days[index];
    console.log('currentDay', currentDay);


    let weatherContent = createWeatherHTML(currentDay);
    $day.append(weatherContent);
  });
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDivs.forEach(day => day.empty());
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues()
  getForecast().then(forecast =>
    renderForecast(forecast));
  return false;
}

$submit.click(executeSearch)

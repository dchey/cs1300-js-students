var corsApiUrl = "https://cors-anywhere.herokuapp.com/";
// TODO: REPLACE YOUR TOKEN
var apiToken = "?token=dGcBCjgQzZUw8T4_CNM5OMVBH2sDc3ioN5X585T_2z0";

// CORS stands for "cross origin resource sharing" -- you'll be making http requests in order
// DON'T CHANGE THIS: fetches the data from the API endpoint
const doCORSRequest = (options) => {
  var x = new XMLHttpRequest();
  x.open("GET", corsApiUrl + options.url);
  x.send(options.data);
  return x;
};

// Example promise that executes the GET request above and waits for it to finish before resolving
const corsPromise = () =>
  new Promise((resolve, reject) => {
    const request = doCORSRequest({
      url: "https://trefle.io/api/v1/plants" + apiToken,
    });
    resolve(request);
  });

// THIS IS SOME SAMPLE CODE FOR HOW TO USE PROMISES -- feel free to adapt this into a function!
corsPromise().then(
  (request) =>
    (request.onload = request.onerror = function () {
      // TODO: ADD FUNCTION, ETC. FOR WHATEVER YOU WANT TO DO ONCE THE DATA IS RECEIVED

      // access JSON data
      var data = JSON.parse(this.response).data;

      //function
      data.forEach(getPlants)

    })
);

//// TODO: ADD WHATEVER FUN CONTENT YOU WANT ////
function getPlants(plant) {
  var div = document.createElement('div')
  div.className = "item";

  //get images
  var url = plant.image_url
  if (url !== null) {
    var img = document.createElement('img'); 
    img.src = url;
    div.appendChild(img);
  }

  //adding plant common names
  var tag = document.createElement("tag");
  tag.className = "text"
  var name = document.createTextNode(plant.common_name);
  tag.appendChild(name);
  div.appendChild(tag);

  //add to div w id=outputs in html
  var element = document.getElementById("outputs");
  element.appendChild(div);
} 

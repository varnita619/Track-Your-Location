var output = document.querySelector("#output");
var checkLocationBtn = document.querySelector("#check-location-btn");
var lat;
var lng;

function initMap(){
    let map = new google.maps.Map(document.getElementById('map'), {
        // center: {lat: -34.397, lng: 150.644},
        center: {lat: lat, lng: lng},
        zoom: 8,
        mapId: '49440f09f7771e68'
      });

    let marker = new google.maps.Marker({position: map.center, map:map})
}

// Fetching Users Location

checkLocationBtn.addEventListener('click',()=>{

const successCallback = position =>{
    const{latitude, longitude} = position.coords;

    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=cc6cf909189c4ce791a77a840d2fba2e&q=52.3877830%2C+9.7334394&pretty=1&no_annotations=1`)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data)
        data.results.map((eachElement)=>{
            lat = eachElement.bounds.northeast.lat
            lng = eachElement.bounds.northeast.lng
            
        })
        var location = data.results[0].formatted.slice(21)
        output.innerHTML = `<h4>${location}</h4>`
        initMap()
        
    })
}

if(window.navigator.geolocation){
    window.navigator.geolocation.getCurrentPosition(successCallback, console.log)
}

})


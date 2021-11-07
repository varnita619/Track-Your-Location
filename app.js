var output = document.querySelector("#output")
var checkLocationBtn = document.querySelector("#check-location-btn")

function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8,
        mapId: '49440f09f7771e68'
      });
}


checkLocationBtn.addEventListener('click',()=>{

const successCallback = position =>{
    const{latitude, longitude} = position.coords;

    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=cc6cf909189c4ce791a77a840d2fba2e&q=52.3877830%2C+9.7334394&pretty=1&no_annotations=1`)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        output.innerHTML = `<h4>${data.results[0].formatted}</h4>`
        
    })
}

if(window.navigator.geolocation){
    window.navigator.geolocation.getCurrentPosition(successCallback, console.log)
}

})


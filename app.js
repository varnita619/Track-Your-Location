var output = document.querySelector("#output")

const successCallback = position =>{
    const{latitude, longitude} = position.coords;

    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=cc6cf909189c4ce791a77a840d2fba2e&q=52.3877830%2C+9.7334394&pretty=1&no_annotations=1`)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data.results[0].components)
        output.innerHTML = data.results[0].formatted
        console.log(data.results[0].formatted)
    })
}

if(window.navigator.geolocation){
    // window.navigator.geolocation.getCurrentPosition(console.log, console.log)
    window.navigator.geolocation.getCurrentPosition(successCallback, console.log)
}
let locationName = document.querySelector("#location");
let btn = document.querySelector("button");
let output = document.querySelector(".output");

btn.addEventListener("click" , async () => {
    let city = locationName.value;

    if(city === ""){
        output.innerHTML = `<p>Enter a Location</p>`
        return ;
    }
    try{
    let apikey = "Your_API_KEY";

    let URL = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=yes`;
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);

    output.innerHTML = `
    <h3> Tempreture : ${data.current.temp_c}  </h3>
    <h3> Location : ${data.location.name}</h3>
    <h3> Country : ${data.location.country} </h3>
    <img src ="https:${data.current.condition.icon}" width = "50px">
    <p> Wind-Direction : ${data.current.wind_dir} </p>
    <p> Level of AQI : ${data.current.air_quality["us-epa-index"]} </p>
    <p> Cloude : ${data.current.cloud}</p>
    `
    } catch (error){
        output.innerHTML = `<h3>Somthing went Wrong</h3>`
    }
});

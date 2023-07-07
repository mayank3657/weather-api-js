const button=document.getElementById('search-button');
const input=document.getElementById('city-input');
const cityName=document.getElementById('city-name');
const cityTime=document.getElementById('city-time');
const cityTemp=document.getElementById('city-temp');
async function getData(cityName){
    const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=36b1b541a7a546a78ac175734231105&q=${cityName}&aqi=yes`);
    return await promise.json();//return promise
}
button.addEventListener('click',async()=>{
    // console.log(input.value);
    const value=input.value;
    const result=await getData(value);//return promise
    console.log(result);
    cityName.innerText=`${result.location.name}, ${result.location.region} -${result.location.country}`;
    cityTime.innerText=`${result.location.localtime}`;
    cityTemp.innerText=`${result.current.temp_c}`;
});
let searchbtn=document.getElementById("search");
let countryinput=document.getElementById("country-inp");
searchbtn.addEventListener("click",function(){
    let countryname=countryinput.value;
    let finalURL=`https://restcountries.com/v2/name/${countryname}?fullText=true`;
    console.log(finalURL);
    fetch(finalURL).then((response)=>response.json()).then((data)=>{
        console.log(data[0]);
        console.log(data[0].nativeName);
        console.log(data[0].capital);
        console.log(data[0].flags.png);
        console.log(data[0].name);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(data[0].population);
        result.innerHTML=`<img src="${data[0].flags.png}" class="flag-img">
        <h2>${data[0].name}</h2> 
        <div class="wrapper">
        <div class="data-wrapper">
        <h4>Native Name:</h4>
        <span>${data[0].nativeName}</span>
        </div>
        </div>
        <div class="wrapper">
        <div class="data-wrapper">
        <h4>Continent:</h4>
        <span>${data[0].region}</span>
        </div>
        </div>
        <div class="wrapper">
        <div class="data-wrapper">
        <h4>Capital:</h4>
        <span>${data[0].capital}</span>
        </div>
        </div>
        <div class="wrapper">
        <div class="data-wrapper">
        <h4>Currency:</h4>
        <span>${data[0].currencies[Object.keys(data[0].currencies)].name}</span>
        </div>
        </div>
        <div class="wrapper">
        <div class="data-wrapper">
        <h4>Area:</h4>
        <span>${data[0].area}</span>
        </div>
        </div>
        <div class="wrapper">
        <div class="data-wrapper">
        <h4>Population:</h4>
        <span>${data[0].population}</span>
        </div>
        </div>
             `;
    
    }).catch(()=>{
        if(countryname.length==0){
            result.innerHTML=`<h3>The input field can not be empty.</h3>`
        }else{
            result.innerHTML=`<h3>Please enter a valid country name.</h3>` 
        }
    })
})

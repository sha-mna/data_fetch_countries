// fetch("https://restcountries.com/v2/all")
// .then((data) => data.json())
// .then((res) => dataFromAPI(res))
// .catch((err) => {
//     console.log(err.message);
// })

// function dataFromAPI(data) {
//     console.log(data);

// }

// function fetchData() {

//     const selectElement = document.querySelector("countries");

//     fetch("https://restcountries.com/v2/all")
//     .then((data) => data.json())
//     .then((result) => console.log(result))
// }

// fetchData();

function countriesFetch() {                           // function is defined                                      

    const countriesSelect = document.getElementById("countriesList");         // id 

    fetch("https://restcountries.com/v2/all")
    .then((data) => data.json())
    .then((countries) => {
        countries.forEach((country) => {

            const countryOption = document.createElement('option');
            countryOption.value = country.name;                       // value 
            countryOption.text = country.name;                        // text

            countriesSelect.append(countryOption);
        })
    })   
}

function getCountryData() {                         // onChange function is invoked
    const selectedCountry = document.getElementById("countriesList").value;            // we are taking the value

    fetch(`https://restcountries.com/v2/name/${selectedCountry}?fullText=true`)
    .then((data) => data.json())
    .then((countryData) => {
        console.log(countryData);
        const countryName = countryData[0].name
        const countryCapital = countryData[0].capital
        const countryFlag = countryData[0].flags.png
        console.log(countryCapital);

        let htmlData = `
                <div class="card" style="width: 18rem;">
                    <img src="${countryFlag}" class="card-img-top" alt="${countryName}">
                    <div class="card-body">
                        <h5 class="card-title">${countryName}</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
        
        `;
        document.getElementById("countryDataDisplay").innerHTML = htmlData
    })


    console.log("selectedCountry is invoked", selectedCountry);
}

window.addEventListener('load', function() {            // load is an event
    countriesFetch();                                     // function is invoked
}) 



// fetchData();


// https://restcountries.com/v2/name/{countryName}?fullText=true
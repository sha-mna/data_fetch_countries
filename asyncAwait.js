// function getCountryData() {
//     fetch("https://restcountries.com/v2/all")
//     .then((data) => data.json())
//     .then((countries) => console.log(countries))
//     .catch((err) => console.log(err.message))

// }

// getCountryData();

async function getCountryData() {
    let res = await fetch("https://restcountries.com/v2/all")
            .then((data) => data.json());
            console.log(res);
}

getCountryData();
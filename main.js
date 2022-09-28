document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM's loaded")

    const button = document.querySelector("button");

    const list = document.querySelector("ul");

    const fetchCountriesNames = async () => {


        // this code works for the peru example
        // const response = await fetch("https://restcountries.com/v3.1/name/peru");
        // const jsonData = await response.json();
        // const commonName = await jsonData[0].name.common
        // console.log(commonName);

        const allCountriesNames = []

        const response = await fetch("https://restcountries.com/v3.1/all");
        const jsonData = await response.json();
        for(let i = 0; i<= 249; i++){
            allCountriesNames.push(jsonData[i].name.common)
        }
        console.log(allCountriesNames);

        allCountriesNames.forEach((name) => {
            const newListPoint = document.createElement("li");
            newListPoint.textContent = name;
            list.appendChild(newListPoint)
         })
        
    
    }

    // fetchCountriesNames
   
    button.addEventListener("click", ()=> {
        fetchCountriesNames()
     })


})
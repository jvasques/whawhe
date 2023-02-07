function printData(data) {
    let dataPlace = data.places
    let placeID = data.places[0].id
    let nameCity = data.places[0].city
    let category = data.places[0].category
    let placeName = data.places[0].placeName
    let addressStreet = data.places[0].addressStreet
    let addressNumber = data.places[0].addressNumber
    let addressDistrict = data.places[0].addressDistrict
    let officeHour = data.places[0].officehour
    let searchTags = data.places[0].searchTags
    let highlighted = data.places[0].highlighted
    let mapIframe = data.places[0].mapIframe
    
    const filteredArray = dataPlace.filter(place => place.category.includes("food") && place.city === "Poços de Caldas");
    console.log(filteredArray);
    const content = document.querySelector('#content')
    content.innerHTML = ''

    filteredArray.forEach(function(obj) {

        const card = document.createElement("div");
        card.setAttribute("class", "card");
        card.setAttribute("onclick", "toggleDiv();")
        
        const img = document.createElement("img")
        img.setAttribute("src", "../../assets/" + obj.id + ".jpg")
        card.appendChild(img)

        const name = document.createElement("h3");
        name.textContent = obj.placeName;
        card.appendChild(name);
        
        const city = document.createElement("p");
        city.textContent = obj.city;
        card.appendChild(city);
        
        const officeHourDraw = document.createElement("p");
        officeHourDraw.textContent = "Horário: " + obj.officehour;
        card.appendChild(officeHourDraw);
        
        content.appendChild(card);
      });
}

async function searchData() {
    let data = await fetch("./src/js/objects.JSON").then( resposta => resposta.json());
    printData(data)
}
function toggleDiv() {
    window.location.href = ('./clientPage.html')
}
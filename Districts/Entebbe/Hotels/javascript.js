const hotels = [
    {
        name: "Best Western Premier Hotel Entebbe",
        location: "Entebbe",
        description: "Nice and good",
        image: "BestWesternPremier.png",
        website: "blank"
    },

    {
        name: "Imperial Resort Beach Hotel Entebbe",
        location: "Entebbe",
        description: "nice and good",
        image: "ImperialResortbeachHotel.png",
        website: "blank"
    },
    {
        name: "Lake Victoria Granada Hotel Entebbe",
        location: "Entebbe",
        description: "nice and good",
        image: "LakeVictoriaGranada.png",
        website: "blank"
    },
    {
        name: "ProteaHotel Entebbe",
        location: "Entebbe",
        description: "nice and good",
        image: "ProteaHotel.png",
        website: "blank"
    },
];


const hotelsContainer = document.getElementById("hotels-container");


hotels.forEach(function (hotel) {

    const hotelCard = document.createElement("article");

    hotelCard.classList.add("hotel-card");

    hotelCard.innerHTML = `
        <div class="hotel-image-container">
            <img
                src="${hotel.image}"
                alt="${hotel.name}"
                class="hotel-image"
            >
        </div>

        <div class="hotel-information">

            <p class="hotel-location">
                ${hotel.location}
            </p>

            <h3 class="hotel-name">
                ${hotel.name}
            </h3>

            <p class="hotel-description">
                ${hotel.description}
            </p>

            <a
                href="${hotel.website}"
                target="_blank"
                rel="noopener noreferrer"
                class="hotel-button"
            >
                Learn More
                <span>→</span>
            </a>

        </div>
    `;

    hotelsContainer.appendChild(hotelCard);
});
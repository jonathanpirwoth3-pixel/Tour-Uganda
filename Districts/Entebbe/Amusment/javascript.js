const amusementPlaces = [
    {
        name: "Amusement Place Name",
        location: "Entebbe",
        description: "Add a short description about the attraction here.",
        image: "",
        website: ""
    },

    {
        name: "Another Fun Place",
        location: "Entebbe",
        description: "Add information about the activities available here.",
        image: "",
        website: ""
    },

    {
        name: "",
        location: "Entebbe",
        description: "",
        image: "",
        website: ""
    },

    {
        name: "",
        location: "Entebbe",
        description: "",
        image: "",
        website: ""
    }
];

const amusementContainer = document.querySelector(".amusement-container");

amusementPlaces.forEach((place, index) => {
    const amusementCard = document.createElement("article");

    amusementCard.classList.add("amusement-card");

    if (index % 3 === 0) {
        amusementCard.classList.add("amusement-pink");
    } else if (index % 3 === 1) {
        amusementCard.classList.add("amusement-blue");
    } else {
        amusementCard.classList.add("amusement-yellow");
    }

    amusementCard.innerHTML = `
        <div class="amusement-image-box">
            <img
                src="${place.image}"
                alt="${place.name}"
                class="amusement-image"
            >
        </div>

        <div class="amusement-content">
            <p class="amusement-location">${place.location}</p>

            <h2 class="amusement-name">${place.name}</h2>

            <p class="amusement-description">
                ${place.description}
            </p>

            <a
                href="${place.website}"
                class="amusement-button"
                target="_blank"
                rel="noopener noreferrer"
            >
                Have Fun
                <span>🎉</span>
            </a>
        </div>
    `;

    amusementContainer.appendChild(amusementCard);
});
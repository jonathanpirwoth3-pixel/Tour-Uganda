const wildlifePlaces = [
    {
        name: "Uganda Wildlife Education Centre",
        location: "Entebbe",
        description: "Add a short description about the wildlife attraction here.",
        image: "EntebbeZoo.png",
        website: ""
    },

    {
        name: "Entebbe Botanical Gardens",
        location: "Entebbe",
        description: "Add a short description about the animals and nature found here.",
        image: "ReptileVillage.png",
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

const wildlifeContainer = document.querySelector(".wildlife-container");

wildlifePlaces.forEach((place, index) => {
    const wildlifeCard = document.createElement("article");

    wildlifeCard.classList.add("wildlife-card");

    /*
        This gives alternating cards different classes.

        Card 1 = wildlife-left
        Card 2 = wildlife-right
        Card 3 = wildlife-left
        Card 4 = wildlife-right
    */
    if (index % 2 === 0) {
        wildlifeCard.classList.add("wildlife-left");
    } else {
        wildlifeCard.classList.add("wildlife-right");
    }

    wildlifeCard.innerHTML = `
        <div class="wildlife-image-box">
            <img
                src="${place.image}"
                alt="${place.name}"
                class="wildlife-image"
            >
        </div>

        <div class="wildlife-info">
            <p class="wildlife-location">${place.location}</p>

            <h2 class="wildlife-name">${place.name}</h2>

            <p class="wildlife-description">
                ${place.description}
            </p>

            <a
                href="${place.website}"
                class="wildlife-button"
                target="_blank"
                rel="noopener noreferrer"
            >
                Explore Wildlife
                <span>→</span>
            </a>
        </div>
    `;

    wildlifeContainer.appendChild(wildlifeCard);
});
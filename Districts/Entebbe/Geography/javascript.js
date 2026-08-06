const geographicalPlaces = [
    {
        name: "Geographical Place Name",
        location: "Entebbe",
        category: "Natural Landmark",
        description: "Add a short description about the landscape, natural formation or geographical attraction here.",
        image: "",
        website: ""
    },

    {
        name: "Another Natural Destination",
        location: "Entebbe",
        category: "Lake and Landscape",
        description: "Describe what makes this location beautiful, unique and worth visiting.",
        image: "",
        website: ""
    },

    {
        name: "",
        location: "Entebbe",
        category: "Wetland and Nature",
        description: "",
        image: "",
        website: ""
    },

    {
        name: "",
        location: "Entebbe",
        category: "Scenic Destination",
        description: "",
        image: "",
        website: ""
    }
];

const geographicalContainer =
    document.getElementById("geographical-container");

geographicalPlaces.forEach(function (place, index) {

    const geographicalCard =
        document.createElement("article");

    geographicalCard.classList.add("geographical-card");

    if (index % 2 !== 0) {
        geographicalCard.classList.add("geographical-reverse");
    }

    geographicalCard.innerHTML = `
        <div class="geographical-image-container">

            <img
                src="${place.image}"
                alt="${place.name}"
                class="geographical-image"
            >

            <div class="geographical-image-overlay"></div>

            <p class="geographical-number">
                ${String(index + 1).padStart(2, "0")}
            </p>

        </div>

        <div class="geographical-information">

            <div class="geographical-labels">

                <p class="geographical-location">
                    ${place.location}
                </p>

                <p class="geographical-category">
                    ${place.category}
                </p>

            </div>

            <h2 class="geographical-name">
                ${place.name}
            </h2>

            <div class="geographical-line"></div>

            <p class="geographical-description">
                ${place.description}
            </p>

            <a
                href="${place.website}"
                target="_blank"
                rel="noopener noreferrer"
                class="geographical-button"
            >
                Discover This Place
                <span>↗</span>
            </a>

        </div>
    `;

    geographicalContainer.appendChild(geographicalCard);
});
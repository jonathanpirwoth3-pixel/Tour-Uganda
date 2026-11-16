const wildlifePlaces = [
    {
        name: "Uganda Wildlife Education Centre: Entebbe Zoo",
        location: "Plot 56/57 Lugard Avenue, Entebbe, Uganda",
        locationLink: "https://www.google.ca/maps/place/Uganda+Wildlife+Conservation+Education+Centre/@0.0545493,32.4768287,17z/data=!3m1!4b1!4m6!3m5!1s0x177d869122a1c245:0x42f1a3495527a926!8m2!3d0.0545493!4d32.4794036!16s%2Fm%2F0cmdq8_?entry=ttu&g_ep=EgoyMDI2MDgwNC4wIKXMDSoASAFQAw%3D%3D",
        description: "Add a short description about the wildlife attraction here.",
        image: "EntebbeZoo.png",
        website: "https://uwec.ug/"
    },

    {
        name: "Ngamba Island Chimpanzee Sanctuary",
        location: "Plot 1 Bank Close, Entebbe, Uganda",
        locationLink: "https://www.google.ca/maps/place/Ngamba+Island+Chimpanzee+sanctuary/@-0.100728,32.6504261,17z/data=!3m1!4b1!4m6!3m5!1s0x177d869b229d8e71:0xc13081df049cf999!8m2!3d-0.100728!4d32.653001!16zL20vMGc1bTR2?entry=ttu&g_ep=EgoyMDI2MDgwNC4wIKXMDSoASAFQAw%3D%3D",
        description: "Add a short description about the animals and nature found here.",
        image: "NgambaIslandChimpanzee.png",
        website: "https://chimpanzeetrust.org/",
    },

    {
        name: "Reptile Village",
        location: "Bunono Village, Katabi, Entebbe, Uganda",
        locationLink: "https://www.google.ca/maps/place/Reptile+village+in+Entebbe/@0.1046811,32.4718616,17z/data=!3m1!4b1!4m6!3m5!1s0x177d84429b6b34f1:0x5dc8cbbf04862d98!8m2!3d0.1046811!4d32.4744365!16s%2Fg%2F11c1nt2d0s?entry=ttu&g_ep=EgoyMDI2MDgwNC4wIKXMDSoASAFQAw%3D%3D",
        description: "",
        image: "ReptileVillage.png",
        website: "https://www.allugandasafaris.com/uganda-reptile-village/"
    },

    {
        name: "Entebbe Botanical Gardens",
        location: "12 Kampala–Entebbe Road, Entebbe",
        locationLink: "https://www.google.ca/maps/place/Entebbe+Botanical+Garden/@0.0620163,32.4766995,16z/data=!3m1!4b1!4m6!3m5!1s0x177d84278b951ba5:0x7a906bf2a3467fd4!8m2!3d0.0620109!4d32.4792744!16s%2Fg%2F121bkj5j?entry=ttu&g_ep=EgoyMDI2MDgwNC4wIKXMDSoASAFQAw%3D%3D",
        description: "Established in 1898, these gardens are famous for free-roaming vervet monkeys, black-and-white colobus monkeys, hundreds of bird species and enormous tropical trees along Lake Victoria. Entebbe Botanical Gardens",
        image: "BotanicalGardens.png",
        website: "https://www.ugandaimmigration.org/news/entebbe-botanical-gardens-entrance-fee"
    },
    {
        name: "Mabamba Swamp Shoebill Reserve",
        location: "Kasanje Rd, Entebbe, Uganda.",
        locationLink: "https://www.google.ca/maps/place/Mabamba+Swamp+Shoebill+Watching+Entebbe/@0.0573373,32.4585794,16z/data=!3m1!4b1!4m6!3m5!1s0x177d8383ec0b8197:0x5e0cc2415c2e48e3!8m2!3d0.0573319!4d32.4611543!16s%2Fg%2F11t8nqtzzg?entry=ttu&g_ep=EgoyMDI2MDgwNC4wIKXMDSoASAFQAw%3D%3D",
        description: "One of the world's best places to see the rare Shoebill Stork in its natural habitat. Over 300 bird species have been recorded in the wetland. Mabamba Swamp Shoebill Watching",
        image: "Mabamba.jpg",
        website: "https://mabambashoebillwatching.com/"
    },
    {
        name: "Kitubulu Forest Reserve",
        location: "Kitubulu, Katabi, Entebbe, Wakiso District, Uganda",
        locationLink: "https://www.google.ca/maps/place/Kitubulu+forest+and+beach/@0.0819737,32.4815941,17z/data=!3m1!4b1!4m6!3m5!1s0x177d844924a70d91:0x53aa046ff99ef6a3!8m2!3d0.0819683!4d32.484169!16s%2Fg%2F1tn1ys6t?entry=ttu&g_ep=EgoyMDI2MDgwNC4wIKXMDSoASAFQAw%3D%3D",
        description: "A protected natural forest famous for birdwatching, butterflies, indigenous trees and monkeys, offering peaceful nature walks close to the town. Kitubulu Forest and Beach",
        image: "KitubuluForestReserve.png",
        website: "https://hereinuganda.com/kitubulu-central-forest-reserve"
    },
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
            <p class="wildlife-location">
    <a href="${place.locationLink}" target="_blank" rel="noopener noreferrer">
        ${place.location}
    </a>
</p>

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
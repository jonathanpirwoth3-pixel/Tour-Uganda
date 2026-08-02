// A dictionary map matching user inputs to their folder paths
const locationRoutes = {
    "entebbe": "../Districts/Entebbe/Entebbe.html",
    "kampala": "../Districts/Kampala/Kampala.html",
    "jinja": "../Districts/Jinja/Jinja.html"
    // You can easily add hundreds of lines here as your project grows!
};

// Select your search bar input from the DOM
const searchInput = document.querySelector('.textsearch');

// Listen for when a key is pressed down inside the input box
searchInput.addEventListener('keydown', function(event) {
    // Only trigger when the user hits the Enter key
    if (event.key === 'Enter') {
        // Grab the value, make it lowercase, and trim trailing spaces
        const query = searchInput.value.toLowerCase().trim();

        // Check if the typed location exists in our routes map
        if (locationRoutes[query]) {
            // Redirect the browser window to the matched file path
            window.location.href = locationRoutes[query];
        } else {
            alert("Location not found! Try searching for 'entebbe'.");
        }
    }
});
// 1. Your list of hotels
const hotelsData = [
    {
        name: "Protea Hotel Entebbe",
        badge: "⭐ Recommended",
        image: "ProteaHotel.png",
        desc: "Protea Hotel Entebbe is a premium 4-star Marriott property located just 1.5 km from Entebbe International Airport. Situated directly on the shores of Lake Victoria, it serves as the ultimate, upscale transit stop for international and local travellers seeking the touch of the lake view."
    },
    {
        name: "Lake Victoria Granada Hotel Entebbe",
        badge: "😎 Amazing Lake View",
        image: "LakeVictoriaGranada.png",
        desc: "Located near the International Airport, located near the zoo, right next to the second largest lake in the world, and a 5 minute drive to Victoria mall, is Lake Victoria Granada Hotel. Come enjoy the wonderful lake view, beautiful tropical gardens, a full size pool with a diving board, and a full service spa."
    },
    {
        name: "Imperial Resort Beach Hotel Entebbe",
        badge: "🏖️ Sandy Beach",
        image: "ImperialResortbeachHotel.png",
        desc: "Looking for a beach with less people, more privacy, a place with a sandy water view scenery, this is for you. Experience the wonderful structures, views, and culture offered by Imperial Resort Beach Hotel Entebbe."
    },
    {
        name: "Best Western Premier Garden Hotel Entebbe",
        badge: "🏩 The best in Town",
        image: "BestWesternPremier.png",
        desc: "This is the best spot in town, a 30 second walk from the legendary Victoria Mall, complimentary breakfast, hot tub, spa, swimming pool and many more in stock for you."
    },
    // 💡 Want to add a 4th or 5th hotel? Just add a comma here and paste another block!
];

// 2. The automation engine loop
function renderHotels() {
    const targetDiv = document.getElementById("hotel-container");
    let htmlFeed = "";

    hotelsData.forEach(hotel => {
        htmlFeed += `
            <div class="listing-card">
                <img src="${hotel.image}" alt="${hotel.name}" class="listing-image">
                <div class="listing-info">
                    <span class="badge">${hotel.badge}</span>
                    <h2 class="listing-title">${hotel.name}</h2>
                    <p class="listing-description">${hotel.desc}</p>
                    <button class="explore-btn">Learn More</button>
                </div>
            </div>
        `;
    });

    targetDiv.innerHTML = htmlFeed;
}

// 3. Launch it immediately when the page opens
renderHotels();

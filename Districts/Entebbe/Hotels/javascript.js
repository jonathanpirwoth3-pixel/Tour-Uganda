const hotels = [
    {
        name: "Best Western Premier Hotel Entebbe",
        location: "Berkely Road, adjacent to Victoria Mall, Entebbe, Uganda (about 7 km from Entebbe International Airport).",
        locationLink: "https://www.google.ca/maps/search/Berkely+Road,+adjacent+to+Victoria+Mall,+Entebbe,+Uganda+(about+7+km+from+Entebbe+International+Airport).",
        description: "The Best Western Premier Garden Hotel Entebbe is a 4-star property in Uganda outstanding for its all-access convenience, directly connected to the Victoria Shopping Mall and situated minutes from the Entebbe International Airport. It blends business readiness with seamless leisure, placing guests within a 1-minute walk of the tranquil Entebbe Botanical Garden while offering an attached retail hub for instant access to supermarkets, dining, and shopping.",
        image: "BestWesternPremier.png",
        website: "https://www.bestwestern.com/"
    },

    {
        name: "Imperial Resort Beach Hotel Entebbe",
        location: "Plot 2 Mpigi Road, Entebbe, Uganda",
        locationLink: "https://www.google.ca/maps/place/Plot+2+Mpigi+Road,+Entebbe,+Uganda",
        description: "The Imperial Resort Beach Hotel in Entebbe is an upscale 4-star property outstanding for its massive 1-kilometre stretch of private white-sand beach right on the shores of Lake Victoria. Set across 27 acres of landscaped gardens, it perfectly balances family resort recreation with high-capacity business, boasting a unique 2,000-seat amphitheatre and advanced conference centers.",
        image: "ImperialResortbeachHotel.png",
        website: "https://www.imperialhotels.co.ug"
    },
    {
        name: "Lake Victoria Granada Hotel Entebbe",
        location: "Plot 23–31, Circular Road, Entebbe, Uganda.",
        locationLink: "https://www.google.ca/maps/place/Plot+23,+31+Circular+Rd,+Entebbe,+Uganda/@0.0554895,32.464703,17z/data=!3m1!4b1!4m5!3m4!1s0x177d86a2ce2cd98b:0x15fe4d14f18ab469!8m2!3d0.0554895!4d32.4672779?entry=ttu&g_ep=EgoyMDI2MDgwMy4wIKXMDSoASAFQAw%3D%3D",
        description: "The Lake Victoria Granada Hotel (originally built in 1948) is a genteel, 4-star colonial-era property outstanding for its deep historical prestige, famously serving as the official residence for Queen Elizabeth II during her 1958 royal visit to Uganda. Nestled within nine acres of lush, manicured tropical gardens, this historic landmark seamlessly blends old-world British colonial charm with modern hospitality, offering spectacular elevated views over Lake Victoria.",
        image: "LakeVictoriaGranada.png",
        website: "https://www.lvhotel.co.ug/",
    },
    {
        name: "ProteaHotel Entebbe",
        location: "Location: 36–40 Sebugwawo Drive, Entebbe, Uganda",
        locationLink: "https://www.google.ca/maps/place/Protea+Hotel+Entebbe/@0.0356734,32.4527014,17z/data=!4m9!3m8!1s0x177d843a328034c7:0x47fee1dac119a4dc!5m2!4m1!1i2!8m2!3d0.0356734!4d32.4552763!16s%2Fg%2F11gzdvdds?entry=ttu&g_ep=EgoyMDI2MDgwMy4wIKXMDSoASAFQAw%3D%3D",
        description: "The Protea Hotel Entebbe is an upscale 4-star lakefront resort managed by Marriott International, positioned right on the shores of Lake Victoria. It is highly regarded for its premium convenience, located just 1 kilometre from Entebbe International Airport.",
        image: "ProteaHotel.png",
        website: "https://www.marriott.com/en-us/hotels/ebben-protea-hotel-entebbe/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0"
    },
    {
        name: "Adams Grand Hotel Entebbe",
        location: "Plot 54, Circular Road, Mugwanya Road, Entebbe, Uganda",
        locationLink: "https://www.google.ca/maps/search/The+Admas+Grand+Hotel+(frequently+misspelled+as+%22Adans%22)+is+an+exceptional+4-star+premium+boutique+hotel+situated+in+the+upscale+residential+area+of+Entebbe,+Uganda.+It+is+highly+regarded+for+its+lush+surroundings,+overlooking+the+Entebbe+Golf+Course+with+distant+views+of+Lake+Victoria./@0.0519799,32.4642744,17z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI2MDgwMy4wIKXMDSoASAFQAw%3D%3D",
        description: "The Admas Grand Hotel (frequently misspelled as \"Adans\") is an exceptional 4-star premium boutique hotel situated in the upscale residential area of Entebbe, Uganda. It is highly regarded for its lush surroundings, overlooking the Entebbe Golf Course with distant views of Lake Victoria.",
        image: "AdamsGrandHotel.png",
        website: "https://admasgrandhotel.com/"
    },
    {
        name: "DeRain Beach Resort",
        location: "Kampala - Entebbe Expressway, Katabi, Entebbe, Uganda",
        locationLink: "https://www.google.ca/maps/place/De+Rain+Eco+Beach+Resort/@0.083813,32.4808928,17z/data=!3m1!4b1!4m9!3m8!1s0x177d85f3601aa781:0x3a19dc4f00027b24!5m2!4m1!1i2!8m2!3d0.083813!4d32.4834677!16s%2Fg%2F11vf6cb0yf?entry=ttu&g_ep=EgoyMDI2MDgwMy4wIKXMDSoASAFQAw%3D%3D",
        description: "The De Rain Eco Beach Resort is a breathtaking, 5-star lakeside sanctuary that sets an earthy, traditional mood directly along the golden shores of Lake Victoria. Hidden beneath a canopy of mature, towering trees and framed by lush tropical gardens, this eco-conscious haven seamlessly blends nature-enriched serenity with modern leisure comforts. Guests are treated to unique, soundproofed cottages featuring massive, extra-long beds and private balconies that open up to pristine lake vistas and the soothing sound of chirping birds. From morning yoga sessions and peaceful walks along the private beachfront to high-speed jet ski adventures and slow evenings by the outdoor fireplace, the resort curates a lifestyle experience rather than a simple stay",
        image: "DeRainBeachResort.png",
        website: "https://www.derainresort.com/"
    },
    {
      name: "Hotel horizon",
      location: "Plot 11 & 13, Portal Lane, Entebbe, Uganda",
      locationLink: "https://www.google.ca/maps/place/Hotel+Horizon+Entebbe/@0.0610485,32.4698567,17z/data=!3m1!4b1!4m9!3m8!1s0x177d87305c6cc673:0x36e19bf43ac22fb7!5m2!4m1!1i2!8m2!3d0.0610485!4d32.4724316!16s%2Fg%2F11rptkgjqy?entry=ttu&g_ep=EgoyMDI2MDgwMy4wIKXMDSoASAFQAw%3D%3D",
      description: "Hotel Horizon Entebbe is a sophisticated 4-star boutique hotel that seamlessly blends modern elegance with authentic Ugandan hospitality. Perfectly situated along the main highway corridor, the property offers a serene roadside escape featuring panoramic views of Lake Victoria and a beautifully manicured courtyard. Guests can relax by the stunning outdoor swimming pool, dine at the exceptional on-site restaurant serving highly rated local and international dishes, or unwind in the premium health club and hot tub facilities. Known for its exceptional customer service and tranquil ambiance, it stands out as an premier choice for upscale relaxation, seamless airport transit, and high-profile corporate conferences.",
      image: "HotelHorizon.png",
      website: "https://hotelhorizonug.com/"
    },
    {
        name: "K Hotels",
        location: "Plot 32, Hill Road, Entebbe, Uganda",
        locationLink: "https://www.google.ca/maps/place/K+Hotels+Entebbe/@0.0642991,32.4715622,17z/data=!4m9!3m8!1s0x177d8420c44316e9:0x91ea0f46ba9830b1!5m2!4m1!1i2!8m2!3d0.0642991!4d32.4741371!16s%2Fg%2F11f_c02gcz?entry=ttu&g_ep=EgoyMDI2MDgwMy4wIKXMDSoASAFQAw%3D%3D",
        description: "K Hotels Entebbe is a brilliantly designed 4-star boutique luxury hotel that effortlessly blends chic, cosmopolitan elegance with refreshing views of Lake Victoria. Centrally positioned just steps away from the lush paths of the Entebbe Botanical Gardens, the property delivers an intimate yet opulent atmosphere highlighted by bespoke customer service. Guests can indulge in rich culinary experiences, alternating between exquisite Indian dining at the Kurries restaurant and sophisticated international dishes on the vibrant K Rooftop terrace. With a stunning rooftop pool deck, an on-site spa, and meticulously structured meeting facilities, it serves as a highly rated haven for executive business travelers and leisure seekers who crave contemporary refinement right in the heart of town.",
        image: "KHotels.png",
        website: "https://www.khotels.ug/"
    },
    {
        name: "Imperial Botanical Hotel",
        location: "Plot M79, Lugard Avenue, Entebbe, Uganda",
        locationLink: "https://www.google.ca/maps/place/Imperial+Botanical+Beach+Hotel/@0.0589908,32.46941,15.26z/data=!4m9!3m8!1s0x177d869b44f7d161:0x54b2c9bf9db5dfb3!5m2!4m1!1i2!8m2!3d0.0588899!4d32.47945!16s%2Fm%2F0b6jp88?entry=ttu&g_ep=EgoyMDI2MDgwMy4wIKXMDSoASAFQAw%3D%3D",
        description: "The Imperial Botanical Beach Hotel is a classic, colonial-style 4-star convention property that stretches beautifully along the edge of Lake Victoria. Merging timeless architectural heritage with pristine natural spaces, this expansive retreat is widely celebrated for its fully manicured tropical gardens that double as a sanctuary for indigenous birds and diverse monkey species. Guests can enjoy a wide array of premium amenities, from refreshing dips in the large indoor swimming pool to dining at Mount Elgon's Dining Room, which serves a robust variety of international specialties. Offering massive glass-enclosed spaces streaming with natural sunlight and the largest convention setup in the area, it acts as a primary hub for global summits while offering direct, relaxing foot-path access to the historical Entebbe Botanical Gardens.",
        image: "ImperialBotanicalHotel.png",
        website: "https://www.imperialhotels.co.ug/ImperialBotanicalBeachHotel"
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
            <a href="${hotel.locationLink}" target="_blank">
                ${hotel.location}
                </a>
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
import bpLogo from '../assets/branding/bp_logo.svg';

// Gallery & Guest Real Images
import touristCarNight from '../assets/gallery/tourist_car_night.jpg';
import touristDayBackpackers from '../assets/gallery/tourist_day_backpackers.jpg';
import touristPeaceSign from '../assets/gallery/tourist_peace_sign.jpg';
import touristYellowTop from '../assets/gallery/tourist_yellow_top.jpg';

// Destination Real Images
import imgSigiriyaGardens from '../assets/real-imges/sigiriyaa.jpg';
import imgNineArchViaduct from '../assets/real-imges/nine arch.jpg';
import imgAdamsPeak from '../assets/real-imges/Adams_Peak_in_Sri_Lanka_1541143843s40.jpg';
import imgYalaLeopardsTree from '../assets/real-imges/25.jpg';
import imgGalleFortHeader from '../assets/real-imges/galle-dutch-fort-sri-lanka-header.avif';
import imgNarangalaCamping from '../assets/real-imges/narangala-camping-a-small.jpg';

// Tour Hero Real Images
import imgTourMirissaDrone from '../assets/real-imges/mirissa3.jpg';
import imgTourSigiriyaVertical from '../assets/real-imges/HD-wallpaper-sigiriya-sri-lanka-sri-lanka.jpg';
import imgTourSecretBeachSunset from '../assets/real-imges/Things-To-Do-Mirissa-Sri-Lanka-secret-beach-sunset.avif';
import imgTourGalleSunsetStreet from '../assets/real-imges/chathura-indika-LAj-XlHP6Rs-unsplash-2-scaled_20241113111007.jpg';

// Photo Gallery Scenery Real Images
import imgSigiriyaSummitDrone from '../assets/real-imges/sigiriya-01.webp';
import imgWeligamaBeachAbove from '../assets/real-imges/Weligama-beach-from-above.jpg';
import imgGalleFortRamparts from '../assets/real-imges/galle-fort.jpg';
import imgPolonnaruwaVatadage from '../assets/real-imges/things-to-do-in-Polonnaruwa-1_20241113112120.jpg';

export const INITIAL_BRANDING = {
  name: "BP Tours and Travels",
  tagline: "Airport Drop and Pickup | Local and Foreign Tours",
  owner: "Bandara Premathilaka",
  phonePrimary: "070 739 9144",
  phoneWhatsapp: "077 139 9144",
  phoneFormattedPrimary: "+94707399144",
  phoneFormattedWhatsapp: "+94771399144",
  email: "info@bptours.lk",
  address: "Bandaranaike International Airport (BIA) and Colombo, Sri Lanka",
  logoUrl: bpLogo,
  googleRating: 4.9,
  totalReviews: 248,
  tripadvisorRating: 5.0,
  verifiedBadge: "Sri Lanka Tourism Board Recognized and Certified Private Tour Operator"
};

export const INITIAL_DESTINATIONS = [
  {
    id: "dest-1",
    name: "Sigiriya Ancient Rock Fortress",
    category: "Heritage",
    location: "Matale District, Central Province",
    shortDesc: "UNESCO World Heritage site featuring dramatic 200m lion rock, ancient frescoes, and water gardens.",
    fullDesc: "Sigiriya (Lion Rock) is an ancient fortress built by King Kashyapa in the 5th century. Rising majestically above the jungle, it showcases world-famous frescoes, mirror walls, and incredible 360-degree panorama views of Sri Lanka's emerald forests.",
    imageUrl: imgSigiriyaGardens,
    rating: 4.9,
    reviewsCount: 182,
    recommendedDays: "1 Day",
    highlights: ["Lion Paw Entrance", "5th Century Frescoes", "Water and Terrace Gardens", "Pidurangala Sunset View"]
  },
  {
    id: "dest-2",
    name: "Ella and Nine Arch Bridge",
    category: "Hill Country",
    location: "Badulla District, Uva Province",
    shortDesc: "Picturesque mountain town famous for scenic train journeys, misty valleys, and iconic colonial bridges.",
    fullDesc: "Ella is Sri Lanka's mountain paradise nestled amongst tea plantations. Marvel at the world-renowned Nine Arch Bridge as blue trains rumble across lush valleys, hike Little Adam's Peak, and refresh at Ravana Falls.",
    imageUrl: imgNineArchViaduct,
    rating: 5.0,
    reviewsCount: 230,
    recommendedDays: "2 Days",
    highlights: ["Nine Arch Viaduct Train Spotting", "Little Adam's Peak Hike", "Ravana Falls", "Tea Factory Tour"]
  },
  {
    id: "dest-3",
    name: "Adam's Peak & Sacred Mountain Pilgrimage",
    category: "Culture",
    location: "Sabaragamuwa & Central Province",
    shortDesc: "Sacred conical mountain summit surrounded by wilderness sanctuaries, misty ridges, and ancient pilgrimage paths.",
    fullDesc: "The revered summit of Sri Pada (Adam's Peak) towers 2,243 meters above sea level. Famed for its spiritual sanctity, sacred footprint temple, and unforgettable sunrise cloud inversions.",
    imageUrl: imgAdamsPeak,
    rating: 4.8,
    reviewsCount: 195,
    recommendedDays: "1-2 Days",
    highlights: ["Sunrise Cloud Inversion", "Sacred Footprint Sanctuary", "Misty Mountain Ridge Views", "Pilgrimage Trail"]
  },
  {
    id: "dest-4",
    name: "Yala National Park Safari",
    category: "Wildlife",
    location: "Southern and Uva Provinces",
    shortDesc: "World's highest density of leopards, wild elephant herds, sloth bears, and rich avian life.",
    fullDesc: "Embark on an exhilarating 4x4 jeep safari inside Yala National Park. Famous worldwide for its thriving population of Sri Lankan leopards, wild elephants, crocodiles, peacocks, and coastal dune landscapes.",
    imageUrl: imgYalaLeopardsTree,
    rating: 4.9,
    reviewsCount: 160,
    recommendedDays: "1 Day",
    highlights: ["Leopard Spotting Safari", "Wild Elephant Encounters", "Sloth Bear Search", "Coastal Lagoon Views"]
  },
  {
    id: "dest-5",
    name: "Galle Fort and South Coast Beaches",
    category: "Coastal",
    location: "Galle, Southern Province",
    shortDesc: "17th-century Dutch colonial walled fort paired with world-class turquoise surfing beaches.",
    fullDesc: "Walk along cobblestone ramparts, boutique cafes, and historic lighthouses inside Galle Dutch Fort. Pair your trip with tropical coconut beaches in Unawatuna, Mirissa, and Weligama for surfing and whale watching.",
    imageUrl: imgGalleFortHeader,
    rating: 4.9,
    reviewsCount: 215,
    recommendedDays: "2 Days",
    highlights: ["Dutch Fort Ramparts and Lighthouse", "Coconut Tree Hill Mirissa", "Stilt Fishermen Observation", "Surfing and Whale Tours"]
  },
  {
    id: "dest-6",
    name: "Nuwara Eliya & Narangala Highlands",
    category: "Hill Country",
    location: "Central & Badulla Ridge",
    shortDesc: "Cool mountain retreat surrounded by rolling Ceylon tea estates, waterfalls, and scenic camping ridges.",
    fullDesc: "Experience Sri Lanka's cool mountain heights in Nuwara Eliya and Narangala. Stroll tea trails, camp above sea-of-clouds ridges, and enjoy pristine highland air with Bandara.",
    imageUrl: imgNarangalaCamping,
    rating: 4.7,
    reviewsCount: 140,
    recommendedDays: "1-2 Days",
    highlights: ["Ceylon Tea Plantation and Factory", "Mountain Ridge Camping", "Horton Plains and World's End", "Colonial Post Office"]
  }
];

export const INITIAL_TOURS = [
  {
    id: "tour-1",
    title: "7-Day Ultimate Sri Lanka Island Odyssey",
    duration: "7 Days / 6 Nights",
    category: "Round Tour",
    priceUSD: 450,
    priceLKR: 135000,
    rating: 5.0,
    reviewsCount: 84,
    badge: "Most Popular",
    heroImage: imgTourMirissaDrone,
    routes: ["Colombo / BIA", "Sigiriya", "Kandy", "Nuwara Eliya", "Ella", "Yala Safari", "Galle Fort", "BIA Airport"],
    description: "Our signature 7-day tour covers every iconic wonder of Sri Lanka. Experience ancient UNESCO heritage, tea mountain vistas, scenic train rides, wildlife safari, and golden southern beaches in absolute luxury with your dedicated private driver Bandara Premathilaka.",
    itinerary: [
      { day: 1, title: "BIA Airport Pick and Sigiriya Rock Arrival", details: "Warm welcome at Bandaranaike International Airport by Bandara. Private transfer to Sigiriya, visit Pinnawala Elephant Sanctuary en-route, evening relaxation." },
      { day: 2, title: "Sigiriya Lion Rock and Dambulla Cave Temple", details: "Morning climb of Sigiriya Fortress. Explore 1st-century Dambulla Golden Cave Temple, transfer to Kandy with spice garden tour." },
      { day: 3, title: "Sacred Kandy Temple and Scenic Tea Trails", details: "Visit Temple of the Tooth Relic, Royal Botanical Gardens. Drive up scenic tea country roads to Nuwara Eliya, visiting tea factories and Devon waterfalls." },
      { day: 4, title: "Nuwara Eliya to Ella Scenic Mountain Drive", details: "Stroll Gregory Lake, experience the world-famous blue train ride from Nanu Oya to Ella. Evening at Nine Arch Bridge." },
      { day: 5, title: "Ella Hike and Yala Wildlife Jeep Safari", details: "Morning hike to Little Adam's Peak and Ravana Falls. Drive down to Yala National Park for an evening 4x4 leopard safari." },
      { day: 6, title: "Yala to Galle Fort and South Coast Beach", details: "Coastal drive past stilt fishermen to Galle Dutch Fort. Sunset stroll along Fort ramparts, stay at coastal resort." },
      { day: 7, title: "Colombo City Sightseeing and BIA Airport Drop", details: "Colombo city tour (Lotus Tower, Gangaramaya Temple, Pettah market) followed by hassle-free airport drop for departure." }
    ],
    inclusions: [
      "Private AC luxury vehicle (Sedan or KDH Van)",
      "Experienced English-speaking driver/guide Bandara Premathilaka",
      "All vehicle fuel, highway tolls and parking fees",
      "Complimentary bottled water and Wi-Fi hotspot in vehicle",
      "Flexible itinerary customized to your pace",
      "24/7 BIA Airport pickup and drop-off"
    ]
  },
  {
    id: "tour-2",
    title: "4-Day Cultural Triangle and Hill Country Discovery",
    duration: "4 Days / 3 Nights",
    category: "Cultural and Nature",
    priceUSD: 280,
    priceLKR: 84000,
    rating: 4.9,
    reviewsCount: 62,
    badge: "Best Seller",
    heroImage: imgTourSigiriyaVertical,
    routes: ["BIA Airport", "Sigiriya Rock", "Dambulla", "Kandy", "Nuwara Eliya", "BIA Drop"],
    description: "Perfect for travelers with limited time looking to discover Sri Lanka's spiritual heartland, ancient kingdoms, and breathtaking tea gardens.",
    itinerary: [
      { day: 1, title: "Airport Pickup and Journey to Sigiriya", details: "Welcome at airport, comfortable private drive to Sigiriya, evening village safari and traditional Sri Lankan lunch." },
      { day: 2, title: "Sigiriya Rock Climb and Temple of the Tooth", details: "Morning climb of Lion Rock. Journey to Kandy, visiting Dambulla Cave Temple and Ayurvedic spice gardens along the way." },
      { day: 3, title: "Kandy City to Misty Nuwara Eliya", details: "Explore Temple of Tooth Relic and Kandy Lake. Scenic drive to Nuwara Eliya with Ceylon Tea tasting and waterfall stops." },
      { day: 4, title: "Ramboda Falls and Colombo Airport Departure", details: "Visit Ramboda Falls, Colombo landmark viewing, and relaxed transfer to BIA Airport for evening flights." }
    ],
    inclusions: [
      "Private climate-controlled vehicle",
      "Dedicated driver-guide Bandara Premathilaka",
      "Fuel, highway tolls and parking",
      "Airport pick-up and drop-off",
      "Vehicle Wi-Fi and chilled water"
    ]
  },
  {
    id: "tour-3",
    title: "3-Day Southern Coastline and Yala Safari Expedition",
    duration: "3 Days / 2 Nights",
    category: "Wildlife and Beach",
    priceUSD: 220,
    priceLKR: 66000,
    rating: 4.9,
    reviewsCount: 47,
    badge: "Weekend Special",
    heroImage: imgTourSecretBeachSunset,
    routes: ["Colombo / BIA", "Bentota", "Galle Fort", "Mirissa", "Yala Safari", "BIA Drop"],
    description: "Indulge in coastal bliss, watch blue whales in Mirissa, explore 400-year-old colonial fortresses, and spot leopards on an epic Yala safari.",
    itinerary: [
      { day: 1, title: "Colombo to Galle Fort and Mirissa Sunset", details: "Pickup from hotel/airport. Scenic highway drive to Galle Dutch Fort, Turtle Hatchery visit, evening at Mirissa Beach." },
      { day: 2, title: "Mirissa Whale Watching and Yala Arrival", details: "Early morning boat tour for blue whales. Afternoon transfer to Yala and evening relaxation at jungle lodge." },
      { day: 3, title: "Yala Jeep Safari and Return Airport Transfer", details: "4x4 Jeep Safari in Yala National Park. Coastal scenic drive back to Colombo or Airport drop." }
    ],
    inclusions: [
      "Private vehicle with driver",
      "All tolls and fuel",
      "Custom pickup from any Colombo/BIA hotel",
      "Flexible stopping points for photo sessions"
    ]
  },
  {
    id: "tour-4",
    title: "1-Day Sigiriya Rock and Dambulla Heritage Day Tour",
    duration: "1 Day Excursion",
    category: "Day Tour",
    priceUSD: 95,
    priceLKR: 28500,
    rating: 5.0,
    reviewsCount: 91,
    badge: "Day Express",
    heroImage: imgTourGalleSunsetStreet,
    routes: ["Colombo / Negombo / BIA", "Dambulla Caves", "Sigiriya Lion Rock", "Return Drop"],
    description: "Full day excursion from Colombo or BIA Airport to climb the 5th-century Sigiriya Fortress and explore ancient cave temples in total comfort.",
    itinerary: [
      { day: 1, title: "Early Pickup and Ancient Kingdom Tour", details: "06:00 AM pickup. Drive to Dambulla Cave Temple. Climb Sigiriya Fortress, traditional village buffet lunch, return drop by 08:00 PM." }
    ],
    inclusions: [
      "Door-to-door hotel pick and drop",
      "Private luxury vehicle with AC",
      "Driver Bandara Premathilaka",
      "Tolls and fuel included"
    ]
  }
];

export const INITIAL_VEHICLES = [
  {
    id: "veh-1",
    name: "Luxury Comfort Sedan",
    type: "Sedan",
    model: "Toyota Allion / Premio / Axio",
    passengers: "1 - 3 Passengers",
    luggage: "2 Large Bags + Hand Luggage",
    ratePerKmUSD: 0.45,
    ratePerKmLKR: 135,
    dayRateUSD: 55,
    dayRateLKR: 16500,
    airportTransferUSD: 35,
    airportTransferLKR: 10500,
    features: ["Dual Air Conditioning", "Chilled Bottled Water", "Free Onboard Wi-Fi", "USB Fast Chargers", "Bluetooth Sound", "Fully Insured"],
    imageUrl: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop",
    isAvailable: true
  },
  {
    id: "veh-2",
    name: "Premium KDH Luxury Van",
    type: "Luxury Van",
    model: "Toyota HiAce KDH Super GL (High Roof)",
    passengers: "4 - 9 Passengers",
    luggage: "6 Large Bags + Hand Luggage",
    ratePerKmUSD: 0.65,
    ratePerKmLKR: 195,
    dayRateUSD: 75,
    dayRateLKR: 22500,
    airportTransferUSD: 50,
    airportTransferLKR: 15000,
    features: ["Dual Line AC", "Reclining Seats", "Extra Legroom and Headroom", "Free Onboard Wi-Fi", "USB Charging Ports", "Luggage Roof Rack"],
    imageUrl: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=800&auto=format&fit=crop",
    isAvailable: true,
    badge: "Recommended for Families and Groups"
  },
  {
    id: "veh-3",
    name: "Executive 4x4 SUV",
    type: "SUV",
    model: "Toyota Land Cruiser Prado / Montero",
    passengers: "1 - 4 Passengers",
    luggage: "4 Large Bags",
    ratePerKmUSD: 0.85,
    ratePerKmLKR: 255,
    dayRateUSD: 95,
    dayRateLKR: 28500,
    airportTransferUSD: 65,
    airportTransferLKR: 19500,
    features: ["Leather Interior", "Sunroof and Panoramic View", "4WD All-Terrain", "Chilled Mini Fridge", "Free Wi-Fi", "VIP Concierge Service"],
    imageUrl: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop",
    isAvailable: true
  },
  {
    id: "veh-4",
    name: "VIP Coaster Mini Bus",
    type: "Mini Bus",
    model: "Toyota Coaster Executive",
    passengers: "10 - 20 Passengers",
    luggage: "15 Large Bags",
    ratePerKmUSD: 1.10,
    ratePerKmLKR: 330,
    dayRateUSD: 130,
    dayRateLKR: 39000,
    airportTransferUSD: 90,
    airportTransferLKR: 27000,
    features: ["High Capacity AC", "Public Address System", "Reclining High-Back Seats", "Large Luggage Bay", "Onboard Wi-Fi"],
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=800&auto=format&fit=crop",
    isAvailable: true
  }
];

export const INITIAL_GALLERY = [
  {
    id: "gal-scenery-1",
    title: "Sigiriya Ancient Citadel Summit Ruins",
    category: "Heritage",
    location: "Sigiriya",
    imageUrl: imgSigiriyaSummitDrone,
    caption: "Spectacular aerial vista of the 5th-century royal fortress citadel and royal pools perched atop the sheer monolithic rock.",
    isFeatured: true
  },
  {
    id: "gal-scenery-2",
    title: "Weligama Crescent Bay & Coral Coastline",
    category: "Coastal",
    location: "Weligama",
    imageUrl: imgWeligamaBeachAbove,
    caption: "High drone perspective of Weligama's turquoise sweep of beach, where gentle waves meet golden sand.",
    isFeatured: true
  },
  {
    id: "gal-scenery-3",
    title: "Galle Dutch Fort Historic Ocean Ramparts",
    category: "Heritage",
    location: "Galle Fort",
    imageUrl: imgGalleFortRamparts,
    caption: "Historic stone bastion walls and bastion walkways looking out across the sparkling Indian Ocean.",
    isFeatured: true
  },
  {
    id: "gal-scenery-4",
    title: "Polonnaruwa Vatadage Sacred Relic Chamber",
    category: "Culture",
    location: "Polonnaruwa",
    imageUrl: imgPolonnaruwaVatadage,
    caption: "Ancient 12th-century circular relic house featuring masterfully preserved guardstones and moonstone carvings.",
    isFeatured: true
  }
];

export const INITIAL_GUEST_SMILES = [
  {
    id: "smile-1",
    guestName: "Emma & Friends",
    country: "United Kingdom",
    tripType: "BIA Airport Night Pickup & Tour",
    title: "Midnight Arrival Ride in Luxury KDH Van",
    imageUrl: touristCarNight,
    caption: "Relaxed and happy travelers arriving in Sri Lanka, welcomed personally at BIA airport by Bandara Premathilaka.",
    date: "Late Night BIA Pickup"
  },
  {
    id: "smile-2",
    guestName: "Lucas & Backpacker Friends",
    country: "Germany / Europe",
    tripType: "Central Highlands Explorer",
    title: "Sunny Day Island Exploration Tour",
    imageUrl: touristDayBackpackers,
    caption: "Backpacker companions enjoying a bright sunny adventure across Kandy, tea estates, and scenic mountain roads.",
    date: "Highlands Round Tour"
  },
  {
    id: "smile-3",
    guestName: "Jessica & Travel Partner",
    country: "Australia",
    tripType: "Custom Private Chauffeur Tour",
    title: "Peace Signs & Big Smiles with Driver Bandara",
    imageUrl: touristPeaceSign,
    caption: "Genuine local warmth and safe driving! Travelers celebrating another wonderful stop on their island itinerary.",
    date: "Island Highlights Tour"
  },
  {
    id: "smile-4",
    guestName: "Sarah M.",
    country: "Canada",
    tripType: "7-Day Round Island Journey",
    title: "Warm Sri Lankan Hospitality Tour",
    imageUrl: touristYellowTop,
    caption: "Delighted solo traveler enjoying personalized sightseeing, authentic local restaurant recommendations, and friendly guide care.",
    date: "Full Island Odyssey"
  }
];

export const INITIAL_REVIEWS = [
  {
    id: "rev-1",
    author: "Sophie and Liam (UK)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    date: "September 2026",
    serviceUsed: "7-Day Round Island Tour",
    source: "Google Review",
    verified: true,
    comment: "Bandara Premathilaka is without a doubt the best driver and guide in Sri Lanka! He picked us up right at BIA airport in a super clean KDH van. He drove safely, knew all the secret view points in Ella and Sigiriya, and recommended delicious local food. 10/10 service!"
  },
  {
    id: "rev-2",
    author: "Marco and Elena (Italy)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    date: "August 2026",
    serviceUsed: "Airport Drop and Pickup + 4-Day Tour",
    source: "Tripadvisor",
    verified: true,
    comment: "Punctual, friendly, and honest pricing. Bandara treated us like family! The car was brand new with ice cold AC and high speed Wi-Fi. Booking on the website was so easy."
  },
  {
    id: "rev-3",
    author: "David Miller (Australia)",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    date: "July 2026",
    serviceUsed: "BIA Airport Transfer to Galle",
    source: "Direct Booking",
    verified: true,
    comment: "Landed at 2 AM at BIA Airport and Bandara was standing right outside arrivals holding a name sign. Smooth ride along the highway to Galle Fort. Excellent driver!"
  },
  {
    id: "rev-4",
    author: "Anna and Friends (Germany)",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    rating: 5,
    date: "May 2026",
    serviceUsed: "Yala Safari and Beach Tour",
    source: "Google Review",
    verified: true,
    comment: "We booked BP Tours after seeing their glowing reviews. Bandara organized our Yala safari jeep, tea factory visit, and beach drop smoothly. High recommended!"
  }
];

export const INITIAL_BOOKINGS = [
  {
    id: "BP-92041",
    customerName: "Emma Watson",
    email: "emma.w@example.com",
    phone: "+44 7911 123456",
    country: "United Kingdom",
    serviceType: "Round Tour",
    serviceTitle: "7-Day Ultimate Sri Lanka Island Odyssey",
    vehicleType: "Premium KDH Luxury Van",
    pickupLocation: "Bandaranaike International Airport (BIA)",
    dropoffLocation: "BIA Departure Terminal",
    startDate: "2026-10-15",
    endDate: "2026-10-22",
    passengers: 4,
    totalPriceUSD: 450,
    totalPriceLKR: 135000,
    paymentStatus: "Paid (PayHere Deposit)",
    bookingStatus: "Confirmed",
    specialNotes: "Please arrange child safety seat if possible. Flight arrives at 08:30 AM.",
    driverAssigned: "Bandara Premathilaka",
    createdAt: "2026-10-02T09:30:00Z"
  },
  {
    id: "BP-92042",
    customerName: "Johann Schmidt",
    email: "johann@example.de",
    phone: "+49 151 2345678",
    country: "Germany",
    serviceType: "Airport Transfer",
    serviceTitle: "BIA Airport Pickup to Kandy",
    vehicleType: "Luxury Comfort Sedan",
    pickupLocation: "BIA Arrivals",
    dropoffLocation: "Cinnamon Citadel Kandy",
    startDate: "2026-10-18",
    endDate: "2026-10-18",
    passengers: 2,
    totalPriceUSD: 55,
    totalPriceLKR: 16500,
    paymentStatus: "Pay on Arrival",
    bookingStatus: "Pending",
    specialNotes: "Flight UL-504 landing around 14:00 PM.",
    driverAssigned: "Bandara Premathilaka",
    createdAt: "2026-10-04T14:15:00Z"
  }
];

import bpLogo from '../assets/branding/bp_logo.svg';
import touristCarNight from '../assets/gallery/tourist_car_night.jpg';
import touristDayBackpackers from '../assets/gallery/tourist_day_backpackers.jpg';
import touristPeaceSign from '../assets/gallery/tourist_peace_sign.jpg';
import touristYellowTop from '../assets/gallery/tourist_yellow_top.jpg';

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
    imageUrl: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=1200&auto=format&fit=crop",
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
    imageUrl: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1200&auto=format&fit=crop",
    rating: 5.0,
    reviewsCount: 230,
    recommendedDays: "2 Days",
    highlights: ["Nine Arch Viaduct Train Spotting", "Little Adam's Peak Hike", "Ravana Falls", "Tea Factory Tour"]
  },
  {
    id: "dest-3",
    name: "Kandy and Sacred Temple of the Tooth",
    category: "Culture",
    location: "Kandy District, Central Province",
    shortDesc: "Cultural capital of Sri Lanka hosting the sacred tooth relic of Lord Buddha amidst serene mountain lakes.",
    fullDesc: "The last royal capital of Sri Lanka, Kandy blends spiritual heritage with natural splendor. Visit Sri Dalada Maligawa (Temple of the Tooth), stroll around Kandy Lake, watch traditional Kandyan dance performances, and explore Peradeniya Botanical Gardens.",
    imageUrl: "https://images.unsplash.com/photo-1578637387939-43c525550085?q=80&w=1200&auto=format&fit=crop",
    rating: 4.8,
    reviewsCount: 195,
    recommendedDays: "1-2 Days",
    highlights: ["Temple of the Tooth Relic", "Royal Botanical Gardens", "Kandyan Cultural Show", "Kandy Lake Walk"]
  },
  {
    id: "dest-4",
    name: "Yala National Park Safari",
    category: "Wildlife",
    location: "Southern and Uva Provinces",
    shortDesc: "World's highest density of leopards, wild elephant herds, sloth bears, and rich avian life.",
    fullDesc: "Embark on an exhilarating 4x4 jeep safari inside Yala National Park. Famous worldwide for its thriving population of Sri Lankan leopards, wild elephants, crocodiles, peacocks, and coastal dune landscapes.",
    imageUrl: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1200&auto=format&fit=crop",
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
    imageUrl: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200&auto=format&fit=crop",
    rating: 4.9,
    reviewsCount: 215,
    recommendedDays: "2 Days",
    highlights: ["Dutch Fort Ramparts and Lighthouse", "Coconut Tree Hill Mirissa", "Stilt Fishermen Observation", "Surfing and Whale Tours"]
  },
  {
    id: "dest-6",
    name: "Nuwara Eliya Little England",
    category: "Hill Country",
    location: "Nuwara Eliya District",
    shortDesc: "Cool mountain retreat surrounded by rolling Ceylon tea estates, waterfalls, and colonial Tudor architecture.",
    fullDesc: "Experience Sri Lanka's cool climate in Nuwara Eliya. Taste authentic Ceylon tea at Ceylon Tea Trails, stroll Gregory Lake park, visit Post Office heritage, and marvel at St. Clair's and Devon Waterfalls.",
    imageUrl: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1200&auto=format&fit=crop",
    rating: 4.7,
    reviewsCount: 140,
    recommendedDays: "1-2 Days",
    highlights: ["Ceylon Tea Plantation and Factory", "Gregory Lake Boating", "Horton Plains and World's End", "Colonial Post Office"]
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
    heroImage: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1200&auto=format&fit=crop",
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
    heroImage: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=1200&auto=format&fit=crop",
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
    heroImage: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1200&auto=format&fit=crop",
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
    heroImage: "https://images.unsplash.com/photo-1578637387939-43c525550085?q=80&w=1200&auto=format&fit=crop",
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
    id: "gal-1",
    title: "Happy Tourists with Driver Bandara in Van",
    category: "Tourists and Drivers",
    imageUrl: touristCarNight,
    caption: "Memorable night ride with delighted tourists exploring Sri Lanka in comfortable KDH van.",
    isFeatured: true
  },
  {
    id: "gal-2",
    title: "Backpacker Friends Day Tour Experience",
    category: "Tourists and Drivers",
    imageUrl: touristDayBackpackers,
    caption: "Backpacker guests enjoying a sunny day tour across Kandy and tea trails with Bandara Premathilaka.",
    isFeatured: true
  },
  {
    id: "gal-3",
    title: "Peace Sign and Smiles with Guest",
    category: "Tourists and Drivers",
    imageUrl: touristPeaceSign,
    caption: "Friendly local hospitality! Bandara taking guests on a customized island tour.",
    isFeatured: true
  },
  {
    id: "gal-4",
    title: "Warm Sri Lankan Hospitality Tour",
    category: "Tourists and Drivers",
    imageUrl: touristYellowTop,
    caption: "Another happy tourist sharing a big smile during their trip across Sri Lanka.",
    isFeatured: true
  },
  {
    id: "gal-5",
    title: "Nine Arch Bridge Ella Train Crossing",
    category: "Destinations",
    imageUrl: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1200&auto=format&fit=crop",
    caption: "Iconic blue train crossing the Nine Arch Viaduct in Ella.",
    isFeatured: false
  },
  {
    id: "gal-6",
    title: "Sigiriya Lion Rock Fortress Aerial View",
    category: "Destinations",
    imageUrl: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=1200&auto=format&fit=crop",
    caption: "Rising above the green canopy, ancient 5th century citadel.",
    isFeatured: false
  },
  {
    id: "gal-7",
    title: "Yala National Park Wild Leopard",
    category: "Wildlife",
    imageUrl: "https://images.unsplash.com/photo-1534567153574-2b12153a87f0?q=80&w=1200&auto=format&fit=crop",
    caption: "Majestic Sri Lankan leopard resting on rock during Yala 4x4 safari.",
    isFeatured: false
  },
  {
    id: "gal-8",
    title: "Mirissa Coconut Tree Hill Sunset",
    category: "Beaches",
    imageUrl: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1200&auto=format&fit=crop",
    caption: "Palm trees overlooking the Indian Ocean in Southern Sri Lanka.",
    isFeatured: false
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

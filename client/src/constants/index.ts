export const SERVICESMENU: ServiceMenu[] = [
  {
    id: 1,
    name: "📌 All Services",
    slug: "all",
  },
  {
    id: 2,
    name: "🚘 Automotive",
    slug: "automative",
    items: [
      {
        name: "Routine Maintenance",
        slug: "routine-maintenance",
      },
      {
        name: "Diagnostics & Repairs",
        slug: "diagnostics-&-repairs",
      },
      {
        name: "Tire Services",
        slug: "tire-services",
      },
      {
        name: "Brake Services",
        slug: "brake-services",
      },
    ],
  },
  {
    id: 3,
    name: "💼 Business",
    slug: "business",
    items: [
      {
        name: "Routine Maintenance",
        slug: "routine-maintenance",
      },
      {
        name: "Diagnostics & Repairs",
        slug: "diagnostics-&-repairs",
      },
      {
        name: "Tire Services",
        slug: "tire-services",
      },
      {
        name: "Brake Services",
        slug: "brake-services",
      },
    ],
  },
  {
    id: 4,
    name: "💻 Programming & Tech",
    slug: "programming-&-tech",
    items: [
      {
        name: "Routine Maintenance",
        slug: "routine-maintenance",
      },
      {
        name: "Diagnostics & Repairs",
        slug: "diagnostics-&-repairs",
      },
      {
        name: "Tire Services",
        slug: "tire-services",
      },
      {
        name: "Brake Services",
        slug: "brake-services",
      },
    ],
  },
  {
    id: 5,
    name: "🏡 Home & Garden",
    slug: "home-&-garden",
    items: [
      {
        name: "Routine Maintenance",
        slug: "routine-maintenance",
      },
      {
        name: "Diagnostics & Repairs",
        slug: "diagnostics-&-repairs",
      },
      {
        name: "Tire Services",
        slug: "tire-services",
      },
      {
        name: "Brake Services",
        slug: "brake-services",
      },
    ],
  },
  {
    id: 6,
    name: "📦 Labor & Moving",
    slug: "labor-&-moving",
    items: [
      {
        name: "Routine Maintenance",
        slug: "routine-maintenance",
      },
      {
        name: "Diagnostics & Repairs",
        slug: "diagnostics-&-repairs",
      },
      {
        name: "Tire Services",
        slug: "tire-services",
      },
      {
        name: "Brake Services",
        slug: "brake-services",
      },
    ],
  },
  {
    id: 7,
    name: "📕 Lessons",
    slug: "lessons",
    items: [
      {
        name: "Routine Maintenance",
        slug: "routine-maintenance",
      },
      {
        name: "Diagnostics & Repairs",
        slug: "diagnostics-&-repairs",
      },
      {
        name: "Tire Services",
        slug: "tire-services",
      },
      {
        name: "Brake Services",
        slug: "brake-services",
      },
    ],
  },
  {
    id: 8,
    name: "🐶 Pet",
    slug: "pet",
    items: [
      {
        name: "Routine Maintenance",
        slug: "routine-maintenance",
      },
      {
        name: "Diagnostics & Repairs",
        slug: "diagnostics-&-repairs",
      },
      {
        name: "Tire Services",
        slug: "tire-services",
      },
      {
        name: "Brake Services",
        slug: "brake-services",
      },
    ],
  },
  {
    id: 9,
    name: "🛠️ Skilled Trade",
    slug: "skilled-trade",
    items: [
      {
        name: "Routine Maintenance",
        slug: "routine-maintenance",
      },
      {
        name: "Diagnostics & Repairs",
        slug: "diagnostics-&-repairs",
      },
      {
        name: "Tire Services",
        slug: "tire-services",
      },
      {
        name: "Brake Services",
        slug: "brake-services",
      },
    ],
  },
];

export const SERVICES: Service[] = [
  {
    _id: 1,
    companyImg: "provider-1.png",
    companyName: "Town to Town Movers",
    thumbnail: "1.png",
    location: "Staten Island, NY",
    title:
      "I will help you move locally, or within a 40 mile radius of your home",
    fromPrice: 85,
  },
  {
    _id: 2,
    companyImg: "provider-2.png",
    companyName: "Blue Brick Construction",
    thumbnail: "2.png",
    location: "Bronx, NY",
    title: "I will remove any existing concrete sidewalk and pave a new one",
    fromPrice: 400,
  },
  {
    _id: 3,
    companyImg: "provider-3.png",
    companyName: "Rock Solid Construction Services",
    thumbnail: "3.png",
    location: "Westchester, NY",
    title: "I will do excavation work",
  },
  {
    _id: 4,
    companyImg: "provider-4.png",
    companyName: "Water Boy’s Pressure Washing",
    thumbnail: "4.png",
    location: "Long Island, NY",
    title:
      "I will powerwash anything, including retaining walls, fencing, siding, and...",
    fromPrice: 99,
  },
  {
    _id: 5,
    companyImg: "provider-5.png",
    companyName: "Don Draper",
    thumbnail: "5.png",
    location: "Brooklyn, NY",
    title: "I will design a modern business logo",
    fromPrice: 5,
  },
  {
    _id: 6,
    companyImg: "provider-6.png",
    companyName: "Kurt & Co Construction",
    thumbnail: "6.png",
    location: "Queens, NY",
    title:
      "I will remove exiting carpet or hardwood floors and install your...",
  },
  {
    _id: 7,
    companyImg: "provider-7.png",
    companyName: "Good Neighbor Moving Services",
    thumbnail: "7.png",
    location: "Manhattan, NY",
    title: "I will help you with all your in-town moving",
    fromPrice: 125,
  },
  {
    _id: 8,
    companyImg: "provider-8.png",
    companyName: "Melissa’s Interior Painting",
    thumbnail: "8.png",
    location: "Brooklyn, NY",
    title: "I will paint the interior walls of your home",
    fromPrice: 280,
  },
];

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Automotive",
    subCategories: [
      {
        id: 1,
        name: "Air Conditioning & Heating",
      },
      {
        id: 2,
        name: "Bodywork & Painting",
      },
      {
        id: 3,
        name: "Brake Services",
      },
      {
        id: 4,
        name: "Detailing Services",
      },
      {
        id: 5,
        name: "Diagnostics & Repairs",
      },
      {
        id: 6,
        name: "Glass Services",
      },
      {
        id: 7,
        name: "Performance Upgrades",
      },
      {
        id: 8,
        name: "Roadside Assistance",
      },
      {
        id: 9,
        name: "Routine Maintenance",
      },
      {
        id: 10,
        name: "Specialty Services",
      },
      {
        id: 11,
        name: "Tire Services",
      },
    ],
  },
  {
    id: 2,
    name: "Business",
    subCategories: [
      {
        id: 1,
        name: "Admin & Virtual Assistants",
      },
      {
        id: 2,
        name: "Consulting",
      },
      {
        id: 3,
        name: "Data & Business Intelligence",
      },
      {
        id: 4,
        name: "Digital Marketing",
      },
      {
        id: 5,
        name: "Ecommerce Management",
      },
      {
        id: 6,
        name: "Financial Services",
      },
      {
        id: 7,
        name: "Graphic Design",
      },
      {
        id: 8,
        name: "Human Resources",
      },
      {
        id: 9,
        name: "IT Support",
      },
      {
        id: 10,
        name: "Legal Services",
      },
      {
        id: 11,
        name: "Logos & Branding",
      },
      {
        id: 12,
        name: "Music & Audio",
      },
      {
        id: 13,
        name: "Office Supplies & Equipment",
      },
      {
        id: 14,
        name: "Project Management",
      },
      {
        id: 15,
        name: "Real Estate Services",
      },
      {
        id: 16,
        name: "Sales & Customer Service",
      },
      {
        id: 17,
        name: "Staffing & Recruiting",
      },
      {
        id: 18,
        name: "Video & Animation",
      },
      {
        id: 19,
        name: "Writing & Translation",
      },
    ],
  },
  {
    id: 3,
    name: "Programming & Tech",
    subCategories: [
      {
        id: 1,
        name: "AI Development",
      },
      {
        id: 2,
        name: "App Development",
      },
      {
        id: 3,
        name: "Blockchain & Crypto",
      },
      {
        id: 4,
        name: "Cloud & Cybersecurity",
      },
      {
        id: 5,
        name: "Database Management",
      },
      {
        id: 6,
        name: "Data Science & Machine Learning",
      },
      {
        id: 7,
        name: "Ecommerce Development",
      },
      {
        id: 8,
        name: "Game Development",
      },
      {
        id: 9,
        name: "IT Support & Helpdesk",
      },
      {
        id: 10,
        name: "Mobile App Development",
      },
      {
        id: 11,
        name: "Network Setup & Administration",
      },
      {
        id: 12,
        name: "Software Development",
      },
      {
        id: 13,
        name: "Systems Integration",
      },
      {
        id: 14,
        name: "Tech Support",
      },
      {
        id: 15,
        name: "Web Design & Development",
      },
      {
        id: 16,
        name: "Website Maintenance",
      },
    ],
  },
  {
    id: 4,
    name: "Home & Garden",
    subCategories: [
      {
        id: 1,
        name: "Carpet & Upholstery Cleaning",
      },
      {
        id: 2,
        name: "Decorating & Interior Design",
      },
      {
        id: 3,
        name: "Fence Installation & Repair",
      },
      {
        id: 4,
        name: "Furniture Assembly",
      },
      {
        id: 5,
        name: "Gardening & Landscaping",
      },
      {
        id: 6,
        name: "Gutter Cleaning & Repair",
      },
      {
        id: 7,
        name: "Home Cleaning",
      },
      {
        id: 8,
        name: "Home Organization",
      },
      {
        id: 9,
        name: "Home Staging",
      },
      {
        id: 10,
        name: "Lawn Care & Maintenance",
      },
      {
        id: 11,
        name: "Outdoor Lighting Installation",
      },
      {
        id: 12,
        name: "Pest Control",
      },
      {
        id: 13,
        name: "Pool & Spa Maintenance",
      },
      {
        id: 14,
        name: "Pressure Washing",
      },
      {
        id: 15,
        name: "Snow Removal",
      },
      {
        id: 16,
        name: "Tree Trimming & Removal",
      },
      {
        id: 17,
        name: "Window Cleaning",
      },
      {
        id: 18,
        name: "Window Treatments",
      },
    ],
  },
  {
    id: 5,
    name: "Labor & Moving",
    subCategories: [
      {
        id: 1,
        name: "Appliance Installation",
      },
      {
        id: 2,
        name: "Debris Removal",
      },
      {
        id: 3,
        name: "Furniture Moving",
      },
      {
        id: 4,
        name: "Heavy Lifting",
      },
      {
        id: 5,
        name: "Home Cleaning",
      },
      {
        id: 6,
        name: "Junk Removal",
      },
      {
        id: 7,
        name: "Loading & Unloading",
      },
      {
        id: 8,
        name: "Packing Services",
      },
      {
        id: 9,
        name: "Residential Moving",
      },
      {
        id: 10,
        name: "Storage Solutions",
      },
    ],
  },
  {
    id: 6,
    name: "Lessons",
    subCategories: [
      {
        id: 1,
        name: "Art & Craft Lessons",
      },
      {
        id: 2,
        name: "Cooking Classes",
      },
      {
        id: 3,
        name: "Dance Lessons",
      },
      {
        id: 4,
        name: "Language Lessons",
      },
      {
        id: 5,
        name: "Music Lessons",
      },
      {
        id: 6,
        name: "Personal Development",
      },
      {
        id: 7,
        name: "Photography Lessons",
      },
      {
        id: 8,
        name: "Sports Coaching",
      },
      {
        id: 9,
        name: "Tutoring & Academic Help",
      },
      {
        id: 10,
        name: "Yoga & Fitness Classes",
      },
    ],
  },
  {
    id: 7,
    name: "Pet",
    subCategories: [
      {
        id: 1,
        name: "Boarding & Daycare",
      },
      {
        id: 2,
        name: "Grooming Services",
      },
      {
        id: 3,
        name: "Pet Adoption",
      },
      {
        id: 4,
        name: "Pet Nutrition",
      },
      {
        id: 5,
        name: "Pet Photography",
      },
      {
        id: 6,
        name: "Pet Sitting",
      },
      {
        id: 7,
        name: "Pet Training",
      },
      {
        id: 8,
        name: "Pet Walking",
      },
      {
        id: 9,
        name: "Veterinary Services",
      },
    ],
  },
  {
    id: 8,
    name: "Skilled Trade",
    subCategories: [
      {
        id: 1,
        name: "Appliance Repair",
      },
      {
        id: 2,
        name: "Carpentry",
      },
      {
        id: 3,
        name: "Concrete Work",
      },
      {
        id: 4,
        name: "Drywall Installation & Repair",
      },
      {
        id: 5,
        name: "Electrical Work",
      },
      {
        id: 6,
        name: "Flooring Installation & Repair",
      },
      {
        id: 7,
        name: "Glass Installation & Repair",
      },
      {
        id: 8,
        name: "Handyman Services",
      },
      {
        id: 9,
        name: "HVAC Services",
      },
      {
        id: 10,
        name: "Insulation Installation",
      },
      {
        id: 11,
        name: "Locksmith Services",
      },
      {
        id: 12,
        name: "Masonry",
      },
      {
        id: 13,
        name: "Painting",
      },
      {
        id: 14,
        name: "Plumbing",
      },
      {
        id: 15,
        name: "Roofing",
      },
      {
        id: 16,
        name: "Septic System Services",
      },
      {
        id: 17,
        name: "Solar Panel Installation",
      },
      {
        id: 18,
        name: "Welding",
      },
    ],
  },
];

export const METRO_AREAS: State[] = [
  {
    name: "Alabama",
    id: 1,
    cities: [
      { id: 1, name: "Auburn" },
      { id: 2, name: "Birmingham" },
      { id: 3, name: "Decatur" },
      { id: 4, name: "Dothan" },
      { id: 5, name: "Hoover" },
      { id: 6, name: "Huntsville" },
      { id: 7, name: "Madison" },
      { id: 8, name: "Mobile" },
      { id: 9, name: "Montgomery" },
      { id: 10, name: "Tuscaloosa" },
    ],
  },
  {
    name: "Alaska",
    id: 2,
    cities: [
      { id: 1, name: "Anchorage" },
      { id: 2, name: "Fairbanks" },
      { id: 3, name: "Juneau" },
      { id: 4, name: "Kodiak" },
    ],
  },
  {
    name: "Arizona",
    id: 3,
    cities: [
      { id: 1, name: "Chandler" },
      { id: 2, name: "Flagstaff" },
      { id: 3, name: "Gilbert" },
      { id: 4, name: "Glendale" },
      { id: 5, name: "Mesa" },
      { id: 6, name: "Peoria" },
      { id: 7, name: "Phoenix" },
      { id: 8, name: "Scottsdale" },
      { id: 9, name: "Surprise" },
      { id: 10, name: "Tempe" },
      { id: 11, name: "Tucson" },
    ],
  },
  {
    name: "Arkansas",
    id: 4,
    cities: [
      { id: 1, name: "Bentonville" },
      { id: 2, name: "Conway" },
      { id: 3, name: "Fayetteville" },
      { id: 4, name: "Fort Smith" },
      { id: 5, name: "Hot Springs" },
      { id: 6, name: "Jonesboro" },
      { id: 7, name: "Little Rock" },
      { id: 8, name: "Pine Bluff" },
      { id: 9, name: "Springdale" },
    ],
  },
  {
    name: "California",
    id: 5,
    cities: [
      { id: 1, name: "Anaheim" },
      { id: 2, name: "Bakersfield" },
      { id: 3, name: "Burbank" },
      { id: 4, name: "Carlsbad" },
      { id: 5, name: "Chula Vista" },
      { id: 6, name: "Fresno" },
      { id: 7, name: "Laguna Beach" },
      { id: 8, name: "Long Beach" },
      { id: 9, name: "Los Angeles" },
      { id: 10, name: "Merced" },
      { id: 11, name: "Modesto" },
      { id: 12, name: "Monterey" },
      { id: 13, name: "Oakland" },
      { id: 14, name: "Palm Springs" },
      { id: 15, name: "Redding" },
      { id: 16, name: "Sacramento" },
      { id: 17, name: "San Bernardino" },
      { id: 18, name: "San Diego" },
      { id: 19, name: "San Francisco" },
      { id: 20, name: "San Jose" },
      { id: 21, name: "San Luis Obispo" },
      { id: 22, name: "Santa Ana" },
      { id: 23, name: "Santa Barbara" },
      { id: 24, name: "Santa Clarita" },
      { id: 25, name: "Santa Maria" },
      { id: 26, name: "Stockton" },
    ],
  },
  {
    name: "Colorado",
    id: 6,
    cities: [
      { id: 1, name: "Arvada" },
      { id: 2, name: "Aurora" },
      { id: 3, name: "Boulder" },
      { id: 4, name: "Colorado Springs" },
      { id: 5, name: "Denver" },
      { id: 6, name: "Fort Collins" },
      { id: 7, name: "Lakewood" },
      { id: 8, name: "Pueblo" },
    ],
  },
  {
    name: "Connecticut",
    id: 7,
    cities: [
      { id: 1, name: "Bridgeport" },
      { id: 2, name: "Bristol" },
      { id: 3, name: "Danbury" },
      { id: 4, name: "Hartford" },
      { id: 5, name: "Meriden" },
      { id: 6, name: "New Britain" },
      { id: 7, name: "New Haven" },
      { id: 8, name: "Norwalk" },
      { id: 9, name: "Stamford" },
      { id: 10, name: "Waterbury" },
    ],
  },
  {
    name: "Delaware",
    id: 8,
    cities: [
      { id: 1, name: "Dover" },
      { id: 2, name: "Georgetown" },
      { id: 3, name: "Middletown" },
      { id: 4, name: "Milford" },
      { id: 5, name: "New Castle" },
      { id: 6, name: "Newark" },
      { id: 7, name: "Smyrna" },
      { id: 8, name: "Wilmington" },
    ],
  },
  {
    name: "District of Columbia",
    id: 9,
    cities: [{ id: 1, name: "Washington, DC" }],
  },
  {
    name: "Florida",
    id: 10,
    cities: [
      { id: 1, name: "Cape Coral" },
      { id: 2, name: "Daytona Beach" },
      { id: 3, name: "Fort Lauderdale" },
      { id: 4, name: "Fort Myers" },
      { id: 5, name: "Gainesville" },
      { id: 6, name: "Hialeah" },
      { id: 7, name: "Jacksonville" },
      { id: 8, name: "Lakeland" },
      { id: 9, name: "Miami" },
      { id: 10, name: "Ocala" },
      { id: 11, name: "Orlando" },
      { id: 12, name: "Panama City" },
      { id: 13, name: "Pensacola" },
      { id: 14, name: "Sarasota" },
      { id: 15, name: "St. Augustine" },
      { id: 16, name: "St. Petersburg" },
      { id: 17, name: "Tallahassee" },
      { id: 18, name: "Tampa" },
      { id: 19, name: "West Palm Beach" },
    ],
  },
  {
    name: "Georgia",
    id: 11,
    cities: [
      { id: 1, name: "Albany" },
      { id: 2, name: "Athens" },
      { id: 3, name: "Atlanta" },
      { id: 4, name: "Augusta" },
      { id: 5, name: "Brunswick" },
      { id: 6, name: "Columbus" },
      { id: 7, name: "Macon" },
      { id: 8, name: "Roswell" },
      { id: 9, name: "Sandy Springs" },
      { id: 10, name: "Savannah" },
      { id: 11, name: "Statesboro" },
      { id: 12, name: "Valdosta" },
    ],
  },
  {
    name: "Hawaii",
    id: 12,
    cities: [{ id: 1, name: "Honolulu" }],
  },
  {
    name: "Idaho",
    id: 13,
    cities: [
      { id: 1, name: "Boise" },
      { id: 2, name: "Idaho Falls" },
      { id: 3, name: "Lewiston" },
      { id: 4, name: "Meridian" },
      { id: 5, name: "Nampa" },
      { id: 6, name: "Twin Falls" },
    ],
  },
  {
    name: "Illinois",
    id: 14,
    cities: [
      { id: 1, name: "Aurora" },
      { id: 2, name: "Bloomington" },
      { id: 3, name: "Champaign" },
      { id: 4, name: "Chicago" },
      { id: 5, name: "Cicero" },
      { id: 6, name: "Elgin" },
      { id: 7, name: "Joliet" },
      { id: 8, name: "Naperville" },
      { id: 9, name: "Peoria" },
      { id: 10, name: "Rockford" },
      { id: 11, name: "Springfield" },
      { id: 12, name: "Waukegan" },
    ],
  },
  {
    name: "Indiana",
    id: 15,
    cities: [
      { id: 1, name: "Bloomington" },
      { id: 2, name: "Carmel" },
      { id: 3, name: "Evansville" },
      { id: 4, name: "Fort Wayne" },
      { id: 5, name: "Gary" },
      { id: 6, name: "Indianapolis" },
      { id: 7, name: "Muncie" },
      { id: 8, name: "South Bend" },
      { id: 9, name: "Terre Haute" },
    ],
  },
  {
    name: "Iowa",
    id: 16,
    cities: [
      { id: 1, name: "Ames" },
      { id: 2, name: "Cedar Rapids" },
      { id: 3, name: "Council Bluffs" },
      { id: 4, name: "Davenport" },
      { id: 5, name: "Des Moines" },
      { id: 6, name: "Dubuque" },
      { id: 7, name: "Iowa City" },
      { id: 8, name: "Sioux City" },
      { id: 9, name: "Waterloo" },
    ],
  },
  {
    name: "Kansas",
    id: 17,
    cities: [
      { id: 1, name: "Kansas City" },
      { id: 2, name: "Lawrence" },
      { id: 3, name: "Manhattan" },
      { id: 4, name: "Olathe" },
      { id: 5, name: "Overland Park" },
      { id: 6, name: "Salina" },
      { id: 7, name: "Shawnee" },
      { id: 8, name: "Topeka" },
      { id: 9, name: "Wichita" },
    ],
  },
  {
    name: "Kentucky",
    id: 18,
    cities: [
      { id: 1, name: "Bowling Green" },
      { id: 2, name: "Covington" },
      { id: 3, name: "Florence" },
      { id: 4, name: "Frankfort" },
      { id: 5, name: "Lexington" },
      { id: 6, name: "Louisville" },
      { id: 7, name: "Owensboro" },
      { id: 8, name: "Paducah" },
    ],
  },
  {
    name: "Louisiana",
    id: 19,
    cities: [
      { id: 1, name: "Alexandria" },
      { id: 2, name: "Baton Rouge" },
      { id: 3, name: "Lafayette" },
      { id: 4, name: "Lake Charles" },
      { id: 5, name: "Monroe" },
      { id: 6, name: "New Orleans" },
      { id: 7, name: "Shreveport" },
    ],
  },
  {
    name: "Maine",
    id: 20,
    cities: [
      { id: 1, name: "Augusta" },
      { id: 2, name: "Bangor" },
      { id: 3, name: "Lewiston" },
      { id: 4, name: "Portland" },
      { id: 5, name: "Sanford" },
      { id: 6, name: "Westbrook" },
    ],
  },
  {
    name: "Maryland",
    id: 21,
    cities: [
      { id: 1, name: "Annapolis" },
      { id: 2, name: "Baltimore" },
      { id: 3, name: "Bowie" },
      { id: 4, name: "Columbia" },
      { id: 5, name: "Frederick" },
      { id: 6, name: "Gaithersburg" },
      { id: 7, name: "Germantown" },
      { id: 8, name: "Rockville" },
      { id: 9, name: "Silver Spring" },
      { id: 10, name: "Waldorf" },
    ],
  },
  {
    name: "Massachusetts",
    id: 22,
    cities: [
      { id: 1, name: "Boston" },
      { id: 2, name: "Brockton" },
      { id: 3, name: "Cambridge" },
      { id: 4, name: "Lynn" },
      { id: 5, name: "New Bedford" },
      { id: 6, name: "Quincy" },
      { id: 7, name: "Springfield" },
      { id: 8, name: "Worcester" },
    ],
  },
  {
    name: "Michigan",
    id: 23,
    cities: [
      { id: 1, name: "Ann Arbor" },
      { id: 2, name: "Dearborn" },
      { id: 3, name: "Detroit" },
      { id: 4, name: "Flint" },
      { id: 5, name: "Grand Rapids" },
      { id: 6, name: "Kalamazoo" },
      { id: 7, name: "Lansing" },
      { id: 8, name: "Livonia" },
      { id: 9, name: "Saginaw" },
      { id: 10, name: "Sterling Heights" },
      { id: 11, name: "Warren" },
    ],
  },
  {
    name: "Minnesota",
    id: 24,
    cities: [
      { id: 1, name: "Bloomington" },
      { id: 2, name: "Duluth" },
      { id: 3, name: "Eagan" },
      { id: 4, name: "Maple Grove" },
      { id: 5, name: "Minneapolis" },
      { id: 6, name: "Plymouth" },
      { id: 7, name: "Rochester" },
      { id: 8, name: "Saint Paul" },
      { id: 9, name: "Woodbury" },
    ],
  },
  {
    name: "Mississippi",
    id: 25,
    cities: [
      { id: 1, name: "Biloxi" },
      { id: 2, name: "Gulfport" },
      { id: 3, name: "Hattiesburg" },
      { id: 4, name: "Jackson" },
      { id: 5, name: "Meridian" },
      { id: 6, name: "Olive Branch" },
      { id: 7, name: "Oxford" },
      { id: 8, name: "Pascagoula" },
      { id: 9, name: "Tupelo" },
    ],
  },
  {
    name: "Missouri",
    id: 26,
    cities: [
      { id: 1, name: "Columbia" },
      { id: 2, name: "Independence" },
      { id: 3, name: "Kansas City" },
      { id: 4, name: "Lee's Summit" },
      { id: 5, name: "Springfield" },
      { id: 6, name: "St. Charles" },
      { id: 7, name: "St. Joseph" },
      { id: 8, name: "St. Louis" },
    ],
  },
  {
    name: "Montana",
    id: 27,
    cities: [
      { id: 1, name: "Billings" },
      { id: 2, name: "Bozeman" },
      { id: 3, name: "Butte" },
      { id: 4, name: "Great Falls" },
      { id: 5, name: "Helena" },
      { id: 6, name: "Livingston" },
      { id: 7, name: "Missoula" },
    ],
  },
  {
    name: "Nebraska",
    id: 28,
    cities: [
      { id: 1, name: "Bellevue" },
      { id: 2, name: "Columbus" },
      { id: 3, name: "Fremont" },
      { id: 4, name: "Hastings" },
      { id: 5, name: "Kearney" },
      { id: 6, name: "Lincoln" },
      { id: 7, name: "Omaha" },
    ],
  },
  {
    name: "Nevada",
    id: 29,
    cities: [
      { id: 1, name: "Carson City" },
      { id: 2, name: "Henderson" },
      { id: 3, name: "Las Vegas" },
      { id: 4, name: "Mesquite" },
      { id: 5, name: "Reno" },
    ],
  },
  {
    name: "New Hampshire",
    id: 30,
    cities: [
      { id: 1, name: "Concord" },
      { id: 2, name: "Derry" },
      { id: 3, name: "Dover" },
      { id: 4, name: "Manchester" },
      { id: 5, name: "Portsmouth" },
      { id: 6, name: "Rochester" },
    ],
  },
  {
    name: "New Jersey",
    id: 31,
    cities: [
      { id: 1, name: "Atlantic City" },
      { id: 2, name: "Bayonne" },
      { id: 3, name: "Camden" },
      { id: 4, name: "Clifton" },
      { id: 5, name: "Elizabeth" },
      { id: 6, name: "Jersey City" },
      { id: 7, name: "Newark" },
      { id: 8, name: "Paterson" },
      { id: 9, name: "Trenton" },
      { id: 10, name: "Union City" },
      { id: 11, name: "Vineland" },
    ],
  },
  {
    name: "New Mexico",
    id: 32,
    cities: [
      { id: 1, name: "Albuquerque" },
      { id: 2, name: "Alamogordo" },
      { id: 3, name: "Carlsbad" },
      { id: 4, name: "Hobbs" },
      { id: 5, name: "Las Cruces" },
      { id: 6, name: "Rio Rancho" },
      { id: 7, name: "Roswell" },
      { id: 8, name: "Santa Fe" },
    ],
  },
  {
    name: "New York",
    id: 33,
    cities: [
      { id: 1, name: "Albany" },
      { id: 2, name: "Binghamton" },
      { id: 3, name: "Bronx" },
      { id: 4, name: "Brooklyn" },
      { id: 5, name: "Buffalo" },
      { id: 6, name: "Ithaca" },
      { id: 7, name: "Manhattan" },
      { id: 8, name: "New York City" },
      { id: 9, name: "Queens" },
      { id: 10, name: "Rochester" },
      { id: 11, name: "Rome" },
      { id: 12, name: "Schenectady" },
      { id: 13, name: "Staten Island" },
      { id: 14, name: "Syracuse" },
      { id: 15, name: "Utica" },
      { id: 16, name: "White Plains" },
      { id: 17, name: "Yonkers" },
    ],
  },
  {
    name: "North Carolina",
    id: 34,
    cities: [
      { id: 1, name: "Asheville" },
      { id: 2, name: "Cary" },
      { id: 3, name: "Charlotte" },
      { id: 4, name: "Concord" },
      { id: 5, name: "Durham" },
      { id: 6, name: "Fayetteville" },
      { id: 7, name: "Greensboro" },
      { id: 8, name: "Hickory" },
      { id: 9, name: "Raleigh" },
      { id: 10, name: "Wilmington" },
      { id: 11, name: "Winston-Salem" },
    ],
  },
  {
    name: "North Dakota",
    id: 35,
    cities: [
      { id: 1, name: "Bismarck" },
      { id: 2, name: "Fargo" },
      { id: 3, name: "Grand Forks" },
    ],
  },
  {
    name: "Ohio",
    id: 36,
    cities: [
      { id: 1, name: "Akron" },
      { id: 2, name: "Canton" },
      { id: 3, name: "Cincinnati" },
      { id: 4, name: "Cleveland" },
      { id: 5, name: "Columbus" },
      { id: 6, name: "Dayton" },
      { id: 7, name: "Findlay" },
      { id: 8, name: "Mansfield" },
      { id: 9, name: "Medina" },
      { id: 10, name: "Sandusky" },
      { id: 11, name: "Toledo" },
      { id: 12, name: "Youngstown" },
      { id: 13, name: "Zanesville" },
    ],
  },
  {
    name: "Oklahoma",
    id: 37,
    cities: [
      { id: 1, name: "Broken Arrow" },
      { id: 2, name: "Edmond" },
      { id: 3, name: "Moore" },
      { id: 4, name: "Norman" },
      { id: 5, name: "Oklahoma City" },
      { id: 6, name: "Stillwater" },
      { id: 7, name: "Tulsa" },
    ],
  },
  {
    name: "Oregon",
    id: 38,
    cities: [
      { id: 1, name: "Beaverton" },
      { id: 2, name: "Bend" },
      { id: 3, name: "Corvallis" },
      { id: 4, name: "Eugene" },
      { id: 5, name: "Medford" },
      { id: 6, name: "Portland" },
      { id: 7, name: "Salem" },
      { id: 8, name: "Springfield" },
    ],
  },
  {
    name: "Pennsylvania",
    id: 39,
    cities: [
      { id: 1, name: "Allentown" },
      { id: 2, name: "Altoona" },
      { id: 3, name: "Erie" },
      { id: 4, name: "Harrisburg" },
      { id: 5, name: "Lancaster" },
      { id: 6, name: "Philadelphia" },
      { id: 7, name: "Pittsburgh" },
      { id: 8, name: "Reading" },
      { id: 9, name: "Scranton" },
      { id: 10, name: "State College" },
      { id: 11, name: "York" },
    ],
  },
  {
    name: "Rhode Island",
    id: 40,
    cities: [
      { id: 1, name: "Cranston" },
      { id: 2, name: "Newport" },
      { id: 3, name: "Pawtucket" },
      { id: 4, name: "Providence" },
      { id: 5, name: "Warwick" },
    ],
  },
  {
    name: "South Carolina",
    id: 41,
    cities: [
      { id: 1, name: "Aiken" },
      { id: 2, name: "Charleston" },
      { id: 3, name: "Columbia" },
      { id: 4, name: "Greenville" },
      { id: 5, name: "Hilton Head Island" },
      { id: 6, name: "Myrtle Beach" },
      { id: 7, name: "Spartanburg" },
    ],
  },
  {
    name: "South Dakota",
    id: 42,
    cities: [
      { id: 1, name: "Aberdeen" },
      { id: 2, name: "Rapid City" },
      { id: 3, name: "Sioux Falls" },
    ],
  },
  {
    name: "Tennessee",
    id: 43,
    cities: [
      { id: 1, name: "Chattanooga" },
      { id: 2, name: "Knoxville" },
      { id: 3, name: "Memphis" },
      { id: 4, name: "Nashville" },
    ],
  },
  {
    name: "Texas",
    id: 44,
    cities: [
      { id: 1, name: "Austin" },
      { id: 2, name: "Dallas" },
      { id: 3, name: "El Paso" },
      { id: 4, name: "Fort Worth" },
      { id: 5, name: "Houston" },
      { id: 6, name: "San Antonio" },
      { id: 7, name: "Arlington" },
      { id: 8, name: "Corpus Christi" },
      { id: 9, name: "Plano" },
      { id: 10, name: "Laredo" },
      { id: 11, name: "McAllen" },
      { id: 12, name: "Brownsville" },
    ],
  },
  {
    name: "Utah",
    id: 45,
    cities: [
      { id: 1, name: "Provo" },
      { id: 2, name: "Salt Lake City" },
      { id: 3, name: "West Jordan" },
      { id: 4, name: "West Valley City" },
    ],
  },
  {
    name: "Vermont",
    id: 46,
    cities: [
      { id: 1, name: "Burlington" },
      { id: 2, name: "Montpelier" },
      { id: 3, name: "South Burlington" },
    ],
  },
  {
    name: "Virginia",
    id: 47,
    cities: [
      { id: 1, name: "Alexandria" },
      { id: 2, name: "Chesapeake" },
      { id: 3, name: "Hampton" },
      { id: 4, name: "Lynchburg" },
      { id: 5, name: "Newport News" },
      { id: 6, name: "Norfolk" },
      { id: 7, name: "Richmond" },
      { id: 8, name: "Virginia Beach" },
    ],
  },
  {
    name: "Washington",
    id: 48,
    cities: [
      { id: 1, name: "Bellevue" },
      { id: 2, name: "Everett" },
      { id: 3, name: "Seattle" },
      { id: 4, name: "Spokane" },
      { id: 5, name: "Tacoma" },
    ],
  },
  {
    name: "West Virginia",
    id: 49,
    cities: [
      { id: 1, name: "Charleston" },
      { id: 2, name: "Huntington" },
      { id: 3, name: "Morgantown" },
    ],
  },
  {
    name: "Wisconsin",
    id: 50,
    cities: [
      { id: 1, name: "Green Bay" },
      { id: 2, name: "Kenosha" },
      { id: 3, name: "Madison" },
      { id: 4, name: "Milwaukee" },
      { id: 5, name: "Racine" },
    ],
  },
  {
    name: "Wyoming",
    id: 51,
    cities: [
      { id: 1, name: "Casper" },
      { id: 2, name: "Cheyenne" },
      { id: 3, name: "Gillette" },
      { id: 4, name: "Laramie" },
    ],
  },
];

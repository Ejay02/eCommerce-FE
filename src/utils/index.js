export const productTags = [
  "Headphones",
  "Laptop",
  "Mobile",
  "Tablet",
  "Sneakers",
  "Alexa",
  "Oppo",
  "Speakers",
];

export const products = [
  {
    id: 1,
    image: "/images/prod1.jpg",
    brand: "Apple",
    title: "Apple - AirPods Max",
    rating: 4.8,
    description:
      "The AirPods Max bring the magic of AirPods to a stunning over-ear design with high-fidelity audio, Active Noise Cancellation, and spatial audio. Experience the ultimate personal listening experience with custom-built drivers that deliver deep bass, accurate mids, and crisp highs. The breathable knit mesh canopy and memory foam ear cushions provide an exceptional fit for all-day comfort. Advanced software tailors the sound to the geometry of your ear for a rich, consistent listening experience. With up to 20 hours of high-fidelity audio, talk time, or movie playback, you'll never be without your favorite sounds.",
    price: "529.99",
    link: "/product-1",
    categories: ["Electronics", "Apple Products", "Gadgets", "Lifestyle"],
    tags: [
      "Apple",
      "AirPods",
      "Wireless Earbuds",
      "Bluetooth",
      "Noise Cancellation",
    ],
    availability: "125 in Stock",
    SKU: "542",
    reviews: "(221 Reviews)",
    reviewers: [
      {
        name: "John Doe",
        rating: 5,
        comment: "Amazing sound quality and very comfortable to wear!",
        date: "2 Feb, 2024",
      },
      {
        name: "Jane Smith",
        rating: 4,
        comment: "Great headphones but a bit pricey.",
        date: "17 May, 2024",
      },
    ],
    images: [
      "/images/prod01.jpg",
      "/images/prod-11.jpg",
      "/images/prod-111.jpg",
      "/images/prod-1.jpg",
    ],
    sizes: ["One Size"],
    colorCount: 5,
    count: 125,
    shippingAndReturns: {
      shipping: "Free shipping on orders over $50",
      returns: "30-day return policy",
    },
    materials: ["Aluminum", "Stainless Steel", "Memory Foam"],
    dimensions: "187.3 x 168.6 x 83.4 mm",
    careInstructions:
      "Wipe with a soft, dry cloth. Avoid exposure to moisture and extreme temperatures.",
  },
  {
    id: 2,
    image: "/images/prod-2.jpg",
    brand: "Jazwares",
    title: 'Squishmallows 16" Plush - Holiday Cat in Blue Scarf',
    rating: 4.5,
    description:
      "Celebrate the holidays with the adorable Squishmallows Holiday Cat. This 16-inch plush toy is perfect for cuddling and brings festive cheer with its cute blue scarf. Made with soft, high-quality materials, it's a great gift for kids and collectors alike. The Squishmallows Holiday Cat is incredibly soft and squeezable, providing a delightful tactile experience. It's durable enough for playtime, yet gentle enough to be a bedtime companion. Add this charming plush to your collection and spread some holiday joy.",
    price: "24.99",
    link: "/product-2",
    categories: ["Toys & Games", "Holiday", "Gifts"],
    tags: ["Squishmallows", "Plush Toy", "Holiday", "Cat", "Blue Scarf"],
    availability: "32 in Stock",
    SKU: "721",
    reviews: "(421 Reviews)",
    reviewers: [
      {
        name: "Emily Johnson",
        rating: 5,
        comment: "Absolutely adorable and so soft!",
        date: "14 Feb, 2024",
      },
      {
        name: "Michael Brown",
        rating: 4,
        comment: "My kids love it, perfect for the holidays.",
        date: "2 Jan, 2024",
      },
    ],
    images: [
      "/images/prod-2.jpg",
      "/images/prod-22.jpg",
      "/images/prod-222.jpg",
      "/images/prod-2222.jpg",
    ],
    sizes: ["S", "M", "L", "XXL"],
    colorCount: 4,
    count: 32,
    shippingAndReturns: {
      shipping: "Standard shipping rates apply",

      returns:
        "30-day return policy. All returns must comply with our returns policy.",
    },
    materials: ["Polyester"],
    dimensions: "16 inches",
    careInstructions:
      "Spot clean with mild soap and water. Do not machine wash.",
  },
  {
    id: 3,
    image: "/images/prod-3.jpg",
    brand: "Sonos",
    title: "Sonos Move 2 Speaker",
    rating: 3.5,
    description:
      "The Sonos Move 2 is the durable, battery-powered smart speaker for outdoor and indoor listening. With Wi-Fi and Bluetooth connectivity, it provides brilliant sound anywhere. Enjoy deep bass, a wide soundscape, and automatic Trueplay tuning that adjusts the sound for the space you're in. The Move 2's weather-resistant design and long-lasting battery make it perfect for outdoor adventures, while its rich, powerful sound fills any room when you're at home. Stream music, radio, audiobooks, and more from your favorite services, and control it all with your voice, the Sonos app, and Apple AirPlay 2.",
    price: "449.00",
    link: "/product-3",
    categories: ["Electronics", "Audio Devices", "Portable Speakers"],
    tags: ["Sonos", "Move 2", "Smart Speaker", "Bluetooth", "Portable"],
    availability: "75 in Stock",
    SKU: "938",
    reviews: "(901 Reviews)",
    reviewers: [
      {
        name: "Sarah Davis",
        rating: 4,
        comment: "Great sound quality, but a bit heavy to carry around.",
        date: "23 Jan, 2024",
      },
      {
        name: "David Wilson",
        rating: 3,
        comment: "Good speaker but the battery life could be better.",
        date: "23 June, 2024",
      },
    ],
    images: [
      "/images/prod-3.jpg",
      "/images/prod-333.jpg",
      "/images/prod-33.jpg",
      "/images/prod-3333.jpg",
    ],
    sizes: ["One Size"],
    colorCount: 3,
    count: 75,
    shippingAndReturns: {
      shipping: "Free shipping on orders over $50",
      returns:
        "30-day return policy.  All returns must comply with our returns policy.",
    },
    materials: ["Plastic", "Metal"],
    dimensions: "240 x 160 x 126 mm",
    careInstructions:
      "Wipe with a soft, dry cloth. Avoid exposure to moisture and extreme temperatures.",
  },
  {
    id: 4,
    image: "/images/prod-4.jpg",
    brand: "PELONIS",
    title: "42-Inch Tower Fan, Standing Fan with Remote",
    rating: 3,
    description:
      "Stay cool with the PELONIS 42-Inch Tower Fan. This standing fan features three speed settings, oscillation, and a convenient remote control. Its sleek, space-saving design fits perfectly in any room while providing powerful and quiet airflow for a comfortable environment. The fan's wide-angle oscillation ensures even air distribution, while the timer function allows you to set it to turn off automatically after a specified period. The easy-to-use control panel and remote control offer convenient operation, making this fan a great addition to your home or office.",
    price: "79.99",
    link: "/product-4",
    categories: ["Home Appliances", "Cooling Devices", "Fans"],
    tags: ["PELONIS", "Tower Fan", "Standing Fan", "Remote Control", "Cooling"],
    availability: "60 in Stock",
    SKU: "117",
    reviews: "(11 Reviews)",
    reviewers: [
      {
        name: "Chris Martinez",
        rating: 3,
        comment: "Works well but a bit noisy at the highest setting.",
        date: "10 April, 2024",
      },
      {
        name: "Amanda Anderson",
        rating: 3,
        comment: "Decent fan, but the remote control could be more responsive.",
        date: "3 July, 2024",
      },
    ],
    images: [
      "/images/prod-04.jpg",
      "/images/prod-44.jpg",
      "/images/prod-444.jpg",
      "/images/prod-4444.jpg",
    ],
    sizes: ["One Size"],
    colorCount: 1,
    count: 60,
    shippingAndReturns: {
      shipping: "Standard shipping rates apply",
      returns:
        "30-day return policy.  All returns must comply with our returns policy.",
    },
    materials: ["Plastic", "Metal"],
    dimensions: "42 inches",
    careInstructions:
      "Wipe with a soft, dry cloth. Avoid exposure to moisture and extreme temperatures.",
  },
  {
    id: 5,
    image: "/images/prod-5.jpg",
    brand: "Sony",
    title: "PlayStation 5 DualSense Wireless Controller",
    rating: 4.5,
    description:
      "The PlayStation 5 DualSense Wireless Controller offers immersive haptic feedback, dynamic adaptive triggers, and a built-in microphone, all integrated into an iconic comfortable design. Elevate your gaming experience with intuitive control and a deep sense of connectivity. The DualSense controller also features a built-in rechargeable battery, a strong, durable build, and an ergonomic grip for long gaming sessions. Compatible with a variety of PlayStation 5 games, this controller provides a truly immersive experience with its responsive triggers and detailed haptic feedback.",
    price: "69.00",
    link: "/product-5",
    categories: ["Electronics", "Gaming", "Accessories"],
    tags: [
      "Sony",
      "PlayStation 5",
      "DualSense",
      "Wireless Controller",
      "Gaming",
    ],
    availability: "32 in Stock",
    SKU: "401",
    reviews: "(6721 Reviews)",
    reviewers: [
      {
        name: "Jessica Lee",
        rating: 5,
        comment: "Best controller I've ever used, super responsive!",
        date: "15 Feb, 2024",
      },
      {
        name: "Daniel White",
        rating: 4,
        comment: "Great controller but the battery life could be longer.",
        date: "29 March, 2024",
      },
    ],
    images: [
      "/images/prod-05.jpg",
      "/images/prod-55.jpg",
      "/images/prod-555.jpg",
      "/images/prod-5555.jpg",
    ],
    sizes: ["One Size"],
    colorCount: 4,
    count: 32,
    shippingAndReturns: {
      shipping: "Free shipping on orders over $50",
      returns:
        "30-day return policy.  All returns must comply with our returns policy.",
    },
    materials: ["Plastic", "Metal"],
    dimensions: "160 x 66 x 106 mm",
    careInstructions:
      "Wipe with a soft, dry cloth. Avoid exposure to moisture and extreme temperatures.",
  },
  {
    id: 6,
    image: "/images/prod-6.jpg",
    brand: "Samsung",
    title: "Samsung Galaxy Watch 6",
    rating: 4.4,
    description:
      "The Samsung Galaxy Watch6 is your perfect health and fitness companion. Track your workouts, heart rate, and sleep patterns with this sleek and stylish smartwatch. With a bright display and long battery life, stay connected and in control all day long. The Galaxy Watch6 offers advanced health monitoring features, including ECG and blood oxygen levels, as well as a variety of fitness tracking options. Its durable, water-resistant design makes it ideal for all-day wear, whether you're at the gym, at work, or out on the town. Stay in touch with notifications, calls, and messages right from your wrist.",
    price: "209",
    link: "/product-6",
    categories: ["Electronics", "Wearable Technology", "Smartwatches"],
    tags: [
      "Samsung",
      "Galaxy Watch6",
      "Smartwatch",
      "Fitness Tracker",
      "Health Monitor",
    ],
    availability: "100 in Stock",
    SKU: "856",
    reviews: "(501 Reviews)",
    reviewers: [
      {
        name: "Megan Green",
        rating: 5,
        comment: "Love this watch! Great for tracking my workouts.",
        date: "28 Feb, 2024",
      },
      {
        name: "Brian Hall",
        rating: 4,
        comment: "Very functional but a bit pricey.",
        date: "20 May, 2024",
      },
    ],
    images: [
      "/images/prod06.jpg",
      "/images/prod-66.jpg",
      "/images/prod-666.jpg",
      "/images/prod-6666.jpg",
    ],
    sizes: ["S", "M", "L", "XL"],
    colorCount: 3,
    count: 100,
    shippingAndReturns: {
      shipping: "Free shipping on orders over $50",
      returns:
        "30-day return policy.  All returns must comply with our returns policy.",
    },
    materials: ["Stainless Steel", "Silicone"],
    dimensions: "45 x 45 x 12 mm",
    careInstructions:
      "Wipe with a soft, dry cloth. Avoid exposure to moisture and extreme temperatures.",
  },
];

export const servicesData = [
  {
    image: "/images/service.png",
    title: "Free Shipping",
    description: "From all orders over $ 100",
  },
  {
    image: "/images/service-02.png",
    title: "Daily Surprise Offers",
    description: "Save up to 25% off",
  },
  {
    image: "/images/service-03.png",
    title: "Support 24/7",
    description: "Shop with an expert",
  },
  {
    image: "/images/service-04.png",
    title: "Affordable Prices",
    description: "Get factory default price",
  },
  {
    image: "/images/service-05.png",
    title: "Secure Payments",
    description: "100% Protected Payments",
  },
];

export const categoriesData = [
  {
    title: "Computers & Laptop",
    count: "8",
    image: "/images/laptop.jpg",
    alt: "laptop",
  },
  {
    title: "Cameras & Videos",
    count: "10",
    image: "/images/camera.jpg",
    alt: "camera",
  },
  {
    title: "Smart Tvs",
    count: "12",
    image: "/images/tv.jpg",
    alt: "tv",
  },
  {
    title: "Smart Watches",
    count: "18",
    image: "/images/watch.jpg",
    alt: "watch",
  },

  {
    title: "Mobiles & Tablets",
    count: "5",
    image: "/images/phone.jpg",
    alt: "phone",
  },
  {
    title: "Headphones",
    count: "6",
    image: "/images/headphone.jpg",
    alt: "headphone",
  },
  {
    title: "Accessories",
    count: "10",
    image: "/images/acc.jpg",
    alt: "accessories",
  },
  {
    title: "Portable Speakers",
    count: "8",
    image: "/images/speaker.jpg",
    alt: "speaker",
  },
  {
    title: "Home Appliances",
    count: "6",
    image: "/images/homeapp.jpg",
    alt: "home appliance",
  },
  {
    title: "Music & Gaming",
    count: "8",
    image: "/images/ps5.jpg",
    alt: "ps5",
  },
];

export const brandData = [
  { src: "/images/brand-01.png", alt: "apple logo" },
  { src: "/images/brand-02.png", alt: "bose logo" },
  { src: "/images/brand-03.png", alt: "canon logo" },
  { src: "/images/brand-04.png", alt: "dell logo" },
  { src: "/images/brand-05.png", alt: "intel logo" },
  { src: "/images/brand-06.png", alt: "lg logo" },
  { src: "/images/brand-07.png", alt: "samsung logo" },
  { src: "/images/brand-08.png", alt: "scan disk logo" },
];

export const specProd = [
  {
    image: "/images/spec01.jpg",
    brand: "Sony",
    description:
      "Play your PS5 console over your home Wi-Fi with console quality controls using PlayStation Portal Remote Player",
    rating: 4.8,
    price: "197",
    count: 7,
  },
  {
    image: "/images/spec02.jpg",
    brand: "Eufy",
    description:
      "eufy L60 Robot Vacuum Cleaner, Ultra Strong 5,000 Pa Suction to Remove Hair, Dust, iPath Laser Navigation, For Deep Floor Cleaning, Ideal for Hard Floors",
    rating: 4.4,
    price: "199",
    count: 4,
  },
  {
    image: "/images/spec03.jpg",
    brand: "Barbie",
    description:
      "Barbie Moped with Puppy!, FRP56",
    rating: 4.7,
    price: "17",
    count: 14,
  },
];

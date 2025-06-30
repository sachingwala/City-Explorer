const placesData = {
  Coffee: [
    {
      "id": "coffee1",
      "name": "Coffee Corner",
      "image": "/src/assets/coffee-1.jpg",
      "rating": 4.5,
      "numReviews": 120,
      "category": "Coffee Shop",
      "isClaimed": true,
      "openTime": "8:00 AM",
      "closeTime": "10:00 PM",
      "description": "Best coffee in town! Cozy vibes, amazing pastries, and the perfect work spot.",
      "tags": ["Open Now", "Cozy", "Organic Beans"],
      "location": {
        "lat": 37.7749,
        "lng": -122.4194
      },
      "reviews": [
        {
          "rating": 5,
          "comment": "Love the cozy setup and excellent cappuccino!"
        },
        {
          "rating": 4,
          "comment": "Friendly staff, but a bit crowded during weekends."
        }
      ]
    },
    {
      "id": "coffee2",
      "name": "Java House",
      "image": "/src/assets/coffee-2.jpg",
      "rating": 4.2,
      "numReviews": 85,
      "category": "Cafe",
      "isClaimed": false,
      "openTime": "7:00 AM",
      "closeTime": "9:00 PM",
      "description": "Where your mornings begin. Handcrafted coffee and fresh bakery treats daily.",
      "tags": ["Free Wi-Fi", "Bakery", "Pet Friendly"],
      "location": {
        "lat": 37.78825,
        "lng": -122.4324
      },
      "reviews": [
        {
          "rating": 5,
          "comment": "Incredible cold brew and croissants!"
        },
        {
          "rating": 3,
          "comment": "Good coffee but seating is limited."
        }
      ]
    },
    {
      "id": "coffee3",
      "name": "Madarae",
      "image": "/src/assets/coffee-3.jpg",
      "rating": 3.9,
      "numReviews": 57,
      "category": "Cocktail Bars, Venues & Event Spaces, Lounges",
      "isClaimed": true,
      "openTime": "4:00 PM",
      "closeTime": "10:00 PM",
      "description": "A classy place to hang out, enjoy cocktails, and vibe with music.",
      "tags": ["Local Roast", "Open Late", "Chill Vibes"],
      "location": {
        "lat": 37.7825,
        "lng": -122.4356
      },
      "reviews": [
        {
          "rating": 4,
          "comment": "Chill vibe, great cocktails!"
        },
        {
          "rating": 3,
          "comment": "Nice atmosphere but drinks were pricey."
        }
      ]

    }
  ],
  "club": [
    {
      id: "club1",
      name: "Pulse Nightclub",
      image: "/src/assets/club-1.webp",
      rating: 4.6,
      numReviews: 320,
      category: "Club",
      isClaimed: true,
      openTime: "8:00 PM",
      closeTime: "3:00 AM",
      description: "Best music and cocktails in the city. Live DJs every weekend.",
      tags: ["Live DJ", "Cocktails", "Dance Floor"],
      location: { lat: 37.7852, lng: -122.4103 },
      reviews: [
        { rating: 5, comment: "Awesome vibe and great crowd!" },
        { rating: 4, comment: "Drinks were pricey but worth it." }
      ]
    },
    {
      id: "club2",
      name: "Pulse Nightclub",
      image: "/src/assets/club-2.jpg",
      rating: 4.6,
      numReviews: 320,
      category: "Club",
      isClaimed: true,
      openTime: "8:00 PM",
      closeTime: "3:00 AM",
      description: "Best music and cocktails in the city. Live DJs every weekend.",
      tags: ["Live DJ", "Cocktails", "Dance Floor"],
      location: { lat: 37.7852, lng: -122.4103 },
      reviews: [
        { rating: 5, comment: "Awesome vibe and great crowd!" },
        { rating: 4, comment: "Drinks were pricey but worth it." }
      ]
    },
    {
      id: "club3",
      name: "Pulse Nightclub",
      image: "/src/assets/club-3.avif",
      rating: 4.6,
      numReviews: 320,
      category: "Club",
      isClaimed: true,
      openTime: "8:00 PM",
      closeTime: "3:00 AM",
      description: "Best music and cocktails in the city. Live DJs every weekend.",
      tags: ["Live DJ", "Cocktails", "Dance Floor"],
      location: { lat: 37.7852, lng: -122.4103 },
      reviews: [
        { rating: 5, comment: "Awesome vibe and great crowd!" },
        { rating: 4, comment: "Drinks were pricey but worth it." }
      ]
    }
  ],

  "restaurants": [
    {
      id: "restaurant1",
      name: "La Piazza",
      image: "/src/assets/restaurants-1.avif",
      rating: 4.7,
      numReviews: 180,
      category: "Restaurant",
      isClaimed: true,
      openTime: "11:00 AM",
      closeTime: "11:00 PM",
      description: "Authentic Italian cuisine with homemade pasta and wood-fired pizzas.",
      tags: ["Italian", "Family Friendly", "Reservations"],
      location: { lat: 37.7812, lng: -122.4110 },
      reviews: [
        { rating: 5, comment: "Delicious food and great service!" },
        { rating: 4, comment: "Loved the atmosphere!" }
      ]
    },
    {
      id: "restaurant2",
      name: "La Piazza",
      image: "/src/assets/restaurants-2.jpg",
      rating: 4.7,
      numReviews: 180,
      category: "Restaurant",
      isClaimed: true,
      openTime: "11:00 AM",
      closeTime: "11:00 PM",
      description: "Authentic Italian cuisine with homemade pasta and wood-fired pizzas.",
      tags: ["Italian", "Family Friendly", "Reservations"],
      location: { lat: 37.7812, lng: -122.4110 },
      reviews: [
        { rating: 5, comment: "Delicious food and great service!" },
        { rating: 4, comment: "Loved the atmosphere!" }
      ]
    },
    {
      id: "restaurant3",
      name: "La Piazza",
      image: "/src/assets/restaurants-3.jpg",
      rating: 4.7,
      numReviews: 180,
      category: "Restaurant",
      isClaimed: true,
      openTime: "11:00 AM",
      closeTime: "11:00 PM",
      description: "Authentic Italian cuisine with homemade pasta and wood-fired pizzas.",
      tags: ["Italian", "Family Friendly", "Reservations"],
      location: { lat: 37.7812, lng: -122.4110 },
      reviews: [
        { rating: 5, comment: "Delicious food and great service!" },
        { rating: 4, comment: "Loved the atmosphere!" }
      ]
    }
  ],

  "hiking": [
    {
      id: "hike1",
      name: "Sunset Trail",
      image: "/src/assets/hiking-1.webp",
      rating: 4.8,
      numReviews: 210,
      category: "Hiking Trail",
      isClaimed: false,
      openTime: "6:00 AM",
      closeTime: "7:00 PM",
      description: "Scenic hike with panoramic views of the valley and ocean.",
      tags: ["Scenic", "Moderate", "Pet Friendly"],
      location: { lat: 37.8018, lng: -122.4205 },
      reviews: [
        { rating: 5, comment: "Breathtaking views, especially at sunset!" },
        { rating: 4, comment: "Good trail, wear proper shoes." }
      ]
    },
    {
      id: "hike2",
      name: "Sunset Trail",
      image: "/src/assets/hiking-2.jpg",
      rating: 4.8,
      numReviews: 210,
      category: "Hiking Trail",
      isClaimed: false,
      openTime: "6:00 AM",
      closeTime: "7:00 PM",
      description: "Scenic hike with panoramic views of the valley and ocean.",
      tags: ["Scenic", "Moderate", "Pet Friendly"],
      location: { lat: 37.8018, lng: -122.4205 },
      reviews: [
        { rating: 5, comment: "Breathtaking views, especially at sunset!" },
        { rating: 4, comment: "Good trail, wear proper shoes." }
      ]
    },
    {
      id: "hike3",
      name: "Sunset Trail",
      image: "/src/assets/hiking-3.jpg",
      rating: 4.8,
      numReviews: 210,
      category: "Hiking Trail",
      isClaimed: false,
      openTime: "6:00 AM",
      closeTime: "7:00 PM",
      description: "Scenic hike with panoramic views of the valley and ocean.",
      tags: ["Scenic", "Moderate", "Pet Friendly"],
      location: { lat: 37.8018, lng: -122.4205 },
      reviews: [
        { rating: 5, comment: "Breathtaking views, especially at sunset!" },
        { rating: 4, comment: "Good trail, wear proper shoes." }
      ]
    }
  ],

  "hangouts": [
    {
      id: "entertainment1",
      name: "Galaxy Cinemas",
      image: "/src/assets/palisades.jpg",
      rating: 4.4,
      numReviews: 230,
      category: "Entertainment",
      isClaimed: true,
      openTime: "10:00 AM",
      closeTime: "12:00 AM",
      description: "Modern cinema with reclining seats and Dolby surround sound.",
      tags: ["Movie", "Family", "Snacks"],
      location: { lat: 37.7741, lng: -122.4202 },
      reviews: [
        { rating: 4, comment: "Very clean and high-quality screens." },
        { rating: 5, comment: "Great experience every time!" }
      ]
    },
    {
      id: "entertainment2",
      name: "Galaxy Cinemas",
      image: "/src/assets/Lake.jfif",
      rating: 4.4,
      numReviews: 230,
      category: "Entertainment",
      isClaimed: true,
      openTime: "10:00 AM",
      closeTime: "12:00 AM",
      description: "Modern cinema with reclining seats and Dolby surround sound.",
      tags: ["Movie", "Family", "Snacks"],
      location: { lat: 37.7741, lng: -122.4202 },
      reviews: [
        { rating: 4, comment: "Very clean and high-quality screens." },
        { rating: 5, comment: "Great experience every time!" }
      ]
    },
    {
      id: "entertainment3",
      name: "Galaxy Cinemas",
      image: "/src/assets/kenneth-hahn.jpg",
      rating: 4.4,
      numReviews: 230,
      category: "Entertainment",
      isClaimed: true,
      openTime: "10:00 AM",
      closeTime: "12:00 AM",
      description: "Modern cinema with reclining seats and Dolby surround sound.",
      tags: ["Movie", "Family", "Snacks"],
      location: { lat: 37.7741, lng: -122.4202 },
      reviews: [
        { rating: 4, comment: "Very clean and high-quality screens." },
        { rating: 5, comment: "Great experience every time!" }
      ]
    }
  ]
};

export default placesData;
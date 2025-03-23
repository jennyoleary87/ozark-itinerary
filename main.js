/*
03/21/2025
Final Practice - Unit 0 - Practice: Dream Application
Ozark Itinerary
*/

const readlineSync = require('readline-sync');
let authenticated = false; // username and password
let username = "";
let password = "";
let favorites = []; // starts empty, user will fill
let currentDate = new Date();

// WORKING WITH LOOPS - do-while username and password validation
// user can login to see saved data

console.log("Welcome to Ozark Itinerary Planner!");
do {
    // prompt valid login to continue
    const username = readlineSync.question("Enter username: ");
    const password = readlineSync.question("Enter password: ");
    if (username === "usernametest" && password === "passtest456") { // if login matches a set in the database, then say successful
        authenticated = true;
        console.log("Valid login!");
    } else { // if login does not match anything in the database, say failed
        console.log("Invalid login. Please try again.");
    }
} while (!authenticated); // not authenticated

// user preferences - user can see what things to do are within a preferred distance (miles)
// some events or businesses may not be open during the time period of the users stay/trip
// VALUES, DATA TYPES, AND OPERATIONS - readlineSync
let userAccommodation = readlineSync.question("Where are you staying (name): ");
let userAccommodationAddress = readlineSync.question("What is the address of the place you are staying?: ");
// STRINGING CHARACTERS TOGETHER - use backticks to log with embedded variables
console.log(`You are staying at ${userAccommodation} at ${userAccommodationAddress}.`);

const maxDistance = parseInt(readlineSync.question("How many miles are you willing to drive from your accommodation?: "));
console.log(`You are willing to drive ${maxDistance} miles from your accommodation.`);

const stayDuration = parseInt(readlineSync.question("How many days are you staying?: "));
console.log(`You are staying ${stayDuration} days.`)

// BUILDING ARRAYS - data structure to store info on activities and events
// initialize array of data before calling functions
// estimated duration in hours
const activities = [
    {
        id: 1,
        name: "Ha Ha Tonka State Park",
        type: "nature",
        description: "Castle ruins and hiking trails of varying difficulty",
        address: "1491 Missouri D, Camdenton, MO 65020",
        phoneNumber: "573-555-2345",
        estimatedDuration: 4
    },
    {
        id: 2,
        name: "Bridal Cave & Thunder Mountain Park",
        type: "nature",
        description: "Cave tours and weddings galore",
        address: "526 Bridal Cave Rd, Camdenton, MO 65020",
        phoneNumber: "573-346-2676",
        estimatedDuration: 1
    },
    {
        id: 3,
        name: "The Cave Bar & Grill",
        type: "food",
        description: "Outdoor restaurant with a pool and yard games",
        address: "220 Forever Dr, Camdenton, MO 65020",
        phoneNumber: "573-502-2283",
        estimatedDuration: 2
    },
    {
        id: 4,
        name: "Landshark Bar & Grill",
        type: "food",
        description: "",
        address: "",
        phoneNumber: "",
        estimatedDuration: 1
    },
    {
        id: 5,
        name: "Pirate's Cove Adventure Golf",
        type: "entertainment",
        description: "Two courses of pirate themed mini golf",
        address: "5850 Osage Beach Pkwy, Osage Beach, MO 65065",
        phoneNumber: "573-348-4599",
        estimatedDuration: 1
    },
    {
        id: 6,
        name: "Old Kinderhook Resort, Golf Club, and Spa",
        type: "entertainment",
        description: "",
        address: "",
        phoneNumber: "",
        estimatedDuration: 2
    },
    {
        id: 7,
        name: "Split Arrow Boutique",
        type: "shopping",
        description: "Country girl, shake it for me!",
        address: "1206 Bagnell Dam Blvd, Lake Ozark, MO 65049",
        phoneNumber: "573-552-8233",
        estimatedDuration: 0.5
    }
]

const events = [
    {
        id: 1,
        name: "Boutique Crawl",
        type: "shopping",
        description: "Come check out all the boutiques near Bagnell Dam!",
        address: "",
        phoneNumber: "",
        distance: 3
    },
    {
        id: 2,
        name: "Summer Concert Series",
        date: "05-16-2025",
        type: "entertainment",
        description: "Ozark Ampitheater welcomes singers of all genres.",
        address: "2629 North Business Route 5, Camdenton, MO 65020",
        phoneNumber: "573-346-0000",
        distance: 6
    }
];

//CONTROL STRUCTURES AND LOGIC - && to see nearby upcoming events (soon && close)
// upcomingEvents
// personal research said to format dates YYYY/MM/DD instead of MM/DD/YYYY
let eventDate1 = new Date('2025-02-23'); // For event[0] example for pseudo
let eventDate2 = new Date('2025-05-16'); // For event[1] example for pseudo
// user can see what events are coming soon
// console.log(eventDate >= currentDate) - events with future dates
// if event is within preferred mile distance range && event days are with number days of stay,
// console.log(eventDate >= currentDate && distance <= maxDistance); - (soon && close)
console.log("Upcoming Events Nearby! ")
console.log(events[1]); // for pseudo reasons
if (eventDate1 >= currentDate && events[0].distance <= maxDistance) {
    console.log(`${events[0].name} is coming up and within your travel distance!`);
}
if (eventDate2 >= currentDate && events[1].distance <= maxDistance) {
    console.log(`${events[1].name} is coming up and within your travel distance!`);
}

// calculateDistance
// calculate distance from accommodation to activity/event
// const distance = Math
// not sure yet how to embed map features and the math to calculate miles between addresses
// console.log() math (in miles)
// console.log("Distance: ", distance);

// USING ARRAYS - filter to only browse a certain category - filter by shopping, food, entertainment, nature, etc
// activities.filter(activities >= activities.type === type);
console.log("FILTERED ACTIVITIES BY TYPE:");

// Create empty arrays to store filtered results
let natureActivities = [];
let foodActivities = [];
let entertainmentActivities = [];
let shoppingActivities = [];

// Manual filtering by type
for (let i = 0; i < activities.length; i++) {
    if (activities[i].type === "nature") {
        natureActivities.push(activities[i]);
    } else if (activities[i].type === "food") {
        foodActivities.push(activities[i]);
    } else if (activities[i].type === "entertainment") {
        entertainmentActivities.push(activities[i]);
    } else if (activities[i].type === "shopping") {
        shoppingActivities.push(activities[i]);
    }
}

// filter by nature
console.log("NATURE:");
for (let i = 0; i < natureActivities.length; i++) {
    console.log(`${i + 1}. ${natureActivities[i].name} - ${natureActivities[i].description}`);
    console.log(`   Duration: ${natureActivities[i].estimatedDuration} hours`);
    console.log(`   Address: ${natureActivities[i].address}`);
    console.log(`   Phone: ${natureActivities[i].phoneNumber}`);
    console.log("-----");
}

// filter by food
console.log("FOOD:");
for (let i = 0; i < foodActivities.length; i++) {
    console.log(`${i + 1}. ${foodActivities[i].name} - ${foodActivities[i].description}`);
    console.log(`   Duration: ${foodActivities[i].estimatedDuration} hours`);
    console.log(`   Address: ${foodActivities[i].address}`);
    console.log(`   Phone: ${foodActivities[i].phoneNumber}`);
    console.log("-----");
}
// Add filter for other types too

// add item to Favorites list
// user can add what they are most interested in to their favorites
// favorites.push(favItem);
itemToFavorite = activities[4]; // Favorite Pirate's Cove
favItem = {
    id: itemToFavorite.id,
    type: itemToFavorite.type,
    name: itemToFavorite.name
};
favorites.push(favItem);
console.log(`Added ${itemToFavorite.name} to Favorites!`);

itemToFavorite = activities[2]; // The Cave Bar & Grill
favItem = {
    id: itemToFavorite.id,
    type: itemToFavorite.type,
    name: itemToFavorite.name
};
favorites.push(favItem);
console.log(`Added ${itemToFavorite.name} to Favorites!`);

console.log("Favorites: ", favorites);

// --------------------------------------------------------------

// After user has logged in, input preferences, browsed options, chosen favorites - now itinerary can be generated
// generateItinerary
// check user preferences for favorites
// check user preferences for accommodation location
// check user preferences for miles distance range
// check current date to see what events are soon or have already passed
// first fill day with food options
// then fill day with activities
// then fill day with shopping in remaining hours between activities

// How can an itinerary be edited after generation?

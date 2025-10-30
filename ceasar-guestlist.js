// Caesar's VIP Guest Directory Exercise
// Initial guest directory
const guests = {
  ANTONY: {
    title: "General",
    region: "Rome",
    dietaryPreference: "Vegetarian",
    pastGifts: ["Golden Laurel", "Chariot"]
  },
  CICERO: {
    title: "Orator",
    region: "Arpinum",
    dietaryPreference: "Omnivore",
    pastGifts: ["Scroll of Proverbs", "Quill"]
  }
};

console.log("Initial guest directory:", guests);

// Step 1: Add "BRUTUS" to the guest directory
guests.BRUTUS = {
  title: "Senator",
  region: "Rome",
  dietaryPreference: "Vegan",
  pastGifts: ["Silver Dagger", "Marble Bust"]
};

console.log("After adding BRUTUS:", guests);

// Step 2: Update CICERO's past gifts to include a "Golden Lyre"
guests.CICERO.pastGifts.push("Golden Lyre");

console.log("After updating CICERO's gifts:", guests.CICERO.pastGifts);

// Step 3: Retrieve the region of "ANTONY"
const antonyRegion = guests.ANTONY.region;

console.log("ANTONY's region:", antonyRegion);

// Step 4: Remove "CICERO" from the guest list
delete guests.CICERO;

console.log("After removing CICERO:", guests);

// Step 5: Assign ANTONY's profile to a new variable and change the region
const generalProfile = guests.ANTONY;
generalProfile.region = "Egypt";

console.log("generalProfile region:", generalProfile.region);
console.log("ANTONY's region in guests object:", guests.ANTONY.region);

// Question 1: After executing Step 5, what will be the region of ANTONY in the original guests object?
// Answer: ANTONY's region in the original guests object will also be "Egypt". This happens because when I assign an object to a new variable in JavaScript, both variables reference the same object in memory rather than creating a separate copy. So when I modify the region through generalProfile, it actually updates the same object that guests.ANTONY points to.

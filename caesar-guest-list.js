// Caesar's Party Guest List Exercise
// Initial guest list
const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

console.log("Initial guest list:", guests);

// Step 1: Add "BRUTUS" to the beginning of the list
guests.unshift("BRUTUS");
console.log("After adding BRUTUS:", guests);

// Question 1: How can you verify that "BRUTUS" was added to the beginning of the array?
// Answer: I can verify by accessing the array at index 0, which gives me the first element. If I log guests[0] to the console, it should display "BRUTUS".
console.log("First guest (should be BRUTUS):", guests[0]);

// Step 2: Add "AUGUSTUS" and "LUCIA" to the end of the guest list
guests.push("AUGUSTUS", "LUCIA");
console.log("After adding AUGUSTUS and LUCIA:", guests);

// Step 3: Check if "SPARTACUS" is on the list
const spartacusIndex = guests.indexOf("SPARTACUS");
console.log("Index of SPARTACUS:", spartacusIndex);

// Question 2: What would the value of spartacusIndex be if "SPARTACUS" wasn't invited?
// Answer: The indexOf method returns -1 when it cannot find the element you're searching for in the array. So spartacusIndex would equal -1.

// Step 4: Remove "CASSIUS" from the list
const indexToRemove = guests.indexOf("CASSIUS");
guests.splice(indexToRemove, 1);
console.log("After removing CASSIUS:", guests);

// Step 5: Extract the first three guests for special invites
const specialGuests = guests.slice(0, 3);
console.log("Special guests (first 3):", specialGuests);

// Step 6: Sort the guest list while keeping the honored guest at the top
const honoredGuests = guests.slice(0, 1); // Get the first guest to keep them at the top.
const otherGuests = guests.slice(1); // Get all remaining guests after the first one.
otherGuests.sort(); // Put the remaining guests in alphabetical order.
const sortedGuests = honoredGuests.concat(otherGuests); // Join the honored guest back with the sorted guests.
console.log("Final sorted guest list (with BRUTUS at top):", sortedGuests);
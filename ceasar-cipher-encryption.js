// Caesar Cipher Encryption Exercise
// Given variables
const friend = "BRUTUS";
const shiftValue = 3;

// Step 1: Define the Latin alphabet
const alphabet = "abcdefghijklmnopqrstuvwxyz";

console.log("Original name:", friend);
console.log("Shift value:", shiftValue);

// Step 2: Encrypt the name using Caesar Cipher with a loop
let encryptedName = "";

for (let i = 0; i < friend.length; i++) {
  const currentLetter = friend[i];
  const currentIndex = alphabet.indexOf(currentLetter.toLowerCase());
  const newIndex = (currentIndex + shiftValue) % alphabet.length;
  encryptedName += alphabet[newIndex].toUpperCase();
}

console.log("Encrypted name:", encryptedName);

// Question 1: What advantage does using a loop provide over manually encrypting each letter?
// Answer: Loops let me automate the encryption process so I don't have to write separate code for each individual letter. This makes the code more efficient and scalable because it works for any name regardless of how long it is. Without a loop, I'd have to repeat the same encryption steps for every single character, which would be time-consuming and error-prone.

// Question 2: Explain the role of % alphabet.length in our loop. How does it aid in the encryption process?
// Answer: The modulus operator keeps the index within the bounds of the alphabet by wrapping it back to the beginning when it goes past the last letter. For example, if I'm at letter "z" (index 25) and shift by 3, I'd get 28, but 28 % 26 gives me 2, which is "c". This creates a circular rotation effect so the cipher works correctly even when shifting goes beyond "z".
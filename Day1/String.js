/* Write a function to reverse the string.
1. Convert the input into characters
2. Loop them in reverse direction
3. Concatenate the string
4. Print the new string
*/

function reverseString(str) {
    let chars = str.split("");
    let reverse = "";

    for (let i = chars.length - 1; i >= 0; i--) {
        reverse = reverse + chars[i];
    }

    console.log(`Reverse of the String - ${reverse}`);
}

reverseString("Automation");

/*Write a function to check the given string is a palindrome
[If the given string and reverse string are the same, it is a palindrome]
1. Check if the reverse string and original string are the same
2. Return true if same, else the false.
 */
function isPalindrome(str) {
    let letters = str.split("");
    let reverse = "";

    for (let i = letters.length - 1; i >= 0; i--) {
        reverse = reverse + letters[i];
    }

    return str === reverse;
}

console.log(isPalindrome("wow"));
console.log(isPalindrome("Automation")); 

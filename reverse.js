var string = "trust me iam programmer";

// Output remmargorp mai em tsurt
var reverseEntireSentence = reverseBySeparator(string, "");

// Output tsurt em mai remmargorp
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}

console.log("before reverse: " + string);
console.log(reverseEntireSentence);

console.log(reverseEachWord);
function searchAndReplace(sentence, before, after) {
  let index = sentence.indexOf(before); // Find the index of the word to be replaced
  if (sentence[index] === sentence[index].toUpperCase()) { // Check if the word is capitalized
    after = after[0].toUpperCase() + after.slice(1); // Capitalize the first letter of the replacement word
  } else if (sentence[index] === sentence[index].toLowerCase()) { // Check if the word is lowercase
    after = after[0].toLowerCase() + after.slice(1); // Lowercase the first letter of the replacement word
  }
  return sentence.slice(0, index) + after + sentence.slice(index + before.length); // Replace the word using slice and concat
}

console.log(searchAndReplace("He is sleeping on the couch", "sleeping", "Sitting")); // He is Sitting on the couch
console.log(searchAndReplace("This has a spellngi error", "spellngi", "spelling")); // This has a spelling error
console.log(searchAndReplace("His name is Tom", "Tom", "john")); // His name is John
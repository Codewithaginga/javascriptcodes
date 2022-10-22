function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
    
    let result = "";
    result += "The " + myAdjective + " "+ myNoun + " " + myVerb + " " + myAdverb + " to the store.";

    return result;
}

console.log(wordBlanks('dog', 'big', 'ran', 'quickly'));

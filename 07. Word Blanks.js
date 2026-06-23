function WordBlanks(MyAdjective, MyNoun, MyVerb, MyAdverb) {
var result = "";
result +="The " + MyAdjective + " " + MyNoun + " " + MyVerb + " to the store " + MyAdverb + ".";
return result;
}
console.log(WordBlanks("Dog", "Big", "ran", "quickly")); //The Big Dog ran to the store quickly.
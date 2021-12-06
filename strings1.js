// Create a function that, given a string, returns all of that string’s contents, but without blanks. 
// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic". 
function despacer(str){
   for(e in str){
      str = str.replace(' ','')
   }
   return(str)
}
console.log(despacer('ddd   dddeed ed efer'))

// Create a JavaScript function that given a string, returns the integer made from the string’s digits. 
// Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.
function numstr(str){
   var result = str.replace(/\D/g, "");
   return(result)
}
console.log(numstr('grgr4444fedfd'))

// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized).
// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 
// Given "Live from New York, it's Saturday Night!", return "LFNYISN".
function acronizer(str){
   var words = str.split(' ');
   var acronym = "";
   var i = 0;
   while (i<words.length) {
      var nextWord = words[i];
      acronym = acronym + nextWord.charAt(0);
      i++;
   }
   return(acronym.toUpperCase());
}
console.log(acronizer(" there's no free lunch - gotta pay yer way. "))

// Associative arrays are sometimes called maps because a key (string) maps to a value. Given two arrays, 
// create an associative array (map) containing keys of the first, and values of the second. 
// For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true], return {"abc": 42, 3: "wassup", "yo": true}.
function mapper(arr1, arr2){
   if(arr1.length != arr2.length){
      return(undefined)
   }
   var myarr = {};
   arr1.forEach((i, j) => {myarr[i] = arr2[j]})
   return(myarr)
}
console.log(mapper([1, 2, 3], ['a', 'b', 'c']))

// Associative arrays are also called hashes (we’ll learn why later). 
// Build invertHash(assocArr) to convert hash keys to values, and values to keys. 
// Example: given {"name": "Zaphod", "charm": "high", "morals": "dicey"}, 
// return object {"Zaphod": "name", "high":"charm", "dicey": "morals"}.
function invertHash(arr){
   var swapped = {};
   for(var key in arr){
      swapped[arr[key]] = key;
   }
   return(swapped)
}
console.log(invertHash({1 : 'A', 2 : 'B', 3 : 'C'}))
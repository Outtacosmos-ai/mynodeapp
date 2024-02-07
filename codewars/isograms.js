function isIsogram(str){
  str = str.toLowerCase();
  let letterMap = {};
  for (let i = 0; i < str.length; i++){
    let letter = str[i];
    if (letterMap[letter]){
      return false;
      } else {
        letterMap[letter] = true;
      }
    }
  return true;
  }
console.log(isIsogram("Dramtoglyphics"));
console.log(isIsogram("moose"));
console.log(isIsogram("aba"));

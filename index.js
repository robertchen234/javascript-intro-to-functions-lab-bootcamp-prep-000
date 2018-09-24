function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

<<<<<<< HEAD
function sayHiToGrandma(string){
    if (string === string.toLowerCase()){
      var lowerCase = string.toLowerCase();
      return ('I can\'t hear you!');
    }
    else if (string === string.toUpperCase()){
      var upperCase = 'YES INDEED!';
      return ('YES INDEED!');
      }
      else{
        var mixedCase = 'I love you, too.';
        return(mixedCase);
      }
    }
=======
function sayHiToGrandma(string) {
  var lowercase = 'hello!'
  lowercase.toLowerCase() === lowercase // true
  return string
}
>>>>>>> 27040c5104182c8de63a8fdbc6ebc703dc3cdefe

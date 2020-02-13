shout = (string) => {
return string.toUpperCase()
};

function whisper(string) {
return string.toLowerCase()
};

function logShout(string) {
  console.log(string.toUpperCase())
};

function logWhisper(string) {
console.log(string.toLowerCase())
};

function sayHiToGrandma(string) {
  console.log(string)
  console.log(string.toLowerCase())
  if(string.toLowerCase() === string) {
    return ("I can't hear you!")
  } else {
    return "not lower case"
  }
};

function sayHiToGrandma(string) {
  if(string.toUpperCase() === string) {
    return ("YES INDEED!")
  }
};

function sayHiToGrandma(string) {
  if(string === "I love you, Grandma.") {
    return ("I love you, too.")
  }
};

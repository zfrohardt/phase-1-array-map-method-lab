const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(entry => {
    let arr = entry.split(" ");
    arr = arr.map(word => {
      return word[0].toUpperCase() + word.slice(1);
    });
    let returnString = "";
    for(let i = 0; i < arr.length; i++) {
      if (i !== 0) {
        returnString += " ";
      }
      returnString += arr[i];
    }
    return returnString;
  });
}

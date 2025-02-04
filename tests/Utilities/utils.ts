import randomstring from "randomstring";

export default class Utils {
    // Function to generate a random alphanumeric string of a given length
public static generateRandomAlphanumeric = (length = 10) => {
    return randomstring.generate({
      length,
      charset: 'alphanumeric', // allows letters and numbers
    });
  };
  
  // Function to generate a random alphabetic string of a given length
  public static generateRandomAlphabetic = (length = 10) => {
    return randomstring.generate({
      length,
      charset: 'alphabetic', // allows only letters
    });
  };
  
  // Function to generate a random uppercase string of a given length
  public static generateRandomUppercase = (length = 10) => {
    return randomstring.generate({
      length,
      charset: 'uppercase', // allows only uppercase letters
    });
  };
  
  // Function to generate a random lowercase string of a given length
  public static generateRandomLowercase = (length = 10) => {
    return randomstring.generate({
      length,
      charset: 'lowercase', // allows only lowercase letters
    });
  };
  
  // Function to generate a random email string with the format `name@domain.com`
  public static generateRandomEmail = (length = 10) => {
    const username = randomstring.generate({
      length,
      charset: 'alphabetic', // generate alphabetic username
    });
    return `${username}@example.com`; // You can replace example.com with a valid domain
  };

  public static generateRandomMessage = (wordCount = 15) => {
    let message = [];
    const wordList = [
        'apple', 'banana', 'grape', 'orange', 'watermelon', 'kiwi', 'lemon', 'peach', 
        'blueberry', 'strawberry', 'cherry', 'pineapple', 'mango', 'pear', 'apricot', 
        'plum', 'fig', 'nectarine', 'applesauce', 'juice', 'smoothie', 'pomegranate', 
        'cantaloupe', 'melon', 'papaya', 'grapefruit', 'lime', 'berry', 'fruit', 'tropical'
    ];
    for (let i = 0; i < wordCount; i++) {
      const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
      message.push(randomWord);
    }
    return message.join(' '); // Join the array into a string with spaces
  };
}

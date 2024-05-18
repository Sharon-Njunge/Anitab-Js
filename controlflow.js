function findLongestWordLength(str) {
    let wordsArray = str.split(' ');
      let currentLongestWord = "";
    
      for ( let i = 0; i < wordsArray.length; i++ ){
           let currentWord = wordsArray[i];
           if (currentWord.length >   currentLongestWord.length){
               currentLongestWord = currentWord
           }
      }
    return currentLongestWord.length;
    }
    console.log(findLongestWordLength("The quick fox jumped over the lazy dog"));
function string2int(word) { 
    let newword = '';
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] //create variable "nums" for one digit static number.

    let wordLength = 0;
    while (word[wordLength] !== undefined) {
        wordLength++; //loop to get length of word.
    }

    for (let i = 0; i < wordLength; i++) {
        for (let j = 0; j < 10; j++) {
            if (word[i] == nums[j]) {
                newword += word[i] //use nested loop to filter get only string number. 
            }
        }
    }

    let result = 0;
    let newWordLength = 0; 
    let digit = 0; //create variable "digit" for assign place value of newWord.

    while (newword[newWordLength] !== undefined) {
        newWordLength++; //use loop to get a length of newWord 
    }
    digit = newWordLength - 1; //assign (newWordLength - 1) to digit variable.

    for (let i = 0; i < newWordLength; i++) { 
        switch (newword[i]) { //use loop to check each letter. if letter match in condition then calculate result.
            case "1": 
                result += 1 * (10 ** digit); //the result calculate by using power of 10 to keep each number in the correct place value.
                digit--; //decrease "digit" for use in next newWord letter.
                break;
            case "2":
                result += 2 * (10 ** digit);
                digit--;
                break;
            case "3":
                result += 3 * (10 ** digit);
                digit--;
                break;
            case "4":
                result += 4 * (10 ** digit);
                digit--;
                break;
            case "5":
                result += 5 * (10 ** digit);
                digit--;
                break;
            case "6":
                result += 6 * (10 ** digit);
                digit--;
                break;
            case "7":
                result += 7 * (10 ** digit);
                digit--;
                break;
            case "8":
                result += 8 * (10 ** digit);
                digit--;
                break;
            case "9":
                result += 9 * (10 ** digit);
                digit--;
                break;
            case "0":
                digit--;
                break;
        }
    }
    return result;
}

console.log(string2int("abc573"));

console.log(string2int("a5b7c3"));
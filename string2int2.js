function string2int(word) {
    let newword = 0;
    let result = 0;
    let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    for (let i = 0; i < word.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (word[i] == nums[j]) {
                newword += word[i]
            }
        }
    }
    let count = newword.length - 1
    for (let i=1; i<newword.length; i++) {
        console.log(newword[i])
        switch(newword[i]){
            case '1':
                result += 1 * (10**count++);
                break;
            case '2':
                result += 2 * (10**count++);
                break;
            case '3':
                result += 3 * (10**count++);
                break;
            case '4':
                result += 4 * (10**count++);
                break;
            case '5':
                result += 5 * (10**count++);
                break;
            case '6':
                result += 6 * (10**count++);
                break;
            case '7':
                result += 7 * (10**count++);
                break;
            case '8':
                result += 8 * (10**count++);
                break;
            case '9':
                result += 9 * (10**count++);
                break;
            case '0': break;
        }
    }
    return result
}

console.log(string2int("abc134w2"));

console.log(string2int("a5b7c3"));
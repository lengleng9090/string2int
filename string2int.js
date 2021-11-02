function string2int(word){
    let newword=0;
    let nums = [1,2,3,4,5,6,7,8,9,0]
    for (let i=0;i<word.length;i++) {
        for (let j=0;j<nums.length;j++) {
            if(word[i]==nums[j]){
                newword += word[i]
            }
        }
    }
    var newInt = newword-0
    return newInt
}

console.log(string2int("abc573"));

console.log(string2int("a5b7c3"));

function lengthOfLastWord(s: string): number {
    let length = 0;
    let currentLength = 0;

    for(var i = 0; i < s.length; i++) {
        if(s[i] !== " ") {
            currentLength++;
        }
        if((i + 1 < s.length && s[i + 1] === " ") || i + 1 === s.length) {
            if (currentLength > 0) {
                console.log(currentLength);
                length = currentLength;
            }
            currentLength = 0;
        }
    }
    return length;
};
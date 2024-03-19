function isPalindrome(s: string): boolean {
    const noSpaces = s.replace(/[^0-9a-z]/gi, '').toLowerCase();
    console.log(noSpaces);
    for(var i = 0; i < (noSpaces.length / 2); i++) {
        const j = noSpaces.length - 1 - i;
        if(noSpaces[i] !== noSpaces[j]) { return false };
    }
    return true;
};
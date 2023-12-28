function isPalindrome(x: number): boolean {
    const numberString = String(x);
    const reverseString = numberString.split("").reverse().join("");
    return numberString === reverseString;
};
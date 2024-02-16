function lengthOfLastWord(s: string): number {
    return s.split(" ").filter(s => s.length > 0).slice(-1)[0].length;
};
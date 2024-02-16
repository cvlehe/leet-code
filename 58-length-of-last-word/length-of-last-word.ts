function lengthOfLastWord(s: string): number {
    const last = s.split(" ").slice(-1);
    console.log(last);
    return s.split(" ").filter(s => s.length > 0).slice(-1)[0].length;
};
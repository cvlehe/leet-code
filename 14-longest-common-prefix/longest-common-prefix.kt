class Solution {
    fun longestCommonPrefix(strs: Array<String>): String {
        val shortest = strs.minBy(String::length)!!
        var prefix = ""
        for (i in 0..shortest.length - 1) {
            val currentLetter = shortest[i];
            for (str in strs) {
                if (str[i] != currentLetter) {
                    return prefix;
                }
            }
            prefix += currentLetter
        }
        return prefix
    }
}
/* 
Longest Common Substring
Input s1: abcdef
s2: xyabpqrs
Output: ab
Input s1: abcdxyz
s2: xyzabcd
Output: abcd
*/
function longestSubString(s1,s2) {
    if(s1.length < 0 || s2.length < 0){
        return ""
    }
    let logStr = []

    let s1P = 0, s2P = 0
    let temp = []
    for(let i = 0; i < s1.length; i++){
        if(s1[i] == s2[s2P]){
            temp.push(s1[i])            
        }
        s2P++
    }
    return temp;

    // for(let i = 0; i < s1.length; i++){
    //     let temp = []
    //     for(let j = 0; j < s2.length;j++) {
    //         if(s1[i] == s2[j]){
    //             temp.push(s2[i]);
    //         }
    //     }
    //     logStr = Math.max(logStr,temp)
    // }
    return logStr.join('')
}

console.log(longestSubString("abcdef","xyabpqrs"))
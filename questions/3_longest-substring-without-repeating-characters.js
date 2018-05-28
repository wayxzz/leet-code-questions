/*
 *
 * 给定一个字符串，找出不含有重复字符的最长子串的长度。
 * 
 * 示例：
 * 
 * 给定 "abcabcbb" ，没有重复字符的最长子串是 "abc" ，那么长度就是3。
 * 
 * 给定 "bbbbb" ，最长的子串就是 "b" ，长度是1。
 * 
 * 给定 "pwwkew" ，最长子串是 "wke" ，长度是3。请注意答案必须是一个子串，"pwke" 是 子序列  而不是子串。
 * 
 *
 */

 /**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    
    if(typeof s !== 'string') {
        return 0;
    }
    let length = s.length;
    if(length < 2) {
        return length;
    }

    let start = 0,
        temp = '',
        result = '';

    for(let i = 0; i < length; i++) {
        let index = temp.indexOf(s[i]);

        if(index > -1) {
            start = start + index + 1;
        }
        temp = s.substring(start, i + 1);
        if(result.length < temp.length) {
            result = temp;
        }
    }
    return result.length;
};

module.exports = lengthOfLongestSubstring;

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

 const lengthOfLongestSubstring = require("../questions/3_longest-substring-without-repeating-characters");

test('The longest substring without repeating characters of string "" is 0', () => {
    const str = '';
    const result = 0;

    expect(lengthOfLongestSubstring(str)).toBe(result);
})

test('The longest substring without repeating characters of string "abcabcbb" is 3', () => {
    const str = 'abcabcbb';
    const result = 3;

    expect(lengthOfLongestSubstring(str)).toBe(result);
})

test('The longest substring without repeating characters of string "bbbbb" is 1', () => {
    const str = 'bbbbb';
    const result = 1;

    expect(lengthOfLongestSubstring(str)).toBe(result);
})

test('The longest substring without repeating characters of string "pwwkew" is 3', () => {
    const str = 'pwwkew';
    const result = 3;

    expect(lengthOfLongestSubstring(str)).toBe(result);
})

test('The longest substring without repeating characters of string "au" is 2', () => {
    const str = 'au';
    const result = 2;

    expect(lengthOfLongestSubstring(str)).toBe(result);
})

test('The longest substring without repeating characters of string "dvdf" is 3', () => {
    const str = 'dvdf';
    const result = 3;

    expect(lengthOfLongestSubstring(str)).toBe(result);
})

test('The longest substring without repeating characters of string "abcabaabcd" is 4', () => {
    const str = 'abcdabcaba';
    const result = 4;

    expect(lengthOfLongestSubstring(str)).toBe(result);
})

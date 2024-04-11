---
outline: deep
---

### 1、[「长度最小的子数组」](https://leetcode.cn/problems/minimum-size-subarray-sum/)🟠

题目：给定一个含有 `n` 个正整数的数组和一个正整数 `target`，找出该数组中满足其和 `≥ target` 的长度最小的 **连续子数组** `[numsl, numsl+1, ..., numsr-1, numsr]` 并返回其长度**。**如果不存在符合条件的子数组，返回 `0` 。

示例：

```
输入：target = 7, nums = [2,3,1,2,4,3]
输出：2
解释：子数组 [4,3] 是该条件下的长度最小的子数组。
```

思路：这道题是滑动窗口题型中比较简单的，通过维护`left`和`right`指针建立窗口大小，先移动right指针，找到第一个解。再通过移动`left`缩小解的范围。不断重复步骤：如果缩小`left`导致窗口不符合要求 继续增大`right`，直到`left`和`right`到终点并重合。因为题目要求找出**大于等于的连续子数组**，所以可以不用记录每一个数字的相对位置映射

代码：

```js
const fn = (target, nums) => {
    let left = (right = 0); //初始化左右指针
    let result = 0; //子数组的长度
    let sum = 0; //子数组的和
    while (right <= nums.length && left <= right) {
        if (sum >= target) {
            const len = right - left;
            if (len < result || !result) {
                result = len;
            }
            sum -= nums[left]; //left指针移动 子数组的和减去上一个指针的值
            left++;
        } else {
            sum += nums[right]; //right指针移动 子数组的和加上上一个指针的值
            right++;
        }
    }
    return result
};
```

### 2、[「最小覆盖子串」](https://leetcode.cn/problems/minimum-window-substring/)🔴

题目：给你一个字符串 `s` 、一个字符串 `t` 。返回 `s` 中涵盖 `t` 所有字符的最小子串。如果 `s` 中不存在涵盖 `t` 所有字符的子串，则返回空字符串 `""` 。

示例：

```
输入：str = "ADOBECODEBANC", target = "ABC"
输出："BANC"
解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
```

思路：基本逻辑，扩大`right`指针增大窗口找到解，增大`left`指针减小窗口找到最优解，重复前两步。与上一道不同的是，这里定义一个哈希表用于记录**所需的字符串，以及对应每个字符串的个数**。定义一个初始值为哈希表长度的数字`length`，用于记录**还剩多少个字符串未在窗口内**。判断每次增大窗口传入的值是否属于哈希表内记录的字符串，如果是 则**哈希表中对应的个数减少**。当个数减少到`0`时。代表该字符串已经存咋于窗口内。将`length`-1。通过`length === 0 `就可以判断是否开始缩小窗口。此时**先将答案保存**。在进行缩小操作，数据处理基本与扩大相反。

代码：

```js
const fn = (str, target) => {
    let left = (right = 0);
    let need = new Map(); //用于记录具体每个字符串需要多少个
    for (let i = 0; i < target.length; i++) {
        need.set(target[i], (need.get(target[i]) || 0) + 1);
    }
    let needType = need.size; //记录还剩多少个字符串未在窗口内
    let result = "";
    while (right < str.length) {
        const strUnit = str[right];
        right++; //扩大窗口
        if (need.has(strUnit)) {//如果扩大的值是target包含的
            need.set(strUnit, need.get(strUnit) - 1); //在哈希表中对应的字符串-1
            if (need.get(strUnit) === 0) {//当该字符串在哈希表中的个数为0，代表窗口内已经包含该字符串
                needType -= 1; //数量-1
            }
        }
        while (needType === 0) {//第一个答案已出来
            if (!result || right - left < result.length) {
                result = str.substr(left, right - left); //记录答案
            }
            const strUnit = str[left];
            left++; //缩小窗口
            if (need.has(strUnit)) { //如果缩小的值是target包含的
                need.set(strUnit, need.get(strUnit) + 1); //在哈希表中对应的字符串+1
                if (need.get(strUnit) === 1) { //当该字符串在哈希表中的个数为1，代表窗口内已经没有该字符串
                    needType += 1; //数量+1
                }
            }
        }
    }
    return result;
};
```

### 3、[「字符串的排列」](https://leetcode.cn/problems/permutation-in-string/)🟠

题目：给你两个字符串 `s1` 和 `s2` ，写一个函数来判断 `s2` 是否包含 `s1` 的排列。如果是，返回 `true` ；否则，返回 `false` 

示例：

```
输入：s1 = "ab" s2 = "eidbaooo"
输出：true
解释：s2 包含 s1 的排列之一 ("ba")

输入：s1= "ab" s2 = "eidboaoo"
输出：false
```

思路：本题代码与上题基本保持一致，从示例可知，包含的排列是相邻的，所以窗口的大小一定和`s1`的长度有关，所以缩小left的条件不再是找最优解而是长度相同。根据还剩多少个字符串未在窗口内`length==0`返回`true`

代码：

```js
const fn = (s1, s2) => {
    let left = (right = 0);
    let need = new Map();
    for (let i = 0; i < s1.length; i++) {
        need.set(s1[i], (need.get(s1[i]) || 0) + 1);
    }
    let needType = need.size;
    while (right < s2.length) {
        const str = s2[right];
        right++;
        if (need.has(str)) {
            need.set(str, need.get(str) - 1);
            if (need.get(str) === 0) {
                needType -= 1;
            }
        }
        if (right - left === s1.length) {
            //缩小窗口边界  每次缩小都只可能一次所以使用if
            if (needType === 0) {
                return true;
            }
            const str = s2[left];
            left++;
            if (need.has(str)) {
                need.set(str, need.get(str) + 1);
                if (need.get(str) === 1) {
                    needType += 1;
                }
            }
        }
    }
    return false
};
```

### 4、[「无重复字符的最长子串」](https://leetcode.cn/problems/longest-substring-without-repeating-characters/)🟠

题目：给定一个字符串 `s` ，请你找出其中不含有重复字符的 **最长子串** 的长度。

示例：

```
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

思路：这题稍微不一样。题目要求找到最长子串，利用滑动窗口的思想，在`win`映射窗口内所含字符串，当某个字符串的数量**大于1**，这个时候就要缩小窗口，直到这个字符串**等于1**才能继续扩大。比如：ABCA -> BCA ，BCAA ->A。

代码：

```js
const fn = (s) => {
    let left = (right = 0);
    let win = new Map();
    let result = 0;
    while (right < s.length) {
        const rightStr = s[right];
        right++;
        win.set(rightStr, (win.get(rightStr) || 0) + 1); //更新 字符串映射数量
        if (win.size > result) {
            result = win.size;
        }
        while (win.get(rightStr) > 1) { //当数量大于1 缩小窗口
            const leftStr = s[left];
            left++;
            win.set(leftStr, (win.get(leftStr) || 0) - 1);
            if (win.get(leftStr) === 0) {
                win.delete(leftStr);
            }
        }
    }
    return result;
};
```

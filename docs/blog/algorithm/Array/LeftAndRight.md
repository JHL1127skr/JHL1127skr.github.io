---
outline: deep
---

### 1、「二分查找」🟢

题目：给定一个 `n` 个元素有序的（升序）整型数组 `nums` 和一个目标值 `target` ，写一个函数搜索 `nums` 中的 `target`，如果目标值存在返回下标，否则返回 `-1`。

示例：

```
输入: nums = [-1,0,3,5,9,12], target = 9
输出: 4
解释: 9 出现在 nums 中并且下标为 4
```

思路：设置`left`与`right`指针，通过取中间值`mid`分为两个区间，判断目标值是在左区间还是右区间，因为是有序递增数组，所以当判断出存在与某区间，可以直接舍弃另一个区间。将`left`或者`right`移动到`mid`位置缩小区间，直到找到目标值。

代码：

```js
const fn = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // Math.floor((right - left) / 2) + left 防止数字过大
        const val = nums[mid];
        if (val > target) {
            right = mid - 1; //目标值在左半部分，更新右边界
        } else if (val < target) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return -1; //找不到返回 -1
};
```

### 2、「 [两数之和 II](https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/)」🟠

题目：给你一个下标从 **1** 开始的整数数组 `numbers` ，该数组已按 **非递减顺序排列**，你从数组中找出满足相加之和等于目标数 `target` 的两个数。
你可以假设每个输入 **只对应唯一的答案** ，而且你 **不可以** 重复使用相同的元素

示例：

```
输入：numbers = [2,7,11,15], target = 9
输出：[1,2]
解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。返回 [1, 2] 。
```

思路：首先明确一点是：该数组是一个**非递减顺序列表**。定义两个指针`left`与`right`，将两数相加判断与`target`的关系。如果相等，那么返回 下标，但要注意的题目下标是从`1`开始，所以返回的下标都要`+1`。如果相加值大于`target`，那么将`right`向左移动，因为数组是递增数组，向左移动代表着我要换一个更小的数去与`left`所对对应的值相加。如果相加值小于`target`，那么就将`left`向右移动。

代码：

```js
const fn = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) { //题目规定不可以重复使用 所有left和right不可能走到一起
        const val = nums[left] + nums[right];
        if (val > target) {
            right--;
        } else if (val < target) {
            left++;
        } else {
            return [left + 1, right + 1]; //题目是从下标为1开始
        }
    }
};
```

### 3、「 [反转字符串](https://leetcode.cn/problems/reverse-string/)」🟢

题目：编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 `s` 的形式给出。不要给另外的数组分配额外的空间，你必须**[原地](https://baike.baidu.com/item/原地算法)修改输入数组**、使用 O(1) 的额外空间解决这一问题。

示例：

```
输入：s = ["h","e","l","l","o"]
输出：["o","l","l","e","h"]
```

思路：题目要求不允许分配额外空间原地修改数组，通过双指针交换赋值。

代码：

```js
const fn = (s) => {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        const temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
    return s;
};
```

### 4、[「反转字符串中的单词」](https://leetcode.cn/problems/reverse-words-in-a-string/)🟠

题目：给你一个字符串 `s` ，请你反转字符串中 **单词** 的顺序。**词** 是由非空格字符组成的字符串。`s` 中使用至少一个空格将字符串中的 **单词** 分隔开。返回 **单词** 顺序颠倒且 **单词** 之间用单个空格连接的结果字符串。
**注意：**输入字符串 `s`中可能会存在前导空格、尾随空格或者单词间的多个空格。返回的结果字符串中，单词间应当仅用单个空格分隔，且不包含任何额外的空格。

示例：

```
输入：s = "  hello    world  "
输出："world hello"
```

思路：拆分出具体步骤

```
1、去除空格
	需考虑边界，以及最后尾部的空格处理
2、反转整个数组
	左右指针 参考反转字符串
3、反转单词
	遍历出空格处 将空格前的单词进行局部反转
```

代码：

```js
const fn = (str) => {
    // 将字符串转成数组
    const strArr = Array.from(str);
    // 去除多余空格 快慢指针
    let slow = (fast = 0);
    while (fast < strArr.length) {
        //分析两种情况需要交换
        //第一种：该值不为空
        //第二种：单词之间的空格-> 前一个值不为空且不在第一位
        if (strArr[fast] !== " " || (strArr[fast - 1] !== " " && fast !== 0)) {
            strArr[slow] = strArr[fast];
            slow++;
        }
        fast++;
    }
    //此时尾部的空格还没有清理掉，通过修改strArr的长度来删除尾部空格
    strArr.length = strArr[slow - 1] === " " ? slow - 1 : slow;

    //反转整个链表 左右指针
    let left = 0;
    let right = strArr.length - 1;
    while (left < right) {
        const temp = strArr[left];
        strArr[left] = strArr[right];
        strArr[right] = temp;
        left++;
        right--;
    }
    let start = 0; //用来记录每个单词的起点
    //反转具体单词 左右指针
    for (let i = 0; i <= strArr.length; i++) {
        //判断单词边界：值为空或者走到头
        if (strArr[i] === " " || i === strArr.length) {
            let left = start;
            //这里要剔除空格所以-1 考虑到最后一位所以遍历时候循环<=总长度
            let right = i - 1;
            //局部反转
            while (left < right) {
                const temp = strArr[left];
                strArr[left] = strArr[right];
                strArr[right] = temp;
                left++;
                right--;
            }
            //重置单词起点
            start = i+1
        }
    }
    return strArr.join('')
};
```

### 5、「[有序数组的平方](https://leetcode.cn/problems/squares-of-a-sorted-array/)」🟢

题目：给你一个按 **非递减顺序** 排序的整数数组 `nums`，返回 **每个数字的平方** 组成的新数组，要求也按 **非递减顺序** 排序

示例：

```
输入：nums = [-4,-1,0,3,10]
输出：[0,1,9,16,100]
解释：平方后，数组变为 [16,1,0,9,100]。排序后，数组变为 [0,1,9,16,100]
```

思路：使用左右指针对比，比较出最大值依次塞入至新数组中返回。使用前提是 非递减顺序

代码：

```js
const fn = (nums) => {
    let left = 0;
    let right = nums.length - 1;
    let index = right; // 新数组的下标
    const result = [];
    while (left <= right) {
        const leftVal = nums[left] ** 2;
        const rightVal = nums[right] ** 2;
        if (rightVal >= leftVal) {
            result[index] = rightVal;
            right--;
        } else {
            result[index] = leftVal;
            left++;
        }
        index--;
    }
    return result;
};
```

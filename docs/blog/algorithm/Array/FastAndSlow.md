---
outline: deep
---
### 1、「 [删除有序数组中的重复项](https://leetcode.cn/problems/remove-duplicates-from-sorted-array/)」🟢

题目：给你一个 **升序排列** 的数组 `nums` ，请你**[ 原地](http://baike.baidu.com/item/原地算法)** 删除重复出现的元素，使每个元素 **只出现一次** ，返回删除后数组的新长度。元素的 **相对顺序** 应该保持 **一致** 。然后返回 `nums` 中唯一元素的个数。

示例：

```
输入：nums = [1,1,2]
输出：2, nums = [1,2,_]
解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。
```

思路：因为是有序数据，重复项肯定都是相邻的。定义两个指针，`fast`先走，判断是否是`slow`指针相同，如果相同，说明重复项，跳过，`fast`指针继续向前。如果不同`slow`指针向前一步，然后将`fast`位置的值赋值给`slow`。这样能保证`[0,slow]`都是不同的，然后`fast`指针向前进行下一轮对比。最后返回`slow+1`就是唯一元素的个数

代码：

```js
const fn = (nums) => {
    let slow = fast = 0;
    while (fast < nums.length) {
        if (nums[slow] !== nums[fast]) {
            slow++;
            nums[slow] = nums[fast];
        }
        fast++;
    }
    return slow + 1; // 要求返回数组长度 下标+1
};
```

### 2、「 [移除元素](https://leetcode.cn/problems/remove-element/)」🟢

题目：给你一个数组 `nums` 和一个值 `val`，你需要 **[原地](https://baike.baidu.com/item/原地算法)** 移除所有数值等于 `val` 的元素，并返回移除后数组的新长度不要使用额外的数组空间，你必须仅使用 `O(1)` 额外空间并 **[原地](https://baike.baidu.com/item/原地算法)修改输入数组**。元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

示例：

```
输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2]
解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
```

思路：同上，不同的是：通过`fast`去判断当前所在位置的值是否与`val`相同。若相同，跳过，`fast`继续往前走。若不同现将`slow`赋值，再前进`slow`节点。

代码：

```js
const fn = (nums, val) => {
    let slow = (fast = 0);
    while (fast < nums.length) {
        if (nums[fast] !== val) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    return slow;
};
```

### 3、「 [移动零](https://leetcode.cn/problems/move-zeroes/)」🟢

题目：给定一个数组 `nums`，编写一个函数将所有 `0` 移动到数组的末尾，同时保持非零元素的相对顺序。**请注意** ，必须在不复制数组的情况下原地对数组进行操作。

示例：

```
输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]
```

思路：同上，可以理解成删除元素为0的值，然后再将数组后面的值赋值为0

代码：

```js
const fn = function (nums) {
    let slow = (fast = 0);
    while (fast < nums.length) {
        if (nums[fast] !== 0) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    while (slow < nums.length) {
        nums[slow] = 0;
        slow++;
    }
    return nums;
};
```

#### 
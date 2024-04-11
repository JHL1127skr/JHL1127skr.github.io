---
outline: deep
---

### 1、[「区域和检索 - 数组不可变」](https://leetcode.cn/problems/range-sum-query-immutable/)🟢

题目：给定一个整数数组  `nums`，实现`sumRange`方法，快速查询指定区间之内的元素合，会多次调用。

示例：

```
输入： nums = [-2, 0, 3, -5, 2, -1] 。updates = [0, 2], [2, 5], [0, 5]
输出：[ 1, -1, -3]
```

思路：在定义该数组的时候，将新数组的第` index `项的值写作该数组`0～index-1`的之和。这样如果我要计算`第x项`和`第y项`之间的值，只需要用新数组的`第y+1项 - 第x项`就可得到结果。

```
nums = [-2, 0, 3, -5, 2] | [0,2] => -2 + 0 + 3 = 1
prefixSum = [0, -2, -2, 1, -4, -2] | [0,2]=> [2+1] - [0] => 1-0 =1
```

代码：

```js
const Fn = function (nums) {
    const prefixSum = [0]; //  初始化前缀和数组
    for (let key = 1; key <= nums.length; key++) {
        prefixSum[key] = prefixSum[key - 1] + nums[key - 1];
    }
    this.nums = prefixSum;
};
NumArray.prototype.sumRange = function (left, right) {
    return this.nums[right + 1] - this.nums[left];
};
```

### 2、[「二维区域和检索 - 矩阵不可变」](https://leetcode.cn/problems/range-sum-query-2d-immutable/)🟠 未搞懂

题目：给定一个二维矩阵 `matrix`，实现`sumRegion`方法，计算其子矩形范围内元素的总和。该子矩阵的 **左上角** 为 `(row1, col1)` ，**右下角** 为 `(row2, col2)` 

示例：

```
输入：matrix = [
	[3,0,1,4,2],
	[5,6,3,2,1],
	[1,2,0,1,5],
	[4,1,0,1,7],
	[1,0,3,0,5]
]
updates = [2,1,4,3],[1,1,2,2],[1,2,2,4]

输出：[ 8, 11, 12]
```

思路：

代码：
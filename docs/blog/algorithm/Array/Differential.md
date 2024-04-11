---
outline: deep
---

### 1、「区间加法」🟠

题目：假设你有一个长度为`n`的数组，初始情况下所有的数字均为`0`，你将会被给出`k`个跟新操作。每个操作被表示一个个三元组`[startIndex,endIndex,inc]`。你需要将数组中`[startIndex...endIndex]`区间内的值加`inc`。返回`k`次操作后的数组。

示例：

```
输入：length = 5，updates = [[1,3,2],[2,4,3],[0,2,-2]]
输出：[-2,0,3,5,3]
```

思路：通过 当前项 减去 前一项 的值求出一个`diff`数组。此时，对`diff`数组中的 `startIndex`和` endIndex + 1`操作（`startIndex`（`+=val`）与`endIndex`（-=val）作为区间边界）就相当于对原数组的`[startIndex...endIndex]`的每一项操作。最后再通过`diff`数组的 前一项 加上 原数组的 当前项 求出新数。

```
构造：diff数组:原数组 当前项 - 前一项
[8,2,6,3,1] => [8,-6,4,-3,-2]
操作：对startIndex += val 和 endIndex + 1 -= val 操作
[1,3,3]: [8,-6,4,-3,-2] => [8,-3,4,-3,-5]
还原：新数组：diff数组当前项 + 新数组的前一项
[8,-3,4,-3,-5]
[8]->[8,5]->[8,5,9]->[8,5,9,6]->[8,5,9,6,1]
```

代码：

```js
const fn = (length, updates) => {
    const arr = new Array(length).fill(0); //根据题目构建 原数组
    const diff = [];
    diff[0] = arr[0];
    //构建diff数组
    for (let i = 1; i < arr.length; i++) {
        diff[i] = arr[i] - arr[i - 1];
    }
    //对diff数组操作
    for (let i = 0; i < updates.length; i++) {
        const item = updates[i];
        const left = item[0];
        const right = item[1];
        const val = item[2];
        diff[left] += val;
        diff[right + 1] -= val;
    }
    //还原diff数组
    const result = [];
    result[0] = diff[0];
    for (let i = 0; i < diff.length; i++) {
        result[i] = result[i - 1] + diff[i];
    }
    return result;
};
```

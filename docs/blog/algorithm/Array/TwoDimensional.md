---
outline: deep
---

### 1、[「旋转图像」](https://leetcode.cn/problems/rotate-image/)🟠

题目：给定一个 *n* × *n* 的二维矩阵 `matrix` 表示一个图像。请你将图像顺时针旋转 90 度。你必须在 **[原地](https://baike.baidu.com/item/原地算法)** 旋转图像，这意味着你需要直接修改输入的二维矩阵。**请不要** 使用另一个矩阵来旋转图像。

示例：

```
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[[7,4,1],[8,5,2],[9,6,3]]
```

思路：

```
顺指针：按照左上到右下的对角线进行镜像对称，再对矩阵的每一行进行反转
	|1|2|3|      |1|4|7|      |7|4|1|  
	|4|5|6| ---> |2|5|8| ---> |8|5|2| 
	|7|8|9|			 |3|6|9|      |9|6|3|
逆时针：按照左上到右下的对角线进行镜像对称，再对矩阵上下每一层进行反转
  |1|2|3|      |1|4|7|      |3|6|9|  
  |4|5|6| ---> |2|5|8| ---> |2|5|8|
  |7|8|9|			 |3|6|9|      |1|4|7|
```

代码：

```js
 const length = matrix.length;
    for (let i = 0; i < length; i++) {
        for (let j = i; j < length; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    for (let i = 0; i < length; i++) {
        let left = 0
        let right = length -1
        while(left<right){
            const temp = matrix[i][left]
            matrix[i][left] = matrix[i][right]
            matrix[i][right] =temp
            left++
            right--
        }
    }
```

### 2、[「螺旋矩阵」](https://leetcode.cn/problems/spiral-matrix/)🟠

题目：给你一个 `m` 行 `n` 列的矩阵 `matrix` ，请按照 **顺时针螺旋顺序** ，返回矩阵中的所有元素

示例：

```
输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
输出：[1,2,3,6,9,8,7,4,5]
```

思路：定义四条边，遍历每条边之后相应的往内部推进。

代码：

```js
const fn = (matrix) => {
    const length = matrix[0].length; //定义长
    const width = matrix.length; //定义宽
    let top = 0; //定义上边
    let right = length - 1; //定义右边
    let bottom = width - 1; //定义下边
    let left = 0; //定义左边
    const result = [];
    //如果返回集合中长度比所有元素加起来小，代表没有遍历完
    while (result.length < length * width) {
        //从左到右遍历top边
        if (top <= bottom) {
            for (let i = left; i <= right; i++) {
                result.push(matrix[top][i]);
            }
            top++; //top边往下收缩
        }
        //从上到下遍历right边
        if (left <= right) {
            for (let i = top; i <= bottom; i++) {
                result.push(matrix[i][right]);
            }
            right--; //right边往右收缩
        }
        //从右往左遍历bottom边
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--; //bottom边向上收缩
        }
       //从下往上遍历left边
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;//left向右收缩
        }
    }
    return result;
};
```

### 3、[「螺旋矩阵 II」](https://leetcode.cn/problems/spiral-matrix-ii/)🟠

题目：给你一个正整数 `n` ，生成一个包含 `1` 到 `n2` 所有元素，且元素按顺时针顺序螺旋排列的 `n x n` 正方形矩阵`matrix` 。

示例：

```
输入：n = 3
输出：[[1,2,3],[8,9,4],[7,6,5]]
```

思路：同上

代码：

```js
var fn = function (n) {
    //创建一个二维数组
    const matrix = new Array(n).fill().map((item) => new Array(n).fill(0));
    let top = (left = 0);
    let right = (bottom = n - 1);
    let num = 1;//塞入的值 
    while (num <= n ** 2) {
        if (top <= bottom) {
            for (let i = left; i <= right; i++) {
                matrix[top][i] = num++;
            }
            top++;
        }
        if (left <= right) {
            for (let i = top; i <= bottom; i++) {
                matrix[i][right] = num++;
            }
            right--;
        }
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                matrix[bottom][i] = num++;
            }
            bottom--;
        }
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = num++;
            }
            left++;
        }
    }
    return matrix;
};
```

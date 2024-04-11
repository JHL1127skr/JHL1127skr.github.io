---
outline: deep
---

### 1、[「删除链表的倒数第 N 个结点」](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/)🟠

题目：给你一个链表，删除链表的倒数第 `n` 个结点，并且返回链表的头结点。

示例：

```
输入：head = [1,2,3,4,5], n = 2
输出：[1,2,3,5]
```

思路：快慢指针 。先让`fast`指针走n步，这个时候剩下`k-n`个节点（k为总长度），这时让`slow`节点从头和`fast`节点一起走，当`fast`节点为空。那么`slow`就刚好走到了倒数`n`节点上。
因为本题是让删除倒数第`n`个节点，所以当`fast.next`为空的时候，就代表`slow`已经走到倒数第`n+1`个，然后将`slow.next.next`赋值给`slow.next`。删除第`n`个节点

代码：

```js
var removeNthFromEnd = function (head, n) {
    let slow = (fast = head);
    while (n--) {
        fast = fast.next;
    }
    if (!fast) {  //如果此时fast不存在，说明n与head的长度一样。删除倒数第n个就是删除第一个。
        return head.next;
    }
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    const temp = slow.next.next;
    slow.next = temp;
    return head;
};
```

### 2、[「链表的中间结点」](https://leetcode.cn/problems/middle-of-the-linked-list/)🟢

题目：给你单链表的头结点 `head` ，请你找出并返回链表的中间结点。如果有两个中间结点，则返回第二个中间结点。

示例：

```
输入：head = [1,2,3,4,5]
输出：[3,4,5]
解释：链表只有一个中间结点，值为 3 。
输入：head = [1,2,3,4,5,6]
输出：[4,5,6]
解释：该链表有两个中间结点，值分别为 3 和 4 ，返回第二个结点。
```

思路：快慢指针 。同时设置`fast`和`slow`指针，`slow`走一步，`fast`走两步。当`fast`走到末尾，代表slow走到中间节点。如果长度为偶数，那么此时`slow`指向的第二个中间节点

代码：	

```js
var fn = function (head) {
    let slow = (fast = head);
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
};
```

### 3、[「环形链表」](https://leetcode.cn/problems/linked-list-cycle/)🟢

题目：给你一个链表的头节点 `head` ，判断链表中是否有环。

示例：

```
输入：head = [3,2,0,-4], pos = 1  3->2->0->-4 ->2->0->...
输出：true
解释：链表中有一个环，其尾部连接到第二个节点
```

思路：快慢指针。同时设置`fast`和`slow`指针，`slow`走一步，`fast`走两步，当两个指针重合代表着存在环

代码：

```js
const fn =(head) => {
    let slow = fast = head;
    while (fast && fast.next) {
        slow = slow.next; // 慢指针移动一步
        fast = fast.next.next; // 快指针移动两步
        if (slow === fast) { // 如果快指针和慢指针相遇，说明链表包含环
            return true;
        }
    }
    return false; // 快指针到达链表末尾，说明链表不包含环
}
```

### 4、[「环形链表 II」](https://leetcode.cn/problems/linked-list-cycle-ii/)🟠

题目：给定一个链表的头节点  `head` ，返回链表开始入环的第一个节点。 *如果链表无环，则返回 `null`*。**不允许修改链表。**

示例：

```
输入：head = [3,2,0,-4], pos = 1
输出：返回索引为 1 的链表节点
解释：链表中有一个环，其尾部连接到第二个节点。
```

思路：快慢指针。同时设置`fast`和`slow`指针，`slow`走一步，`fast`走两步，当两个指针重合代表着存在环。设两指针重合时候，`slow`走了`k`步，那么`fast`一定走了`2k`步。且这时`k`代表着环的长度，再假设相交点距离环的起点为`m`，那么此时整条链表的起点到环的起点为`k-m`，相交点到环的起点也是`k-m`。此时将`slow`的指针指向链的起点，`slow`与`fast`同时每次走一步，下次相遇的点就是环的起点。

代码：

```js
const fn = (head) => {
    let slow = (fast = head);
    while (fast && fast.next) {
        slow = slow.next; // 慢指针移动一步
        fast = fast.next.next; // 快指针移动两步
        if (slow === fast) {
            // 如果快指针和慢指针相遇，说明链表包含环
            slow = head; // 将慢指针重新指向链表头节点
            while (slow !== fast) {
                // 查找环的起点
                slow = slow.next;
                fast = fast.next;
            }
            return slow; // 返回环的起点
        }
    }
    return null; // 快指针到达链表末尾，说明链表不包含环
};

```

### 5、[「相交链表」](https://leetcode.cn/problems/intersection-of-two-linked-lists/)🟢

题目：给你两个单链表的头节点 `headA` 和 `headB` ，请你找出并返回两个单链表相交的起始节点。如果两个链表不存在相交节点，返回 `null` 

示例：

```
输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
输出：Intersected at '8'
```

思路：双指针。用两个指针分别指向两条链表，将两条链表拼接，也就是遍历完第一条链表之后开始遍历第二条，这样当两个指针相等时便进入了公共部分 。

```
common 8->4->5
A 4->1->8->4-5=>5->6->1-> 8->4->5
B 5->6->1->8->4->5=>4->1-> 8->4-5
```

代码：

```js
const fn = (headA, headB) => {
    let slow = headA;
    let fast = headB;
    while (slow !== fast) {
        if (!slow) {  //A链表走完了 接入B链表
            slow = headB;
        } else {
            slow = slow.next;
        }
        if (!fast) {
            fast = headA;
        } else {
            fast = fast.next;
        }
    }
    return slow;
};
```

### 6、[「反转链表」](https://leetcode.cn/problems/reverse-linked-list/)🟢

题目：给你单链表的头节点 `head` ，请你反转链表，并返回反转后的链表

示例：

```
输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
```

思路：双指针，定义两个指针`cur`与`pre`，`pre`在`cur`前一个节点，`pre`初始值为`null`。每一次循环让`pre.next `指向`cur `，完成一次局部的反转，在将`cur`和`pre`同时前进一步，直到`cur`为`null`

代码：

遍历：

```js
const reverseList = (head) => {
    let cur = head;
    let pre = null;
    while (cur) {
        const temp = cur.next; //临时储存
        cur.next = pre; //局部反转
        //同时前进 注意：先前进 pre
        pre = cur;
        cur = temp;
    }
    return pre;
};
```

递归：（看不懂

```js
const reverseList = (head) => {
    if (!head || !head.next) {
        return head;
    }
    const newList = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return newList;
};
```



### 7、[「反转链表 II」](https://leetcode.cn/problems/reverse-linked-list-ii/)🟠 未搞懂

题目：给你单链表的头指针 `head` 和两个整数 `left` 和 `right` ，其中 `left <= right` 。请你反转从位置 `left` 到位置`right` 的链表节点，返回 **反转后的链表**。

示例：

```
输入：head = [1,2,3,4,5], left = 2, right = 4
输出：[1,4,3,2,5]
```

思路：

代码：
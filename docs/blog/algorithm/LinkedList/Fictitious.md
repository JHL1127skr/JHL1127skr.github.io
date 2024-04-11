---
outline: deep
---


### 1、[「移除链表元素」](https://leetcode.cn/problems/remove-linked-list-elements/)🟢

题目：给你一个链表的头节点 `head` 和一个整数 `val` ，请你删除链表中所有满足 `Node.val == val` 的节点，并返回 **新的头节点** 

示例：

```
输入：head = [1,2,6,3,4,5,6], val = 6
输出：[1,2,3,4,5]
```

思路：在链表中删除节点的方式为：将该节点的前一个节点指向该节点的后一个节点。假如要删除的是头节点，它不存在前一个节点，这是可以用到`虚拟头节点`，链接在`head`上，就可以吧每一步的操作统一。但是单向链表中没有办法拿到之前的值，只能将指针定在第一个节点上，将`cur.next` 指向 `cur.next.next`

代码：

```js
const fn = (head,target) => {
    const dummy = new ListNode()
    dummy.next = head
    const cur = dummy
    while (cur.next) {
      if(cur.next.val == target){
        cur.next = cur.next.next
      }else{
        cur = cur.next
      }
    }
    return dummy.next
}
```

### 2、[「合并两个有序链表」](https://leetcode.cn/problems/merge-two-sorted-lists/)🟢

题目：将两个升序链表合并为一个新的 **升序** 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的

示例：

```
输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
```

思路：创建一个新的节点`dummy`用来接收新链表，同时新建一个指针`currnt`指向新节点。比较`l1`和`l2`的值，谁的值比较小就放进新链表中，且该链表前进一位，且`current`也前进。一直对比到到直到有一方的值为`null`，再将没有为`null`的链表接到`current`后。

代码：

遍历：

```js
const fn = (l1, l2) => {
    const dummy = new ListNode(); //创建一个哑节点用来接受合并链表
    let current = dummy; //创建一个当前节点的指针
    while (l1  && l2 ) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    // 如果其中一个链表遍历完了，将另一个链表的剩余部分连接到合并后链表的末尾
    if (l1) {
        current.next = l1;
    } else {
        current.next = l2;
    }
};
```

递归：

```js
const mergeTwoLists = (l1,l2) => {
	if(l1===null){
    return l2
  }
  if(l2===null){
    return l1
  }
  if( l1.val < l2.val ){
    	l1.next  = mergeTwoLists(l1.next,l2)
    	return l1
  }else{
      l2.next  = mergeTwoLists(l1,l2.next)
      return l2
  }
}
```

### 3、[「分隔链表」](https://leetcode.cn/problems/partition-list/)🟠

题目：给你一个链表的头节点 `head` 和一个特定值 `x` ，请你对链表进行分隔，使得所有 **小于** `x` 的节点都出现在 **大于或等于** `x` 的节点之前。你应当 **保留** 两个分区中每个节点的初始相对位置。

示例：

```
输入：head = [1,4,3,2,5,2], x = 3
输出：[1,2,2,4,3,5]
```

思路：通过判断`x`拆分出两个链表，然后将两个链表连接，因为小链表在前，大链表在后。在将两条链表相连时，小链表的尾端会指向大链表，但是大链表的尾端没有处理，会形成环。所以要置为null。

代码：

```js
const fn = (head, x) => {
    const dummy1 = new ListNode();
    const dummy2 = new ListNode();
    let p1 = dummy1; //指针
    let p2 = dummy2;
    while (head !== null) {
        if (head.val >= x) {
            p2.next = head;
            p2 = p2.next;
        } else {
            p1.next = head;
            p1 = p1.next;
        }
        head = head.next;
    }
    p1.next = dummy2.next; //此时p1指针的位置处于dummy1的末端 链接两条链表
    p2.next = null; //p2指向dummy2的末端，防止环
    return dummy1.next;
};
```



### 4、[「合并K个升序链表」](https://leetcode.cn/problems/merge-k-sorted-lists/)🔴  未搞懂

题目：给你一个链表数组，每个链表都已经按升序排列。请你将所有链表合并到一个升序链表中，返回合并后的链表。

示例：

```
输入：lists = [[1,4,5],[1,3,4],[2,6]]
输出：[1,1,2,3,4,4,5,6]
```

思路：

代码：

### 5、[「两两交换链表中的节点」](https://leetcode.cn/problems/swap-nodes-in-pairs/)🟠

题目：给你一个链表，两两交换其中相邻的节点，并返回交换后链表的头节点。你必须在不修改节点内部的值的情况下完成本题（即，只能进行节点交换）

示例：

```
输入：head = [1,2,3,4]
输出：[2,1,4,3]
```

思路：每次交换两个节点的时候需要将`cur`指针定义在两个节点之前，然后进行交换，通过添加虚拟头节点完成前两个节点的交换。交换完成后将`cur`移动到一开始的`cur.next.next`。

```
dummy(cur) -> 1 -> 2 -> 3 -> 4
第一步：1 -> 3 ，第二步：2 -> 1 ，第三步：cur -> 2 第四步： cur = 2
```

代码：

```js
let dummy = new ListNode();
dummy.next = head;
let cur = dummy;
while (cur && cur.next && cur.next.next) {
    const temp1 = cur.next; //记录交换节点1
    const temp2 = cur.next.next //记录交换节点2
    temp1.next = temp2.next //第一步
    temp2.next = temp1 //第二步
    cur.next = temp2
    cur = temp1
}
return dummy.next;
```

# 垃圾回收机制
---
### 标记清除法：
此算法可以分为两个阶段 ,一个是**标记阶段( mark )**,一个是**清除阶段( sweep )**

- 标记阶段：从根对象开始遍历,每一个可以从根对象访问到的对象都会被添加一个标记,于是这个对象被标识为可到达对象
- 清除阶段：对 堆内存 从头到尾进行线性遍历 如果发现对象 没有被标记 则将该对象占用的内存回收 并且将原来被标记的对象的标识清除
缺点：
- 那些无法从根对象查询到的对象都将会被清除
- 垃圾收集后有可能会造成大量垃圾碎片
### 引用计数法：
跟踪记录每个值被应用的次数。
- 当声明一个变量 并将一个引用类型的值赋给该变量时 则这个值得引用次数就是1  如果同一个值又赋给另一个变量时 引用次数+1
- 相反 如果包含这个值的变量又取得另外一个值 那么该值得引用次数-1
- 当这个值得引用次数变成0的时候 则说明没有办法再访问这个值  当下次垃圾收集器下次再运行 就会清理掉引用次数为0的值
缺点：
- 无法处理循环引用。 如果两个对象创建并互相引用  形成一个循环。考虑到他们-互相都有一次引用,所以不会被回收
### 复制：
将空间一分为二from、to ，需要清除时，将复制对象移动到to，删除from里面的，再将to放回去（缺点：空间被一分为二，可用内存空间变小）
### 标记压缩：
先标记 然后将活动对象放到内存的一端，然后在删除不需要的，弥补了标记清除内存破碎的缺点 （缺点：删除和整理操作麻烦）
### 浏览器中的垃圾回收
1、栈回收\
先进后出 esp指针，上下文\
2、堆回收\
代际假说：大多数的对象生命周期都很短，一直存活的对象生命周期都很长\
所以就采用 新生代 or 老生代\
新生代用于存放生命周期短的对象 垃圾回收频繁，用复制\
老生代用于存放大的对象与生命周期长的对象 用 标记压缩\
新生代经过两次垃圾回收仍然存活 就会晋升老生代
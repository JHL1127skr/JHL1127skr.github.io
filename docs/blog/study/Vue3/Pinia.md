# Vue3状态管理：Pinia
---
#### 一、安装并引用

安装：`npm install pinia`

```javascript
import { createPinia } from 'pinia'

const pinia = createPinia()
app.use(pinia)
```

#### 二、创建Store

```javascript
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
```

#### 三、在组件内使用

```vue
<script setup>
  import { useCounterStore } from '@/stores/counter'

  const counterStore = useCounterStore()
  // 以下三种方式都会被 devtools 跟踪
  counterStore.count++
  counterStore.$patch({ count: counterStore.count + 1 })
  counterStore.increment()
</script>

<template>
  <div>{{ counterStore.count }}</div>
  <div>{{ counterStore.doubleCount }}</div>
</template>
```

#### 四、State

###### 1、重置state

通过调用 store 的 `$reset()` 方法将 state 重置为初始值。

```javascript
const store = useStore()

store.$reset()
```

###### 2、改变state

第一种：直接修改属性 `store.count = 1`
第二种：通过`$patch`，可以一次修改多个

```javascript
store.$patch({
  count: store.count + 1,
  age: 120,
  name: 'DIO',
})
```

不过，用这种语法的话，有些变更真的很难实现或者很耗时，任何集合的修改（例如，向数组中添加、移除一个元素或是做`splice`操作）都需要你创建一个新的集合。`$patch` 方法也接受一个函数来组合这种难以用补丁对象实现的变更。

```javascript
store.$patch((state) => {
  state.items.push({ name: 'shoes', quantity: 1 })
  state.hasChanged = true
})
```

###### 3、监听state

我们可以通过`$subscribe`方法可以监听 store 状态的变化。
与`watch()`相比，使用`$subscribe()`的优点是，store 多个状态发生变化之后，回调函数只会执行一次。

```vue
<script setup>
import { useCounterStore } from '@/stores/counter'

const counterStore = useCounterStore()
counterStore.$subscribe((mutation, state) => {
  // 每当状态发生变化时，将 state 持久化到本地存储
  localStorage.setItem('counter', JSON.stringify(state))
})
</script>
```


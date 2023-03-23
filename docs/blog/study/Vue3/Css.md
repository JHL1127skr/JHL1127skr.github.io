# Vue3 CSS特性
---
#### CSS作用域 `scoped`

`<style>`标签带有`scoped`的属性时，它的CSS只会影响当前组件。其实现时通过PostCSS转换

```vue
<style scoped>
  .title{
    color:'red'
  }
</style>

<template>
  <div class="title">hello world</div>
</template>
```

```vue
<style scoped>
  .title[data-v-f3f3eg9]{
    color:'red'
  }
</style>

<template>
  <div class="title" data-v-f3f3eg9>hello world</div>
</template>
```

> 注意⚠️：当使用`scoped`时，父组件的样式不会渗透到子组件

#### 深度选择器`:deep()`

使的样式影响到子组件，常用于单独修改UI库中组件的样式。

```vue
<style scoped>
.a :deep(.b) {
  /* ... */
}
</style>

```

```vue
.a[data-v-f3f3eg9] .b {
  /* ... */
}
```

#### 插槽选择器`:soltted()`

默认情况下，作用域样式不能影响`<solt/>`渲染的元素。插槽中的内容默认被父组件所持有。

```vue
<template>
  <Child>
    <div class="title">我是传入子组件插槽的内容</div>
  </Child>
</template>
```

```vue
<template>
  <solt></solt>
</template>

<style>
.title{}  /* 没有反应 */
:slotted(title){}
</style>
```

#### 全局选择器`:global()`

将样式应用到全局

```vue
<style scoped>
:global(.red) {
  color: red;
}
</style>
```

#### 动态CSS`v-bind()`

通过指令将响应式变量绑定到样式中，可以动态切换。

```vue
<script setup lang="ts">
  const color =ref("ref")
</script>

<style>
  .title{
    color:v-bind(color)
  }
</style>
```


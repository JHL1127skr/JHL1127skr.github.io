---
outline: deep
---

# Vue3组件之间传参数
---
### 父与子

#### 一、Props
**普通写法：**
```vue
<template>
  <Child :title="title" @handel='handel'/>
</template>

<script setup lang="ts">
	const title = $ref('hello world')
	const handel = (value)=>{
  console.log(`我是从子组件拿到的数据--${value}`)
}
</script>
```

```vue
<!-- JS版本 -->
<template>
  <div>{{ title }}</div>
  <button @click='childHandel'>handel</button>
  <button @click='$emit("handel","toFather")'>handel</button>
</template>

<script setup lang="ts">
	const props = defineProps({
    title:{
      type:String,
      default:'默认值'
    }
  })
  const emit = defineEmits(['handel'])
  const childHandel =()=>{
    emit('handel','toFather')
  } 
</script>
```

**TS写法：**

```vue
<!-- TS版本 -->
<template>
  <div>{{ title }}</div>
  <button @click='childHandel'>handel</button>
</template>

<script setup lang="ts">
	const props = withDefaults(
    defineProps<{
      title:string,
      list:number[]
    }>(),{
      title:'默认值',
      list:()=>[1,2,3]
    }
  )
	const emit = defineEmits<{
    (e:"handel",data:string):void,
  }>()
  const childHandel =()=>{
    emit('handel','toFather')
  } 
</script>
```

#### 二、模板引用

```vue
<template>
  <Child ref='ChildRef'/>
</template>

<script setup lang="ts">
  import 'Child' from './child.vue'
  import { ref, onMounted } from 'vue'
	const ChildRef =ref<InstanceType<typeof Child>>()
  onMounted(()=>{
    console.log(`我是子组件暴露的数据：${ChildRef.value.data}`)
    ChildRef.value.open()
  })
  
}
</script>
```

```vue
<script setup lang="ts">
	defineExpose({
    date:'xxxx',
    open:()=>{}
  })
</script>
```

### 跨层级

`provide` `inject`

```vue
<script setup lang=""ts>
	const data =ref<string>('xxx')
  provide('data',data)
</script>
```

```vue
<script setup lang=""ts>
const data = inject<Ref<string>>('data')
data ='yyy'
</script>
```
---
outline: deep
---

# Vue3基础用法
---
### 定义变量

```vue
<script>
  import { ref,reactive,shallowRef,shallowReactive } from 'vue'
  // 深层响应式变量
	const dataA = ref('hello world') 
	const dataB = ref({name:'小姜'}) //可以接受任意类型的值
  const dataC = reactive({name:'小美'}) //只能接受复杂类型 对象/数组/Map/Set
  //浅层响应式变量：自身是响应式下层属性不是
  const dataD = shallowRef('')
  const dataE = shallowReactive({name:'小刚'})

  //使用： Ref需要 .value 
  console.log(dataB.value.name) // 小姜
  console.log(dataC.name) //小美
</script>

<template>
	<!-- 模版之中则相同   -->
  <div>{{ dataB.name }}</div>
  <div>{{ dataC.name }}</div>
</template>
```

### 计算属性

```vue
<script setup lang='ts'>
  import { computed,ref } from 'vue'
	
  const dataA = ref(0)
  const dataB = ref(0)
  const dataC = ref(0)

  //计算属性会对响应式变量做缓存
  const dataD = computed(()=>{
    console.log('计算属性执行')
    return dataA.value + dataB.value
  })

  const dateE =()=>{
    console.log('函数执行')
    return dataA.value + dataB.value
  }
</script>
<template>
 	<div> {{ dataC }} -- {{ dataD }} -- {{ dataE() }}</div>
  <hr/>
  <button @click='dataA++'>dataA++</button>
  <button @click='dataC++'>dataC++</button>
	<!-- 当按钮A触发时候 计算属性和函数都打印，当按钮B触发的时候 只有函数打印  -->
</template>
```

### 侦听器

```vue
<script setup lang="ts">
  import { watch,ref,reactive,watchEffect } from 'vue'
  const dataRef =ref({name:'小姜'})
  const dataRef2 =ref({age:18})
  const dataReactive =reactive({name:'小姜'})

  //监听多个
  watch([dataRef,dataRef2],(newVal,oldVal)=>{})
  //浅层监听 
  watch(dataRef,()=>{}) //ref.value 改变才会触发
  watch(()=>dataReactive.name,()=>{}) //只有reactive.name 改变才会触发

  //深层监听
  watch(dataReactive,()=>{})
  watch(dataRef,()=>{},{deep:true}) //添加属性

  //及时回调
  watch(dataRef,()=>{},{immediate:true}) //添加属性

  //Effect 自动检测监听对象,默认及时回调
  watchEffect((onCleanup)=>{
    onCleanup(()=>{}) //清除上一次副作用
  })
  
</script>
```

### 工具

```vue
<script setup lang='ts'>
	import {ref,reactive,toRef,toRefs,toRaw} from 'vue'
 
  const data = reactive({
    name:'小姜',
    age:18
  })

  const nameRef = toRef(data,'name') //返回一个ref对象 
  nameRef.value = '小美' //data中的name也会改变

  const dataRefs =toRefs(data)
  const { name,age } = dataRefs //解构出来依旧是响应式

  const foo = {}
	const reactiveFoo = reactive(foo) //将响应式转换为普通独享
	console.log(toRaw(reactiveFoo) === foo) // true
  
</script>
```
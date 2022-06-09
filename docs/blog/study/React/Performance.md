# React 性能优化
---
::: tip
性能优化：将变化的地方和不变的地方区分开
变化：state props context
:::
### 不使用API （单纯从代码书写角度
#### 一、state不会被父子组件共用
这种情况下，当在input中输入值的时候因为出发setNum，导致父组件App更新，所以相对的Text组件随之重新渲染
```jsx
export default function App(){
    const [num,setNum] = useState(0)
    return
        <div>
            <input value={num} onChange={e=>setNum(e.target.value)}/>
            <Text />
        </div>
}
const Text =()=>{
    console.log('Text组件是否被渲染')
    return <div>--</div>
}
```
但如果将state相关修改单独抽离，保证父组件不会更新，那么就不影响到Text组件
```jsx
export default function App(){
    return
        <div>
            <Input />
            <Text />
        </div>
}
const Input = () => {
     const [num,setNum] = useState(0)
     return  <input value={num} onChange={e=>setNum(e.target.value)}/>
}
const Text = () => {
    console.log('Text组件是否被渲染')
    return <div>--</div>
}
```
#### 二、state会被父子组件共用 ：插槽
```jsx
export default function App(){
    const [num,setNum] = useState(0)
    return
        <div title={num + ''}>
            <input value={num} onChange={e=>setNum(e.target.value)}/>
            <Text />
        </div>
}
const Text =()=>{
    console.log('Text组件是否被渲染')
    return <div>--</div>
}
export default function App(){
    return 
        <Input>
            <Text/>
        </Input>
}
const Input = ({children}) => {
     const [num,setNum] = useState(0)
     return  
         <div title={num + ''}>
            <input value={num} onChange={e=>setNum(e.target.value)}/>
            {children}
         </div>
}
const Text =()=>{
    console.log('Text组件是否被渲染')
    return <div>--</div>
}
```
### 使用React提供的API
React.memo（callback）、useMemo、useCallBack、pureComponent\
React中是通过**全等机制 ===，如果一个组件没有传入值，那么他的props也是一个空对象 {}**\
所有当oldProps {} 和 newProps {} 相比较是 oldProps !==  newProps 结果返回的依然还是true\
以上机制都是提供的API 都是使 **全等机制** 变成 **浅比较**

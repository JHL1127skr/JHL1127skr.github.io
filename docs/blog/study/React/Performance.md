---
outline: deep
---

# React 性能优化
---
### 面试题
问：React有哪些性能优化的手段
1. class中 shouldComponentUpdate 与 pureComponent 
2. hooks中 usememo、useCallback、React.memo()
3. 列表渲染中增加key属性
4. 避免使用匿名函数
5. React.lazy与React.Supense
6. 合理规划组件 将变(state,props,context)与不变相分离，减少组件渲染次数
### 性能优化：React内置API
React中部分组件更新是通过 === 比较传入的Props值。 <br/>

如果一个组件没有传入Props，那么他的props也是一个空对象 {}，所以当oldProps {} 和 newProps {} 相比较是 oldProps !== newProps 结果返回的依然还是true <br/>

React提供的API 都是使 全等机制 变成 浅比较
**React中的浅比较：**`shallowEqual(A,B)`
> 只比较复杂对象的第一层，如果某个属性为复杂数据，则比较是否为同一引用地址
```javascript
function shallowEqual(objA, objB) {
    if (Object.is(objA, objB)) {
        return true;
    }
    if ( typeof objA !== "object" || objA === null || typeof objB !== "object" || objB === null){
        return false;
    }
    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    for (let i = 0; i < keysA.length; i++) {
        if (!hasOwnProperty.call(objB, keysA[i]) || !Object.is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }
    return true;
}
```
### 性能优化：将变化的地方和不变的地方区分开
> 变化：state props context
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
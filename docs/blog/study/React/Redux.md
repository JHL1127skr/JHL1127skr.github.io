# React 状态管理
--- 
### 一、基本工作原理

通过 `dispatch` 派发一个 `action`，通过对应的 `reducer` 改变 `store`

### 二、主要内容

- `store`：描述应用的状态，存放对象或数组之类的值
- `reducer(state, aciton)`：基于旧的state和action计算出新的state
- `action`：描述如果操作state
- `dispatch(action)`：接受action，用来改变state

### 三、`react-redux`

将**Redux中创建的store与组件绑定到一起，变成组件的状态并控制渲染。并导出`Provider`、`content`，`useDispatch`，`useSelect`等API

### 四、具体使用

```jsx
import { ceateStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

const storeA =(state:{},action){
  switch(action.type){
    case 'xx'
      return {...state,xx:action.payload.xx}
    default
      return state 
  }
}

const storeB =(state,action){...}
//通过combineReducers可以吧多个Reducer合并成一个
const rootReducer = combineReducers({storeA,storeB})
//创建Store
const store = createStore(rootReducer)

 ReactDOM.render(
   <Provider store={store}><App /></Provider>
   ,document.getElementById('root')
 )
```

```jsx
import { useSelector, useDispatch } from 'react-redux'

export const App = (props) => {
  //通过useSelector拿到数据 通过useDispatch拿到dispatch
  const storeA = useSelector(state=>state.storeA)
  const dispatch = useDispatch()

  const handel = () =>{
    dispatch({type:'xx',payload:{xx:'123'}})
  }
    return <div>
      <h1>{storeA.xx}<h1>
      <button onClick={handel}>button<button>
    </div>
}
```

### 五、异步操作中间键`react-thunk`

可以看到 `dispatch()`可以传入一个函数，且函数的行参数是`dispatch`。

```jsx
import { ceateStore, combineReducers,applyMiddleware } from 'redux'
import thunk from 'react-thunk'

const store = createStore(rootReducer,applyMiddleware(thunk))
```

```jsx
import {  useDispatch } from 'react-redux'

export const App = (props) => {
  const dispatchAction = useDispatch()

  const handel = () =>{
    dispatchAction((dispatch)=>{
      new Promise(resolve=>{
        setTimeout(()=>{resolve('xx')},3000)
      }
    }.then((res)=>{
      dispatch({type:'xx'}...)
    }
  }
  return <div></div>
}

```
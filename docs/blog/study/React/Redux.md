---
outline: deep
---

# React 状态管理

---

### Context

![](/blog/Context.png)

#### 具体使用

```jsx
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const conutContext = createContext(1); // 初始值

const MyconutContext = ({ children }) => {
	return <conutContext.Provider value={2}>{children}</conutContext.Provider>;
};
const App = () => {
	return (
		<div>
			<MyconutContext>
				<Son></Son>
			</MyconutContext>
		</div>
	);
};
const Son = () => {
	const conut = useContext(conutContext);
	return <div>{count}</div>;
};
```

### Redux

#### 一、基本工作原理

通过 `dispatch` 派发一个 `action`，通过对应的 `reducer` 改变 `store`

#### 二、主要内容

- `store`：描述应用的状态，存放对象或数组之类的值
- `reducer(state, aciton)`：基于旧的 state 和 action 计算出新的 state
- `action`：描述如果操作 state
- `dispatch(action)`：接受 action，用来改变 state

#### 三、`react-redux`

将 Redux 中创建的 store 与组件绑定到一起，变成组件的状态并控制渲染。并导出`Provider`、`content`，`useDispatch`，`useSelect`等 API

#### 四、具体使用

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

#### 五、异步操作中间键`react-thunk`

可以看到 `dispatch()`可以传入一个函数，且函数的行参数是`dispatch`。

```jsx
import { ceateStore, combineReducers, applyMiddleware } from "redux";
import thunk from "react-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));
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

### Zustand

#### 基本使用

```jsx
import { create } from "zustand";

interface UserInfo {
	name: string;
	age: number;
}

interface Action {
	increment: () => void;
	UpdateName: (name: string) => void;
}
interface Store {
	count: number;
	userInfo: UserInfo;
}

export const useStore = create<Action & Store>((set) => ({
	count: 1, 
	userInfo: {
		name: "小姜",
		age: 24,
	},
	increment: () => set((state) => ({ count: state.count + 1 })),
	UpdateName: (name) => set((state) => ({ userInfo: { ...state.userInfo, name } })),
}));
```
```jsx
import { useStore } from './store'

const count = useStore((state) => satet.count )
const { count, userInfo } = useStore()


```
#### 避免重复渲染 `useShallow`
```jsx
const A = () => {
	const { num, addNum } = useStore();
	console.log("A组件渲染");
	return (
		<div>
			<div>{num}</div>
			<button onClick={addNum}>add</button>
		</div>
	);
};

const B = () => {
	const { count, increment } = useStore(useShallow(state=>({
		count:state.count,
		increment:state.increment
	})));
	console.log("B组件渲染");
	return (
		<div>
			<div>{count}</div>
			<button onClick={increment}>add</button>
		</div>
	);
};
```
#### 持久化 `persist`
```jsx
import { persist } from "zustand/middleware";
export const useStore = create(
	persist<Action & Store>(
		(set) => ({
			//...
		}),
		{ name: "config" },
	),
);
```
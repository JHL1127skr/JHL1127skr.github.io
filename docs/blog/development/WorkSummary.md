# 工作总结
---
#### 新学到的dva派发方式	
```jsx
const addemind(id:number,type:number){
  	dispatch({
      	type:xxx/xxx
      	payload:{
							factoryId:id
    		}
    })             //这里派发异步操作  通过return status 返回值
}.then((status)=>{
  	//这里进行判断
  		if(){
     	//同步派发
     }else{
    //同步派发
  }
})
```

#### 苹果newDate 不能识别'2021-11-27 10:00' 只能 识别2021/11/27

#### JS中如何判断对象是一个空{ }

```jsx
//不能直接使用==来判断 涉及到运算符浅比较与栈和堆
Object.keys(obj).length  == 0 && empty.constructor === Object;
Object.keys(obj).length  == 0 //ES6 新方法 将数组的key值合并成一个数组 然后判断数组长度
empty.constructor === Object; //区别JS中其他的内置构造函数 如 new Date、new Reg
```

#### React中如果多个input框 多个受控组件

```jsx
changeIptValue:function(event){
      this.setState({
   				 [event.target.id]:event.target.value
				})
}
```

#### 浏览器缓存机制 

```jsx
浏览器向服务器请求资源时 会先去看本地有没有
打包形成的新文件会使用 /*版本号*/ 命名 
所以如果没有更新版本号或者没有清楚缓存  会使用浏览器本地的缓存文件
```

#### 原生JS实现点击复制

```jsx
let oInput = document.createElement('input'); //新建input节点
        oInput.value = '被复制的值'; //赋值给input
        document.body.appendChild(oInput); //插入input节点
        oInput.select(); 
        document.execCommand('Copy');
        document.body.removeChild(oInput); //删除inpit节点
```

#### app 小程序 调试工具

```html
<script src="https://res.wx.qq.com/mmbizwap/zh_CN/htmledition/js/vconsole/3.0.0/vconsole.min.js"></script>
<script type="text/javascript">var vConsole = new VConsole();</script>
```


#### Input 中文防抖

```js
const searchInputDOM = document.querySelector('.search-input');
searchInputDOM.addEventListener('input', this.debounce(300, this.SearchInputFactory));
searchInputDOM.addEventListener('compositionstart', this.onCompositionStart);
searchInputDOM.addEventListener('compositionend', this.onCompositionEnd);

debounce: function (timeout, fn) {
        var timer;
        function input(e) {
            if (e.target.composing) {
                return;
            }
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                let val = e.target.value;
                timer = null;
            }, timeout);
        }
        return input;
    },
onCompositionStart: function (e) {
        e.target.composing = true;
    },
onCompositionEnd: function (e) {
        //console.log(e.target)
        e.target.composing = false;
        console.log(1);
        var event = document.createEvent('HTMLEvents');
        event.initEvent('input');
        e.target.dispatchEvent(event);
    },
```


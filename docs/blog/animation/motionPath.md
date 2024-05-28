<div :class="$style.root" >
    <div :class="$style.cover" >
        <svg :class="$style.svg" width="400" height="400" xmlns="http://www.w3.org/2000/svg" >
            <path
                d="M 60 140 Q 60 60 200 60 L 300 100 Q 340 140 340 220 Q 340 340 200 340 L 140 280 L 80 280 L 60 140 " stroke="#eee" stroke-width='4' fill="transparent" />
        </svg>
        <div :class="$style.car">
        <div :class="$style.carBody"></div>
        </div>
    </div>
</div>

::: details code

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;

        }

        body {
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .cover {
            position: relative;
        }

        .car {
            position: absolute;
            top: 0;
            width: 30px;
            height: 20px;
            offset-path: path('M 60 140 Q 60 60 200 60 L 300 100 Q 340 140 340 220 Q 340 340 200 340 L 140 280 L 80 280 L 60 140 ');
            animation: move 5s linear infinite;
        }

        .carBody {
            width: 100%;
            height: 100%;
            background-color: red;
            clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%);
        }

        .car:before,
        .car:after {
            content: '';
            width: 6px;
            height: 6px;
            position: absolute;
            top: 8px;
            left: -5px;
            border-radius: 50%;
            background-color: rgba(0, 0, 0, 1);
            /* filter: blur(2px); */
        }

        .car:before {
            animation: carSmoke .5s linear infinite .7s;
        }

        .car:after {
            animation: carSmoke .7s linear infinite;
        }

        @keyframes carSmoke {
            100% {
                transform: translate(-30px, 15px) scale(0);
            }
        }

        @keyframes move {
            100% {
                offset-distance: 100%;
            }

        }
    </style>
</head>

<body>
    <div class="cover">
        <svg class="g-svg" width="400" height="400" xmlns="http://www.w3.org/2000/svg">
            <path d="M 60 140 Q 60 60 200 60 L 300 100 Q 340 140 340 220 Q 340 340 200 340 L 140 280 L 80 280 L 60 140 "
                stroke="#eee" stroke-width='4' fill="transparent" />
        </svg>
        </svg>
        <div class="car">
            <div class="carBody"></div>
        </div>
    </div>

</body>

</html>
```

:::
通过使用`CSS Motion Path`实现一个路径跟随的动画，`offset-path`属性接受一个 SVG 的 path 路径，通过控制元素的 `offset-distance` 从 0% 变化到 100% 进行元素的路径动画。

参考文章

[探秘神奇的运动路径动画 Motion Path](https://juejin.cn/post/6956030985251061791)

SVG 相关工具

[绘制 SVG 路径](https://pipipi-pikachu.github.io/svgPathCreator/)\
[clip-path 可视化](https://bennettfeely.com/clippy/)

<style module>
    .root{
		width: 100%;
		height: 50vh;
		background-color: #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
	}
    .cover{
        position: relative;
    }
    .car{
        position: absolute;
        top: 0;
        width: 30px;
        height: 20px;
        offset-path: path('M 60 140 Q 60 60 200 60 L 300 100 Q 340 140 340 220 Q 340 340 200 340 L 140 280 L 80 280 L 60 140 ');
        animation: move 5s linear infinite;
    }
    .carBody{
        width:100%;
        height:100%;
        background-color: red;
        clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%);
    }
    .car:before,
    .car:after {
        content: '';
        width: 6px;
        height: 6px;
        position: absolute;
        top: 8px;
        left: -5px;
        border-radius: 50%;
        background-color: rgba(0, 0, 0, 1);
        /* filter: blur(2px); */
    }
    .car:before {
        animation: carSmoke .5s linear infinite .7s;
    }
    .car:after {
        animation: carSmoke .7s linear infinite;
    }
    @keyframes carSmoke {
        100% {
            transform: translate(-30px, 15px) scale(0);
        }
    }
    @keyframes move {
        100% {
            offset-distance: 100%;
        }
    }
    @keyframes move {
        100% {
            offset-distance: 100%;
        }
    } 
</style>

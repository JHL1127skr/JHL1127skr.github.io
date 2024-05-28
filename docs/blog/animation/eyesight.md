<script setup>
    import { ref, onMounted } from 'vue';
	const birdRef= ref(null)
	const cageRef= ref(null)
	if (!/iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent)) {
        bird.innerHTML = '🐦‍'
        console.log("当前系统不是iOS或Mac OS");
    } else {
        console.log("当前系统是iOS或Mac OS");
    }
	let duration = 3000;
    let lastUpdate = performance.now();
	 const birdKeyframes = [
            { transform: 'rotateY(0deg)' },
            { transform: 'rotateY(180deg)' },
            { transform: 'rotateY(0deg)' }
        ];

        const cageKeyframes = [
            { transform: 'rotateY(180deg)' },
            { transform: 'rotateY(0deg)' },
            { transform: 'rotateY(180deg)' }
        ];

        const animationOptions = {
            duration: duration,
            iterations: Infinity,
            direction: 'alternate',
            easing: 'linear'
        };
	const handle =()=>{
		const bird = birdRef.value;
		const cage = cageRef.value;
 		const birdAnimation = bird.animate(birdKeyframes, animationOptions);
        const cageAnimation = cage.animate(cageKeyframes, animationOptions);

        function updateAnimationSpeed(timestamp) {
            if (timestamp - lastUpdate >= 1000) {
                duration -= 200; // 每秒减少100毫秒
                if (duration < 150) duration = 150; // 确保动画时间不会小于100毫秒

                // 获取当前动画的时间点
                const birdCurrentTime = birdAnimation.currentTime;
                const cageCurrentTime = cageAnimation.currentTime;

                // 更新动画时长
                birdAnimation.updatePlaybackRate(3000 / duration);
                cageAnimation.updatePlaybackRate(3000 / duration);

                // 恢复到动画的当前时间点
                birdAnimation.currentTime = birdCurrentTime;
                cageAnimation.currentTime = cageCurrentTime;

                lastUpdate = timestamp;
            }

            requestAnimationFrame(updateAnimationSpeed);
        }

        requestAnimationFrame(updateAnimationSpeed);
	}
    
</script>
<div class="tip custom-block" style="padding-top: 8px"><b>点击屏幕旋转扇子</b></div>

<div :class="$style.root" @click="handle">
    <div :id="$style.cover" >
        <div :class="$style.bird" ref='birdRef'>🐦‍⬛</div>
        <div :class="$style.cage" ref='cageRef'>
            <div :class="$style.hook">
                <div></div>
            </div>
            <div :class="$style.topCover">
                <div :class="$style.top">
                    <div></div>
                </div>
            </div>
            <div :class="$style.area">
                <div></div>
                <div></div>
            </div>
            <div :class="$style.base"></div>
        </div>
    </div>
</div>

::: details code

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>Document</title>
		<style>
			* {
				margin: 0;
				padding: 0;
				box-sizing: border-box;
			}

			body {
				height: 100vh;
				display: flex;
				justify-content: center;
				align-items: center;
				perspective: 800px;
				background-color: #ccc;
			}

			#cover {
				width: 200px;
				height: 200px;
				transition: all;
				position: relative;
			}

			.bird {
				background-color: #fff;
				z-index: 1;
			}

			.cage {
				display: flex;
				flex-direction: column;
				background-color: #fff;
			}

			.bird,
			.cage {
				transition: all;
				position: absolute;
				border-radius: 50%;
				backface-visibility: hidden;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 100px;
			}

			.base {
				width: 120px;
				height: 20px;
				border: 4px solid #000;
				border-radius: 2px;
			}

			.hook {
				width: 20px;
				height: 8px;
				border: 4px solid #000;
				transform: translateY(2px);
				border-bottom: none;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
				position: relative;
			}

			.hook > div {
				width: 30px;
				height: 30px;
				border: 4px solid #000;
				border-radius: 50%;
				border-left-color: transparent;
				position: absolute;
				top: 0;
				left: 30%;
				transform: translate(-50%, -100%) rotate(310deg);
			}

			.top-cover {
				width: 110px;
				height: 60px;
				overflow: hidden;
				transform: translateY(1px);
			}

			.top {
				width: 110px;
				height: 110px;
				border: 4px solid #000;
				border-radius: 50%;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
				border-bottom: none;
				position: relative;
			}

			.top > div {
				position: absolute;
				top: 0;
				left: 50%;
				transform: translate(-50%, -3px);
				width: 39px;
				height: 110px;
				border: 4px solid #000;
				border-radius: 50%;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
				border-bottom: none;
			}

			.area {
				width: 110px;
				height: 60px;
				border: 4px solid #000;
				border-radius: 2px;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
				border-bottom: none;
				display: flex;
				justify-content: space-evenly;
			}

			.area > div {
				width: 4px;
				height: 100%;
				background-color: #000;
			}
		</style>
	</head>

	<body>
		<div id="cover">
			<div class="bird">🐦‍⬛</div>
			<div class="cage">
				<div class="hook">
					<div></div>
				</div>
				<div class="top-cover">
					<div class="top">
						<div></div>
					</div>
				</div>
				<div class="area">
					<div></div>
					<div></div>
				</div>
				<div class="base"></div>
			</div>
		</div>
	</body>
	<script>
		const cover = document.querySelector("#cover");
		const bird = document.querySelector(".bird");
		const cage = document.querySelector(".cage");
		if (!/iPhone|iPad|iPod|Macintosh/.test(navigator.userAgent)) {
			bird.innerHTML = "🐦‍";
			console.log("当前系统不是iOS或Mac OS");
		} else {
			console.log("当前系统是iOS或Mac OS");
		}
		let duration = 3000;
		let lastUpdate = performance.now();

		cover.addEventListener("click", () => {
			const birdKeyframes = [
				{ transform: "rotateY(0deg)" },
				{ transform: "rotateY(180deg)" },
				{ transform: "rotateY(0deg)" },
			];

			const cageKeyframes = [
				{ transform: "rotateY(180deg)" },

				{ transform: "rotateY(0deg)" },
				{ transform: "rotateY(180deg)" },
			];

			const animationOptions = {
				duration: duration,
				iterations: Infinity,
				direction: "alternate",
				easing: "linear",
			};

			const birdAnimation = bird.animate(birdKeyframes, animationOptions);
			const cageAnimation = cage.animate(cageKeyframes, animationOptions);

			function updateAnimationSpeed(timestamp) {
				if (timestamp - lastUpdate >= 1000) {
					duration -= 200; // 每秒减少100毫秒
					if (duration < 150) duration = 150; // 确保动画时间不会小于100毫秒

					// 获取当前动画的时间点
					const birdCurrentTime = birdAnimation.currentTime;
					const cageCurrentTime = cageAnimation.currentTime;

					// 更新动画时长
					birdAnimation.updatePlaybackRate(3000 / duration);
					cageAnimation.updatePlaybackRate(3000 / duration);

					// 恢复到动画的当前时间点
					birdAnimation.currentTime = birdCurrentTime;
					cageAnimation.currentTime = cageCurrentTime;

					lastUpdate = timestamp;
				}

				requestAnimationFrame(updateAnimationSpeed);
			}

			requestAnimationFrame(updateAnimationSpeed);
		});
	</script>
</html>
```

:::
动画是基于 `transform`、`perspective`属性进行的 3D 旋转，有意思点可能就是使动画呈现一个匀速加速的过程。用到了 `requestAnimationFrame` 和 `performance.now()`。

<style module>
	.root{
		width: 100%;
		height: 50vh;
		background-color: #ccc;
	    display: flex;
	    justify-content: center;
	    align-items: center;
	}
	#cover {
		width: 200px;
		height: 200px;
		transition: all;
		position: relative;
	    perspective: 800px;
	}
	.bird {
		z-index: 1;
	}
	.cage {
		display: flex;
		flex-direction: column;
	}
	.bird,
	.cage {
		transition: all;
		position: absolute;
		border-radius: 50%;
		backface-visibility: hidden;
		background-color: #fff;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 100px;
	}
	.base {
		width: 120px;
		height: 20px;
		border: 4px solid #000;
		border-radius: 2px;
	}
	.hook {
		width: 20px;
		height: 8px;
		border: 4px solid #000;
		transform: translateY(2px);
		border-bottom: none;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		position: relative;
	}
	.hook > div {
		width: 30px;
		height: 30px;
		border: 4px solid #000;
		border-radius: 50%;
		border-left-color: transparent;
		position: absolute;
		top: 0;
		left: 30%;
		transform: translate(-50%, -100%) rotate(310deg);
	}
	.topCover {
		width: 110px;
		height: 60px;
		overflow: hidden;
		transform: translateY(1px);
	}
	.top {
		width: 110px;
		height: 110px;
		border: 4px solid #000;
		border-radius: 50%;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		border-bottom: none;
		position: relative;
	}
	.top > div {
		position: absolute;
		top: 0;
		left: 50%;
		transform: translate(-50%, -3px);
		width: 39px;
		height: 110px;
		border: 4px solid #000;
		border-radius: 50%;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		border-bottom: none;
	}
	.area {
		width: 110px;
		height: 60px;
		border: 4px solid #000;
		border-radius: 2px;
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
		border-bottom: none;
		display: flex;
		justify-content: space-evenly;
	}
	.area > div {
		width: 4px;
		height: 100%;
		background-color: #000;
	}
</style>

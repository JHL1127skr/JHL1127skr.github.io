# vsCode用户片段
---
左上角Code -> 首选项 -> 用户片段

```json
	"Print to console": {  
		"prefix": "log",  // 触发关键词
		"body": [ 
			"console.log('$1');", // $1 占位符  
      //${1/^([a-zA-Z])/${1:/upcase}/}  //首字母大写 table键切换
			"\t$2"  //\t缩进一格
		],
		"description": "Log output to console" //描述
	},

	"Print to console": {  
		"prefix": "log",  // 触发关键词
		"body": [ 
			"console.log('$(1|aaa,bbb,ccc)');",  //table 可以上下切换
		],
		"description": "Log output to console" //描述
	},
	
```


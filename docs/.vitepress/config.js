const sidebar = require("./configs/sidebar");
const nav = require("./configs/nav");

export default {
	title: "小姜的前端记录",
	description: "小姜的前端记录,前端,学习,记录",
	lang: "zh-CN",
	themeConfig: {
		logo: "/logo.png",
		docFooter: {
			prev: false,
			next: false,
		},
		outline: {
			label: "本页目录",
		},
		search: {
			provider: "local",
			options: {
				locales: {
					root: {
						translations: {
							button: {
								buttonText: "搜索文档",
								buttonAriaLabel: "搜索文档",
							},
							modal: {
								noResultsText: "无法找到相关结果",
								resetButtonTitle: "清除查询条件",
								footer: {
									selectText: "选择",
									navigateText: "切换",
								},
							},
						},
					},
				},
			},
		},
		nav,
		sidebar,
		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/JHL1127skr",
			},
		],
	},
};

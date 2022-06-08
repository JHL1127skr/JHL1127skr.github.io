const { defaultTheme } = require("@vuepress/theme-default");
const { searchPlugin } = require("@vuepress/plugin-search");
const { backToTopPlugin } = require("@vuepress/plugin-back-to-top");
const { mediumZoomPlugin } = require("@vuepress/plugin-medium-zoom");
const { nprogressPlugin } = require("@vuepress/plugin-nprogress");

const navbar = require("./configs/navbar");
const sidebar = require("./configs/sidebar");

module.exports = {
    lang: "zh-CN", //语言  
    title: "小姜的前端记录", //导航栏左侧title
    description: "前端学习总结",
    theme: defaultTheme({
        //主题配置
        navbar, //导航栏配置
        sidebar,
        logo: "/images/logo.png", //导航栏左侧logo
        repo: "https://github.com/JHL1127skr", //导航栏右侧GitHub链接
        editLink: false,
        lastUpdated:true,
    }),
    plugins: [
        searchPlugin({
            //搜索插件
            locales: {
                "/": {
                    placeholder: "搜索",
                },
            },
        }),
        backToTopPlugin(), //返回顶部
        mediumZoomPlugin(), //图片缩放
        nprogressPlugin(), //进度条
    ],
};

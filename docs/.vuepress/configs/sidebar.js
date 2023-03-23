module.exports = {
    "/blog/study": [
        {
            text: "HTML",
            collapsible: true,
            children: [],
        },
        {
            text: "CSS",
            collapsible: true,
            children: [
                "/blog/study/CSS/CssPriority.md",
                "/blog/study/CSS/CssSelector.md",
            ],
        },
        {
            text: "JavaScript",
            collapsible: true,
            children: [
                "/blog/study/JS/New.md",
                "/blog/study/JS/Promise.md",
                "/blog/study/JS/DataType.md",
                "/blog/study/JS/Scope.md",
                "/blog/study/JS/Prototype.md",
            ],
        },
        {
            text: "React",
            collapsible: true,
            children: [
                {
                    text: "深入浅出React记",
                    collapsible: true,
                    children: [
                        "/blog/study/React/ReactNote/ReactNote01.md",
                        "/blog/study/React/ReactNote/ReactNote02.md",
                        "/blog/study/React/ReactNote/ReactNote03.md",
                        "/blog/study/React/ReactNote/ReactNote04.md",
                        "/blog/study/React/ReactNote/ReactNote05.md",
                        "/blog/study/React/ReactNote/ReactNote06.md",
                        "/blog/study/React/ReactNote/ReactNote07.md",
                        "/blog/study/React/ReactNote/ReactNote08.md",
                        "/blog/study/React/ReactNote/ReactNote09.md",
                    ],
                },
                "/blog/study/React/Performance.md",
                "/blog/study/React/Render.md",
            ],
        },
        {
            text: "HTTP",
            collapsible: true,
            children: [
                "/blog/study/HTTP/HTTP.md",
                "/blog/study/HTTP/HTTPCache.md",
            ],
        },
        {
            text: "浏览器相关",
            collapsible: true,
            children: [
                "/blog/study/Browser/URL.md",
                "/blog/study/Browser/GarbageCollection.md",
                "/blog/study/Browser/EventLoop.md",
            ],
        },
        {
            text: "工程化",
            collapsible: true,
            children: ["/blog/study/Engineering/Webpack.md"],
        },
        {
            text: "手撕",
            collapsible: true,
            children: [
                "/blog/study/Handwritten/Call&apply&bind.md",
                "/blog/study/Handwritten/DeepClone.md",
                "/blog/study/Handwritten/EventEmitter.md",
                "/blog/study/Handwritten/Instandof.md",
                "/blog/study/Handwritten/Promise.md",
            ],
        },
    ],
    "/blog/development": [
        {
            text: "开发",
            children: [
                "/blog/development/Git.md",
                "/blog/development/AppVersion.md",
                "/blog/development/MySQL.md",
                "/blog/development/WorkSummary.md",
                "/blog/development/UserFragment.md",
                "/blog/development/blog.md",
                "/blog/development/Website.md",
            ],
        },
    ],
};

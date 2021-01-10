
# 博客--基于vuepress搭建博客

## vuepress

* 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
* 享受 Vue + webpack 的开发体验，可以在 Markdown 中使用 Vue 组件，又可以使用 Vue 来开发自定义主题。
* VuePress 会为每个页面预渲染生成静态的 HTML，同时，每个页面被加载的时候，将作为 SPA 运行。
* 一个 VuePress 网站是一个由 Vue (opens new window)、Vue Router (opens new window) 和 webpack (opens new window) 驱动的单页应用。
* 在构建时，我们会为应用创建一个服务端渲染（SSR）的版本，然后通过虚拟访问每一条路径来渲染对应的HTML。这种做法的灵感来源于 Nuxt (opens new window) 的 nuxt generate 命令，以及其他的一些项目，比如 Gatsby (opens new window)。
* 
* 

## 快速开始

* 创建并进入一个新目录
 ```javascript
 mkdir Blog 
 cd Blog
 ```
* 使用你喜欢的包管理器进行初始化
 ```javascript
 yarn init # npm init
 ```
* 将 VuePress 安装为本地依赖
 ```javascript
 yarn add -D vuepress # npm install -D vuepress
 ```
* 创建第一篇文档：创建文件夹 `docs` ，在docs创建README.md文件。
```javascript
mkdir docs 
cd docs
创建README.md文件
 ```
 
* 在 package.json 中添加一些 scripts
```javascript
{
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```
* 在本地启动服务
``` javascript
yarn docs:dev # npm run docs:dev
```

## 目录结构
```javascript
├── docs
│   ├── .vuepress (可选的)；//用于存放全局的配置、组件、静态资源等。
│   │   ├── components (可选的)；//该目录中的 Vue 组件将会被自动注册为全局组件。
│   │   ├── theme (可选的)；//用于存放本地主题。
│   │   │   └── Layout.vue
│   │   ├── public (可选的)；//静态资源目录。
│   │   ├── styles (可选的)；//用于存放样式相关的文件。
│   │   │   ├── index.styl  //将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。
│   │   │   └── palette.styl //用于重写默认颜色常量，或者设置新的 stylus 颜色常量。
│   │   ├── templates (可选的, 谨慎配置)； //存储 HTML 模板文件。
│   │   │   ├── dev.html  //用于开发环境的 HTML 模板文件。
│   │   │   └── ssr.html  //构建时基于 Vue SSR 的 HTML 模板文件。
│   │   ├── README.md ；//相当于首页。
│   │   ├── config.js (可选的)； //配置文件的入口文件，也可以是 YML 或 toml。
│   │   └── enhanceApp.js (可选的)；//客户端应用的增强。   │   └── enhanceApp.js (可选的)；//客户端应用的增强。
│   │ 
│   ├── README.md
│   ├── guide
│   │   └── README.md
│   └── config.md
│ 
└── package.json
```

## 基本配置
* 在docs文件家下建立.vuepress文件夹并创建config.js文件
一个 VuePress 网站必要的配置文件是 .vuepress/config.js，它应该导出一个 JavaScript 对象：
```javascript
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around'
}
```
```javascript
module.exports = {
	base: 类型: string,默认值: /,
	title: 类型: string,默认值: undefined -->网站的标题，它将会被用作所有页面标题的前缀，同时，默认主题下，它将显示在导航栏（navbar）上。
	description: 类型: string,默认值: undefined, -->网站的描述，它将会以 <meta> 标签渲染到当前页面的 HTML 中。
	head: 类型: Array,默认值: [],
	host: 类型: string,默认值: '0.0.0.0',
	port: 类型: number,默认值: 8080,
	temp: 类型: string,默认值: '/path/to/@vuepress/core/.temp', -->指定客户端文件的临时目录。
	dest: 类型: string,默认值: '.vuepress/dist', -->指定 vuepress build 的输出目录。如果传入的是相对路径，则会基于 process.cwd() 进行解析。
	locales: 类型: { [path: string]: Object },默认值: undefined, -->提供多语言支持的语言配置。
	
	theme: 类型: string,默认值: undefined -->当你使用自定义主题的时候，需要指定它。
	themeConfig: 类型: Object,默认值: {} -->为当前的主题提供一些配置，这些选项依赖于你正在使用的主题。
}
```


## PWA
PWA全称Progressive Web Apps，是 Google 提出的用前沿的 Web 技术为网页提供 App 般使用体验的一系列方案。一个 PWA 应用首先是一个网页, 可以通过 Web 技术编写出一个网页应用. 随后添加上 App Manifest 和 Service Worker 来实现 PWA 的安装和离线等功能。

## 上线Github Pages
* Github账户都可以开一个自己的静态网站（域名为 username.github.io）
* 新建一个deploy.sh文件内容为
```Shell
#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
# 生成静态文件
npm run build
# 进入生成的文件夹
cd docs/.vuepress/dist
# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
git init 
git add -A
git commit -m 'deploy'
# 如果发布到 https://<USERNAME>.github.io  USERNAME=你的用户名 
git push -f git@github.com:liuindex/liuindex.github.io.git master
# 如果发布到 https://<USERNAME>.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages
cd -
```
* 在package.json中加入新命令
```javascript
"scripts": {
	"dev": "vuepress dev docs",
	"build": "vuepress build docs",
	"deploy": "deploy.sh"
},
```
* 执行npm run deploy就可以看到效果了



## .sh
* .sh是一种命令脚本文件
```sh
#!/usr/bin/env  在linux的一些bash的脚本，需在开头一行指定脚本的解释程序

cd -   结尾
```
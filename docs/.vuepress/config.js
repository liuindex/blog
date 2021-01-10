module.exports = {
  base: '/', // 这是部署到github相关的配置
  title: '桃花源',
  description: '终究意难平',
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/logo.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  markdown: {
    lineNumbers: false // 是否在每个代码块的左侧显示行号。
  },
  themeConfig: {
	logo: '/logo.jpg',//导航栏 Logo
	nav:[ // 导航栏配置
		{text: '主页', link: '/'},
		{text: '前端基础', link: '/one/' },
		{text: '算法题库', link: '/algorithm/'},
		{text: '微博', link: 'https://baidu.com'}      ,
		{
			text: 'Languages',
			ariaLabel: 'Language Menu',
			items: [
				{ text: 'Chinese', link: '/language/chinese/' },
				{ text: 'Japanese', link: '/language/japanese/' }
			]
		}
	],
	sidebar: {
		'/one/':[{
			title: 'Group 1',   // 必要的
			collapsable: true, // 是否可以折叠。可选的, 默认值是 true,
			children: [
			  '/one/'
			]
		}]
	},
	sidebarDepth: 2, // 侧边栏显示2级
  }
}
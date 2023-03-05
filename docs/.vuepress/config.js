module.exports = {
    title: 'Hi, WebStation',
    description: 'WebStation Help Center',
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            {
                text: '知识库',
                items: [
                    { text: 'FAQ', link: '/a' },
                    { text: 'HowTo', link: '/b' }
                ]
            },
            {
                text: '了解更多',
                items: [
                    { text: '官网', link: 'https://enazo.cn' }
                ]
            }
        ],
        sidebar: [
            '/',
            '/隐私政策.md',
            ['/用户协议', '用户协议']
        ]
    }
}

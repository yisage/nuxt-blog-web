<template>
    <section class="section ">
        <Card >
            <h1 class="title">关于我</h1>
            <p>97年生，19年毕业，屌丝程序员一枚，常用网名：国际坏种</p>
            <p>专业技能:Vue2,Vue3,Nuxt,NodeJs</p>
            <p>联系邮箱：1156925377@qq.com</p>
            <p>github: @huangjiamynni</p>
        </Card>
        <Card >
            <h1 class="title">关于本站</h1>
            <p>开通于2023年2月14日，问题还很多，仍在不断完善中。
                本站所有文章除非特别说明均属原创，转载需保留署名和原文链接。</p>
            <p>
            <p>
                本站所有博客纯属个人笔记，错误、描述不到位、理解片面等等情况在所难免，如有不正确的地方欢迎评论中指正，我会及时更正。因为博客建立的太晚，很多以前写在各个角落的笔记、博客被我重新整理发表在这里，所以你会看到很多很基础很入门的文章。
            </p>
            前端使用<a href="https://www.nuxt.com.cn/docs/getting-started/introduction">Nuxt</a>搭建的SSR服务端渲染架构,基于<a
                href="https://cn.vuejs.org/guide/introduction.html">Vue3</a>,
            <a href="https://b3log.org/vditor/">Vditor</a>实现功能,使用
            <a href="https://bulma.io/">Bulma.css</a>仿
            <a href="https://www.cyberpunk.net/fr/zh-cn/">赛博朋克</a>布局风实现响应式页面.
            </p>
            <p>
                后端使用<a href="">NodeJS</a>,<a href="">Express</a>,<a href="">Sequelize</a>,<a href="">Mysql</a>托管于腾讯云轻量级服务器
            </p>
            <p>
                项目开源链接
                <a href="https://github.com/yisage/nuxt-blog-web.git">https://github.com/yisage/nuxt-blog-web.git</a>
            </p>
        </Card>
        <Card >
            <h1 class="title">评论</h1>
            <p>能力有限，暂未开通</p>
            
        </Card>
    </section>
</template>

<style lang="scss" scoped>
.section {
    max-width: 800px;
    margin: 0 auto;
    padding: 3rem 1.5rem;

    p {
        color: #cdcdcd;
        margin: 1rem 0rem;
    }

    a {
        color: #fcee09;
        margin: 0px 1px;
    }
}
</style>
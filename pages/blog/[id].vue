<template>
    <div class="container">
        <section class="article-section columns">
            <BlogArticleContent :cover-url="coverUrl" @render-vditor="renderVditor" />
            <BlogArticleNav :outline="outline" />
        </section>
        <section class="comment-section columns">
            <BlogArticleComment :articleId="Number(id)"></BlogArticleComment>
        </section>
    </div>
</template>

<script lang="ts" setup>
import Vditor from 'vditor';
import 'vditor/dist/index.css';
import { ArticleService } from "@/utils/request/article"
import { VNode } from 'components/blog/type.ts';

const imgBaseUrl = useRuntimeConfig().public.imgUrl
const content = ref('');
const coverUrl = ref('');
const route = useRoute()

const outline = ref<any>([]);
const id = route.params.id as string
const res = await ArticleService.getArticleDetails({id});

content.value = res.data.content
coverUrl.value = res.data.coverUrl?`${imgBaseUrl}/${res.data.coverUrl}`:'https://ivocin.github.io/images/js-guide-book-buy.jpeg'

const mark = 'vditor-title'
const setTagId = function (el: HTMLDivElement) {
    const aHs = el.querySelectorAll('h1,h2,h3,h4,h5,h6');
    for (let i = 0; i < aHs.length; i++) {
        aHs[i].setAttribute('id', `${mark}-${i}`);
    }
    return aHs
}

const generateNavList = function (aHs: NodeListOf<Element>) {
    const els = Array.from(aHs);
    const vNodes: VNode[] = els.map((el, index) => Object.assign({
        level: Number(el.tagName.slice(1)),
        children: [],
        text: el.textContent,
        href: `${mark}-${index}`,
        isChildren: false
    }));

    for (let i = 1; i < vNodes.length; i++) {
        const lastNode = vNodes[i - 1];
        const node = vNodes[i]
        //如果已经被作为子元素那么跳过循环
        if (node.isChildren) continue;
        if (lastNode.level < node.level) {
            //标签大的肯定是子元素
            lastNode.children.push(node)
            node.isChildren = true
            //然后从子元素后面一个开始找 到和父元素位置相同的地方停止( 如果结束位置没有了 那么就代表找到末尾) 找到等级比它大或者相等 并且 这个元素要和相邻子元素相同等
            const startIndex = i + 1;
            const endIndex = vNodes.findIndex((n, j) => j > i && n.level <= lastNode.level);
            const childrens = vNodes
                .slice(startIndex, endIndex > 0 ? endIndex : vNodes.length)
                .filter(cNode => cNode.level === node.level);
            childrens.forEach(node => {
                node.isChildren = true
                lastNode.children.push(node)
            })

        }
    }
    return vNodes.filter(node => !node.isChildren)
}


const renderVditor = function (el: HTMLDivElement) {
    const vditorEl = el
    Vditor.preview(vditorEl, res.data.content, {
        mode: 'dark',
        speech: {
            enable: true,
        },
        anchor: 1,
        markdown: {
            toc: true
        },
        after() {
            const aHs = setTagId(vditorEl);
            outline.value = generateNavList(aHs)

        }
    });


}


</script>

<style lang="scss" scoped>
.container {
    padding: 1.5rem 1rem;
    min-height: calc(100vh - 3.25rem);
}

.article-section ::v-deep {
   
    .article-img {
        margin: -1.5rem -1.5rem 0 -1.5rem;
        clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%);
        -webkit-clip-path: polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%);
        overflow: hidden;
        border-top-left-radius: 0;
        border-top-right-radius: 0;

        .image {
            padding-top: 42.8%;

            img {
                bottom: 0;
                left: 0;
                position: absolute;
                right: 0;
                top: 0;
            }

            .fill {
                object-fit: cover;
                width: 100% !important;
                height: 100% !important;
            }
        }
    }

    .vditor-reset p,
    ol,
    ul {
        color: #cdcdcd;
        font-size: 1.1rem;
    }

    .vditor-reset {
        strong {
            color: #fcee09;
            font-weight: 700;
        }


        code {

            font-size: 0.875em;
            font-weight: normal;
        }
    }

    article h1 {
        font-size: 1.75em;
    }

    article h2 {
        font-size: 1.5em;
    }

    article h3 {
        font-size: 1.25em;
    }

    article h4 {
        font-size: 1.125em;
    }

    article h5 {
        font-size: 1em;
    }

    article h1,
    article h2,
    article h3,
    article h4,
    article h5,
    article h6 {
        color: #fcee09;
        font-weight: 400;
        line-height: 1.125;
    }
}

.outlline {
    li a {
        border-radius: 0;
        color: #cdcdcd;
        display: block;
        padding: 0.5em 0.75em;
        clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
        -webkit-clip-path: polygon(8px 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%, 0 8px);
    }

    li a.is-active {
        background-color: #fcee09;
        color: #000;
    }

}
</style>
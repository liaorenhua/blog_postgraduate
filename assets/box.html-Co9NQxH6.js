import{_ as k}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as p,d as i,e as d,b as r,a,f as e,g as t,r as h,o}from"./app-DTlPj9Oa.js";const g="/blog_postgraduate/assets/box-model-dERDQtfq.gif",A={},B={class:"hint-container tip"};function c(y,s){const l=h("CodeDemo"),n=h("RouteLink");return o(),p("div",null,[s[5]||(s[5]=i("p",null,"CSS 盒模型本质上是一个盒子，封装周围的 HTML 元素，它包括: 边距，边框，填充，和实际内容。",-1)),d(" more "),s[6]||(s[6]=r('<h2 id="盒模型介绍" tabindex="-1"><a class="header-anchor" href="#盒模型介绍"><span>盒模型介绍</span></a></h2><p>下面的图片说明了盒子模型 (Box Model):</p><figure><img src="'+g+`" alt="Box Model 示意图" tabindex="0" loading="lazy"><figcaption>Box Model 示意图</figcaption></figure><p>不同部分的说明:</p><ul><li>Content box (内容) - 盒子的内容，显示文本和图像，可以通过 <code>width</code> 和 <code>height</code> 设置大小。</li><li>Padding box (内边距) - 包围在内容区域外部的空白区域，通过 <code>padding</code> 属性设置。</li><li>Border box (边框) - 围绕在填充和内容外的边框，通过 <code>border</code> 属性设置。</li><li>Margin box (外边距) - 这是最外面的区域，是盒子和其他元素之间的空白区域，通过 <code>margin</code> 属性设置。</li></ul><div class="language-css" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">div</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  width: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">300</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  border: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">25</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#D19A66;"> solid</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> green</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  padding: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">25</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  margin: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">25</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75;">px</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><p>为了正确设置元素在所有浏览器中的宽度和高度，您需要知道的盒模型是如何工作的。</p><h2 id="元素的宽度和高度" tabindex="-1"><a class="header-anchor" href="#元素的宽度和高度"><span>元素的宽度和高度</span></a></h2><p>当您指定一个 CSS 元素的宽度和高度属性时，您只是设置内容区域(content box)的宽度和高度。<code>padding</code> 和 <code>border</code> 再加上设置的宽高一起决定整个盒子的大小。</p>`,9)),a(l,{id:"code-demo-48",type:"normal",title:"%E5%85%83%E7%B4%A0%E7%9A%84%E5%AE%BD%E5%BA%A6%E4%B8%8E%E9%AB%98%E5%BA%A6",code:"eJw9zT0KwzAMQOGrCM2lDS1d3J+TeHEi4wgc2VihNYTcvW4CWd83vAXHeYpo8En8gSE61ZfFPlWLcHlbwRMOqs0bn1uGxQrAl2keDdy6LtfHP/SpkC8GrvdcQVNkglC8lw2zI2IJu25lciWwHGFtn/UHBzcs3g=="},{default:e(()=>s[0]||(s[0]=[i("div",{class:"language-html","data-highlighter":"shiki","data-ext":"html","data-title":"html",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"<"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"div"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," class"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"box"'),i("span",{style:{"--shiki-light":"white","--shiki-dark":"#FFFFFF"}}," /"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},">")])])])],-1),i("div",{class:"language-css","data-highlighter":"shiki","data-ext":"css","data-title":"css",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"div"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},".box"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," {")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  width: "),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"300"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#E06C75"}},"px"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  border: "),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"25"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#E06C75"}},"px"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#D19A66"}}," solid"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," green"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  padding: "),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"25"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#E06C75"}},"px"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  margin: "),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"25"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#E06C75"}},"px"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"}")])])])],-1),i("p",null,"元素盒子的大小为: 300px (宽) + 50px (左 + 右填充) + 50px (左 + 右边框) = 400px",-1),i("p",null,"元素占据的空间为: 300px (宽) + 50px (左 + 右填充) + 50px (左 + 右边框) + 50px (左 + 右边距) = 450px",-1)])),_:1}),s[7]||(s[7]=i("p",null,"试想一下，您只有 250px 的空间。让我们设置总宽度为 250px 的元素:",-1)),a(l,{id:"code-demo-61",type:"normal",title:"%E6%80%BB%E5%AE%BD%E5%BA%A6%20250px%20%E7%9A%84%E5%85%83%E7%B4%A0",code:"eJw1zcsKwjAQheFXOcxatBbcxMuTZJN2JA2kScgUjZS+u6PQ5fm/xVlpWuZIhm4cXhijE7lbGnKzhNPDJjrQKKKufNSM1SbgHXiZDPq+K+36C8Uxh+QNznsZcuVnNbiUBskxMHx1nz/NrvqQDDpdm15sXyROKyo="},{default:e(()=>s[1]||(s[1]=[i("div",{class:"language-html","data-highlighter":"shiki","data-ext":"html","data-title":"html",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"<"),i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"div"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," class"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"="),i("span",{style:{"--shiki-light":"#50A14F","--shiki-dark":"#98C379"}},'"box"'),i("span",{style:{"--shiki-light":"white","--shiki-dark":"#FFFFFF"}}," /"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},">")])])])],-1),i("div",{class:"language-css","data-highlighter":"shiki","data-ext":"css","data-title":"css",style:{"--shiki-light":"#383A42","--shiki-dark":"#abb2bf","--shiki-light-bg":"#FAFAFA","--shiki-dark-bg":"#282c34"}},[i("pre",{class:"shiki shiki-themes one-light one-dark-pro vp-code"},[i("code",null,[i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#E45649","--shiki-dark":"#E06C75"}},"div"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},".box"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}}," {")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  width: "),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"220"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#E06C75"}},"px"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  padding: "),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"10"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#E06C75"}},"px"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  border: "),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"5"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#E06C75"}},"px"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#D19A66"}}," solid"),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}}," gray"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"  margin: "),i("span",{style:{"--shiki-light":"#986801","--shiki-dark":"#D19A66"}},"0"),i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},";")]),t(`
`),i("span",{class:"line"},[i("span",{style:{"--shiki-light":"#383A42","--shiki-dark":"#ABB2BF"}},"}")])])])],-1)])),_:1}),s[8]||(s[8]=i("p",null,"最终元素的总宽度计算公式是这样的:",-1)),s[9]||(s[9]=i("p",null,"元素的宽度 = 宽度 + 左填充 + 右填充 + 左边框 + 右边框 元素占据的水平空间 = 宽度 + 左填充 + 右填充 + 左边框 + 右边框 + 左边距 + 右边距",-1)),s[10]||(s[10]=i("p",null,"元素的总高度最终计算公式是这样的:",-1)),s[11]||(s[11]=i("p",null,"元素的高度 = 高度 + 顶部填充 + 底部填充 + 上边框 + 下边框 元素占据的垂直空间 = 高度 + 顶部填充 + 底部填充 + 上边框 + 下边框 + 上边距 + 下边距",-1)),i("div",B,[s[4]||(s[4]=i("p",{class:"hint-container-title"},"提示",-1)),i("p",null,[s[3]||(s[3]=t("更多相关可见 ")),a(n,{to:"/code/website/css/intro/box.html"},{default:e(()=>s[2]||(s[2]=[t("盒模型")])),_:1})])])])}const u=k(A,[["render",c],["__file","box.html.vue"]]),F=JSON.parse('{"path":"/code/website/css/guide/box.html","title":"盒模型简介","lang":"zh-CN","frontmatter":{"title":"盒模型简介","icon":"box","date":"2019-09-06T00:00:00.000Z","order":5,"category":"CSS","tag":["快速上手"],"description":"CSS 盒模型本质上是一个盒子，封装周围的 HTML 元素，它包括: 边距，边框，填充，和实际内容。","head":[["meta",{"property":"og:url","content":"https://liaorenhua.github.io/blog_postgraduate/blog_postgraduate/code/website/css/guide/box.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"盒模型简介"}],["meta",{"property":"og:description","content":"CSS 盒模型本质上是一个盒子，封装周围的 HTML 元素，它包括: 边距，边框，填充，和实际内容。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-07T02:58:54.000Z"}],["meta",{"property":"article:tag","content":"快速上手"}],["meta",{"property":"article:published_time","content":"2019-09-06T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-07T02:58:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"盒模型简介\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-09-06T00:00:00.000Z\\",\\"dateModified\\":\\"2025-01-07T02:58:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leo\\",\\"url\\":\\"https://liaorenhua.github.io/blog_postgraduate/\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://liaorenhua.github.io/blog_postgraduate/blog_postgraduate/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://liaorenhua.github.io/blog_postgraduate/blog_postgraduate/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://liaorenhua.github.io/blog_postgraduate/blog_postgraduate/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"盒模型介绍","slug":"盒模型介绍","link":"#盒模型介绍","children":[]},{"level":2,"title":"元素的宽度和高度","slug":"元素的宽度和高度","link":"#元素的宽度和高度","children":[]}],"git":{"createdTime":1736126247000,"updatedTime":1736218734000,"contributors":[{"name":"liao_rh","username":"liao_rh","email":"993929808@qq.com","commits":3,"url":"https://github.com/liao_rh"}]},"readingTime":{"minutes":1.93,"words":580},"filePathRelative":"code/website/css/guide/box.md","localizedDate":"2019年9月6日","excerpt":"<p>CSS 盒模型本质上是一个盒子，封装周围的 HTML 元素，它包括: 边距，边框，填充，和实际内容。</p>\\n","autoDesc":true}');export{u as comp,F as data};
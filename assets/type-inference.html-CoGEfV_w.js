import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,d as s,e as a,b as n,o as l}from"./app-DdoDXU2S.js";const p={};function r(h,i){return l(),t("div",null,[i[0]||(i[0]=s("p",null,"如果没有明确的指定类型，那么 TypeScript 会依照类型推论(Type Inference)的规则推断出一个类型。",-1)),a(" more "),i[1]||(i[1]=n(`<h2 id="什么是类型推论" tabindex="-1"><a class="header-anchor" href="#什么是类型推论"><span>什么是类型推论</span></a></h2><p>以下代码虽然没有指定类型，但是会在编译的时候报错:</p><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> myFavoriteNumber</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;seven&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">myFavoriteNumber</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 7</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// index.ts(2,1): error TS2322: Type &#39;number&#39; is not assignable to type &#39;string&#39;.</span></span></code></pre></div><p>事实上，它等价于:</p><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> myFavoriteNumber</span><span style="--shiki-light:#0184BC;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#0184BC;--shiki-dark:#E5C07B;"> string</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;seven&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">myFavoriteNumber</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 7</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">// index.ts(2,1): error TS2322: Type &#39;number&#39; is not assignable to type &#39;string&#39;.</span></span></code></pre></div><p>TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。</p><p><strong>如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 <code>any</code> 类型而完全不被类型检查</strong>:</p><div class="language-ts" data-highlighter="shiki" data-ext="ts" data-title="ts" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> myFavoriteNumber</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">myFavoriteNumber</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;seven&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">myFavoriteNumber</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 7</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span></code></pre></div><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考"><span>参考</span></a></h2><ul><li><a href="http://www.typescriptlang.org/docs/handbook/type-inference.html" target="_blank" rel="noopener noreferrer">Type Inference</a>(<a href="https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/Type%20Inference.html" target="_blank" rel="noopener noreferrer">中文版</a>)</li></ul>`,10))])}const d=e(p,[["render",r],["__file","type-inference.html.vue"]]),g=JSON.parse('{"path":"/code/language/typescript/basics/type-inference.html","title":"类型推论","lang":"zh-CN","frontmatter":{"date":"2020-05-04T00:00:00.000Z","title":"类型推论","icon":"extend","category":"TypeScript","description":"如果没有明确的指定类型，那么 TypeScript 会依照类型推论(Type Inference)的规则推断出一个类型。","head":[["meta",{"property":"og:url","content":"https://liaorenhua.github.io/blog_postgraduate/blog_postgraduate/code/language/typescript/basics/type-inference.html"}],["meta",{"property":"og:site_name","content":"𝓛𝓮𝓸 𝓑𝓛𝓸𝓖"}],["meta",{"property":"og:title","content":"类型推论"}],["meta",{"property":"og:description","content":"如果没有明确的指定类型，那么 TypeScript 会依照类型推论(Type Inference)的规则推断出一个类型。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-07T02:58:54.000Z"}],["meta",{"property":"article:published_time","content":"2020-05-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-07T02:58:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"类型推论\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-04T00:00:00.000Z\\",\\"dateModified\\":\\"2025-01-07T02:58:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leo\\",\\"url\\":\\"https://liaorenhua.github.io/blog_postgraduate/\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://liaorenhua.github.io/blog_postgraduate/blog_postgraduate/atom.xml","title":"𝓛𝓮𝓸 𝓑𝓛𝓸𝓖 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://liaorenhua.github.io/blog_postgraduate/blog_postgraduate/feed.json","title":"𝓛𝓮𝓸 𝓑𝓛𝓸𝓖 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://liaorenhua.github.io/blog_postgraduate/blog_postgraduate/rss.xml","title":"𝓛𝓮𝓸 𝓑𝓛𝓸𝓖 RSS Feed"}]]},"headers":[{"level":2,"title":"什么是类型推论","slug":"什么是类型推论","link":"#什么是类型推论","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"git":{"createdTime":1736126247000,"updatedTime":1736218734000,"contributors":[{"name":"liao_rh","username":"liao_rh","email":"993929808@qq.com","commits":3,"url":"https://github.com/liao_rh"}]},"readingTime":{"minutes":0.72,"words":215},"filePathRelative":"code/language/typescript/basics/type-inference.md","localizedDate":"2020年5月4日","excerpt":"<p>如果没有明确的指定类型，那么 TypeScript 会依照类型推论(Type Inference)的规则推断出一个类型。</p>\\n","autoDesc":true}');export{d as comp,g as data};
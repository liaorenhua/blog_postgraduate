import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,d as s,e as h,b as l,o as e}from"./app-CroXbHaO.js";const p={};function k(n,i){return e(),a("div",null,[i[0]||(i[0]=s("p",null,"无论是我们想直接访问一个文件，还是在一个文件中希望访问另一个文件，都涉及到一个获取文件的操作。而无论是在 Windows 中还是在 Linux 中，文件的具体位置都用文档的路径标注。",-1)),i[1]||(i[1]=s("p",null,"路径常常涉及到物理路径，相对路径，绝对路径，根目录的概念，现加以说明。",-1)),h(" more "),i[2]||(i[2]=l(`<h2 id="物理路径" tabindex="-1"><a class="header-anchor" href="#物理路径"><span>物理路径</span></a></h2><p>物理路径的英文全称是: Physical path，它就是指硬盘上文件的路径，比如下面的文件位置表示方法:</p><div class="language-text" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>d:\\wwwroot\\html\\a.html</span></span>
<span class="line"><span>d:\\wwwroot\\html\\photo\\b.html</span></span>
<span class="line"><span>d:\\wwwroot\\html\\photo\\c.html</span></span>
<span class="line"><span>d:\\wwwroot\\html\\photo\\ours\\d.html</span></span></code></pre></div><blockquote><p><code>D:</code> 与 <code>d:</code> 均可。盘符不分大小写。</p></blockquote><p>一般来说物理路径可用于访问本地文件，即不通过 WEB 服务器(如: 本地调试)等的情况下。</p><h2 id="相对路径" tabindex="-1"><a class="header-anchor" href="#相对路径"><span>相对路径</span></a></h2><p>相对路径的英文全称是 Relative Path，我们可以从以下三个方面来了解它的用法 (以“物理路径”中的位置情况为例):</p><ul><li><p>如何表示同级目录的文件</p><p>b.html 和 c.html 在同一个文件夹下，如果 b.html 需要链接到 c.html，可以在 b.html 中这样写:</p><div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;./c.html&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;同目录下文件间互相链接&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>代码中的 <code>./</code> 代表同级目录。</p><p><code>./</code>是相对路径，也可以省略不写，省略不写，即直接以文件夹或文件名称开头的路径也是相对路径。</p><div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;./c.html&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;同目录下文件间互相链接&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div></li><li><p>如何表示上级目录的文件</p><p>a.html 是 b.html 和 c.html 的上级目录中的文件，如果 b.html 或 c.html 链接到 a.html，可以在 b.html 或 c.html 中这样写:</p><div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;../a.html&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;链接到上级目录中的文件&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>代码中的 <code>../</code> 代表一级上级目录(间隔一个目录)。</p><p>需要注意的是: “<code>../../</code>”代表二级上级目录(间隔两个目录)，比如 a.html 是 d.html 的前两级目录，同时 d.html 需要链接到 a.html，可以在 d.html 中这样写:</p><div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;../../a.html&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;链接到上级目录的上级目录中的文件&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div></li><li><p>如何表示子目录的文件</p><p>b.html 和 c.html 是 a.html 的子目录中的文件，如果需要在 a.html 中链接到 b.html， 可以在 a.html 中这样写:</p><div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;photo/b.html&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;链接到子目录(photo)中的文件&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">如果需要在a.html中链接到d.html，可以在a.html中这样写</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;photo/ours/d.html&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;链接到子目录(photo/ours/)中的文件&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div></li></ul><h2 id="绝对路径" tabindex="-1"><a class="header-anchor" href="#绝对路径"><span>绝对路径</span></a></h2><p>绝对路径的英文全称是 Absolute Path，它就是带有网址的路径。比如您有一个域名 <code>www.example.com</code>，其域名指向 <code>d:\\wwwroot</code>，那么上面的四个文件就可以这么表示:</p><div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;http://www.example.com/html/a.html&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;链接到a.html&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;http://www.example.com/html/photo/b.html&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;链接到b.html&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;http://www.example.com/html/photo/c.html&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;链接到c.html&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;http://www.example.com/html/photo/ours/d.html&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;链接到d.html&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><h2 id="根目录" tabindex="-1"><a class="header-anchor" href="#根目录"><span>根目录</span></a></h2><p>根目录的英文全称是 Root directory，去掉绝对路径前面的域名就是根目录，所以它可以理解为是网站的最上层目录。它的表示方法如下:</p><div class="language-html" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/html/a.html&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;链接到a.html&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/html/photo/b.html&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;链接到b.html&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/html/photo/c.html&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;链接到c.html&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;/html/photo/ours/d.html&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;链接到d.html&lt;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div><p>在服务器上，根目录即代表网站主页所在的目录。网站服务器一般只能访问网站主页所在文件夹内的文件与文件夹。</p>`,15))])}const o=t(p,[["render",k],["__file","path.html.vue"]]),g=JSON.parse('{"path":"/code/basic/path.html","title":"路径","lang":"zh-CN","frontmatter":{"title":"路径","icon":"navigation","date":"2019-09-20T00:00:00.000Z","category":"基础","order":5,"description":"无论是我们想直接访问一个文件，还是在一个文件中希望访问另一个文件，都涉及到一个获取文件的操作。而无论是在 Windows 中还是在 Linux 中，文件的具体位置都用文档的路径标注。 路径常常涉及到物理路径，相对路径，绝对路径，根目录的概念，现加以说明。","head":[["meta",{"property":"og:url","content":"https://mister-hope.com/code/basic/path.html"}],["meta",{"property":"og:site_name","content":"Mr.Hope"}],["meta",{"property":"og:title","content":"路径"}],["meta",{"property":"og:description","content":"无论是我们想直接访问一个文件，还是在一个文件中希望访问另一个文件，都涉及到一个获取文件的操作。而无论是在 Windows 中还是在 Linux 中，文件的具体位置都用文档的路径标注。 路径常常涉及到物理路径，相对路径，绝对路径，根目录的概念，现加以说明。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-07T02:58:54.000Z"}],["meta",{"property":"article:published_time","content":"2019-09-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-07T02:58:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"路径\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2019-09-20T00:00:00.000Z\\",\\"dateModified\\":\\"2025-01-07T02:58:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Hope\\",\\"url\\":\\"https://mister-hope.com\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://mister-hope.com/atom.xml","title":"Mr.Hope Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://mister-hope.com/feed.json","title":"Mr.Hope JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://mister-hope.com/rss.xml","title":"Mr.Hope RSS Feed"}]]},"headers":[{"level":2,"title":"物理路径","slug":"物理路径","link":"#物理路径","children":[]},{"level":2,"title":"相对路径","slug":"相对路径","link":"#相对路径","children":[]},{"level":2,"title":"绝对路径","slug":"绝对路径","link":"#绝对路径","children":[]},{"level":2,"title":"根目录","slug":"根目录","link":"#根目录","children":[]}],"git":{"createdTime":1736126247000,"updatedTime":1736218734000,"contributors":[{"name":"liao_rh","username":"liao_rh","email":"993929808@qq.com","commits":3,"url":"https://github.com/liao_rh"}]},"readingTime":{"minutes":2.89,"words":867},"filePathRelative":"code/basic/path.md","localizedDate":"2019年9月20日","excerpt":"<p>无论是我们想直接访问一个文件，还是在一个文件中希望访问另一个文件，都涉及到一个获取文件的操作。而无论是在 Windows 中还是在 Linux 中，文件的具体位置都用文档的路径标注。</p>\\n<p>路径常常涉及到物理路径，相对路径，绝对路径，根目录的概念，现加以说明。</p>\\n","autoDesc":true}');export{o as comp,g as data};
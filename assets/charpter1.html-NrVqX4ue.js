import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,b as t,o as l}from"./app-Bh4LflTH.js";const i={};function r(n,a){return l(),e("div",null,a[0]||(a[0]=[t('<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h2><ul><li>孤立系: 与其他物体既没有物质交换也没有能量交换的系统。</li><li>闭系: 与外界没有物质交换，但有能量交换的系统</li><li>开系: 与外界既有物质交换，又有能量交换的系统</li></ul><p>热力学平衡态: 系统的各种宏观性质在长时间内不发生任何变化。</p><p>弛豫时间: 系统由其初始状态达到平衡状态所经历的时间称为弛豫时间。</p><p>热平衡定律 (热力学第零定律): 如果物体 A 和 物体 B 各自与处在同一状态的物体 C 达到热平衡，若令 A 与 B 进行接触，它们也将处在热平衡。</p><p>热力学温标: 不依赖于任何具体物质特性的温标。</p><h2 id="公式" tabindex="-1"><a class="header-anchor" href="#公式"><span>公式</span></a></h2><p>简单系统的一般物态方程形式为 $f(p, V, T) = 0$</p><p>三个重要的物理量</p><p>$$\\tag{体胀系数} \\alpha = \\frac{1}{V}\\Big(\\frac{\\partial V}{\\partial T}\\Big)_p$$</p><p>$$\\tag{压强系数} \\beta = \\frac{1}{p}\\Big(\\frac{\\partial p}{\\partial T}\\Big)_V$$</p><p>$$\\tag{等温压缩系数} \\kappa_T = - \\frac{1}{V}\\Big(\\frac{\\partial V}{\\partial p}\\Big)_T$$</p><p>满足关系 $\\alpha = \\kappa_T \\beta p$</p><p>一个重要的推导: $\\cfrac{dV}{V}= \\alpha dT - \\kappa_Tdp$</p><h2 id="功" tabindex="-1"><a class="header-anchor" href="#功"><span>功</span></a></h2><ul><li><p>体积功: $\\delta W = -pdV$</p></li><li><p>表面功: $\\delta W = \\sigma dA$ (液膜有两层)</p></li><li><p>电介质:</p><p>$$\\delta W = Udq$$</p><p>$$\\delta W = VEdD$$</p><p>$$\\delta W = Vd\\Big(\\frac{\\epsilon_0E^2}{2}\\Big)+VEdP$$</p></li><li><p>磁介质:</p><p>$$\\delta W = UIdt$$</p><p>$$\\delta W = VHdB$$</p><p>$$ \\delta W = Vd\\Big(\\frac{\\mu_0H^2}{2}\\Big)+\\mu_0VHdM $$</p></li></ul><h2 id="声速" tabindex="-1"><a class="header-anchor" href="#声速"><span>声速</span></a></h2><p>$a = \\sqrt{\\cfrac{dp}{d\\rho}}$</p><p>$a^2=\\gamma\\cfrac{p}{\\rho}=\\gamma pV$</p><p>式中 $v=\\cfrac{1}{\\rho}$ 称为比体积。</p><h2 id="理想气体" tabindex="-1"><a class="header-anchor" href="#理想气体"><span>理想气体</span></a></h2><p>理想气体的物态方程为 $pV =nRT$。</p><p>更精确的范德瓦尔斯方程形式为</p><p>$$(p + \\frac{an<sup>2}{V</sup>2})(V - nb) = nRT$$</p><p>理想气体无相互作用，故:</p><p>$\\Big(\\cfrac{\\partial U}{\\partial V}\\Big)_T=0$ $\\Big(\\cfrac{\\partial H}{\\partial p}\\Big)_T=0$ $\\Big(\\cfrac{\\partial T}{\\partial V}\\Big)_U=0$,称为焦耳系数</p><p>对于理想气体来说，满足多方过程 $pV^\\gamma = \\text{常量}$，同时有 $TV^{\\gamma -1}$, $\\cfrac{p^{\\gamma -1}}{T^\\gamma}$ 也为常量。</p><h2 id="熵" tabindex="-1"><a class="header-anchor" href="#熵"><span>熵</span></a></h2><p>熵是系统中微观粒子无规运动的混乱程度的亮度。</p><p>$$dS=\\frac{dQ}{dT}$$</p><p>$$\\Delta S=\\int_{T_1}^{T_2}\\frac{mC_pdT}{T}$$</p><p>物体吸热熵变为: $mC_pln\\cfrac{T_1}{T_2}$</p><p>理想气体的熵:</p><p>$$ S = C_V\\ln T+nR\\ln V+S_0 $$</p><p>$$ S=C_p\\ln T-nR\\ln V+S_0 $$</p><p>对于理想气体有:</p><p>$$ \\Big(\\frac{\\partial T}{\\partial p}\\Big)_S=\\frac{VT\\alpha}{C_p} $$</p><p>熵增加原理: 经过绝热过程后，系统的熵永不减小。</p><h2 id="热机与循环" tabindex="-1"><a class="header-anchor" href="#热机与循环"><span>热机与循环</span></a></h2><p>对于等温过程，满足 $Q=RT\\ln\\cfrac{T_2}{T_1}$</p><p>克劳修斯不等式: $\\sum\\cfrac{Q_i}{T_i}\\leqslant 0$</p><p>对于工作在两个物质之间的任何热机，满足: $\\eta = 1 - \\cfrac{Q_2}{Q_1} \\leqslant 1 - \\cfrac{T_2}{T_1}$</p><p>卡诺热机: $\\eta =1 - \\cfrac{T_2}{T_1}$</p><p>制冷机: $\\eta_{\\text{制冷}}= \\cfrac{T_2}{T_1-T_2}$</p><h2 id="自由能与吉布斯函数" tabindex="-1"><a class="header-anchor" href="#自由能与吉布斯函数"><span>自由能与吉布斯函数</span></a></h2><p>定义热力学状态函数自由能 $F = U -TS$</p><p>在等温等容条件下，系统的自由能永不增加，系统中发生的不可逆过程总是朝着自由能减少的方向进行的。</p><p>定义热力学状态函数吉布斯 (Gibbs) 函数 $G = F +pV = U -TS + pV$</p><p>等温等压条件下，系统的吉布斯函数用不增加，系统中发生的不可逆过程总是朝着吉布斯函数减少的方向进行的。</p><h2 id="习题" tabindex="-1"><a class="header-anchor" href="#习题"><span>习题</span></a></h2><ol><li><p>由理想气体的物态方程推导出理想气体的 $\\alpha$, $\\beta$, $\\kappa _T$。</p></li><li><p>证明物态关系满足</p><p>$$ln V = \\int(\\alpha dT - \\kappa _Tdp)$$</p></li><li><p>如果认为固体和液体在一定范围内可以把 $\\alpha$ 和 $\\kappa _T$ 视为常量，则有:</p><p>$$ V(T, p) - V_0 (T_0, 0) [1+ \\alpha (T - T_0)-\\kappa_Tp] $$</p></li></ol>',51)]))}const o=p(i,[["render",r],["__file","charpter1.html.vue"]]),s=JSON.parse('{"path":"/physics/tsp/charpter1.html","title":"第一章","lang":"zh-CN","frontmatter":{"title":"第一章","date":"2020-12-28T00:00:00.000Z","category":"物理","tag":["热统"],"description":"概念 孤立系: 与其他物体既没有物质交换也没有能量交换的系统。 闭系: 与外界没有物质交换，但有能量交换的系统 开系: 与外界既有物质交换，又有能量交换的系统 热力学平衡态: 系统的各种宏观性质在长时间内不发生任何变化。 弛豫时间: 系统由其初始状态达到平衡状态所经历的时间称为弛豫时间。 热平衡定律 (热力学第零定律): 如果物体 A 和 物体 B 各...","head":[["meta",{"property":"og:url","content":"https://liaorenhua.github.io/blog_postgraduate/blog_postgraduate/physics/tsp/charpter1.html"}],["meta",{"property":"og:site_name","content":"𝓛𝓮𝓸 𝓑𝓛𝓸𝓖"}],["meta",{"property":"og:title","content":"第一章"}],["meta",{"property":"og:description","content":"概念 孤立系: 与其他物体既没有物质交换也没有能量交换的系统。 闭系: 与外界没有物质交换，但有能量交换的系统 开系: 与外界既有物质交换，又有能量交换的系统 热力学平衡态: 系统的各种宏观性质在长时间内不发生任何变化。 弛豫时间: 系统由其初始状态达到平衡状态所经历的时间称为弛豫时间。 热平衡定律 (热力学第零定律): 如果物体 A 和 物体 B 各..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-01-07T02:58:54.000Z"}],["meta",{"property":"article:tag","content":"热统"}],["meta",{"property":"article:published_time","content":"2020-12-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2025-01-07T02:58:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"第一章\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-12-28T00:00:00.000Z\\",\\"dateModified\\":\\"2025-01-07T02:58:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Leo\\",\\"url\\":\\"https://liaorenhua.github.io/blog_postgraduate/\\"}]}"],["link",{"rel":"alternate","type":"application/atom+xml","href":"https://liaorenhua.github.io/blog_postgraduate/blog_postgraduate/atom.xml","title":"𝓛𝓮𝓸 𝓑𝓛𝓸𝓖 Atom Feed"}],["link",{"rel":"alternate","type":"application/json","href":"https://liaorenhua.github.io/blog_postgraduate/blog_postgraduate/feed.json","title":"𝓛𝓮𝓸 𝓑𝓛𝓸𝓖 JSON Feed"}],["link",{"rel":"alternate","type":"application/rss+xml","href":"https://liaorenhua.github.io/blog_postgraduate/blog_postgraduate/rss.xml","title":"𝓛𝓮𝓸 𝓑𝓛𝓸𝓖 RSS Feed"}]]},"headers":[{"level":2,"title":"概念","slug":"概念","link":"#概念","children":[]},{"level":2,"title":"公式","slug":"公式","link":"#公式","children":[]},{"level":2,"title":"功","slug":"功","link":"#功","children":[]},{"level":2,"title":"声速","slug":"声速","link":"#声速","children":[]},{"level":2,"title":"理想气体","slug":"理想气体","link":"#理想气体","children":[]},{"level":2,"title":"熵","slug":"熵","link":"#熵","children":[]},{"level":2,"title":"热机与循环","slug":"热机与循环","link":"#热机与循环","children":[]},{"level":2,"title":"自由能与吉布斯函数","slug":"自由能与吉布斯函数","link":"#自由能与吉布斯函数","children":[]},{"level":2,"title":"习题","slug":"习题","link":"#习题","children":[]}],"git":{"createdTime":1736126247000,"updatedTime":1736218734000,"contributors":[{"name":"liao_rh","username":"liao_rh","email":"993929808@qq.com","commits":3,"url":"https://github.com/liao_rh"}]},"readingTime":{"minutes":3.07,"words":922},"filePathRelative":"physics/tsp/charpter1.md","localizedDate":"2020年12月28日","excerpt":"","autoDesc":true}');export{o as comp,s as data};
"use strict";(self.webpackChunkblog_postgraduate=self.webpackChunkblog_postgraduate||[]).push([[530],{6262:(e,i)=>{i.A=(e,i)=>{const a=e.__vccOpts||e;for(const[e,n]of i)a[e]=n;return a}},607:(e,i,a)=>{e.exports=a.p+"assets/img/a1477b903cd4d5a69686683c0dbc3300.e84f279f.png"},9219:(e,i,a)=>{a.r(i),a.d(i,{comp:()=>b,data:()=>u});var n=a(641);const t=a.p+"assets/img/174bb72bad50127ac84427a72327f095.94bbe9bc.png",s=a.p+"assets/img/62e061618977565c22c2cf09930e1d3c.83f433f2.png",r=a.p+"assets/img/b191c8760c8ad33acd9bb005b251a2df.ce0a02d9.png",l=a.p+"assets/img/image-20210304160835980.a9b12950.png",d=a.p+"assets/img/36108959084392065f36dff3e12967b9.5a6fea90.png",o=a.p+"assets/img/image-20210304161416507.f8d5a788.png";var p=a(607);const c=a.p+"assets/img/1fe4c1121c50abcf571cebd677a8bdea.9225a488.png",A=a.p+"assets/img/cb0d1d2c56400fe9c9988ee32842b175.b5dd340c.png",g=a.p+"assets/img/f1970aaecad58fb18938e262ea7f311c.1429c8ad.png",h={},b=(0,a(6262).A)(h,[["render",function(e,i){return(0,n.uX)(),(0,n.CE)("div",null,i[0]||(i[0]=[(0,n.Fv)('<h1 id="_02-http-报文是什么样子的" tabindex="-1"><a class="header-anchor" href="#_02-http-报文是什么样子的"><span>02 | HTTP 报文是什么样子的？</span></a></h1><p>在上一讲里，我们在本机的最小化环境了做了两个 HTTP 协议的实验，使用 Wireshark 抓包，弄清楚了 HTTP 协议基本工作流程，也就是 <strong>请求 - 应答</strong>，<strong>一发一收</strong> 的模式。</p><p>可以看到，HTTP 的工作模式是非常简单的，由于 TCP/IP 协议负责底层的具体传输工作，HTTP 协议基本上不用在这方面操心太多。单从这一点上来看，所谓的「超文本传输协议」其实并不怎么管 「传输」的事情，有点「名不副实」。</p><p>那么 HTTP 协议的核心部分是什么呢？</p><p>答案就是它 <strong>传输的报文内容</strong>。</p><p>HTTP 协议在规范文档里详细定义了报文的格式，规定了组成部分，解析规则，还有处理策略，所以可以在 TCP/IP 层之上实现更灵活丰富的功能，例如连接控制，缓存管理、数据编码、内容协商等等。</p><h2 id="报文结构" tabindex="-1"><a class="header-anchor" href="#报文结构"><span>报文结构</span></a></h2><p>你也许对 TCP/UDP 的报文格式有所了解，拿 TCP 报文来举例，它在实际要传输的数据之前附加了一个 <strong>20 字节的头部数据</strong> ，存储 TCP 协议必须的额外信息，例如发送方的端口号、接收方的端口号、包序号、标志位等等。</p><p>有了这个附加的 TCP 头，数据包才能够正确传输，到了目的地后把头部去掉，就可以拿到真正的数据。</p><figure><img src="'+t+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>HTTP 协议也是与 TCP/UDP 类似，同样也需要在实际传输的数据前附加一些头数据，不过与 TCP/UDP 不同的是，它是一个 <strong>纯文本</strong> 的协议，所以头数据都是 ASCII 码的文本，可以很容易地用肉眼阅读，不用借助程序解析也能够看懂。</p><p>HTTP 协议的请求报文和响应报文的结构基本相同，由三大部分组成：</p><ol><li>起始行（start line）：描述请求或响应的基本信息；</li><li>头部字段集合（header）：使用 key-value 形式更详细地说明报文；</li><li>消息正文（entity）：实际传输的数据，它不一定是纯文本，可以是图片、视频等二进制数据。</li></ol><p>这其中前两部分起始行和头部字段经常又合称为 <strong>请求头</strong> 或 <strong>响应头</strong>，消息正文又称为 <strong>实体</strong>，但与 <strong>header</strong> 对应，很多时候就直接称为 <strong>body</strong> 。</p><p>HTTP 协议规定报文必须有 header，但可以没有 body，而且在 header 之后必须要有一个 <strong>空行</strong>，也就是 「CRLF」，十六进制的「0D0A」。</p><p>所以，一个完整的 HTTP 报文就像是下图的这个样子，注意在 header 和 body 之间有一个 <strong>空行</strong> 。</p><figure><img src="'+s+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>看一下我们之前用 Wireshark 抓的包吧。</p><figure><img src="'+r+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>对应原始抓包的数据如下</p><figure><img src="'+l+'" alt="image-20210304160835980" tabindex="0" loading="lazy"><figcaption>image-20210304160835980</figcaption></figure><p>在这个浏览器发出的请求报文里，第一行 <code>GET / HTTP/1.1</code> 就是请求行，而后面的 Host、Connection 等等都属于 header，报文的最后是一个空白行结束，没有 body。</p><p>在很多时候，特别是浏览器发送 GET 请求的时候都是这样，HTTP 报文经常是只有 header 而没 body，相当于只发了一个超级「大头」过来，你可以想象的出来：每时每刻网络上都会有数不清的「大头儿子」在跑来跑去。</p><p>不过这个大头也不能太大，虽然 HTTP 协议对 header 的大小没有做限制，但各个 Web 服务器都不允许过大的请求头，因为头部太大可能会占用大量的服务器资源，影响运行效率。</p><h2 id="请求行" tabindex="-1"><a class="header-anchor" href="#请求行"><span>请求行</span></a></h2><p>了解了 HTTP 报文的基本结构后，我们来看看请求报文里的起始行也就是 <strong>请求行</strong>（request line），它简要地描述了 <strong>客户端想要如何操作服务器端的资源</strong> 。</p><p>请求行由三部分构成：</p><ol><li>请求方法：是一个动词，如 GET/POST，表示对资源的操作；</li><li>请求目标：通常是一个 URI，标记了请求方法要操作的资源；</li><li>版本号：表示报文使用的 HTTP 协议版本。</li></ol><p>这三个部分通常使用空格（space）来分隔，最后要用 CRLF 换行表示结束。</p><figure><img src="'+d+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>还是用 Wireshark 抓包的数据来举例：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>GET / HTTP/1.1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在这个请求行里，<code>GET</code> 是请求方法，<code>/</code> 是请求目标，<code>HTTP/1.1</code> 是版本号，把这三部分连起来，意思就是「服务器你好，我想获取网站根目录下的默认文件，我用的协议版本号是 1.1，请不要用 1.0 或者 2.0 回复我。」</p><p>别看请求行就一行，貌似很简单，其实这里面的「讲究」是非常多的，尤其是前面的请求方法和请求目标，组合起来变化多端，后面我还会详细介绍。</p><h2 id="状态行" tabindex="-1"><a class="header-anchor" href="#状态行"><span>状态行</span></a></h2><p>看完了请求行，我们再看响应报文里的起始行，在这里它不叫 <strong>响应行</strong>，而是叫 <strong>状态行</strong>（status line），意思是 <strong>服务器响应的状态</strong>。</p><figure><img src="'+o+'" alt="image-20210304161416507" tabindex="0" loading="lazy"><figcaption>image-20210304161416507</figcaption></figure><p>比起请求行来说，状态行要简单一些，同样也是由三部分构成：</p><ol><li>版本号：表示报文使用的 HTTP 协议版本；</li><li>状态码：一个三位数，用代码的形式表示处理的结果，比如 200 是成功，500 是服务器错误；</li><li>原因：作为数字状态码补充，是更详细的解释文字，帮助人理解原因。</li></ol><figure><img src="'+p+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>看一下上一讲里 Wireshark 抓包里的响应报文，状态行是：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>HTTP/1.1 200 OK</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>意思就是：「浏览器你好，我已经处理完了你的请求，这个报文使用的协议版本号是 1.1，状态码是 200，一切 OK。」</p><p>而另一个 <code>GET /favicon.ico HTTP/1.1</code> 的响应报文状态行是：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>HTTP/1.1 404 Not Found</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>翻译成人话就是：「抱歉啊浏览器，刚才你的请求收到了，但我没找到你要的资源，错误代码是 404，接下来的事情你就看着办吧。」</p><h2 id="头部字段" tabindex="-1"><a class="header-anchor" href="#头部字段"><span>头部字段</span></a></h2><p>请求行或状态行再加上头部字段集合就构成了 HTTP 报文里完整的请求头或响应头，我画了两个示意图，你可以看一下。</p><figure><img src="'+c+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><figure><img src="'+A+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>请求头和响应头的结构是基本一样的，唯一的区别是起始行，所以我把请求头和响应头里的字段放在一起介绍。</p><p>头部字段是 key-value 的形式，key 和 value 之间用 <code>: </code> 分隔，最后用 CRLF 换行表示字段结束。比如在 <code>Host: 127.0.0.1</code> 这一行里 key 就是 <code>Host</code>，value 就是 <code>127.0.0.1</code>。</p><p>HTTP 头字段非常灵活，不仅可以使用标准里的 Host、Connection 等已有头，也可以 <strong>任意添加自定义头</strong> ，这就给 HTTP 协议带来了无限的扩展可能。</p><p>不过使用头字段需要注意下面几点：</p><ol><li>字段名不区分大小写，例如 <code>Host</code> 也可以写成 <code>host</code> ，但首字母大写的可读性更好；</li><li>字段名里不允许出现空格，可以使用连字符 <code>-</code> ，但不能使用下划线 <code>_</code> 。例如，<code>test-name</code> 是合法的字段名，而 <code>test name</code>、<code>test_name</code> 是不正确的字段名；</li><li>字段名后面必须紧接着 <code>:</code>，不能有空格，而 <code>:</code> 后的字段值前可以有多个空格；</li><li>字段的顺序是没有意义的，可以任意排列不影响语义；</li><li>字段原则上不能重复，除非这个字段本身的语义允许，例如 Set-Cookie。</li></ol><p>我在实验环境里用 Lua 编写了一个小服务程序，URI 是 <code>/09-1</code> ，效果是输出所有的请求头。</p><div class="hint-container tip"><p class="hint-container-title">关于 lua 的知识点</p><p>建议可以粗略的阅读下 OpenResty 使用 lua 的入门知识点，<a href="https://zq99299.github.io/note-book/cache-pdp/052.html#nginx-lua-%E5%BC%80%E5%8F%91%E7%9A%84-hello-world" target="_blank" rel="noopener noreferrer">笔者的另一篇笔记中</a></p><p>那么说说实验室里面的 lua 怎么关联上的：</p><ol><li><p>www/conf/nginx.conf 中导入了 www/http/*.conf 配置文件</p></li><li><p>www/http/resty.conf 中定义了</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>lua_package_path    &quot;$prefix/lua/?.lua;;&quot;;</span></span>\n<span class="line"><span>lua_package_cpath   &quot;$prefix/lua/lib/?.so;;&quot;;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>具体 prefix 怎么来的笔者不清楚</p></li><li><p>www/http/servers/locations.inc 中定义了</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span># curl 127.1/07-1</span></span>\n<span class="line"><span>location ~ ^/([\\d|\\-]+) {</span></span>\n<span class="line"><span>    default_type text/plain;</span></span>\n<span class="line"><span>    content_by_lua_file lua/$1.lua;</span></span>\n<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>大致关联关系如上所述，就能对应到具体的 lua 文件里面的程序了</p></div><p>先启动 OpenResty 服务器，然后用组合键 <code>Win+R</code> 运行 telnet，输入命令 <code>open www.chrono.com 80</code>，就连上了 Web 服务器。</p><figure><img src="data:image/png;base64,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" alt="image-20210304164924545" tabindex="0" loading="lazy"><figcaption>image-20210304164924545</figcaption></figure><div class="hint-container tip"><p class="hint-container-title">telnet 连接说明</p><p>上图命令输入完成后，回车，会进入下图所示的提示</p><figure><img src="data:image/png;base64,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" alt="image-20210304165037886" tabindex="0" loading="lazy"><figcaption>image-20210304165037886</figcaption></figure><p>这个时候需要按 <code>Ctrl + ] </code> 快捷键，然后再按 回车键，就进入了编辑界面。</p><p>显示正在连接的时候，笔者抓包看看了下， 3 次握手已经完成，后面没有包了。</p></div><p>在编辑模式界面里，你可以直接用鼠标右键粘贴文本（先在外面写好，复制粘贴进去），敲两下回车后就会发送数据，也就是模拟了一次 HTTP 请求。</p><p>下面是两个最简单的 HTTP 请求，第一个在 <code>:</code> 后有多个空格，第二个在 <code>:</code> 前有空格。</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>GET /09-1 HTTP/1.1</span></span>\n<span class="line"><span>Host:   www.chrono.com</span></span>\n<span class="line"><span> </span></span>\n<span class="line"><span> </span></span>\n<span class="line"><span>GET /09-1 HTTP/1.1</span></span>\n<span class="line"><span>Host : www.chrono.com</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一个可以正确获取服务器的响应报文，而第二个得到的会是一个 <code>400 Bad Request</code>，表示请求报文格式有误，服务器无法正确处理：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>HTTP/1.1 400 Bad Request</span></span>\n<span class="line"><span>Server: openresty/1.15.8.1</span></span>\n<span class="line"><span>Connection: close</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>telnet 模拟得到的响应显示不完全，你可以尝试直接用浏览器访问 <code>http://www.chrono.com/09-1</code> 对比下就知道</p><h2 id="常用头字段" tabindex="-1"><a class="header-anchor" href="#常用头字段"><span>常用头字段</span></a></h2><p>HTTP 协议规定了非常多的头部字段，实现各种各样的功能，但基本上可以分为四大类：</p><ol><li>通用字段：在请求头和响应头里都可以出现；</li><li>请求字段：仅能出现在请求头里，进一步说明请求信息或者额外的附加条件；</li><li>响应字段：仅能出现在响应头里，补充说明响应报文的信息；</li><li>实体字段：它实际上属于通用字段，但专门描述 body 的额外信息。</li></ol><p>对 HTTP 报文的解析和处理实际上主要就是对头字段的处理，理解了头字段也就理解了 HTTP 报文。</p><p>后续的课程中我将会以应用领域为切入点介绍连接管理、缓存控制等头字段，今天先讲几个最基本的头，看完了它们你就应该能够读懂大多数 HTTP 报文了。</p><h3 id="host" tabindex="-1"><a class="header-anchor" href="#host"><span>Host</span></a></h3><p>首先要说的是 <strong>Host</strong> 字段，它属于 <strong>请求字段</strong>，只能出现在请求头里，它同时也是唯一一个 HTTP/1.1 规范里要求 <strong>必须出现</strong> 的字段，也就是说，如果请求头里没有 Host，那这就是一个错误的报文。</p><p>Host 字段告诉服务器这个请求应该由哪个主机来处理，当一台计算机上托管了多个虚拟主机的时候，服务器端就需要用 Host 字段来选择，有点像是一个简单的 <strong>路由重定向</strong> 。</p><p>例如我们的试验环境，在 127.0.0.1 上有三个虚拟主机：<code>www.chrono.com</code> 、<code>www.metroid.net</code> 和 <code>origin.io</code> （这三个域名通过 www//conf/http/servers/xx.conf 各自定义的）。那么当使用域名的方式访问时，就必须要用 Host 字段来区分这三个 IP 相同但域名不同的网站，否则服务器就会找不到合适的虚拟主机，无法处理。</p><h3 id="user-agent" tabindex="-1"><a class="header-anchor" href="#user-agent"><span>User-Agent</span></a></h3><p><strong>User-Agent</strong> 是请求字段，只出现在请求头里。它使用一个字符串来描述发起 HTTP 请求的客户端，服务器可以依据它来返回最合适此浏览器显示的页面。</p><p>但由于历史的原因，User-Agent 非常混乱，每个浏览器都自称是 <code>Mozilla</code> 、<code>Chrome</code> 、<code>Safari</code> ，企图使用这个字段来互相 <strong>伪装</strong>，导致 User-Agent 变得越来越长，最终变得毫无意义。</p><p>不过有的比较 「诚实」 的爬虫会在 User-Agent 里用 <code>spider</code> 标明自己是爬虫，所以可以利用这个字段实现简单的反爬虫策略。</p><h3 id="date" tabindex="-1"><a class="header-anchor" href="#date"><span>Date</span></a></h3><p><strong>Date</strong> 字段是一个 <strong>通用字段</strong> ，但通常出现在响应头里，表示 HTTP 报文创建的时间，客户端可以使用这个时间再搭配其他字段决定缓存策略。</p><h3 id="server" tabindex="-1"><a class="header-anchor" href="#server"><span><strong>Server</strong></span></a></h3><p><strong>Server</strong> 字段是 <strong>响应字段</strong>，只能出现在响应头里。它告诉客户端当前正在提供 Web 服务的软件名称和版本号，例如在我们的实验环境里它就是 <code>Server: openresty/1.15.8.1</code>，即使用的是 OpenResty 1.15.8.1。</p><p>Server 字段也不是必须要出现的，因为这会把服务器的一部分信息暴露给外界，如果这个版本恰好存在 bug，那么黑客就有可能利用 bug 攻陷服务器。所以，有的网站响应头里要么没有这个字段，要么就给出一个完全无关的描述信息。</p><p>比如 GitHub，它的 Server 字段里就看不出是使用了 Apache 还是 Nginx，只是显示为 <code>GitHub.com</code> 。</p><figure><img src="'+g+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><h3 id="content-length" tabindex="-1"><a class="header-anchor" href="#content-length"><span>Content-Length</span></a></h3><p>实体字段里要说的一个是 <strong>Content-Length</strong> ，它表示报文里 body 的长度，也就是请求头或响应头空行后面数据的长度。服务器看到这个字段，就知道了后续有多少数据，可以直接接收。如果没有这个字段，那么 body 就是不定长的，需要使用 chunked 方式分段传输。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h2><p>今天我们学习了 HTTP 的报文结构，下面做一个简单小结。</p><ol><li>HTTP 报文结构就像是「大头儿子」，由「起始行 + 头部 + 空行 + 实体」组成，简单地说就是「header+body」；</li><li>HTTP 报文可以没有 body，但必须要有 header，而且 header 后也必须要有空行，形象地说就是大头必须要带着脖子；</li><li>请求头由「请求行 + 头部字段」构成，响应头由「状态行 + 头部字段」构成；</li><li>请求行有三部分：请求方法，请求目标和版本号；</li><li>状态行也有三部分：版本号，状态码和原因字符串；</li><li>头部字段是 key-value 的形式，用 <code>:</code> 分隔，不区分大小写，顺序任意，除了规定的标准头，也可以任意添加自定义字段，实现功能扩展；</li><li>HTTP/1.1 里唯一要求必须提供的头字段是 Host，它必须出现在请求头里，标记虚拟主机名。</li></ol><h2 id="课下作业" tabindex="-1"><a class="header-anchor" href="#课下作业"><span>课下作业</span></a></h2><ol><li><p>如果拼 HTTP 报文的时候，在头字段后多加了一个 CRLF，导致出现了一个空行，会发生什么？</p><p>笔者认为：会将空行之后的部分都当成 body</p></li><li><p>讲头字段时说 <code>:</code> 后的空格可以有多个，那为什么绝大多数情况下都只使用一个空格呢？</p><p>节省资源</p></li></ol><h2 id="课外小贴士" tabindex="-1"><a class="header-anchor" href="#课外小贴士"><span>课外小贴士</span></a></h2><ul><li>在 Nginx 里，默认的请求头大小不能超过 8K，但是可以用指令 <code>large_client_hearder_buffers</code> 修改</li><li>在 HTTP 报文里用来分割请求方法、URI 等部分的不一定必须是空格，制表符(tab) 也是允许的</li><li>早期曾经允许在头部用 <strong>前导空格</strong> 实现字段跨行，但现在这种方式已经被 RFC7230 废弃，字段只能放在一行里</li><li>默认情况下 Nginx 是不允许头字段里使用 <code>_</code> 的，配置指令 <code>underscores_in_header on</code> 可以接触限制，但不推荐</li><li>与 Server 类似的一个响应头字段是 <code>X-Powered-By</code> ，它是非标准字段，表示服务器使用的编程语言，例如 <code>X-Powered-By: PHP/700011</code></li><li>host 字段，是给 Web 服务器使用的，因为 http 基于 TCP/IP 协议，IP 已经帮你找到了具体的服务器</li></ul>',95)]))}]]),u=JSON.parse('{"path":"/http-protocol/03/02.html","title":"02 | HTTP 报文是什么样子的？","lang":"zh-CN","frontmatter":{"description":"02 | HTTP 报文是什么样子的？ 在上一讲里，我们在本机的最小化环境了做了两个 HTTP 协议的实验，使用 Wireshark 抓包，弄清楚了 HTTP 协议基本工作流程，也就是 请求 - 应答，一发一收 的模式。 可以看到，HTTP 的工作模式是非常简单的，由于 TCP/IP 协议负责底层的具体传输工作，HTTP 协议基本上不用在这方面操心太多...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog_postgraduate/http-protocol/03/02.html"}],["meta",{"property":"og:site_name","content":"博客"}],["meta",{"property":"og:title","content":"02 | HTTP 报文是什么样子的？"}],["meta",{"property":"og:description","content":"02 | HTTP 报文是什么样子的？ 在上一讲里，我们在本机的最小化环境了做了两个 HTTP 协议的实验，使用 Wireshark 抓包，弄清楚了 HTTP 协议基本工作流程，也就是 请求 - 应答，一发一收 的模式。 可以看到，HTTP 的工作模式是非常简单的，由于 TCP/IP 协议负责底层的具体传输工作，HTTP 协议基本上不用在这方面操心太多..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-19T04:03:18.000Z"}],["meta",{"property":"article:modified_time","content":"2024-12-19T04:03:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"02 | HTTP 报文是什么样子的？\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-19T04:03:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Mr.Leo\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"报文结构","slug":"报文结构","link":"#报文结构","children":[]},{"level":2,"title":"请求行","slug":"请求行","link":"#请求行","children":[]},{"level":2,"title":"状态行","slug":"状态行","link":"#状态行","children":[]},{"level":2,"title":"头部字段","slug":"头部字段","link":"#头部字段","children":[]},{"level":2,"title":"常用头字段","slug":"常用头字段","link":"#常用头字段","children":[{"level":3,"title":"Host","slug":"host","link":"#host","children":[]},{"level":3,"title":"User-Agent","slug":"user-agent","link":"#user-agent","children":[]},{"level":3,"title":"Date","slug":"date","link":"#date","children":[]},{"level":3,"title":"Server","slug":"server","link":"#server","children":[]},{"level":3,"title":"Content-Length","slug":"content-length","link":"#content-length","children":[]}]},{"level":2,"title":"小结","slug":"小结","link":"#小结","children":[]},{"level":2,"title":"课下作业","slug":"课下作业","link":"#课下作业","children":[]},{"level":2,"title":"课外小贴士","slug":"课外小贴士","link":"#课外小贴士","children":[]}],"git":{"createdTime":1734580998000,"updatedTime":1734580998000,"contributors":[{"name":"liao_rh","username":"liao_rh","email":"993929808@qq.com","commits":1,"url":"https://github.com/liao_rh"}]},"readingTime":{"minutes":13.16,"words":3949},"filePathRelative":"http-protocol/03/02.md","localizedDate":"2024年12月19日","excerpt":"\\n<p>在上一讲里，我们在本机的最小化环境了做了两个 HTTP 协议的实验，使用 Wireshark 抓包，弄清楚了 HTTP 协议基本工作流程，也就是 <strong>请求 - 应答</strong>，<strong>一发一收</strong> 的模式。</p>\\n<p>可以看到，HTTP 的工作模式是非常简单的，由于 TCP/IP 协议负责底层的具体传输工作，HTTP 协议基本上不用在这方面操心太多。单从这一点上来看，所谓的「超文本传输协议」其实并不怎么管 「传输」的事情，有点「名不副实」。</p>\\n<p>那么 HTTP 协议的核心部分是什么呢？</p>\\n<p>答案就是它 <strong>传输的报文内容</strong>。</p>","autoDesc":true}')}}]);
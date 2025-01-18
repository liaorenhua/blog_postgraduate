import { hopeTheme } from "vuepress-theme-hope";

import { enNavbarConfig, zhNavbarConfig } from "./navbar.js";
import { enSidebarConfig, zhSidebarConfig } from "./sidebar/index.js";

export default hopeTheme(
  {
    hostname: "https://liaorenhua.github.io/blog_postgraduate/",

    author: {
      name: "Leo",
      url: "https://liaorenhua.github.io/blog_postgraduate/",
    },

    // 网页的 tab标签 ico
    // favicon: "/favicon.ico",
    favicon: "/logo.png",

    iconAssets: "//at.alicdn.com/t/font_2410206_vuzkjonf4s9.css",

    // logo: "/logo.svg",
    logo: "/logo.png",

    repo: "https://github.com",

    repoDisplay: false,

    docsDir: "src",

    locales: {
      "/": {
        navbar: zhNavbarConfig,
        sidebar: zhSidebarConfig,

        footer:
          '主题使用 <a href="https://theme-hope.vuejs.press/zh/">VuePress Theme Hope</a> | <a href="https://liaorenhua.github.io/blog_postgraduate/about/site.html" target="_blank">关于网站</a>',

        copyright: "基于 MIT 协议，© 2025-至今 Leo",

        blog: {
          description: "工程管理硕士在读，记录生活和学习",
          intro: "/about/",
          medias: {
            GitHub: "https://github.com",
            BiliBili: "https://www.bilibili.com/",
            QQ: "http://wpa.qq.com/msgrd?v=3&uin=993929808&site=qq&menu=yes",
            Qzone: "https://993929808.qzone.qq.com/",
            Gmail: "993929808@qq.com",
            Zhihu: "https://www.zhihu.com/people/993929-30",
            Steam: "https://steamcommunity.com",
            Weibo: "https://weibo.com",
            Gitee: "https://gitee.com",
            Twitter: "https://twitter.com",
            Telegram: "https://t.me",
          },
        },
      },

      "/en/": {
        navbar: enNavbarConfig,
        sidebar: enSidebarConfig,

        footer:
          'Theme by <a href="https://theme-hope.vuejs.press">vuepress-theme-hope</a>',

        copyright: "MIT Licensed, © 2025-present Leo",

        blog: {
          description:
            "VuePress project member, background-end developer, studying for a master's degree in MEM",
          intro: "/en/about/",
          medias: {
            Gmail: "993929808@qq.com",
            Steam: "https://steamcommunity.com",
            GitHub: "https://github.com",
            Twitter: "https://twitter.com",
            Telegram: "https://t.me",
          },
        },
      },
    },

    displayFooter: true,
    copyright: "Copyright © 2025-present Leo",

    markdown: {
      align: true,
      codeTabs: true,
      demo: true,
      figure: true,
      flowchart: true,
      highlighter: {
        type: "shiki",
        lineNumbers: 10,
        langAlias: {
          conf: "ini",
        },
      },
      imgLazyload: true,
      imgMark: true,
      imgSize: true,
      footnote: true,
      mermaid: true,
      revealjs: true,
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
    },

    plugins: {
      // 2025年1月18日 想新增 BiliBili 视频  所以加了下面代码
      components: {
        components: ["Badge", "BiliBili", "VPCard", "VidStack"],
      },


      blog: {
        excerptLength: 0,
      },

      comment: {
        provider: "Waline",
        serverURL: "https://liaorenhua.github.io/blog_postgraduate/",
      },

      docsearch: {
        appId: "92EXITUA7H",
        apiKey: "33b44aab931cbbd821d1cf25727c68aa",
        indexName: "mister-hope",
      },

      feed: {
        atom: true,
        json: true,
        rss: true,
      },

      pwa: {
        themeColor: "#5c92d1",
        cacheHTML: false,
        maxSize: 3072,
        apple: {
          icon: "/assets/icon/apple-touch-icon.png",
          statusBarColor: "white",
        },
        msTile: {
          image: "/assets/icon/ms-icon-144.png",
          color: "#ffffff",
        },
        manifest: {
          name: "Leo 的个人博客",
          // https://www.bilibili.com/opus/677099352364154880 改字体的参考
          short_name: "𝓜𝓻.𝓵𝓮𝓸 𝓑𝓵𝓸𝓰",
          description: "𝓵𝓮𝓸 的个人博客",
          theme_color: "#5c92d1",
          icons: [
            {
              src: "/assets/icon/chrome-192.png",
              sizes: "192x192",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-512.png",
              sizes: "512x512",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-mask-192.png",
              sizes: "192x192",
              purpose: "maskable",
              type: "image/png",
            },
            {
              src: "/assets/icon/chrome-mask-512.png",
              sizes: "512x512",
              purpose: "maskable",
              type: "image/png",
            },
          ],
          shortcuts: [
            {
              name: "分类",
              short_name: "分类",
              icons: [
                {
                  src: "/assets/icon/category-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
              url: "/category/",
              description: "文章分类分组",
            },
            {
              name: "标签",
              short_name: "标签",
              icons: [
                {
                  src: "/assets/icon/tag-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
              url: "/tag/",
              description: "文章标签分组",
            },
            {
              name: "时间线",
              short_name: "时间线",
              icons: [
                {
                  src: "/assets/icon/timeline-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
              url: "/timeline/",
              description: "时间线文章列表",
            },
            {
              name: "个人介绍",
              short_name: "个人介绍",
              icons: [
                {
                  src: "/assets/icon/about-maskable.png",
                  sizes: "192x192",
                  purpose: "maskable",
                  type: "image/png",
                },
              ],
              url: "/about/",
              description: "个人介绍",
            },
          ],
        },
      },
    },
  },
  false,
);

import { appendDatePlugin } from "@vuepress/plugin-append-date";
import { cachePlugin } from "@vuepress/plugin-cache";
import type { UserConfig } from "vuepress";
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default <UserConfig>defineUserConfig({
  dest: "dist",

  // 2025年1月5日  廖仁华 这里要发布到github这就要改为: blog_postgraduate
  base: "/blog_postgraduate/",

  head: [
    [
      "link",
      {
        rel: "mask-icon",
        href: "/assets/safari-pinned-tab.svg",
        color: "#5c92d1",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      // https://www.bilibili.com/opus/677099352364154880 这里存放了好多的内容
      title: "𝓛𝓮𝓸 𝓑𝓛𝓸𝓖",
      description: "博客承载思想，文字点燃激情.",
    },

    "/en/": {
      lang: "en-US",
      title: "𝓛𝓮𝓸 𝓑𝓛𝓸𝓖",
      description: "Leo personal blog",
    },
  },

  theme,

  plugins: [appendDatePlugin(), cachePlugin({ type: "filesystem" })],

  shouldPrefetch: false,
});

import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/blog_postgraduate/",

  lang: "zh-CN",
  title: "博客",
  description: "Leo的博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

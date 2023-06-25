import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'WGG_Blog',
    logo:'/favicon.ico',
    footer:"<a href=\"http://www.ssdwgg.cn/\" target=\"_blank\" rel=\"noreferrer\">WGG</a> © 2023 design by <a href=\"http://www.ssdwgg.cn/\" target=\"_blank\" rel=\"noreferrer\">WGG</a> | Powered by <a href=\"https://d.umijs.org\" target=\"_blank\" rel=\"noreferrer\">dumi</a>",
    rtl:true,
    showLineNum:true,
    prefersColor:{ default: 'auto', switch: true },
    socialLinks: {
      github: 'https://github.com/SSDWGG'
    },
  },
});

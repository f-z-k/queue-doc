import { defineConfig } from 'dumi';

export default defineConfig({
  title: '智慧分诊',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  // more config: https://d.umijs.org/config
  // 需要自定义侧边菜单的路径，没有配置的路径还是会使用自动生成的配置
  navs: [
    {
      title: '门诊案例',
      path: '/menzhen',
    },
    {
      title: '体检案例',
      path: '/tijian',
    },
    {
      title: '组件库',
      path: '/components',
    }
  ]
});

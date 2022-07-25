export const categoryMap = {"category":{"/":{"path":"/category/","map":{"Guide":{"path":"/category/guide/","keys":["v-4eaf9f84","v-4c863446","v-bf720700","v-0978b044","v-fffb8e28"]},"JavaScript":{"path":"/category/javascript/","keys":["v-694a7ea0","v-6d19ebae","v-ed41da8c","v-65e0cd62","v-c0291160","v-3e3fb02a"]},"Study":{"path":"/category/study/","keys":["v-52df13ae","v-7318da4a","v-694a7ea0","v-6d19ebae","v-ed41da8c","v-65e0cd62","v-c0291160","v-3e3fb02a","v-e1203d06","v-ba33a14a","v-71978c0a","v-18558afe"]},"jQuery":{"path":"/category/jquery/","keys":["v-e1203d06","v-ba33a14a","v-71978c0a","v-18558afe"]},"TypeScript":{"path":"/category/typescript/","keys":["v-52df13ae"]},"Vue":{"path":"/category/vue/","keys":["v-73115d7a","v-7318da4a"]},"Review":{"path":"/category/review/","keys":["v-73115d7a"]}}},"/zh/":{"path":"/zh/category/","map":{}}},"tag":{"/":{"path":"/tag/","map":{"disable":{"path":"/tag/disable/","keys":["v-4c863446"]},"encryption":{"path":"/tag/encryption/","keys":["v-bf720700"]},"Markdown":{"path":"/tag/markdown/","keys":["v-0978b044"]},"Page config":{"path":"/tag/page-config/","keys":["v-4eaf9f84"]},"Guide":{"path":"/tag/guide/","keys":["v-4eaf9f84"]},"TeamLeader Education":{"path":"/tag/teamleader-education/","keys":["v-694a7ea0","v-6d19ebae","v-ed41da8c","v-65e0cd62","v-c0291160","v-3e3fb02a"]},"PWA":{"path":"/tag/pwa/","keys":["v-ed41da8c"]},"jQuery":{"path":"/tag/jquery/","keys":["v-e1203d06","v-ba33a14a","v-71978c0a","v-18558afe"]},"TypeScript":{"path":"/tag/typescript/","keys":["v-52df13ae"]},"Review":{"path":"/tag/review/","keys":["v-73115d7a"]},"Vue":{"path":"/tag/vue/","keys":["v-73115d7a","v-7318da4a"]},"Study":{"path":"/tag/study/","keys":["v-7318da4a"]}}},"/zh/":{"path":"/zh/tag/","map":{}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}

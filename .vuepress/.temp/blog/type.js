export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-4eaf9f84","v-184f4da6","v-0e503981","v-4c863446","v-bf720700","v-0978b044","v-fffb8e28","v-73115d7a","v-52df13ae","v-7318da4a","v-694a7ea0","v-6d19ebae","v-ed41da8c","v-65e0cd62","v-c0291160","v-3e3fb02a","v-e1203d06","v-ba33a14a","v-71978c0a","v-18558afe"]},"/zh/":{"path":"/zh/article/","keys":[]}},"encrypted":{"/":{"path":"/encrypted/","keys":["v-bf720700"]},"/zh/":{"path":"/zh/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":["v-0e503981"]},"/zh/":{"path":"/zh/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":["v-4eaf9f84"]},"/zh/":{"path":"/zh/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-184f4da6","v-0e503981","v-4c863446","v-bf720700","v-0978b044","v-fffb8e28","v-73115d7a","v-52df13ae","v-7318da4a","v-694a7ea0","v-6d19ebae","v-ed41da8c","v-65e0cd62","v-c0291160","v-3e3fb02a","v-e1203d06","v-ba33a14a","v-71978c0a","v-18558afe","v-4eaf9f84"]},"/zh/":{"path":"/zh/timeline/","keys":[]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}

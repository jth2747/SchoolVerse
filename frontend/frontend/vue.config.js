module.exports = {
  devServer: {
    overlay: true,
  },
  lintOnSave: false,
}

// Vue3 관련 설정 파일
// module.exports = {
  // devServer: {
  //   https: true,
  //   port: 8083,
  //   open: true,
  //   proxy: {
  //     '/api/v1': {
  //       //  target: 'https://i5d107.p.ssafy.io/'
  //       target: 'http://localhost:8080/'
  //     //   target: 'https://localhost:8443/'
  //     },
  //     // '/webjars': {
  //     //   target: 'https://localhost:8443/'
  //     // },
  //     // '/groupcall': {
  //     //   target: 'https://localhost:8443/'
  //     // },
  //     // '/upload': {
  //     //   target: 'https://localhost:8443/'
  //     // },
  //   },
  //   historyApiFallback: true,
  //   hot: true
  // },
//   css: {
//     requireModuleExtension: false, // import 시에 경로에 .module 포함 안해도 됨.
//   },
//   // transpileDependencies: [
//   //   'element-plus'
//   // ],
//   lintOnSave: false,
//   outputDir: "../backend/src/main/resources/dist",
// }

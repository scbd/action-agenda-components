const umd    = true
const cjs    = true
const legacy = { umd, cjs }

const modern = { output: { dir: './dist/browser' } }
const ssr    = { output: { dir: './dist/esm' } }

const cdnUrl = 'https://cdn.cbd.int'

const  browserEsmPackages = {
  '@action-agenda/icons'               : `${cdnUrl}/@action-agenda/icons@~1.0.1/dist/browser/index.min.js`,
  '@action-agenda/cached-apis'         : `${cdnUrl}/@action-agenda/cached-apis@~1.0.7/dist/browser/index.min.js`,
  '@houlagins/default-options'         : `${cdnUrl}/@houlagins/default-options@~1.0.0/dist/browser/index.min.js`,
  '@houlagins/load-http'               : `${cdnUrl}/@houlagins/load-http@~1.0.1/dist/browser/index.min.js`,
  '@houlagins/locale'                  : `${cdnUrl}/@houlagins/locale@~1.0.0/dist/browser/index.min.js`,
  '@houlagins/self-embedding-component': `${cdnUrl}/@houlagins/self-embedding-component@~1.0.7/dist/browser/index.min.js`,
  '@scbd/sso-vue-plugin-scbd'          : `${cdnUrl}/@scbd/sso-vue-plugin-scbd@~1.0.4/dist/browser/index.min.js`
}

const widget     = { legacy: true, modern: true }
const testWidget = { legacy: true, modern: true }


export default {
  legacy, modern, ssr, widget, testWidget, cdnUrl, browserEsmPackages
}
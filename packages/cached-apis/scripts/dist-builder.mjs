const umd    = true
const cjs    = true
const legacy = { umd, cjs }

const modern = { output: { dir: './dist/browser' } }
const ssr    = { output: { dir: './dist/esm' } }

const cdnUrl = 'https://cdn.cbd.int'

const  browserEsmPackages = {
  '@houlagins/default-options': `${cdnUrl}/@houlagins/default-options/dist/browser/index.min.js`,
  '@houlagins/load-http'      : `${cdnUrl}/@houlagins/load-http/dist/browser/index.min.js`,
  '@houlagins/locale'         : `${cdnUrl}/@houlagins/locale/dist/browser/index.min.js`
}

export default {
  modern, ssr, legacy, browserEsmPackages, cdnUrl
}
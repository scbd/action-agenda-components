const umd    = true
const cjs    = true
const legacy = { umd, cjs }

const modern = false
const ssr    = { output: { dir: './dist/esm' } }

const widget     = { legacy: true, modern: false }
const testWidget = { legacy: true, modern: false }

export default {
  legacy, modern, ssr, widget, testWidget
}
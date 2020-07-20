const umd    = true
const cjs    = true
const legacy = { umd, cjs }

const modern = true
const ssr    = { output: { dir: './dist/esm' } }

const widget     = { legacy: true, modern: true }
const testWidget = { legacy: true, modern: true }

const monoRepoName = 'action-agenda-components'

export default {
  modern, ssr, legacy, widget, testWidget
}
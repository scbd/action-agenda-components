const umd    = true
const cjs    = true
const legacy = { umd, cjs }

const modern = true
const ssr    = true

const widget     = { legacy: true, modern: true }
const testWidget = { legacy: true, modern: true }

const monoRepoName = 'action-agenda-components'

export default {
  legacy, modern, ssr, widget, testWidget, monoRepoName
}
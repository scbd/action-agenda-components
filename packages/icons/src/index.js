import   Icons        from './components/index.vue'
import   IconComp     from './components/Icon.vue'

const NAME =  'AAIcons'

// #region snippet
export const iconNames = [ 'cancel', 'close', 'edit', 'question-circle', 'earth', 'trash-o', 'file', 'cloud-upload', 'chevron-down', 'search', 'filter' ]
// #endregion snippet

export function install(Vue){
  if (install.installed) return
  
  install.installed = true
  
  Vue.component(NAME, Icons)
  Vue.component('AA-Icon', IconComp)
}

export const plugin = { install, NAME }
export const Icon   = IconComp

export default Icons

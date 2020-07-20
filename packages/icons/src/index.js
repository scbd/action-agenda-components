import   Icons        from './index.vue'
import   IconComp     from './Icon.vue'
import { pascalCase } from 'change-case'
import { name       } from '../package.json'

const NAME =  pascalCase(name.replace('@action-agenda/', 'AA-'))

export const iconNames = [ 'close', 'edit', 'question-circle', 'earth', 'trash-o', 'file', 'cloud-upload', 'chevron-down', 'search', 'filter' ]

export function install(Vue){
  if (install.installed) return
  
  install.installed = true
  
  Vue.component(NAME, Icons)
  Vue.component('AA-Icon', IconComp)
}

export const plugin = { install, NAME }
export const Icon   = IconComp

export default Icons

import   component    from './components/index.vue'
import { pascalCase } from 'change-case/dist.es2015/index.js'
import { name       } from '../package.json'

const NAME =  pascalCase(name)

export function install(Vue){
  if (install.installed) return
  
  install.installed = true
  
  Vue.component(NAME, component)
}

export const plugin = { install, NAME }

export default component
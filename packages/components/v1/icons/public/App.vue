<template>
  <div id="app">
    <Icons />

    <div v-for="(name,index) in iconNames" v-bind:key="index">
      <h1 > <span :id="`name-${name}`">{{name}}</span> <svg class="icon"><use :xlink:href="`#icon-${name}`"></use></svg></h1>
      
      <div class="language-html extra-class">
        <pre class="language-html">
          <code>
            <span class="token punctuation">&lt;</span><span class="token tag">svg </span><span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span><span class="token punctuation">&lt;</span><span class="token tag">use </span><span class="token attr-name">:xlink:href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>#icon-{{name}}<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span><span class="token tag"><span class="token punctuation">&lt;/</span>use</span><span class="token punctuation">&gt;</span><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">&gt;</span>
          </code>
        </pre>
      </div>
    </div>
    

  </div>
</template>

<script>
import Icons, { iconNames } from '../src/index.js'

export default {
  name      : 'App',
  components: { Icons },
  data
  
}

function data(){
  return { iconNames }
}
</script>
<style scoped>

pre[class*=language-] {
    padding: 1em;
    margin: .5em 0;
    overflow: auto;
}

:not(pre)>code[class*=language-],pre[class*=language-] {
    background: #2d2d2d;
}

:not(pre)>code[class*=language-] {
    padding: .1em;
    border-radius: .3em;
    white-space: normal
}

.token.block-comment,.token.cdata,.token.comment,.token.doctype,.token.prolog {
    color: #999
}

.token.punctuation {
    color: #ccc
}

.token.attr-name,.token.deleted,.token.namespace,.token.tag {
    color: #e2777a
}

.token.attr-value,.token.char,.token.regex,.token.string,.token.variable {
    color: #7ec699
}


</style>

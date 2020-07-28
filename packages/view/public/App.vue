<template>
  <div id="app">
    <article role="article" about="/article/asp_net_template" typeof="schema:Article" class="node node--type-article node--view-mode-full clearfix">
    <div class="node__content">
      <section class="article-wrapper">
      <div class="article-section">
          <div class="container" >
            <div class="row" >
              <div class="col" >
                <AAView identifier="5f19a8507d3ad72530b52109" force-env="dev"></AAView>
              </div>
            </div>
          </div>
      </div>
      </section>
    </div>
    </article>
  </div>
</template>

<script>
//ObjectId("5e02281a3dbce30001422ad2")
//5eeba456395529000178dcbf
//5f062e1b66d0dd000181325f
import AAView from '../src'

import '@scbd/www-css'

export default { name      : 'App',
                 components: { AAView } }
</script>

<style >
.debug{ border: 1px red solid;}
</style>


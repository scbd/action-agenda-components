<template >
  <svg :class="{ [`aa-icon-${name}`]:true }" class="aa-icon" >
    <use  v-bind="{ 'xlink:href': `#aa-icon-${name}` }"></use>
  </svg>
</template>
<script>
export default {
  name : 'AAIcon',
// #region snippet
  props : { name : { type: String, required: true } }
// #endregion snippet
}
</script>
<style>
.aa-icon {
  display     : inline-block;
  width       : 1em;
  height      : 1em;
  stroke-width: 0;
  stroke      : currentColor;
  fill        : currentColor;
}
</style>
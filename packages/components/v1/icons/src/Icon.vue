<template >
  <svg :class="{ [`aa-icon-${name}`]:true }" class="aa-icon" >
    <use :xlink:href="`#aa-icon-${name}`"></use>
  </svg>
</template>
<script>
export default {
  name : 'AAIcon',
// #region snippet
  props: [ 'name' ]
// #endregion snippet
}
</script>
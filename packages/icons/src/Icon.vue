<template functional>
  <svg :class="{ [`aa-icon-${props.name}`]:true }" class="aa-icon" >
    <use :xlink:href="`#aa-icon-${props.name}`"></use>
  </svg>
</template>
<script>
export default {
  name : 'AAIcon',
  props: [ 'name' ]
}
</script>
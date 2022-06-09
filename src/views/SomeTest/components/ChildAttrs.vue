<template>
  <div>$attrs</div>
  <child-attrs-last v-bind="$attrs"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ChildAttrsLast from './ChildAttrsLast.vue'
export default defineComponent({
  name: 'ChildAttrs',
  components: {ChildAttrsLast}
  // setup() {

  // },
})
</script>


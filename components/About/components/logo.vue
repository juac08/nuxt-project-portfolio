<template>
  <div>
    <img :src="logo" alt="" />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";

@Component
export default class logo extends Vue {
  /* Props */
  @Prop() logo!: string;
  /* State */
  /* Data */
  /* Hooks */
  /* Methods */
  /* Computed */
  /* Watchers */
}
</script>

<style scoped></style>

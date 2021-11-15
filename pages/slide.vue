<template>
  <div
    @click="setIsOpen"
    style="width:300px; height:200px;background-color:#eee; color: #FFFF"
  >
    <h1 v-if="isOpen">TypeScript</h1>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class slide extends Vue {
  /* Props */
  /* State */
  /* Data */

  isOpen: boolean | null = null;
  /* Hooks */
  /* Methods */
  setIsOpen(): boolean {
    return (this.isOpen = !this.isOpen);
  }
  /* Computed */
  /* Watchers */
}
</script>

<style scoped></style>

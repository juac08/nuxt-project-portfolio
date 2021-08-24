<template>
  <div>
    <div id="app" class="p-6">
      <h3 class="mb-4">Auto height</h3>

      <div class="mb-8">
        <button
          @click="isOpenA = !isOpenA"
          class="px-4 py-2 bg-blue-lighter hover:bg-blue-light"
        >
          Click to Toggle
        </button>
        <collapse-transition dimension="width">
          <ul v-show="isOpenA" class="list-reset w-48 p-4 bg-grey-light">
            <li>Example!</li>
            <li>Example!</li>
            <li>Example!</li>
            <li>Example!</li>
            <li>Example!</li>
            <li>Example! hello world my name is junaid</li>
          </ul>
        </collapse-transition>
      </div>

      <h3 class="mb-4">Auto width</h3>

      <div class="flex content-start items-start">
        <button
          @click="isOpenB = !isOpenB"
          class="px-4 py-2 bg-blue-lighter hover:bg-blue-light"
        >
          Click to Toggle
        </button>
        <collapse-transition dimension="width">
          <ul v-show="isOpenB" class="list-reset p-4 bg-grey-light">
            <li>Example!</li>
            <li>Example!</li>
            <li>Example!</li>
            <li>Example!</li>
            <li>Example!</li>
            <li>Example!</li>
          </ul>
        </collapse-transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
// @ts-ignore
import CollapseTransition from "@ivanv/vue-collapse-transition";

@Component({
  components: {
    CollapseTransition,
  },
})
export default class index extends Vue {
  /* Props */
  /* State */
  /* Data */
  isOpenA = false;
  isOpenB = false;

  /* Hooks */
  /* Methods */

  handleClose(done: any): void {
    this.$confirm("Are you sure to close this dialog?")
      .then((_) => {
        done();
      })
      .catch((_) => {});
  }

  /* Computed */
  /* Watchers */
}
</script>

<style scoped></style>



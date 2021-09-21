<template>
  <section class="section-center">
    <Project />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Project from "~/components/Project/index.vue";

@Component({
  head: {
    title: "Portfolio | Projects"
  },
  components: { Project }
})
export default class index extends Vue {
  /* Props */
  /* State */
  /* Data */
  /* Hooks */
  /* Methods */
  /* Computed */
  /* Watchers */
}
</script>

<style scoped></style>

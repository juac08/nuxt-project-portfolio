<template>
  <section class="container">
    <Hero />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Hero from "~/components/Hero/index.vue";

@Component({
  head: {
    title: "Portfolio | Home",
  },
  components: {
    Hero,
  },
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

<style  scoped>
</style>

<template>
  <div>
    <nav class="nav">
      <div class="nav-logo">
        <img src="@/static/images/new_logo.png" alt="" />
      </div>
      <div class="nav-links">
        <div class="nav-link">
          <nuxt-link to="/">
            <div v-html="$feathericons['home'].toSvg()"></div>
            Home</nuxt-link
          >
        </div>
        <div class="nav-link">
          <nuxt-link to="/projects">
            <div v-html="$feathericons['command'].toSvg()"></div>
            Projects</nuxt-link
          >
        </div>
        <div class="nav-link">
          <nuxt-link to="/contact">
            <div v-html="$feathericons['at-sign'].toSvg()"></div>
            Contact</nuxt-link
          >
        </div>
      </div>
      <Icons />
    </nav>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Icons from "~/components/Hero/socialIcons/icons.vue";

@Component({
  components: {
    Icons,
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

<style scoped></style>

<template>
  <div>
    <nav class="nav">
      <div class="section-center">
        <div class="nav-logo">
          <img src="@/static/images/new_logo.png" alt="" />
        </div>
        <div class="nav-links">
          <div class="nav-link">
            <nuxt-link to="/">
              <div v-html="$feathericons['home'].toSvg()" class="icon"></div>
              Home</nuxt-link
            >
          </div>
          <div class="nav-link">
            <nuxt-link to="/about">
              <div v-html="$feathericons['users'].toSvg()" class="icon"></div>
              About</nuxt-link
            >
          </div>
          <div class="nav-link">
            <nuxt-link to="/projects">
              <div v-html="$feathericons['command'].toSvg()" class="icon"></div>
              Projects</nuxt-link
            >
          </div>
          <div class="nav-link">
            <nuxt-link to="/contact">
              <div v-html="$feathericons['at-sign'].toSvg()" class="icon"></div>
              Contact</nuxt-link
            >
          </div>
        </div>
      </div>
      <!-- <div class="icon">
        <Icons />
      </div> -->
    </nav>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Icons from "~/components/Hero/socialIcons/icons.vue";

@Component({
  components: {
    Icons
  }
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

<style lang="scss" scoped>
@media screen and (max-width: 650px) {
  .nav {
    justify-content: center;
    padding-right: 0;
    .section-center {
      justify-content: space-around;
    }
    .icon {
      display: none;
    }
    &-logo {
      display: none;
    }
    &-links {
      justify-content: space-between;
    }
  }
  .icon {
    display: none;
  }
}
</style>

<template>
  <div>
    <div class="icons">
      <a href="https://www.facebook.com/junaid4u.ahmad">
        <div v-html="$feathericons['facebook'].toSvg()" class="icon"></div>
      </a>
      <a href="https://www.linkedin.com/in/juac08">
        <div v-html="$feathericons['linkedin'].toSvg()" class="icon"></div>
      </a>
      <a href="https://github.com/juac08">
        <div v-html="$feathericons['github'].toSvg()" class="icon"></div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class icons extends Vue {
  /* Props */
  /* State */
  /* Data */
  /* Hooks */
  /* Methods */
  /* Computed */
  /* Watchers */
}
</script>

<style scoped>
.icons {
  display: flex;
  gap: 3rem;
  transition: all 0.3s;
}
.icon {
  color: rgb(255, 255, 255);
  background: rgb(39, 32, 139);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  text-align: center;
  line-height: 65px;
  vertical-align: middle;
  border: 4px solid rgb(1, 15, 86);
  /* box-shadow: $shadow-light; */
  transition: all 0.3s;
}

.icon:hover {
  transform: scale(1.05);
  background: blue;
  /* box-shadow: $shadow-dark; */
}
</style>

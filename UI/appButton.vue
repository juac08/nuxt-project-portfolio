<template>
  <a v-bind="$attrs" v-on="$listeners"
    ><span><slot /></span
  ></a>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class appButton extends Vue {
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
a {
  text-decoration: none;
  text-transform: uppercase;
  font-size: 15px;
  font-family: verdana;
  color: #020f64;
  letter-spacing: 3px;
  padding: 10px 20px;
  position: relative;
  border: 3px solid #050264;
  transition: all 0.2s;
  overflow: hidden;
  cursor: pointer;
}

a:before,
a:after,
span:before,
span:after {
  content: "";
  position: absolute;
  width: 25%;
  height: 100%;
  background-color: #0d0675;
  z-index: -1;
  transition: all 0.1s;
}

a:before {
  top: 100%;
  left: 0%;
}

a:hover:before {
  top: 0;
  left: 0;
}

a:after {
  top: -100%;
  right: 0;
  transition-delay: 0.3s;
}

a:hover:after {
  top: 0;
  right: 0;
}

a span:before {
  top: -100%;
  left: 25%;
  transition-delay: 0.1s;
}

a:hover span:before {
  top: 0;
  left: 25%;
}

a span:after {
  bottom: -100%;
  right: 25%;
  transition-delay: 0.2s;
}

a:hover span:after {
  bottom: 0;
  right: 25%;
}

a:hover {
  color: white;
}
</style>

<template>
  <div>
    <div class="icons">
      <a href="https://www.facebook.com/junaid4u.ahmad">
        <img src="social-icons/facebook.svg" alt="" class="icon" />
      </a>
      <a href="https://www.linkedin.com/in/juac08">
        <img src="social-icons/instagram.svg" alt="" class="icon" />
      </a>
      <a href="https://www.linkedin.com/in/juac08">
        <img src="social-icons/linkedIn.svg" alt="" class="icon" />
      </a>
      <a href="https://github.com/juac08">
        <img src="social-icons/github.svg" alt="" class="icon" />
      </a>
      <a href="https://www.linkedin.com/in/juac08">
        <img src="social-icons/whatsapp.svg" alt="" class="icon" />
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
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: all 0.3s;
}
img {
  width: 50px;
  height: 50px;
}
.icon {
  color: rgb(255, 255, 255);
  border-radius: 20%;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
}
.git {
  width: 40px;
  height: 40px;
  background: #217ec6;
  font-weight: 800;
}

.icon:hover {
  transform: scale(1.05);
}
</style>

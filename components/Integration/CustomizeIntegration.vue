<template>
  <div class="root">
    <div class="main">
      <div class="icon">
        <img src="images/data-integration.svg" alt="" />
      </div>
      <h1>Cutomize Your Integration</h1>
      <el-button
        class="cta"
        type="primary"
        style="background-color:#E6A23C; border:none; width:140px"
      >
        <div class="hover-shade"></div>
        <span>Get Free Demo</span></el-button
      >
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class CustomizeIntegration extends Vue {
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
.root {
  background-image: linear-gradient(135deg, #4554a1 0%, #3e4787 100%);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  margin-top: 50px;
  max-width: 1250px;
  height: auto;
  /* background-image: linear-gradient(135deg, #7480bc 0%, #404987 100%);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2); */
  .main {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 1rem;
    gap: 1rem;
    padding: 10px;
    .icon {
      max-width: 133px;
      height: auto;
    }
    h1 {
      color: white;
      text-align: center;
    }
  }
  @media screen and (max-width: 596px) {
    .main {
      flex-wrap: wrap;
      align-content: center;
      gap: 2rem;
      h1 {
        font-size: 24px;
      }
    }
  }
}
</style>

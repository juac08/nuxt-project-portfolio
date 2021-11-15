<template>
  <div class="demo-root">
    <h1>How We Work ?</h1>
    <div class="line"></div>
    <div class="demo-root__content">
      <div style="width:533px;height:381px">
        <img src="images/Group 8.svg" alt="" />
      </div>
      <div class="text-container">
        <div class="image">
          <img
            src="images/icon.svg"
            alt=""
            style="width:131px;height:131px;text-align:center"
          />
        </div>
        <h2 classs="text">Awesome:Teams</h2>
        <div style="text-align:center">
          <p style="font-size:14px">
            Over <strong>80,000+ </strong>customers use Futureworks to insure
            their teams and drive their missions forward
          </p>
          <p>
            We are the company where customers comes always first. Our customers
            are the reason why we do what we do. They inspire us, challenge us,
            and in turn, help us build better products
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class workDemo extends Vue {
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
body {
  p,
  span {
    color: #373b3f;
  }
  p {
    font-size: 14px;
    letter-spacing: 0.5px;
  }
}
.demo-root {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  gap: 3rem;
  .demo-root__content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    align-content: center;
  }
  &__content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .line {
    background: #606ba7;
    border-radius: 1px;
    width: 133px;
    height: 8px;
    margin-top: -15px;
  }
  .text-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    max-width: 350px;
    text-align: left;
  }
  .text h2 {
    font-size: 36px;
    color: #404987;
  }
  .image {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

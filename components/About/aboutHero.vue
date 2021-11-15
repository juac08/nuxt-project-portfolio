<template>
  <div class="root">
    <div class="head">
      <div class="header">
        <div class="header__line"></div>
        <div class="header__title">
          <h3>WHO WE ARE</h3>
          <p>THE ONLY NORWEGIAN OKR TOLL</p>
        </div>
      </div>
      <div class="main">
        <div class="main__title">
          <h1>
            <strong>Futureworks OKR</strong> tools give you full control over
            your company's goal management.
          </h1>
          <p>
            We at Futureworks have a long background in corporate coaching. Ever
            since 1989, we have helped companies in various industries with
            performance management, performance coaching and OKR.
          </p>
          <div>
            <p>Take control today with <strong>Futureworks</strong> OKR.</p>
          </div>
        </div>
        <div class="buttons" style="padding-bottom:20px">
          <el-button
            class="cta"
            type="primary"
            style="background-color:#E6A23C; border:none"
          >
            <div class="hover-shade"></div>
            <span>Get Free Demo</span></el-button
          >
          <el-button class="cta" type="primary" style="border:none;">
            <div class="hover-shade"></div>
            <span>Book Conversation</span></el-button
          >
        </div>
      </div>
    </div>
    <div class="image" style="max-width:403px;height:auto">
      <img src="images/about-head.svg" alt="" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class aboutHero extends Vue {
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
    font-size: 14px;
  }
}
.root {
  background-image: linear-gradient(135deg, #7480bc 0%, #404987 100%);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  max-width: 1252px;
  height: auto;
  display: flex;
  flex-direction: columns;
  justify-content: center;
  gap: 8rem;
  position: relative;

  &::before {
    content: "";
    background-image: url("https://i2.wp.com/files.123freevectors.com/wp-content/original/106488-black-and-blue-abstract.jpg?w=800&q=95");
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.2;
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 403px;
    height: auto;
  }
  .head {
    margin-top: 49px;
    margin-left: 10px;
  }

  p,
  h1 {
    color: white;
  }
  p {
    font-size: 14px;
  }

  .header {
    &__line {
      background: #fafcff;
      border-radius: 1px;
      width: 133px;
      height: 8px;
    }
    &__title {
      margin-top: 26px;
    }
  }
  .main {
    max-width: 525px;
    height: auto;
    /* margin-top: 30px; */
    p {
      margin-top: 20px;
    }
  }
  .buttons {
    margin-top: 30px;
  }
}
@media screen and (max-width: 786px) {
  .root {
    flex-wrap: wrap;
    align-content: center;
  }
  img {
    display: none;
  }
}
</style>

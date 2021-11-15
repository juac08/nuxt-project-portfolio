<template>
  <div class="root">
    <div class="main">
      <div class="heading">
        <div>
          <div class="head">
            <h1>Our Integrations</h1>
            <div class="integration-icon">
              <img src="images/icon-integration.svg" alt="" />
            </div>
          </div>
          <p>
            Futureworks integrates with the systems and tools your team uses
            every day, so that daily work is deeply linked to the company or
            departmental goals, without heavy migration costs. We offer the
            world's first Microsoft Teams integrated OKR and Results Management
            Platform. Get all your work done in Microsoft 365 with the Teams
            integration.
          </p>
          <el-button
            class="cta"
            type="primary"
            style="background-color:#E6A23C; border:none;"
          >
            <div class="hover-shade"></div>
            <span>Get Free Demo</span></el-button
          >
        </div>
      </div>
      <div class="integration-slide">
        <img src="images/integration.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class integrationHero extends Vue {
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
  background-image: linear-gradient(135deg, #7480bc 0%, #404987 100%);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  max-width: 1250px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before {
    content: "";
    background-image: url("https://as2.ftcdn.net/v2/jpg/04/29/95/13/1000_F_429951345_FtYDpxd4DvehEGKZusK1kuZm264qS5UX.jpg");
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

  .head {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 1rem;
    .integration-icon {
      max-width: 100px;
      height: auto;
      /* margin: auto; */
    }
  }

  .main {
    display: flex;
    flex-direction: columns;
    justify-content: center;
    align-items: center;
    gap: 8rem;
    .integration-slide {
      max-width: 400px;
      height: auto;
    }

    .heading {
      max-width: 500px;
      height: auto;
      padding: 20px;
      display: flex;
      justify-content: center;
      align-items: center;

      .head {
        position: relative;
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        gap: 1rem;
        .integration-icon {
          max-width: 100px;
          height: auto;
          margin: auto;
        }
      }

      h1 {
        font-size: 36px;
        color: white;
      }
      p {
        font-size: 14px;
        color: white;
        letter-spacing: 0.5px;
      }
    }
  }
  @media screen and (max-width: 868px) {
    .main {
      flex-wrap: wrap;
      align-content: center;
    }
  }
}
</style>

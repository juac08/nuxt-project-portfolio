<template>
  <div class="bg">
    <section class="section-center">
      <div class="container-1">
        <div class="container-2">
          <div class="header-1">
            <div>
              <h1>I m' Junaid</h1>
              <p>| Frontend Developer |</p>
              <p class="des">
                My aim is to help people and provide memorable experiences. I
                enjoy researching, ideating, collabration and deliver unique
                design.
              </p>
              <div class="icon">
                <Icons />
              </div>
            </div>
          </div>
          <div style="margin-top:20px">
            <Carousel></Carousel>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Carousel from "~/components/Hero/Carousel/slides.vue";
import Icons from "~/components/Hero/socialIcons/icons.vue";

@Component({
  components: {
    Carousel,
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
.bg {
  background-image: linear-gradient(
      45deg,
      rgba(53, 4, 4, 0.8),
      rgb(13, 13, 243, 0.8)
    ),
    url("./static/images/bc.JPG");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-blend-mode: hard-light;
}
.header-1 {
  gap: 2rem;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  h1,
  p {
    color: rgb(255, 255, 255);
    letter-spacing: 0.1em;
    text-align: center;
  }
  p {
    width: 400px;
    color: rgb(255, 255, 255);
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2px;
  }
}
.container-1 {
  /* background-image: linear-gradient(
      45deg,
      rgba(53, 4, 4, 0.8),
      rgb(13, 13, 243, 0.8)
    ),
    url("./static/images/bc.JPG");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover; */
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 95vh;
}
.container-2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 421px) {
  .header {
    width: 100%;
    .des {
      width: 200px;
      margin: auto;
    }
  }
}
p {
  width: 20rem;
  font-size: 1.3rem;
  letter-spacing: 0.1em;
  text-align: center;
}
</style>

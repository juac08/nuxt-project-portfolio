<template>
  <div class="container-1">
    <section class="section-center">
      <div class="container">
        <div class="header">
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
        <Carousel></Carousel>
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

<style lang='scss' scoped>
.header {
  gap: 2rem;
  border-bottom: 1px solid rgb(231, 231, 231);
  padding: 5px;
  h1,
  p {
    color: rgb(219, 228, 254);
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
    padding: 5px;
  }
}
.container-1 {
  background-image: linear-gradient(
      45deg,
      rgba(53, 4, 4, 0.8),
      rgb(13, 13, 243, 0.8)
    ),
    url("./static/images/bc.JPG");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 95vh;
  position: relative;
  background-blend-mode: hard-light;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 0 auto; */
}
@media screen and (max-width: 421px) {
  .header {
    width: fit-content;
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

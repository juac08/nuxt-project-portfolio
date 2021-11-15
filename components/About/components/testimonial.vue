<template>
  <div class="root-container">
    <h2 class="title" style="font-size:36px">
      Don't take our word for it.
    </h2>
    <div>
      <div class="testimonial">
        <div class="testimonial__image">
          <img
            src="https://images.unsplash.com/photo-1602133183746-98aebe4e7dff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
          <div class="testimonial__content">
            <h3>Rune Kilstad</h3>
            <span>
              Senior Vice President
              <span style="display:block">Every As</span>
            </span>
          </div>
        </div>
        <div class="testimonial__description">
          <p style="max-width:600px;">
            I have worked with Futureworks in three divisions of Evry, a company
            with more than 9000 employees. We created results beyond what we
            imagined possible in all three divisions.
          </p>
          <div class="testimonial__button">
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
      </div>
    </div>
    <div class="testimonial__logo ">
      <div v-for="(logo, index) in logos" :key="index">
        <CompanyLogo :logo="logo" class="testimonial__logo" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { logos } from "~/data/CompanyLogos";
import CompanyLogo from "./logo.vue";

@Component({
  components: { CompanyLogo }
})
export default class testimonial extends Vue {
  /* Props */
  /* State */
  logos: string[] = logos;
  /* Data */
  /* Hooks */
  /* Methods */
  /* Computed */
  /* Watchers */
}
</script>

<style lang="scss" scoped>
.root-container {
  max-width: 1250px;
  height: auto;
  background-image: linear-gradient(135deg, #7480bc 0%, #404987 100%);
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  color: white;
  margin-top: 50px;
  padding: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.1;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-image: url("https://media.istockphoto.com/photos/gold-winners-trophy-champion-cup-with-falling-confetti-picture-id1182465245?s=612x612");
  }

  p {
    color: white;
    font-size: 14px;
    letter-spacing: 0.5px;
  }
  .testimonial {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    flex-wrap: wrap;
    align-content: center;
    &__image {
      max-width: 133px;
      height: auto;
      img {
        width: 133px;
        height: 133px;
        border-radius: 50%;
        border: solid 7px #404987;
      }
    }
    &__content {
      text-align: center;
      margin-top: 10px;
    }
    &__description {
      max-width: 600px;
      height: auto;
      padding-top: 20px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }
    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &__logo {
      margin-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      align-content: center;
      gap: 2rem;
    }
  }
}
</style>

<template>
  <section class="section-center">
    <section class="timeline_area section_padding_130">
      <div class="container">
        <div class="">
          <div class="">
            <div
              class="apland-timeline-area int"
              v-for="(integration, index) in integrations"
              :key="index"
            >
              <div class="single-timeline-area integration">
                <div
                  class="timeline-date wow fadeInLeft"
                  data-wow-delay="0.1s"
                  style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInLeft;"
                >
                  <div>
                    <h3 style="color: #3f4784">{{ integration.title }}</h3>
                    <span style="color: #3f4784">{{
                      integration.description
                    }}</span>
                  </div>
                </div>
                <div
                  v-for="(i, index) in integration.integrations"
                  :key="index"
                >
                  <div class="integration">
                    <div
                      class="single-timeline-content d-flex wow fadeInLeft"
                      data-wow-delay="0.3s"
                      style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInLeft; background: #FFFFFF;
border: 1px solid #DCDFE6;
box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10), 0 -2px 0 0 #404987;
border-radius: 7px; width:400px; height:200px; min-width:400px; min-height:200px;max-width:400px; max-height:200px;"
                    >
                      <div class="timeline-icon">
                        <img :src="i.image" :alt="i.title" />
                      </div>
                      <div class="timeline-text">
                        <h3>{{ i.title }}</h3>
                        <p>
                          {{ i.description }}
                        </p>
                        <el-button class="cta" type="primary">
                          <div class="hover-shade"></div>
                          <span>Read More</span></el-button
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { IntegrationTimeLine } from "~/types/data.types";
import { Integrations } from "~/data/Integrations";

@Component({
  head: {
    title: "Portfolio | Contact"
  }
})
export default class index extends Vue {
  /* Props */
  /* State */
  /* Data */
  integrations: IntegrationTimeLine[] = Integrations;
  /* Hooks */
  /* Methods */
  /* Computed */
  /* Watchers */
}
</script>

<style scoped lang="scss">
.container {
  margin: 5rem auto;
}
.section-center {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}
.int {
  display: flex;
  align-items: center;
}
.integration {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
}
.timeline-text {
  color: #3f4784;
  p {
    color: #3f4784;
  }
}
body {
  margin-top: 20px;
}
.timeline_area {
  position: relative;
  z-index: 1;
}
.single-timeline-area {
  position: relative;
  z-index: 1;
  padding-left: 180px;
}
.cta {
  position: relative;
  transition: 0.3s;
  overflow: hidden;
  margin-top: 3px;

  @keyframes hoverSlide {
    0% {
      left: -36px;
    }
    100% {
      left: calc(100% + 36px);
    }
  }

  .hover-shade {
    position: absolute;
    left: -36px;
    top: -15px;
    width: 15px;
    height: calc(100% + 30px);
    transform: rotate(45deg);
    transition: 0.5s;
    background-color: rgba(255, 255, 255, 0.5);
  }

  &:hover {
    .hover-shade {
      animation: hoverSlide 0.7s;
    }
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.5);
  }
}

.el-button {
  padding: 10px;
  font-weight: 400;
  outline: none;

  &--primary {
    &:hover {
      box-shadow: 0 0 8px 0 rgb(5, 151, 209);
    }
  }
  &--warning {
    &:hover {
      box-shadow: 0 0 8px 0 rgb(5, 151, 209);
    }
  }
}

@media only screen and (max-width: 575px) {
  .single-timeline-area {
    padding-left: 100px;
  }
}
.single-timeline-area .timeline-date {
  position: absolute;
  width: 180px;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  padding-right: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media only screen and (max-width: 575px) {
  .single-timeline-area .timeline-date {
    width: 100px;
  }
}
.single-timeline-area .timeline-date::after {
  position: absolute;
  width: 3px;
  height: 100%;
  content: "";
  background-color: #3f4784;
  top: 0;
  right: 30px;
  z-index: 1;
}
.single-timeline-area .timeline-date::before {
  position: absolute;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: #3f4784;
  content: "";
  top: 50%;
  right: 26px;
  z-index: 5;
  margin-top: -5.5px;
}

.single-timeline-area .single-timeline-content {
  position: relative;
  z-index: 1;
  padding: 30px 30px 25px;
  border-radius: 6px;
  margin-bottom: 15px;
  margin-top: 15px;
  -webkit-box-shadow: 0 0.25rem 1rem 0 rgba(47, 91, 234, 0.125);
  box-shadow: 0 0.25rem 1rem 0 rgba(47, 91, 234, 0.125);
  border: 1px solid #ebebeb;
}
@media only screen and (max-width: 575px) {
  .single-timeline-area .single-timeline-content {
    padding: 20px;
  }
}
.single-timeline-area .single-timeline-content .timeline-icon {
  -webkit-transition-duration: 500ms;
  transition-duration: 500ms;
  width: 30px;
  height: 30px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 30px;
  flex: 0 0 30px;
  text-align: center;
  max-width: 100px;
  border-radius: 10%;
  margin-right: 15px;
}

.single-timeline-area .single-timeline-content .timeline-text p {
  font-size: 12px;
  margin-bottom: 0;
}
</style>

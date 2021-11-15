<template>
  <div class="rootc">
    <div class="container ">
      <div class="row">
        <div class="col-md-12">
          <div class="main-timeline">
            <div
              class="timeline"
              v-for="(item, index) in TimeLine"
              :key="index"
            >
              <div href="" class="timeline-content">
                <div class="timeline-icon">
                  <i class="fa fa-rocket"></i>
                </div>
                <div class="timeline-year">{{ item.year }}</div>
                <div class="inner-content">
                  <h3
                    class="title"
                    style="border-bottom:1px solid lightgray;padding-bottom:5px"
                  >
                    {{ item.title }}
                  </h3>
                  <p class="description">
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { AboutData } from "~/data/AboutTimeLineData";
import { AboutTimeline } from "~/types/data.types";

@Component
export default class index extends Vue {
  /* Props */
  /* State */
  /* Data */
  TimeLine: AboutTimeline[] = AboutData;
  /* Hooks */
  /* Methods */
  /* Computed */
  /* Watchers */
}
</script>

<style lang="scss" scoped>
/* :root {
  --color1: #fd8f33;
  --color2: #0dc8ab;
  --color3: #05b0de;
  --color4: #8e7ccc;
} */
.rootc {
  padding: 20px;
  max-width: 1100px;
  margin: auto;
}
.main-timeline {
  font-family: "Source Sans Pro", sans-serif;
  position: relative;
  &:after {
    content: "";
    display: block;
    clear: both;
  }
  .timeline {
    width: 50.1%;
    padding: 20px 0 20px 100px;
    float: right;
    position: relative;
    z-index: 1;
    &:before,
    &:after {
      content: "";
      background: rgb(16, 3, 88);
      height: 100%;
      width: 28px;
      position: absolute;
      left: -11px;
      top: 0;
    }
    &:after {
      background: rgb(16, 3, 88);
      height: 18px;
      width: 200px;
      box-shadow: 0 0 10px -5px #000;
      transform: translateY(-50%);
      top: 50%;
      left: -90px;
    }
    &-content {
      color: #517d82;
      background-color: rgb(16, 3, 88);
      padding: 0 0 0 80px;
      box-shadow: 0 0 20px -10px #000;
      border-radius: 10px;
      display: block;
      &:hover {
        color: #517d82;
        text-decoration: none;
      }
    }
    &-icon {
      color: #fff;
      background-color: rgb(16, 3, 88);
      font-size: 35px;
      font-weight: bold;
      text-align: center;
      line-height: 62px;
      height: 60px;
      width: 60px;
      border-radius: 50%;
      transform: translateY(-50%);
      position: absolute;
      left: -100px;
      top: 50%;
      z-index: 1;
    }
    &-year {
      color: #0a0238;
      background-color: #fff;
      font-size: 35px;
      font-weight: 600;
      text-align: center;
      line-height: 93px;
      height: 113px;
      width: 113px;
      border: 6px solid rgb(16, 3, 88);
      box-shadow: 0 0 10px -5px #000;
      border-radius: 50%;
      transform: translateY(-50%);
      position: absolute;
      left: 50px;
      top: 50%;
      z-index: 1;
    }
    .inner-content {
      background-color: #fff;
      padding: 10px;
    }
    .title {
      color: rgb(16, 3, 88);
      font-size: 22px;
      font-weight: 600;
      margin: 0 0 5px 0;
    }
    .description {
      font-size: 14px;
      letter-spacing: 1px;
      margin: 0;
    }
    &:nth-child(even) {
      padding: 20px 100px 20px 0;
      float: left;
    }
    &:nth-child(even):before {
      left: auto;
      right: -14.5px;
    }
    &:nth-child(even):after {
      left: auto;
      right: -90px;
    }
    &:nth-child(even) .timeline-content {
      padding: 0 80px 0 0;
    }
    &:nth-child(even) .timeline-icon {
      left: auto;
      right: -100px;
    }
    &:nth-child(even) .timeline-year {
      left: auto;
      right: 50px;
    }
  }
}

@media only screen and (max-width: 1200px) {
  .main-timeline .timeline:before {
    left: -12.5px;
  }
  .main-timeline .timeline:nth-child(even):before {
    right: -14px;
  }
}
@media only screen and (max-width: 990px) {
  .main-timeline .timeline:before {
    left: -12.5px;
  }
}
@media only screen and (max-width: 767px) {
  .main-timeline .timeline,
  .main-timeline .timeline:nth-child(even) {
    width: 100%;
    padding: 20px 0 20px 37px;
  }
  .main-timeline .timeline:before {
    left: 0;
  }
  .main-timeline .timeline:nth-child(even):before {
    right: auto;
    left: 0;
  }
  .main-timeline .timeline:after,
  .main-timeline .timeline:nth-child(even) .timeline:after {
    display: none;
  }
  .main-timeline .timeline-icon,
  .main-timeline .timeline:nth-child(even) .timeline-icon {
    left: 0;
    display: none;
  }
  .main-timeline .timeline-year,
  .main-timeline .timeline:nth-child(even) .timeline-year {
    height: 75px;
    width: 75px;
    line-height: 60px;
    font-size: 25px;
    left: 1px;
  }
  .main-timeline .timeline-content,
  .main-timeline .timeline:nth-child(even) .timeline-content {
    padding: 0 0 0 40px;
  }
}
</style>

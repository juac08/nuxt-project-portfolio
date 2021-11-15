<template>
  <div class="container">
    <div>
      <div class="main-timeline2">
        <div class="timeline" v-for="t in timeline" :key="t.id">
          <span class="icon fas" :class="t.icon"></span>
          <div class="timeline-content">
            <div class="card1">
              <div class="content">
                <h3 class="title">{{ t.id + ": " + t.title }}</h3>
                <div class="line"></div>
                <p class="description">
                  {{ t.description }}
                </p>
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
import { WorkTimeLine } from "~/data/HowWeWorkTimeLineData";
import { HowWeWorkTimeLine } from "~/types/data.types";

@Component
export default class workline extends Vue {
  /* Props */
  /* State */
  /* Data */
  timeline: HowWeWorkTimeLine[] = WorkTimeLine;
  /* Hooks */
  /* Methods */
  /* Computed */
  /* Watchers */
}
</script>

<style lang="scss" scoped>
body {
  p {
    font-size: 14px;
    color: white;
    letter-spacing: 0.5px;
  }
  h3 {
    font-size: 36px;
    display: inline-block;
  }
}
.card1 {
  position: relative;
  background-color: white;
  overflow: hidden;
  padding: 30px 10px 10px;
  border-radius: 10px;
}
.content {
  z-index: 2;
  position: relative;
  text-transform: capitalize;
  z-index: 2;
  transition: 0.5s;
}

.card1:hover:before {
  bottom: 0;
}

.card1:before {
  content: "";
  position: absolute;
  left: 0;
  bottom: calc(-100% + 5px);
  width: 100%;
  height: 100%;
  background-image: linear-gradient(135deg, #7480bc 0%, #404987 100%);
  z-index: 1;
  transition: 0.5s;
  color: white;
}
.main-timeline2 {
  padding-top: 50px;
  overflow: hidden;
  position: relative;
}
.timeline {
  perspective: 1000px;
  transition: all 0.3s linear;
}
.main-timeline2:before {
  content: "";
  width: 7px;
  height: 100%;
  background: #555f9c;
  margin: 0 auto;
  position: absolute;
  top: 93px;
  left: 0;
  right: 0;
}
.main-timeline2 .timeline {
  width: 50%;
  float: left;
  padding: 20px 60px;
  border-top: 7px solid #555f9c;
  border-right: 7px solid #555f9c;
  border-radius: 0 50px 0 0;
  position: relative;
  right: -4.3px;
}
.main-timeline2 .icon {
  display: block;
  width: 50px;
  height: 50px;
  line-height: 50px;
  border-radius: 50%;
  background: #555f9c;
  border: 1px solid #fff;
  text-align: center;
  font-size: 25px;
  color: #fff;
  box-shadow: 0 0 0 2px #555f9c;
  position: absolute;
  top: -30px;
  left: 0;
}

.timeline-content {
  display: block;
  border-radius: 20px;
  color: #fff;
  position: relative;
  background: #ffffff;
  border-radius: 7px;
  transition: all 0.3s linear;
  h3 {
    color: #555f9c;
  }
  p {
    color: #373b3f;
    font-size: 14px;
  }
}
.timeline-content:hover {
  background: #f8f8f9;
  box-shadow: none;
  /* transform: translateY(5px); */
  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.1);
  transform: translateZ(50px);

  h3,
  p {
    color: white;
  }
}

.main-timeline2 .timeline-content:after,
.main-timeline2 .timeline-content:before {
  content: "";
  display: block;
  width: 10px;
  height: 50px;
  border-radius: 10px;
  background: #555f9c;
  border: 1px solid #fff;
  position: absolute;
  top: -35px;
  left: 50px;
}
.main-timeline2 .timeline-content:after {
  left: auto;
  right: 50px;
}
.main-timeline2 .timeline-content:before,
.timeline-content:after {
  z-index: 3;
}
.main-timeline2 .title {
  font-size: 24px;
  margin: 0;
}
.line {
  width: 120px;
  height: 2px;
  background: lightgray;
  margin: 10px 0px;
}
.main-timeline2 .description {
  margin: 0 0 5px;
}
.main-timeline2 .timeline:nth-child(2n) {
  border-right: none;
  border-left: 7px solid #555f9c;
  border-radius: 30px 0 0;
  right: auto;
  left: -3.5px;
}
.main-timeline2 .timeline:nth-child(2n) .icon {
  left: auto;
  right: 0;
  box-shadow: 0 0 0 2px #555f9c;
}
.main-timeline2 .timeline:nth-child(2) {
  margin-top: 130px;
}
.main-timeline2 .timeline:nth-child(odd) {
  margin: -130px 0 30px;
}
.main-timeline2 .timeline:nth-child(even) {
  margin-bottom: 80px;
}
.main-timeline2 .timeline:first-child,
.main-timeline2 .timeline:last-child:nth-child(even) {
  margin: 0 0 30px;
}

@media only screen and (max-width: 767px) {
  .main-timeline2:before {
    left: 0;
    right: auto;
  }
  .main-timeline2 .timeline,
  .main-timeline2 .timeline:nth-child(even),
  .main-timeline2 .timeline:nth-child(odd) {
    width: 100%;
    float: none;
    padding: 20px 30px;
    margin: 0 0 30px;
    border-right: none;
    border-left: 7px solid #084772;
    border-radius: 30px 0 0;
    right: auto;
    left: 0;
  }
  .main-timeline2 .icon {
    left: auto;
    right: 0;
  }
}
@media only screen and (max-width: 480px) {
  .main-timeline2 .title {
    font-size: 18px;
  }
}
</style>

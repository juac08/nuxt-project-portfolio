<template>
  <section class="section-center">
    <AboutHero />
    <History />
    <div class="container">
      <div class="main-timeline">
        <div class="timeline" v-for="(t, index) in AboutData" :key="index">
          <div class="icon"></div>
          <div class="date-content">
            <div class="date-outer">
              <span class="date">
                <span class="month" v-show="t.month">{{ t.month }} Years</span>
                <span class="year" v-show="t.year">{{ t.year }}</span>
              </span>
            </div>
          </div>
          <div class="timeline-content">
            <h1
              class="title"
              style="border-bottom:2px solid lightgray; display:inline-block"
            >
              {{ t.title }}
            </h1>
            <p class="description">
              {{ t.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <Team />
    <WorkDemo />
    <div>
      <TimeLine />
    </div>
    <div>
      <Testimonial />
    </div>
    <div>
      <Subscribe />
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { AboutData } from "~/data/AboutTimeLineData";
import { AboutTimeline } from "~/types/data.types";
import AboutHero from "~/components/About/aboutHero.vue";
import History from "~/components/About/history.vue";
import Team from "~/components/About/team.vue";
import WorkDemo from "~/components/About/workDemo.vue";
import TimeLine from "~/components/About/workLine.vue";
import Subscribe from "~/components/About/subscribe.vue";
import Testimonial from "~/components/About/components/testimonial.vue";

@Component({
  head: {
    title: "Portfolio | About"
  },
  components: {
    AboutHero,
    History,
    Team,
    WorkDemo,
    TimeLine,
    Subscribe,
    Testimonial
  }
})
export default class index extends Vue {
  /* Props */
  /* State */
  /* Data */
  AboutData: AboutTimeline[] = AboutData;
  /* Hooks */
  /* Methods */
  /* Computed */
  /* Watchers */
}
</script>

<style scoped lang="scss">
body {
  background-color: #f7f7f7;
  margin-top: 20px;
  p {
    font-size: 14px;
    color: #373b3f;
  }
}

.container {
  margin: 4rem auto;
}
.main-timeline {
  position: relative;
}

.main-timeline:before {
  content: "";
  display: block;
  width: 7px;
  height: 100%;
  background: #404887;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.main-timeline .timeline {
  margin-bottom: 40px;
  position: relative;
}

.main-timeline .timeline:after {
  content: "";
  display: block;
  clear: both;
}

.main-timeline .icon {
  width: 30px;
  height: 30px;
  line-height: 30px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.description {
  min-width: 150px;
  text-align: center;
}
.main-timeline .icon:before,
.main-timeline .icon:after {
  content: "";
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  top: 10px;
  left: 0;
  transition: all 0.33s ease-out 0s;
}

.main-timeline .icon:before {
  background: #404887;
  left: -3px;
}

.main-timeline .icon:after {
  border: 2px solid rgb(172, 122, 7);
  left: 3px;
}

.main-timeline .timeline:hover .icon:before {
  left: 3px;
}

.main-timeline .timeline:hover .icon:after {
  left: -3px;
}

.main-timeline .date-content {
  width: 50%;
  float: left;
  margin-top: 22px;
  position: relative;
}
.timeline-content {
  max-width: 600px;
  width: 200px;
}
.main-timeline .date-content:before {
  content: "";
  width: 39.5%;
  height: 7px;
  background: #404887;
  margin: auto 0;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
}

.main-timeline .date-outer {
  width: 125px;
  height: 125px;
  font-size: 16px;
  text-align: center;
  margin: auto;
  z-index: 1;
}

.main-timeline .date-outer:before,
.main-timeline .date-outer:after {
  content: "";
  width: 125px;
  height: 125px;
  margin: 0 auto;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.33s ease-out 0s;
}

.main-timeline .date-outer:before {
  background: $color-primary;
  border: -9px solid #c6c5c8;
  left: -6px;
}

.main-timeline .date-outer:after {
  border: 2px solid #cea800;
  left: 6px;
}

.main-timeline .timeline:hover .date-outer:before {
  left: 6px;
}

.main-timeline .timeline:hover .date-outer:after {
  left: -6px;
}

.main-timeline .date {
  width: 100%;
  margin: auto;
  position: absolute;
  top: 27%;
  left: 0;
}

.main-timeline .month {
  font-size: 18px;
  font-weight: 700;
  color: white;
}

.main-timeline .year {
  display: block;
  font-size: 30px;
  font-weight: 700;
  color: white;
  line-height: 36px;
}

.main-timeline .timeline-content {
  width: 50%;
  padding: 20px 0 20px 50px;
  float: right;
}

.main-timeline .title {
  font-size: 19px;
  font-weight: 700;
  line-height: 24px;
  margin: 0 0 15px 0;
  color: $color-primary;
}

.main-timeline .description {
  margin-bottom: 0;
  text-align: left;
  /* color: $color-primary; */
}
.timeline:nth-child(2n) .description {
  text-align: right;
}

.main-timeline .timeline:nth-child(2n) .date-content {
  float: right;
}

.main-timeline .timeline:nth-child(2n) .date-content:before {
  left: 10px;
}

.main-timeline .timeline:nth-child(2n) .timeline-content {
  padding: 20px 50px 20px 0;
  text-align: right;
}

@media only screen and (max-width: 1200px) {
  .main-timeline .date-content {
    margin-top: 32px;
  }
}

@media only screen and (max-width: 991px) {
  .main-timeline .date-content {
    margin-top: 32px;
  }
  .main-timeline .date-content:before {
    width: 30.5%;
  }
  .main-timeline .timeline-content {
    padding: 10px 0 10px 30px;
  }
  .main-timeline .title {
    font-size: 17px;
  }
  .main-timeline .timeline:nth-child(2n) .timeline-content {
    padding: 10px 30px 10px 0;
  }
}

@media only screen and (max-width: 767px) {
  .main-timeline:before {
    margin: 0;
    left: 7px;
  }
  .main-timeline .timeline {
    margin-bottom: 20px;
  }
  .main-timeline .timeline:last-child {
    margin-bottom: 0;
  }
  .main-timeline .icon {
    margin: auto 0;
  }
  .main-timeline .date-content {
    width: 95%;
    float: right;
    margin-top: 0;
  }
  .main-timeline .date-content:before {
    display: none;
  }
  .main-timeline .date-outer {
    width: 110px;
    height: 110px;
  }
  .main-timeline .date-outer:before,
  .main-timeline .date-outer:after {
    width: 110px;
    height: 110px;
  }
  .main-timeline .date {
    top: 30%;
  }
  .main-timeline .year {
    font-size: 24px;
  }
  .main-timeline .timeline-content,
  .main-timeline .timeline:nth-child(2n) .timeline-content {
    width: 95%;
    text-align: center;
    padding: 10px 0;
  }
  .main-timeline .title {
    margin-bottom: 10px;
  }
}
</style>

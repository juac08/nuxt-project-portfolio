<template>
  <section class="section-center">
    <div>
      <div v-for="(integration, index) in integrations" :key="index">
        <div class="single-timeline-area integrations">
          <div class="timeline-date">
            <div class="integration-heading">
              <h3 style="color: #3f4784">{{ integration.title }}</h3>
              <p style="color: #3f4784">{{ integration.description }}</p>
            </div>
          </div>
          <div v-for="(i, index) in integration.integrations" :key="index">
            <div class="integration">
              <div class="single-timeline-content d-flex">
                <div class="timeline-icon">
                  <img
                    :src="i.image"
                    :alt="i.title"
                    style="width:30px; height:30px"
                  />
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
.section-center {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  max-width: 1250px;
}

.integrations {
  display: flex;
  align-items: center;
  justify-content: baseline;
  gap: 2rem;
  /* flex-wrap: wrap; */
  align-content: center;
}
.integration {
  transition: all 0.3s linear;
  max-width: 500px;
  height: auto;
}
.integration:hover {
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
}

.integration-heading {
  h3 {
    text-align: right;
  }
  p {
    text-align: center;
  }
}
.timeline-text {
  color: #3f4784;
  p {
    color: #3f4784;
  }
}
.single-timeline-area {
  position: relative;
  z-index: 1;
  padding-left: 180px;
}

.single-timeline-area .timeline-date {
  position: absolute;
  width: 170px;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  padding-right: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 891px) {
  .integrations {
    flex-wrap: wrap;
    align-content: center;
    margin: 0;
  }
}
@media only screen and (max-width: 575px) {
  .single-timeline-area {
    padding-left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .single-timeline-area .timeline-date {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    max-width: 400px;
    min-width: 350px;
  }
  .single-timeline-area .timeline-date::after {
    display: none;
  }
  .single-timeline-area .timeline-date::before {
    display: none;
  }
  /* .integration {
    justify-content: center;
  } */
  .integration-heading {
    border-bottom: 2px solid rgb(226, 226, 226);
    margin-left: 60px;
    h3 {
      font-size: 24px;
      text-align: center;
    }
    p {
      font-size: 14px;
    }
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
  border: 1px solid #ebebeb;
  max-width: 300px;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.1), 0 -2px 0 0 #404987;
  border-radius: 7px;
}

.single-timeline-area .single-timeline-content .timeline-icon {
  width: 30px;
  height: 30px;
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

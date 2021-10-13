<template>
  <div class="container block">
    <!-- <b-carousel
      v-model="slide"
      id="slide"
      :interval="4000"
      controls
      indicators
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide
        v-for="item in DataLatest"
        :key="item.id"
        :caption="item.name"
        :text="item.description"
        :img-src="item.img"
      >
      </b-carousel-slide>
    </b-carousel> -->

    <el-carousel :interval="3000" type="card" height="300px" arrow="always">
      <el-carousel-item v-for="item in DataLatest" :key="item.id">
        <nuxt-link :to="`/projects/${item.id}`">
          <el-tooltip
            class="item"
            effect="dark"
            content="Click for Details"
            placement="top-start"
          >
            <div class="card">
              <div class="imgbox">
                <img :src="item.img" />
              </div>
              <div class="content">
                <h3>{{ item.name }}</h3>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </el-tooltip>
        </nuxt-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { DataLatest } from "~/data/LatestData";
import { latestProjectData } from "~/types/data.types";

@Component
export default class index extends Vue {
  /* Props */
  /* State */
  /* Data */
  DataLatest: latestProjectData[] = DataLatest;
  slide = 0;
  /* Hooks */
  /* Methods */
  /* Computed */
  /* Watchers */
}
</script>

<style scoped lang="scss">
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
/* #slide {
  width: calc(100% + 30px);
  margin-top: -15px;
  margin-left: -15px;
  margin-right: -15px;
  max-height: 400px;
  overflow: hidden;
}
.carousel-inner {
  height: 400px;

  &::after {
    position: absolute;
    width: 100%;
    height: 400px;
    background-color: rgba(0, 0, 0, 0.35);
  }

  .carousel-item {
    height: 400px;
    overflow: hidden;

    .img-fluid {
      position: absolute;
      min-width: 1920px;
    }

    @media screen and (max-width: 1920px) {
      .img-fluid {
        left: 50%;
        margin-left: -960px;
      }
    }

    .carousel-caption {
      top: 50%;
      transform: translateY(-50%);
      bottom: auto;

      * {
        position: relative;
        z-index: 10;
      }

      .slide-shade {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 0;
        background-color: rgba($color: #000000, $alpha: 0.5);
      }
    }
  }
} */
</style>

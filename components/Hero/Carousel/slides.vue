<template>
  <div class="container block">
    <el-carousel :interval="3000" arrow="always">
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
  flex-wrap: wrap;
  align-content: center;
  max-width: 700px;
}
</style>

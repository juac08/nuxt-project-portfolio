<template>
  <transition name="fade">
    <div v-for="project in filter" :key="project.id" class="filter">
      <div class="image">
        <a :href="project.link">
          <div class="imbox">
            <img :src="project.img" :alt="project.name" />
          </div>
        </a>
      </div>
      <div class="description">
        <h1>{{ project.name }}</h1>
        <h2>{{ project.description }}</h2>
        <h3>Tags: {{ project.category }}</h3>
        <a :href="project.link">@Live</a>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde odit
          minima possimus distinctio eaque deserunt vel qui delectus ex, ipsa
          nihil nostrum odio! Alias pariatur corrupti fugit sequi omnis
          perferendis fugiat, animi veritatis ex, aliquam quam? Quisquam odit
          voluptates magnam!
        </p>
      </div>

      <appButton @click="backToHome" class="btn">Back To Home</appButton>
    </div>
  </transition>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import SingleProject from "~/components/Project/SingleProject.vue";
import { projects } from "~/data/ProjectArray";
import appButton from "~/UI/appButton.vue";

@Component({
  components: {
    SingleProject,
    appButton,
  },
  head: {
    title: "Portfolio | Project",
  },
})
export default class index extends Vue {
  /* Props */
  /* State */
  /* Data */
  projects = projects;
  /* Hooks */
  /* Methods */
  backToHome() {
    return this.$router.push("/");
  }

  /* Computed */
  get filter() {
    return this.projects.filter((p) => {
      return p.id == parseInt(this.$route.params.id);
    });
  }
  /* Watchers */
}
</script>

<style scoped>
</style>

<template>
  <section class="section-center">
    <div class="projects">
      <SingleProject
        v-for="project in projects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { projects } from "~/data/ProjectArray";
import SingleProject from "~/components/Project/SingleProject.vue";
import { projectData } from "~/types/data.types";

@Component({
  components: {
    SingleProject,
  },
})
export default class index extends Vue {
  /* Props */
  /* State */
  /* Data */
  projects: projectData[] = projects;
  /* Hooks */
  /* Methods */

  /* Computed */
  /* Watchers */
}
</script>

<style scoped>
</style>

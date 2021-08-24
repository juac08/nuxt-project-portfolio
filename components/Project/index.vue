<template>
  <section class="section-center">
    <div class="filter-button">
      <appButton class="btn" @click="filterProject('Vue')">Vue</appButton>|
      <appButton class="btn" @click="filterProject('React')">React</appButton>|
      <appButton class="btn" @click="filterProject('Nuxt')">Nuxt</appButton>|
      <appButton class="btn" @click="filterProject('Mern')">Mern</appButton>|
      <appButton class="btn" @click="filterProject('HTML')">HTML</appButton>|
      <appButton class="btn" @click="filterProject('')">All</appButton>
    </div>
    <transition name="fade" appear>
      <div class="projects">
        <SingleProject
          v-for="project in current"
          :key="project.id"
          :project="project"
        />
      </div>
    </transition>
  </section>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { projects } from "~/data/ProjectArray";
import SingleProject from "~/components/Project/SingleProject.vue";
import { projectData } from "~/types/data.types";
import appButton from "~/UI/appButton.vue";

@Component({
  components: {
    SingleProject,
    appButton,
  },
})
export default class index extends Vue {
  /* Props */
  /* State */
  /* Data */
  projects: projectData[] = projects;
  current: projectData[] = projects;
  /* Hooks */
  /* Methods */
  filterProject(value: string) {
    this.current = this.projects.filter((p) => {
      return p.description.match(value || "");
    });
  }
  /* Computed */
  /* Watchers */
}
</script>

<style scoped>
.filter-button {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
  gap: 4rem;
  border-bottom: 1px solid lightgray;
  max-width: 100%;
}
.btn {
  padding: 5px 5px;
  border-radius: 10px;
  margin-bottom: 1rem;
}
@media screen and (max-width: 850px) {
  .filter-button{
    flex-direction: column;
  }
}
</style>

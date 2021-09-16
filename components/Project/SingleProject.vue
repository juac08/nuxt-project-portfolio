<template>
  <b-collapse v-model="showProjects">
    <section class="card section-center">
      <nuxt-link :to="`/projects/${project.id}`">
        <div class="imgbox">
          <img
            class="image"
            src="@/static/images/react.png"
            v-if="project.category.match('React')"
          />
          <img
            class="image"
            src="@/static/images/html.jpeg"
            v-else-if="project.category.match('HTML')"
          />
          <img
            class="image"
            src="@/static/images/vueart.png"
            v-else-if="project.category.match('Vue')"
          />
          <img class="image" :src="project.img" v-else />

          <img
            src="@/static/images/new_logo.png"
            alt=""
            class="image-absolute"
          />
        </div>
        <div class="details">
          <h2>{{ project.name }}<br /></h2>
          <span>{{ project.description }}</span>
        </div>
      </nuxt-link>
    </section>
  </b-collapse>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { projectData } from "~/types/data.types";

@Component
export default class SingleProject extends Vue {
  /* Props */
  @Prop()
  project!: projectData;
  showProjects = !this.project.justAdded;
  /* State */
  /* Data */
  /* Hooks */
  mounted(): void {
    this.animateIn();
  }
  /* Methods */
  animateIn(): void {
    setTimeout(() => {
      this.showProjects = true;
      delete this.project.justAdded;
    }, 300);
  }
  /* Computed */
  /* Watchers */
}
</script>

<style scoped></style>

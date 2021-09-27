<template>
  <section class="section-center">
    <div class="select">
      <el-select
        v-model="value"
        @change="filterProject"
        :placeholder="placeholder"
        @focus="isFocusing = true"
        @blur="isFocusing = false"
        size="large"
        filterable
      >
        <el-option
          v-for="option in options"
          :key="option"
          :label="option"
          :value="option"
        >
        </el-option>
      </el-select>
    </div>
    <transition-group name="fade" class="projects">
      <SingleProject
        v-for="project in current"
        :key="project.id"
        :project="project"
      />
    </transition-group>
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
    appButton
  }
})
export default class index extends Vue {
  /* Props */
  /* State */
  /* Data */
  projects: projectData[] = projects;
  current: projectData[] = projects;
  options = ["React", "Vue", "Nuxt", "Mern", "All"];
  value = "";
  isFocusing = false;
  /* Hooks */
  /* Methods */
  filterProject(value: string) {
    this.current = this.projects.filter(p => {
      if (value === "All") {
        return this.projects;
      }
      return p.description.match(value);
    });
  }
  /* Computed */
  get placeholder(): string {
    return this.isFocusing ? "Search category" : "Choose category";
  }
  /* Watchers */
}
</script>

<style lang="scss">
.select {
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  .el-select {
    min-width: 340px;
  }
  .el-select .el-input {
    input {
      background: rgb(236, 245, 255);
      border: 1px solid rgb(130, 187, 253);
      padding: 20px;
    }
    input:hover {
      background: rgb(92, 171, 255);
    }

    .is-focus {
      outline: none;
    }

    input::placeholder {
      color: rgb(92, 171, 255);
      font-weight: 500;
      text-align: center;
    }
    input:hover::placeholder {
      color: white;
    }
  }
}
</style>
